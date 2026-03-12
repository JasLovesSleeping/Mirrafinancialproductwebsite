import React from 'react';
import { Outputs } from '../Outputs';
import { SecuritySection } from '../SecuritySection';
import { FAQ } from '../FAQ';
import { Button } from '../ui/button';
import { useRouter } from '../Router';
import { ArrowLeft } from 'lucide-react';

export const ResourcesPage = () => {
  const { setPage } = useRouter();

  return (
    <div className="pt-24 min-h-screen bg-[#FDFCF8]">
      
      {/* Optional: Unified Page Header or Hero could go here. 
          For now, we just stack the sections. 
      */}
      
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-12">
           <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-6">
                    Resources
                </h1>
                <p className="text-xl text-gray-600 font-light">
                    Deep dive into our deliverables, security standards, and answers to common questions.
                </p>
           </div>

           {/* Internal Navigation */}
           <div className="flex justify-center gap-8 md:gap-16 border-b border-gray-200 pb-8">
                {[
                    { id: 'outputs', label: 'The Outputs' },
                    { id: 'security', label: 'Security' },
                    { id: 'faq', label: 'FAQ' }
                ].map(link => (
                    <button
                        key={link.id}
                        onClick={() => {
                            document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#2E2E48] transition-colors relative group py-2"
                    >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2E2E48] transition-all group-hover:w-full"></span>
                    </button>
                ))}
           </div>
      </div>

      <Outputs />
      <SecuritySection />
      <FAQ />

      {/* Footer CTA usually follows */}
      <div className="bg-[#2E2E48] text-white py-24 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-serif mb-8">Ready to streamline your practice?</h2>
                <div className="flex justify-center gap-4">
                    <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" onClick={() => setPage('home')}>
                        Back to Product
                    </Button>
                    <Button className="bg-white text-[#2E2E48] hover:bg-gray-100" onClick={() => setPage('assessment')}>
                        Start Assessment
                    </Button>
                </div>
            </div>
      </div>
    </div>
  );
};
