import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, User, Building2 } from 'lucide-react';
import { useRouter } from './Router';
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

export const StartAssessment = () => {
  const { setPage } = useRouter();

  return (
    <section className="py-24 bg-white" id="start">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">Two ways to start.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card A: For Advisors */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#F9F9FB] rounded-xl p-8 border border-gray-200 hover:border-[#2E2E48] hover:shadow-lg transition-all duration-300 group"
            >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#2E2E48] group-hover:text-white transition-colors">
                    <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">For Advisors</h3>
                <p className="text-gray-600 mb-8 min-h-[48px]">Send a client assessment and get a profile + prep brief.</p>
                
                <Button 
                    className="w-full bg-[#2E2E48] hover:bg-[#1A1A1A] text-white h-12 font-bold"
                    onClick={() => setPage('assessment')}
                >
                    View Example Assessment <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </motion.div>

            {/* Card B: For Firms */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#F9F9FB] rounded-xl p-8 border border-gray-200 hover:border-[#2E2E48] hover:shadow-lg transition-all duration-300 group"
            >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#2E2E48] group-hover:text-white transition-colors">
                    <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-3">For Firms</h3>
                <p className="text-gray-600 mb-8 min-h-[48px]">Standardize workflows across the team with Mirra.</p>
                
                <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full border-[#2E2E48] text-[#2E2E48] hover:bg-[#2E2E48] hover:text-white h-12 font-bold">
                        Request Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Request Firm Demo</DialogTitle>
                            <DialogDescription>Let's discuss how Mirra works at enterprise scale.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label>Firm Name</Label>
                                <Input placeholder="Acme Wealth" />
                            </div>
                            <div className="grid gap-2">
                                <Label>Number of Advisors</Label>
                                <Input placeholder="10+" />
                            </div>
                            <div className="grid gap-2">
                                <Label>Email</Label>
                                <Input placeholder="you@firm.com" />
                            </div>
                            <Button className="w-full bg-[#2E2E48] text-white">Submit Request</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </motion.div>

        </div>

      </div>
    </section>
  );
};
