import { NextRequest, NextResponse } from 'next/server'

// Mock hotel data - in real app, this would come from database
const hotels = [
  {
    id: 1,
    name: 'The Ritz-Carlton Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.8,
    reviews: 324,
    price: 450,
    image: '/hotels/ritz-carlton.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Luxury hotel in the heart of Istanbul with stunning Bosphorus views',
    rooms: [
      { type: 'Deluxe Room', price: 450, available: 12 },
      { type: 'Executive Suite', price: 650, available: 5 },
      { type: 'Presidential Suite', price: 1200, available: 2 }
    ]
  },
  {
    id: 2,
    name: 'Swissotel The Bosphorus',
    location: 'Istanbul, Turkey',
    rating: 4.7,
    reviews: 256,
    price: 380,
    image: '/hotels/swissotel.jpg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
    description: 'Elegant hotel overlooking the Bosphorus with world-class amenities',
    rooms: [
      { type: 'Standard Room', price: 280, available: 8 },
      { type: 'Deluxe Room', price: 380, available: 15 },
      { type: 'Junior Suite', price: 520, available: 6 }
    ]
  },
  {
    id: 3,
    name: 'Museum Hotel Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.6,
    reviews: 189,
    price: 320,
    image: '/hotels/museum-hotel.jpg',
    amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
    description: 'Boutique hotel in the historic Sultanahmet district',
    rooms: [
      { type: 'Classic Room', price: 220, available: 10 },
      { type: 'Superior Room', price: 320, available: 12 },
      { type: 'Deluxe Room', price: 420, available: 8 }
    ]
  },
  {
    id: 4,
    name: 'Cappadocia Cave Resort',
    location: 'Cappadocia, Turkey',
    rating: 4.9,
    reviews: 412,
    price: 280,
    image: '/hotels/Kapadokya%20Cave%20Resort/Kapadokya%20Cave%20Resort-1.jpeg',
    amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
    description: 'Unique cave hotel experience in the heart of Cappadocia',
    rooms: [
      { type: 'Cave Room', price: 180, available: 20 },
      { type: 'Deluxe Cave Room', price: 280, available: 15 },
      { type: 'Suite Cave', price: 380, available: 8 }
    ]
  },
  {
    id: 5,
    name: 'Mardan Palace',
    location: 'Antalya, Turkey',
    rating: 4.7,
    reviews: 298,
    price: 350,
    image: '/hotels/mardan-palace.jpg',
    amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
    description: 'Luxury resort on the Mediterranean coast with private beach',
    rooms: [
      { type: 'Garden View Room', price: 250, available: 15 },
      { type: 'Sea View Room', price: 350, available: 20 },
      { type: 'Beach Villa', price: 550, available: 5 }
    ]
  },
  {
    id: 6,
    name: 'The Land of Legends',
    location: 'Bodrum, Turkey',
    rating: 4.8,
    reviews: 167,
    price: 420,
    image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
    amenities: ['wifi', 'pool', 'spa', 'beach-club', 'water-sports'],
    description: 'Exclusive beachfront resort with stunning Mediterranean Sea views',
    rooms: [
      { type: 'Standard Room', price: 320, available: 18 },
      { type: 'Sea View Room', price: 420, available: 12 },
      { type: 'Beach Bungalow', price: 580, available: 6 }
    ]
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  // Parse query parameters
  const destination = searchParams.get('destination') || ''
  const category = searchParams.get('category') || ''
  const checkIn = searchParams.get('checkIn') || ''
  const checkOut = searchParams.get('checkOut') || ''
  const guests = searchParams.get('guests') || '2'
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  
  // Filter hotels based on query parameters
  let filteredHotels = hotels
  
  if (destination) {
    filteredHotels = filteredHotels.filter(hotel => 
      hotel.location.toLowerCase().includes(destination.toLowerCase())
    )
  }
  
  if (category) {
    filteredHotels = filteredHotels.filter(hotel => 
      hotel.amenities.includes(category.toLowerCase())
    )
  }
  
  if (minPrice) {
    filteredHotels = filteredHotels.filter(hotel => hotel.price >= parseInt(minPrice))
  }
  
  if (maxPrice) {
    filteredHotels = filteredHotels.filter(hotel => hotel.price <= parseInt(maxPrice))
  }
  
  return NextResponse.json({
    success: true,
    data: filteredHotels,
    pagination: {
      page: 1,
      limit: filteredHotels.length,
      total: filteredHotels.length
    },
    filters: {
      destination,
      category,
      checkIn,
      checkOut,
      guests,
      minPrice,
      maxPrice
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // In a real app, this would:
    // 1. Validate the request data
    // 2. Check hotel availability
    // 3. Process payment
    // 4. Send confirmation emails
    // 5. Save booking to database
    
    // Mock booking response
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      hotelId: body.hotelId,
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      guests: body.guests,
      rooms: body.rooms,
      totalPrice: body.totalPrice,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    }
    
    return NextResponse.json({
      success: true,
      data: booking,
      message: 'Hotel booked successfully!'
    }, { status: 201 })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to book hotel',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 400 })
  }
}