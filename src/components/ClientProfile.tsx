import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, MessageCircle, Target, Clock, Zap, Users, Copy, Download, UploadCloud } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from "sonner@2.0.3";

const tabs = ["Overview", "Risk Profile", "Life Events", "Communication Guide"];

export const ClientProfile = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const handleAction = (action: string) => {
        toast.success(`${action} successful`);
    };

    return (
        <section className="py-24 bg-white" id="client-profile">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase mb-4 block">The Result</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A]">One profile. Infinite clarity.</h2>
                    <p className="text-lg text-gray-600 mt-4">All behavioral data synthesized into a single, actionable dashboard.</p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#2E2E48] p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-2xl font-serif">
                                JD
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold">John Doe</h3>
                                <p className="text-white/60 text-sm mt-1">Client since 2018 • Last meeting: 2 days ago</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                           <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                               <span className="block text-[10px] uppercase font-bold text-white/60">Archetype</span>
                               <span className="font-bold text-emerald-400">The Guardian</span>
                           </div>
                           <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                               <span className="block text-[10px] uppercase font-bold text-white/60">Trust Score</span>
                               <span className="font-bold text-amber-400">82/100</span>
                           </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-gray-100 px-8 flex gap-8 overflow-x-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                                    activeTab === tab 
                                    ? 'border-[#2E2E48] text-[#2E2E48]' 
                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content Body */}
                    <div className="p-8 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeTab === "Overview" && (
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="flex items-center gap-2 font-bold text-[#1A1A1A] mb-4">
                                                    <Brain className="w-5 h-5 text-[#2E2E48]" />
                                                    Psychometric Summary
                                                </h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">
                                                    John is primarily motivated by <span className="font-bold text-[#2E2E48]">security and stability</span>. 
                                                    He reacts negatively to sales pressure but responds well to data-backed verification. 
                                                    Recent signals indicate anxiety regarding market volatility impacting his retirement timeline.
                                                </p>
                                            </div>
                                            
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                                <h4 className="flex items-center gap-2 font-bold text-orange-800 mb-2 text-xs uppercase tracking-wide">
                                                    <Zap className="w-4 h-4" />
                                                    Current Attention Hook
                                                </h4>
                                                <p className="text-orange-900 text-sm font-medium">
                                                    "How does the current inflation rate affect my daughter's tuition fund?"
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Key Behavioral Drivers</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span className="font-medium">Risk Tolerance</span>
                                                            <span className="text-gray-500">Low</span>
                                                        </div>
                                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                            <div className="h-full bg-emerald-500 w-[30%]"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span className="font-medium">Decision Speed</span>
                                                            <span className="text-gray-500">Deliberate</span>
                                                        </div>
                                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                            <div className="h-full bg-indigo-500 w-[20%]"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span className="font-medium">Detail Orientation</span>
                                                            <span className="text-gray-500">High</span>
                                                        </div>
                                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                            <div className="h-full bg-amber-500 w-[85%]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === "Risk Profile" && (
                                    <div className="text-center py-12 text-gray-500">
                                        <Target className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                        <p>Risk Profile Visualizations</p>
                                    </div>
                                )}
                                
                                {activeTab === "Life Events" && (
                                    <div className="text-center py-12 text-gray-500">
                                        <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                        <p>Timeline of identified life events</p>
                                    </div>
                                )}
                                
                                {activeTab === "Communication Guide" && (
                                    <div className="text-center py-12 text-gray-500">
                                        <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                        <p>Tailored scripts and email templates</p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Footer Actions (REMOVED as requested) */}
                </div>
            </div>
        </section>
    );
};