import { MapPin, Phone, Mail, Clock, Star, Users, Award, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

import { getTranslations } from 'next-intl/server'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const team = [
    {
      id: 1,
      name: 'SEYFETTIN KIRK',
      position: t('AboutPage.teamMember1Pos'),
      image: '/team/seyfo.jpg',
      bio: t('AboutPage.teamMember1Bio'),
      email: 'hakancinelii@gmail.com',
      phone: '+90 554 581 20 34',
      linkedin: 'https://linkedin.com/in/seyfettin-kirk'
    },
    {
      id: 2,
      name: 'MEHMET KIRK',
      position: t('AboutPage.teamMember2Pos'),
      image: '/team/mehmet.jpg',
      bio: t('AboutPage.teamMember2Bio'),
      email: 'hakancinelii@gmail.com',
      phone: '+90 554 581 20 34',
      linkedin: 'https://linkedin.com/in/mehmet-ozkan'
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: t('AboutPage.achievement1Title'),
      description: t('AboutPage.achievement1Desc')
    },
    {
      icon: Users,
      title: t('AboutPage.achievement2Title'),
      description: t('AboutPage.achievement2Desc')
    },
    {
      icon: Star,
      title: t('AboutPage.achievement3Title'),
      description: t('AboutPage.achievement3Desc')
    },
    {
      icon: MapPin,
      title: t('AboutPage.achievement4Title'),
      description: t('AboutPage.achievement4Desc')
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-gray-900 group/about">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/istanbul.jpg"
            alt="About ProTransfer"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/about:scale-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
        </div>
        <div className="relative z-30 h-full flex flex-col justify-end container mx-auto px-4 pb-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              Our Legacy & Team
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 font-serif leading-none tracking-tight animate-fade-in">
              {t('AboutPage.heroTitle')}
            </h1>
            <p className="text-xl md:text-3xl opacity-90 max-w-3xl leading-relaxed font-light animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('AboutPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Recreating Catalog Page 09 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Managers Header */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 mb-16 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mb-4 bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary-800 uppercase tracking-wider">{member.name}</h3>
                <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase">{member.position}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-primary-800">{t('AboutPage.ourStoryTitle')}</h2>

            <div className="space-y-8 text-xl text-gray-700 leading-relaxed font-light">
              <p>
                {t('AboutPage.ourStoryP1')}
              </p>
              <p>
                {t('AboutPage.ourStoryP2')}
              </p>
            </div>

            {/* Welcome to Turkey + Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20 text-left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/catalog/page-10.jpg"
                  alt="Welcome to Türkiye"
                  fill
                  className="object-contain bg-white"
                  unoptimized
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('AboutPage.ourMissionTitle')}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('AboutPage.ourMissionDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{t('AboutPage.catalogServicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Real Estate */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/catalog/page-01.jpg"
                  alt={t('AboutPage.catalogRealEstateTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600">{t('AboutPage.catalogRealEstateTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('AboutPage.catalogRealEstateDesc')}</p>
              </div>
            </div>

            {/* Trade & Export */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/catalog/page-02.jpg"
                  alt={t('AboutPage.catalogTradeTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600">{t('AboutPage.catalogTradeTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('AboutPage.catalogTradeDesc')}</p>
              </div>
            </div>

            {/* Medical Tourism */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/catalog/page-03.jpg"
                  alt={t('AboutPage.catalogMedicalTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600">{t('AboutPage.catalogMedicalTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('AboutPage.catalogMedicalDesc')}</p>
              </div>
            </div>

            {/* Rent a Car */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/catalog/page-04.jpg"
                  alt={t('AboutPage.catalogRentCarTitle')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600">{t('AboutPage.catalogRentCarTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('AboutPage.catalogRentCarDesc')}</p>
              </div>
            </div>

            {/* Hotels - Full Width */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <Image
                    src="/images/catalog/page-05.jpg"
                    alt={t('AboutPage.catalogHotelsTitle')}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-600">{t('AboutPage.catalogHotelsTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('AboutPage.catalogHotelsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{t('AboutPage.meetTeamTitle')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.bio}</p>
                  {member.id === 1 || member.id === 2 ? (
                    <div className="flex flex-col gap-2 justify-center text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <a
                          href={`https://wa.me/905545812034`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{t('AboutPage.whatsappAccount')}</span>
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{t('AboutPage.whyChooseTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Contact ProTransfer"
            fill
            className="object-cover opacity-60"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">
            {t('AboutPage.ctaTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light leading-relaxed">
            {t('AboutPage.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl">
              {t('AboutPage.contactUs')}
            </Link>
            <Link href="/hotels" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all hover:scale-105 shadow-2xl">
              {t('AboutPage.browseHotels')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}