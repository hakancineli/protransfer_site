import { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Home, DollarSign, Users, Shield, MapPin, BedDouble, Bath, Square, Globe, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate - Premium Property Services | ProTransfer Travel',
  description: 'Discover premium real estate opportunities in Turkey. Rental and purchase options available with citizenship investment programs. Luxury properties in prime locations.',
}

import { getTranslations } from 'next-intl/server'

export default async function RealEstatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const rentalProperties = [
    {
      id: 'luxury-apartment-1',
      title: 'Luxury Sea View Apartment',
      location: 'Istanbul, Beşiktaş',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: '180 m²',
      price: '$4,200/month',
      image: '/real-estate/luxury-apartment-1.jpg',
      features: ['Sea View', 'Furnished', 'Parking', '24/7 Security']
    },
    {
      id: 'modern-villa-1',
      title: 'Modern Villa with Pool',
      location: 'Antalya, Konyaaltı',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '450 m²',
      price: '$9,500/month',
      image: '/real-estate/modern-villa-1.jpg',
      features: ['Private Pool', 'Garden', 'Garage', 'Smart Home']
    },
    {
      id: 'penthouse-1',
      title: 'Penthouse Suite',
      location: 'Istanbul, Levent',
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '320 m²',
      price: '$7,800/month',
      image: '/real-estate/penthouse-1.jpg',
      features: ['Rooftop Terrace', 'City View', 'Jacuzzi', 'Premium Location']
    }
  ]

  const saleProperties = [
    {
      id: 'investment-property-1',
      title: 'Investment Property Complex',
      location: 'Istanbul, Şişli',
      type: 'Residential Complex',
      bedrooms: 2,
      bathrooms: 1,
      area: '120 m²',
      price: '$525,000',
      image: '/real-estate/investment-property-1.jpg',
      features: ['High ROI', 'Rental Income', 'City Center', 'New Build']
    },
    {
      id: 'beach-house-1',
      title: 'Beach Front House',
      location: 'Bodrum, Yalıkavak',
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      area: '280 m²',
      price: '$1,380,000',
      image: '/real-estate/beach-house-1.jpg',
      features: ['Beach Access', 'Private Garden', 'Sea View', 'Luxury Finishes']
    },
    {
      id: 'commercial-property-1',
      title: 'Commercial Office Space',
      location: 'Istanbul, Maslak',
      type: 'Commercial',
      bedrooms: 0,
      bathrooms: 2,
      area: '500 m²',
      price: '$2,850,000',
      image: '/real-estate/commercial-property-1.jpg',
      features: ['Business District', 'High Visibility', 'Modern Design', 'Parking']
    }
  ]

  const citizenshipBenefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600" />,
      title: t('RealEstatePage.benefitCitizenshipTitle'),
      description: t('RealEstatePage.benefitCitizenshipDesc')
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: t('RealEstatePage.benefitFamilyTitle'),
      description: t('RealEstatePage.benefitFamilyDesc')
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: t('RealEstatePage.benefitVisaTitle'),
      description: t('RealEstatePage.benefitVisaDesc')
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-600" />,
      title: t('RealEstatePage.benefitInvestmentTitle'),
      description: t('RealEstatePage.benefitInvestmentDesc')
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t('RealEstatePage.heroTitle')}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('RealEstatePage.heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#rental"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('RealEstatePage.viewRentals')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#citizenship"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t('RealEstatePage.citizenshipInfo')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Citizenship Investment Section */}
      <section id="citizenship" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('RealEstatePage.citizenshipTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('RealEstatePage.citizenshipSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {citizenshipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{t('RealEstatePage.requirementsTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <p className="text-3xl font-bold mb-2">$400,000</p>
                <p className="text-primary-100">{t('RealEstatePage.minInvestment')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">3 Years</p>
                <p className="text-primary-100">{t('RealEstatePage.minHolding')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">6-9 Months</p>
                <p className="text-primary-100">{t('RealEstatePage.processingTime')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Properties Section */}
      <section id="rental" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('RealEstatePage.rentalTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('RealEstatePage.rentalSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <BedDouble className="w-4 h-4 mr-1 text-gray-500" />
                      {property.bedrooms} {t('RealEstatePage.beds')}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-gray-500" />
                      {property.bathrooms} {t('RealEstatePage.baths')}
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1 text-gray-500" />
                      {property.area}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    {t('RealEstatePage.viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('RealEstatePage.saleTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('RealEstatePage.saleSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>

                  {property.bedrooms > 0 && (
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <BedDouble className="w-4 h-4 mr-1 text-gray-500" />
                        {property.bedrooms} {t('RealEstatePage.beds')}
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1 text-gray-500" />
                        {property.bathrooms} {t('RealEstatePage.baths')}
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1 text-gray-500" />
                        {property.area}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    {t('RealEstatePage.viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('RealEstatePage.ctaTitle')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('RealEstatePage.ctaDescription')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+90506641785"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('RealEstatePage.callNow')}: +90 554 581 20 34
            </a>
            <a
              href="mailto:hakancinelii@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              {t('RealEstatePage.emailUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}