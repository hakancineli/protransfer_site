'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter, Link } from '@/i18n/navigation'
import { Phone, Mail, Globe, Menu, X, Search, User } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Navigation')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname
    router.replace(currentPath, { locale: newLocale })
    setIsLangMenuOpen(false)
  }

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/hotels', label: t('hotels') },
    { href: '/tours', label: t('tours') },
    { href: '/transfers', label: t('transfers') },
    { href: '/flights', label: t('flights') },
    { href: '/rent-a-car', label: t('rentCar') },
    { href: '/real-estate', label: t('realEstate') },
    { href: '/experiences', label: t('experiences') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      {/* Top Bar - Hidden on Mobile */}
      <div className={`hidden md:block border-b ${isScrolled ? 'border-gray-100' : 'border-white/10'} mb-2`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className={`flex items-center gap-6 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            <a href="tel:+905545812034" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+90 554 581 20 34</span>
            </a>
            <a href="mailto:hakancinelii@gmail.com" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <Mail className="w-4 h-4" />
              <span>hakancinelii@gmail.com</span>
            </a>
          </div>
          <div className={`flex items-center gap-4 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 hover:text-primary-500 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[120px] text-gray-800">
                  <button onClick={() => handleLanguageChange('en')} className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
                    <span className="text-lg">🇺🇸</span> English
                  </button>
                  <button onClick={() => handleLanguageChange('tr')} className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
                    <span className="text-lg">🇹🇷</span> Türkçe
                  </button>
                  <button onClick={() => handleLanguageChange('ar')} className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2">
                    <span className="text-lg">🇸🇦</span> العربية
                  </button>
                </div>
              )}
            </div>
            <button className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-14 w-40 md:h-20 md:w-56">
            <Image
              src="/images/logo.png"
              alt="Pro Transfer"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}>
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="relative h-10 w-28">
                <Image
                  src="/images/logo-dark.png"
                  alt="Pro Transfer"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-primary-600 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Language</span>
                  <div className="flex gap-2">
                    <button onClick={() => handleLanguageChange('en')} className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100'}`}>EN</button>
                    <button onClick={() => handleLanguageChange('tr')} className={`px-3 py-1 rounded ${locale === 'tr' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100'}`}>TR</button>
                    <button onClick={() => handleLanguageChange('ar')} className={`px-3 py-1 rounded ${locale === 'ar' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100'}`}>AR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}