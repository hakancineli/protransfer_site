import { NextRequest, NextResponse } from 'next/server'

// Mock transfer data - in real app, this would come from database
const transfers = [
  {
    id: 1,
    title: 'Istanbul Airport Transfer',
    from: 'Istanbul Airport (IST)',
    to: 'City Center',
    price: 45,
    duration: '45 min',
    image: '/transfers/istanbul-airport.jpg',
    vehicle: 'Mercedes-Benz V-Class',
    features: ['WiFi', 'Bottled Water', 'Professional Driver'],
    capacity: '1-4 passengers',
    luggage: '2 large suitcases + 2 carry-on',
    available: true,
    rating: 4.9,
    reviews: 127
  },
  {
    id: 2,
    title: 'Sabiha Gökçen Airport Transfer',
    from: 'Sabiha Gökçen Airport (SAW)',
    to: 'City Center',
    price: 55,
    duration: '60 min',
    image: '/transfers/sabiha-airport.jpg',
    vehicle: 'Mercedes-Benz S-Class',
    features: ['WiFi', 'Bottled Water', 'Professional Driver'],
    capacity: '1-3 passengers',
    luggage: '2 large suitcases + 1 carry-on',
    available: true,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 3,
    title: 'Antalya Airport Transfer',
    from: 'Antalya Airport (AYT)',
    to: 'Beach Resorts',
    price: 65,
    duration: '90 min',
    image: '/transfers/antalya-airport.jpg',
    vehicle: 'Mercedes-Benz E-Class',
    features: ['WiFi', 'Bottled Water', 'Professional Driver'],
    capacity: '1-4 passengers',
    luggage: '3 large suitcases + 2 carry-on',
    available: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    title: 'Bodrum Airport Transfer',
    from: 'Bodrum Airport (BJV)',
    to: 'City Center',
    price: 50,
    duration: '45 min',
    image: '/transfers/bodrum-airport.jpg',
    vehicle: 'Mercedes-Benz V-Class',
    features: ['WiFi', 'Bottled Water', 'Professional Driver'],
    capacity: '1-6 passengers',
    luggage: '4 large suitcases + 3 carry-on',
    available: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 5,
    title: 'Cappadocia Airport Transfer',
    from: 'Cappadocia Airport (NAV)',
    to: 'City Center',
    price: 75,
    duration: '75 min',
    image: '/transfers/cappadocia-airport.jpg',
    vehicle: 'Mercedes-Benz V-Class',
    features: ['WiFi', 'Bottled Water', 'Professional Driver'],
    capacity: '1-4 passengers',
    luggage: '2 large suitcases + 2 carry-on',
    available: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 6,
    title: 'Private City Tour Transfer',
    from: 'Hotel',
    to: 'Tourist Attractions',
    price: 120,
    duration: 'Full day',
    image: '/transfers/city-tour.jpg',
    vehicle: 'Mercedes-Benz Sprinter',
    features: ['WiFi', 'Refreshments', 'Professional Driver', 'Tour Guide'],
    capacity: '1-8 passengers',
    luggage: 'Small bags only',
    available: true,
    rating: 4.9,
    reviews: 167
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  // Parse query parameters
  const from = searchParams.get('from') || ''
  const to = searchParams.get('to') || ''
  const date = searchParams.get('date') || ''
  const passengers = searchParams.get('passengers') || ''
  const vehicleType = searchParams.get('vehicleType') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  
  // Filter transfers based on query parameters
  let filteredTransfers = transfers
  
  if (from) {
    filteredTransfers = filteredTransfers.filter(transfer => 
      transfer.from.toLowerCase().includes(from.toLowerCase()) ||
      transfer.to.toLowerCase().includes(from.toLowerCase())
    )
  }
  
  if (to) {
    filteredTransfers = filteredTransfers.filter(transfer => 
      transfer.to.toLowerCase().includes(to.toLowerCase()) ||
      transfer.from.toLowerCase().includes(to.toLowerCase())
    )
  }
  
  if (vehicleType) {
    filteredTransfers = filteredTransfers.filter(transfer => 
      transfer.vehicle.toLowerCase().includes(vehicleType.toLowerCase())
    )
  }
  
  if (passengers) {
    const passengerCount = parseInt(passengers)
    filteredTransfers = filteredTransfers.filter(transfer => {
      const capacityRange = transfer.capacity.match(/(\d+)-(\d+)/)
      if (capacityRange) {
        const minCapacity = parseInt(capacityRange[1])
        const maxCapacity = parseInt(capacityRange[2])
        return passengerCount >= minCapacity && passengerCount <= maxCapacity
      }
      return true
    })
  }
  
  if (minPrice) {
    filteredTransfers = filteredTransfers.filter(transfer => transfer.price >= parseInt(minPrice))
  }
  
  if (maxPrice) {
    filteredTransfers = filteredTransfers.filter(transfer => transfer.price <= parseInt(maxPrice))
  }
  
  return NextResponse.json({
    success: true,
    data: filteredTransfers,
    pagination: {
      page: 1,
      limit: filteredTransfers.length,
      total: filteredTransfers.length
    },
    filters: {
      from,
      to,
      date,
      passengers,
      vehicleType,
      minPrice,
      maxPrice
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // In a real app, this would:
    // 1. Validate request data
    // 2. Check transfer availability
    // 3. Process payment
    // 4. Send confirmation emails
    // 5. Save booking to database
    
    // Mock booking response
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      transferId: body.transferId,
      from: body.from,
      to: body.to,
      date: body.date,
      time: body.time,
      passengers: body.passengers,
      totalPrice: body.totalPrice,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      driverInfo: {
        name: 'Mehmet Yılmaz',
        phone: '+90 532 123 4567',
        vehicle: 'Mercedes-Benz V-Class',
        plateNumber: '34 ABC 123'
      }
    }
    
    return NextResponse.json({
      success: true,
      data: booking,
      message: 'Transfer booked successfully!'
    }, { status: 201 })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to book transfer',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 400 })
  }
}