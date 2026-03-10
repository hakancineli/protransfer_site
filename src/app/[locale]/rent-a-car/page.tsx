import { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Calendar, Users, Fuel, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rent A Car - Premium Car Rental Services | ProTransfer Travel',
  description: 'Explore our premium car rental fleet including BMW, Audi, Mercedes, Range Rover, Porsche and Volkswagen Passat. Daily, weekly and monthly rental options available.',
}

import { getTranslations } from 'next-intl/server'

export default async function RentACarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t('RentACarPage.heroTitle')}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('RentACarPage.heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t('RentACarPage.bookNow')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#fleet"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('RentACarPage.viewFleet')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('RentACarPage.featureFlexible')}</h3>
              <p className="text-gray-600">{t('RentACarPage.featureFlexibleDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('RentACarPage.featurePremium')}</h3>
              <p className="text-gray-600">{t('RentACarPage.featurePremiumDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fuel className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('RentACarPage.featureMaintained')}</h3>
              <p className="text-gray-600">{t('RentACarPage.featureMaintainedDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('RentACarPage.featureInsurance')}</h3>
              <p className="text-gray-600">{t('RentACarPage.featureInsuranceDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section id="fleet" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('RentACarPage.fleetTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('RentACarPage.fleetSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-500">{t('RentACarPage.daily')}</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.dailyPrice || '$---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{t('RentACarPage.weekly')}</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.weeklyPrice || '$---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{t('RentACarPage.monthly')}</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.monthlyPrice || '$---'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    {t('RentACarPage.bookCar')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('RentACarPage.ctaTitle')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('RentACarPage.ctaDescription')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+90506641785"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('RentACarPage.callNow')}: +90 554 581 20 34
            </a>
            <a
              href="mailto:hakancinelii@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              {t('RentACarPage.emailUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}