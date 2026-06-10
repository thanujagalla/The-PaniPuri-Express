import { useState } from 'react';
import { PartyPopper, Building2, Flame, Sparkles, Check, X, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, CATERING_PACKAGES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Services({ onSelectPackage }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon strings to components
  const iconMap: Record<string, any> = {
    PartyPopper: PartyPopper,
    Building2: Building2,
    Flame: Flame,
    Sparkles: Sparkles,
  };

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const handleBookPackage = (pkgName: string) => {
    setSelectedService(null);
    onSelectPackage(pkgName);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 font-sans">
          <span className="text-xs font-black tracking-widest text-[#FF6B00] uppercase bg-[#FF6B00]/10 px-3.5 py-1 rounded-md border border-[#FF6B00]/30 inline-block mb-3">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Premium Catering Designed <span className="text-primary italic">for Every Occasion</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            Indulge your guests with pristine hygiene standards, live setup aesthetics, and delicious flavors custom-tailored to your party themes.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            const borders = ["border-[#FF6B00]", "border-[#F4B400]", "border-[#1F6F50]", "border-gray-300"];
            const borderClass = borders[idx % 4];
            return (
              <div 
                key={service.id} 
                className={`bg-white rounded-r-3xl overflow-hidden border border-gray-150 border-l-8 ${borderClass} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Card Image */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-md text-primary">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => handleLearnMore(service)}
                    className="w-full py-3 px-4 border border-secondary text-secondary rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
                    id={`service-btn-learn-${service.id}`}
                  >
                    Learn More & Inclusions
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Packages Showcase (View Menu / Selection) */}
        <div className="pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary font-serif">
              Explore Our Curated Packages
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              We offer pre-configured themes to simplify booking, or we can tailor everything to order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CATERING_PACKAGES.map((pkg, idx) => {
              const borderStyles = ["border-l-8 border-primary", "border-l-8 border-[#F4B400]"];
              const borderClass = borderStyles[idx % 2];
              return (
                <div 
                  key={pkg.id} 
                  className={`rounded-r-3xl p-8 relative flex flex-col justify-between transition-all duration-300 border ${
                    pkg.isPopular 
                      ? 'bg-secondary text-white shadow-xl shadow-secondary/20 border-secondary border-l-8 border-l-accent scale-105 lg:-translate-y-2' 
                      : `bg-white text-gray-800 border-gray-150 ${borderClass} hover:shadow-xl hover:shadow-orange-100/10`
                  }`}
                  id={`pkg-card-${pkg.id}`}
                >
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 right-6 bg-accent text-dark font-extrabold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h4 className={`text-2xl font-bold mb-2 font-serif ${pkg.isPopular ? 'text-accent' : 'text-secondary'}`}>
                    {pkg.name}
                  </h4>
                  <p className={`text-xs mb-6 ${pkg.isPopular ? 'text-gray-200' : 'text-gray-400'}`}>
                    {pkg.description}
                  </p>

                  <div className={`p-4 rounded-2xl mb-6 font-mono font-bold text-sm tracking-wide ${pkg.isPopular ? 'bg-white/10 text-white' : 'bg-gray-50 text-secondary'}`}>
                    Pricing: {pkg.priceRange}
                  </div>

                  {/* benefits */}
                  <div className="mb-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider mb-3 opacity-90">Inclusions:</h5>
                    <ul className="space-y-2.5">
                      {pkg.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className={`w-4 h-4 shrink-0 ${pkg.isPopular ? 'text-accent' : 'text-primary'}`} />
                          <span className={pkg.isPopular ? 'text-gray-100' : 'text-gray-600'}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* specifications */}
                  <div className="pt-6 border-t border-gray-100/10 mb-8">
                    <h5 className="text-xs font-bold uppercase tracking-wider mb-3 opacity-90">Capacity and Setup:</h5>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs opacity-80">
                          <span className={`w-1.5 h-1.5 rounded-full ${pkg.isPopular ? 'bg-accent' : 'bg-primary'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => handleBookPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-xl font-bold hover:scale-102 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer text-center text-sm ${
                    pkg.isPopular 
                      ? 'bg-accent text-dark shadow-lg shadow-accent/20 font-extrabold hover:bg-white' 
                      : 'bg-primary text-white shadow-md shadow-primary/10 hover:bg-orange-600'
                  }`}
                  id={`pkg-btn-select-${pkg.id}`}
                >
                  Select & Enquire
                </button>
              </div>
            );
          })}
          </div>
        </div>

      </div>

      {/* Learn More Interactive Modal Popup */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/75 backdrop-blur-md" 
          onClick={() => setSelectedService(null)}
          id="service-modal-overlay"
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6 md:p-8 shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
            id="service-modal"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              id="service-modal-close"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal header image */}
            <div className="h-48 md:h-60 w-full rounded-2xl overflow-hidden relative mb-6">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-dark/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-primary px-2.5 py-1 rounded-md mb-1 inline-block">Specialty</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif">{selectedService.title}</h3>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-2">Category Overview</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedService.description}</p>
              </div>

              {/* Sub-menu features */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Popular Stations & Items</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.details.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* core benefits */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Service Guarantees</h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs inside modal */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleBookPackage(`${selectedService.title} Service`)}
                  className="flex-1 bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all cursor-pointer text-center text-sm"
                  id="modal-cta-select"
                >
                  Configure & Book Catering
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-6 border border-gray-200 text-gray-500 hover:bg-gray-50 font-bold rounded-xl transition-all cursor-pointer text-center text-sm"
                  id="modal-cta-close"
                >
                  Close Details
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
