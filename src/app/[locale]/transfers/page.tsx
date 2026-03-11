import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

import { getTranslations } from 'next-intl/server'

export default async function TransfersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'TransfersPage' })
  const transfers = [
    {
      id: 1,
      title: 'Istanbul Airport Transfer',
      from: 'IST Airport',
      to: 'City Center',
      price: 45,
      duration: '60 min',
      vehicle: 'Mercedes Vito',
      image: '/transfers/istanbul-airport.jpg',
      features: ['Free WiFi', 'Water', 'A/C']
    },
    {
      id: 2,
      title: 'Sabiha Gökçen Transfer',
      from: 'SAW Airport',
      to: 'City Center',
      price: 55,
      duration: '90 min',
      vehicle: 'Mercedes Vito',
      image: '/transfers/istanbul-airport.jpg',
      features: ['Free WiFi', 'Water', 'A/C']
    },
    {
      id: 3,
      title: 'Antalya Airport Transfer',
      from: 'AYT Airport',
      to: 'Belek',
      price: 40,
      duration: '45 min',
      vehicle: 'VW Caravelle',
      image: '/transfers/Antalya Airport/Antalya Airport Transfer.jpeg',
      features: ['Free WiFi', 'Water', 'A/C']
    },
    {
      id: 4,
      title: 'Bodrum Airport Transfer',
      from: 'BJV Airport',
      to: 'Yalıkavak',
      price: 50,
      duration: '50 min',
      vehicle: 'Mercedes Vito',
      image: '/transfers/istanbul-airport.jpg',
      features: ['Free WiFi', 'Water', 'A/C']
    },
    {
      id: 5,
      title: 'Dalaman Airport Transfer',
      from: 'DLM Airport',
      to: 'Fethiye',
      price: 45,
      duration: '60 min',
      vehicle: 'VW Caravelle',
      image: '/transfers/istanbul-airport.jpg',
      features: ['Free WiFi', 'Water', 'A/C']
    },
    {
      id: 6,
      title: 'Izmir Airport Transfer',
      from: 'ADB Airport',
      to: 'Çeşme',
      price: 60,
      duration: '75 min',
      vehicle: 'Mercedes Vito',
      image: '/transfers/istanbul-airport.jpg',
      features: ['Free WiFi', 'Water', 'A/C']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-gray-900 group/transfers">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="VIP Transfer Services in Turkey"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/transfers:scale-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
        </div>
        <div className="relative z-30 h-full flex flex-col justify-end container mx-auto px-4 pb-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              {t('heroSubtitle')}
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 font-serif leading-none tracking-tight animate-fade-in">
              {t('heroTitle')}
            </h1>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('searchFromPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('searchToPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder={t('searchDatePlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                title="Number of passengers"
              >
                <option>{t('passengers1_4')}</option>
                <option>{t('passengers5_8')}</option>
                <option>{t('passengers9_plus')}</option>
              </select>
            </div>

            <button className="btn-primary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              {t('searchButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {t('resultsCount', { count: transfers.length })}
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">{t('sortRecommended')}</button>
            <button className="text-gray-600 hover:text-gray-900">{t('sortPriceLowHigh')}</button>
          </div>
        </div>
      </div>

      {/* Transfers Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transfers.map((transfer) => (
            <div key={transfer.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={transfer.image}
                  alt={transfer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">${transfer.price}€</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{transfer.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{transfer.from} → {transfer.to}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-600 text-sm">(127 reviews)</span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{transfer.duration}</span>
                  <Users className="w-4 h-4 ml-2" />
                  <span>{t('passengers1_4')}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {transfer.vehicle} with {transfer.features.join(', ')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{t('available24_7')}</span>
                  </div>
                  <a
                    href={`https://wa.me/905545812034?text=${encodeURIComponent(`BOOK NOW - ${transfer.title}\n\n📅 Date: \n⏰ Time: \n👥 Passengers: \n📍 From: ${transfer.from}\n📍 To: ${transfer.to}\n\nPlease fill in the details above and we'll confirm your booking.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    {t('bookNow')}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/transfers/istanbul-airport.jpg"
            alt="VIP Transfer CTA"
            fill
            className="object-cover opacity-60"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light leading-relaxed">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl">
              {t('getQuote')}
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all hover:scale-105 shadow-2xl">
              {t('contactTeam')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}