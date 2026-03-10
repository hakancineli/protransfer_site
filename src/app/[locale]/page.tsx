'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Search, MapPin, Calendar, Users, Star, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { hotels } from '@/data/hotels'
import { tours } from '@/data/tours'
import { services } from '@/data/services'
import { destinations } from '@/data/destinations'
import { Destination } from '@/types'

// Destination Card with slideshow controlled by shared tick
const DestinationCard = ({ destination, tick, t }: { destination: Destination, tick: number, t: any }) => {
    const [offset, setOffset] = useState(0) // advances locally on image error and on mobile auto-rotate
    const images = destination.gallery && destination.gallery.length > 0 ? destination.gallery : [destination.image]
    const idx = images.length > 0 ? ((tick + offset) % images.length) : 0

    const handleError = () => {
        if (images.length > 1) {
            setOffset((v) => (v + 1) % images.length)
        }
    }

    // Mobile-only auto-rotation to ensure slideshow on small screens (keeps desktop in sync via shared tick)
    useEffect(() => {
        if (images.length <= 1) return
        if (typeof window === 'undefined') return
        const isMobile = window.matchMedia('(max-width: 767px)').matches
        if (!isMobile) return
        const id = setInterval(() => {
            setOffset((v) => (v + 1) % images.length)
        }, 3500)
        return () => clearInterval(id)
    }, [images.length])

    return (
        <Link href={destination.link || '#'} className="card group cursor-pointer">
            <div className="relative h-[28rem] overflow-hidden">
                {images.map((img, i) => (
                    <div
                        key={img}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <Image
                            src={img}
                            alt={destination.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            onError={i === idx ? handleError : undefined}
                            priority={i === 0}
                            unoptimized
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
                <div className="absolute bottom-4 left-4 text-white z-20">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{destination.rating}</span>
                        </div>
                        <span>{destination.tours} {t('HomePage.hotels')}</span>
                    </div>
                </div>
                {images.length > 1 && (
                    <div className="absolute right-3 bottom-3 flex gap-1 z-20">
                        {images.map((_, i) => (
                            <span key={i} className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === idx ? 'bg-white' : 'bg-white/50'}`} />
                        ))}
                    </div>
                )}
            </div>
        </Link>
    )
}

export default function HomePage() {
    const t = useTranslations()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [destinationsTick, setDestinationsTick] = useState(0)

    // Auto-advance slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    // Sync all destination cards every 3.5s
    useEffect(() => {
        const t = setInterval(() => setDestinationsTick((v) => v + 1), 3500)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Luxury Travel Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center text-white px-4 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
                        {t('Hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        {t('Hero.subtitle')}
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder={t('Hero.searchPlaceholder')}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>

                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    title={t('Hero.datePlaceholder')}
                                />
                            </div>

                            <div className="relative">
                                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <select
                                    title="Guests"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                                >
                                    <option>{t('Hero.guests', { count: 2 })}</option>
                                    <option>{t('Hero.guests', { count: 3 })}</option>
                                    <option>{t('Hero.guests', { count: 4 })}</option>
                                    <option>{t('Hero.guests', { count: 5 })}+</option>
                                </select>
                            </div>

                            <button className="btn-primary flex items-center justify-center gap-2">
                                <Search className="w-5 h-5" />
                                {t('Hero.searchButton')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('HomePage.servicesTitle')}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('HomePage.servicesSubtitle')}
                        </p>
                    </div>

                    {/* Services Carousel */}
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 256}px)` }}
                            >
                                {[...services, ...services].map((service, index) => (
                                    <div key={`${service.title}-${index}`} className="flex-shrink-0 w-64">
                                        <div className="card group cursor-pointer h-full">
                                            <div className="p-6">
                                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                                                    <service.icon className="w-8 h-8 text-primary-600" />
                                                </div>
                                                <h3 className="text-xl font-semibold mb-4">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-600 mb-6">
                                                    {service.description}
                                                </p>
                                                <Link
                                                    href={service.link}
                                                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                                                >
                                                    {t('Common.explore')}
                                                    <ChevronRight className="w-4 h-4 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to service ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('HomePage.destinationsTitle')}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('HomePage.destinationsSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {destinations.map((destination, index) => (
                            <DestinationCard key={index} destination={destination} tick={destinationsTick} t={t} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Hotels Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('HomePage.hotelsTitle')}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('HomePage.hotelsSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hotels.slice(0, 6).map((hotel) => (
                            <div key={hotel.id} className="card group cursor-pointer">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={hotel.image}
                                        alt={hotel.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-sm font-semibold text-primary-600">€{hotel.price}</span>
                                        <span className="text-xs text-gray-600">/{t('Common.night')}</span>
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

                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-600">
                                            <Users className="w-4 h-4 inline mr-1" />
                                            2-4 {t('HomePage.guests')}
                                        </div>
                                        <Link
                                            href={`/hotels/${hotel.id}`}
                                            className="btn-primary text-sm px-4 py-2"
                                        >
                                            {t('Common.viewDetails')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tours Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('HomePage.toursTitle')}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('HomePage.toursSubtitle')}
                        </p>
                    </div>

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
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-sm font-semibold text-secondary-600">€{tour.price}</span>
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

                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {tour.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {tour.groupSize}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1">
                                            {tour.highlights.slice(0, 2).map((highlight, index) => (
                                                <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={`/tours/${tour.id}`}
                                            className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                                        >
                                            {t('Common.viewDetails')}
                                            <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-primary-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        {t('HomePage.ctaTitle')}
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        {t('HomePage.ctaSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            {t('Common.bookNow')}
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                            {t('Common.contactUs')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
