'use client'

import { useState } from 'react'
import { X, Mail, Check } from 'lucide-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setTimeout(() => {
        onClose()
        setEmail('')
        setIsSubscribed(false)
      }, 2000)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubscribed ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-tertiary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-tertiary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Bültenimize Abone Olun
              </h3>
              <p className="text-gray-600">
                Türkiye'nin en özel deneyimlerini kaçırmayın. Haftalık bültenimizle yeni rotaları keşfedin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Kişisel verilerimin korunmasını kabul ediyorum ve özel teklifler almak istiyorum.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-tertiary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Abone Olunuyor...' : 'Abone Ol'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Başarılı!
            </h3>
            <p className="text-gray-600">
              Bültenimize başarıyla abone oldunuz. En yeni deneyimlerden ilk siz haberdar olacaksınız.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}