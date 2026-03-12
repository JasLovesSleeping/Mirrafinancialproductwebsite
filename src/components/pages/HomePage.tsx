import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { useRouter } from '../Router';
import { Activity, Clock, CheckCircle, Lock, Info, ChevronRight, XCircle, Mic, Zap, ArrowRight, Layout, Brain, BarChart3, Users, Layers } from 'lucide-react';
import { FooterCTA } from '../FooterCTA';
import { TrustBar } from '../TrustBar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { WaitlistModal } from '../WaitlistModal';

// Hero Background Image
const HERO_IMAGE = "https://images.unsplash.com/photo-1634326080825-985cfc816db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBwZW9wbGUlMjBkaXNjdXNzaW5nJTIwbW9kZXJuJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDEwMjMwMXww&ixlib=rb-4.1.0&q=80&w=1080";

export const HomePage = () => {
  const { setPage } = useRouter();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-[#FDFCF8] text-[#1A1A1A] w-full font-sans selection:bg-[#2E2E48] selection:text-white overflow-x-hidden">
      <WaitlistModal isOpen={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      
      {/* =========================================
          1. HERO SECTION
          ========================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with elegant fade */}
        <div className="absolute inset-0 z-0">
             <ImageWithFallback 
                src={HERO_IMAGE} 
                alt="Advisor Meeting" 
                className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8]/95 to-[#FDFCF8]/40"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20">
             
             {/* Left: Copy */}
             <div className="max-w-2xl">
                 <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-medium tracking-tight text-[#1A1A1A] leading-[1.05] mb-8"
                 >
                     Turn client conversations into relationship intelligence.
                 </motion.h1>
                 <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed max-w-lg"
                 >Mirra sits between advisor–client conversationsIt interprets tone, risk signals, and trust shifts,updates the client profile automatically,and guides advisors while the conversation is still live.</motion.p>
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-5"
                 >
                     <Button 
                        onClick={() => setPage('assessment')}
                        className="bg-[#2E2E48] hover:bg-[#1A1A1A] text-white h-14 px-8 text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg"
                     >View Sample Profile</Button>
                     <Button 
                        variant="ghost"
                        onClick={() => setIsWaitlistOpen(true)}
                        className="bg-transparent text-[#2E2E48] h-14 px-8 text-lg font-medium hover:bg-[#2E2E48]/5 rounded-lg border border-transparent hover:border-[#2E2E48]/10"
                     >Become a Design Partner</Button>
                 </motion.div>
             </div>

             {/* Right: UI Overlay Cards */}
             <div className="relative h-[600px] hidden lg:block perspective-1000">
                 {/* Card 1: In-Meeting Prompt */}
                 <motion.div 
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute top-20 right-0 w-[340px] bg-white/95 backdrop-blur-md rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/50 p-6 z-20 ring-1 ring-black/5"
                 >
                     <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                         <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Live Detection</span>
                     </div>
                     <div className="bg-[#FFF4F2] p-4 rounded-lg border border-[#FFE0DB] mb-2">
                         <div className="flex items-start gap-3">
                            <Zap className="w-4 h-4 text-rose-600 mt-1 shrink-0" />
                            <div>
                                <p className="text-sm font-serif font-bold text-rose-900 mb-1">Risk Anxiety Detected</p>
                                <p className="text-xs text-rose-800/80 leading-relaxed">Client mentioned "market crash" 3x. Recommendation: Shift to preservation narrative.</p>
                            </div>
                         </div>
                     </div>
                 </motion.div>

                 {/* Card 2: Client Profile Insight */}
                 <motion.div 
                    initial={{ opacity: 0, x: -30, y: 100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute top-[260px] left-8 w-[360px] bg-[#2E2E48] text-white rounded-xl shadow-[0_40px_80px_rgba(46,46,72,0.25)] border border-[#3E3E5E] p-7 z-30"
                 >
                     <div className="flex justify-between items-center mb-6">
                         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Profile Update</span>
                         <span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded-full border border-white/5">Just now</span>
                     </div>
                     <h3 className="font-serif text-2xl mb-1 text-white">The Maverick</h3>
                     <p className="text-sm text-white/50 mb-6 font-light">High impulse, low trust signals detected.</p>
                     
                     <div className="space-y-4">
                         <div className="flex justify-between text-xs items-end">
                             <span className="text-white/60">Risk Tolerance</span>
                             <span className="font-bold text-amber-400 text-sm">Aggressive</span>
                         </div>
                         <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                             <div className="w-[85%] bg-gradient-to-r from-amber-300 to-amber-500 h-full rounded-full"></div>
                         </div>
                     </div>
                 </motion.div>

                 {/* Card 3: Suggested Opening */}
                 <motion.div 
                    initial={{ opacity: 0, x: 40, y: 80 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute bottom-24 right-10 w-[320px] bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-6 z-10"
                 >
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E2E48]/60 mb-3">Suggested Opening</div>
                      <p className="font-serif text-[#1A1A1A] text-lg italic leading-relaxed">
                          "I know you value speed, but let's look at the data before we commit..."
                      </p>
                 </motion.div>
             </div>
        </div>
      </section>

      <TrustBar />

      {/* =========================================
          2. WHY THIS MATTERS (Logic + Visuals)
          ========================================= */}
      <section className="py-32 bg-[#1A1A2E] relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2E2E48] to-[#1A1A2E] opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="mb-16 max-w-5xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 block">Why This Matters</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Wealth management is a relationship business — <span className="text-gray-400">yet relationship intelligence is absent from the advisor workflow.</span>
            </h2>
          </div>

          {/* First Row: A + B */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-6xl mx-auto">
            
            {/* Card A: Today's Wealth Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#3A3A4E] to-[#2A2A3E] rounded-xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mb-8"
              >
                <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">Today's</h3>
                <h4 className="text-3xl md:text-4xl font-serif text-white mb-4">Wealth Stack</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  CRMs only store data.<br/>
                  Advisors operate on instinct.
                </p>
              </motion.div>
              
              <div className="space-y-4 mb-8">
                {/* ADVISOR & CLIENT - Horizontal Layout */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-2 bg-[#2E2E48]/30 px-3 py-3 rounded-lg border border-white/5 flex-1">
                    <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
                      <Users className="w-3 h-3 text-gray-400" />
                    </div>
                    <span className="text-xs text-gray-300">ADVISOR</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2E2E48]/30 px-3 py-3 rounded-lg border border-white/5 flex-1">
                    <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
                      <Users className="w-3 h-3 text-gray-400" />
                    </div>
                    <span className="text-xs text-gray-300">CLIENT</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex items-center gap-3 bg-[#2E2E48]/30 px-4 py-3 rounded-lg border border-white/5"
                >
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-300">CLIENT MEETING</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="flex justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="flex items-center gap-3 bg-[#2E2E48]/30 px-4 py-3 rounded-lg border border-white/5"
                >
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                    <Layout className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-300">NOTES & FOLLOW-UPS</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="flex justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="flex items-center gap-3 bg-[#2E2E48]/30 px-4 py-3 rounded-lg border border-white/5"
                >
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-300">CRM</span>
                </motion.div>
              </div>

              {/* Annotations on the right side */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.9, duration: 0.7 }}
                className="space-y-3 pl-4 border-l border-[#C9A880]/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">No Emotional Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9A880]"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">No Behavioral Signals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9A880]"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">No Real Time Updates</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.1, duration: 0.7 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <p className="text-sm text-gray-400 italic">Advisors rely on memory & instinct.</p>
              </motion.div>
            </motion.div>

            {/* Card B: The Signal Gap */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="bg-gradient-to-br from-[#3A3A4E] to-[#2A2A3E] rounded-xl p-8 border border-white/20 hover:border-[#C9A880]/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C9A880]/5 rounded-full blur-3xl"></div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mb-12 relative z-10"
              >
                <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">THE</h3>
                <h4 className="text-3xl md:text-4xl font-serif text-white mb-4">Signal Gap</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Behavioral shifts occur before capital moves.<br/>
                  No system detects them.
                </p>
              </motion.div>
              
              <div className="relative z-10 flex flex-col items-center py-4">
                {/* Roadmap visualization */}
                <div className="w-full max-w-md relative">
                  
                  {/* Vertical dotted center line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-600/40 -translate-x-1/2"></div>
                  
                  {/* SVG Curved Path */}
                  <motion.svg 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                    className="absolute left-1/2 top-0 w-64 h-full -translate-x-1/2 pointer-events-none" 
                    viewBox="0 0 200 400" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M 100 20 Q 140 80 100 140 Q 60 200 100 260 Q 140 320 100 380" 
                      stroke="url(#signalGradient)" 
                      strokeWidth="3" 
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="signalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="40%" stopColor="#D4A574" />
                        <stop offset="70%" stopColor="#A78BFA" />
                        <stop offset="100%" stopColor="#6B7280" />
                      </linearGradient>
                    </defs>
                  </motion.svg>

                  {/* Stage 1: CONVERSATION */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="relative mb-16 flex items-center"
                  >
                    <div className="w-1/2 text-right pr-8">
                      <span className="text-sm text-gray-300 uppercase tracking-[0.15em] font-medium">Conversation</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-blue-300 shadow-lg shadow-blue-500/50"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      {/* No dashing line */}
                    </div>
                  </motion.div>

                  {/* Stage 2: BEHAVIORAL SHIFT - The Gap (Center highlight) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 0.7 }}
                    className="relative mb-16 flex items-center"
                  >
                    <div className="w-1/2 text-right pr-8">
                      <div>
                        <span className="text-[#D4A574] uppercase tracking-[0.15em] font-bold text-sm block">Behavioral Shift</span>
                        <span className="text-gray-400 text-xs uppercase tracking-wider">Happens Here</span>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 z-20">
                      {/* Golden triangle with glow */}
                      <div className="relative">
                        {/* Glow layers */}
                        <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                          <div className="absolute inset-0 bg-[#D4A574]/30 rounded-full blur-xl"></div>
                          <div className="absolute inset-2 bg-[#C9A880]/40 rounded-full blur-lg"></div>
                        </div>
                        {/* Triangle */}
                        <div className="relative w-8 h-8 flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-[#D4A574] drop-shadow-[0_0_8px_rgba(212,165,116,0.6)]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-2 h-2 rounded-full bg-[#C9A880] animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="relative">
                        <p className="text-[10px] text-[#D4A574] mt-2 leading-relaxed">
                          The inflection point happens inside conversation, long before it shows up in portfolio movement.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Stage 3: CAPITAL MOVEMENT */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.7, duration: 0.6 }}
                    className="relative mb-16 flex items-center"
                  >
                    <div className="w-1/2 text-right pr-8">
                      <span className="text-sm text-gray-300 uppercase tracking-[0.15em] font-medium">Capital Movement</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-purple-400 border-2 border-purple-300 shadow-lg shadow-purple-500/50"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      {/* No dashing line */}
                    </div>
                  </motion.div>

                  {/* Stage 4: PORTFOLIO CHANGE */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.0, duration: 0.6 }}
                    className="relative flex items-center"
                  >
                    <div className="w-1/2 text-right pr-8">
                      <span className="text-sm text-gray-300 uppercase tracking-[0.15em] font-medium">Portfolio Change</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full bg-gray-400 border-2 border-gray-300"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      {/* No dashing line */}
                    </div>
                  </motion.div>

                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.3, duration: 0.7 }}
                className="mt-12 pt-8 border-t border-white/10 relative z-10"
              >
                <p className="text-base text-gray-300">No system captures <span className="text-[#D4A574] font-medium">this layer.</span></p>
              </motion.div>
            </motion.div>

          </div>

          {/* Transition Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-8 mt-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              The industry has systems for capital but none for understanding people. <br/>
              <span className="text-[#D4A574] font-medium">Introduce a behavioral intelligence layer.</span>
            </p>
          </motion.div>

          {/* Second Row: C */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#2E2E48] to-[#1A1A2E] rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="mb-8"
                >
                  <h3 className="text-xs font-bold tracking-[0.2em] text-indigo-300 uppercase mb-3">Introducing The</h3>
                  <h4 className="text-3xl md:text-4xl font-serif text-white mb-6">Behavioral Intelligence Layer</h4>
                  <p className="text-base text-indigo-200/80 leading-relaxed max-w-3xl">
                    Mirra sits between advisor–client conversations. It interprets tone, risk signals, and trust shifts, updates the client profile automatically, and guides advisors while the conversation is still live.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Flow diagram */}
                  <div className="space-y-4">
                    {/* ADVISOR & CLIENTS - Horizontal Layout */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-3 rounded-lg border border-white/10 flex-1">
                        <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                          <Users className="w-3 h-3 text-indigo-300" />
                        </div>
                        <span className="text-xs text-gray-300">ADVISOR</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-3 rounded-lg border border-white/10 flex-1">
                        <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                          <Users className="w-3 h-3 text-indigo-300" />
                        </div>
                        <span className="text-xs text-gray-300">CLIENTS</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="flex justify-center"
                    >
                      <ArrowRight className="w-4 h-4 text-indigo-400 rotate-90" />
                    </motion.div>
                    
                    {/* MIRRA Box */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0, duration: 0.7 }}
                      className="bg-indigo-600/30 border-2 border-indigo-500/50 rounded-xl p-6 backdrop-blur-sm shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Brain className="w-6 h-6 text-indigo-300" />
                        <h5 className="text-xl font-bold text-white tracking-wider">MIRRA</h5>
                      </div>
                      <p className="text-xs text-indigo-200 uppercase tracking-wider">Behavioral Signal Engine</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="flex justify-center"
                    >
                      <ArrowRight className="w-4 h-4 text-indigo-400 rotate-90" />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4, duration: 0.6 }}
                      className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10"
                    >
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-indigo-300" />
                      </div>
                      <span className="text-sm text-gray-300">CRM and PORTFOLIO SYSTEMS</span>
                    </motion.div>
                  </div>

                  {/* Right: Features */}
                  <div className="space-y-6 relative">
                    {/* Curly Brace Connector - SVG */}
                    <svg 
                      className="absolute -left-12 top-0 h-full w-12 pointer-events-none hidden md:block" 
                      viewBox="0 0 30 200" 
                      preserveAspectRatio="none"
                      style={{ height: '100%' }}
                    >
                      <path
                        d="M 28 0 Q 20 0 20 8 L 20 85 Q 20 95 10 95 Q 20 95 20 105 L 20 192 Q 20 200 28 200"
                        stroke="#818CF8"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.6"
                      />
                    </svg>

                    {/* Live Signal Detection */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.6, duration: 0.6 }}
                      className="bg-[#2A2A3E] rounded-lg p-5 border border-indigo-500/20"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Activity className="w-5 h-5 text-green-400" />
                        <h6 className="text-sm font-bold text-white uppercase tracking-wider">Live Signal Detection</h6>
                      </div>
                      <p className="text-xs text-indigo-200/70">Real-time emotional & behavioral tracking</p>
                    </motion.div>

                    {/* In-Meeting Guidance */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8, duration: 0.6 }}
                      className="bg-[#2A2A3E] rounded-lg p-5 border border-indigo-500/20"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <h6 className="text-sm font-bold text-white uppercase tracking-wider">In-Meeting Guidance</h6>
                      </div>
                      <p className="text-xs text-indigo-200/70">Prompts and suggestions while client is present</p>
                    </motion.div>

                    {/* Profile Updates */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 2.0, duration: 0.6 }}
                      className="bg-[#2A2A3E] rounded-lg p-5 border border-indigo-500/20"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        <h6 className="text-sm font-bold text-white uppercase tracking-wider">Profile Updates</h6>
                      </div>
                      <p className="text-xs text-indigo-200/70">Continuous client profiling based on conversations</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. PROBLEM STATEMENT
          ========================================= */}
      <section className="py-24 bg-[#F5F4F0] border-y border-gray-200">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase mb-8 block text-center md:text-left">The Problem</span>
                
                <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-8 leading-tight text-center md:text-left">
                     Client relationship signals live in conversations — <span className="text-gray-500">but today’s wealth workflow turns them into fragmented notes and static CRM fields.</span>
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-16 max-w-2xl text-center md:text-left">
                     Advisors are forced to rely on memory and instinct to detect shifts in trust, priorities, and risk posture.
                </p>

                {/* Problem Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#2E2E48]">
                            <Layout className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-[#1A1A1A] mb-3 text-sm uppercase tracking-wide">Fragmentation</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Fragmented meeting data across tools makes longitudinal client understanding nearly impossible.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#2E2E48]">
                            <Brain className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-[#1A1A1A] mb-3 text-sm uppercase tracking-wide">Signal Loss</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Emotional tone, hesitation, autonomy cues, and values rarely become usable data.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#2E2E48]">
                            <Users className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-[#1A1A1A] mb-3 text-sm uppercase tracking-wide">Inconsistent Service</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                             Insight capture depends on individual advisor skill instead of a standardized layer.
                        </p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* =========================================
          4. COMPARISON SECTION (Refined)
          ========================================= */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto text-center mb-16">
                   <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
                     Most AI tools automate workflows.<br/>
                     <span className="italic text-[#2E2E48] font-medium">Mirra </span> 
                     <span className="text-gray-400">supports advisors in moments that build trust.</span>
                   </h2>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                   {/* Traditional */}
                   <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200 flex flex-col">
                       <div className="flex items-center gap-3 mb-8">
                           <Mic className="w-6 h-6 text-gray-400" />
                           <h3 className="text-xl font-bold text-gray-400 uppercase tracking-wide">Generic AI Tools</h3>
                       </div>
                       <ul className="space-y-6 flex-grow">
                           <li className="flex gap-4 opacity-60">
                               <XCircle className="w-5 h-5 mt-1 shrink-0" />
                               <div>
                                   <strong className="block text-gray-900 text-sm">Passive Recording</strong>
                                   <span className="text-sm text-gray-600">Just a transcript. You still analyze manually.</span>
                               </div>
                           </li>
                           <li className="flex gap-4 opacity-60">
                               <XCircle className="w-5 h-5 mt-1 shrink-0" />
                               <div>
                                   <strong className="block text-gray-900 text-sm">Generic Summaries</strong>
                                   <span className="text-sm text-gray-600">Misses the nuance of "how" they felt.</span>
                               </div>
                           </li>
                           <li className="flex gap-4 opacity-60">
                               <XCircle className="w-5 h-5 mt-1 shrink-0" />
                               <div>
                                   <strong className="block text-gray-900 text-sm">Post-Mortem Only</strong>
                                   <span className="text-sm text-gray-600">Insights arrive too late to change the outcome.</span>
                               </div>
                           </li>
                       </ul>
                   </div>

                   {/* Mirra */}
                   <div className="bg-[#2E2E48] text-white rounded-2xl p-10 shadow-2xl relative overflow-hidden flex flex-col">
                       <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                       <div className="flex items-center gap-3 mb-8 relative z-10">
                           <Brain className="w-6 h-6 text-indigo-300" />
                           <h3 className="text-xl font-bold text-white uppercase tracking-wide">Mirra Relationship Intelligence</h3>
                       </div>
                       <ul className="space-y-6 flex-grow relative z-10">
                           <li className="flex gap-4">
                               <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                               <div>
                                   <strong className="block text-white text-sm">Active Intelligence</strong>
                                   <span className="text-sm text-indigo-200/80">Detects risks & opportunities in real-time.</span>
                               </div>
                           </li>
                           <li className="flex gap-4">
                               <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                               <div>
                                   <strong className="block text-white text-sm">Behavioral Decoding</strong>
                                   <span className="text-sm text-indigo-200/80">Analyzes hesitation, conviction, and emotion.</span>
                               </div>
                           </li>
                           <li className="flex gap-4">
                               <CheckCircle className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                               <div>
                                   <strong className="block text-white text-sm">In-Meeting Guidance</strong>
                                   <span className="text-sm text-indigo-200/80">Prompts you while the client is still in the room.</span>
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
          </div>
      </section>

      {/* =========================================
          5. MEASURABLE OUTCOMES
          ========================================= */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F9F9F7] border-t border-gray-100">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between max-w-7xl mx-auto mb-16 gap-6">
                  <div className="max-w-2xl">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#2E2E48] uppercase mb-4 block">
                        Measurable Outcomes
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
                        Where trust turns into <br/>measurable outcomes.
                    </h2>
                  </div>
                  <div className="text-right pb-2">
                       <p className="text-xs text-gray-400 italic bg-white px-3 py-1 rounded-full border border-gray-100 inline-block">
                           *Early targets based on pilot design assumptions
                       </p>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden max-w-7xl mx-auto shadow-sm">
                  {/* Card 1 */}
                  <div className="bg-white p-10 flex flex-col h-64 justify-between group hover:bg-[#FDFCF8] transition-colors">
                      <div className="flex justify-between items-start">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Conversion</span>
                          <Activity className="w-4 h-4 text-gray-300 group-hover:text-[#2E2E48] transition-colors" />
                      </div>
                      <div>
                          <div className="text-5xl font-serif text-[#2E2E48] mb-2 group-hover:scale-105 transition-transform origin-left duration-300">30%</div>
                          <div className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Higher Conversion</div>
                          <p className="text-xs text-gray-500">From first call to booked next step.</p>
                      </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-10 flex flex-col h-64 justify-between group hover:bg-[#FDFCF8] transition-colors">
                      <div className="flex justify-between items-start">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Efficiency</span>
                          <Clock className="w-4 h-4 text-gray-300 group-hover:text-[#2E2E48] transition-colors" />
                      </div>
                      <div>
                          <div className="text-5xl font-serif text-[#2E2E48] mb-2 group-hover:scale-105 transition-transform origin-left duration-300">10<span className="text-2xl ml-1">hrs</span></div>
                          <div className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Saved Per Week</div>
                          <p className="text-xs text-gray-500">Per advisor, on prep + follow-up time.</p>
                      </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-10 flex flex-col h-64 justify-between group hover:bg-[#FDFCF8] transition-colors">
                      <div className="flex justify-between items-start">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Growth</span>
                          <BarChart3 className="w-4 h-4 text-gray-300 group-hover:text-[#2E2E48] transition-colors" />
                      </div>
                      <div>
                          <div className="text-5xl font-serif text-[#2E2E48] mb-2 group-hover:scale-105 transition-transform origin-left duration-300">2x</div>
                          <div className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Increase in Referrals</div>
                          <p className="text-xs text-gray-500">Accelerated consolidation of outside assets.</p>
                      </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white p-10 flex flex-col h-64 justify-between group hover:bg-[#FDFCF8] transition-colors">
                      <div className="flex justify-between items-start">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Retention</span>
                          <Lock className="w-4 h-4 text-gray-300 group-hover:text-[#2E2E48] transition-colors" />
                      </div>
                      <div>
                          <div className="text-5xl font-serif text-[#2E2E48] mb-2 group-hover:scale-105 transition-transform origin-left duration-300">{">"}90%</div>
                          <div className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Client Retention</div>
                          <p className="text-xs text-gray-500">Through deep behavioral understanding.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <FooterCTA />
    </div>
  );
};