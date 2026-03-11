'use client'

import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

import { hotelsData } from '@/data/hotels'

// Map amenities to icons
const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  spa: Dumbbell,
  gym: Dumbbell,
  restaurant: Coffee,
  bar: Coffee,
  pool: Dumbbell,
  concierge: Users,
  'room-service': Coffee,
  beach: MapPin,
  'kids-club': Users,
}

// Global contact phone to display on all hotel detail pages
const GLOBAL_CONTACT_PHONE = '+90 554 581 20 34'

export default function HotelDetailPage() {
  const params = useParams()
  const id = params.id as string
  const locale = params.locale as string
  const t = useTranslations()
  const hotel = hotelsData[id as unknown as keyof typeof hotelsData]
  const [currentIdx, setCurrentIdx] = useState(0)

  // Automated slideshow for the hero section
  useEffect(() => {
    if (!hotel || !hotel.gallery || hotel.gallery.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % hotel.gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [hotel])

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('HotelDetail.notFoundTitle')}</h1>
          <p className="text-gray-600 mb-8">{t('HotelDetail.notFoundDesc')}</p>
          <Link href="/hotels" className="btn-primary">
            {t('HotelDetail.backToHotels')}
          </Link>
        </div>
      </div>
    )
  }

  const gallery = hotel.gallery && hotel.gallery.length > 0 ? hotel.gallery : [hotel.image]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Automated Gallery Slideshow */}
      <section className="relative h-[60vh] md:h-[80vh] min-h-[500px] overflow-hidden bg-black group/hero">
        <div className="absolute inset-0">
          {gallery.map((img, i) => (
            <div
              key={`${img}-${i}`}
              className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${i === currentIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                }`}
            >
              <Image
                src={img}
                alt={`${hotel.name} - View ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
                unoptimized
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20" />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 z-30 flex items-center justify-between px-4 md:px-8 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={() => setCurrentIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
            aria-label="Previous image"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={() => setCurrentIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="relative z-30 container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-4xl text-white">
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {hotel.amenities.slice(0, 4).map((amenity) => (
                <span key={amenity} className="px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {t(`HotelDetail.amenityItems.${amenity}`)}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 font-serif leading-none tracking-tight animate-fade-in" style={{ animationDelay: '400ms' }}>
              {hotel.name}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-xl animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-600/20 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <span className="font-light opacity-90">{hotel.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < Math.floor(hotel.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/20'}`} />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold leading-none">{hotel.rating}</span>
                  <span className="text-sm opacity-60 uppercase tracking-tighter">{hotel.reviews} {t('HotelDetail.reviews')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slideshow Progress Indicators */}
        {gallery.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 flex z-40">
            {gallery.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-full bg-white/10 overflow-hidden border-r border-black/10 last:border-0"
              >
                <div
                  className={`h-full bg-white transition-all duration-[5000ms] linear ${i === currentIdx ? 'w-full' : 'w-0'
                    }`}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Hotel Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('HotelDetail.aboutHotel')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {hotel.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('HotelDetail.keyFeatures')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('HotelDetail.availableRooms')}</h3>
                <div className="space-y-6">
                  {hotel.roomTypes.map((room, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-1">{room.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span>{room.size}</span>
                            <span>•</span>
                            <span>Max {room.maxGuests} {t('HotelDetail.maxGuests')}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">€{room.price}</div>
                          <div className="text-sm text-gray-600">{t('HotelDetail.perNight')}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, idx) => (
                          <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="btn-primary w-full md:w-auto">
                        {t('HotelDetail.bookNow')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('HotelDetail.gallery')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${hotel.name} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{hotel.price}</div>
                  <div className="text-gray-600">{t('HotelDetail.perNight')}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('HotelDetail.checkIn')}
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Check-in Date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('HotelDetail.checkOut')}
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Check-out Date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('HotelDetail.guests')}
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title={t('HotelDetail.guests')}>
                      <option>{t('HotelDetail.guestCount', { count: 1 })}</option>
                      <option>{t('HotelDetail.guestCount', { count: 2 })}</option>
                      <option>{t('HotelDetail.guestCount', { count: 3 })}</option>
                      <option>{t('HotelDetail.guestCountPlus', { count: 4 })}</option>
                    </select>
                  </div>
                </div>

                <button className="w-full btn-primary mb-3">
                  {t('HotelDetail.checkAvailability')}
                </button>
                <button className="w-full btn-secondary">
                  {t('HotelDetail.contactHotel')}
                </button>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{t('HotelDetail.hotelAmenities')}</h3>
                <div className="space-y-3">
                  {hotel.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
                    return (
                      <div key={index} className="flex items-center gap-3">
                        {Icon && (
                          <>
                            <Icon className="w-5 h-5 text-primary-600" />
                            <span className="text-gray-700">{t(`HotelDetail.amenityItems.${amenity}`)}</span>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{t('HotelDetail.contact')}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{GLOBAL_CONTACT_PHONE}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{hotel.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Hotels */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{t('HotelDetail.similarHotels')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <p className="text-gray-600">{t('HotelDetail.similarHotelsComingSoon')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}