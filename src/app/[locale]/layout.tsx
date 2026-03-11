import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

import { getTranslations } from 'next-intl/server';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'SEO' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        alternates: {
            canonical: `https://www.protransfer.com.tr/${locale}`,
            languages: {
                'en': 'https://www.protransfer.com.tr/en',
                'tr': 'https://www.protransfer.com.tr/tr',
                'ar': 'https://www.protransfer.com.tr/ar',
                'x-default': 'https://www.protransfer.com.tr/en',
            },
        },
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            url: `https://www.protransfer.com.tr/${locale}`,
            siteName: 'ProTransfer',
            images: [
                {
                    url: '/images/hero-bg.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'ProTransfer Luxury Travel & VIP Transfers',
                },
            ],
            locale: locale === 'tr' ? 'tr_TR' : locale === 'ar' ? 'ar_SA' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('ogTitle'),
            description: t('ogDescription'),
            images: ['/images/hero-bg.jpg'],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const { locale } = await params;
    // const locale = 'tr';
    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "TravelAgency",
                            "name": "ProTransfer",
                            "alternateName": "Pro Transfer & Tourism Agency",
                            "url": "https://www.protransfer.com.tr",
                            "logo": "https://www.protransfer.com.tr/images/logo.png",
                            "image": "https://www.protransfer.com.tr/images/hero-bg.jpg",
                            "description": "Premium VIP Airport Transfers and Luxury Chauffeur Services in Istanbul and across Turkey.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Kocatepe Mah. Cumhuriyet Cad. No: 9 Taksim",
                                "addressLocality": "Istanbul",
                                "addressRegion": "Taksim",
                                "postalCode": "34437",
                                "addressCountry": "TR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 41.037,
                                "longitude": 28.985
                            },
                            "telephone": "+905545812034",
                            "priceRange": "$$",
                            "areaServed": ["Istanbul", "Antalya", "Bodrum", "Cappadocia", "Turkey"],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Travel Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "VIP Airport Transfer"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Luxury Chauffeur Service"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <div id="root" className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <div id="modal-root" />
                    <div id="toast-root" />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
