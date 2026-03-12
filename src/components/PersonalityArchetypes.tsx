import React from 'react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

const archetypes = [
    {
        name: "The Guardian",
        desc: "Prioritizes capital preservation and family security. Skeptical of volatility.",
        color: "#10B981", // Emerald
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
        desc: "Seeks alpha and novel opportunities. prone to recency bias.",
        color: "#F59E0B", // Amber
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
        color: "#6366F1", // Indigo
        data: [
            { subject: 'Risk', A: 60, fullMark: 100 },
            { subject: 'Trust', A: 30, fullMark: 100 },
            { subject: 'Control', A: 80, fullMark: 100 },
            { subject: 'Legacy', A: 70, fullMark: 100 },
            { subject: 'Impulse', A: 20, fullMark: 100 },
        ]
    }
];

export const PersonalityArchetypes = () => {
    return (
        <section className="py-24 bg-white" id="science">
            <div className="container mx-auto px-6 md:px-12">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase mb-4 block">The Engine</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Beyond Risk Questionnaires.</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Mirra classifies clients into 8 proprietary archetypes rooted in behavioral psychology, 
                        giving you a blueprint for how to communicate.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {archetypes.map((type, idx) => (
                        <motion.div 
                            key={type.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#2E2E48]/10 transition-all duration-300 relative group"
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
                                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 bg-white px-2 py-1 rounded border border-gray-100">
                                    Archetype {idx + 1} of 8
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                     <p className="text-sm text-gray-500 italic">
                         "It's like Myers-Briggs for money." — Senior Advisor, Morgan Stanley
                     </p>
                </div>

            </div>
        </section>
    );
};