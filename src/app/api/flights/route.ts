import { NextRequest, NextResponse } from 'next/server'

// Mock flight data - in real app, this would come from database or external API
const flights = [
  {
    id: 1,
    airline: 'Turkish Airlines',
    flightNumber: 'TK1234',
    from: 'Istanbul (IST)',
    to: 'Antalya (AYT)',
    departure: '08:30',
    arrival: '10:15',
    price: 125,
    duration: '1h 45m',
    aircraft: 'Boeing 737-800',
    class: 'Economy',
    image: '/flights/istanbul-antalya.jpg',
    availableSeats: 45,
    totalSeats: 180,
    stops: 0,
    baggage: {
      carryOn: '8kg',
      checked: '20kg'
    },
    amenities: ['Meal', 'Entertainment', 'WiFi'],
    rating: 4.8,
    reviews: 324
  },
  {
    id: 2,
    airline: 'Pegasus Airlines',
    flightNumber: 'PC5678',
    from: 'Istanbul (IST)',
    to: 'Cappadocia (NAV)',
    departure: '10:00',
    arrival: '11:30',
    price: 95,
    duration: '1h 30m',
    aircraft: 'Airbus A320',
    class: 'Economy',
    image: '/flights/istanbul-cappadocia.jpg',
    availableSeats: 23,
    totalSeats: 180,
    stops: 0,
    baggage: {
      carryOn: '8kg',
      checked: '15kg'
    },
    amenities: ['Snacks', 'Entertainment'],
    rating: 4.6,
    reviews: 256
  },
  {
    id: 3,
    airline: 'SunExpress',
    flightNumber: 'XQ9456',
    from: 'Istanbul (IST)',
    to: 'Bodrum (BJV)',
    departure: '14:00',
    arrival: '15:30',
    price: 85,
    duration: '1h 30m',
    aircraft: 'Boeing 737-700',
    class: 'Economy',
    image: '/flights/istanbul-bodrum.jpg',
    availableSeats: 67,
    totalSeats: 189,
    stops: 0,
    baggage: {
      carryOn: '7kg',
      checked: '15kg'
    },
    amenities: ['Snacks', 'Drinks'],
    rating: 4.5,
    reviews: 198
  },
  {
    id: 4,
    airline: 'Turkish Airlines',
    flightNumber: 'TK2345',
    from: 'Istanbul (IST)',
    to: 'Izmir (ADB)',
    departure: '16:00',
    arrival: '17:15',
    price: 110,
    duration: '1h 15m',
    aircraft: 'Airbus A321',
    class: 'Business',
    image: '/flights/istanbul-izmir.jpg',
    availableSeats: 12,
    totalSeats: 28,
    stops: 0,
    baggage: {
      carryOn: '10kg',
      checked: '30kg'
    },
    amenities: ['Full Meal', 'Lounge Access', 'Priority Boarding', 'WiFi'],
    rating: 4.9,
    reviews: 412
  },
  {
    id: 5,
    airline: 'AnadoluJet',
    flightNumber: 'AJ8901',
    from: 'Istanbul (IST)',
    to: 'Trabzon (TZX)',
    departure: '18:00',
    arrival: '19:30',
    price: 95,
    duration: '1h 30m',
    aircraft: 'Boeing 737-800',
    class: 'Economy',
    image: '/flights/istanbul-trabzon.jpg',
    availableSeats: 34,
    totalSeats: 165,
    stops: 0,
    baggage: {
      carryOn: '8kg',
      checked: '20kg'
    },
    amenities: ['Snacks', 'Entertainment'],
    rating: 4.4,
    reviews: 167
  },
  {
    id: 6,
    airline: 'Turkish Airlines',
    flightNumber: 'TK3456',
    from: 'Istanbul (IST)',
    to: 'Ankara (ESB)',
    departure: '07:00',
    arrival: '08:00',
    price: 75,
    duration: '1h 00m',
    aircraft: 'Airbus A319',
    class: 'Economy',
    image: '/flights/istanbul-ankara.jpg',
    availableSeats: 89,
    totalSeats: 132,
    stops: 0,
    baggage: {
      carryOn: '8kg',
      checked: '20kg'
    },
    amenities: ['Snacks', 'Entertainment'],
    rating: 4.3,
    reviews: 234
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  // Parse query parameters
  const from = searchParams.get('from') || ''
  const to = searchParams.get('to') || ''
  const departureDate = searchParams.get('departureDate') || ''
  const returnDate = searchParams.get('returnDate') || ''
  const passengers = searchParams.get('passengers') || '1'
  const travelClass = searchParams.get('class') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  const directFlight = searchParams.get('direct') === 'true'
  
  // Filter flights based on query parameters
  let filteredFlights = flights
  
  if (from) {
    filteredFlights = filteredFlights.filter(flight => 
      flight.from.toLowerCase().includes(from.toLowerCase())
    )
  }
  
  if (to) {
    filteredFlights = filteredFlights.filter(flight => 
      flight.to.toLowerCase().includes(to.toLowerCase())
    )
  }
  
  if (travelClass) {
    filteredFlights = filteredFlights.filter(flight => 
      flight.class.toLowerCase() === travelClass.toLowerCase()
    )
  }
  
  if (minPrice) {
    filteredFlights = filteredFlights.filter(flight => flight.price >= parseInt(minPrice))
  }
  
  if (maxPrice) {
    filteredFlights = filteredFlights.filter(flight => flight.price <= parseInt(maxPrice))
  }
  
  if (directFlight) {
    filteredFlights = filteredFlights.filter(flight => flight.stops === 0)
  }
  
  // Sort by price (lowest first)
  filteredFlights.sort((a, b) => a.price - b.price)
  
  return NextResponse.json({
    success: true,
    data: filteredFlights,
    pagination: {
      page: 1,
      limit: filteredFlights.length,
      total: filteredFlights.length
    },
    filters: {
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      class: travelClass,
      minPrice,
      maxPrice,
      direct: directFlight
    },
    airlines: Array.from(new Set(flights.map(f => f.airline))),
    destinations: Array.from(new Set(flights.map(f => f.to)))
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // In a real app, this would:
    // 1. Validate request data
    // 2. Check flight availability
    // 3. Process payment
    // 4. Send confirmation emails
    // 5. Save booking to database
    // 6. Generate PNR (Passenger Name Record)
    
    // Mock booking response
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      pnr: Math.random().toString(36).substr(2, 6).toUpperCase(),
      flightId: body.flightId,
      passengers: body.passengers,
      departureDate: body.departureDate,
      returnDate: body.returnDate,
      class: body.class,
      totalPrice: body.totalPrice,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      checkInInfo: {
        onlineCheckIn: true,
        opens: '24 hours before departure',
        closes: '1 hour before departure'
      },
      baggageInfo: {
        carryOn: body.passengers[0]?.carryOn || '8kg',
        checked: body.passengers[0]?.checkedBaggage || '20kg'
      }
    }
    
    return NextResponse.json({
      success: true,
      data: booking,
      message: 'Flight booked successfully!'
    }, { status: 201 })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to book flight',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 400 })
  }
}