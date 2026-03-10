import { Destination } from '@/types'

export const destinations: Destination[] = [
    {
        name: 'Istanbul',
        description: 'Historic peninsula and Bosphorus view luxury hotels',
        image: '/images/destinations/istanbul.jpg',
        gallery: [
            '/images/destinations/Istanbul/istanbul-1.jpg',
            '/images/destinations/Istanbul/istanbul-2.jpg',
            '/images/destinations/Istanbul/istanbul-3.jpg',
            '/images/destinations/Istanbul/istanbul-4.jpg',
            '/images/destinations/Istanbul/istanbul-5.jpg',
        ],
        hotelCount: 10,
        tours: 45,
        rating: 4.8,
        link: '/hotels/city/istanbul'
    },
    {
        name: 'Trabzon',
        description: 'Pearl of the Black Sea, hotels surrounded by natural beauty',
        image: '/images/destinations/trabzon.jpg',
        gallery: [
            '/images/destinations/Trabzon/trabzon-1.jpg',
            '/images/destinations/Trabzon/trabzon-2.jpg',
            '/images/destinations/Trabzon/trabzon-3.jpg',
            '/images/destinations/Trabzon/trabzon-4.jpg',
            '/images/destinations/Trabzon/trabzon-5.jpg',
        ],
        hotelCount: 10,
        tours: 15,
        rating: 4.6,
        link: '/hotels/city/trabzon'
    },
    {
        name: 'Antalya',
        description: 'Mediterranean paradise, beach and resort hotels',
        image: '/images/destinations/antalya.jpg',
        gallery: [
            '/images/destinations/Antalya/antalya-1.jpg',
            '/images/destinations/Antalya/antalya-2.jpg',
            '/images/destinations/Antalya/antalya-3.jpg',
            '/images/destinations/Antalya/antalya-4.jpg',
            '/images/destinations/Antalya/antalya-5.jpg',
        ],
        hotelCount: 10,
        tours: 28,
        rating: 4.7,
        link: '/hotels/city/antalya'
    },
    {
        name: 'Bursa',
        description: 'Thermal and convention hotels at the foothills of Uludağ',
        image: '/images/destinations/bursa.jpg',
        gallery: [
            '/images/destinations/Bursa/bursa-1.jpg',
            '/images/destinations/Bursa/bursa-2.jpg',
            '/images/destinations/Bursa/bursa-3.jpg',
            '/images/destinations/Bursa/bursa-4.jpg',
            '/images/destinations/Bursa/bursa-5.jpg',
        ],
        hotelCount: 10,
        tours: 20,
        rating: 4.5,
        link: '/hotels/city/bursa'
    }
]
