import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'ProTransfer - Luxury Tourism & Travel Agency',
    description: 'Experience luxury travel with ProTransfer.',
};

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
