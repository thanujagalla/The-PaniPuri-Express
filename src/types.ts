export interface CateringPackage {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  features: string[];
  priceRange: string;
  isPopular: boolean;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  details: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'corporate' | 'private' | 'counter' | 'setup';
  description: string;
  image: string;
  location: string;
  guests: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  timeframe: string;
}
