import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from './ui/badge';

export const Solution = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#0A0A0C]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 text-purple-400 border-purple-500/30 bg-purple-500/10">The Workflow</Badge>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            A complete client insight loop — <br/> before, during, and after every meeting.
          </h2>
        </div>

        <div className="space-y-24">
          {/* Module A */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10 w-full max-w-sm bg-[#16161a] rounded-xl border border-white/10 p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                           <span className="text-xs font-mono text-gray-500 uppercase">Archetype Snapshot</span>
                           <span className="text-purple-400 text-sm font-bold">The Validator</span>
                        </div>
                        <div className="space-y-3">
                           <div className="flex justify-between text-sm">
                               <span className="text-gray-400">Decision Speed</span>
                               <div className="w-24 h-2 bg-white/10 rounded-full mt-1.5"><div className="w-[70%] h-full bg-purple-500 rounded-full"></div></div>
                           </div>
                           <div className="flex justify-between text-sm">
                               <span className="text-gray-400">Risk Tolerance</span>
                               <div className="w-24 h-2 bg-white/10 rounded-full mt-1.5"><div className="w-[40%] h-full bg-yellow-500 rounded-full"></div></div>
                           </div>
                           <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 mt-4">
                               <p className="text-xs text-purple-200"><strong>Tip:</strong> Present data first, then ask for their interpretation.</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <div className="text-purple-500 font-mono text-sm mb-2">01 — Before</div>
                <h3 className="text-2xl font-bold text-white mb-4">Know how to talk to the client before you speak.</h3>
                <p className="text-gray-400 mb-6 text-lg">Mirra turns a short assessment into actionable insights: what motivates the client, how they perceive risk, and how to build trust faster.</p>
                <ul className="space-y-3">
                    {["Archetype snapshot + dimension scores", "Communication do’s & don’ts", "What to clarify first (questions to ask)"].map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-300 text-sm">
                            <Check className="w-5 h-5 text-purple-500 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* Module B */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-1">
                <div className="text-purple-500 font-mono text-sm mb-2">02 — During</div>
                <h3 className="text-2xl font-bold text-white mb-4">Capture what matters while you stay present.</h3>
                <p className="text-gray-400 mb-6 text-lg">Mirra highlights decision signals in real time: priorities, objections, emotions, and risk language — without interrupting your flow.</p>
                <ul className="space-y-3">
                    {["Key moments + tags (goals, concerns, tradeoffs)", "“Next best prompt” suggestions", "Advisor remains the decision maker"].map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-300 text-sm">
                            <Check className="w-5 h-5 text-purple-500 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="order-2 relative">
                <div className="aspect-[4/3] bg-gradient-to-bl from-indigo-900/10 to-transparent rounded-2xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                     <div className="relative z-10 w-full max-w-sm bg-[#16161a] rounded-xl border border-white/10 p-6 shadow-2xl">
                         <div className="flex gap-2 mb-4">
                             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mt-1.5"></span>
                             <p className="text-sm text-white">"I'm worried about inflation eating into our retirement... keeping cash feels safer right now."</p>
                         </div>
                         <div className="flex gap-2 mb-4">
                            <span className="bg-orange-500/20 text-orange-300 text-[10px] px-2 py-1 rounded border border-orange-500/30">Fear: Loss of Power</span>
                            <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-1 rounded border border-blue-500/30">Topic: Cash Drag</span>
                         </div>
                         <div className="bg-white/5 p-3 rounded border border-white/5">
                            <p className="text-xs text-gray-400 uppercase mb-1">Suggested Response</p>
                            <p className="text-sm text-gray-200">"It sounds like maintaining control is key for you. What if we kept X amount liquid to ensure..."</p>
                         </div>
                     </div>
                </div>
            </div>
          </div>

          {/* Module C */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/3] bg-gradient-to-tr from-purple-900/10 to-transparent rounded-2xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden text-slate-900">
                       <div className="h-1 bg-purple-600 w-full"></div>
                       <div className="p-6">
                           <h4 className="font-bold text-lg mb-1">Meeting Summary</h4>
                           <p className="text-xs text-slate-500 mb-4">Prepared for: John & Jane Doe • Oct 12, 2024</p>
                           
                           <div className="space-y-4">
                               <div className="p-3 bg-slate-50 rounded border border-slate-100">
                                   <p className="font-semibold text-xs text-slate-700 uppercase mb-1">Key Insight</p>
                                   <p className="text-sm text-slate-600">Clients are shifting from "Growth" to "Preservation" mindset due to upcoming grandchild.</p>
                               </div>
                               <div>
                                   <p className="font-semibold text-sm mb-2">Action Items</p>
                                   <div className="flex items-center gap-2 text-sm text-slate-600">
                                       <div className="w-4 h-4 border border-slate-300 rounded"></div>
                                       Send updated cash flow model
                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <div className="text-purple-500 font-mono text-sm mb-2">03 — After</div>
                <h3 className="text-2xl font-bold text-white mb-4">Generate client-ready outputs in minutes.</h3>
                <p className="text-gray-400 mb-6 text-lg">Mirra creates a structured client profile and suggested next steps you can send, save, or log.</p>
                <ul className="space-y-3">
                    {["Client summary (shareable)", "Planning priorities + risk posture", "Next-meeting agenda + action items"].map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-300 text-sm">
                            <Check className="w-5 h-5 text-purple-500 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
