import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Database, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Integration = () => {
  const integrations = [
    {
      icon: Calendar,
      name: "Calendar",
      description: "Auto-sync meetings and prepare pre-meeting briefs",
      status: "Available"
    },
    {
      icon: Database,
      name: "CRM",
      description: "Push insights and client profiles to your existing system",
      status: "Available"
    },
    {
      icon: FileText,
      name: "Notes",
      description: "Connect to your note-taking tools for seamless documentation",
      status: "Roadmap"
    }
  ];

  return (
    <section id="integration" className="py-24 bg-[#FDFCF8] border-b border-[#E5E5E5]">
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
              Works With Your Stack
            </span>
            <div className="h-px w-8 bg-[#2E2E48]"></div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
            Mirra doesn't replace your CRM—it makes it smarter
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We translate conversation signals into CRM-ready outputs, so your existing workflow stays intact.
          </p>
        </div>

        {/* Positioning Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-indigo-100 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-2">
                  Layer, not replacement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mirra sits on top of your existing advisor workflow. We pull context from your calendar and CRM, analyze client conversations, and push structured insights back—so you don't have to change how you work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                  <integration.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {integration.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    integration.status === 'Available' 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {integration.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Note */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need a custom integration? We provide REST APIs and webhooks for enterprise customers.
          </p>
        </div>

      </div>
    </section>
  );
};
