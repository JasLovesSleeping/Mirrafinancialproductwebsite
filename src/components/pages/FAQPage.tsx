import React from 'react';
import { FAQ } from '../FAQ';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../Router';

export const FAQPage = () => {
  const { setPage } = useRouter();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
      <div className="container mx-auto px-6 md:px-12">
        <Button 
            variant="ghost" 
            onClick={() => setPage('home')} 
            className="mb-8 pl-0 hover:bg-transparent text-[#2E2E48] hover:text-[#1A1A1A]"
        >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>
        
        <div className="max-w-4xl mx-auto">
             <div className="mb-12">
                <h1 className="text-5xl font-serif text-[#1A1A1A] mb-4">Frequently Asked Questions</h1>
                <p className="text-lg text-gray-600">Common questions about implementation, security, and compliance.</p>
             </div>
             <FAQ />
        </div>
      </div>
    </div>
  );
};
