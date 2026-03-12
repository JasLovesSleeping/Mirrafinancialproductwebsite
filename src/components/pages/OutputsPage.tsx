import React from 'react';
import { Outputs } from '../Outputs';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from '../Router';

export const OutputsPage = () => {
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
        
        {/* We can reuse the existing Outputs component but maybe style it differently or just wrap it */}
        <div className="max-w-6xl mx-auto">
             <div className="mb-12">
                <h1 className="text-5xl font-serif text-[#1A1A1A] mb-4">Sample Deliverables</h1>
                <p className="text-lg text-gray-600">Explore the actual artifacts Mirra generates for your team.</p>
             </div>
             
             {/* Reuse the inner content of Outputs or just render the component */}
             {/* Since Outputs is a section, we can just render it, but it has padding/bg. 
                 Let's just render it for now as it serves the purpose. 
                 Or better, refactor Outputs to be more flexible, but for speed, I will just include it. 
                 Actually, the user wants it as an "Independent Page". 
             */}
             <Outputs hideHeader={true} />
        </div>
      </div>
    </div>
  );
};
