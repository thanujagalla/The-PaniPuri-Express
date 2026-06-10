import { useState, useEffect } from 'react';
import { Utensils, Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3 text-gray-900 border-b-4 border-secondary' 
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
          id="nav-logo"
        >
          <div className="p-2 bg-primary text-white rounded-full transition-all flex items-center justify-center shadow-lg">
            <Utensils className="w-5 h-5" />
          </div>
          <span className="text-2xl font-black tracking-tight italic">
            <span className={isScrolled ? 'text-secondary' : 'text-white'}>Panipuri</span>
            <span className="text-primary">Express</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-sm uppercase tracking-widest">
          {['home', 'about', 'services', 'expertise', 'portfolio', 'process', 'testimonials', 'faq', 'contact'].map((sect) => (
            <button
              key={sect}
              onClick={() => scrollToSection(sect)}
              className={`capitalize transition-colors cursor-pointer text-xs uppercase tracking-widest font-bold border-b-2 hover:text-primary ${
                isScrolled 
                  ? 'text-secondary border-transparent hover:border-primary' 
                  : 'text-gray-100 border-transparent hover:border-accent'
              }`}
              id={`nav-link-${sect}`}
            >
              {sect === 'home' ? 'Home' : sect === 'faq' ? 'FAQ' : sect === 'expertise' ? 'Expertise' : sect.replace('-', ' ')}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-tighter transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg ${
              isScrolled
                ? 'bg-primary text-white hover:bg-orange-600'
                : 'bg-primary text-white hover:bg-white hover:text-primary'
            }`}
            id="nav-cta-desktop"
          >
            Book Catering
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-4 py-1.5 rounded-full font-bold text-xs transition-all ${
              isScrolled ? 'bg-primary text-white' : 'bg-accent text-dark'
            }`}
            id="nav-cta-mobile-quick"
          >
            Book Now
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg focus:outline-none transition-colors cursor-pointer ${
              isScrolled ? 'text-secondary hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 top-[60px] bg-dark/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-[60px] right-0 w-80 max-w-[85vw] h-[calc(100vh-60px)] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-out lg:hidden flex flex-col justify-between p-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex flex-col gap-2 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest pb-3 border-b border-gray-100">
            Navigate Site
          </div>
          {['home', 'about', 'services', 'expertise', 'portfolio', 'process', 'testimonials', 'faq', 'contact'].map((sect) => (
            <button
              key={sect}
              onClick={() => scrollToSection(sect)}
              className="w-full text-left py-3 px-4 rounded-xl text-gray-700 hover:text-primary hover:bg-orange-50 font-medium transition-colors capitalize cursor-pointer flex items-center justify-between"
              id={`mobile-nav-link-${sect}`}
            >
              {sect === 'home' ? 'Home' : sect === 'faq' ? 'FAQ' : sect === 'expertise' ? 'Expertise' : sect.replace('-', ' ')}
              <span className="text-gray-300">→</span>
            </button>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-bold transition-transform active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/10"
            id="mobile-nav-cta"
          >
            Book Food Catering
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="text-center text-xs text-gray-400 font-mono">
            Panipuri Express &copy; 2026
          </div>
        </div>
      </div>
    </header>
  );
}
