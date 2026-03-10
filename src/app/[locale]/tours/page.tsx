import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight, Plane, Camera, Mountain, Ship } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

import { getTranslations } from 'next-intl/server'

export default async function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const tours = [
    {
      id: 1,
      title: 'Istanbul Bosphorus Cruise',
      location: 'Istanbul',
      duration: '3 hours',
      price: 89,
      rating: 4.8,
      reviews: 156,
      image: '/tours/istanbul-bogaz-turu.jpeg',
      category: 'cruise',
      difficulty: 'easy',
      groupSize: '2-20',
      highlights: ['Bosphorus Bridge', 'Dolmabahçe Palace', 'Ortaköy Mosque'],
      description: 'Experience the magic of Istanbul from the water with our luxury Bosphorus cruise including dinner and entertainment.'
    },
    {
      id: 2,
      title: 'Cappadocia Hot Air Balloon',
      location: 'Cappadocia',
      duration: '1 day',
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg',
      category: 'adventure',
      difficulty: 'moderate',
      groupSize: '4-16',
      highlights: ['Sunrise Flight', 'Fairy Chimneys', 'Underground Cities'],
      description: 'Float above the magical landscapes of Cappadocia in our hot air balloon at sunrise.'
    },
    {
      id: 3,
      title: 'Ephesus Ancient City Tour',
      location: 'Izmir',
      duration: 'Full day',
      price: 75,
      rating: 4.7,
      reviews: 198,
      image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg',
      category: 'cultural',
      difficulty: 'easy',
      groupSize: '2-15',
      highlights: ['Library of Celsus', 'Great Theatre', 'Temple of Artemis'],
      description: 'Discover the ancient wonders of Ephesus with expert guides and skip-the-line tickets.'
    },
    {
      id: 4,
      title: 'Pamukkale Thermal Pools',
      location: 'Pamukkale',
      duration: 'Full day',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Pamukkale Thermal Pools/Pamukkale Thermal Pools.jpeg',
      category: 'nature',
      difficulty: 'easy',
      groupSize: '2-25',
      highlights: ['Travertine Terraces', 'Hierapolis', 'Cleopatra Pool'],
      description: 'Relax in the healing thermal waters of Pamukkale and explore ancient Hierapolis.'
    },
    {
      id: 5,
      title: 'Blue Voyage Gulet Cruise',
      location: 'Bodrum',
      duration: '3 days',
      price: 450,
      rating: 4.9,
      reviews: 167,
      image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg',
      category: 'cruise',
      difficulty: 'easy',
      groupSize: '2-12',
      highlights: ['Private Gulet', 'Swimming Bays', 'Turkish Cuisine'],
      description: 'Sail the turquoise waters of the Aegean Sea on our traditional wooden gulet.'
    },
    {
      id: 6,
      title: 'Sapanca Maşukiye Tour',
      location: 'Sapanca',
      duration: '1 day',
      price: 180,
      rating: 4.8,
      reviews: 125,
      image: '/tours/Sapanca Masukiye/Sapanca Masukiye.jpeg',
      category: 'nature',
      difficulty: 'easy',
      groupSize: '2-15',
      highlights: ['Sapanca Lake', 'Maşukiye Forest', 'Nature Walk'],
      description: 'Enjoy a day in paradise near Istanbul with our guided Sapanca tour.'
    }
  ]

  const categories = [
    { value: 'all', label: t('ToursPage.allCategories'), icon: Plane },
    { value: 'cultural', label: t('ToursPage.categoryCultural'), icon: Camera },
    { value: 'adventure', label: t('ToursPage.categoryAdventure'), icon: Mountain },
    { value: 'cruise', label: t('ToursPage.categoryCruise'), icon: Ship },
    { value: 'nature', label: t('ToursPage.categoryNature'), icon: Mountain },
  ]

  const difficulties = [
    { value: 'all', label: t('ToursPage.allLevels') },
    { value: 'easy', label: t('ToursPage.difficultyEasy') },
    { value: 'moderate', label: t('ToursPage.difficultyModerate') },
    { value: 'challenging', label: t('ToursPage.difficultyChallenging') },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-secondary-600 to-secondary-800">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Tours Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-end justify-center text-center text-white px-4 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              {t('ToursPage.heroTitle')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {t('ToursPage.heroSubtitle')}
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
                placeholder={t('ToursPage.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>

            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Tour Destination">
              <option>{t('ToursPage.allDestinations')}</option>
              <option>Istanbul</option>
              <option>Cappadocia</option>
              <option>Izmir</option>
              <option>Bodrum</option>
              <option>Antalya</option>
            </select>

            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Tour Category">
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Tour Difficulty">
              {difficulties.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>

            <button className="btn-secondary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              {t('ToursPage.searchButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {t('ToursPage.resultsCount', { count: tours.length })}
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">{t('ToursPage.sortPopular')}</button>
            <button className="text-gray-600 hover:text-gray-900">{t('ToursPage.sortPriceLowHigh')}</button>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-600 capitalize">{tour.category}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-600">${tour.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tour.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tour.rating}</span>
                    <span className="text-gray-600 text-sm">({tour.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    {tour.difficulty}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">+{tour.highlights.length - 2} more</span>
                    )}
                  </div>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    {t('ToursPage.viewDetails')}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-secondary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            {t('ToursPage.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('ToursPage.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('ToursPage.ctaCustomTour')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-600 transition-colors">
              {t('ToursPage.ctaContactExpert')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}