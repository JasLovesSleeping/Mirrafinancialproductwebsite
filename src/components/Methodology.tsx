import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const archetypes = [
  {
    name: "The Guardian",
    traits: ["Security-First", "Risk-Averse", "Detail-Oriented"],
    color: "bg-blue-900",
    tip: "Focus on downside protection and historical data."
  },
  {
    name: "The Visionary",
    traits: ["Growth-Focused", "Big Picture", "Intuitive"],
    color: "bg-purple-900",
    tip: "Connect investments to life goals and legacy."
  },
  {
    name: "The Engineer",
    traits: ["Analytical", "Systematic", "Skeptical"],
    color: "bg-slate-800",
    tip: "Show the methodology. Be transparent about fees."
  },
  {
    name: "The Steward",
    traits: ["Family-Centric", "Conservative", "Responsible"],
    color: "bg-emerald-900",
    tip: "Emphasize stability and intergenerational transfer."
  }
];

export const Methodology = () => {
  return (
    <section id="methodology" className="py-24 bg-[#FDFCF8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
           
           {/* Header */}
           <div className="lg:col-span-4 sticky top-32">
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-px w-8 bg-[#2E2E48]"></div>
                 <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
                   Our Methodology
                 </span>
              </div>
              <h2 className="text-4xl font-serif text-[#1A1A1A] leading-tight mb-6">
                Decoding the <br/> Human Element.
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                Mirra doesn't just record words. It categorizes decision-making patterns into behavioral archetypes, giving you a shared language to decode client motivations.
              </p>
              <a href="#" className="inline-flex items-center text-[#2E2E48] font-medium border-b border-[#2E2E48] pb-0.5 hover:opacity-70 transition-opacity">
                 Explore the Framework <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
           </div>
           
           {/* Cards */}
           <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                 {archetypes.map((type, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className="group relative bg-white border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm cursor-default"
                   >
                      <div className="flex justify-between items-start mb-6">
                         <div className={`w-12 h-12 rounded-full ${type.color} text-white flex items-center justify-center font-serif italic text-xl shadow-md group-hover:scale-110 transition-transform`}>
                            {type.name[0]}
                         </div>
                         <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-[#2E2E48] uppercase tracking-wider">
                            Insight
                         </div>
                      </div>
                      
                      <h3 className="text-xl font-serif text-[#1A1A1A] mb-3">{type.name}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                         {type.traits.map((t, idx) => (
                           <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-50 text-gray-500 border border-gray-100 rounded-sm">
                             {t}
                           </span>
                         ))}
                      </div>

                      {/* Reveal on Hover */}
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-[#FAFAFA] border-t border-gray-100 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                         <p className="text-xs text-[#2E2E48] font-medium italic">
                            "{type.tip}"
                         </p>
                      </div>
                      
                      {/* Clip path to hide the absolute positioned hover element when not hovered */}
                      <div className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none"></div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
