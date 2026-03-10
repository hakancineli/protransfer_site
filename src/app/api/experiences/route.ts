import { NextRequest, NextResponse } from 'next/server'

// Mock experience data - in real app, this would come from database
const experiences = [
  {
    id: 1,
    title: 'Hot Air Balloon at Sunrise',
    location: 'Cappadocia',
    duration: '3 hours',
    price: 150,
    rating: 4.9,
    reviews: 289,
    image: '/experiences/hot-air-balloon.jpg',
    category: 'adventure',
    difficulty: 'moderate',
    groupSize: '4-16',
    highlights: ['Sunrise Flight', 'Fairy Chimneys', 'Champagne Breakfast'],
    description: 'Experience the magic of Cappadocia from above with our sunrise hot air balloon flight.',
    included: ['Hotel pickup', 'Light breakfast', 'Flight certificate', 'Insurance'],
    notIncluded: ['Personal expenses', 'Tips'],
    meetingPoint: 'Hotel lobby in Cappadocia',
    bestTime: ['April', 'May', 'September', 'October'],
    whatToBring: ['Camera', 'Warm clothing', 'Comfortable shoes']
  },
  {
    id: 2,
    title: 'Private Yacht Tour',
    location: 'Bodrum',
    duration: 'Full day',
    price: 450,
    rating: 4.8,
    reviews: 167,
    image: '/experiences/yacht-tour.jpg',
    category: 'luxury',
    difficulty: 'easy',
    groupSize: '2-8',
    highlights: ['Private Yacht', 'Swimming Bays', 'Gourmet Lunch'],
    description: 'Sail the turquoise waters of the Aegean Sea on your private luxury yacht with professional crew.',
    included: ['Full board', 'Professional crew', 'Fuel', 'Insurance'],
    notIncluded: ['Alcoholic beverages', 'Tips'],
    meetingPoint: 'Bodrum Harbor',
    bestTime: ['May', 'June', 'September', 'October'],
    whatToBring: ['Swimsuit', 'Sunscreen', 'Towel']
  },
  {
    id: 3,
    title: 'Turkish Bath Experience',
    location: 'Istanbul',
    duration: '2 hours',
    price: 85,
    rating: 4.7,
    reviews: 198,
    image: '/experiences/turkish-bath.jpg',
    category: 'cultural',
    difficulty: 'easy',
    groupSize: '2-6',
    highlights: ['Historic Hammam', 'Traditional Massage', 'Aromatic Oils'],
    description: 'Relax and rejuvenate with our authentic Turkish bath experience including traditional massage and aromatic oils.',
    included: ['Traditional hammam access', 'Massage service', 'Aromatic oils', 'Tea service'],
    notIncluded: ['Personal items', 'Tips'],
    meetingPoint: 'Historic Sultanahmet district',
    bestTime: ['All year round'],
    whatToBring: ['Swimsuit', 'Change of clothes']
  },
  {
    id: 4,
    title: 'Paragliding Over Pamukkale',
    location: 'Pamukkale',
    duration: 'Half day',
    price: 95,
    rating: 4.8,
    reviews: 234,
    image: '/experiences/paragliding.jpg',
    category: 'adventure',
    difficulty: 'moderate',
    groupSize: '2-12',
    highlights: ['Thermal Pools', 'White Terraces', 'Ancient Ruins'],
    description: 'Soar above the stunning white travertine terraces of Pamukkale with our professional paragliding experience.',
    included: ['Professional instructor', 'Safety equipment', 'Insurance', 'Photos'],
    notIncluded: ['Personal expenses', 'Tips'],
    meetingPoint: 'Pamukkale takeoff point',
    bestTime: ['April', 'May', 'September', 'October'],
    whatToBring: ['Comfortable clothing', 'Closed shoes', 'Camera']
  },
  {
    id: 5,
    title: 'Gourmet Food Tour',
    location: 'Istanbul',
    duration: '4 hours',
    price: 120,
    rating: 4.6,
    reviews: 156,
    image: '/experiences/food-tour.jpg',
    category: 'culinary',
    difficulty: 'easy',
    groupSize: '4-12',
    highlights: ['Local Markets', 'Street Food', 'Traditional Restaurants'],
    description: 'Discover the rich flavors of Turkish cuisine with our guided food tour through local markets and traditional restaurants.',
    included: ['Food tastings', 'Local guide', 'Drinks', 'Recipe book'],
    notIncluded: ['Additional purchases', 'Tips'],
    meetingPoint: 'Central Istanbul',
    bestTime: ['All year round'],
    whatToBring: ['Comfortable walking shoes', 'Appetite']
  },
  {
    id: 6,
    title: 'Diving in Kas',
    location: 'Kas',
    duration: 'Full day',
    price: 180,
    rating: 4.9,
    reviews: 89,
    image: '/experiences/diving.jpg',
    category: 'adventure',
    difficulty: 'moderate',
    groupSize: '2-8',
    highlights: ['Crystal Waters', 'Marine Life', 'Professional Instructor'],
    description: 'Explore the underwater world of the Mediterranean Sea with our professional diving experience in crystal-clear waters of Kas.',
    included: ['Diving equipment', 'Professional instructor', 'Boat transfer', 'Lunch'],
    notIncluded: ['Personal diving gear', 'Underwater camera', 'Tips'],
    meetingPoint: 'Kas Harbor',
    bestTime: ['May', 'June', 'September', 'October'],
    whatToBring: ['Swimsuit', 'Towel', 'Sunscreen']
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
  
  // Filter experiences based on query parameters
  let filteredExperiences = experiences
  
  if (destination) {
    filteredExperiences = filteredExperiences.filter(experience => 
      experience.location.toLowerCase().includes(destination.toLowerCase())
    )
  }
  
  if (category) {
    filteredExperiences = filteredExperiences.filter(experience => 
      experience.category === category
    )
  }
  
  if (difficulty) {
    filteredExperiences = filteredExperiences.filter(experience => 
      experience.difficulty === difficulty
    )
  }
  
  if (duration) {
    filteredExperiences = filteredExperiences.filter(experience => 
      experience.duration.toLowerCase().includes(duration.toLowerCase())
    )
  }
  
  if (minPrice) {
    filteredExperiences = filteredExperiences.filter(experience => experience.price >= parseInt(minPrice))
  }
  
  if (maxPrice) {
    filteredExperiences = filteredExperiences.filter(experience => experience.price <= parseInt(maxPrice))
  }
  
  return NextResponse.json({
    success: true,
    data: filteredExperiences,
    pagination: {
      page: 1,
      limit: filteredExperiences.length,
      total: filteredExperiences.length
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
    // 2. Check experience availability
    // 3. Process payment
    // 4. Send confirmation emails
    // 5. Save booking to database
    
    // Mock booking response
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      experienceId: body.experienceId,
      date: body.date,
      participants: body.participants,
      totalPrice: body.totalPrice,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    }
    
    return NextResponse.json({
      success: true,
      data: booking,
      message: 'Experience booked successfully!'
    }, { status: 201 })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to book experience',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 400 })
  }
}