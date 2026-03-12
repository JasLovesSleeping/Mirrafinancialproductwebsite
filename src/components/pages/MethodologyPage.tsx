import React, { useState } from 'react';
import { ArrowLeft, Brain, Shield, Star, Target, TrendingUp, Feather, MessageCircle, Zap, Check, ArrowRight, Lock, Info, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../Router';
import { motion, AnimatePresence } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { WaitlistModal } from '../WaitlistModal';

// Archetypes Data
const archetypes = [
    {
        name: "The Guardian",
        desc: "Prioritizes capital preservation and family security. Skeptical of volatility.",
        color: "#10B981", 
        data: [
            { subject: 'Risk', A: 20, fullMark: 100 },
            { subject: 'Trust', A: 40, fullMark: 100 },
            { subject: 'Control', A: 90, fullMark: 100 },
            { subject: 'Legacy', A: 100, fullMark: 100 },
            { subject: 'Impulse', A: 10, fullMark: 100 },
        ]
    },
    {
        name: "The Maverick",
        desc: "Seeks alpha and novel opportunities. Prone to recency bias.",
        color: "#F59E0B",
        data: [
            { subject: 'Risk', A: 95, fullMark: 100 },
            { subject: 'Trust', A: 60, fullMark: 100 },
            { subject: 'Control', A: 70, fullMark: 100 },
            { subject: 'Legacy', A: 30, fullMark: 100 },
            { subject: 'Impulse', A: 85, fullMark: 100 },
        ]
    },
    {
        name: "The Architect",
        desc: "Analytical and process-driven. Needs data to bridge the trust gap.",
        color: "#6366F1", 
        data: [
            { subject: 'Risk', A: 60, fullMark: 100 },
            { subject: 'Trust', A: 30, fullMark: 100 },
            { subject: 'Control', A: 80, fullMark: 100 },
            { subject: 'Legacy', A: 70, fullMark: 100 },
            { subject: 'Impulse', A: 20, fullMark: 100 },
        ]
    }
];

export const MethodologyPage = () => {
  const { setPage } = useRouter();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
      <WaitlistModal isOpen={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <Button 
            variant="ghost" 
            onClick={() => setPage('product')} 
            className="mb-8 pl-0 hover:bg-transparent text-[#2E2E48] hover:text-[#1A1A1A]"
        >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Product
        </Button>

        {/* M1: Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-8 bg-[#2E2E48]"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
                        METHODOLOGY
                    </span>
                </div>
                <h1 className="text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
                    Behavioral signals that shape financial decisions.
                </h1>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                    Mirra translates decision pace, risk language, cognitive bias cues, and trust triggers into advisor-ready guidance.
                </p>
                <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg flex gap-3 items-start">
                    <Lock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-orange-800 leading-relaxed">
                        <span className="font-bold">Not financial advice.</span> Mirra analyzes communication patterns, not market data. Advisors remain the decision-makers.
                    </p>
                </div>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                 {/* Abstract visual of signals */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#2E2E48] to-indigo-900 opacity-10"></div>
                 <div className="grid grid-cols-2 gap-4 p-8">
                     <div className="bg-white p-4 rounded shadow-lg animate-pulse">
                         <div className="w-8 h-8 bg-indigo-100 rounded-full mb-2"></div>
                         <div className="h-2 bg-gray-200 rounded w-16"></div>
                     </div>
                     <div className="bg-white p-4 rounded shadow-lg mt-8">
                         <div className="w-8 h-8 bg-amber-100 rounded-full mb-2"></div>
                         <div className="h-2 bg-gray-200 rounded w-16"></div>
                     </div>
                     <div className="bg-white p-4 rounded shadow-lg -mt-8">
                         <div className="w-8 h-8 bg-red-100 rounded-full mb-2"></div>
                         <div className="h-2 bg-gray-200 rounded w-16"></div>
                     </div>
                     <div className="bg-white p-4 rounded shadow-lg">
                         <div className="w-8 h-8 bg-emerald-100 rounded-full mb-2"></div>
                         <div className="h-2 bg-gray-200 rounded w-16"></div>
                     </div>
                 </div>
            </div>
        </div>

        {/* M2: 4 Dimensions */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-12 text-center">The 4 Behavioral Dimensions</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2E2E48] transition-colors group">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Decision Pace</h3>
                    <p className="text-gray-600 mb-4 text-sm">How quickly they move from information to action.</p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-100 italic text-sm text-gray-500 group-hover:bg-[#2E2E48]/5 group-hover:text-[#2E2E48]">
                        "I need to sleep on this for a week" vs "Let's do it now."
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2E2E48] transition-colors group">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Risk Language</h3>
                    <p className="text-gray-600 mb-4 text-sm">The emotional words they use to describe loss/uncertainty.</p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-100 italic text-sm text-gray-500 group-hover:bg-[#2E2E48]/5 group-hover:text-[#2E2E48]">
                        "Terrified of a crash" vs "Opportunity to buy low."
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2E2E48] transition-colors group">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Cognitive Bias Cues</h3>
                    <p className="text-gray-600 mb-4 text-sm">Markers of recency bias, anchoring, or overconfidence.</p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-100 italic text-sm text-gray-500 group-hover:bg-[#2E2E48]/5 group-hover:text-[#2E2E48]">
                        "My neighbor made 20% last month" (FOMO/Herding).
                    </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2E2E48] transition-colors group">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Trust Triggers</h3>
                    <p className="text-gray-600 mb-4 text-sm">Do they buy with logic (data) or emotion (relationship)?</p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-100 italic text-sm text-gray-500 group-hover:bg-[#2E2E48]/5 group-hover:text-[#2E2E48]">
                        "Show me the spreadsheet" vs "I trust your judgment."
                    </div>
                </div>
            </div>
        </div>

        {/* M3: Meet the Archetypes */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase mb-4 block">The Science Behind</span>
                <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Meet the Archetypes</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Mirra classifies clients into proprietary behavioral profiles, giving you a blueprint for how to communicate.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {archetypes.map((type, idx) => (
                    <motion.div 
                        key={type.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#2E2E48]/10 transition-all duration-300 relative group"
                    >
                        <div className="absolute top-4 right-4">
                            <Info className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <h3 className="text-xl font-bold font-serif text-[#1A1A1A] mb-2">{type.name}</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10">{type.desc}</p>

                        {/* Radar Chart */}
                        <div className="h-[200px] w-full relative" style={{ minHeight: '200px' }}>
                            <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={100}>
                                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={type.data}>
                                    <PolarGrid stroke="#E5E7EB" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                                    <Radar
                                        name={type.name}
                                        dataKey="A"
                                        stroke={type.color}
                                        fill={type.color}
                                        fillOpacity={0.3}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-6 flex items-center justify-center">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                                Behavioral Blueprint
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* M4: Life Cycle Intelligence (Visual Map) - Removed */}
        
        {/* M5: How signals become guidance (Process) */}
        <div className="py-24 mb-24 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent -z-10"></div>

            <div className="text-center mb-16">
                 <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase mb-4 block">The Process</span>
                 <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">From signals to guidance.</h2>
                 <p className="text-lg text-gray-600">Transparent by design. No black boxes.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 items-stretch max-w-5xl mx-auto">
                 {/* Step 1 */}
                 <div className="relative group">
                     <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center z-10 relative">
                         <div className="w-12 h-12 bg-indigo-50 text-indigo-900 rounded-full flex items-center justify-center mb-4 font-bold text-lg">1</div>
                         <h3 className="font-bold text-[#1A1A1A] mb-2">Input</h3>
                         <p className="text-sm text-gray-500">Unstructured client data (transcripts, emails).</p>
                     </div>
                     <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 -z-0"></div>
                 </div>

                 {/* Step 2 */}
                 <div className="relative group">
                     <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center z-10 relative">
                        <div className="w-12 h-12 bg-amber-50 text-amber-800 rounded-full flex items-center justify-center mb-4 font-bold text-lg">2</div>
                         <h3 className="font-bold text-[#1A1A1A] mb-2">Analysis</h3>
                         <p className="text-sm text-gray-500">Behavioral dimensions & psychological markers.</p>
                     </div>
                     <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 -z-0"></div>
                 </div>

                 {/* Step 3 */}
                 <div className="relative group">
                     <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center z-10 relative">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mb-4 font-bold text-lg">3</div>
                         <h3 className="font-bold text-[#1A1A1A] mb-2">Context</h3>
                         <p className="text-sm text-gray-500">Life stage mapping & archetype weighting.</p>
                     </div>
                     <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 -z-0"></div>
                 </div>

                 {/* Step 4 */}
                 <div className="relative group">
                     <div className="bg-[#2E2E48] p-8 rounded-2xl border border-[#2E2E48] shadow-2xl h-full flex flex-col items-center text-center z-10 relative transform md:scale-105">
                         <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg border border-white/20">4</div>
                         <h3 className="font-bold text-white mb-2">Guidance</h3>
                         <p className="text-sm text-white/70">Advisor-ready scripts & next-best actions.</p>
                     </div>
                 </div>
            </div>
            
            {/* Features List */}
            <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
                 <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-5 h-5 text-green-600" />
                     </div>
                     <h4 className="font-bold text-[#1A1A1A] mb-2">Evidence-Backed</h4>
                     <p className="text-xs text-gray-500 leading-relaxed">Every insight is hyperlinked to a specific moment in the client transcript.</p>
                 </div>

                 <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                     <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-5 h-5 text-indigo-600" />
                     </div>
                     <h4 className="font-bold text-[#1A1A1A] mb-2">Advisor Verified</h4>
                     <p className="text-xs text-gray-500 leading-relaxed">Human-in-the-loop design. You approve every output before it's final.</p>
                 </div>

                 <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                     <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-5 h-5 text-amber-600" />
                     </div>
                     <h4 className="font-bold text-[#1A1A1A] mb-2">Audit-Friendly</h4>
                     <p className="text-xs text-gray-500 leading-relaxed">Full historical log of why a recommendation was made for compliance.</p>
                 </div>
            </div>
        </div>

        {/* M6: CTA */}
        <div className="bg-[#2E2E48] text-white p-12 text-center rounded-xl">
            <h3 className="text-3xl font-serif mb-6">See it in action.</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={() => setPage('assessment')} className="bg-white text-[#2E2E48] hover:bg-gray-100 h-12 px-8 font-bold">
                    View Example Assessment
                </Button>
                <Button 
                    variant="ghost" 
                    onClick={() => setIsWaitlistOpen(true)}
                    className="bg-transparent text-white hover:bg-white/10 h-12 px-8 font-bold"
                >
                    Join Waitlist
                </Button>
            </div>
        </div>

      </div>
    </div>
  );
};