import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { useRouter } from '../Router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, User, FileText, CheckCircle, Lock, ArrowRight, Activity, Brain, ChevronRight, Copy, Download, Share2, Info, ChevronDown, ChevronUp, RefreshCw, Briefcase, Eye, EyeOff, ShieldAlert } from 'lucide-react';

const QUESTIONS = [
    {
        id: 1,
        category: "Risk Tolerance",
        question: "When the market takes a sudden downturn, what is your immediate instinct?",
        options: [
            "Look for opportunities to buy more.",
            "Wait and see—it always bounces back.",
            "Worry about how much I've lost.",
            "Call my advisor immediately to sell."
        ],
        insight: "Loss framing sensitivity ↑"
    },
    {
        id: 2,
        category: "Communication Style",
        question: "How do you prefer to digest complex financial information?",
        options: [
            "Give me the bottom line first, details later.",
            "Walk me through the data and logic step-by-step.",
            "Tell me a story about someone in my situation.",
            "Show me the worst-case scenario visually."
        ],
        insight: "Decision pace: deliberate"
    },
    {
        id: 3,
        category: "Legacy Vision",
        question: "Ten years from now, what is the single most important outcome for your wealth?",
        options: [
            "Freedom to work only because I want to.",
            "Ensuring my family is secure for generations.",
            "Making a significant impact through philanthropy.",
            "Achieving maximum status and asset growth."
        ],
        insight: "Legacy priority: Security"
    }
];

const SAMPLE_CLIENTS = {
    guardian: {
        name: "The Guardian",
        icon: "G",
        quote: "I need to know my family is safe before we talk about growth.",
        desc: "Security-First · Detail-Oriented",
        risk: "High",
        detail: "Very High",
        summary: "Values stability and clear, logical planning. Prefers to understand downside protection before discussing upside potential. Decision-making is rooted in evidence.",
        color: "bg-[#2E2E48]",
        brief: {
            strategy: ["Lead with data and historical proof", "Validate concerns before solving", "Avoid emotional sales pitches"],
            risk: {
                severity: "HIGH SEVERITY",
                trigger: "Q1 ('Worry about loss') + Q3 ('Family security')",
                avoid: "Don't focus on 'opportunity cost' or missing out on gains.",
                framing: "Frame all growth strategies as 'inflation protection' to maintain their current lifestyle."
            },
            opening: "\"I've reviewed your inputs. I want to start by addressing your concerns about lifestyle maintenance before we look at any growth strategies.\""
        },
        prompts: [
            { label: "To uncover hidden anxieties", text: "\"If the market stayed flat for 3 years, how would that specifically impact your family plans?\"" },
            { label: "To build trust", text: "\"Let me show you exactly how a strategy like this behaved during the 2008 correction—warts and all.\"" },
            { label: "To close the meeting", text: "\"Does this plan give you the peace of mind you were looking for regarding your legacy?\"" }
        ],
        email: {
            subject: "Recap: Ensuring your lifestyle security",
            highlight: "protecting your current lifestyle",
            body: "Based on your input regarding market downturns, I've attached a stress-test analysis showing how this plan holds up in a recession scenario. This aligns with your desire to ensure your family's security above all else."
        },
        logic: [
             { label: "Loss Aversion Bias", source: "Q1: Market Downturn", value: "\"Worry about how much I've lost.\"" },
             { label: "Guardian Archetype", source: "Q2: Communication", value: "\"Walk me through logic step-by-step.\"" },
             { label: "Security Priority", source: "Q3: Legacy Vision", value: "\"Ensuring family is secure.\"" }
        ]
    },
    visionary: {
        name: "The Visionary",
        icon: "V",
        quote: "I want my wealth to enable big changes in the world.",
        desc: "Impact-Driven · Big Picture",
        risk: "Low",
        detail: "Low",
        summary: "Focuses on possibilities and legacy. Often disorganized with details but highly motivated by 'what if' scenarios. bored by spreadsheets.",
        color: "bg-purple-900",
        brief: {
            strategy: ["Start with the vision/end-state", "Use visual metaphors over spreadsheets", "Handle the details for them"],
            risk: {
                 severity: "MEDIUM SEVERITY",
                 trigger: "Q3 ('Making a significant impact')",
                 avoid: "Don't get bogged down in technical details or compliance early on.",
                 framing: "Anchor every new idea back to their original 10-year impact goal."
            },
            opening: "\"I love the vision you shared. I've designed a framework that handles the complexity so you can focus entirely on the impact you want to make.\""
        },
        prompts: [
            { label: "To re-align focus", text: "\"How does this specific investment accelerate the legacy you want to leave for your grandchildren?\"" },
            { label: "To build excitement", text: "\"Imagine it's 10 years from now. This strategy effectively funded the foundation you talked about.\"" },
            { label: "To handle admin", text: "\"We've handled the compliance review already. You just need to approve the direction.\"" }
        ],
        email: {
            subject: "Blueprint: Accelerating your impact",
            highlight: "maximizing your legacy impact",
            body: "I've sketched out the roadmap to get your foundation funded 3 years earlier than expected. The attached visual shows the growth trajectory. Let's dream big but execute precisely."
        },
        logic: [
             { label: "Growth Focus", source: "Q1: Market Downturn", value: "\"Look for opportunities to buy more.\"" },
             { label: "Visionary Archetype", source: "Q2: Communication", value: "\"Tell me a story about someone...\"" },
             { label: "Impact Priority", source: "Q3: Legacy Vision", value: "\"Making a significant impact.\"" }
        ]
    }
};

export const AssessmentPage = () => {
  const { setPage } = useRouter();
  const [step, setStep] = useState<'gate' | 'assessment' | 'analyzing' | 'results'>('gate');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("brief");
  const [showLogic, setShowLogic] = useState(false);
  const [currentClient, setCurrentClient] = useState<'guardian' | 'visionary'>('guardian');
  const [isClientSummaryCollapsed, setIsClientSummaryCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState<'advisor' | 'client'>('advisor');
  
  // Real-time analysis state
  const [detectedSignals, setDetectedSignals] = useState<string[]>([]);
  const [microInsight, setMicroInsight] = useState<string | null>(null);
  
  const client = SAMPLE_CLIENTS[currentClient];

  const handleAnswer = (answer: string) => {
    // Add signal
    const newSignal = QUESTIONS[currentQuestionIdx].insight;
    setDetectedSignals(prev => [...prev, newSignal]);

    // Show micro insight after Q2
    if (currentQuestionIdx === 1) {
        setMicroInsight("You prefer downside protection before upside potential.");
        setTimeout(() => setMicroInsight(null), 3000);
    }

    if (currentQuestionIdx < QUESTIONS.length - 1) {
        setCurrentQuestionIdx(prev => prev + 1);
    } else {
        setStep('analyzing');
        setTimeout(() => {
            setStep('results');
        }, 1200); // 1.2s analysis animation
    }
  };

  const startAssessment = () => {
      setStep('assessment');
      setCurrentQuestionIdx(0);
      setDetectedSignals([]);
  };

  const skipToResults = () => {
      setStep('results');
  };

  const toggleClient = () => {
      setCurrentClient(prev => prev === 'guardian' ? 'visionary' : 'guardian');
  };

  return (
    <div className="pt-20 min-h-screen bg-[#FDFCF8] flex flex-col font-sans">
      {/* Top Bar */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
         <div className="container mx-auto px-6 py-3 flex items-center justify-between">
             <Button 
                variant="ghost" 
                onClick={() => setPage('home')} 
                className="pl-0 hover:bg-transparent text-[#2E2E48] group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Exit Demo
            </Button>
            
            {step === 'results' ? (
                 <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-[#2E2E48] uppercase tracking-wider">Analysis Complete</span>
                    </div>
                    <div className="h-4 w-px bg-gray-300"></div>
                     <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button 
                            onClick={() => setViewMode('client')}
                            className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${viewMode === 'client' ? 'bg-white shadow text-[#2E2E48]' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Client View
                        </button>
                        <button 
                             onClick={() => setViewMode('advisor')}
                             className={`px-3 py-1 text-xs font-bold rounded-md transition-all flex items-center gap-1 ${viewMode === 'advisor' ? 'bg-[#2E2E48] shadow text-white' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <Lock className="w-3 h-3" /> Advisor View
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-3 bg-gray-100/50 px-3 py-1.5 rounded-full border border-gray-200/50">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Interactive Demo Environment</span>
                </div>
            )}

            {step === 'results' && (
                <Button className="bg-[#2E2E48] text-white text-xs font-bold px-4 py-2 h-9 rounded-sm shadow-sm hover:shadow-md transition-all">
                    Get Sample PDF
                </Button>
            )}
         </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Ambient Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2E2E48]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* STEP 1: GATE */}
        <AnimatePresence mode="wait">
            {step === 'gate' && (
                <motion.div 
                    key="gate"
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl w-full flex flex-col justify-center min-h-[60vh]"
                >
                    <div className="text-center mb-10 -mt-10">
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-4 leading-tight">
                                Experience the <br/><span className="italic text-[#2E2E48]">Double-Layer</span> intelligence.
                            </h1>
                        </motion.div>
                        <p className="text-lg text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
                            See what the client experiences, then see exactly what the advisor receives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 border border-gray-200 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#2E2E48]/30 transition-all cursor-pointer group relative overflow-hidden" 
                            onClick={startAssessment}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <User className="w-32 h-32 text-[#2E2E48]" />
                            </div>
                            <div className="w-12 h-12 bg-[#2E2E48] text-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <User className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">Try as Client</h3>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed">Take a 3-question micro-assessment to generate your own psychological profile.</p>
                            <div className="flex items-center text-[#2E2E48] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                                Start Assessment <ArrowRight className="w-3 h-3 ml-2" />
                            </div>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-[#F9F9FB] p-8 border border-gray-200 rounded-xl hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all cursor-pointer group relative overflow-hidden" 
                            onClick={skipToResults}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FileText className="w-32 h-32 text-gray-400" />
                            </div>
                            <div className="w-12 h-12 bg-white border border-gray-200 text-gray-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-serif text-gray-400 group-hover:text-[#1A1A1A] transition-colors mb-2">View Outputs</h3>
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed">Skip the assessment and see the advisor deliverables immediately.</p>
                            <div className="flex items-center text-gray-400 group-hover:text-[#2E2E48] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                                Jump to Dashboard <ArrowRight className="w-3 h-3 ml-2" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* STEP 2: ASSESSMENT */}
            {step === 'assessment' && (
                <motion.div
                    key="assessment"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Left Panel: Progress & Context */}
                    <div className="w-full md:w-1/3 space-y-8">
                        <div>
                            <span className="text-[10px] font-bold text-[#2E2E48] uppercase tracking-[0.2em]">Live Analysis</span>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>Progress</span>
                                    <span>{currentQuestionIdx + 1} / {QUESTIONS.length}</span>
                                </div>
                                <div className="w-full bg-gray-100 h-0.5 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="bg-[#2E2E48] h-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentQuestionIdx + 1) / QUESTIONS.length) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm relative overflow-hidden min-h-[160px]">
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#2E2E48]"></div>
                            <div className="flex items-center gap-3 mb-4">
                                <Activity className="w-4 h-4 text-[#2E2E48] animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-wider">Detected Signals</span>
                            </div>
                            
                            <div className="space-y-3">
                                <AnimatePresence>
                                    {detectedSignals.map((signal, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex items-center gap-2 text-xs text-[#2E2E48] font-medium bg-gray-50 p-2 rounded border border-gray-100"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#2E2E48]"></div>
                                            {signal}
                                        </motion.div>
                                    ))}
                                    {detectedSignals.length === 0 && (
                                         <p className="text-[10px] text-gray-400 font-mono italic">Listening for behavioral markers...</p>
                                    )}
                                </AnimatePresence>
                            </div>

                             <AnimatePresence>
                                {microInsight && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute bottom-4 left-4 right-4 bg-[#2E2E48] text-white p-3 rounded text-xs shadow-lg z-10"
                                    >
                                        <div className="flex items-center gap-2 mb-1 text-white/60 text-[10px] uppercase font-bold">
                                            <Brain className="w-3 h-3" /> Micro Insight
                                        </div>
                                        {microInsight}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Panel: Question */}
                    <div className="w-full md:w-2/3">
                         <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestionIdx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-8 md:p-12 border border-gray-200 shadow-lg rounded-xl relative"
                            >
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">
                                    {QUESTIONS[currentQuestionIdx].category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-10 leading-tight">
                                    {QUESTIONS[currentQuestionIdx].question}
                                </h2>
                                <div className="space-y-3">
                                    {QUESTIONS[currentQuestionIdx].options.map((opt, i) => (
                                        <motion.button 
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => handleAnswer(opt)}
                                            className="w-full text-left p-5 border border-gray-200 hover:border-[#2E2E48] hover:bg-[#2E2E48] hover:text-white transition-all rounded-lg text-gray-600 font-medium group flex items-center justify-between"
                                        >
                                            {opt}
                                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                         </AnimatePresence>
                    </div>
                </motion.div>
            )}

            {/* STEP 2.5: ANALYZING */}
            {step === 'analyzing' && (
                 <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                >
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 border-4 border-gray-100 border-t-[#2E2E48] rounded-full mx-auto mb-8"
                    />
                    <h3 className="text-3xl font-serif text-[#1A1A1A] mb-4">Synthesizing Profile</h3>
                     {/* Show all collected signals fading in */}
                     <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                        {detectedSignals.map((sig, i) => (
                             <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-mono"
                             >
                                 {sig}
                             </motion.span>
                        ))}
                     </div>
                </motion.div>
            )}

            {/* STEP 3: RESULTS (DUAL VIEW) */}
            {step === 'results' && (
                <motion.div 
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-7xl"
                >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-6">
                        <div>
                            <h2 className="text-4xl font-serif text-[#1A1A1A] mb-2">
                                {viewMode === 'client' ? 'Client Summary' : 'Meeting Brief & Strategy'}
                            </h2>
                            <p className="text-gray-500">
                                {viewMode === 'client' 
                                    ? 'A simplified view focusing on communication style and preferences.'
                                    : 'Internal intelligence including risk flags, scripts, and strategy.'
                                }
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-400 font-medium">Try another sample:</span>
                             <Button 
                                variant="outline" 
                                onClick={toggleClient} 
                                className="border-[#2E2E48]/20 text-[#2E2E48] hover:bg-[#2E2E48]/5 gap-2"
                             >
                                <RefreshCw className="w-3 h-3" />
                                {currentClient === 'guardian' ? 'Switch to Visionary' : 'Switch to Guardian'}
                             </Button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6 h-full">
                        {/* LEFT: Client Summary */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`lg:col-span-4 bg-white border border-gray-200 rounded-xl shadow-sm relative overflow-hidden transition-all duration-300 ${isClientSummaryCollapsed ? 'h-fit' : 'h-fit'}`}
                        >
                             <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                        <User className="w-4 h-4" /> 
                                        Client Summary
                                    </h3>
                                    <button onClick={() => setIsClientSummaryCollapsed(!isClientSummaryCollapsed)} className="text-gray-400 hover:text-[#2E2E48]">
                                        {isClientSummaryCollapsed ? <ChevronDown className="w-4 h-4"/> : <ChevronUp className="w-4 h-4"/>}
                                    </button>
                                </div>

                                <div className="text-center mb-8">
                                    <div className={`w-16 h-16 ${client.color} text-white rounded-full flex items-center justify-center font-serif text-2xl italic mx-auto mb-4 shadow-xl ring-4 ring-gray-50`}>
                                        {client.icon}
                                    </div>
                                    <h2 className="text-2xl font-serif text-[#1A1A1A] mb-1">{client.name}</h2>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{client.desc}</p>
                                </div>

                                {!isClientSummaryCollapsed && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        <div className="bg-[#F9F9FB] p-4 rounded-lg border border-gray-100 mb-6 relative">
                                            <div className="absolute top-0 left-4 -translate-y-1/2 bg-white px-2 text-2xl font-serif text-[#2E2E48]">"</div>
                                            <p className="text-sm text-gray-600 italic leading-relaxed">
                                                {client.quote}
                                            </p>
                                        </div>
                                        
                                        {/* Show risk/detail metrics only in Advisor mode */}
                                        {viewMode === 'advisor' && (
                                            <div className="space-y-4 mb-8">
                                                <div className="flex justify-between text-xs text-gray-500">
                                                    <span>Risk Aversion</span>
                                                    <span className="font-bold text-[#2E2E48]">{client.risk}</span>
                                                </div>
                                                <div className="w-full bg-gray-100 h-1 rounded-full">
                                                    <div className={`bg-[#2E2E48] h-full rounded-full ${client.risk === 'High' ? 'w-[85%]' : 'w-[20%]'}`} />
                                                </div>
                                                
                                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                                    <span>Detail Orientation</span>
                                                    <span className="font-bold text-[#2E2E48]">{client.detail}</span>
                                                </div>
                                                <div className="w-full bg-gray-100 h-1 rounded-full">
                                                    <div className={`bg-[#2E2E48] h-full rounded-full ${client.detail === 'Very High' ? 'w-[92%]' : 'w-[30%]'}`} />
                                                </div>
                                            </div>
                                        )}

                                        <Button variant="outline" className="w-full text-xs gap-2 border-gray-200">
                                            <Share2 className="w-3 h-3" /> Share Summary with Client
                                        </Button>
                                    </motion.div>
                                )}
                             </div>
                        </motion.div>

                        {/* RIGHT: Advisor Intelligence */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-8 flex flex-col h-full"
                        >
                             <div className={`bg-[#2E2E48] text-white p-4 rounded-t-xl flex justify-between items-center shadow-md z-10 relative transition-colors ${viewMode === 'client' ? 'bg-gray-800' : 'bg-[#2E2E48]'}`}>
                                 <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                     <Brain className="w-4 h-4" />
                                     {viewMode === 'client' ? 'Suggested Resources' : 'Advisor Intelligence'}
                                 </h3>
                                 <div className="flex items-center gap-3">
                                     {viewMode === 'advisor' && (
                                         <>
                                            <button className="p-1.5 hover:bg-white/10 rounded transition-colors" title="Copy to Clipboard">
                                                <Copy className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 hover:bg-white/10 rounded transition-colors" title="Download PDF">
                                                <Download className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 hover:bg-white/10 rounded transition-colors" title="Log to CRM">
                                                <Briefcase className="w-4 h-4" />
                                            </button>
                                            <span className="text-[10px] bg-white/10 px-2 py-1 rounded border border-white/20 font-mono ml-2">Generated in 1.2s</span>
                                         </>
                                     )}
                                 </div>
                             </div>
                             
                             <div className="bg-white border border-gray-200 border-t-0 rounded-b-xl p-6 shadow-sm flex-1">
                                {viewMode === 'client' ? (
                                    <div className="flex items-center justify-center h-64 flex-col text-gray-400">
                                        <Lock className="w-8 h-8 mb-3 opacity-20" />
                                        <p className="text-sm">Strategy & Risk insights are hidden in Client View.</p>
                                    </div>
                                ) : (
                                    <div className="w-full">
                                        <div className="w-full grid grid-cols-3 border-b border-gray-100 bg-transparent p-0 mb-8 rounded-none h-auto">
                                            {[
                                                { id: 'brief', label: 'Prep Brief', sub: 'Before the call' }, 
                                                { id: 'prompts', label: 'Meeting Prompts', sub: 'During the call' }, 
                                                { id: 'email', label: 'Follow-up Draft', sub: 'After the call' }
                                            ].map((tab) => (
                                                <button 
                                                    key={tab.id}
                                                    onClick={() => setActiveTab(tab.id)}
                                                    className={`rounded-none px-2 py-3 bg-transparent flex flex-col items-center gap-1 h-auto border-b-2 transition-all duration-300 ${activeTab === tab.id ? 'border-[#2E2E48] bg-[#2E2E48]/5 text-[#1A1A1A]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                                                >
                                                    <span className="font-bold text-sm">{tab.label}</span>
                                                    <span className="text-[10px] font-normal uppercase tracking-wide">{tab.sub}</span>
                                                </button>
                                            ))}
                                        </div>
                                        
                                        <AnimatePresence mode="wait">
                                            {activeTab === 'brief' && (
                                                <motion.div 
                                                    key="brief"
                                                    initial={{ opacity: 0, y: 10 }} 
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="grid sm:grid-cols-2 gap-6">
                                                        <div className="bg-[#F9F9FB] p-5 rounded-lg border border-gray-100">
                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Communication Strategy</p>
                                                            <ul className="space-y-2 text-sm text-gray-700">
                                                                {client.brief.strategy.map((item, i) => (
                                                                    <li key={i} className="flex gap-2 items-start"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="bg-amber-50/50 p-5 rounded-lg border border-amber-100">
                                                            <div className="flex items-center justify-between mb-3">
                                                                <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Risk Flag</p>
                                                                <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">{client.brief.risk.severity}</span>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <div className="flex gap-2 items-start text-xs border-b border-amber-200/50 pb-3">
                                                                     <Activity className="w-3 h-3 text-amber-600 mt-0.5 shrink-0" />
                                                                     <div>
                                                                         <span className="font-bold text-amber-800">Trigger Evidence: </span>
                                                                         <span className="text-amber-900/70">{client.brief.risk.trigger}</span>
                                                                     </div>
                                                                </div>
                                                                
                                                                <div className="space-y-3">
                                                                    <div>
                                                                         <p className="text-[10px] font-bold text-red-400 uppercase mb-1">Avoid This</p>
                                                                         <p className="text-xs text-gray-700 leading-relaxed bg-white/50 p-2 rounded border border-red-100">
                                                                             {client.brief.risk.avoid}
                                                                         </p>
                                                                    </div>
                                                                    <div>
                                                                         <p className="text-[10px] font-bold text-green-600 uppercase mb-1">Say This Instead</p>
                                                                         <p className="text-xs text-gray-700 leading-relaxed bg-white/50 p-2 rounded border border-green-100">
                                                                             {client.brief.risk.framing}
                                                                         </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <motion.div 
                                                        initial={{ opacity: 0, y: 10 }} 
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 }}
                                                    >
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Suggested Opening</p>
                                                        <p className="text-xl font-serif text-[#1A1A1A] leading-relaxed border-l-4 border-[#2E2E48] pl-4 italic">
                                                            {client.brief.opening}
                                                        </p>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                            
                                            {activeTab === 'prompts' && (
                                                <motion.div 
                                                    key="prompts"
                                                    initial={{ opacity: 0, y: 10 }} 
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="space-y-3"
                                                >
                                                    {client.prompts.map((prompt, i) => (
                                                        <div key={i} className="p-5 border border-gray-200 rounded-lg hover:border-[#2E2E48] cursor-default transition-all hover:shadow-md bg-white group">
                                                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide group-hover:text-[#2E2E48] transition-colors">{prompt.label}</p>
                                                            <p className="font-serif text-lg text-[#1A1A1A]">{prompt.text}</p>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
        
                                            {activeTab === 'email' && (
                                                <motion.div 
                                                    key="email"
                                                    initial={{ opacity: 0, y: 10 }} 
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="bg-gray-50 p-8 rounded-lg border border-gray-200 font-mono text-sm leading-relaxed shadow-inner"
                                                >
                                                    <p className="text-gray-500 mb-6 pb-4 border-b border-gray-200">Subject: {client.email.subject}</p>
                                                    <p className="mb-4">Hi [Name],</p>
                                                    <p className="mb-4">Thank you for sharing your thoughts today. It is clear that <span className="bg-yellow-100 px-1 border-b-2 border-yellow-200">{client.email.highlight}</span> is the primary goal.</p>
                                                    <p className="mb-4">{client.email.body}</p>
                                                    <p className="mb-8">Looking forward to our next steps.</p>
                                                    <p>Best,<br/>[Advisor Name]</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}

                                {/* Confidence / Logic Section - Audit Log Style */}
                                {viewMode === 'advisor' && (
                                    <div className="mt-8 border-t border-gray-100 pt-4">
                                        <button 
                                            onClick={() => setShowLogic(!showLogic)}
                                            className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#2E2E48] transition-colors w-full"
                                        >
                                            <div className="flex items-center gap-2">
                                                <ShieldAlert className="w-3 h-3" />
                                                Why Mirra thinks this (Audit Log)
                                            </div>
                                            <div className="flex-1 h-px bg-gray-100 mx-2"></div>
                                            {showLogic ? <ChevronUp className="w-3 h-3"/> : <ChevronDown className="w-3 h-3"/>}
                                        </button>
                                        
                                        <AnimatePresence>
                                            {showLogic && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 space-y-2">
                                                        {client.logic.map((log, i) => (
                                                            <div key={i} className="flex gap-4 text-xs p-2 hover:bg-gray-50 rounded transition-colors border-l-2 border-transparent hover:border-[#2E2E48]">
                                                                <div className="w-32 shrink-0 text-gray-400 font-mono text-[10px] uppercase pt-0.5">{log.source}</div>
                                                                <div className="flex-1">
                                                                    <p className="text-gray-800 font-medium mb-1">"{log.value.replace(/"/g, '')}"</p>
                                                                    <span className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">{log.label}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="flex justify-end pt-2">
                                                            <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-1 rounded border border-green-100">Confidence Score: 94%</span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                             </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};