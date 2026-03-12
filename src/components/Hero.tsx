import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from './Router';
import { toast } from "sonner@2.0.3";

export const Hero = () => {
  const { setPage } = useRouter();

  const handleRequestDemo = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received", {
      description: "We'll be in touch shortly to schedule your demo.",
    });
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#FDFCF8] overflow-hidden border-b border-[#E5E5E5]">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150"></div>
         <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-50 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Narrative (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex items-center gap-4 mb-2"
             >
                <div className="h-px w-8 bg-[#2E2E48]"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
                  MIRRA BY FINARIC AI
                </span>
             </motion.div>

             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#1A1A1A] leading-[1.05]"
             >Decode the <span className="italic text-[#2E2E48]">Financial Personality</span> of Your Clients.</motion.h1>

             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed font-light max-w-lg"
             >
                The "Financial MBTI" that bridges the trust gap. Turn behavioral signals into actionable advisory insights.
             </motion.p>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }} 
                className="flex flex-col gap-4 pt-4"
             >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#2E2E48] hover:bg-[#1a1a2e] text-white h-14 px-8 text-sm font-bold tracking-wide rounded-none shadow-xl transition-all w-full sm:w-auto flex items-center gap-2">
                        Request a Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl text-[#1A1A1A]">Request Demo</DialogTitle>
                        <DialogDescription>
                          See how Mirra can transform your client meetings.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleRequestDemo} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Jane Doe" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Work Email</Label>
                          <Input id="email" type="email" placeholder="jane@firm.com" required />
                        </div>
                        <Button type="submit" className="w-full bg-[#2E2E48] text-white rounded-none h-12 font-bold tracking-wide">
                          Submit Request
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button 
                    variant="ghost" 
                    className="text-[#2E2E48] hover:bg-[#2E2E48]/5 h-14 px-8 text-sm font-bold tracking-wide rounded-none w-full sm:w-auto flex items-center gap-2 border border-[#2E2E48]/20"
                    onClick={() => setPage('assessment')}
                  >
                    <PlayCircle className="w-4 h-4" />
                    Try the Assessment
                  </Button>
                </div>
             </motion.div>
          </div>

          {/* Right: Mirra Workspace Image (Col 7) */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 40 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="lg:col-span-7 relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
             <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/80 backdrop-blur-xl">
                {/* Noise Overlay */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

                {/* Simulated Workspace Header */}
                <div className="absolute top-0 left-0 w-full h-12 bg-white border-b border-gray-100 flex items-center px-4 justify-between z-20">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="px-3 py-1 bg-gray-50 rounded text-[10px] text-gray-500 font-mono">mirra.app/workspace/client/jd-8291</div>
                </div>
                
                {/* Workspace Content Image */}
                <img 
                    src="https://images.unsplash.com/photo-1651129526361-d31cd025e662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MDU2MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Mirra Workspace" 
                    className="w-full h-full object-cover pt-12"
                />
                
                {/* Floating "Between Client & Advisor" Badge */}
                <div className="absolute bottom-8 right-8 bg-[#2E2E48]/90 backdrop-blur text-white p-4 rounded-lg shadow-xl max-w-xs z-30 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold uppercase tracking-wider">Live Intelligence</span>
                    </div>
                    <p className="text-sm font-light">"Client expressed hesitation on liquidity. Pivot to flexible withdrawal options."</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
