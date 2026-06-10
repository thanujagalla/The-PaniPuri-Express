import { ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroProps {
  onBookClick: () => void;
  onMenuClick: () => void;
}

export default function Hero({ onBookClick, onMenuClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20"
    >
      {/* Background Image with Fallbacks and referrerPolicy */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_DATA.image} 
          alt="Authentic Panipuri Station Hero"
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // fallback in case of loading issues
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1601050638917-3d873bcad97b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
          }}
        />
        {/* Soft Radial and Linear Dark Gradients for Premium Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-transparent md:bg-gradient-to-b md:from-dark/80 md:via-dark/65 md:to-dark/90" />
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center" id="hero-main-content">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 text-accent font-black tracking-widest uppercase text-xs rounded-md border border-accent/40 mb-6 animate-pulse" id="hero-tag-badge">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>India's #1 Street Food Brand — Live Stations</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
            Authentic Indian Street Food
            <span className="block mt-3 text-primary relative inline-block">
              Experiences Delivered Fresh
              <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5 Q 50 0 100 5 T 200 5" fill="transparent" stroke="#F4B400" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
            Panipuri Express brings the vibrant chaos and mouth-watering, crispest flavors of India's favorite street foods straight to your grand celebrations and events.
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white font-black px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer"
              id="hero-cta-book"
            >
              Book Catering
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onMenuClick}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/50 backdrop-blur-sm font-bold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              id="hero-cta-menu"
            >
              View Our Packages
            </button>
          </div>

          {/* Animated Statistics Grid */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-white/10 max-w-3xl mx-auto text-left"
            id="hero-stats-panel"
          >
            {HERO_DATA.stats.map((stat, i) => {
              const borderColors = ["border-[#1F6F50]", "border-[#FF6B00]", "border-[#F4B400]", "border-gray-400"];
              const textColors = ["text-[#1F6F50]", "text-[#FF6B00]", "text-[#F4B400]", "text-gray-100"];
              return (
                <div 
                  key={i} 
                  className={`bg-white/5 hover:bg-white/10 backdrop-blur-xs p-4 rounded-r-2xl border-l-4 ${borderColors[i % 4]} transition-colors duration-300 group`}
                >
                  <div className={`text-2xl sm:text-3xl font-black ${textColors[i % 4]} mb-1 group-hover:scale-105 transition-transform duration-300 font-sans`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] md:h-[60px] fill-gray-50">
          <path d="M0,0 C150,90 350,120 600,100 C850,80 1050,110 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
