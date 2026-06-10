import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';
import { Eye, MapPin, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wedding' | 'corporate' | 'private' | 'counter' | 'setup'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = activeFilter === 'all' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category === activeFilter);

  const categories = [
    { label: "All Works", id: "all" },
    { label: "Weddings", id: "wedding" },
    { label: "Corporate", id: "corporate" },
    { label: "Private Parties", id: "private" },
    { label: "Live Counters", id: "counter" },
    { label: "Catering Setup", id: "setup" }
  ] as const;

  const openLightbox = (item: PortfolioItem) => {
    // Find absolute index of item in global portfolio to support navigation
    const idx = PORTFOLIO_DATA.findIndex(p => p.id === item.id);
    setSelectedItemIndex(idx !== -1 ? idx : null);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (selectedItemIndex === null) return;
    let nextIndex = direction === 'next' ? selectedItemIndex + 1 : selectedItemIndex - 1;
    
    if (nextIndex >= PORTFOLIO_DATA.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = PORTFOLIO_DATA.length - 1;
    }
    setSelectedItemIndex(nextIndex);
  };

  const currentItem = selectedItemIndex !== null ? PORTFOLIO_DATA[selectedItemIndex] : null;

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#FF6B00]/10 px-3.5 py-1 rounded-md border border-[#FF6B00]/30 inline-block mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Visual Highlights of <span className="text-primary italic">Our Celebrations</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            Filter our past assignments to witness our signature design themes, food layouts, and operational aesthetics live in action.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-12" id="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id);
                setSelectedItemIndex(null); // Keep index closed
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'bg-white text-gray-500 hover:text-primary hover:bg-orange-50/50 border border-gray-100'
              }`}
              id={`portfolio-filter-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid layout */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="portfolio-grid"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 p-3 hover:shadow-2xl hover:border-orange-100 transition-all duration-300 group cursor-pointer"
              id={`portfolio-item-${item.id}`}
            >
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-3 bg-white/25 backdrop-blur-md rounded-xl text-white hover:bg-primary transition-colors">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20 inline-block mb-2">
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* metadata block */}
              <div className="p-4 pt-5 pb-2 flex items-center justify-between border-t border-gray-50 mt-2 text-xs text-gray-400 font-medium">
                <div className="flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate max-w-[130px]">{item.location}</span>
                </div>
                <div className="flex items-center gap-1.5 font-sans">
                  <Users className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span>{item.guests}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Carousel */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 selection:bg-primary"
          onClick={closeLightbox}
          id="lightbox-overlay"
        >
          {/* Close trigger */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 hover:text-accent rounded-full text-white transition-colors cursor-pointer z-50"
            id="lightbox-close"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 p-3.5 bg-white/10 hover:bg-white/20 hover:text-accent text-white rounded-full transition-all cursor-pointer z-30 hidden md:block"
            aria-label="Previous Item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 p-3.5 bg-white/10 hover:bg-white/20 hover:text-accent text-white rounded-full transition-all cursor-pointer z-30 hidden md:block"
            aria-label="Next Item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Core Card */}
          <div 
            className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden relative shadow-2xl flex flex-col lg:flex-row max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
            id="lightbox-card"
          >
            {/* Image section */}
            <div className="lg:w-3/5 h-64 sm:h-96 lg:h-auto overflow-hidden relative bg-gray-150">
              <img 
                src={currentItem.image} 
                alt={currentItem.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content Specifications */}
            <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-white text-gray-800">
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold tracking-widest text-primary bg-orange-50 px-3 py-1 rounded-md border border-orange-100 uppercase inline-block">
                  {currentItem.category} category
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-secondary leading-snug">
                  {currentItem.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {currentItem.description}
                </p>

                {/* specifications indicators */}
                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs sm:text-sm text-gray-600 font-medium font-sans">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <strong>Location:</strong> {currentItem.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary shrink-0" />
                    <strong>Attendance:</strong> {currentItem.guests}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex gap-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                    closeLightbox();
                  }}
                  className="flex-1 bg-primary hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl text-center text-xs sm:text-sm transition-all cursor-pointer"
                  id="lightbox-book-btn"
                >
                  Book a Similar Setup
                </button>
                <button
                  onClick={closeLightbox}
                  className="py-3 px-4 border border-gray-200 text-gray-500 hover:bg-gray-50 font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
                  id="lightbox-close-btn"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
