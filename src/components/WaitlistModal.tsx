import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle, Loader2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistModal({ isOpen, onOpenChange }: WaitlistModalProps) {
  // Required fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // Optional fields
  const [company, setCompany] = useState('');
  const [aumRange, setAumRange] = useState('');
  // Improvement selection (optional, max 1 choice as simplified replacement for multiple chips if Select is used, 
  // or we can implement chips. Based on prompt "What are you trying to improve? (Optional, multi-select chips)", 
  // I will implement a simple chip selection for better UX).
  const [improvements, setImprovements] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const improvementOptions = [
      "Win more prospects",
      "Reduce admin time", 
      "Improve retention",
      "Compliance-ready records",
      "Other"
  ];

  const toggleImprovement = (option: string) => {
      setImprovements(prev => 
          prev.includes(option) 
              ? prev.filter(item => item !== option) 
              : [...prev, option]
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with all collected data
    const formData = {
        name,
        email,
        role,
        company,
        aumRange,
        improvements
    };
    console.log("Submitting waitlist data:", formData);

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
      onOpenChange(false);
      // Reset state after transition
      setTimeout(() => {
          setIsSuccess(false);
          setName('');
          setEmail('');
          setRole('');
          setCompany('');
          setAumRange('');
          setImprovements([]);
      }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border-[#2E2E48]/10 shadow-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Decorative Top Bar */}
        <div className="h-2 w-full bg-[#2E2E48] shrink-0"></div>
        
        <div className="p-8">
            {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">You're on the list.</h3>
                    <p className="text-gray-500 mb-8 max-w-xs">
                        Thank you for your interest in Mirra. We'll be in touch as soon as a spot opens up.
                    </p>
                    <Button 
                        onClick={handleClose}
                        className="bg-[#2E2E48] text-white hover:bg-[#1A1A1A] w-full"
                    >
                        Close
                    </Button>
                </div>
            ) : (
                <>
                    <DialogHeader className="mb-6 text-center sm:text-left">
                    <DialogTitle className="font-serif text-3xl text-[#1A1A1A] mb-2">
                        Get early access to Mirra
                    </DialogTitle>
                    <DialogDescription className="text-gray-500 text-base leading-relaxed">
                        We’re onboarding a limited number of advisory teams. Leave your details and we’ll reach out with next steps.
                    </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name (Required) */}
                        <div className="space-y-1.5">
                            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="name"
                                placeholder="Jane Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-11 border-gray-200 focus:border-[#2E2E48] focus:ring-[#2E2E48]/20 bg-gray-50/50"
                                required
                            />
                        </div>
                        
                        {/* Email (Required) */}
                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                Work Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="jane@firm.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 border-gray-200 focus:border-[#2E2E48] focus:ring-[#2E2E48]/20 bg-gray-50/50"
                                required
                            />
                        </div>

                         {/* Company (Optional) */}
                         <div className="space-y-1.5">
                            <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                Company
                            </Label>
                            <Input
                                id="company"
                                placeholder="Acme Wealth Mgmt"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="h-11 border-gray-200 focus:border-[#2E2E48] focus:ring-[#2E2E48]/20 bg-gray-50/50"
                            />
                        </div>

                        {/* Role (Required) */}
                        <div className="space-y-1.5">
                            <Label htmlFor="role" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                Role <span className="text-red-500">*</span>
                            </Label>
                            <Select value={role} onValueChange={setRole} required>
                                <SelectTrigger className="h-11 border-gray-200 bg-gray-50/50 focus:ring-[#2E2E48]/20">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="advisor">Advisor</SelectItem>
                                    <SelectItem value="team-lead">Team Lead</SelectItem>
                                    <SelectItem value="ops">Ops</SelectItem>
                                    <SelectItem value="compliance">Compliance</SelectItem>
                                    <SelectItem value="product">Product</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* AUM Range (Optional) */}
                        <div className="space-y-1.5">
                            <Label htmlFor="aum" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                AUM Range
                            </Label>
                            <Select value={aumRange} onValueChange={setAumRange}>
                                <SelectTrigger className="h-11 border-gray-200 bg-gray-50/50 focus:ring-[#2E2E48]/20">
                                    <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="<100m">&lt; $100M</SelectItem>
                                    <SelectItem value="100-500m">$100M – $500M</SelectItem>
                                    <SelectItem value="500m-2b">$500M – $2B</SelectItem>
                                    <SelectItem value="2b+">$2B+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* What are you trying to improve? (Optional Chips) */}
                        <div className="space-y-2 pt-2">
                             <Label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                                What are you trying to improve?
                            </Label>
                            <div className="flex flex-wrap gap-2">
                                {improvementOptions.map((option) => {
                                    const isSelected = improvements.includes(option);
                                    return (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => toggleImprovement(option)}
                                            className={`text-[11px] font-medium px-3 py-1.5 rounded-full border transition-all ${
                                                isSelected 
                                                    ? 'bg-[#2E2E48] text-white border-[#2E2E48]' 
                                                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button 
                                type="submit" 
                                className="w-full h-12 bg-[#2E2E48] hover:bg-[#1A1A1A] text-white font-bold text-lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    "Join Waitlist"
                                )}
                            </Button>
                            <p className="text-center text-[10px] text-gray-400 mt-4">
                                No spam. We’ll only email you about access and product updates.
                            </p>
                        </div>
                    </form>
                </>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
