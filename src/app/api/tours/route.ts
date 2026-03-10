import { NextRequest, NextResponse } from 'next/server'

// Mock tour data - in real app, this would come from database
const tours = [
  {
    id: 1,
    title: 'Istanbul Bosphorus Cruise',
    location: 'Istanbul',
    duration: '3 hours',
    price: 89,
    rating: 4.8,
    reviews: 156,
    image: '/tours/bosphorus-cruise.jpg',
    category: 'cruise',
    difficulty: 'easy',
    groupSize: '2-20',
    highlights: ['Bosphorus Bridge', 'Dolmabahçe Palace', 'Ortaköy Mosque'],
    description: 'Experience the magic of Istanbul from the water with our luxury Bosphorus cruise including dinner and entertainment.',
    itinerary: [
      { time: '19:00', activity: 'Boarding at Kabataş Port' },
      { time: '19:30', activity: 'Cruise begins with welcome drinks' },
      { time: '20:00', activity: 'Dinner service starts' },
      { time: '20:45', activity: 'Passing under Bosphorus Bridge' },
      { time: '21:30', activity: 'Dolmabahçe Palace illumination' },
      { time: '22:30', activity: 'Return to port' }
    ],
    included: ['Dinner', 'Welcome drinks', 'Live music', 'Guide service'],
    notIncluded: ['Alcoholic beverages', 'Tips'],
    meetingPoint: 'Kabataş Port, Istanbul'
  },
  {
    id: 2,
    title: 'Cappadocia Hot Air Balloon',
    location: 'Cappadocia',
    duration: '1 day',
    price: 150,
    rating: 4.9,
    reviews: 289,
    image: '/tours/hot-air-balloon.jpg',
    category: 'adventure',
    difficulty: 'moderate',
    groupSize: '4-16',
    highlights: ['Sunrise Flight', 'Fairy Chimneys', 'Underground Cities'],
    description: 'Float above the magical landscapes of Cappadocia in our hot air balloon at sunrise.',
    itinerary: [
      { time: '04:30', activity: 'Hotel pickup' },
      { time: '05:00', activity: 'Arrival at launch site' },
      { time: '05:30', activity: 'Safety briefing and balloon inflation' },
      { time: '06:00', activity: 'Sunrise takeoff' },
      { time: '07:00', activity: 'Flying over fairy chimneys and valleys' },
      { time: '08:00', activity: 'Landing ceremony' },
      { time: '09:00', activity: 'Light breakfast' },
      { time: '10:00', activity: 'Return to hotel' }
    ],
    included: ['Hotel pickup', 'Light breakfast', 'Flight certificate', 'Insurance'],
    notIncluded: ['Personal expenses', 'Tips'],
    meetingPoint: 'Hotel lobby in Cappadocia'
  },
  {
    id: 3,
    title: 'Ephesus Ancient City Tour',
    location: 'Izmir',
    duration: 'Full day',
    price: 75,
    rating: 4.7,
    reviews: 198,
    image: '/tours/ephesus.jpg',
    category: 'cultural',
    difficulty: 'easy',
    groupSize: '2-15',
    highlights: ['Library of Celsus', 'Great Theatre', 'Temple of Artemis'],
    description: 'Discover the ancient wonders of Ephesus with expert guides and skip-the-line tickets.',
    itinerary: [
      { time: '08:00', activity: 'Hotel pickup in Izmir/Kuşadası' },
      { time: '09:30', activity: 'Arrival at Ephesus' },
      { time: '10:00', activity: 'Guided tour of ancient city' },
      { time: '12:00', activity: 'Lunch at local restaurant' },
      { time: '13:30', activity: 'Visit to Temple of Artemis' },
      { time: '15:00', activity: 'Explore the Library of Celsus' },
      { time: '16:30', activity: 'Great Theatre performance' },
      { time: '18:00', activity: 'Return to hotel' }
    ],
    included: ['Hotel pickup', 'Professional guide', 'Entrance fees', 'Lunch'],
    notIncluded: ['Personal expenses', 'Tips'],
    meetingPoint: 'Hotel lobby in Izmir/Kuşadası'
  },
  {
    id: 4,
    title: 'Pamukkale Thermal Pools',
    location: 'Pamukkale',
    duration: 'Full day',
    price: 95,
    rating: 4.8,
    reviews: 234,
    image: '/tours/pamukkale.jpg',
    category: 'nature',
    difficulty: 'easy',
    groupSize: '2-25',
    highlights: ['Travertine Terraces', 'Hierapolis', 'Cleopatra Pool'],
    description: 'Relax in the healing thermal waters of Pamukkale and explore ancient Hierapolis.',
    itinerary: [
      { time: '08:00', activity: 'Hotel pickup' },
      { time: '09:30', activity: 'Arrival at Pamukkale' },
      { time: '10:00', activity: 'Explore Hierapolis ancient city' },
      { time: '12:00', activity: 'Lunch at local restaurant' },
      { time: '13:30', activity: 'Swim in Cleopatra Pool' },
      { time: '15:00', activity: 'Walk along Travertine Terraces' },
      { time: '16:30', activity: 'Free time at thermal pools' },
      { time: '18:00', activity: 'Return to hotel' }
    ],
    included: ['Hotel pickup', 'Professional guide', 'Entrance fees', 'Lunch'],
    notIncluded: ['Swimsuit', 'Towel', 'Tips'],
    meetingPoint: 'Hotel lobby'
  },
  {
    id: 5,
    title: 'Blue Voyage Gulet Cruise',
    location: 'Bodrum',
    duration: '3 days',
    price: 450,
    rating: 4.9,
    reviews: 167,
    image: '/tours/gulet-cruise.jpg',
    category: 'cruise',
    difficulty: 'easy',
    groupSize: '2-12',
    highlights: ['Private Gulet', 'Swimming Bays', 'Turkish Cuisine'],
    description: 'Sail the turquoise waters of the Aegean Sea on our traditional wooden gulet.',
    itinerary: [
      { time: 'Day 1 - 10:00', activity: 'Boarding in Bodrum' },
      { time: 'Day 1 - 12:00', activity: 'Sail to first bay and swimming' },
      { time: 'Day 1 - 14:00', activity: 'Lunch on board' },
      { time: 'Day 1 - 16:00', activity: 'Afternoon sail to quiet cove' },
      { time: 'Day 1 - 19:00', activity: 'Dinner and overnight in bay' },
      { time: 'Day 2 - 08:00', activity: 'Breakfast and morning swim' },
      { time: 'Day 2 - 11:00', activity: 'Sail to new destination' },
      { time: 'Day 2 - 14:00', activity: 'Lunch and afternoon activities' },
      { time: 'Day 2 - 19:00', activity: 'Dinner and overnight' },
      { time: 'Day 3 - 09:00', activity: 'Morning sail and swim' },
      { time: 'Day 3 - 12:00', activity: 'Return to Bodrum' }
    ],
    included: ['Full board', 'Captain and crew', 'Fuel', 'Insurance'],
    notIncluded: ['Alcoholic beverages', 'Tips'],
    meetingPoint: 'Bodrum Harbor'
  },
  {
    id: 6,
    title: 'Mount Ararat Trekking',
    location: 'Eastern Anatolia',
    duration: '5 days',
    price: 680,
    rating: 4.6,
    reviews: 89,
    image: '/tours/mount-ararat.jpg',
    category: 'adventure',
    difficulty: 'challenging',
    groupSize: '4-8',
    highlights: ['Summit Attempt', 'Glacier Lakes', 'Kurdish Culture'],
    description: 'Challenge yourself with Turkey\'s highest peak trek with experienced mountain guides.',
    itinerary: [
      { time: 'Day 1 - 08:00', activity: 'Transfer to base camp' },
      { time: 'Day 1 - 11:00', activity: 'Begin trek to camp 1' },
      { time: 'Day 1 - 17:00', activity: 'Arrival at camp 1' },
      { time: 'Day 2 - 08:00', activity: 'Trek to higher camp' },
      { time: 'Day 2 - 16:00', activity: 'Arrival at camp 2' },
      { time: 'Day 3 - 06:00', activity: 'Summit attempt' },
      { time: 'Day 3 - 14:00', activity: 'Return to camp 2' },
      { time: 'Day 4 - 09:00', activity: 'Descent to base camp' },
      { time: 'Day 5 - 12:00', activity: 'Return to city' }
    ],
    included: ['Professional guides', 'All meals', 'Camping equipment', 'Insurance'],
    notIncluded: ['Personal climbing gear', 'Tips'],
    meetingPoint: 'Dogubeyazıt Airport'
  }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  // Parse query parameters
  const destination = searchParams.get('destination') || ''
  const category = searchParams.get('category') || ''
  const difficulty = searchParams.get('difficulty') || ''
  const duration = searchParams.get('duration') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  
  // Filter tours based on query parameters
  let filteredTours = tours
  
  if (destination) {
    filteredTours = filteredTours.filter(tour => 
      tour.location.toLowerCase().includes(destination.toLowerCase())
    )
  }
  
  if (category) {
    filteredTours = filteredTours.filter(tour => 
      tour.category === category
    )
  }
  
  if (difficulty) {
    filteredTours = filteredTours.filter(tour => 
      tour.difficulty === difficulty
    )
  }
  
  if (duration) {
    filteredTours = filteredTours.filter(tour => 
      tour.duration.toLowerCase().includes(duration.toLowerCase())
    )
  }
  
  if (minPrice) {
    filteredTours = filteredTours.filter(tour => tour.price >= parseInt(minPrice))
  }
  
  if (maxPrice) {
    filteredTours = filteredTours.filter(tour => tour.price <= parseInt(maxPrice))
  }
  
  return NextResponse.json({
    success: true,
    data: filteredTours,
    pagination: {
      page: 1,
      limit: filteredTours.length,
      total: filteredTours.length
    },
    filters: {
      destination,
      category,
      difficulty,
      duration,
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
    // 2. Check tour availability
    // 3. Process payment
    // 4. Send confirmation emails
    // 5. Save booking to database
    
    // Mock booking response
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      tourId: body.tourId,
      date: body.date,
      participants: body.participants,
      totalPrice: body.totalPrice,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    }
    
    return NextResponse.json({
      success: true,
      data: booking,
      message: 'Tour booked successfully!'
    }, { status: 201 })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to book tour',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 400 })
  }
}