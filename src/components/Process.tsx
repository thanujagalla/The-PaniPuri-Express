import { PROCESS_DATA } from '../data';
import { HelpCircle, PhoneCall, ClipboardList, Utensils, Star, Smile } from 'lucide-react';

export default function Process() {
  const stepIcons = [
    PhoneCall,     // Step 1
    ClipboardList, // Step 2
    Utensils,      // Step 3
    Smile,         // Step 4
    Star           // Step 5
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#FF6B00]/10 px-3.5 py-1 rounded-md border border-[#FF6B00]/30 inline-block mb-3">
            Our Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            How We Deliver <span className="text-primary italic">Absolute Perfection</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            An organized, flawless flow ensures you can fully focus on your guests while our catering experts manage every detail smoothly.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central connecting line for desktop view */}
          <div className="absolute left-[30px] lg:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

          <div className="space-y-12 md:space-y-20 relative">
            {PROCESS_DATA.map((step, idx) => {
              const StepIcon = stepIcons[idx] || HelpCircle;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.step}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`process-step-${step.step}`}
                >
                  
                  {/* Left or Right column content card */}
                  <div className="w-full md:w-[calc(50%-45px)] md:px-4">
                    <div className="bg-gray-50/70 p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-orange-100/60 hover:shadow-xl hover:shadow-orange-100/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono font-bold text-accent bg-secondary px-2.5 py-1 rounded-md">
                          STEP 0{step.step}
                        </span>
                        <span className="text-xs text-gray-400 font-semibold">{step.timeframe}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-secondary mb-3 font-sans">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-tr from-primary to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-white">
                      <StepIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  {/* Empty Spacer Column to preserve balance on desktop grids */}
                  <div className="hidden md:block w-[calc(50%-45px)] px-4" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
