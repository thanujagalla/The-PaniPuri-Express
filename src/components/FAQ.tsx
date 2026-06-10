import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 font-sans">
          <span className="text-xs font-black tracking-widest text-[#FF6B00] uppercase bg-[#FF6B00]/10 px-3.5 py-1 rounded-md border border-[#FF6B00]/30 inline-block mb-3">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Frequently Asked <span className="text-primary italic">Inquiries</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            Got specific logistical questions or custom requirements? Read through our standard operations summary below.
          </p>
        </div>

        {/* Expandable Accordion layout */}
        <div className="max-w-3xl mx-auto space-y-4" id="faq-accordions">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIndex === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'bg-orange-50/40 border-primary/30 shadow-md shadow-orange-100/30' 
                    : 'bg-white border-gray-100 hover:border-gray-250 hover:shadow-lg hover:shadow-gray-100/50'
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  id={`faq-trigger-${faq.id}`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                    <span className="font-bold text-sm sm:text-base text-secondary font-sans tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron Icon rotate animation */}
                  <div className={`p-1.5 rounded-full bg-gray-50 text-secondary transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-primary/15 text-primary' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 border-t border-gray-100/50' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm md:text-base leading-relaxed text-gray-500 font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 bg-gray-50 p-6 rounded-2xl max-w-lg mx-auto border border-gray-100">
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Still have a particular query? Contact our wedding & corporate planning team directly at{' '}
            <a href="mailto:hello@panipuriexpress.com" className="text-primary hover:underline font-bold font-sans">
              hello@panipuriexpress.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
