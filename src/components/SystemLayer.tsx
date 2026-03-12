import React from 'react';
import { motion } from 'motion/react';
import { User, Server, Users, ArrowRight, Brain, FileText, Activity } from 'lucide-react';

export const SystemLayer = () => {
  return (
    <section className="py-24 bg-[#F9F9FB] border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Bridge Visualization */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                  <div className="flex items-center justify-between relative z-10">
                      
                      {/* Client Side */}
                      <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border border-blue-100 shadow-sm">
                              <User className="w-8 h-8" />
                          </div>
                          <span className="text-sm font-bold text-[#1A1A1A]">Client</span>
                      </div>

                      {/* Bridge / Connection */}
                      <div className="flex-1 flex items-center justify-center px-4 relative">
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 dashed"></div>
                          <div className="w-full relative">
                              {/* Mirra Central Node */}
                              <div className="mx-auto w-24 h-24 bg-[#2E2E48] rounded-xl flex flex-col items-center justify-center text-white shadow-2xl relative z-20 transform hover:scale-105 transition-transform duration-300">
                                  <div className="absolute -top-3 px-2 py-0.5 bg-indigo-500 rounded-full text-[9px] font-bold uppercase tracking-wider">Layer</div>
                                  <Brain className="w-8 h-8 mb-2" />
                                  <span className="font-serif font-bold text-lg">Mirra</span>
                              </div>
                              
                              {/* Flow Arrows */}
                              <motion.div 
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute top-1/2 -translate-y-1/2 right-0 text-[#2E2E48]"
                              >
                                  <ArrowRight className="w-5 h-5" />
                              </motion.div>
                              <motion.div 
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                                className="absolute top-1/2 -translate-y-1/2 left-0 text-gray-400"
                              >
                                  <ArrowRight className="w-5 h-5" />
                              </motion.div>
                          </div>
                      </div>

                      {/* Advisor Side */}
                      <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 shadow-sm">
                              <Users className="w-8 h-8" />
                          </div>
                          <span className="text-sm font-bold text-[#1A1A1A]">Advisor</span>
                      </div>
                  </div>
                  
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] -z-0"></div>
               </div>
            </motion.div>

            {/* Right: Bullets */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
               <h2 className="text-4xl font-serif text-[#1A1A1A]">
                  A dedicated layer between client and advisor.
               </h2>

               <div className="space-y-6">
                  {/* Inputs */}
                  <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                          <Activity className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">Inputs</h4>
                          <p className="text-gray-600 text-sm">Assessment data + conversation signals.</p>
                      </div>
                  </div>

                  {/* Processing */}
                  <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#2E2E48] flex items-center justify-center shrink-0 shadow-lg">
                          <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">Processing</h4>
                          <p className="text-gray-600 text-sm">Behavioral detection + profile updates.</p>
                      </div>
                  </div>

                  {/* Outputs */}
                  <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">Outputs</h4>
                          <p className="text-gray-600 text-sm">Briefs, prompts, and follow-ups.</p>
                      </div>
                  </div>
               </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
};
