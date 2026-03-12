import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Shield, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from './Router';
import { WaitlistModal } from './WaitlistModal';

export const FooterCTA = () => {
  const { setPage } = useRouter();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const links = [
      { 
          title: "Outputs Gallery", 
          desc: "Download sample deliverables.", 
          icon: FileText, 
          action: () => setPage('outputs') 
      },
      { 
          title: "FAQ", 
          desc: "Implementation and boundaries.", 
          icon: HelpCircle, 
          action: () => setPage('faq') 
      },
      { 
          title: "Security", 
          desc: "Trust Center and security pack.", 
          icon: Shield, 
          action: () => setPage('security') 
      },
  ];

  return (
    <section className="py-24 bg-[#F5F4F0] border-t border-gray-200">
      <WaitlistModal isOpen={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Entry Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24 border-b border-gray-200 pb-24">
            {links.map((link, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    onClick={link.action}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md cursor-pointer group transition-all"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[#2E2E48] group-hover:text-white transition-colors">
                            <link.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-[#1A1A1A]">{link.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{link.desc}</p>
                    <div className="flex items-center text-xs font-bold text-[#2E2E48] uppercase tracking-wider group-hover:gap-2 transition-all">
                        View <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-8">Ready to see the unseen?</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                    onClick={() => setPage('assessment')}
                    className="bg-[#2E2E48] hover:bg-[#1A1A1A] text-white h-16 px-10 text-lg font-bold tracking-wide shadow-xl"
                >View Sample Profile</Button>
                <Button 
                    variant="ghost"
                    onClick={() => setIsWaitlistOpen(true)}
                    className="h-16 px-10 text-lg font-bold tracking-wide text-[#2E2E48] hover:bg-gray-200"
                >Become a Design Partner</Button>
            </div>
        </div>

      </div>
    </section>
  );
};