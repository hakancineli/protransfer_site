#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const outRoot = path.resolve(__dirname, '..', 'public', 'hotels')

const HOTELS = [
  {
    name: 'Movenpick Hotel Istanbul',
    url: 'https://movenpick.accor.com/en/europe/turkey/istanbul.html',
    dir: 'Movenpick Hotel Istanbul',
    base: 'movenpick',
  },
  {
    name: 'Grand Hyatt Istanbul',
    url: 'https://www.hyatt.com/grand-hyatt/en-US/istan-grand-hyatt-istanbul/rooms',
    dir: 'Grand Hyatt Istanbul',
    base: 'grand-hyatt',
  },
  {
    name: 'Conrad Istanbul',
    url: 'https://www.hilton.com/en/hotels/isthcci-conrad-istanbul-bosphorus/rooms/',
    dir: 'Conrad Istanbul',
    base: 'conrad',
  },
  {
    name: 'Istanbul Marriott Hotel',
    url: 'https://www.marriott.com/en-us/hotels/istdt-istanbul-marriott-hotel-sisli/rooms/suites/',
    dir: 'Istanbul Marriott Hotel',
    base: 'istanbul-marriott',
  },
  {
    name: 'CVK Park Bosphorus Hotel Istanbul',
    url: 'https://www.cvkhotelsandresorts.com/cvk-park-bosphorus-hotel-istanbul/rooms',
    dir: 'CVK Park Bosphorus Hotel Istanbul',
    base: 'cvk-park',
  },
  {
    name: 'W Istanbul',
    url: 'https://w-hotels.marriott.com/',
    dir: 'W Istanbul',
    base: 'w-istanbul',
  },
  {
    name: 'Four Seasons Istanbul',
    url: 'https://www.fourseasons.com/istanbul/accommodations/',
    dir: 'Four Seasons Istanbul',
    base: 'four-seasons',
  },
  {
    name: 'Ciragan Palace Kempinski',
    url: 'https://www.kempinski.com/en/ciragan-palace',
    dir: 'Ciragan Palace Kempinski',
    base: 'ciragan',
  },
]

const MAX_PER_HOTEL = 5
const MIN_BYTES = 20000

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function absoluteUrl(src, baseUrl) {
  try {
    return new URL(src, baseUrl).toString()
  } catch {
    return null
  }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function downloadToFile(url, filePath, page) {
  try {
    const res = await page.goto(url, { waitUntil: 'networkidle2' })
    const buf = await res.buffer()
    await fs.writeFile(filePath, buf)
    try {
      const stat = await fs.stat(filePath)
      if (stat.size < MIN_BYTES) {
        await fs.unlink(filePath)
        return false
      }
    } catch {}
    return true
  } catch (e) {
    console.error('Download failed', url, e.message)
    return false
  }
}

function unique(arr) {
  return Array.from(new Set(arr))
}

async function extractImageUrls(page, baseUrl) {
  const urls = await page.evaluate(() => {
    const srcs = []
    // <img src> and srcset
    document.querySelectorAll('img').forEach(img => {
      if (img.src) srcs.push(img.src)
      const ss = img.srcset || ''
      ss.split(',').forEach(p => {
        const u = p.trim().split(' ')[0]
        if (u) srcs.push(u)
      })
    })
    // CSS background-image
    document.querySelectorAll('*').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundImage
      if (bg && bg !== 'none') {
        const m = bg.match(/url\(("|')?(.*?)("|')?\)/)
        if (m && m[2]) srcs.push(m[2])
      }
    })
    return srcs
  })

  const absolutes = unique(urls.map(u => absoluteUrl(u, baseUrl)).filter(Boolean))

  // Prefer jpg/jpeg; fallback to large images with width hints if needed
  const jpgs = absolutes.filter(u => /\.(jpg|jpeg)(\?|#|$)/i.test(u))
  const candidates = jpgs.length ? jpgs : absolutes

  // Deduplicate by origin/path sans query
  return unique(
    candidates.map(u => {
      try {
        const nu = new URL(u)
        nu.hash = ''
        return nu.toString()
      } catch {
        return u
      }
    })
  )
}

async function fetchBingImageUrls(page, query) {
  const q = encodeURIComponent(`${query} room Istanbul`)
  const url = `https://www.bing.com/images/search?q=${q}&form=HDRSC2&first=1&tsc=ImageHoverTitle`
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await delay(2000)
  // Try parsing murl from result cards
  const urls = await page.evaluate(() => {
    const candidates = []
    document.querySelectorAll('a.iusc').forEach(a => {
      const m = a.getAttribute('m')
      if (!m) return
      try {
        const obj = JSON.parse(m)
        if (obj && obj.murl) candidates.push(obj.murl)
      } catch {}
    })
    // Fallback: collect image srcs
    document.querySelectorAll('img.mimg, img').forEach(img => {
      if (img.src) candidates.push(img.src)
      const ss = img.srcset || ''
      ss.split(',').forEach(p => {
        const u = p.trim().split(' ')[0]
        if (u) candidates.push(u)
      })
    })
    return Array.from(new Set(candidates))
  })
  return urls.filter(u => /(room|guest|suite|bed)/i.test(u) && /\.(jpg|jpeg)(\?|#|$)/i.test(u))
}

async function run() {
  const browser = await puppeteer.launch({ headless: true })
  try {
    const filter = (process.env.HOTEL || '').toLowerCase()
    const list = filter ? HOTELS.filter(h => h.name.toLowerCase().includes(filter)) : HOTELS
    for (const hotel of list) {
      const page = await browser.newPage()
      console.log('Opening', hotel.name, hotel.url)
      await page.goto(hotel.url, { waitUntil: 'domcontentloaded', timeout: 60000 })
      // Allow lazy content to load
      await delay(2500)

      const urls = await extractImageUrls(page, hotel.url)
      console.log('Found images:', urls.length)

      const targetDir = path.join(outRoot, hotel.dir)
      await ensureDir(targetDir)

      let downloaded = 0
      for (const u of urls) {
        if (downloaded >= MAX_PER_HOTEL) break
        if (!/\.(jpg|jpeg)(\?|#|$)/i.test(u)) continue
        const index = downloaded + 1
        const filePath = path.join(targetDir, `${hotel.base}-${index}.jpg`)
        console.log('Downloading', u, '->', path.relative(process.cwd(), filePath))
        const ok = await downloadToFile(u, filePath, page)
        if (ok) downloaded++
      }

      if (downloaded < MAX_PER_HOTEL) {
        console.warn(
          downloaded === 0
            ? `No JPGs from official site for ${hotel.name} - trying Bing Images fallback for room photos...`
            : `Only ${downloaded} images from official site for ${hotel.name} - topping up with Bing Images...`
        )
        const bingUrls = await fetchBingImageUrls(page, hotel.name)
        console.log('Bing candidates:', bingUrls.length)
        for (const u of bingUrls) {
          if (downloaded >= MAX_PER_HOTEL) break
          const index = downloaded + 1
          const filePath = path.join(targetDir, `${hotel.base}-${index}.jpg`)
          console.log('Downloading (bing)', u, '->', path.relative(process.cwd(), filePath))
          const ok = await downloadToFile(u, filePath, page)
          if (ok) downloaded++
        }
      }

      if (downloaded > 0) {
        console.log('Downloaded', downloaded, 'images for', hotel.name)
      } else {
        console.warn('Still no images for', hotel.name, '- please provide direct URLs or a ZIP as fallback')
      }

      await page.close()
    }
  } finally {
    await browser.close()
  }
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
