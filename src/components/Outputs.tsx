import React from 'react';
import { motion } from 'motion/react';
import { FileText, MessageSquare, Mail, Download, ArrowRight } from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface OutputsProps {
    hideHeader?: boolean;
}

const outputs = [
  {
    id: 'brief',
    title: 'Prep Brief',
    description: "Full context snapshot before you say hello.",
    icon: FileText,
    fileType: "PDF",
    content: (
        <div className="space-y-3">
             <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Client Context</span>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Sync: 2m ago</span>
             </div>
             <div>
                <p className="text-xs font-bold text-[#1A1A1A] mb-1">Recent Life Event</p>
                <p className="text-xs text-gray-600">Grandchild born (Leo). Send congrats.</p>
             </div>
             <div>
                <p className="text-xs font-bold text-[#1A1A1A] mb-1">Financial Situation</p>
                <p className="text-xs text-gray-600">Down 2% YTD. "Concerned" sentiment detected in last email.</p>
             </div>
        </div>
    )
  },
  {
    id: 'prompts',
    title: 'Meeting Prompts',
    description: "Next best questions based on real-time analysis.",
    icon: MessageSquare,
    fileType: "PDF",
    content: (
        <div className="space-y-3">
             <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Live Assist</span>
                <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-green-600 font-bold">Active</span>
                </div>
             </div>
             <div className="bg-[#2E2E48]/5 p-3 rounded-md border border-[#2E2E48]/10">
                <p className="text-[10px] font-bold text-[#2E2E48] uppercase mb-1">Recommended Ask</p>
                <p className="text-sm font-serif italic text-[#1A1A1A]">"Since you mentioned liquidity is a priority, should we keep the liquidity strategy short-term?"</p>
             </div>
             <div className="flex gap-2">
                 <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] rounded hover:bg-gray-200 cursor-pointer transition-colors">Behavioral Match</span>
                 <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] rounded hover:bg-gray-200 cursor-pointer transition-colors">Risk Aligned</span>
             </div>
        </div>
    )
  },
  {
    id: 'draft',
    title: 'Follow-up Draft',
    description: "Complete email ready to review and send.",
    icon: Mail,
    fileType: "DOCX",
    content: (
        <div className="space-y-3">
             <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Draft</span>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">95% Match</span>
             </div>
             <div className="space-y-2">
                <p className="text-xs text-gray-400">Subject: <span className="text-gray-900">Summary: Strategy Update</span></p>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                    Hi Eleanor, loved seeing the photos of Leo! regarding the liquidity strategy, we agreed to keep it short-term to maximize flexibility...
                </p>
             </div>
        </div>
    )
  }
];

export const Outputs = ({ hideHeader = false }: OutputsProps) => {
  const handleDownload = (type: string, title: string) => {
    toast.success(`Downloading ${title}...`, {
        description: `Your ${type} file is being generated.`,
    });
  };

  return (
    <section className="py-24 bg-[#F5F4F0] border-b border-[#E5E5E5]" id="outputs">
      <div className="container mx-auto px-6 md:px-12">
        
        {!hideHeader && (
            <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4 mb-4"
                >
                <div className="h-px w-8 bg-[#2E2E48]"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
                    The Outputs
                </span>
                <div className="h-px w-8 bg-[#2E2E48]"></div>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
                Tangible deliverables. Instantly generated.
                </h2>
                <p className="text-lg text-gray-600 font-light">
                Client-ready artifacts you can use immediately.
                </p>
            </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
            {outputs.map((item, idx) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                    {/* Card Header */}
                    <div className="p-6 pb-4 border-b border-gray-100 bg-gray-50/50">
                        <div className="w-10 h-10 bg-[#2E2E48] text-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                            <item.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-serif text-[#1A1A1A] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-snug">{item.description}</p>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 bg-white flex-1 relative">
                        <div className="bg-gray-50 rounded border border-gray-100 p-4 h-full relative overflow-hidden group-hover:border-[#2E2E48]/20 transition-colors">
                             {item.content}
                        </div>
                    </div>

                    {/* Download Action Footer */}
                    <div className="p-4 bg-gray-50 border-t border-gray-100">
                        <button 
                            onClick={() => handleDownload(item.fileType, item.title)}
                            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#2E2E48] hover:text-[#2E2E48] text-gray-500 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer active:scale-95"
                        >
                            <Download className="w-3.5 h-3.5" />
                            Download Sample {item.fileType}
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};
