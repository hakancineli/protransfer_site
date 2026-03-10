#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const outRoot = path.resolve(__dirname, '..', 'public', 'images', 'destinations')

let CITIES = [
  { name: 'Istanbul', base: 'istanbul', dir: 'Istanbul' },
  { name: 'Trabzon', base: 'trabzon', dir: 'Trabzon' },
  { name: 'Antalya', base: 'antalya', dir: 'Antalya' },
  { name: 'Bursa', base: 'bursa', dir: 'Bursa' },
]

const MAX_PER_CITY = 5
const delay = (ms) => new Promise((res) => setTimeout(res, ms))

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function downloadToFile(url, filePath, page) {
  try {
    const res = await page.goto(url, { waitUntil: 'networkidle2' })
    const buf = await res.buffer()
    await fs.writeFile(filePath, buf)
    return true
  } catch (e) {
    console.error('Download failed', url, e.message)
    return false
  }
}

async function fetchBingImageUrls(page, query) {
  const q = encodeURIComponent(`${query} Turkey city skyline attractions beach old town room not people`)
  const url = `https://www.bing.com/images/search?q=${q}&form=HDRSC2&first=1&tsc=ImageHoverTitle`
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await delay(1500)
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
  // prefer jpg/jpeg and high-res
  return urls.filter(u => /\.(jpg|jpeg)(\?|#|$)/i.test(u))
}

async function run() {
  const browser = await puppeteer.launch({ headless: true })
  try {
    const only = (process.env.CITY || '').toLowerCase()
    if (only) {
      CITIES = CITIES.filter(c => c.name.toLowerCase() === only)
      if (CITIES.length === 0) {
        console.error('CITY filter did not match any city:', only)
        process.exit(1)
      }
    }
    for (const city of CITIES) {
      const page = await browser.newPage()
      console.log('Searching images for', city.name)
      const urls = await fetchBingImageUrls(page, `${city.name} city`)
      console.log('Candidates:', urls.length)

      const targetDir = path.join(outRoot, city.dir)
      await ensureDir(targetDir)

      let downloaded = 0
      for (const u of urls) {
        if (downloaded >= MAX_PER_CITY) break
        const index = downloaded + 1
        const filePath = path.join(targetDir, `${city.base}-${index}.jpg`)
        const ok = await downloadToFile(u, filePath, page)
        // skip tiny files
        if (ok) {
          try {
            const stat = await fs.stat(filePath)
            if (stat.size < 20000) {
              await fs.unlink(filePath)
              continue
            }
          } catch {}
          downloaded++
          console.log('Saved', filePath)
        }
      }

      if (downloaded === 0) {
        console.warn('No images saved for', city.name)
      } else {
        console.log('Downloaded', downloaded, 'images for', city.name)
      }

      await page.close()
    }
  } finally {
    await browser.close()
  }
}

run().catch(err => { console.error(err); process.exit(1) })
