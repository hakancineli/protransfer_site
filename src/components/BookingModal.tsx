'use client'

import { useState } from 'react'
import { X, Calendar, Users, CreditCard, Check } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  experience: any
}

export default function BookingModal({ isOpen, onClose, experience }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    participants: '1',
    specialRequests: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setTimeout(() => {
        onClose()
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          participants: '1',
          specialRequests: ''
        })
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">Rezervasyon Yap</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!isSubmitted ? (
          <div className="p-6">
            {/* Experience Summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{experience.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{experience.location}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-medium text-tertiary-600">€{experience.price}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{experience.duration}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{experience.groupSize} kişi</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Kişisel Bilgiler
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Katılımcı Sayısı *
                    </label>
                    <select
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                    >
                      <option value="1">1 Kişi</option>
                      <option value="2">2 Kişi</option>
                      <option value="3">3 Kişi</option>
                      <option value="4">4 Kişi</option>
                      <option value="5+">5+ Kişi</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Tarih Seçimi
                </h4>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Özel İstekler
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Özel isteklerinizi buraya yazabilirsiniz..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                />
              </div>

              {/* Price Summary */}
              <div className="bg-tertiary-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Birim Fiyat</span>
                  <span className="font-medium">€{experience.price}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Katılımcı Sayısı</span>
                  <span className="font-medium">{formData.participants}</span>
                </div>
                <div className="border-t pt-2 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Toplam Tutar</span>
                  <span className="font-bold text-xl text-tertiary-600">
                    €{experience.price * parseInt(formData.participants)}
                  </span>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    <a href="#" className="text-tertiary-600 hover:underline">Kullanım koşullarını</a> ve 
                    <a href="#" className="text-tertiary-600 hover:underline"> iade politikasını</a> kabul ediyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-tertiary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'İşleniyor...' : 'Rezervasyonu Tamamla'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rezervasyon Başarılı!
            </h3>
            <p className="text-gray-600 mb-6">
              Rezervasyonunuz başarıyla alındı. En kısa sürede e-posta adresinizle iletişime geçeceğiz.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-left max-w-md mx-auto">
              <h4 className="font-semibold mb-2">Rezervasyon Detayları:</h4>
              <p className="text-sm text-gray-600"><strong>Deneyim:</strong> {experience.title}</p>
              <p className="text-sm text-gray-600"><strong>Tarih:</strong> {formData.date}</p>
              <p className="text-sm text-gray-600"><strong>Katılımcı:</strong> {formData.participants} kişi</p>
              <p className="text-sm text-gray-600"><strong>Toplam:</strong> €{experience.price * parseInt(formData.participants)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}