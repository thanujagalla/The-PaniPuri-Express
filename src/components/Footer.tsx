import React, { useState } from 'react';
import { Utensils, Instagram, Facebook, Youtube, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => {
        setNewsletterSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-stone-900 border-t border-stone-800 text-gray-300 py-16 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Upper footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <button 
              onClick={() => onLinkClick('home')}
              className="flex items-center gap-2 text-2xl font-bold tracking-tight text-left cursor-pointer focus:outline-none"
              id="footer-brand"
            >
              <div className="p-2 bg-primary text-white rounded-full shadow-lg">
                <Utensils className="w-5 h-5" />
              </div>
              <div className="text-white">
                <span>Panipuri</span>
                <span className="text-primary font-extrabold">Express</span>
              </div>
            </button>
            <p className="text-sm text-stone-400 leading-relaxed">
              Bringing the crispest, tangiest, and hygienic live Indian street food experiences to your milestone weddings, upscale anniversaries, and high-energy corporate galas.
            </p>
            
            {/* Social channels */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-stone-800/80 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all cursor-pointer text-stone-300 hover:-translate-y-0.5"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-stone-800/80 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all cursor-pointer text-stone-300 hover:-translate-y-0.5"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-stone-800/80 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all cursor-pointer text-stone-300 hover:-translate-y-0.5"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-stone-800/80 hover:bg-emerald-500 hover:text-white rounded-xl flex items-center justify-center transition-all cursor-pointer text-stone-300 hover:-translate-y-0.5"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest font-mono">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Services', id: 'services' },
                { label: 'Expertise', id: 'expertise' },
                { label: 'Event Portfolio', id: 'portfolio' },
                { label: 'Contact Us', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="hover:text-primary transition-colors hover:underline text-left cursor-pointer"
                    id={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest font-mono">
              Catering Categories
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <button onClick={() => onLinkClick('services')} className="hover:text-primary text-left cursor-pointer">
                  Wedding Stalls & Islands
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('services')} className="hover:text-primary text-left cursor-pointer">
                  Corporate Assemblies
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('services')} className="hover:text-primary text-left cursor-pointer">
                  Automatic Live Fountains
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('services')} className="hover:text-primary text-left cursor-pointer">
                  Custom Themed Snacking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter signup */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest font-mono">
              Newsletter
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Subscribe to obtain occasional updates on new menu inclusions, early booking season slots, and street food recipes.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
              <div className="flex bg-stone-800 rounded-xl overflow-hidden border border-stone-700/50 focus-within:border-primary/55 transition-colors">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email adress"
                  className="w-full bg-transparent px-4 py-3 outline-none text-xs text-white placeholder-stone-500"
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary hover:bg-orange-600 text-white px-4 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {newsletterSubscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <div className="font-mono">
            &copy; {new Date().getFullYear()} Panipuri Express. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Catering Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
