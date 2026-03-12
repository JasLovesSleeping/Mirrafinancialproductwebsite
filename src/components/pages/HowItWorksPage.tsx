import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ArrowDown, Database, Mic, FileText, Share2, Zap, ShieldCheck } from 'lucide-react';
import { useRouter } from '../Router';

export const HowItWorksPage = () => {
  const { setPage } = useRouter();

  return (
    <div className="pt-32 pb-24 px-6 container mx-auto bg-[#FDFCF8] min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
             <div className="inline-flex items-center justify-center gap-2 mb-4">
               <div className="h-px w-8 bg-[#2E2E48]"></div>
               <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
                 Architecture
               </span>
               <div className="h-px w-8 bg-[#2E2E48]"></div>
             </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6">
              How Mirra works.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
               A proprietary intelligence layer that sits between your client interactions and your system of record.
            </p>
        </div>

        {/* Data Flow Diagram */}
        <div className="relative">
            {/* Connecting Line (Vertical) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-x-1/2 z-0 hidden md:block"></div>

            <div className="space-y-12 relative z-10">
                
                {/* 1. INPUTS */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Inputs</h3>
                        <p className="text-gray-500 text-sm">Multi-modal data ingestion</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm md:max-w-md">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-100">
                                <Database className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium">CRM Context</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-100">
                                <Mic className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium">Audio Stream</span>
                            </div>
                             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-100">
                                <FileText className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium">Pre-Assessments</span>
                            </div>
                             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-100">
                                <FileText className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium">Advisor Notes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center md:py-4">
                    <div className="bg-gray-100 p-2 rounded-full border border-gray-200">
                        <ArrowDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* 2. PROCESSING */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 flex justify-end">
                        <div className="bg-[#2E2E48] text-white p-8 rounded-xl shadow-xl md:max-w-md w-full relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] rounded-full"></div>
                             <h4 className="font-bold uppercase tracking-widest text-indigo-300 text-xs mb-4">The Mirra Engine</h4>
                             <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Zap className="w-4 h-4 text-amber-400" />
                                    <span>Decision Pace Analysis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="w-4 h-4 text-green-400" />
                                    <span>Risk Language Detection</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full border border-indigo-400 flex items-center justify-center text-[10px] font-bold">B</div>
                                    <span>Bias Cues & Heuristics</span>
                                </li>
                             </ul>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Processing</h3>
                        <p className="text-gray-500 text-sm">Behavioral Finance Logic</p>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center md:py-4">
                    <div className="bg-gray-100 p-2 rounded-full border border-gray-200">
                        <ArrowDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* 3. OUTPUTS */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Outputs</h3>
                        <p className="text-gray-500 text-sm">Client-Ready Artifacts</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm md:max-w-md">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 border-b border-gray-100">
                                <span className="font-serif text-[#1A1A1A]">Executive Brief</span>
                                <span className="text-[10px] uppercase font-bold text-gray-400">PDF / Doc</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-b border-gray-100">
                                <span className="font-serif text-[#1A1A1A]">In-Meeting Prompts</span>
                                <span className="text-[10px] uppercase font-bold text-gray-400">UI / Overlay</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-b border-gray-100">
                                <span className="font-serif text-[#1A1A1A]">Follow-up Email</span>
                                <span className="text-[10px] uppercase font-bold text-gray-400">Outlook / Gmail</span>
                            </div>
                            <div className="flex justify-between items-center p-3">
                                <span className="font-serif text-[#1A1A1A]">Client Profile</span>
                                <span className="text-[10px] uppercase font-bold text-gray-400">JSON / CRM</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                 {/* Arrow */}
                <div className="flex justify-center md:py-4">
                    <div className="bg-gray-100 p-2 rounded-full border border-gray-200">
                        <ArrowDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                 {/* 4. DESTINATION */}
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 flex justify-end">
                         <div className="flex gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">Zoom</div>
                            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">SFDC</div>
                            <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">Teams</div>
                         </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Workflow Fit</h3>
                        <p className="text-gray-500 text-sm">Direct Integration</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="mt-20 text-center">
            <Button onClick={() => setPage('home')} size="lg" className="bg-[#2E2E48] text-white">
                Request Integration Specs
            </Button>
        </div>
      </div>
    </div>
  );
};
