import React from 'react';
import { Users, Building2, Briefcase } from 'lucide-react';

export const SocialProof = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Built for advisory workflows — not generic note-taking</p>
        
        <div className="grid md:grid-cols-3 gap-8 items-center justify-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-gray-400 group">
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <Users className="w-5 h-5" />
            </div>
            <span className="text-[14px]">Independent advisors (RIA / CFP)</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-gray-400 group">
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <Building2 className="w-5 h-5" />
            </div>
            <span className="text-[14px]">Wealth management teams</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-400 group">
             <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <Briefcase className="w-5 h-5" />
             </div>
            <span className="text-[14px] whitespace-nowrap">Advisory firms building consistent CX</span>
          </div>
        </div>
      </div>
    </section>
  );
};
