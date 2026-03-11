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
        <Link href={destination.link || '#'} className="card group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="relative h-[28rem] overflow-hidden bg-gray-900">
                {images.map((img, i) => (
                    <div
                        key={img}
                        className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${i === idx ? 'opacity-100 scale-100 translate-z-0' : 'opacity-0 scale-110'
                            }`}
                    >
                        <Image
                            src={img}
                            alt={destination.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            onError={i === idx ? handleError : undefined}
                            priority={i === 0}
                            unoptimized
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
                <div className="absolute bottom-6 left-6 text-white z-20 transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-3xl font-bold mb-2 font-serif tracking-tight">{destination.name}</h3>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{destination.rating}</span>
                        </div>
                        <span className="opacity-80 uppercase tracking-widest text-[10px] bg-primary-600/30 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10">
                            {destination.tours} {t('HomePage.hotels')}
                        </span>
                    </div>
                </div>
                {images.length > 1 && (
                    <div className="absolute right-4 bottom-2 left-4 h-1 flex gap-1.5 z-20 opacity-60">
                        {images.map((_, i) => (
                            <div key={i} className="flex-1 h-full bg-white/20 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-white transition-all duration-500 ${i === idx ? 'w-full' : 'w-0'
                                        }`}
                                />
                            </div>
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
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900 group/hero">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Luxury Travel Turkey Portfolio"
                        fill
                        className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/hero:scale-110"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
                </div>

                <div className="relative z-30 text-center text-white px-4">
                    <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
                        {t('Hero.subtitle')}
                    </span>
                    <h1 className="text-5xl md:text-9xl font-bold mb-10 font-serif leading-[0.9] tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
                        {t('Hero.title')}
                    </h1>

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
                    <div className="relative group/carousel">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)]"
                                style={{ transform: `translateX(-${currentSlide * (256 + 24)}px)` }} // accounting for gap
                            >
                                {[...services, ...services].map((service, index) => (
                                    <div key={`${service.title}-${index}`} className="flex-shrink-0 w-64 mr-6">
                                        <div className="card group cursor-pointer h-full border border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white">
                                            <div className="p-8">
                                                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:rotate-6 transition-all duration-500">
                                                    <service.icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors leading-tight">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                                                    {service.description}
                                                </p>
                                                <Link
                                                    href={service.link}
                                                    className="inline-flex items-center text-primary-600 font-bold group-hover:gap-3 transition-all"
                                                >
                                                    <span className="border-b-2 border-transparent group-hover:border-primary-600 pb-0.5">
                                                        {t('Common.explore')}
                                                    </span>
                                                    <ChevronRight className="w-5 h-5 ml-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-y-0 -left-6 -right-6 flex items-center justify-between pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                                className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto hover:bg-primary-600 hover:text-white transition-all scale-90 hover:scale-110 border border-gray-100"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                                className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto hover:bg-primary-600 hover:text-white transition-all scale-90 hover:scale-110 border border-gray-100"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-12 space-x-3">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
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
            <section className="relative py-24 px-4 overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <Image
                        src="/images/destinations/istanbul.jpg"
                        alt="CTA Background"
                        fill
                        className="object-cover opacity-60"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">
                        {t('HomePage.ctaTitle')}
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 opacity-90 font-light leading-relaxed">
                        {t('HomePage.ctaSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl">
                            {t('Common.bookNow')}
                        </button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all hover:scale-105 shadow-2xl">
                            {t('Common.contactUs')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
