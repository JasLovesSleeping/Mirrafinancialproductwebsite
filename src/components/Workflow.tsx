import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, MessageSquare, Mail, AlertCircle, Sparkles } from 'lucide-react';

const steps = [
    {
        id: 'pre',
        title: "Know before you meet",
        desc: "AI scans recent life events, market conditions, and past notes to generate a one-page brief. Walk in knowing exactly what's on their mind.",
        icon: FileText,
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        id: 'in',
        title: "Live Emotional Radar",
        desc: "Mirra listens in real-time. If a client expresses hesitation or anxiety, you get an instant discrete prompt with the best behavioral response.",
        icon: MessageSquare,
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        id: 'post',
        title: "Instant Follow-up",
        desc: "Don't spend hours on notes. Mirra drafts a client-ready email summarizing key decisions and next steps before the Zoom call even ends.",
        icon: Mail,
        color: "bg-amber-50 text-amber-600"
    }
];

export const Workflow = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 bg-[#FDFCF8] relative" id="workflow">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                     <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase mb-4 block">The Workflow</span>
                     <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A]">From prep to follow-up.<br/>In one continuous flow.</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
                    
                    {/* Left: Scrollable Text */}
                    <div className="relative z-10 space-y-[40vh] pb-[10vh]"> 
                        {steps.map((step, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0.3, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-45% 0px -45% 0px" }}
                                onViewportEnter={() => setActiveStep(idx)}
                                className="min-h-[40vh] flex flex-col justify-center"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${step.color} shadow-sm border border-white/50`}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-md">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Sticky Preview */}
                    <div className="hidden lg:block sticky top-[calc(50vh-250px)] h-[500px] w-full bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-2">
                         {/* Noise Texture */}
                         <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
                         
                         <div className="w-full h-full bg-gray-50/50 rounded-xl overflow-hidden relative border border-gray-100">
                             <AnimatePresence mode="wait">
                                 {activeStep === 0 && <PreMeetingPreview key="pre" />}
                                 {activeStep === 1 && <InMeetingPreview key="in" />}
                                 {activeStep === 2 && <PostMeetingPreview key="post" />}
                             </AnimatePresence>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// -- Preview Components --

const PreMeetingPreview = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full p-8 flex flex-col"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">JD</div>
            <div>
                <div className="font-bold text-[#1A1A1A]">Pre-Meeting Brief: John Doe</div>
                <div className="text-xs text-gray-500">Generated 5 mins ago</div>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-4 flex-1">
             <div className="flex items-center gap-2 mb-2">
                 <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded uppercase">Icebreaker</span>
             </div>
             <p className="text-sm text-gray-600">"Ask about his daughter's graduation from Yale last week. (Linked to Life Event: Education)"</p>
             
             <div className="h-px bg-gray-100 my-4"></div>
             
             <div className="flex items-center gap-2 mb-2">
                 <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-1 rounded uppercase">Key Objection Risk</span>
             </div>
             <p className="text-sm text-gray-600">"Market volatility concerns. Be prepared to show the 'Safe Harbor' analysis chart."</p>

             <div className="h-24 bg-gray-50 rounded mt-4 border border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-xs">
                 Portfolio Variance Chart
             </div>
        </div>
    </motion.div>
);

const InMeetingPreview = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full bg-[#2E2E48] relative overflow-hidden flex flex-col"
    >
        {/* Mock Zoom Interface */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
             <div className="bg-gray-800 rounded relative">
                 <div className="absolute bottom-2 left-2 text-white text-[10px] bg-black/50 px-1 rounded">John Doe (Client)</div>
             </div>
             <div className="bg-gray-700 rounded relative">
                 <div className="absolute bottom-2 left-2 text-white text-[10px] bg-black/50 px-1 rounded">You (Advisor)</div>
             </div>
        </div>
        
        {/* Live Transcript / Detection */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-black/80 backdrop-blur-md rounded-lg border border-white/10 p-3 shadow-2xl">
             <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 animate-pulse">
                     <AlertCircle className="w-4 h-4 text-red-400" />
                 </div>
                 <div>
                     <div className="text-[10px] font-bold text-red-400 uppercase mb-1 flex items-center gap-1">
                        Signal Detected: Hesitation
                     </div>
                     <p className="text-xs text-white/90 leading-relaxed">
                         Client is stalling on the fee structure.
                     </p>
                 </div>
             </div>
        </div>

        {/* Animated Pop-up Suggestion */}
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="absolute top-20 right-4 w-64 bg-white/95 backdrop-blur rounded-lg shadow-2xl p-4 border-l-4 border-indigo-500"
        >
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-indigo-900 uppercase">Mirra Guidance</span>
            </div>
            <p className="text-xs text-gray-700 italic">"Don't justify the fee yet. Ask: 'What value is most important to you in this relationship?'"</p>
        </motion.div>
    </motion.div>
);

const PostMeetingPreview = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full p-8 flex flex-col"
    >
        <div className="bg-white rounded shadow-lg border border-gray-100 overflow-hidden flex-1 flex flex-col">
             <div className="bg-gray-50 border-b border-gray-100 p-3 flex items-center justify-between">
                 <div className="text-xs font-bold text-gray-500">Draft: Post-Meeting Recap</div>
                 <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-400"></div>
                     <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                     <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 </div>
             </div>
             <div className="p-6 space-y-4 font-serif text-sm text-gray-700">
                 <p>Hi John,</p>
                 <p>Great connecting today. Based on our discussion about <span className="bg-indigo-50 text-indigo-700 px-1 rounded">liquidity needs</span> and <span className="bg-indigo-50 text-indigo-700 px-1 rounded">legacy planning</span>, here is what we agreed on:</p>
                 <ul className="list-disc pl-5 space-y-2">
                     <li>Review the trust structure by Friday.</li>
                     <li>Hold off on equity changes until Q3.</li>
                 </ul>
                 <p>I've attached the updated IPS for your review.</p>
                 <br/>
                 <div className="inline-block px-4 py-2 bg-[#2E2E48] text-white text-xs font-sans font-bold rounded">Send Now</div>
             </div>
        </div>
    </motion.div>
);