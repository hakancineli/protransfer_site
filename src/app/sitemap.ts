import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.protransfer.com.tr';
    const locales = ['en', 'tr', 'ar'];
    const paths = [
        '',
        '/about',
        '/contact',
        '/transfers',
        '/tours',
        '/hotels',
        '/flights',
        '/rent-a-car',
        '/real-estate',
        '/experiences',
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        paths.forEach((path) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: path === '' ? 'daily' : 'weekly',
                priority: path === '' ? 1 : 0.8,
            });
        });
    });

    return sitemapEntries;
}
