import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
    Download, Copy, Share2, Clock, 
    Shield, Target, Zap, Activity, 
    MessageCircle, CheckCircle, AlertCircle, 
    ArrowRight, Info, Layout, FileText
} from 'lucide-react';
import { Button } from '../ui/button';
import { FooterCTA } from '../FooterCTA';
import { WaitlistModal } from '../WaitlistModal';

export const ProductPage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-[#FDFCF8] min-h-screen pt-32">
      <WaitlistModal isOpen={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      
      {/* 1. Hero Section */}
      <div className="container mx-auto px-6 mb-20 text-center">
         <div className="inline-flex items-center gap-2 mb-4">
             <div className="h-px w-8 bg-[#2E2E48]"></div>
             <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
                 The Platform
             </span>
             <div className="h-px w-8 bg-[#2E2E48]"></div>
         </div>
         <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1A1A1A] mb-6">
             Your new system of intelligence.
         </h1>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light mb-8">
             Mirra runs in the background, updating the Client Profile and delivering advisor-ready guidance in real-time.
         </p>
         <div className="flex justify-center gap-4">
             <Button className="bg-[#2E2E48] text-white px-8 h-12">View Sample Profile</Button>
             <Button variant="ghost" onClick={() => setIsWaitlistOpen(true)} className="text-[#2E2E48] px-8 h-12 hover:bg-gray-100">Become a Design Partner</Button>
         </div>
      </div>

      {/* 2. Mirra Layer (Bridge) */}
      <div className="container mx-auto px-6 mb-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Source</span>
                  <div className="font-bold text-xl">Client Conversation</div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                   <div className="h-px w-16 bg-gray-300"></div>
                   <div className="bg-[#2E2E48] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                       MIRRA INTELLIGENCE LAYER
                   </div>
                   <div className="h-px w-16 bg-gray-300"></div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Destination</span>
                  <div className="font-bold text-xl">Advisor Workstation</div>
              </div>
          </div>
      </div>

      {/* 3. Dashboard Display (The Core) */}
      <div className="bg-[#F5F4F0] py-20 border-y border-gray-200">
         <div className="container mx-auto px-4 md:px-8 max-w-7xl">
             <div className="mb-12 text-center">
                 <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">The Client Profile</h2>
                 <p className="text-gray-500">A living dashboard, not a static PDF.</p>
             </div>

             <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[800px]">
                 
                 {/* Sidebar */}
                 <div className="w-full md:w-[300px] bg-gray-50 border-r border-gray-200 p-6 flex flex-col shrink-0">
                     {/* Client Info */}
                     <div className="mb-8">
                         <div className="w-16 h-16 bg-[#2E2E48] text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-4">
                             JD
                         </div>
                         <h3 className="text-xl font-bold text-[#1A1A1A]">John Doe</h3>
                         <div className="flex items-center gap-2 mt-2">
                             <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded">Accumulation</span>
                             <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-1 rounded">The Maverick</span>
                         </div>
                     </div>

                     {/* Status */}
                     <div className="mb-8 space-y-3">
                         <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</div>
                         <div className="flex items-center gap-2 text-sm text-gray-600">
                             <Clock className="w-4 h-4" />
                             <span>Updated 2 hours ago</span>
                         </div>
                         <div className="flex flex-wrap gap-2">
                             <span className="border border-gray-200 bg-white text-gray-500 text-[10px] px-2 py-1 rounded flex items-center gap-1">
                                 <MessageCircle className="w-3 h-3" /> Conversation
                             </span>
                             <span className="border border-gray-200 bg-white text-gray-500 text-[10px] px-2 py-1 rounded flex items-center gap-1">
                                 <Activity className="w-3 h-3" /> Assessment
                             </span>
                         </div>
                     </div>

                     {/* Actions */}
                     <div className="mt-auto space-y-2">
                         <Button variant="outline" className="w-full justify-start gap-2 text-gray-600 border-gray-200">
                             <Download className="w-4 h-4" /> Export PDF
                         </Button>
                         <Button variant="outline" className="w-full justify-start gap-2 text-gray-600 border-gray-200">
                             <Copy className="w-4 h-4" /> Copy Summary
                         </Button>
                         <Button variant="outline" className="w-full justify-start gap-2 text-gray-600 border-gray-200">
                             <Share2 className="w-4 h-4" /> Share Link
                         </Button>
                     </div>
                 </div>

                 {/* Main Content */}
                 <div className="flex-1 p-8 overflow-y-auto bg-white">
                     
                     {/* Top Snapshot Grid */}
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                         <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs uppercase font-bold">
                                 <Zap className="w-3 h-3" /> Decision Pace
                             </div>
                             <div className="font-bold text-lg text-[#1A1A1A]">Fast / Impulsive</div>
                         </div>
                         <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs uppercase font-bold">
                                 <Shield className="w-3 h-3" /> Risk Language
                             </div>
                             <div className="font-bold text-lg text-[#1A1A1A]">Loss Averse</div>
                         </div>
                         <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs uppercase font-bold">
                                 <Target className="w-3 h-3" /> Trust Triggers
                             </div>
                             <div className="font-bold text-lg text-[#1A1A1A]">Relationship</div>
                         </div>
                         <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                             <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs uppercase font-bold">
                                 <Activity className="w-3 h-3" /> Priority
                             </div>
                             <div className="font-bold text-lg text-[#1A1A1A]">College Savings</div>
                         </div>
                     </div>

                     {/* Advisor Guidance */}
                     <div className="mb-8">
                         <div className="flex items-center gap-2 mb-4">
                             <div className="h-6 w-1 bg-[#2E2E48] rounded-full"></div>
                             <h3 className="text-lg font-bold text-[#1A1A1A]">Advisor Guidance</h3>
                         </div>
                         
                         <div className="space-y-6">
                             {/* Opening */}
                             <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg">
                                 <span className="text-indigo-800 text-xs font-bold uppercase block mb-2">Suggested Opening</span>
                                 <p className="text-[#1A1A1A] italic">
                                     "John, I know you want to move quickly on the college fund, but let's take a moment to ensure we aren't exposing you to unnecessary volatility right before tuition is due."
                                 </p>
                             </div>

                             {/* Do's and Don'ts */}
                             <div className="grid md:grid-cols-2 gap-6">
                                 <div>
                                     <h4 className="text-sm font-bold text-green-700 mb-3 flex items-center gap-2">
                                         <CheckCircle className="w-4 h-4" /> Do This
                                     </h4>
                                     <ul className="space-y-2 text-sm text-gray-600">
                                         <li className="flex items-start gap-2">
                                             <span className="block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                                             Focus on "protection" and "safety" keywords.
                                         </li>
                                         <li className="flex items-start gap-2">
                                             <span className="block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                                             Validate his speed but ask for a "24-hour cooling off" period.
                                         </li>
                                         <li className="flex items-start gap-2">
                                             <span className="block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5"></span>
                                             Show visual proof of downside protection.
                                         </li>
                                     </ul>
                                 </div>
                                 <div>
                                     <h4 className="text-sm font-bold text-red-700 mb-3 flex items-center gap-2">
                                         <AlertCircle className="w-4 h-4" /> Avoid This
                                     </h4>
                                     <ul className="space-y-2 text-sm text-gray-600">
                                         <li className="flex items-start gap-2">
                                             <span className="block w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                                             Don't bombard him with spreadsheet data (he's a "Relationship" buyer).
                                         </li>
                                         <li className="flex items-start gap-2">
                                             <span className="block w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                                             Avoid discussing "high growth" speculative assets today.
                                         </li>
                                     </ul>
                                 </div>
                             </div>

                             {/* Questions */}
                             <div>
                                 <h4 className="text-sm font-bold text-[#1A1A1A] mb-3">Next-Best Questions</h4>
                                 <div className="space-y-2">
                                     <div className="p-3 bg-gray-50 rounded border border-gray-100 text-sm text-gray-700 hover:border-[#2E2E48] transition-colors cursor-default">
                                         "If the market dropped 10% next month, how would that impact your plans for Stanford?"
                                     </div>
                                     <div className="p-3 bg-gray-50 rounded border border-gray-100 text-sm text-gray-700 hover:border-[#2E2E48] transition-colors cursor-default">
                                         "Who else needs to be comfortable with this decision before we sign?"
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                     {/* Conversation Memory */}
                     <div>
                         <div className="flex items-center gap-2 mb-4">
                             <div className="h-6 w-1 bg-gray-300 rounded-full"></div>
                             <h3 className="text-lg font-bold text-gray-500">Conversation Memory</h3>
                         </div>
                         <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                             <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                                 <span className="text-xs font-bold uppercase text-gray-500">Open Loops</span>
                                 <Info className="w-4 h-4 text-gray-400" />
                             </div>
                             <div className="p-4 space-y-3">
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                     <p className="text-sm text-gray-700">Client mentioned "updating the trust" but moved on quickly.</p>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                                     <p className="text-sm text-gray-700">Expressed concern about "real estate exposure" in passing.</p>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>
             </div>
         </div>
      </div>

      {/* 4. Complete Meeting Intelligence (Pre/In/Post) */}
      <section className="py-24 bg-[#FDFCF8] border-b border-gray-200">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-serif text-[#1A1A1A] mb-4">Complete meeting intelligence.</h2>
                  <p className="text-gray-600">Before, during, and after every interaction.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Pre */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2E2E48] group-hover:text-white transition-colors">
                          <Layout className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Pre-Meeting</span>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Preparation Brief</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                          Instant analysis of previous communications to suggest the perfect agenda and opening hook.
                      </p>
                  </div>

                  {/* In */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                      <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors relative z-10">
                          <Zap className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                      </div>
                      <span className="text-xs font-bold text-indigo-400 uppercase block mb-2 relative z-10">In-Meeting</span>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 relative z-10">Real-time Guidance</h3>
                      <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                          Live prompts detecting hidden objections, risk anxiety, and trust signals as they happen.
                      </p>
                  </div>

                  {/* Post */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2E2E48] group-hover:text-white transition-colors">
                          <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Post-Meeting</span>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Auto-Follow Up</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                          Drafts the perfect follow-up email and updates CRM fields automatically.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <FooterCTA />
    </div>
  );
};
