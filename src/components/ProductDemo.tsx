import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Copy, Download, Send, FileText, MessageSquare, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from "sonner@2.0.3";

const playbookTabs = [
  { id: 'pre', label: 'Pre-meeting Brief', icon: FileText, content: "Review 3 key risks before you enter." },
  { id: 'in', label: 'In-meeting Prompts', icon: MessageSquare, content: "Live objection handling guidance." },
  { id: 'post', label: 'Post-meeting Follow-up', icon: Mail, content: "Draft email generated from transcript." },
];

export const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState('pre');
  const [summaryOpen, setSummaryOpen] = useState(true);

  const handleAction = (action: string) => {
    toast.success(action);
  };

  return (
    <section className="py-24 bg-[#F5F4F0] border-b border-[#E5E5E5]" id="product-demo">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">See what you get—before the next meeting.</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Client-Facing Summary (Collapsible) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div 
                    className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setSummaryOpen(!summaryOpen)}
                >
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Client-Facing Summary</span>
                    {summaryOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </div>
                
                <AnimatePresence>
                    {summaryOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 space-y-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full mb-4"></div>
                                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                                <div className="space-y-2 mt-8">
                                    <div className="h-2 bg-gray-50 rounded w-full"></div>
                                    <div className="h-2 bg-gray-50 rounded w-full"></div>
                                    <div className="h-2 bg-gray-50 rounded w-5/6"></div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                                    <p className="text-xs text-gray-400 italic">This is what your client sees (if you share it)</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {!summaryOpen && <div className="p-4 text-xs text-gray-400 text-center italic">Collapsed</div>}
            </div>

            {/* Right: Advisor Playbook Tabs */}
            <div className="bg-[#2E2E48] rounded-xl shadow-xl overflow-hidden text-white min-h-[500px] flex flex-col">
                <div className="flex border-b border-white/10">
                    {playbookTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-4 text-[10px] md:text-xs font-bold uppercase tracking-wide transition-colors relative ${activeTab === tab.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {tab.label}
                            {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"></div>}
                        </button>
                    ))}
                </div>

                <div className="p-8 flex-1 flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6 flex-1"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                {playbookTabs.find(t => t.id === activeTab)?.icon && React.createElement(playbookTabs.find(t => t.id === activeTab)!.icon, { className: "w-8 h-8 text-indigo-400" })}
                                <h3 className="text-xl font-serif">{playbookTabs.find(t => t.id === activeTab)?.label}</h3>
                            </div>
                            
                            <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-indigo-500 pl-4">
                                {playbookTabs.find(t => t.id === activeTab)?.content}
                            </p>

                            <div className="bg-black/20 rounded-lg p-6 space-y-4 border border-white/5 mt-auto">
                                <div className="h-2 bg-white/10 rounded w-full"></div>
                                <div className="h-2 bg-white/10 rounded w-5/6"></div>
                                <div className="h-2 bg-white/10 rounded w-4/6"></div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                        <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 h-8 px-3 text-xs" onClick={() => handleAction('Copied to clipboard')}>
                            <Copy className="w-3 h-3 mr-2" /> Copy
                        </Button>
                        <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 h-8 px-3 text-xs" onClick={() => handleAction('PDF Exported')}>
                            <Download className="w-3 h-3 mr-2" /> Export PDF
                        </Button>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-3 text-xs ml-auto" onClick={() => handleAction('Sent to CRM')}>
                            <Send className="w-3 h-3 mr-2" /> Send to CRM
                        </Button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
