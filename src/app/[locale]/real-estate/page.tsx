import { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Home, DollarSign, Users, Shield, MapPin, BedDouble, Bath, Square, Globe, CreditCard } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Real Estate - Premium Property Services | ProTransfer Travel',
  description: 'Discover premium real estate opportunities in Turkey. Rental and purchase options available with citizenship investment programs. Luxury properties in prime locations.',
}

export default async function RealEstatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'RealEstatePage' })
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
      title: t('benefitCitizenshipTitle'),
      description: t('benefitCitizenshipDesc')
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: t('benefitFamilyTitle'),
      description: t('benefitFamilyDesc')
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: t('benefitVisaTitle'),
      description: t('benefitVisaDesc')
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-600" />,
      title: t('benefitInvestmentTitle'),
      description: t('benefitInvestmentDesc')
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-gray-900 group/real-estate">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/bodrum.jpg"
            alt="Luxury Real Estate Turkey"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/real-estate:scale-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
        </div>
        <div className="relative z-30 h-full flex flex-col justify-end container mx-auto px-4 pb-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              {t('viewRentals')}
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

      {/* Citizenship Investment Section */}
      <section id="citizenship" className="py-16 bg-gray-50 text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('citizenshipTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('citizenshipSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {citizenshipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-600 rounded-2xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">{t('requirementsTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <p className="text-3xl font-bold mb-2 font-serif">$400,000</p>
                <p className="text-primary-100 opacity-80">{t('minInvestment')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2 font-serif">3 Years</p>
                <p className="text-primary-100 opacity-80">{t('minHolding')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2 font-serif">6-9 Months</p>
                <p className="text-primary-100 opacity-80">{t('processingTime')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Properties Section */}
      <section id="rental" className="py-16 text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('rentalTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('rentalSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <BedDouble className="w-4 h-4 mr-1 text-primary-600" />
                      {property.bedrooms} {t('beds')}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-primary-600" />
                      {property.bathrooms} {t('baths')}
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1 text-primary-600" />
                      {property.area}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded-md border border-gray-100">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full btn-primary py-4 rounded-xl font-bold">
                    {t('viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Properties Section */}
      <section className="py-24 bg-gray-50 text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">{t('saleTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('saleSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{property.title}</h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>

                  {property.bedrooms > 0 && (
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <BedDouble className="w-4 h-4 mr-1 text-primary-600" />
                        {property.bedrooms} {t('beds')}
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1 text-primary-600" />
                        {property.bathrooms} {t('baths')}
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1 text-primary-600" />
                        {property.area}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded-md border border-gray-100">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full btn-primary py-4 rounded-xl font-bold">
                    {t('viewDetails')}
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
            src="/real-estate/modern-villa-1.jpg"
            alt="Luxury Property Inquiry"
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