import React from 'react';
import { ShieldCheck, Lock, Globe, FileCheck } from 'lucide-react';

const badges = [
    { icon: ShieldCheck, text: "SOC 2 Type II Ready" },
    { icon: Lock, text: "256-bit Encryption" },
    { icon: Globe, text: "GDPR Compliant" },
    { icon: FileCheck, text: "FINRA / SEC Aligned" }
];

export const TrustBar = () => {
  return (
    <div className="w-full bg-[#FDFCF8] border-b border-gray-100 py-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <badge.icon className="w-4 h-4" />
                    <span>{badge.text}</span>
                </div>
            ))}
        </div>
    </div>
  );
};