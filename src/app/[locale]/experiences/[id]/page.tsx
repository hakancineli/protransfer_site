'use client'

import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight, X, Clock, ChevronLeft, Heart, Share2, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import BookingModal from '@/components/BookingModal'

// Dynamic data - will come from API in real application
const getExperienceData = (id: string) => {
  const experiences: Record<string, any> = {
    '1': {
      id: 1,
      title: "Dawn in the Sky: Cappadocia Balloon Experience - Gökyüzünde Şafak: Kapadokya Balon Deneyimi",
      author: "Ayşe Yılmaz",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "Travel writer and adventure enthusiast. Discovering Turkey's most beautiful places with 10+ years of experience.",
      date: "October 15, 2024",
      readTime: "5 min read",
      location: "Cappadocia",
      duration: "3 hours",
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg",
      category: "adventure",
      difficulty: "medium",
      groupSize: "4-16",
      highlights: ["Dawn Flight", "Fairy Chimneys", "Champagne Breakfast"],
      excerpt: "Experience that magical moment when thousands of balloons color the sky. Witness the magic of sunrise while floating over Cappadocia's fairy chimneys...",
      content: `
        <h2>Greeting the Sun from the Sky: A Magical Dawn Experience</h2>
        <p>Flying in a balloon in Cappadocia is not just an activity, but an unforgettable life experience that touches your soul. When you get up early in the morning and arrive at the balloon area, seeing dozens of balloons inflate simultaneously against the backdrop of the rising sun is a celebration in itself. This unique experience, where the first light of day paints the sky in warm hues, offers you the opportunity to witness nature's most spectacular morning show from hundreds of meters above ground.</p>
        
        <h3>The Magic of Dawn Flight</h3>
        <p>Why dawn time? Because this is when nature performs its most magnificent show. Our hot air balloons that take off with the first lights of morning are designed to capture the most beautiful moments of sunrise. In the windless weather of early morning, hot air balloons float silently, offering you uninterrupted views of Cappadocia's unique landscape. During this approximately one-hour journey, you'll feel as if you're drifting through a dream as the sun slowly illuminates the fairy chimneys and valleys below.</p>
        
        <h3>What to Expect During Your Journey</h3>
        <p>Your balloon adventure begins with hotel transfer service in the early hours of morning. Upon arrival at the launch site, you'll watch in awe as your balloon comes to life, growing larger and larger as it fills with hot air. After a comprehensive safety briefing from your experienced pilot, you'll step into the wicker basket and begin your gentle ascent into the sky. The flight typically lasts 45-60 minutes, during which you'll drift with the wind currents over Cappadocia's most stunning landscapes.</p>
        
        <h3>Complete Service Package</h3>
        <ul>
          <li><strong>Hotel Transfer Service:</strong> Comfortable transportation from your hotel to launch site and return</li>
          <li><strong>Professional Pilot Experience:</strong> Flights conducted by internationally certified, experienced pilots</li>
          <li><strong>Comprehensive Safety Briefing:</strong> Detailed instructions and safety equipment provided</li>
          <li><strong>Champagne Celebration:</strong> Traditional champagne toast and light breakfast after landing</li>
          <li><strong>Commemorative Flight Certificate:</strong> Personalized certificate to remember your special day</li>
          <li><strong>Insurance Coverage:</strong> Full insurance coverage throughout your experience</li>
        </ul>
        
        <h3>The Spectacular Flight Route</h3>
        <p>On this magical route where you will float over the fairy chimneys, Ihlara Valley and Selime Monastery, you will see Cappadocia's 3000-year history and natural beauty from a bird's eye view. Your pilot will navigate using wind currents to showcase the region's most impressive formations. You'll glide over Love Valley, Red Valley, and other iconic locations, with ample opportunities for photographs that will capture the essence of this otherworldly landscape. The flight path varies daily based on wind conditions, ensuring each journey is unique and tailored to showcase Cappadocia's best features.</p>
        
        <h3>Best Time to Experience</h3>
        <p>While Cappadocia offers balloon flights year-round, the best conditions typically occur from April to November when weather patterns are most favorable. Spring and autumn provide particularly stunning backdrops with blooming flowers or fall colors enhancing the already dramatic landscape. Flights operate daily, weather permitting, with launch times typically around sunrise to take advantage of the calmest air conditions.</p>
        
        <h3>Why This Experience is Special</h3>
        <p>What sets Cappadocia balloon flights apart is the combination of natural wonder, cultural significance, and personal transformation. This isn't just a sightseeing tour – it's a journey that connects you with ancient traditions of flight while creating memories that last a lifetime. The peaceful silence of floating above the earth, broken only by the occasional burst of the burner, provides a meditative experience that few other adventures can match. As you watch the landscape awaken below, you'll understand why this region has inspired visitors for millennia and why hot air ballooning has become the quintessential Cappadocia experience.</p>
      `,
      tags: ["cappadocia", "balloon tour", "dawn", "adventure"],
      gallery: [
        "/experiences-gallery/:experiences:1 /Cappadocia Hot AirBallon.jpeg",
        "/experiences-gallery/:experiences:1 /cappadocia3.jpeg",
        "/experiences-gallery/:experiences:1 /kapadokyasunday1.jpeg"
      ],
      relatedExperiences: [
        { id: 2, title: "Private Yacht Journey in the Blue Waters of Aegean", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" },
        { id: 3, title: "Ottoman Mystery: Traditional Turkish Bath Ritual", image: "/team/seyfettin.jpg" }
      ]
    },
    '2': {
      id: 2,
      title: "Private Yacht Journey in the Blue Waters of Aegean",
      author: "Mehmet Kaya",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "Sea lover and captain. Organizing private yacht tours in the Aegean and Mediterranean for 15 years.",
      date: "October 12, 2024",
      readTime: "7 min read",
      location: "Bodrum",
      duration: "Full day",
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg",
      category: "luxury",
      difficulty: "easy",
      groupSize: "2-8",
      highlights: ["Private Yacht", "Swimming Coves", "Gourmet Lunch"],
      excerpt: "Explore the coves of the Aegean's turquoise waters on your private yacht. Experience an unforgettable blue voyage with a professional crew...",
      content: `
        <h2>Gems of the Aegean: Private Yacht Tour</h2>
        <p>We set off to explore the most beautiful coves of the Aegean on our private yacht departing from Bodrum. When we leave the harbor early in the morning, the excitement of this blue adventure that will last until sunset fills our hearts.</p>
        
        <h3>Advantages of Private Yacht</h3>
        <p>Traveling on your own private yacht gives you complete freedom. You can determine the route together, stop at any cove you want, and vacation at your own pace.</p>
        
        <h3>Daily Program</h3>
        <ul>
          <li>09:00 - Departure from Bodrum harbor</li>
          <li>10:30 - Breakfast and swimming break at Karaada Cove</li>
          <li>13:00 - Lunch at Orak Island</li>
          <li>15:30 - Swimming and sunbathing at Paradise Cove</li>
          <li>18:00 - Return to Bodrum</li>
        </ul>
        
        <h3>Yacht Features</h3>
        <p>Our luxury yacht, 12 meters long, has 4 cabins, 2 toilets, a fully equipped kitchen and a large deck area. Our professional crew is at your service for your comfort and safety.</p>
      `,
      tags: ["bodrum", "yacht tour", "aegean", "blue voyage"],
      gallery: [
        "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg",
        "/images/destinations/bodrum.jpg",
        "/images/destinations/bodrum.jpg"
      ],
      relatedExperiences: [
        { id: 1, title: "Dawn in the Sky: Cappadocia Balloon Experience", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 4, title: "Flying Over the White Paradise: Pamukkale Paragliding Experience", image: "/images/destinations/pamukkale.jpg" }
      ]
    },
    '3': {
      id: 3,
      title: "Ottoman Mystery: Traditional Turkish Bath Ritual",
      author: "Zeynep Demir",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "Cultural historian and traditional treatment specialist. Combining Ottoman bath culture with modern approaches.",
      date: "October 10, 2024",
      readTime: "4 min read",
      location: "Istanbul",
      duration: "2 hours",
      price: 85,
      rating: 4.7,
      reviews: 198,
      image: "/images/destinations/istanbul.jpg",
      category: "cultural",
      difficulty: "easy",
      groupSize: "2-6",
      highlights: ["Historic Bath", "Traditional Massage", "Aromatic Oils"],
      excerpt: "Experience the centuries-old Turkish bath culture. Relax and rejuvenate with this traditional ritual that renews your body and soul...",
      content: `
        <h2>Heart of Ottoman Heritage: The Authentic Turkish Bath Ritual</h2>
        <p>Step into a living museum of wellness where centuries of Ottoman tradition continue to thrive in Istanbul's historic districts. In these atmospheric bathhouses, you'll witness a ritual that has remained virtually unchanged for over 600 years. The steam rising from the magnificent marble basins, the skilled movements of the tellaks (bath attendants), and the ancient echoes within these walls create an experience that transcends mere cleansing—it's a journey through Turkey's rich cultural heritage.</p>
        
        <h3>The Cultural Significance of Hamam</h3>
        <p>The Turkish bath represents far more than a purification ritual; it embodies a sophisticated social culture that has served as the cornerstone of Ottoman society for centuries. This tradition wasn't merely about physical cleanliness—it was a place where business deals were sealed, friendships forged, and community bonds strengthened. Today, this cherished heritage continues to thrive, thoughtfully preserved through modern approaches while maintaining authentic practices that have been passed down through generations of dedicated practitioners.</p>
        
        <h3>Therapeutic Health Benefits</h3>
        <p>Beyond the immediate sense of relaxation, the Turkish bath offers numerous scientifically recognized health benefits that have made it a cornerstone of traditional wellness practices:</p>
        <ul>
          <li><strong>Enhanced Circulation:</strong> The combination of heat and steam stimulates blood flow, improving cardiovascular function and delivering oxygen-rich blood throughout your body</li>
          <li><strong>Skin Renewal and Detoxification:</strong> The deep cleansing removes dead skin cells and opens pores, promoting cellular regeneration and giving your skin a healthy, radiant glow</li>
          <li><strong>Muscle and Joint Relief:</strong> The therapeutic heat helps alleviate chronic pain, reduces inflammation, and provides relief for arthritis and rheumatic conditions</li>
          <li><strong>Stress Reduction and Mental Clarity:</strong> The serene environment and rhythmic massage techniques lower cortisol levels while promoting the release of endorphins, creating a profound sense of well-being</li>
        </ul>
        
        <h3>The Five Stages of Traditional Ritual</h3>
        <p>Your hamam experience follows a carefully preserved sequence that has been perfected over centuries, each stage serving both practical and symbolic purposes:</p>
        <ul>
          <li><strong>Preparation in the Warming Section:</strong> Begin in the hararet (warming area) where your body gradually acclimates to the increasing temperature, preparing you for the cleansing ritual ahead</li>
          <li><strong>Exfoliation with the Kese:</strong> Experience the traditional kese ritual, where your attendant uses a special woven mitten to remove dead skin and stimulate circulation, revealing fresh, rejuvenated skin beneath</li>
          <li><strong>Foam Massage and Köpük:</strong> Indulge in the luxurious foam massage, where billowing clouds of fragrant soap foam are applied using a special cloth pouch (köpük), followed by expert massage techniques that release tension and promote relaxation</li>
          <li><strong>Washing and Resting:</strong> A thorough cleansing with warm water followed by a period of peaceful relaxation, allowing your body to absorb the full benefits of the preceding treatments</li>
          <li><strong>Massage with Aromatic Oils:</strong> Conclude your ritual with a gentle massage using specially selected aromatic oils, each chosen for their unique therapeutic properties and connection to traditional Turkish wellness practices</li>
        </ul>
        
        <h3>Beyond the Basic Experience</h3>
        <p>Our Turkish bath experience offers authentic touches that elevate it beyond standard treatments. From traditional Ottoman refreshments served between stages, to the opportunity to learn about the historical significance of various architectural elements and symbols within the bathhouse, to optional aromatherapy sessions using locally sourced herbs and essential oils—every aspect has been designed to provide deeper cultural understanding and enhanced relaxation.</p>
      `,
      tags: ["istanbul", "turkish bath", "culture", "relaxation"],
      gallery: [
        "/experiences-gallery/:experiences:3/traditional-turkish-bath-2.jpeg",
        "/experiences-gallery/:experiences:3/traditional-turkish-bath-3.jpeg",
        "/experiences-gallery/:experiences:3/traditional-turkish-bath4.jpeg"
      ],
      relatedExperiences: [
        { id: 1, title: "Dawn in the Sky: Cappadocia Balloon Experience", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 5, title: "Istanbul's Flavor Map: Gourmet Street Food Tour", image: "/images/destinations/istanbul.jpg" }
      ]
    },
    '4': {
      id: 4,
      title: "Flying Over the White Paradise: Pamukkale Paragliding Experience",
      author: "Can Özkan",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "Adrenaline enthusiast and paragliding pilot. Making flights in Turkey's most beautiful landscapes for 10+ years.",
      date: "October 8, 2024",
      readTime: "6 min read",
      location: "Pamukkale",
      duration: "Half day",
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: "/images/destinations/pamukkale.jpg",
      category: "adventure",
      difficulty: "medium",
      groupSize: "2-12",
      highlights: ["Thermal Pools", "White Terraces", "Ancient Ruins"],
      excerpt: "Soar over Pamukkale's magnificent white travertine terraces with a paraglider. Combine adrenaline and nature in this unique experience...",
      content: `
        <h2>Flying Over Pamukkale: An Aerial Adventure Above the White Paradise</h2>
        <p>Prepare yourself for an experience that transcends the boundaries of ordinary adventure travel. Soaring above Pamukkale's legendary white travertine terraces in a paraglider offers a perspective so breathtaking it literally surpasses the limits of imagination. As you ascend with your professional pilot into the vast Turkish sky, you'll become mesmerized by the surreal beauty of the white paradise unfolding beneath you—a natural wonder that has captivated visitors for millennia and continues to inspire awe in all who witness it.</p>
        
        <h3>The Geological Marvel of Pamukkale</h3>
        <p>Pamukkale, rightfully designated as a UNESCO World Heritage Site, represents one of Earth's most extraordinary natural phenomena and Turkey's crown jewel of natural beauty. These cascading white travertine terraces, formed over millennia by calcium-rich mineral springs, create a landscape so unique it appears otherworldly. Paragliding provides the ultimate vantage point to appreciate this geological masterpiece, offering views that ground-based visitors simply cannot experience. From your aerial perspective, you'll grasp the full scale of this natural wonder and understand why ancient civilizations considered this place sacred.</p>
        
        <h3>Your Paragliding Adventure Experience</h3>
        <p>Your aerial journey begins with comprehensive preparation and continues with expert guidance throughout:</p>
        <ul>
          <li><strong>Expert Pilot Guidance:</strong> Fly with internationally certified paragliding pilots who have logged thousands of hours in Turkey's diverse weather conditions and geographical terrains</li>
          <li><strong>Comprehensive Safety Preparation:</strong> Thorough pre-flight briefing covering equipment usage, flight techniques, and emergency procedures, plus top-quality safety gear inspected before every flight</li>
          <li><strong>Extended Flight Duration:</strong> Enjoy 15-20 minutes of uninterrupted flight time, allowing ample opportunity to absorb the panoramic views and capture photographs</li>
          <li><strong>360-Degree Panoramic Vista:</strong> Experience complete rotational freedom as you soar, providing unobstructed views of the terraces, ancient ruins, and surrounding countryside</li>
          <li><strong>Professional Photography Package:</strong> Take advantage of our optional photo and video service, ensuring your incredible experience is documented from unique aerial angles</li>
        </ul>
        
        <h3>The Ultimate Safety Commitment</h3>
        <p>Your security and peace of mind are our non-negotiable priorities. Every aspect of our paragliding operations adheres to the most stringent international safety standards. Our equipment undergoes regular maintenance and certification checks, while our pilots participate in continuous training programs to stay current with the latest safety protocols. Weather conditions are carefully monitored, and flights are only conducted when conditions meet our exacting requirements for optimal safety and enjoyment.</p>
        
        <h3>Beyond the Flight</h3>
        <p>Your Pamukkale paragliding experience extends beyond the flight itself. We provide comprehensive transportation from and to your accommodation, optional guided tours of the ancient Hierapolis ruins at the base of the terraces, and recommendations for the best local restaurants to complete your day. Our commitment is to create a seamless, memorable adventure that connects you deeply with one of Turkey's most remarkable natural treasures while ensuring your comfort, safety, and complete satisfaction throughout every moment.</p>
      `,
      tags: ["pamukkale", "paragliding", "adventure", "nature"],
      gallery: [
        "/experiences-gallery/:experiences:4/pamukkale1.jpeg",
        "/experiences-gallery/:experiences:4/pamukkale2.jpeg",
        "/experiences-gallery/:experiences:4/pamukkale3.jpeg"
      ],
      relatedExperiences: [
        { id: 1, title: "Dawn in the Sky: Cappadocia Balloon Experience", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 2, title: "Private Yacht Journey in the Blue Waters of Aegean", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" }
      ]
    },
    '5': {
      id: 5,
      title: "Istanbul's Flavor Map: Gourmet Street Food Tour",
      author: "Elif Aksoy",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "Gastronomy writer and chef. Discovering Istanbul's street flavors for 15+ years.",
      date: "October 5, 2024",
      readTime: "8 min read",
      location: "Istanbul",
      duration: "4 hours",
      price: 120,
      rating: 4.6,
      reviews: 156,
      image: "/images/destinations/istanbul.jpg",
      category: "gastronomy",
      difficulty: "easy",
      groupSize: "4-12",
      highlights: ["Local Markets", "Street Flavors", "Traditional Restaurants"],
      excerpt: "Discover Istanbul's hidden flavors. Starting from the historic peninsula, taste the city's best street foods and local flavors...",
      content: `
        <h2>Istanbul's Street Flavors: A Culinary Journey Through History</h2>
        <p>Embark on an extraordinary gastronomic adventure where every bite tells a story spanning centuries of civilization. Eating in Istanbul transcends mere sustenance—it's a cultural pilgrimage through the layers of empires that have shaped this magnificent city. Our expertly curated journey begins in the historic heart of Eminönü, where the aromas of sizzling fish sandwiches and freshly caught mussels mingle with the scent of brewing Turkish tea, creating an immersive introduction to the culinary mosaic that defines Istanbul's street food culture.</p>
        
        <h3>A Journey Through Istanbul's Culinary Districts</h3>
        <p>Each neighborhood we explore represents a distinct chapter in Istanbul's rich culinary history, offering authentic flavors that have been perfected over generations:</p>
        <ul>
          <li><strong>Eminönü - Historic Peninsula's Maritime Traditions:</strong> Experience the birthplace of Istanbul's street food culture, where fishermen have been serving freshly grilled fish sandwiches (balık ekmek) for centuries, complemented by tangy pickles and the vibrant energy of this historic waterfront district</li>
          <li><strong>Karaköy - Byzantine-Ottoman Fusion:</strong> Discover the sophisticated flavors where East meets West, featuring the legendary Iskender kebab with its rich tomato sauce and melted butter, alongside innovative doner variations that reflect Karaköy's history as a multicultural trading hub</li>
          <li><strong>Fatih - Imperial Palace Cuisine:</strong> Savor traditional dishes once served in Ottoman palaces, including the famous Sultanahmet köfte and authentic çiğ köfte, prepared using recipes that have remained unchanged since the golden age of the empire</li>
          <li><strong>Kadıköy - Anatolian Heartland Flavors:</strong> Cross to the Asian side to experience robust, hearty flavors including artisanal çiğ köfte and various kebab styles that represent the culinary traditions of Anatolia's diverse regions</li>
          <li><strong>Beyoğlu - European Quarter's Sweet Endings:</strong> Conclude your journey in the historic European quarter, where legendary dessert shops offer everything from baklava layered with pistachios and walnuts to Turkish delight varieties scented with rosewater and mastic</li>
        </ul>
        
        <h3>Living Markets and Local Artisans</h3>
        <p>Beyond the prepared dishes, our tour provides intimate access to Istanbul's vibrant local markets, where you'll discover the ingredients that form the foundation of Turkish cuisine. Here, you'll interact with vendors who have inherited their businesses through generations, sample artisanal cheeses from nearby villages, taste olives aged in traditional methods, discover honey collected from the region's unique flora, and learn about the seasonal rhythms that dictate Istanbul's culinary calendar. These market visits offer not just shopping opportunities but genuine cultural exchanges with the people who keep Istanbul's food traditions alive.</p>
        
        <h3>Beyond Tasting - Cultural Immersion</h3>
        <p>Our street food tour transcends mere eating to provide deep cultural context. You'll learn the historical significance of each dish, discover the stories behind family recipes passed down through generations, and understand how Istanbul's position between continents has created one of the world's most diverse food cultures. We'll visit hidden courtyards where traditional techniques are demonstrated, explore spice shops with aromas that have guided merchants for centuries, and even participate in preparing simple dishes under the guidance of local cooks. This isn't just a tour—it's an invitation to become part of Istanbul's living culinary heritage, even if just for one delicious day.</p>
      `,
      tags: ["istanbul", "food tour", "gastronomy", "street flavors"],
      gallery: [
        "/experiences-gallery/:experiences:5/gourmet-street-food-1.jpeg",
        "/experiences-gallery/:experiences:5/gourmet-street-food-2.jpeg",
        "/experiences-gallery/:experiences:5/gourmet-street-food-3.jpeg"
      ],
      relatedExperiences: [
        { id: 3, title: "Ottoman Mystery: Traditional Turkish Bath Ritual", image: "/team/seyfettin.jpg" },
        { id: 6, title: "Mediterranean's Secret Veil: Kaş Diving Adventure", image: "/images/destinations/bodrum.jpg" }
      ]
    },
    '6': {
      id: 6,
      title: "Mediterranean's Secret Veil: Kaş Diving Adventure",
      author: "Barış Yıldız",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "Diving instructor and underwater adventure enthusiast. Discovering the underwater beauties of the Mediterranean for 15+ years.",
      date: "October 3, 2024",
      readTime: "9 min read",
      location: "Kaş",
      duration: "Full day",
      price: 180,
      rating: 4.9,
      reviews: 89,
      image: "/images/destinations/bodrum.jpg",
      category: "adventure",
      difficulty: "medium",
      groupSize: "2-8",
      highlights: ["Crystal Clear Waters", "Marine Life", "Professional Instructor"],
      excerpt: "Discover the underwater beauties of the Mediterranean. Experience an unforgettable diving adventure in Kaş's clear waters with a professional instructor...",
      content: `
        <h2>Discovery in the Blue Waters of Mediterranean: Kaş Diving Adventure</h2>
        <p>Prepare yourself for an underwater journey into one of Turkey's most spectacular diving paradises. Kaş represents the pinnacle of Mediterranean diving, where crystal-clear waters with visibility exceeding 40 meters reveal a vibrant underwater world teeming with marine life, ancient shipwrecks, and geological formations that create a diver's dreamscape. When you arrive at our professional diving center in the early morning light, you're not just beginning a dive—you're embarking on an exploration of a hidden realm that few visitors ever truly experience.</p>
        
        <h3>Premier Diving Destinations</h3>
        <p>Each dive site in Kaş offers a unique underwater landscape and experience, carefully selected to showcase the region's incredible diversity:</p>
        <ul>
          <li><strong>Blue Cave - Cathedral of Light:</strong> Enter a spectacular underwater cavern where sunlight penetrates through crystal-clear water, creating ethereal blue light rays that illuminate the cavern's interior. This advanced dive site features dramatic rock formations and offers opportunities for underwater photography that captures the magical play of light and shadow</li>
          <li><strong>Uluburun - Ancient Shipwreck Time Capsule:</strong> Explore one of the Mediterranean's oldest shipwrecks, dating back to the Bronze Age. This archaeological treasure provides a haunting glimpse into ancient maritime history, with amphorae and artifacts still visible among the encrusting marine life</li>
          <li><strong>Fener Cove - Twilight Mysteries:</strong> Experience the transformation of the underwater world during evening dives, when nocturnal marine species emerge and the reef takes on a completely different character under dive lights</li>
          <li><strong>Kekova Island - Sunken City:</strong> Discover the partially submerged ruins of an ancient Lycian settlement, where you can swim over foundations of buildings and streets dating back to Byzantine times, accessible only by boat and offering a unique blend of archaeology and marine exploration</li>
        </ul>
        
        <h3>The Mediterranean's Underwater Treasury</h3>
        <p>Kaş's waters represent one of the Mediterranean's most biodiverse marine ecosystems, where three seas converge to create an explosion of underwater life. Here, you'll encounter species found nowhere else on Earth: groupers of impressive size, moray eels peeking from rocky crevices, octopus displaying remarkable intelligence, and the endangered Mediterranean monk seal in protected habitats. The region's coral formations, though not as extensive as tropical reefs, host unique species adapted to these temperate waters, including colorful sponges, sea anemones, and nudibranchs that create a living tapestry of extraordinary beauty.</p>
        
        <h3>Professional Excellence and Safety</h3>
        <p>Our diving adventures are led by internationally certified instructors with thousands of logged dives in Mediterranean conditions. We maintain the highest safety standards with equipment that receives regular maintenance and certification updates. Before each dive, you'll receive thorough briefings covering site-specific conditions, marine life behavior, and emergency procedures. Our small group sizes ensure personalized attention and allow access to sites unavailable to larger operations. Whether you're a beginner seeking your first dive or an experienced diver looking to advance your skills, we tailor each experience to your comfort level while ensuring maximum safety and enjoyment.</p>
        
        <h3>Beneath the Surface - Complete Experience</h3>
        <p>Your Kaş diving adventure encompasses more than just time underwater. We provide comprehensive packages that include comfortable accommodation with sea views, meals featuring fresh local seafood, and evening activities exploring Kaş's charming old town. Between dives, you can relax on deck overlooking the Mediterranean, share stories with fellow divers, and plan your next day's underwater exploration. Our commitment is creating not just a diving trip but a complete immersion in one of Turkey's most beautiful coastal regions, leaving you with memories that extend far beyond the photographs you'll capture.</p>
      `,
      tags: ["kaş", "diving", "mediterranean", "underwater"],
      gallery: [
        "/experiences-gallery/:experiences:6/kas-dalis-at-11.03.41-1024x683.jpeg",
        "/experiences-gallery/:experiences:6/tuplu-dalis-wp1.jpeg",
        "/experiences-gallery/:experiences:6/ucak-salış2.jpeg"
      ],
      relatedExperiences: [
        { id: 2, title: "Private Yacht Journey in the Blue Waters of Aegean", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" },
        { id: 4, title: "Flying Over the White Paradise: Pamukkale Paragliding Experience", image: "/images/destinations/pamukkale.jpg" }
      ]
    }
  }

  return experiences[id] || null
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id } = await params
  const experience = getExperienceData(id)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isSafari, setIsSafari] = useState(false)

  // Safari detection and content fix
  useEffect(() => {
    const userAgent = window.navigator.userAgent
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent)
    setIsSafari(isSafariBrowser)

    // Force content visibility in Safari
    if (isSafariBrowser) {
      const proseElements = document.querySelectorAll('.prose') as NodeListOf<HTMLElement>
      proseElements.forEach(element => {
        element.style.opacity = '1'
        element.style.visibility = 'visible'
        element.style.display = 'block'
      })
    }
  }, [])

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Experience Not Found</h1>
          <p className="text-gray-600 mb-8">The experience you are looking for is not available or may have been removed.</p>
          <Link href="/experiences" className="btn-tertiary">
            Back to All Experiences
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-tertiary-600 to-tertiary-800">
        <div className="absolute inset-0">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <div className="mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                {experience.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
              {experience.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{experience.rating} ({experience.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/experiences" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
              Back to Experiences
            </Link>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
                <Heart className="w-5 h-5" />
                Add to Favorites
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            {/* Author Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={experience.authorAvatar}
                    alt={experience.author}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{experience.author}</h3>
                  <p className="text-sm text-gray-600">{experience.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{experience.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div
                className="prose prose-lg max-w-none"
                style={{ minHeight: '200px', opacity: 1 }}
                dangerouslySetInnerHTML={{ __html: experience.content }}
              />
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.gallery.map((image: string, index: number) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${experience.title} - ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Comments ({experience.reviews})</h3>

              {/* Comment Form */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <input
                    type="text"
                    placeholder="Your name..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Your comment..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent mb-3"
                />
                <button className="btn-tertiary">
                  Leave a Comment
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ahmet Demir</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">
                    It was a great experience! Especially watching the sunrise from the balloon was incredible. I definitely recommend it.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ayşe Kaya</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">
                    Professional team and safe flight. The views are worth everything!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 lg:sticky lg:top-24 lg:z-10">
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-tertiary-600">€{experience.price}</p>
                <p className="text-gray-600">per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{experience.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Group size</span>
                  <span className="font-medium">{experience.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Difficulty</span>
                  <span className="font-medium">{experience.difficulty}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Highlights</h4>
                <div className="space-y-2">
                  {experience.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-tertiary-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full btn-tertiary mb-3">
                Book Now
              </button>
              <button
                onClick={() => window.open(`https://wa.me/905545812034?text=Hello, I would like to get information about ${experience.title}.`, '_blank')}
                className="w-full border border-tertiary-600 text-tertiary-600 py-3 rounded-lg font-semibold hover:bg-tertiary-50 transition-colors flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.9-5.7a2 2 0 0 1 .3-1.47l8.8-8.8a2 2 0 0 1 1.47-.3L21 3" />
                  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0-2z" />
                  <path d="M21 3l-6 6m0-6v6m0-6H9" />
                </svg>
                WhatsApp Contact
              </button>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Experiences */}
            <div className="bg-white rounded-xl shadow-lg p-6 relative lg:z-0">
              <h3 className="text-lg font-semibold mb-4">Related Experiences</h3>
              <div className="space-y-4">
                {experience.relatedExperiences.map((related: any, index: number) => (
                  <Link key={index} href={`/experiences/${related.id}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-tertiary-600 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-tertiary-600 mt-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}