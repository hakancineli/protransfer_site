import { Search, Calendar, Users, Clock, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function FlightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const flights = [
    {
      id: 1,
      airline: 'Turkish Airlines',
      flightNumber: 'TK1234',
      from: 'Istanbul (IST)',
      to: 'Antalya (AYT)',
      departure: '08:30',
      arrival: '10:15',
      price: 125,
      duration: '1h 45m',
      aircraft: 'Boeing 737-800',
      class: 'Economy',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 2,
      airline: 'Pegasus Airlines',
      flightNumber: 'PC5678',
      from: 'Istanbul (IST)',
      to: 'Cappadocia (NAV)',
      departure: '10:00',
      arrival: '11:30',
      price: 95,
      duration: '1h 30m',
      aircraft: 'Airbus A320',
      class: 'Economy',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 3,
      airline: 'SunExpress',
      flightNumber: 'XQ9456',
      from: 'Istanbul (IST)',
      to: 'Bodrum (BJV)',
      departure: '14:00',
      arrival: '15:30',
      price: 85,
      duration: '1h 30m',
      aircraft: 'Boeing 737-700',
      class: 'Economy',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 4,
      airline: 'Turkish Airlines',
      flightNumber: 'TK2345',
      from: 'Istanbul (IST)',
      to: 'Izmir (ADB)',
      departure: '16:00',
      arrival: '17:15',
      price: 110,
      duration: '1h 15m',
      aircraft: 'Airbus A321',
      class: 'Business',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 5,
      airline: 'AnadoluJet',
      flightNumber: 'AJ8901',
      from: 'Istanbul (IST)',
      to: 'Trabzon (TZX)',
      departure: '18:00',
      arrival: '19:30',
      price: 95,
      duration: '1h 30m',
      aircraft: 'Boeing 737-800',
      class: 'Economy',
      image: '/hotels/Flights/qatararways.jpeg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-gray-900 group/flights">
        <div className="absolute inset-0">
          <Image
            src="/hotels/Flights/qatararways.jpeg"
            alt="Luxury Flight Booking"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/flights:scale-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
        </div>
        <div className="relative z-30 h-full flex flex-col justify-end container mx-auto px-4 pb-20">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 font-serif leading-none tracking-tight animate-fade-in">
              {t('FlightsPage.heroTitle')}
            </h1>
            <p className="text-xl md:text-3xl opacity-90 max-w-2xl leading-relaxed font-light animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('FlightsPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('FlightsPage.fromPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('FlightsPage.toPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder={t('FlightsPage.departurePlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder={t('FlightsPage.returnPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Passengers">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3+ Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>

            <div className="relative">
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Class">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

            <button className="btn-secondary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              {t('FlightsPage.searchButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {t('FlightsPage.resultsCount', { count: flights.length })}
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">{t('FlightsPage.sortRecommended')}</button>
            <button className="text-gray-600 hover:text-gray-900">{t('FlightsPage.sortPriceLowHigh')}</button>
          </div>
        </div>
      </div>

      {/* Flights Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flights.map((flight) => (
            <div key={flight.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={flight.image}
                  alt={flight.airline}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-600">${flight.price}€</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{flight.airline}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span>Flight {flight.flightNumber}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-600 text-sm">(127 reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{flight.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 ml-2" />
                    <span>1-4 Passengers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{flight.class}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>{flight.from}</span>
                    <span>→</span>
                    <span>{flight.to}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{flight.aircraft}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {flight.airline} offers comfortable seating and excellent service for your journey from {flight.from} to {flight.to}.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Available 24/7</span>
                  </div>
                  <a
                    href={`https://wa.me/905545812034?text=Hello, I would like to make a reservation for ${flight.airline} ${flight.flightNumber}. ${flight.from} -> ${flight.to}, ${flight.departure} - ${flight.arrival}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    Book Now
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
            src="/hotels/Flights/qatararways.jpeg"
            alt="Premium Flight Service"
            fill
            className="object-cover opacity-60"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">
            {t('FlightsPage.ctaTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light leading-relaxed">
            {t('FlightsPage.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/905545812034?text=Hello, I would like to book a flight."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl"
            >
              {t('FlightsPage.ctaBookButton')}
            </a>
            <a
              href="https://wa.me/905545812034?text=Hello, I would like to get information about flights."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all hover:scale-105 shadow-2xl"
            >
              {t('FlightsPage.ctaContactButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}