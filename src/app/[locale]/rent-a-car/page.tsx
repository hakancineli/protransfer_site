import { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Calendar, Users, Fuel, Settings, Star, Clock, ChevronRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Rent A Car - Premium Car Rental Services | ProTransfer Travel',
  description: 'Explore our premium car rental fleet including BMW, Audi, Mercedes, Range Rover, Porsche and Volkswagen Passat. Daily, weekly and monthly rental options available.',
}

export default async function RentACarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'RentACarPage' })
  const cars = [
    {
      id: 'bmw',
      name: 'BMW 7 Series',
      category: 'Luxury Sedan',
      image: '/rent-a-car/bmw-7-series.jpg',
      features: ['4 Passengers', 'Automatic', 'Hybrid', 'Leather Seats'],
      dailyPrice: '$250',
      weeklyPrice: '$1,500',
      monthlyPrice: '$5,000'
    },
    {
      id: 'audi',
      name: 'Audi A8',
      category: 'Luxury Sedan',
      image: '/rent-a-car/audi-a8.jpg',
      features: ['4 Passengers', 'Automatic', 'Petrol', 'Quattro Drive'],
      dailyPrice: '$280',
      weeklyPrice: '$1,700',
      monthlyPrice: '$5,800'
    },
    {
      id: 'mercedes',
      name: 'Mercedes S-Class',
      category: 'Luxury Sedan',
      image: '/rent-a-car/mercedes-s-class.jpg',
      features: ['4 Passengers', 'Automatic', 'Hybrid', 'AIR-BALANCE'],
      dailyPrice: '$300',
      weeklyPrice: '$1,850',
      monthlyPrice: '$6,500'
    },
    {
      id: 'range-rover',
      name: 'Range Rover Sport',
      category: 'Luxury SUV',
      image: '/rent-a-car/range-rover-sport.jpg',
      features: ['5 Passengers', 'Automatic', 'Diesel', '4WD'],
      dailyPrice: '$350',
      weeklyPrice: '$2,100',
      monthlyPrice: '$7,500'
    },
    {
      id: 'porsche',
      name: 'Porsche Panamera',
      category: 'Luxury Sports',
      image: '/rent-a-car/porsche-panamera.jpg',
      features: ['4 Passengers', 'Automatic', 'Petrol', 'Sport Chrono'],
      dailyPrice: '$400',
      weeklyPrice: '$2,500',
      monthlyPrice: '$8,500'
    },
    {
      id: 'passat',
      name: 'Volkswagen Passat',
      category: 'Premium Sedan',
      image: '/rent-a-car/volkswagen-passat.jpg',
      features: ['5 Passengers', 'Automatic', 'Diesel', 'DSG'],
      dailyPrice: '$150',
      weeklyPrice: '$900',
      monthlyPrice: '$3,200'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-gray-900 group/rent">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/istanbul.jpg"
            alt="Premium Car Rental Turkey"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/rent:scale-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
        </div>
        <div className="relative z-30 h-full flex flex-col justify-end container mx-auto px-4 pb-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              Premium Fleet
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 font-serif leading-none tracking-tight animate-fade-in">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-3xl opacity-90 max-w-2xl leading-relaxed mb-10 font-light animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:-translate-y-2 shadow-sm">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('featureFlexible')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('featureFlexibleDesc')}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:-translate-y-2 shadow-sm">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('featurePremium')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('featurePremiumDesc')}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:-translate-y-2 shadow-sm">
                <Fuel className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('featureMaintained')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('featureMaintainedDesc')}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:-translate-y-2 shadow-sm">
                <Settings className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('featureInsurance')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('featureInsuranceDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section id="fleet" className="py-24 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">{t('fleetTitle')}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('fleetSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-primary-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {car.category}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{car.name}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{t('daily')}</p>
                        <p className="text-xl font-bold text-primary-600">
                          {car.dailyPrice || '$---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{t('weekly')}</p>
                        <p className="text-xl font-bold text-primary-600">
                          {car.weeklyPrice || '$---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">{t('monthly')}</p>
                        <p className="text-xl font-bold text-primary-600">
                          {car.monthlyPrice || '$---'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-10 bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-primary-600 transition-all hover:scale-[1.02]">
                    {t('bookCar')}
                  </button>
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
            src="/rent-a-car/mercedes-s-class.jpg"
            alt="Luxury Car Rental CTA"
            fill
            className="object-cover opacity-60"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight text-white">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light leading-relaxed">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+905545812034"
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl"
            >
              {t('callNow')}: +90 554 581 20 34
            </a>
            <a
              href="mailto:hakancinelii@gmail.com"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all hover:scale-105 shadow-2xl"
            >
              {t('emailUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}