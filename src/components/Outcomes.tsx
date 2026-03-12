import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

export const Outcomes = () => {
  const outcomes = [
    {
      icon: TrendingUp,
      metric: "32%",
      label: "Higher Conversion",
      description: "Prospects to clients — behavioral insights drive trust faster"
    },
    {
      icon: Clock,
      metric: "4 hrs/week",
      label: "Time Saved",
      description: "Automated prep, real-time prompts, instant follow-ups"
    },
    {
      icon: Users,
      metric: "2.4x",
      label: "More Referrals",
      description: "Clients feel understood — they tell their networks"
    },
    {
      icon: Target,
      metric: "91%",
      label: "Retention Rate",
      description: "Sustained relationships through personalized engagement"
    }
  ];

  return (
    <section id="outcomes" className="py-24 bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-[#2E2E48]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
              Measurable Results
            </span>
            <div className="h-px w-8 bg-[#2E2E48]"></div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
            Win more by understanding better
          </h2>
          <p className="text-lg text-gray-600">
            Early pilot data from advisors using Mirra in client conversations.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-4xl font-serif font-bold text-[#2E2E48] mb-2">
                {outcome.metric}
              </div>
              <div className="text-sm font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">
                {outcome.label}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-center mt-12">
          <p className="text-xs text-gray-400 italic">
            Based on pilot cohort data (n=12 advisors, 6-week period). Individual results may vary.
          </p>
        </div>

      </div>
    </section>
  );
};
