import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id } = await params;
  const tour = toursData[id as unknown as keyof typeof toursData];

  if (!tour) return { title: 'Tour Not Found' };

  return {
    title: `${tour.title} - ${tour.location} | ProTransfer Tours`,
    description: tour.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: [tour.image],
    },
  };
}

// Tour data - in a real app, this would come from an API or database
const toursData = {
  1: {
    id: 1,
    title: 'Istanbul Bosphorus Cruise',
    location: 'Istanbul',
    rating: 4.8,
    reviews: 156,
    price: 89,
    image: '/images/destinations/istanbul.jpg',
    gallery: ['/images/destinations/istanbul.jpg'],
    category: 'cruise',
    difficulty: 'easy',
    groupSize: '2-20',
    duration: '3 hours',
    highlights: ['Bosphorus Bridge', 'Dolmabahçe Palace', 'Ortaköy Mosque'],
    description: 'Experience the magic of Istanbul from the water with our luxury cruise including dinner and entertainment.',
    fullDescription: 'Join us for an unforgettable evening on the Bosphorus Strait. Our luxury cruise offers stunning views of Istanbul\'s iconic landmarks, including the majestic Bosphorus Bridge, Dolmabahçe Palace, and Ortaköy Mosque. Enjoy a gourmet dinner with live entertainment as you sail through the illuminated waters of this historic waterway that separates Europe and Asia.',
    features: [
      'Stunning views of Istanbul\'s landmarks at night',
      'Gourmet dinner with traditional Turkish cuisine',
      'Live entertainment and music',
      'Luxury yacht with comfortable seating',
      'Professional guide with historical commentary',
      'Complimentary drinks and snacks',
      'Photo opportunities with Istanbul\'s illuminated skyline'
    ],
    itinerary: [
      {
        time: '19:00',
        activity: 'Boarding at pier',
        description: 'Welcome drinks and introduction to the crew'
      },
      {
        time: '19:30',
        activity: 'Dinner service begins',
        description: 'Multi-course dinner with Turkish and international cuisine'
      },
      {
        time: '20:30',
        activity: 'Entertainment performance',
        description: 'Live music and traditional dance performances'
      },
      {
        time: '21:30',
        activity: 'Bosphorus Bridge passage',
        description: 'Sailing under the illuminated bridge with photo opportunities'
      },
      {
        time: '22:00',
        activity: 'Dolmabahçe Palace views',
        description: 'Views of the Ottoman palace and its beautiful gardens'
      },
      {
        time: '22:30',
        activity: 'Return to pier',
        description: 'Disembarkation and transfer back to hotel'
      }
    ],
    included: [
      'Luxury yacht cruise',
      'Gourmet dinner',
      'Live entertainment',
      'Welcome drinks',
      'Professional guide',
      'Photo opportunities'
    ],
    notIncluded: [
      'Hotel transfers',
      'Alcoholic beverages (available for purchase)',
      'Gratuities'
    ],
    contact: {
      phone: '+90 554 581 20 34',
      email: 'info@fortytravel.com',
      address: 'Kabataş Pier, Istanbul, Turkey'
    }
  },
  2: {
    id: 2,
    title: 'Cappadocia Hot Air Balloon',
    location: 'Cappadocia',
    rating: 4.9,
    reviews: 289,
    price: 150,
    image: '/images/destinations/cappadocia.jpg',
    gallery: ['/images/destinations/cappadocia.jpg'],
    category: 'adventure',
    difficulty: 'moderate',
    groupSize: '4-16',
    duration: '1 day',
    highlights: ['Sunrise Flight', 'Fairy Chimneys', 'Underground Cities'],
    description: 'Float above the magical landscapes of Cappadocia in a hot air balloon at sunrise.',
    fullDescription: 'Experience the breathtaking beauty of Cappadocia from a unique perspective - floating above the fairy chimneys and cave dwellings in a hot air balloon at sunrise. Our experienced pilots ensure a safe and memorable journey as you drift peacefully over this otherworldly landscape, watching the sun paint the sky in brilliant colors. This once-in-a-lifetime adventure includes a traditional champagne celebration upon landing.',
    features: [
      'Sunrise hot air balloon flight',
      'Professional and experienced pilots',
      'Traditional champagne celebration upon landing',
      'Flight certificate',
      'Comprehensive insurance coverage',
      'Hotel pickup and drop-off service',
      'Small group sizes for personalized experience'
    ],
    itinerary: [
      {
        time: '04:30',
        activity: 'Hotel pickup',
        description: 'Pick up from your hotel and transfer to launch site'
      },
      {
        time: '05:00',
        activity: 'Preparation and inflation',
        description: 'Watch the balloon inflation and safety briefing'
      },
      {
        time: '05:30',
        activity: 'Takeoff',
        description: 'Gentle ascent into the sky as the sun rises'
      },
      {
        time: '06:00-07:30',
        activity: 'Flight over fairy chimneys',
        description: 'Floating above Cappadocia\'s iconic landscape'
      },
      {
        time: '07:30',
        activity: 'Landing and celebration',
        description: 'Gentle landing and champagne toast'
      },
      {
        time: '08:00',
        activity: 'Transfer back to hotel',
        description: 'Return to hotel with breakfast'
      }
    ],
    included: [
      'Hotel pickup and drop-off',
      'Hot air balloon flight',
      'Professional pilot',
      'Champagne celebration',
      'Flight certificate',
      'Insurance',
      'Light breakfast'
    ],
    notIncluded: [
      'Additional drinks',
      'Personal expenses',
      'Tips for pilot'
    ],
    contact: {
      phone: '+90 554 581 20 34',
      email: 'info@fortytravel.com',
      address: 'Göreme, Cappadocia, Turkey'
    }
  },
  3: {
    id: 3,
    title: 'Ephesus Ancient City Tour',
    location: 'Izmir',
    rating: 4.7,
    reviews: 198,
    price: 75,
    image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg',
    gallery: ['/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg'],
    category: 'cultural',
    difficulty: 'easy',
    groupSize: '2-15',
    duration: 'Full day',
    highlights: ['Celsus Library', 'Grand Theatre', 'Temple of Artemis'],
    description: 'Discover the ancient wonders of Ephesus with our expert guides and entry tickets.',
    fullDescription: 'Step back in time and explore the magnificent ruins of Ephesus, once the second-largest city in the Roman Empire. Our expert guides will bring history to life as you walk through the ancient streets, visit the impressive Library of Celsus, the Grand Theatre with its remarkable acoustics, and the Temple of Artemis, one of the Seven Wonders of the Ancient World. This comprehensive tour includes skip-the-line tickets and comfortable transportation.',
    features: [
      'Expert archaeologist guide',
      'Skip-the-line entry tickets',
      'Air-conditioned transportation',
      'Small group sizes for personalized experience',
      'Visit to all major ancient sites',
      'Free time for shopping and exploration',
      'Comprehensive historical information'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Hotel pickup',
        description: 'Pick up from your hotel in Izmir'
      },
      {
        time: '09:30',
        activity: 'Arrival at Ephesus',
        description: 'Introduction to the ancient city and overview of the tour'
      },
      {
        time: '10:00',
        activity: 'Library of Celsus',
        description: 'Visit to the famous ancient library with detailed explanations'
      },
      {
        time: '11:00',
        activity: 'Grand Theatre',
        description: 'Explore the remarkably preserved ancient theatre'
      },
      {
        time: '12:00',
        activity: 'Lunch break',
        description: 'Traditional Turkish lunch at a local restaurant'
      },
      {
        time: '13:00',
        activity: 'Temple of Artemis',
        description: 'Visit to the Temple of Artemis, one of the Seven Wonders'
      },
      {
        time: '15:00',
        activity: 'Free time',
        description: 'Time for shopping and personal exploration'
      },
      {
        time: '17:00',
        activity: 'Return to hotel',
        description: 'Transfer back to your hotel'
      }
    ],
    included: [
      'Expert guide',
      'Entry tickets to all sites',
      'Transportation',
      'Lunch',
      'Free time for shopping',
      'Small group size'
    ],
    notIncluded: [
      'Personal expenses',
      'Tips for guide',
      'Dinner'
    ],
    contact: {
      phone: '+90 554 581 20 34',
      email: 'info@fortytravel.com',
      address: 'Selçuk, Izmir, Turkey'
    }
  },
  4: {
    id: 4,
    title: 'Pamukkale Thermal Pools',
    location: 'Pamukkale',
    rating: 4.8,
    reviews: 234,
    price: 95,
    image: '/images/destinations/pamukkale.jpg',
    gallery: ['/images/destinations/pamukkale.jpg'],
    category: 'nature',
    difficulty: 'easy',
    groupSize: '2-25',
    duration: 'Full day',
    highlights: ['Travertine Terraces', 'Hierapolis', 'Cleopatra Pool'],
    description: 'Relax in the healing waters of Pamukkale and explore the ancient Hierapolis.',
    fullDescription: 'Discover the natural wonder of Pamukkale, where calcium-rich thermal waters have created stunning white travertine terraces over thousands of years. Our tour combines relaxation in the therapeutic pools with exploration of the ancient city of Hierapolis. Walk barefoot on the mineral-rich terraces, swim in the warm waters believed to have healing properties, and visit the remarkably preserved Cleopatra Pool. This full-day experience includes transportation, lunch, and expert guidance.',
    features: [
      'Access to Pamukkale\'s thermal pools',
      'Visit to ancient Hierapolis ruins',
      'Professional guide with historical insights',
      'Swimming in Cleopatra\'s Pool',
      'Travertine terrace exploration',
      'Transportation to and from site',
      'Traditional lunch included'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Hotel pickup',
        description: 'Pick up from your hotel'
      },
      {
        time: '10:00',
        activity: 'Arrival at Pamukkale',
        description: 'Introduction to the site and safety briefing'
      },
      {
        time: '10:30',
        activity: 'Travertine terraces',
        description: 'Walking tour of the white calcium terraces'
      },
      {
        time: '12:00',
        activity: 'Hierapolis ruins',
        description: 'Exploration of the ancient city with guide'
      },
      {
        time: '13:00',
        activity: 'Lunch',
        description: 'Traditional Turkish lunch at a local restaurant'
      },
      {
        time: '14:00',
        activity: 'Swimming time',
        description: 'Free time to swim in the thermal pools'
      },
      {
        time: '16:00',
        activity: 'Cleopatra Pool',
        description: 'Visit to the ancient thermal pool'
      },
      {
        time: '17:00',
        activity: 'Return to hotel',
        description: 'Transfer back to your hotel'
      }
    ],
    included: [
      'Transportation',
      'Professional guide',
      'Entry fees',
      'Lunch',
      'Swimming access',
      'Small group size'
    ],
    notIncluded: [
      'Swimsuits and towels',
      'Personal expenses',
      'Tips for guide'
    ],
    contact: {
      phone: '+90 554 581 20 34',
      email: 'info@fortytravel.com',
      address: 'Pamukkale, Denizli, Turkey'
    }
  },
  5: {
    id: 5,
    title: 'Blue Voyage Gulet Cruise',
    location: 'Bodrum',
    rating: 4.9,
    reviews: 167,
    price: 450,
    image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk Gulet Turu.jpeg',
    gallery: [
      '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk Gulet Turu.jpeg',
      '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg'
    ],
    category: 'cruise',
    difficulty: 'easy',
    groupSize: '2-12',
    duration: '3 days',
    highlights: ['Traditional Gulet', 'Swimming Bays', 'Turkish Cuisine'],
    description: 'Sail the turquoise waters of the Aegean Sea on our traditional wooden gulet with famous Turkish cuisine.',
    fullDescription: 'Experience the ultimate Turkish sailing adventure on our traditional wooden gulet, handcrafted with antique techniques. Cruise along the stunning Aegean coastline, stopping at secluded bays for swimming in crystal-clear waters, and enjoying authentic Turkish cuisine prepared by our onboard chef. This all-inclusive journey features comfortable cabins, friendly crew, and opportunities for water sports, fishing, and simply relaxing on deck while watching spectacular sunsets over the sea.',
    features: [
      'Traditional wooden gulet vessel',
      'All-inclusive meals and drinks',
      'Swimming stops at secluded bays',
      'Water sports equipment',
      'Fishing gear',
      'Comfortable cabins with en-suite facilities',
      'Experienced captain and crew',
      'Sunset viewing opportunities'
    ],
    itinerary: [
      {
        time: '09:00',
        activity: 'Boarding and welcome',
        description: 'Board the gulet in Bodrum harbor with welcome drinks'
      },
      {
        time: '10:00',
        activity: 'Morning sailing',
        description: 'Set sail along the Aegean coast with breakfast'
      },
      {
        time: '12:00',
        activity: 'Swimming and lunch',
        description: 'Stop at a secluded bay for swimming and lunch on board'
      },
      {
        time: '14:00',
        activity: 'Afternoon sailing',
        description: 'Continue sailing to another scenic location'
      },
      {
        time: '16:00',
        activity: 'Evening swim and dinner',
        description: 'Swimming stop followed by dinner prepared with local ingredients'
      },
      {
        time: '18:00',
        activity: 'Sunset viewing',
        description: 'Relax on deck with drinks while watching the sunset'
      },
      {
        time: '20:00',
        activity: 'Overnight at anchor',
        description: 'Sleep in comfortable cabin anchored in a peaceful bay'
      },
      {
        time: '08:00',
        activity: 'Breakfast and return',
        description: 'Breakfast on board before returning to Bodrum harbor'
      }
    ],
    included: [
      'Accommodation in private cabin',
      'All meals and drinks',
      'Swimming and water sports equipment',
      'Fishing gear',
      'Professional captain and crew',
      'Towels and linens'
    ],
    notIncluded: [
      'Alcoholic beverages (available for purchase)',
      'Personal expenses',
      'Tips for crew'
    ],
    contact: {
      phone: '+90 554 581 20 34',
      email: 'info@fortytravel.com',
      address: 'Bodrum Harbor, Muğla, Turkey'
    }
  },
  6: {
    id: 6,
    title: 'Sapanca Maşukiye Tour',
    location: 'Sapanca',
    rating: 4.8,
    reviews: 125,
    price: 180,
    image: '/tours/Sapanca%20Masukiye/Sapanca%20Masukiye.jpeg',
    gallery: [
      '/tours/Sapanca%20Masukiye/Sapanca%20Masukiye.jpeg',
      '/tours/Sapanca%20Masukiye/Sapanca%20Masukiye.jpeg',
      '/tours/Sapanca%20Masukiye/Sapanca%20Masukiye.jpeg',
      '/tours/Sapanca%20Masukiye/Sapanca%20Masukiye.jpeg',
      '/tours/Sapanca%20Masukiye/Sapanca%20Masukiye.jpeg'
    ],
    category: 'nature',
    difficulty: 'easy',
    groupSize: '2-15',
    duration: 'Full day',
    highlights: ['Sapanca Lake', 'Maşukiye Forest', 'Nature Views'],
    description: 'Enjoy a day in Sapanca Maşukiye with our guided tour.',
    fullDescription: 'Join us for a day trip to Sapanca Maşukiye, a natural paradise located near Istanbul. You will walk through green pine forests, enjoy stunning lake views, and taste famous local delicacies at lakeside restaurants. This tour is perfect for escaping the hustle and bustle of the city and relaxing in the embrace of nature.',
    features: [
      'Hotel pickup and drop-off',
      'Professional guide',
      'Lunch at a lakeside restaurant',
      'Free time for exploration',
      'Visit to a historical site',
      'Tasting of local delicacies'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Departure',
        description: 'Departure from the designated meeting point'
      },
      {
        time: '09:30',
        activity: 'Arrival in Sapanca',
        description: 'Arrival at Sapanca Maşukiye and tour introduction'
      },
      {
        time: '10:00',
        activity: 'Forest Tour',
        description: 'Walking through green pine forests'
      },
      {
        time: '12:00',
        activity: 'Lunch by the Lake',
        description: 'Lunch at a local restaurant with lake view'
      },
      {
        time: '14:00',
        activity: 'Free Time',
        description: 'Free time for exploration or shopping'
      },
      {
        time: '16:30',
        activity: 'Return',
        description: 'Return to the original meeting point'
      }
    ],
    included: [
      'Hotel pickup and drop-off',
      'Professional guide',
      'Lunch',
      'Free time for exploration',
      'Visit to a historical site',
      'Tasting of local delicacies'
    ],
    notIncluded: [
      'Dinner',
      'Beverages',
      'Personal expenses',
      'Tips for guide'
    ],
    contact: {
      phone: '+90 554 581 20 34',
      email: 'info@fortytravel.com',
      address: 'Sapanca, Istanbul, Turkey'
    }
  }
}

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
}

export default async function TourDetailPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id } = await params
  const tour = toursData[id as unknown as keyof typeof toursData]

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-8">The tour you're looking for doesn't exist.</p>
          <Link href="/tours" className="btn-primary">
            Back to Tours
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{tour.title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{tour.rating}</span>
                <span className="text-gray-300">({tour.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">About {tour.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {tour.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Tour Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Tour Itinerary</h3>
                <div className="space-y-6">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary-600 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold">{item.time}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.activity}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included & Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">What's Included</h3>
                  <div className="space-y-2">
                    {tour.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">What's Not Included</h3>
                  <div className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-gray-700">-</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{tour.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tour Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Tour Date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Number of Travelers">
                      <option>1 Traveler</option>
                      <option>2 Travelers</option>
                      <option>3 Travelers</option>
                      <option>4+ Travelers</option>
                    </select>
                  </div>
                </div>

                <button className="w-full btn-primary mb-3">
                  Book Now
                </button>
                <button className="w-full btn-secondary">
                  Contact Tour
                </button>
              </div>

              {/* Tour Details */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Tour Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Duration</div>
                      <div className="text-gray-600">{tour.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Group Size</div>
                      <div className="text-gray-600">{tour.groupSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-600">★</span>
                    <div>
                      <div className="font-semibold text-gray-900">Difficulty</div>
                      <div className="text-gray-600 capitalize">{tour.difficulty}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-600">★</span>
                    <div>
                      <div className="font-semibold text-gray-900">Category</div>
                      <div className="text-gray-600 capitalize">{tour.category}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{tour.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{tour.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{tour.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Tours */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Similar Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Similar tours would be displayed here */}
            <div className="text-center text-gray-500 col-span-full">
              Similar tours coming soon...
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}