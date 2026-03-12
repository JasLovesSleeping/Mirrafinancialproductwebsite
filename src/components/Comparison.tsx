import React, { useState, useRef, useEffect } from 'react';
import { ArrowRightLeft, MoveHorizontal, Check, X, AlertTriangle, FileText, Brain, Shield, Zap } from 'lucide-react';

export const Comparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
        clientX = e.touches[0].clientX;
    } else {
        clientX = (e as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - containerRect.left, containerRect.width));
    const percentage = (x / containerRect.width) * 100;
    
    setSliderPosition(percentage);
  };

  // Add global event listeners for drag end
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
        window.removeEventListener('mouseup', handleGlobalMouseUp);
        window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  const features = [
      {
          name: "Core Focus",
          mirra: "Wealth Management Logic",
          generic: "General Transcription",
          legacy: "Data Entry"
      },
      {
          name: "Behavioral Analysis",
          mirra: "Psychological Profiling",
          generic: "Keyword Sentiment",
          legacy: "None"
      },
      {
          name: "Output Format",
          mirra: "Actionable Playbook",
          generic: "Raw Text / Summary",
          legacy: "Static Fields"
      },
      {
          name: "Compliance",
          mirra: "Audit-Ready Logs",
          generic: "Basic Encryption",
          legacy: "Manual Input"
      },
      {
          name: "Client Experience",
          mirra: "Editorial-Grade Briefs",
          generic: "Robotic Summaries",
          legacy: "N/A (Internal Only)"
      }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-4">From noise to signal in 60 seconds.</h2>
            <p className="text-gray-500">Drag the slider to see the difference.</p>
        </div>

        <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto h-[500px] rounded-xl border border-gray-200 shadow-2xl overflow-hidden cursor-ew-resize select-none mb-32"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
        >
            {/* RIGHT SIDE (MIRRA) - BACKGROUND LAYER */}
            <div className="absolute inset-0 bg-[#2E2E48] p-8 md:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                     <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-green-500/30">
                        <Brain className="w-3 h-3" /> Mirra Intelligence
                     </div>
                     <span className="text-white/40 font-mono text-xs">Processed in 1.2s</span>
                </div>

                <div className="grid gap-4">
                    {/* Insight Card */}
                    <div className="bg-white/10 border border-white/10 rounded-lg p-5 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-white font-bold flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-400" />
                                High Risk Detected: Loss Aversion
                            </h4>
                            <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Action Required</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">Client used "worry" and "safe" 5x. Do not pitch growth today.</p>
                        <div className="bg-white/5 rounded p-3 text-xs text-green-300 font-mono border-l-2 border-green-400">
                            "Focus conversation on downside protection strategies."
                        </div>
                    </div>

                    {/* Deliverables */}
                    <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <FileText className="w-4 h-4 text-indigo-300 mb-2" />
                            <div className="text-white font-bold text-sm">Meeting Brief</div>
                            <div className="text-gray-400 text-xs">Generated</div>
                         </div>
                         <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <FileText className="w-4 h-4 text-indigo-300 mb-2" />
                            <div className="text-white font-bold text-sm">Follow-up Email</div>
                            <div className="text-gray-400 text-xs">Ready to send</div>
                         </div>
                    </div>
                </div>
            </div>

            {/* LEFT SIDE (GENERIC) - CLIPPED LAYER */}
            <div 
                className="absolute inset-0 bg-[#F9F9FB] p-8 md:p-12 flex flex-col border-r border-gray-300"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <div className="flex justify-between items-start mb-8">
                     <div className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-gray-300">
                        <FileText className="w-3 h-3" /> Raw Transcript
                     </div>
                     <span className="text-gray-400 font-mono text-xs">Unstructured Data</span>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex-1 font-mono text-xs text-gray-500 leading-relaxed overflow-hidden relative">
                    <p className="mb-4"><strong className="text-gray-800">Client:</strong> I don't know... I'm just really worried about the market right now. My neighbor lost a lot in tech stocks, and I don't want to be in that position.</p>
                    <p className="mb-4"><strong className="text-gray-800">Advisor:</strong> I understand.</p>
                    <p className="mb-4"><strong className="text-gray-800">Client:</strong> I'm thinking maybe we should sell everything and just wait it out. I know you said we have a plan, but 2008 was scary. I need to make sure my kids are okay.</p>
                    <p className="mb-4"><strong className="text-gray-800">Advisor:</strong> Let's look at the data...</p>
                    <p className="mb-4"><strong className="text-gray-800">Client:</strong> I don't care about the data right now, I just want to feel safe.</p>
                    
                    {/* Fade out at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
                </div>
            </div>

            {/* SLIDER HANDLE */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                    <MoveHorizontal className="w-4 h-4 text-[#2E2E48]" />
                </div>
            </div>
        </div>

        {/* COMPETITOR TABLE */}
        <div className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
                 <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">Why Top Firms Choose Mirra</h3>
                 <p className="text-gray-500">Built specifically for the nuance of high-net-worth conversations.</p>
             </div>

             <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                 <table className="w-full text-sm text-left">
                     <thead>
                         <tr className="bg-gray-50 border-b border-gray-200">
                             <th className="py-4 px-6 font-bold text-gray-500 uppercase tracking-wider text-xs w-1/4">Feature</th>
                             <th className="py-4 px-6 font-bold text-[#2E2E48] text-base w-1/4 bg-white border-x border-[#2E2E48]/10 relative">
                                 <div className="absolute top-0 left-0 w-full h-1 bg-[#2E2E48]"></div>
                                 Mirra
                             </th>
                             <th className="py-4 px-6 font-bold text-gray-400 text-xs uppercase tracking-wider w-1/4">Generic AI</th>
                             <th className="py-4 px-6 font-bold text-gray-400 text-xs uppercase tracking-wider w-1/4">Legacy CRM</th>
                         </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                         {features.map((feature, i) => (
                             <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-gray-900">{feature.name}</td>
                                 <td className="py-4 px-6 font-bold text-[#2E2E48] bg-[#2E2E48]/5 border-x border-[#2E2E48]/10">
                                     <div className="flex items-center gap-2">
                                         <Check className="w-4 h-4 text-green-600" />
                                         {feature.mirra}
                                     </div>
                                 </td>
                                 <td className="py-4 px-6 text-gray-500">{feature.generic}</td>
                                 <td className="py-4 px-6 text-gray-400 italic">{feature.legacy}</td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
        </div>
      </div>
    </section>
  );
};
