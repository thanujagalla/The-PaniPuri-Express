import { ArrowRight, Phone } from 'lucide-react';

interface CTAProps {
  onQuoteClick: () => void;
}

export default function CTA({ onQuoteClick }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-orange-600 to-amber-600 text-white relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
          Ready to Make Your Event <span className="text-accent underline decoration-wavy decoration-2 italic">Unforgettable?</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-orange-50 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light">
          Book Panipuri Express today and delight your guests with authentic Indian street-food experiences prepared with clinical hygiene and served with absolute love.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto bg-secondary hover:bg-teal-950 text-white font-extrabold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shadow-xl shadow-secondary/30 flex items-center justify-center gap-2 cursor-pointer"
            id="cta-get-quote"
          >
            Get Custom Quote
            <ArrowRight className="w-5 h-5 text-accent" />
          </button>
          
          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-bold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            id="cta-call-now"
          >
            <Phone className="w-4 h-4 fill-white text-white" />
            Call Our Desk Now
          </a>
        </div>
      </div>
    </section>
  );
}
