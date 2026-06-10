import { useState } from 'react';
import { Target, Heart, ShieldCheck, Sparkles, Award, UtensilsCrossed } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'story'>('story');

  const tabs = {
    story: {
      title: "Our Story",
      subtitle: "Starting with a single customized street cart...",
      content: "Panipuri Express began with a simple but passionate goal: to transition Indian street food from humble roadsides to high-end events without losing its heartwarming heart and spice. Traditional chaat preparation was often associated with hygiene concerns, so we set out to change the narrative. By combining family spice formulations with clean, medical-grade hygiene protocols and gorgeous aesthetics, we redefined the authentic live street food catering market.",
      accent: "We believe street food is more than culinary sustenance — it is an emotional, shared human experience."
    },
    mission: {
      title: "Our Mission",
      subtitle: "Hygiene, Taste, and Warm Hospitality",
      content: "Our mission is to establish the absolute gold standard for street food live catering worldwide. We commit to daily raw-material quality inspections, leveraging pristine farm-fresh ingredients, direct sourcing of spices from regional estates in India, and providing a highly polite, comprehensively trained, uniformly clad service force across all scale celebrations.",
      accent: "Authentic, lip-smacking snack layers delivered with total trust and unmatched safety."
    },
    vision: {
      title: "Our Vision",
      subtitle: "Globalizing India's Street Culture Aesthetics",
      content: "We envision becoming the most recognized, trusted, and creatively adaptive Indian street food event catering brand. Through modular kitchen technologies, stunning automatic copper water fountains, and custom spice tags, we seek to inspire high-end catering hosts to view panipuri, bhel, and chaat as the premium focal point of modern celebrations.",
      accent: "Injecting authentic street joy, sparkling flavor depths, and impeccable serving theater globally."
    }
  };

  const highPoints = [
    { label: "Authentic Family Spices", desc: "Sourced directly, hand-roasted and ground weekly.", icon: Award },
    { label: "Surgical-Grade Hygiene", desc: "Gloves, hairnets, and purified RO water, strictly enforced.", icon: ShieldCheck },
    { label: "Bespoke Menus", desc: "Tailored spice mixtures and custom dietary selections.", icon: Sparkles },
    { label: "Master Street Chefs", desc: "Artisanal catering specialists with professional hospitality training.", icon: UtensilsCrossed }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#FF6B00]/10 px-3.5 py-1 rounded-md border border-[#FF6B00]/30 inline-block mb-3">
            Get to Know Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Elevating Street Food into a <span className="text-primary italic">Premium Culinary Art</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            Read our origins, map our core values, and discover why hundreds of premium hosts trust us to charm their guests.
          </p>
        </div>

        {/* Story & Tab Controls Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1589113103503-4967fab90e1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chefs prepping Panipuri water infusions"
                className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              
              {/* Custom badge layered over image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="bg-primary text-white p-3 rounded-xl font-bold text-center shrink-0">
                  <div className="text-xl md:text-2xl font-black">5+</div>
                  <div className="text-[10px] uppercase tracking-wider">Years</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-secondary font-sans">Award-Winning Catering</div>
                  <div className="text-xs text-gray-500 leading-tight">Voted the regional favorite street-food catering provider 2024 & 2025.</div>
                </div>
              </div>
            </div>
            
            {/* Decors */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
          </div>

          {/* Right Column: Interactive Tabbed Philosophy content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tab Toggles */}
            <div className="flex border-b border-gray-200 gap-1 sm:gap-4 mb-8">
              {(['story', 'mission', 'vision'] as const).map((tabId) => (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`py-3 px-4 sm:px-6 text-sm font-semibold tracking-wide transition-all border-b-2 hover:text-primary cursor-pointer ${
                    activeTab === tabId 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-400'
                  }`}
                  id={`tab-btn-${tabId}`}
                >
                  {tabId === 'story' ? 'Our Story' : tabId === 'mission' ? 'Our Mission' : 'Our Vision'}
                </button>
              ))}
            </div>

            {/* Tab panel visual frame */}
            <div className="bg-orange-50/30 p-6 md:p-8 rounded-2xl border border-orange-100/55 min-h-[250px] flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-1.5 font-sans">
                  {tabs[activeTab].subtitle}
                </h3>
                <h4 className="text-2xl font-bold text-secondary mb-4 font-serif">
                  {tabs[activeTab].title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  {tabs[activeTab].content}
                </p>
              </div>
              <div className="border-l-8 border-primary pl-4 py-3 bg-white p-4 rounded-r-2xl shadow-md">
                <span className="text-xs sm:text-sm font-semibold text-secondary italic block leading-relaxed font-sans">
                  "{tabs[activeTab].accent}"
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Highlight Grid */}
        <div className="pt-12 border-t border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-secondary font-serif">What Makes Us Stand Out?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highPoints.map((point, index) => {
              const IconComp = point.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-50/50 hover:bg-white p-6 rounded-2xl border border-gray-100 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-100/20 transition-all duration-300 flex flex-col items-start gap-4 group"
                >
                  <div className="p-3 bg-orange-100/50 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-secondary mb-1.5 group-hover:text-primary transition-colors duration-200 font-sans">
                      {point.label}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
