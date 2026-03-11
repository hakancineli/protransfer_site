import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import React from 'react'
import { getTranslations } from 'next-intl/server'

// Popular cities
const cities = [
  {
    name: 'Istanbul',
    description: 'Historic peninsula and Bosphorus view luxury hotels',
    image: '/images/destinations/istanbul.jpg',
    hotelCount: 10,
    link: '/hotels/city/istanbul'
  },
  {
    name: 'Trabzon',
    description: 'Pearl of the Black Sea, hotels surrounded by natural beauty',
    image: '/images/destinations/trabzon.jpg',
    hotelCount: 10,
    link: '/hotels/city/trabzon'
  },
  {
    name: 'Antalya',
    description: 'Mediterranean paradise, beach and resort hotels',
    image: '/images/destinations/antalya.jpg',
    hotelCount: 10,
    link: '/hotels/city/antalya'
  },
  {
    name: 'Bursa',
    description: 'Thermal and convention hotels at the foothills of Uludağ',
    image: '/images/destinations/bursa.jpg',
    hotelCount: 10,
    link: '/hotels/city/bursa'
  }
]

// All hotels from all cities
const allCityHotels = [
  // Istanbul Hotels
  {
    id: 1,
    name: 'The Ritz-Carlton Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.8,
    reviews: 324,
    price: 8500,
    image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Experience timeless elegance blended with modern sophistication in the heart of Istanbul.',
  },
  {
    id: 2,
    name: 'Swissotel The Bosphorus',
    location: 'Istanbul, Turkey',
    rating: 4.7,
    reviews: 256,
    price: 7200,
    image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar', 'gym', 'restaurant'],
    description: 'Bosphorus-view chic hotel with world-class amenities.',
  },
  {
    id: 3,
    name: 'CVK Park Bosphorus Hotel',
    location: 'Istanbul, Turkey',
    rating: 4.7,
    reviews: 289,
    price: 6800,
    image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
    description: 'Modern and chic hotel with Bosphorus views',
  },
  {
    id: 4,
    name: 'Mövenpick Hotel Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.6,
    reviews: 198,
    price: 5500,
    image: '/hotels/Movenpick Hotel Istanbul/movenpick-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Contemporary hotel with Swiss hospitality standards.',
  },
  {
    id: 5,
    name: 'Grand Hyatt Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.7,
    reviews: 245,
    price: 7500,
    image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'Luxury hotel in the heart of Istanbul\'s business center.',
  },
  {
    id: 6,
    name: 'Conrad Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.6,
    reviews: 189,
    price: 6200,
    image: '/hotels/Conrad Istanbul/conrad-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Modern luxury hotel with Bosphorus views.',
  },
  {
    id: 7,
    name: 'Istanbul Marriott Hotel',
    location: 'Istanbul, Turkey',
    rating: 4.5,
    reviews: 167,
    price: 5800,
    image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Comfortable hotel with Marriott standards.',
  },
  {
    id: 8,
    name: 'W Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.7,
    reviews: 203,
    price: 8000,
    image: '/hotels/W Istanbul/w-istanbul-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'Chic luxury hotel with contemporary design.',
  },
  {
    id: 9,
    name: 'Four Seasons Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.9,
    reviews: 267,
    price: 9200,
    image: '/hotels/Four Seasons Istanbul/four-seasons-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Ultimate luxury in historic Sultanahmet.',
  },
  {
    id: 10,
    name: 'Çırağan Palace Kempinski',
    location: 'Istanbul, Turkey',
    rating: 4.9,
    reviews: 312,
    price: 12000,
    image: '/hotels/Ciragan Palace Kempinski/ciragan-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Ottoman palace converted into a luxury hotel.',
  },
  // Trabzon Hotels
  {
    id: 11,
    name: 'Zorlu Grand Hotel Trabzon',
    location: 'Trabzon, Turkey',
    rating: 4.7,
    reviews: 189,
    price: 4200,
    image: '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Luxury hotel in the heart of Trabzon.',
  },
  {
    id: 12,
    name: 'Novotel Trabzon',
    location: 'Trabzon, Turkey',
    rating: 4.5,
    reviews: 145,
    price: 3500,
    image: '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Modern hotel with international standards.',
  },
  {
    id: 13,
    name: 'Hilton Trabzon',
    location: 'Trabzon, Turkey',
    rating: 4.6,
    reviews: 167,
    price: 4800,
    image: '/hotels/Trabzon/Hilton Trabzon/hilton-trabzon-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'International luxury with Black Sea views.',
  },
  {
    id: 14,
    name: 'Grand Tarabya Hotel',
    location: 'Trabzon, Turkey',
    rating: 4.4,
    reviews: 123,
    price: 3200,
    image: '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Comfortable hotel with traditional hospitality.',
  },
  {
    id: 15,
    name: 'Marriott Hotel Trabzon',
    location: 'Trabzon, Turkey',
    rating: 4.6,
    reviews: 178,
    price: 4500,
    image: '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon1-.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Marriott quality with Black Sea charm.',
  },
  {
    id: 16,
    name: 'Rixos Trabzon',
    location: 'Trabzon, Turkey',
    rating: 4.7,
    reviews: 195,
    price: 5200,
    image: '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
    description: 'Luxury resort with private beach.',
  },
  {
    id: 17,
    name: 'Wyndham Trabzon',
    location: 'Trabzon, Turkey',
    rating: 4.3,
    reviews: 134,
    price: 2800,
    image: '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-1.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
    description: 'Comfortable accommodation with modern amenities.',
  },
  {
    id: 18,
    name: 'Hampton by Hilton Trabzon',
    location: 'Trabzon, Turkey',
    rating: 4.4,
    reviews: 145,
    price: 3000,
    image: '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-1.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
    description: 'Modern comfort with Hampton quality.',
  },
  {
    id: 19,
    name: 'Trabzon Park Hotel',
    location: 'Trabzon, Turkey',
    rating: 4.2,
    reviews: 112,
    price: 2500,
    image: '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-1.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant'],
    description: 'Comfortable hotel with garden views.',
  },
  {
    id: 20,
    name: 'Yazıcı Hotel',
    location: 'Trabzon, Turkey',
    rating: 4.3,
    reviews: 128,
    price: 3800,
    image: '/hotels/Trabzon/Yazici Hotel/yazici-hotel-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Traditional hospitality with modern comfort.',
  },
  // Antalya Hotels
  {
    id: 21,
    name: 'Mardan Palace',
    location: 'Antalya, Turkey',
    rating: 4.8,
    reviews: 523,
    price: 6500,
    image: '/hotels/Antalya/Mardan Palace/mardan-palace-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'Luxury palace-style resort on the Mediterranean coast.',
  },
  {
    id: 22,
    name: 'Regnum Carya',
    location: 'Antalya, Turkey',
    rating: 4.7,
    reviews: 412,
    price: 5800,
    image: '/hotels/Antalya/Regnum Carya/Regnum-Carya-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Luxury golf resort on the Mediterranean coast.',
  },
  {
    id: 23,
    name: 'Maxx Royal Belek',
    location: 'Antalya, Turkey',
    rating: 4.8,
    reviews: 489,
    price: 7200,
    image: '/hotels/Antalya/Maxx Royal Belek/maxx-royal-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Ultra-luxury golf and resort.',
  },
  {
    id: 24,
    name: 'Susesi Luxury Resort',
    location: 'Antalya, Turkey',
    rating: 4.6,
    reviews: 367,
    price: 5200,
    image: '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Luxury beach resort.',
  },
  {
    id: 25,
    name: 'Calista Luxury Resort',
    location: 'Antalya, Turkey',
    rating: 4.7,
    reviews: 398,
    price: 6000,
    image: '/hotels/Antalya/Calista Luxury Resort/calista-luxury-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Premium beach resort with luxury amenities.',
  },
  {
    id: 26,
    name: 'Kaya Palazzo',
    location: 'Antalya, Turkey',
    rating: 4.6,
    reviews: 345,
    price: 5500,
    image: '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Elegant resort with Mediterranean charm.',
  },
  {
    id: 27,
    name: 'Rixos Premium Belek',
    location: 'Antalya, Turkey',
    rating: 4.7,
    reviews: 423,
    price: 6800,
    image: '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Premium all-inclusive luxury resort.',
  },
  {
    id: 28,
    name: 'Cornelia Diamond Golf Resort',
    location: 'Antalya, Turkey',
    rating: 4.6,
    reviews: 389,
    price: 6200,
    image: '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Luxury golf and beach resort.',
  },
  {
    id: 29,
    name: 'Land of Legends Kingdom',
    location: 'Antalya, Turkey',
    rating: 4.8,
    reviews: 467,
    price: 7500,
    image: '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
    description: 'Luxury accommodation with theme park.',
  },
  {
    id: 30,
    name: 'Sirene Belek',
    location: 'Antalya, Turkey',
    rating: 4.5,
    reviews: 312,
    price: 4800,
    image: '/hotels/Antalya/Sirene Belek/sirene-belek-1.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Golf and beach resort.',
  },
  // Bursa Hotels
  {
    id: 31,
    name: 'Hilton Bursa Convention Center',
    location: 'Bursa, Turkey',
    rating: 4.6,
    reviews: 234,
    price: 3800,
    image: '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Modern hotel with convention facilities.',
  },
  {
    id: 32,
    name: 'Crowne Plaza Bursa',
    location: 'Bursa, Turkey',
    rating: 4.5,
    reviews: 198,
    price: 3200,
    image: '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Business hotel with modern amenities.',
  },
  {
    id: 33,
    name: 'Almira Hotel',
    location: 'Bursa, Turkey',
    rating: 4.4,
    reviews: 167,
    price: 2800,
    image: '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Comfortable hotel with thermal spa.',
  },
  {
    id: 34,
    name: 'Karinna Hotel',
    location: 'Bursa, Turkey',
    rating: 4.3,
    reviews: 145,
    price: 2500,
    image: '/hotels/Bursa/Karinna Hotel/karinna-hotel-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Boutique hotel with thermal facilities.',
  },
  {
    id: 35,
    name: 'Grand Yazar Hotel',
    location: 'Bursa, Turkey',
    rating: 4.4,
    reviews: 178,
    price: 3000,
    image: '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Modern hotel with thermal spa.',
  },
  {
    id: 36,
    name: 'WOW Bursa',
    location: 'Bursa, Turkey',
    rating: 4.5,
    reviews: 189,
    price: 3500,
    image: '/hotels/Bursa/WOW Bursa/wow-bursa-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Modern hotel with contemporary design.',
  },
  {
    id: 37,
    name: 'Gönlüferah Thermal Hotel',
    location: 'Bursa, Turkey',
    rating: 4.3,
    reviews: 156,
    price: 2700,
    image: '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Traditional thermal hotel.',
  },
  {
    id: 38,
    name: 'Kervansaray Thermal Hotel',
    location: 'Bursa, Turkey',
    rating: 4.6,
    reviews: 223,
    price: 4200,
    image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Luxury thermal spa resort.',
  },
  {
    id: 39,
    name: 'Çelik Palas',
    location: 'Bursa, Turkey',
    rating: 4.4,
    reviews: 198,
    price: 2200,
    image: '/hotels/Bursa/Celik Palas/celik-palas-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Historic hotel with thermal facilities.',
  },
  {
    id: 40,
    name: 'Bursa Holiday Inn',
    location: 'Bursa, Turkey',
    rating: 4.3,
    reviews: 145,
    price: 2600,
    image: '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-1.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Comfortable hotel with international standards.',
  }
]

const amenities = {
  wifi: { icon: Wifi, label: 'Free WiFi' },
  parking: { icon: Car, label: 'Free Parking' },
  spa: { icon: Dumbbell, label: 'Spa & Wellness' },
  restaurant: { icon: Coffee, label: 'Restaurant' },
  bar: { icon: Coffee, label: 'Bar & Lounge' },
  pool: { icon: Dumbbell, label: 'Swimming Pool' },
  concierge: { icon: Users, label: 'Concierge Service' },
  'room-service': { icon: Coffee, label: 'Room Service' },
  gym: { icon: Dumbbell, label: 'Fitness Center' },
  beach: { icon: MapPin, label: 'Private Beach' },
  'kids-club': { icon: Users, label: 'Kids Club' },
  golf: { icon: Users, label: 'Golf Course' },
  'water-park': { icon: Users, label: 'Water Park' },
  'beach-club': { icon: Users, label: 'Beach Club' }
}

export default async function HotelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'HotelsPage' })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/istanbul.jpg"
            alt="Turkey Hotels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 font-serif">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed font-light">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                {t('exploreAll')}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                {t('specialOffers')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('popularDestinations')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('popularDestinationsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link key={city.name} href={city.link} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{city.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{city.hotelCount} {t('hotelsCount')}</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featuredHotels')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('featuredHotelsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCityHotels.map((hotel) => (
              <div key={hotel.id} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary-600">₺{hotel.price.toLocaleString(locale)}</span>
                    <span className="text-xs text-gray-600">/night</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotel.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-gray-600 text-sm">({hotel.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {amenities[amenity as keyof typeof amenities]?.label || amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      2-4 Guests
                    </div>
                    <Link
                      href={`/hotels/${hotel.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('awardWinningService')}</h3>
              <p className="text-gray-600">
                {t('awardWinningServiceDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('strategicLocations')}</h3>
              <p className="text-gray-600">
                {t('strategicLocationsDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('HotelsPage.premiumAmenities')}</h3>
              <p className="text-gray-600">
                {t('HotelsPage.premiumAmenitiesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gray-900 border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/istanbul.jpg"
            alt="Hotels CTA"
            fill
            className="object-cover opacity-60"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed font-light">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
              {t('bookNow')}
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all hover:scale-105 shadow-xl">
              {t('contactUs')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
