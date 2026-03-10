import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

import { getTranslations } from 'next-intl/server'

export default async function TransfersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const transfers = [
    {
      id: 1,
      title: 'Istanbul Airport Transfer',
      from: 'Istanbul Airport (IST)',
      to: 'City Center',
      price: 45,
      duration: '45 min',
      image: '/transfers/istanbul-airport.jpg',
      vehicle: 'Mercedes-Benz V-Class',
      features: ['WiFi', 'Bottled Water', 'Professional Driver']
    },
    {
      id: 2,
      title: 'Sabiha Gökçen Airport Transfer',
      from: 'Sabiha Gökçen Airport (SAW)',
      to: 'City Center',
      price: 55,
      duration: '60 min',
      image: '/transfers/sabiha-airport.jpg',
      vehicle: 'Mercedes-Benz S-Class',
      features: ['WiFi', 'Bottled Water', 'Professional Driver']
    },
    {
      id: 3,
      title: 'Antalya Airport Transfer',
      from: 'Antalya Airport (AYT)',
      to: 'Beach Resorts',
      price: 65,
      duration: '90 min',
      image: '/transfers/Antalya Airport Transfer.jpeg',
      vehicle: 'Mercedes-Benz E-Class',
      features: ['WiFi', 'Bottled Water', 'Professional Driver']
    },
    {
      id: 4,
      title: 'Bodrum Airport Transfer',
      from: 'Bodrum Airport (BJV)',
      to: 'City Center',
      price: 50,
      duration: '45 min',
      image: '/transfers/Bodrum Airport Transfer.jpeg',
      vehicle: 'Mercedes-Benz V-Class',
      features: ['WiFi', 'Bottled Water', 'Professional Driver']
    },
    {
      id: 5,
      title: 'Cappadocia Airport Transfer',
      from: 'Cappadocia Airport (NAV)',
      to: 'City Center',
      price: 75,
      duration: '75 min',
      image: '/transfers/Kapadokya Havalimanı Transferi.jpeg',
      vehicle: 'Mercedes-Benz V-Class',
      features: ['WiFi', 'Bottled Water', 'Professional Driver']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="VIP Transfer Services"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-end justify-center text-center text-white px-4 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              {t('TransfersPage.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('TransfersPage.heroSubtitle')}
            </p>
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
                placeholder={t('TransfersPage.searchFromPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('TransfersPage.searchToPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder={t('TransfersPage.searchDatePlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                title="Number of passengers"
              >
                <option>{t('TransfersPage.passengers1_4')}</option>
                <option>{t('TransfersPage.passengers5_8')}</option>
                <option>{t('TransfersPage.passengers9_plus')}</option>
              </select>
            </div>

            <button className="btn-primary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              {t('TransfersPage.searchButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {t('TransfersPage.resultsCount', { count: transfers.length })}
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">{t('TransfersPage.sortRecommended')}</button>
            <button className="text-gray-600 hover:text-gray-900">{t('TransfersPage.sortPriceLowHigh')}</button>
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
                  <span>{t('TransfersPage.passengers1_4')}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {transfer.vehicle} with {transfer.features.join(', ')}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{t('TransfersPage.available24_7')}</span>
                  </div>
                  <a
                    href={`https://wa.me/905545812034?text=${encodeURIComponent(`BOOK NOW - ${transfer.title}\n\n📅 Date: \n⏰ Time: \n👥 Passengers: \n📍 From: ${transfer.from}\n📍 To: ${transfer.to}\n\nPlease fill in the details above and we'll confirm your booking.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    {t('TransfersPage.bookNow')}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            {t('TransfersPage.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('TransfersPage.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('TransfersPage.getQuote')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              {t('TransfersPage.contactTeam')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}