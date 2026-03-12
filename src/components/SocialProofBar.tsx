import React from 'react';
import { Shield, Lock, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const SocialProofBar = () => {
  return (
    <section className="py-8 bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* Early Access Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
              <Shield className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Early Access Program • </span>
              <span className="font-bold text-[#2E2E48]">Pilot Cohort Forming</span>
            </div>
          </motion.div>

          {/* Security Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Audit Trails</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
