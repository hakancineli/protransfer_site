import { Service } from '@/types'
import { Hotel, Plane, Car, Camera, Key, Building } from 'lucide-react'

export const services: Service[] = [
    {
        icon: Hotel,
        title: 'Luxury Hotels',
        titleTr: 'Lüks Oteller',
        titleAr: 'الفنادق الفاخرة',
        description: 'Hand-picked premium hotels and resorts in Turkey\'s most beautiful locations',
        descriptionTr: 'Türkiye\'nin en güzel lokasyonlarında özenle seçilmiş premium oteller ve tatil köyleri',
        descriptionAr: 'أفضل الفنادق والمنتجعات المختارة في أجمل المواقع في تركيا',
        link: '/hotels'
    },
    {
        icon: Plane,
        title: 'Exclusive Tours',
        titleTr: 'Özel Turlar',
        titleAr: 'جولات حصرية',
        description: 'Private guided tours and unique experiences tailored to your preferences',
        descriptionTr: 'Tercihlerinize göre özel rehberli turlar ve benzersiz deneyimler',
        descriptionAr: 'جولات خاصة موجهة وتجارب فريدة حسب تفضيلاتك',
        link: '/tours'
    },
    {
        icon: Car,
        title: 'VIP Transfers',
        titleTr: 'VIP Transferler',
        titleAr: 'نقل VIP',
        description: 'Premium transportation services with professional drivers',
        descriptionTr: 'Profesyonel sürücülerle birinci sınıf ulaşım hizmetleri',
        descriptionAr: 'خدمات نقل فاخصة مع سائقين محترفين',
        link: '/transfers'
    },
    {
        icon: Camera,
        title: 'Experiences',
        titleTr: 'Deneyimler',
        titleAr: 'تجارب',
        description: 'Unique activities and adventures in every destination',
        descriptionTr: 'Her destinasyonda benzersiz aktiviteler ve maceralar',
        descriptionAr: 'أنشطة ومغامرات فريدة في كل وجهة',
        link: '/experiences'
    },
    {
        icon: Plane,
        title: 'Flights',
        titleTr: 'Uçuşlar',
        titleAr: 'رحلات الطيران',
        description: 'Book domestic and international flights with best prices and schedules',
        descriptionTr: 'En iyi fiyat ve tarifelerle yurt içi ve yurt dışı uçuş rezervasyonu yapın',
        descriptionAr: 'احجز رحلات داخلية ودولية بأفضل الأسعار والجداول الزمنية',
        link: '/flights'
    },
    {
        icon: Key,
        title: 'Rent A Car',
        titleTr: 'Araç Kiralama',
        titleAr: 'تأجرة السيارات',
        description: 'Premium car rental fleet including luxury vehicles for your comfort',
        descriptionTr: 'Konforunuz için lüks araçlar da dahil olmak üzere premium araç kiralama filosu',
        descriptionAr: 'أسطول سيارات فاخرة تشمل مركبات فاخرة لراحتك',
        link: '/rent-a-car'
    },
    {
        icon: Building,
        title: 'Real Estate',
        titleTr: 'Emlak',
        titleAr: 'العقارات',
        description: 'Premium properties for rent and sale with citizenship investment programs',
        descriptionTr: 'Vatandaşlık yatırım programları ile kiralık ve satılık premium mülkler',
        descriptionAr: 'عقارات مميزة للإيجار والبيع مع برامج استثمار المواطنة',
        link: '/real-estate'
    }
]
