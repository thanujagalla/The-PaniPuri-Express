import { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, Utensils } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor screen positions to toggle "Back to Top" widget
  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const handleSelectPackageAndScroll = (packageName: string) => {
    setSelectedPackage(packageName);
    
    // Smooth scroll offset to contact module
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGlobalScrollTrigger = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* 1. Sticky Header & Navigation */}
      <Navigation />

      {/* Main Body Containers */}
      <main>
        {/* 2. Hero Section */}
        <Hero 
          onBookClick={() => handleSelectPackageAndScroll('Custom Gastronomy')}
          onMenuClick={() => handleGlobalScrollTrigger('services')}
        />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Services Section */}
        <Services onSelectPackage={handleSelectPackageAndScroll} />

        {/* 5. Expertise & Features Section */}
        <Features />

        {/* 6. Portfolio / Gallery Section */}
        <Portfolio />

        {/* 7. Process Section */}
        <Process />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. FAQ Section */}
        <FAQ />

        {/* 10. Contact Section */}
        <Contact preselectedPackageName={selectedPackage} />

        {/* 11. Call-To-Action Banner */}
        <CTA onQuoteClick={() => handleSelectPackageAndScroll('Custom Gastronomy')} />
      </main>

      {/* 12. Corporate Footer */}
      <Footer onLinkClick={handleGlobalScrollTrigger} />

      {/* Sticky Widgets Block */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        
        {/* WhatsApp Click-to-Chat Button */}
        <a
          href="https://wa.me/919876543210?text=Hi%20Panipuri%20Express%20team%20I%20am%20interested%20in%20inquiring%20about%20your%20live%20food%20catering%2521"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-emerald-500 hover:bg-emerald-600 font-bold p-4 rounded-2xl shadow-xl shadow-emerald-500/35 text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          id="global-floating-whatsapp"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>

        {/* Smooth scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3.5 bg-secondary hover:bg-teal-900 shadow-xl shadow-secondary/30 text-accent rounded-2xl transition-all duration-300 active:scale-95 cursor-pointer border border-teal-800"
            id="global-floating-scroll-top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

      </div>
    </div>
  );
}
