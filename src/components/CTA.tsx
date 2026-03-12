import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useRouter } from './Router';
import { WaitlistModal } from './WaitlistModal';

export const CTA = () => {
  const { setPage } = useRouter();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  return (
    <section className="py-32 bg-[#2E2E48] text-white relative overflow-hidden">
      <WaitlistModal isOpen={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
          Ready to see the <span className="italic">results?</span>
        </h2>
        <p className="text-lg text-indigo-100/70 mb-12 max-w-xl mx-auto font-light">
          Experience how Mirra turns a conversation into compliant, actionable intelligence in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
           <Button 
               variant="ghost" 
               onClick={() => setIsWaitlistOpen(true)}
               className="text-white hover:bg-white/10 h-16 px-12 text-sm font-bold tracking-wide rounded-none uppercase transition-all hover:scale-105"
           >
              Join Waitlist
           </Button>

           <Button 
              variant="outline" 
              onClick={() => setPage('assessment')}
              className="border-white/20 text-white hover:bg-white/10 h-16 px-12 text-sm font-bold tracking-wide rounded-none uppercase bg-transparent flex items-center gap-2"
           >
              <PlayCircle className="w-4 h-4" />
              Generate Sample Brief
           </Button>
        </div>

      </div>
    </section>
  );
};