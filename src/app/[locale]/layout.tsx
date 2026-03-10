import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

import { getTranslations } from 'next-intl/server';

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
                    alt: 'ProTransfer Luxury Travel',
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
