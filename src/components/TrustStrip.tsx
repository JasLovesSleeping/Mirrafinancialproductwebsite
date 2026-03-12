import React from 'react';
import { ShieldCheck, Lock, FileClock, History, UserCheck } from 'lucide-react';
import { useRouter } from './Router';

export const TrustStrip = () => {
  const { setPage } = useRouter();

  const items = [
    { label: "SOC 2 Type II Compliant", icon: ShieldCheck },
    { label: "End-to-End Encryption", icon: Lock },
    { label: "Configurable Retention", icon: FileClock },
    { label: "Full Audit Trail", icon: History },
    { label: "Human-in-the-Loop Options", icon: UserCheck },
  ];

  return (
    <section className="py-12 bg-[#FDFCF8] border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
          {items.map((item, idx) => (
            <button 
                key={idx}
                onClick={() => setPage('security')}
                className="flex items-center gap-2 group transition-opacity hover:opacity-70"
            >
                <div className="p-1.5 bg-gray-100 rounded-full text-gray-500 group-hover:bg-[#2E2E48] group-hover:text-white transition-colors">
                    <item.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-[#2E2E48] transition-colors">
                    {item.label}
                </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
