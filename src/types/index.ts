import { LucideIcon } from 'lucide-react'

export interface Hotel {
    id: number
    name: string
    location: string
    rating: number
    reviews: number
    price: number
    image: string
    amenities: string[]
    description: string
}

export interface Tour {
    id: number
    title: string
    location: string
    duration: string
    price: number
    rating: number
    reviews: number
    image: string
    category: string
    difficulty: string
    groupSize: string
    highlights: string[]
    description: string
}

export interface Service {
    icon: any // LucideIcon type is tricky to import directly sometimes, using any for flexibility or we can import it
    title: string
    titleTr?: string
    titleAr?: string
    description: string
    descriptionTr?: string
    descriptionAr?: string
    link: string
}

export interface Destination {
    name: string
    description?: string
    image: string
    gallery?: string[]
    hotelCount?: number
    tours?: number
    rating?: number
    link?: string
}
