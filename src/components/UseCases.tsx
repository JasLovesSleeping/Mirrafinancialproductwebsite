import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Search, TrendingDown, Calendar } from 'lucide-react';

const useCases = [
  {
    icon: UserPlus,
    title: "New Prospect Call",
    benefit: "Conversion",
    description: "Identify hidden objections early and close faster."
  },
  {
    icon: Search,
    title: "First Discovery",
    benefit: "Deep Understanding",
    description: "Build a complete psychological profile from day one."
  },
  {
    icon: TrendingDown,
    title: "Market Downturn",
    benefit: "Retention",
    description: "Proactively address anxiety with the right framing."
  },
  {
    icon: Calendar,
    title: "Annual Review",
    benefit: "Efficiency",
    description: "Automate the recap and focus on the relationship."
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12">
         
         <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Built for every critical conversation.</h2>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
               <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all group"
               >
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4 text-gray-500 group-hover:text-[#2E2E48] group-hover:border-[#2E2E48] transition-colors">
                     <useCase.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-sm font-bold text-[#1A1A1A]">{useCase.title}</span>
                  </div>
                  <div className="inline-block px-2 py-0.5 bg-[#2E2E48]/5 rounded mb-3">
                     <span className="text-[10px] font-bold text-[#2E2E48] uppercase tracking-wider">
                        Boosts {useCase.benefit}
                     </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                     {useCase.description}
                  </p>
               </motion.div>
            ))}
         </div>

      </div>
    </section>
  );
};
