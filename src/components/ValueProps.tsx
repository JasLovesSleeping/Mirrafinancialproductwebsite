import React from 'react';
import { motion } from 'motion/react';
import { Clock, TrendingUp, Users } from 'lucide-react';

const props = [
  {
    icon: Clock,
    title: "Efficiency",
    headline: "Save 15+ hours/week.",
    description: "Eliminate 90% of prep and follow-up time. Mirra handles the admin so you can focus on the relationship."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    headline: "Win more prospects.",
    description: "Turn first meetings into signed clients by uncovering hidden motivations and addressing risks in real-time."
  },
  {
    icon: Users,
    title: "Capacity",
    headline: "Double your service cap.",
    description: "Manage more households without hiring junior staff. Mirra acts as your always-on paraplanner."
  }
];

export const ValueProps = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-[#2E2E48]/5 rounded-lg flex items-center justify-center mb-4 text-[#2E2E48]">
                <prop.icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-[#2E2E48] uppercase tracking-wider mb-2">{prop.title}</p>
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">{prop.headline}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
