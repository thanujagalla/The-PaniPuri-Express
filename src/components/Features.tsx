import { Apple, History, ShieldCheck, Users, Clock, Calendar } from 'lucide-react';
import { FEATURES_DATA } from '../data';

export default function Features() {
  // Map icon strings to Lucide icon components
  const iconMap: Record<string, any> = {
    Apple: Apple,
    History: History,
    ShieldCheck: ShieldCheck,
    Users: Users,
    Clock: Clock,
    Calendar: Calendar,
  };

  return (
    <section id="expertise" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background visual elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="text-xs font-black tracking-widest text-[#F4B400] uppercase bg-[#F4B400]/10 px-3.5 py-1 rounded-md border border-[#F4B400]/30 inline-block mb-3 font-sans">
              Why We Are Exceptional
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
              We Don't Just Setup Stalls — <span className="text-primary italic">We Curate Memories</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-sans font-light">
              Indian street culinary is an emotional legacy. Here is the operational rigor, certifications, and craft philosophy we deploy to keep your celebrations delightful and safe.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || ShieldCheck;
            const borders = ["border-[#FF6B00]", "border-[#F4B400]", "border-[#1F6F50]"];
            const bgOpacities = ["bg-[#FF6B00]/10", "bg-[#F4B400]/10", "bg-[#1F6F50]/10"];
            const borderClass = borders[idx % 3];
            const bgClass = bgOpacities[idx % 3];
            return (
              <div 
                key={feature.id}
                className={`p-8 rounded-r-3xl bg-white border border-gray-100 shadow-md border-l-8 ${borderClass} hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col gap-6 group`}
                id={`feature-card-${feature.id}`}
              >
                {/* Icon Container with interactive style */}
                <div className={`w-14 h-14 ${bgClass} text-secondary flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                  <IconComponent className="w-6 h-6 text-secondary" />
                </div>

                {/* Text Context */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-200 font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Seal Banner */}
        <div className="mt-16 md:mt-24 p-8 rounded-3xl bg-gradient-to-r from-secondary to-teal-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-secondary/15">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10 hidden sm:flex">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold font-serif text-accent">100% Certified Food Grade Sourcing</h4>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-xl font-light">
                Our base preparations take place in a fully sanitized commercial kitchen. All ingredients are inspected for quality before arriving at your venue.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="text-xs font-semibold text-dark bg-white/95 px-5 py-2.5 rounded-xl border border-white shadow-md inline-block font-mono uppercase tracking-widest scale-95 md:scale-100">
              ISO & HACCP ALIGNED
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
