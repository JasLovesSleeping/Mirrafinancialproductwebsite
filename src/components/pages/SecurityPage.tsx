import React from 'react';
import { ShieldCheck, Lock, FileCheck, Server, AlertCircle, CheckCircle, FileText, ArrowLeft, Key, UserCheck, Eye, Activity } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../Router';
import { motion } from 'motion/react';

export const SecurityPage = () => {
  const { setPage } = useRouter();

  const trustColumns = [
      {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Compliance",
          items: ["SOC 2 Type II Audited", "Annual Penetration Testing", "FINRA/SEC Guidelines Aligned"]
      },
      {
          icon: <Lock className="w-5 h-5" />,
          title: "Encryption",
          items: ["AES-256 at Rest", "TLS 1.3 in Transit", "AWS Key Management Service"]
      },
      {
          icon: <Server className="w-5 h-5" />,
          title: "Data Residency",
          items: ["US-Based Hosting (AWS)", "Configurable Retention", "Secure Deletion Policy"]
      },
      {
          icon: <UserCheck className="w-5 h-5" />,
          title: "Access Control",
          items: ["SSO (Okta/Azure AD)", "Role-Based Access (RBAC)", "MFA Enforcement"]
      },
      {
          icon: <Eye className="w-5 h-5" />,
          title: "AI Safety",
          items: ["PII Redaction/Scrubbing", "Zero-Training Policy", "Prompt Injection Defense"]
      },
      {
          icon: <Activity className="w-5 h-5" />,
          title: "Incident Response",
          items: ["24/7 Monitoring", "99.9% Uptime SLA", "Business Continuity Plan"]
      }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <Button 
            variant="ghost" 
            onClick={() => setPage('home')} 
            className="mb-8 pl-0 hover:bg-transparent text-[#2E2E48] hover:text-[#1A1A1A]"
        >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-[#2E2E48]"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
                    Trust Center
                </span>
            </div>
            <h1 className="text-5xl font-serif text-[#1A1A1A] mb-6">
                Enterprise-grade security. <br/> Built for regulated firms.
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
                We act as a sub-processor that respects your fiduciary obligations. Your client data is isolated, encrypted, and never used to train our public models.
            </p>
        </div>

        {/* 6-Column Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {trustColumns.map((col, i) => (
                <div key={i} className="bg-white p-6 border border-gray-200 rounded-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4 text-[#2E2E48]">
                        {col.icon}
                        <h3 className="font-bold text-[#1A1A1A]">{col.title}</h3>
                    </div>
                    <ul className="space-y-3">
                        {col.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* Disclaimer & CTA */}
        <div className="border-t border-gray-200 pt-12">
            <div className="bg-orange-50 border border-orange-100 p-4 rounded-sm flex gap-3 mb-12">
                <AlertCircle className="w-5 h-5 text-orange-800 shrink-0" />
                <div>
                    <h5 className="text-sm font-bold text-orange-900 uppercase tracking-wide mb-1">Important Compliance Note</h5>
                    <p className="text-sm text-orange-800/80">
                        Mirra is an intelligence and documentation tool. It aids in understanding client needs but does not provide financial advice. Advisors remain the sole decision makers and fiduciaries.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-[#2E2E48] p-10 rounded-sm text-white relative overflow-hidden">
                <div className="relative z-10 max-w-xl">
                    <h3 className="text-2xl font-serif mb-2">Need our full security package?</h3>
                    <p className="text-indigo-200 font-light mb-4">Speed up your vendor due diligence process.</p>
                    <div className="flex flex-wrap gap-2">
                        {['SOC 2 Type II Report', 'Pen Test Summary', 'Data Processing Addendum', 'Sub-processor List'].map((tag, i) => (
                            <span key={i} className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/80 border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 relative z-10 shrink-0">
                    <Button className="bg-white text-[#2E2E48] hover:bg-gray-100 font-bold rounded-none h-12 px-6">
                        Request Security Pack
                    </Button>
                </div>
                
                {/* Decoration */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
