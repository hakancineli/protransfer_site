import { Search, Clock, Star, ChevronRight, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-gray-900 group/experiences">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/antalya.jpg"
            alt="Memorable Experiences in Turkey"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/experiences:scale-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
        </div>
        <div className="relative z-30 h-full flex flex-col justify-end container mx-auto px-4 pb-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              Travel Blog & Guides
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 font-serif leading-none tracking-tight animate-fade-in">
              {t('Experience.heroTitle')}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl group cursor-pointer h-[500px]">
          <Image
            src="/transfers/Antalya Airport/Antalya Airport Transfer.jpeg"
            alt="Featured Post"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <span className="bg-secondary-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Featured</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Ultimate Guide to Turkish Riviera</h2>
            <p className="text-lg opacity-90 max-w-2xl mb-6">Discover the most beautiful hidden bays and luxury resorts along the turquoise coast of Turkey.</p>
            <Link href="/experiences/1" className="flex items-center gap-2 font-semibold hover:gap-3 transition-all">
              {t('Experience.readMore')} <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold font-serif">{t('Experience.recentPosts')}</h2>
          <Link href="#all-posts" className="text-secondary-600 font-semibold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <Image
                  src={`/tours/Mavi Yolculuk Gulet Turu/Blue Voyage ${i}.jpeg`}
                  alt="Post image"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-secondary-600 font-bold text-sm uppercase mb-3 block">Travel Tips</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary-600 transition-colors">Best Time to Visit Istanbul</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">Plan your perfect trip with our comprehensive guide on seasonal highlights and events in Turkey's largest city.</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Oct 24, 2023</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/tours/Sapanca Masukiye/Sapanca Masukiye.jpeg"
            alt="Join our travel community"
            fill
            className="object-cover opacity-60"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">
            {t('Experience.newsletterTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light leading-relaxed">
            {t('Experience.newsletterDescription')}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder={t('Experience.emailPlaceholder')}
              className="flex-1 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              required
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-105 shadow-2xl">
              {t('Experience.subscribeButton')}
            </button>
          </form>
        </div>
      </section>

      {/* All Posts Section */}
      <div id="all-posts" className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <h2 className="text-4xl font-bold font-serif">{t('Experience.allExperiences')}</h2>
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search stories..."
                className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-secondary-500 outline-none min-w-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-72 overflow-hidden rounded-3xl mb-8">
                <Image
                  src={`/tours/Mavi Yolculuk Gulet Turu/Blue Voyage ${i}.jpeg`}
                  alt="Post thumbnail"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {i % 2 === 0 ? 'Adventure' : 'Lifestyle'}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary-600 transition-colors">Exploring the Hidden Gems of the Lycian Way</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">A journey through ancient ruins and turquoise waters on Turkey's most famous hiking trail...</p>
              <div className="flex items-center justify-between text-sm text-gray-500 font-medium border-t border-gray-100 pt-6">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min read</span>
                <Link href={`/experiences/${i}`} className="text-secondary-600 flex items-center gap-1 font-bold">
                  Read Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 border-2 border-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  )
}