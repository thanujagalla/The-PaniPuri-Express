import { Service, FeatureItem, Testimonial, FaqItem, PortfolioItem, ProcessStep, CateringPackage } from './types';

export const HERO_DATA = {
  title: "Authentic Indian Street Food Experiences",
  accentTitle: "Delivered Fresh",
  subtitle: "Panipuri Express brings the vibrant, tangiest, and crispest flavors of India's favorite street foods to events, corporate gatherings, and pristine weddings.",
  stats: [
    { label: "Happy Customers", value: "10,000+" },
    { label: "Events Catered", value: "500+" },
    { label: "Years Experience", value: "5+" },
    { label: "Menu Options", value: "50+" },
  ],
  image: '/src/assets/images/panipuri_hero_1781081206641.png'
};

export const SERVICES_DATA: Service[] = [
  {
    id: "event-catering",
    title: "Event Catering",
    icon: "PartyPopper",
    description: "Make your personal milestones unforgettable. We provide comprehensive street food setups tailored to your specific celebratory theme.",
    benefits: [
      "Visually stunning custom food stalls",
      "Hygienic environment with gloves, hairnets, and sanitizers",
      "Flexible guest pricing structures",
      "Interactive chef interaction"
    ],
    details: [
      "Weddings",
      "Birthdays",
      "Engagements",
      "Festivals & Milestones"
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "corporate-catering",
    title: "Corporate Catering",
    icon: "Building2",
    description: "Inject some spice and energy into your routine corporate gathers. From high-end executive parties to large multi-floor office events.",
    benefits: [
      "Professional quick-service execution",
      "Detailed invoice & GST compliance",
      "All dietary markings clearly annotated",
      "Minimal setup footprint inside office spaces"
    ],
    details: [
      "Office celebrations",
      "Product launches",
      "Team-building socials",
      "Annual general assemblies"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "live-counters",
    title: "Live Food Counters",
    icon: "Flame",
    description: "The ultimate culinary theater. Watch as our master street-chefs hand-craft every single puri, filling them with custom flavored waters on the spot.",
    benefits: [
      "Interactive multi-flavor water fountains",
      "Freshly elements assembled per person's heat level",
      "Clean, spill-free serving counter styling",
      "Vibrant photo-worthy presentation aesthetics"
    ],
    details: [
      "Live Panipuri Stations (3+ Waters)",
      "Vibrant Hot Chaat Counters",
      "Crisp Snack & Dahi Puri Bars",
      "Warm Indian Beverage Add-ons"
    ],
    image: "/src/assets/images/live_chaat_counter_1781081225813.png"
  },
  {
    id: "custom-packages",
    title: "Custom Packages",
    icon: "Sparkles",
    description: "Looking for something outside the standard? Design a custom culinary route with specialized themes, hybrid fusion appetizers, or premium serving materials.",
    benefits: [
      "Tailor-made menu architectures",
      "Eco-friendly clayware/leaf plate options",
      "Specialty regional recipes from across India",
      "Dedicated culinary account handlers"
    ],
    details: [
      "Personalized custom menus",
      "Theme-based styled counters",
      "Large-scale public conventions",
      "Curated multi-course appetizers"
    ],
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "fresh-daily",
    title: "Fresh Ingredients Daily",
    description: "We prepare our signature flavored mint and tamarind water, raw potato fillings, and crispy puris fresh every single morning. Zero preservation.",
    icon: "Apple"
  },
  {
    id: "traditional-recipes",
    title: "Traditional Authentic Recipes",
    description: "No compromises. We source spices directly from trusted estates in India to replicate the accurate street notes of Delhi, Mumbai, and Kolkata.",
    icon: "History"
  },
  {
    id: "certified-safety",
    title: "Certified Food Safety Standards",
    description: "Strict safety protocols. Our kitchen is certified, our staff undergo rigorous routine hygiene tests, and everything is served using single-use materials.",
    icon: "ShieldCheck"
  },
  {
    id: "professional-staff",
    title: "Professional Trained Staff",
    description: "Polite, uniformly clad, and expert catering specialists ensure your guests are guided with courtesy through different heat levels and dishes.",
    icon: "Users"
  },
  {
    id: "on-time",
    title: "On-Time Setup & Delivery",
    description: "We arrive early. Stalls are fully set and piping hot/perfectly chilled exactly 45 minutes prior to the scheduled start, guaranteed.",
    icon: "Clock"
  },
  {
    id: "event-planning",
    title: "Custom Event Planning",
    description: "We plan spatial routing, crowd flow, and stall styles with you to avoid chaotic queues and keep your gathering fluid & aesthetic.",
    icon: "Calendar"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "p1",
    title: "Royal Crimson Grand Wedding",
    category: "wedding",
    description: "An elegant wedding for 800 guests, featuring a premium 360-degree floating Live Panipuri and Chaat island decorated with floral structures.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Jaipur Palace Halls",
    guests: "800 Guests"
  },
  {
    id: "p2",
    title: "Global Tech Summit Celebration",
    category: "corporate",
    description: "Corporate team catering highlighting our customizable level-of-spice tags. A clean, sleek monochrome stainless-steel service bar fits perfectly in the modern workspace.",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "InnoTech HQ Atrium",
    guests: "350 Professionals"
  },
  {
    id: "p3",
    title: "Elegant Backyard Terrace Soirée",
    category: "private",
    description: "A birthday cozy gathering featuring organic handcrafted leaf containers, showcasing 5 varieties of sour, spicy, sweet, garlic, and mint water infusions.",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Green Meadows Private Garden",
    guests: "75 Guests"
  },
  {
    id: "p4",
    title: "Interactive Copper Fountain Counter",
    category: "counter",
    description: "A vintage-inspired rustic setup featuring copper vessels and deep-grained mahogany serving blocks for a heritage-centered celebration.",
    image: "/src/assets/images/live_chaat_counter_1781081225813.png",
    location: "Hotel Grand Heritage Lawn",
    guests: "500 Guests"
  },
  {
    id: "p5",
    title: "Premium Multi-Option Sev Puri Rail",
    category: "setup",
    description: "A customized modular chaat station where guests choose toppings like pomegranate, beetroot-infused yogurt, or spicy raw mango cubes.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "The Orchid Lounge",
    guests: "200 Guests"
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation & Scope",
    description: "We jump on a call to understand your event theme, estimated attendance, spatial venue setup, and particular flavor profile alignment.",
    timeframe: "1-2 Days from inquiry"
  },
  {
    step: 2,
    title: "Interactive Menu Design",
    description: "Our culinary master presents a tailored list of options, suggesting spicy pani flavors, innovative live counters, and custom fusion snacks.",
    timeframe: "Within 3 days"
  },
  {
    step: 3,
    title: "Rigorous Ingredient Sourcing",
    description: "Spices are freshly ground, premium quality potatoes and chickpeas are portioned, and custom flour blend is prepared for premium crispness.",
    timeframe: "24 hours prior"
  },
  {
    step: 4,
    title: "Live Execution & Service",
    description: "Our uniformed street-chefs assemble the stations, manage high-speed guest routing, and provide absolute hospitality with zero mess.",
    timeframe: "Event Day (Early arrival)"
  },
  {
    step: 5,
    title: "Absolute Guest Delight",
    description: "We wrap up cleanup tasks in a structured manner, ensuring every single guest left completely satisfied with a sparkling clean kitchen area.",
    timeframe: "Post-event follow up"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Preeti Sharma",
    role: "Bride",
    company: "Sharma-Gupta Wedding",
    review: "The guest absolute favorite was the Panipuri Express live counter! People are still talking about the ginger-tamarind water and the hyper-clean servers. Highly recommend for any premium wedding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t2",
    name: "Rahul Mehra",
    role: "Director of HR Operations",
    company: "MetaFlow Solutions Inc.",
    review: "Catering can get messy, but Panipuri Express was clinical. They set up, served 400 employees in record time without a single queue, and left the workspace perfectly spotless. Incredible corporate experience.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t3",
    name: "Aman Varma",
    role: "Event Organizer",
    company: "DazzleEvents Global",
    review: "Perfect professionalism. They customized the theme perfectly to match our rustic outdoor setup. The interactive copper fountain water station was the center of attraction. Outstanding culinary execution!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "How far in advance should I book?",
    answer: "For standard events we suggest booking at least 2-3 weeks in advance. For grand weddings and peak celebration seasons (e.g., October to January), we strongly recommend securing your date 2-4 months ahead of time to guarantee staff and equipment availability.",
    category: "bookings"
  },
  {
    id: "faq-2",
    question: "Do you provide live hand-crafted counters?",
    answer: "Absolutely! Our core specialty is live counters. Our trained culinary staff stand at dynamic stations, custom-mixing sweet, tangy, and hot spicy waters per your guests' instructions, ensuring every single panipuri is crisp, fresh, and delivered directly into their hands.",
    category: "service"
  },
  {
    id: "faq-3",
    question: "Can menus and spice levels be customized?",
    answer: "Yes, fully! We can customize the menu to incorporate specific street food favorites like Sev Puri, Dahi Bhalla, Pav Bhaji, or Kulfi. We also accommodate all custom spice/heat tolerances and offer gluten-free puri options and completely vegan or Jain fillings.",
    category: "customization"
  },
  {
    id: "faq-4",
    question: "Do you handle very large events?",
    answer: "Yes. Our proprietary supply and production pipeline is engineered to serve up to 2,000+ guests without any decline in ingredient freshness, crispness, or serving speeds. We deploy multiple concurrent live stations and distinct hostesses to keep operations streamlined.",
    category: "capacity"
  },
  {
    id: "faq-5",
    question: "What service areas do you cover?",
    answer: "We cover the entire metro region, adjacent suburbs, and are open to traveling for destination weddings and corporate retreats. Some distant setups might include a nominal transport logistics fee based on physical distance, which will be calculated upfront.",
    category: "bookings"
  }
];

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: "pkg-1",
    name: "Classic Street Express",
    description: "An elegant, compact, highly popular catering model featuring classic authentic street-style flavors designed for compact private parties.",
    benefits: [
      "Traditional Spicy & Tangy mint water",
      "Signature spiced potato & chickpea fillings",
      "Freshly prepared sweet dates-tamarind paste",
      "Interactive chef styled cart"
    ],
    features: [
      "2 Standard Live Counters",
      "Up to 100 Guests capacity",
      "2 Hours unlimited service time",
      "Standard bio-degradable tableware"
    ],
    priceRange: "Medium scale",
    isPopular: false
  },
  {
    id: "pkg-2",
    name: "Royal Celebration Fountain",
    description: "Our signature multi-sensory street gastronomy experience. Features a premium design, copper fixtures, and a wider variety of specialized chaat snacks.",
    benefits: [
      "4 Signature handcrafted spiced water variants",
      "Authentic Delhi Dahi Bhalla & Sev Puri selection",
      "Interactive automatic visual water fountain counter",
      "Premium servers clad in elegant traditional uniforms"
    ],
    features: [
      "3 Premium Golden/Rustic Live Counters",
      "From 150 to 500 Guests capacity",
      "4 Hours unlimited live service",
      "Artisanal premium leaf plateware"
    ],
    priceRange: "Premium scale",
    isPopular: true
  },
  {
    id: "pkg-3",
    name: "The Imperial Street Carnival",
    description: "The peak culinary theater designed for grand weddings, major festivals, and massive multi-national corporate gatherings.",
    benefits: [
      "All 6 Gourmet spicy water styles (Garlic, Mango, Mint, Sweet, Hot, Lemon)",
      "Vast regional street menu layout (Chaat, Pav Bhaji, Live Jalebi, Mocktails)",
      "Absolute zero-spill elegant modern visual stations",
      "Dedicated manager handling flow dynamics and customization"
    ],
    features: [
      "5+ Bespoke customized theme-based counters",
      "Up to 1,500+ Guests capacity",
      "Flexible execution timing",
      "Stunning clay kulhads & high-end wooden setups"
    ],
    priceRange: "Grand scale",
    isPopular: false
  }
];
