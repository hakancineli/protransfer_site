import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  Plane
} from 'lucide-react'

// Define constants
const SITE_NAME = 'ProTransfer'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    services: [
      { name: 'Flights', href: '/flights' },
      { name: 'Luxury Hotels', href: '/hotels' },
      { name: 'Private Tours', href: '/tours' },
      { name: 'VIP Transfers', href: '/transfers' },
      { name: 'Experiences', href: '/experiences' },
    ],
    destinations: [
      { name: 'Istanbul', href: '/hotels/city/istanbul' },
      { name: 'Cappadocia', href: '/hotels/city/cappadocia' },
      { name: 'Antalya', href: '/hotels/city/antalya' },
      { name: 'Bodrum', href: '/hotels/city/bodrum' },
      { name: 'Pamukkale', href: '/hotels/city/pamukkale' },
      { name: 'Fethiye', href: '/hotels/city/fethiye' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'FAQ', href: '/faq' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/protransfer', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/protransfer', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/protransfer', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/protransfer', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/protransfer', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="relative py-16 overflow-hidden bg-gray-900 border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/istanbul.jpg"
            alt="Newsletter Background"
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 font-serif">
              Get Exclusive Travel Deals & Inspiration
            </h3>
            <p className="text-lg mb-8 opacity-90 font-light leading-relaxed">
              Subscribe to our newsletter and be the first to know about special offers and luxury travel tips across Turkey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
              <button className="bg-primary-600 text-white px-10 py-4 rounded-full font-bold hover:bg-primary-700 transition-all hover:scale-105 shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-64 h-48 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="ProTransfer Logo"
                    width={320}
                    height={120}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for luxury travel experiences in Turkey.
                We create unforgettable journeys with attention to every detail.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <div className="flex flex-col">
                    <span>+90 554 581 20 34</span>
                    <span>+90 543 269 54 42</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span>hakancinelii@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span>Kocatepe Mah. Cumhuriyet Cad. No:9 K-1 / D3 Taksim / İstanbul</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span>Mon-Fri: 9:00-18:00</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Destinations</h4>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Certifications */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Plane className="w-4 h-4" />
                  <span>IATA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>TURSAB Member</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              © {currentYear} ProTransfer. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}