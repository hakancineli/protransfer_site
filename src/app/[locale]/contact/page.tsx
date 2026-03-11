import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Image from 'next/image'

import { getTranslations } from 'next-intl/server'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-gray-900 group/contact">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Contact ProTransfer Travel"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear group-hover/contact:scale-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-900 to-transparent z-20" />
        </div>

        <div className="relative z-30 flex flex-col justify-end container mx-auto px-4 pb-20 h-full">
          <div className="max-w-4xl text-white">
            <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 font-serif leading-none tracking-tight animate-fade-in">
              {t('ContactPage.heroTitle')}
            </h1>
            <p className="text-xl md:text-3xl opacity-90 max-w-2xl leading-relaxed font-light animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('ContactPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">{t('ContactPage.sendMessageTitle')}</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('ContactPage.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('ContactPage.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('ContactPage.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('ContactPage.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('ContactPage.subject')}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    title="Message Subject"
                    required
                  >
                    <option value="">{t('ContactPage.subjectPlaceholder')}</option>
                    <option value="general">{t('ContactPage.subjectGeneral')}</option>
                    <option value="booking">{t('ContactPage.subjectBooking')}</option>
                    <option value="support">{t('ContactPage.subjectSupport')}</option>
                    <option value="partnership">{t('ContactPage.subjectPartnership')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('ContactPage.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t('ContactPage.submitButton')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">{t('ContactPage.contactInfoTitle')}</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('ContactPage.addressTitle')}</h3>
                      <p className="text-gray-600">
                        {t.rich('ContactPage.address', {
                          br: () => <br />
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('ContactPage.phoneTitle')}</h3>
                      <p className="text-gray-600 flex flex-col">
                        <span>+90 554 581 20 34</span>
                        <span>+90 543 269 54 42</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('ContactPage.emailTitle')}</h3>
                      <p className="text-gray-600">
                        hakancinelii@gmail.com<br />
                        hakancinelii@gmail.com<br />
                        hakancinelii@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('ContactPage.hoursTitle')}</h3>
                      <p className="text-gray-600">
                        {t.rich('ContactPage.hours', {
                          br: () => <br />
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 relative w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9485874328!2d28.98315631541896!3d41.03700397929835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650645c4e5%3A0x1234567890abcdef!2sKocatepe%20Mah.%2C%20Cumhuriyet%20Cad.%20No%3A9%2C%20Taksim%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full rounded-2xl border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ProTransfer Travel Harita"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}