'use client'

import { Search, MapPin, Calendar, Clock, Star, ChevronRight, Heart, Camera, Mountain, Ship, User, MessageCircle, ArrowRight, Filter } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import NewsletterModal from '@/components/NewsletterModal'

import { getTranslations } from 'next-intl/server'

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const experiences = [
    {
      id: 1,
      title: "Dawn in the Sky: Cappadocia Balloon Experience",
      author: "Ayşe Yılmaz",
      authorAvatar: '/team/mehmet.jpg',
      date: "October 15, 2024",
      readTime: "5 min read",
      location: "Cappadocia",
      duration: "3 hours",
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/experiences-gallery/:experiences:1 /Cappadocia Hot AirBallon.jpeg',
      category: 'adventure',
      difficulty: 'medium',
      groupSize: '4-16',
      highlights: ['Dawn Flight', 'Fairy Chimneys', 'Champagne Breakfast'],
      excerpt: "Experience that magical moment when thousands of balloons color the sky. Witness the magic of sunrise while floating over Cappadocia's fairy chimneys...",
      content: "Flying in a balloon in Cappadocia is not just an activity, but an unforgettable life experience. When you get up early in the morning and arrive at the balloon area, seeing dozens of balloons inflate at the same time is a celebration in itself...",
      tags: ['cappadocia', 'balloon tour', 'dawn', 'adventure']
    },
    {
      id: 2,
      title: 'Private Yacht Journey in the Blue Waters of the Aegean',
      author: 'Mehmet Kaya',
      authorAvatar: '/team/seyfettin.jpg',
      date: 'October 12, 2024',
      readTime: '7 min read',
      location: 'Bodrum',
      duration: 'Full day',
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg',
      category: 'luxury',
      difficulty: 'easy',
      groupSize: '2-8',
      highlights: ['Private Yacht', 'Swimming Coves', 'Gourmet Lunch'],
      excerpt: "Explore the coves of the Aegean's turquoise waters on your private yacht. Experience an unforgettable blue voyage with a professional crew...",
      content: "We set off to explore the most beautiful coves of the Aegean on our private yacht departing from Bodrum. When we leave the harbor early in the morning, the excitement of this blue adventure that will last until sunset fills our hearts...",
      tags: ['bodrum', 'yacht tour', 'aegean', 'blue voyage']
    },
    {
      id: 3,
      title: 'Ottoman Mystery: Traditional Turkish Bath Ritual',
      author: 'Zeynep Demir',
      authorAvatar: '/team/mehmet.jpg',
      date: 'October 10, 2024',
      readTime: '4 min read',
      location: 'Istanbul',
      duration: '2 hours',
      price: 85,
      rating: 4.7,
      reviews: 198,
      image: '/experiences-gallery/:experiences:3/traditional-turkish-bath-2.jpeg',
      category: 'cultural',
      difficulty: 'easy',
      groupSize: '2-6',
      highlights: ['Historic Bath', 'Traditional Massage', 'Aromatic Oils'],
      excerpt: "Experience centuries-old Turkish bath culture. Relax and rejuvenate with this traditional ritual that renews your body and soul...",
      content: "In the traditional Turkish bath located in Istanbul's historic districts, you witness a ritual that hasn't changed for centuries. The steam rising from the marble basins, the skilled movements of the tellaks...",
      tags: ['istanbul', 'turkish bath', 'culture', 'relaxation']
    },
    {
      id: 4,
      title: 'Flying Over the White Paradise: Pamukkale Paragliding Experience',
      author: 'Can Özkan',
      authorAvatar: '/team/seyfettin.jpg',
      date: 'October 8, 2024',
      readTime: '6 min read',
      location: 'Pamukkale',
      duration: 'Half day',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/experiences-gallery/:experiences:4/pamukkale1.jpeg',
      category: "adventure",
      difficulty: "medium",
      groupSize: "2-12",
      highlights: ["Thermal Pools", "White Terraces", "Ancient Ruins"],
      excerpt: "Soar over Pamukkale's magnificent white travertine terraces with a paraglider. Combine adrenaline and nature in this unique experience...",
      content: "Flying over Pamukkale's white travertine terraces is literally an experience more beautiful than dreaming. When we rise with a professional pilot, we are captivated by the magic of the white paradise stretching beneath us...",
      tags: ["pamukkale", "paragliding", "adventure", "nature"]
    },
    {
      id: 5,
      title: 'Istanbul\'s Flavor Map: Gourmet Street Food Tour',
      author: 'Elif Aksoy',
      authorAvatar: '/team/mehmet.jpg',
      date: 'October 5, 2024',
      readTime: '8 min read',
      location: 'Istanbul',
      duration: '4 hours',
      price: 120,
      rating: 4.6,
      reviews: 156,
      image: '/experiences-gallery/:experiences:5/gourmet-street-food-1.jpeg',
      category: "gastronomy",
      difficulty: "easy",
      groupSize: "4-12",
      highlights: ["Local Markets", "Street Flavors", "Traditional Restaurants"],
      excerpt: "Discover Istanbul's hidden flavors. Starting from the historic peninsula, taste the city's best street foods and local flavors...",
      content: "Eating in Istanbul is not just about filling your stomach, but also a cultural journey. Our tour starting early in the morning in Eminönü, from fish sandwich to mussels, from baklava to Turkish delight...",
      tags: ["istanbul", "food tour", "gastronomy", "street flavors"]
    },
    {
      id: 6,
      title: "Mediterranean's Secret Veil: Kaş Diving Adventure",
      author: "Barış Yıldız",
      authorAvatar: '/team/seyfettin.jpg',
      date: 'October 3, 2024',
      readTime: '9 min read',
      location: 'Kaş',
      duration: 'Full day',
      price: 180,
      rating: 4.9,
      reviews: 89,
      image: '/experiences-gallery/:experiences:6/kas-dalis-at-11.03.41-1024x683.jpeg',
      category: "adventure",
      difficulty: "medium",
      groupSize: "2-8",
      highlights: ["Crystal Clear Waters", "Marine Life", "Professional Instructor"],
      excerpt: "Discover the underwater beauties of the Mediterranean. Experience an unforgettable diving adventure in Kaş's clear waters with a professional instructor...",
      content: "Kaş is one of Turkey's diving paradises. With its crystal-clear waters, rich marine life and wrecks, it's a real paradise for diving enthusiasts. When we arrive at the diving center early in the morning...",
      tags: ["kaş", "diving", "mediterranean", "underwater"]
    }
  ]

  const categories = [
    { value: "all", label: t('ExperiencesPage.allCategories'), icon: Heart },
    { value: "adventure", label: t('ExperiencesPage.categoryAdventure'), icon: Mountain },
    { value: "cultural", label: t('ExperiencesPage.categoryCultural'), icon: Camera },
    { value: "gastronomy", label: t('ExperiencesPage.categoryGastronomy'), icon: Ship },
    { value: "luxury", label: t('ExperiencesPage.categoryLuxury'), icon: Star },
  ]

  const featuredPost = experiences[0]
  const recentPosts = experiences.slice(1, 4)
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredExperiences, setFilteredExperiences] = useState(experiences)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterExperiences(term, selectedCategory)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterExperiences(searchTerm, category)
  }

  const filterExperiences = (term: string, category: string) => {
    let filtered = experiences

    if (category !== 'all') {
      filtered = filtered.filter(exp => exp.category === category)
    }

    if (term) {
      filtered = filtered.filter(exp =>
        exp.title.toLowerCase().includes(term.toLowerCase()) ||
        exp.excerpt.toLowerCase().includes(term.toLowerCase()) ||
        exp.location.toLowerCase().includes(term.toLowerCase()) ||
        exp.tags.some((tag: string) => tag.toLowerCase().includes(term.toLowerCase()))
      )
    }

    setFilteredExperiences(filtered)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsNewsletterOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-tertiary-600 to-tertiary-800">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Experiences Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-end justify-center text-white px-4 pb-8">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              {t('ExperiencesPage.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('ExperiencesPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">{t('ExperiencesPage.featuredExperience')}</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-semibold text-tertiary-600 uppercase tracking-wide">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{featuredPost.title}</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src={featuredPost.authorAvatar}
                    alt={featuredPost.author}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                  <p className="text-sm text-gray-500">{featuredPost.date}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{featuredPost.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{featuredPost.rating}</span>
                  </div>
                </div>
                <Link
                  href={`/experiences/${featuredPost.id}`}
                  className="btn-tertiary flex items-center gap-2"
                >
                  {t('ExperiencesPage.readMore')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">{t('ExperiencesPage.recentExperiences')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-tertiary-600">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-tertiary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src={post.authorAvatar}
                        alt={post.author}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <Link
                    href={`/experiences/${post.id}`}
                    className="text-tertiary-600 hover:text-tertiary-700 font-medium text-sm flex items-center gap-1"
                  >
                    {t('ExperiencesPage.read')}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-tertiary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            {t('ExperiencesPage.stayUpdatedTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('ExperiencesPage.stayUpdatedDesc')}
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('ExperiencesPage.emailPlaceholder')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-tertiary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('ExperiencesPage.subscribeButton')}
            </button>
          </form>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{t('ExperiencesPage.allExperiences')}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>{t('ExperiencesPage.experiencesFound', { count: filteredExperiences.length })}</span>
            </div>
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              title="Category Filter"
              value={selectedCategory}
              onChange={(e) => handleCategoryFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('ExperiencesPage.searchPlaceholder')}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-tertiary-600">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-tertiary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src={post.authorAvatar}
                        alt={post.author}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{post.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag: string, index: number) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{post.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.duration}</span>
                    </div>
                  </div>
                  <Link
                    href={`/experiences/${post.id}`}
                    className="btn-tertiary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    {t('ExperiencesPage.readMore')}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </div>
  )
}