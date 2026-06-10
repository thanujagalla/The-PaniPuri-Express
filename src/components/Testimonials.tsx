import { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#FF6B00]/10 px-3.5 py-1 rounded-md border border-[#FF6B00]/30 inline-block mb-3">
            Client Words
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Loved by Hostesses and <span className="text-primary italic">Corporate Managers</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            We are deeply committed to pristine execution. Hear why wedding coordinators and office managers hire us repeatedly.
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12" id="testimonials-carousel">
          
          {/* Main Review Card */}
          <div className="bg-white rounded-r-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 border-l-8 border-[#1F6F50] relative min-h-[300px] flex flex-col justify-between transition-all duration-300">
            
            {/* Quote Icon Decor */}
            <div className="absolute right-8 top-8 text-orange-100 pointer-events-none">
              <Quote className="w-16 h-16 md:w-20 md:h-20" />
            </div>

            <div>
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6">
                {[...Array(TESTIMONIALS_DATA[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 font-sans font-light">
                "{TESTIMONIALS_DATA[activeIndex].review}"
              </p>
            </div>

            {/* Client Profile Block */}
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <img 
                src={TESTIMONIALS_DATA[activeIndex].avatar} 
                alt={`${TESTIMONIALS_DATA[activeIndex].name} Avatar`} 
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-base sm:text-lg font-bold text-secondary font-sans leading-tight">
                  {TESTIMONIALS_DATA[activeIndex].name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {TESTIMONIALS_DATA[activeIndex].role} 
                  {TESTIMONIALS_DATA[activeIndex].company && (
                    <span className="text-primary font-semibold"> • {TESTIMONIALS_DATA[activeIndex].company}</span>
                  )}
                </p>
              </div>
            </div>

          </div>

          {/* Navigation Dots under card */}
          <div className="flex justify-center items-center gap-2.5 mt-8 z-10 relative">
            <button 
              onClick={prevReview}
              className="p-2 bg-white hover:bg-orange-50 border border-gray-100 rounded-full hover:text-primary text-gray-400 transition-all cursor-pointer shadow-sm shadow-gray-200"
              aria-label="Previous Testimonial"
              id="prev-testimonial-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all rounded-full cursor-pointer h-2.5 ${
                  activeIndex === idx ? 'bg-primary w-8' : 'bg-gray-300 w-2.5'
                }`}
                id={`testimonial-dot-${idx}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}

            <button 
              onClick={nextReview}
              className="p-2 bg-white hover:bg-orange-50 border border-gray-100 rounded-full hover:text-primary text-gray-400 transition-all cursor-pointer shadow-sm shadow-gray-200"
              aria-label="Next Testimonial"
              id="next-testimonial-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
