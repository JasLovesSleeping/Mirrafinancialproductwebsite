import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, FileText, ExternalLink, Download, Eye } from 'lucide-react';
import { Button } from './ui/button';

export const TrustCenter = () => {
  const resources = [
    {
      icon: Shield,
      title: "Security Overview",
      description: "Architecture, encryption, and infrastructure security",
      action: "View Details",
      link: "#"
    },
    {
      icon: Lock,
      title: "Compliance Documentation",
      description: "SOC 2, GDPR, and regulatory compliance materials",
      action: "Download Pack",
      link: "#"
    },
    {
      icon: FileText,
      title: "Data Processing Agreement",
      description: "DPA template for vendor review processes",
      action: "Get Template",
      link: "#"
    },
    {
      icon: Eye,
      title: "Audit & Logging",
      description: "Activity logs, access controls, and audit trails",
      action: "Learn More",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E5E5E5]">
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
              Trust Center
            </span>
            <div className="h-px w-8 bg-[#2E2E48]"></div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
            Security materials for your vendor review
          </h2>
          <p className="text-lg text-gray-600">
            Self-serve access to compliance documentation, security architecture, and audit materials.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                  <resource.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-1 flex items-center gap-2">
                    {resource.title}
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {resource.description}
                  </p>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider group-hover:underline">
                    {resource.action} →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            Need something specific for your procurement team?
          </p>
          <Button 
            variant="outline"
            className="border-[#2E2E48] text-[#2E2E48] hover:bg-[#2E2E48] hover:text-white h-12 px-8 text-sm font-bold tracking-wide rounded-lg"
          >
            Contact Security Team
          </Button>
        </div>

      </div>
    </section>
  );
};
