import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  ArrowRight, 
  FileText, 
  Users, 
  Briefcase, 
  Home, 
  TrendingUp, 
  ShieldAlert, 
  Heart,
  ChevronRight,
  MousePointer2
} from 'lucide-react';
import { useRouter } from './Router';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

// Metro Line Data
const metroLines = [
  {
    id: 'build',
    label: 'Build',
    color: '#3B82F6', // Blue
    description: 'Foundation & Accumulation',
    stations: [
      {
        id: 'career-leap',
        label: 'Career Leap',
        icon: Briefcase,
        template: {
          title: 'Compensation Analysis',
          trigger: 'New role or promotion',
          agenda: ['Review offer details', 'Equity/Options breakdown', 'Savings rate adjustment'],
          output: 'Net worth projection update'
        }
      },
      {
        id: 'first-property',
        label: 'First Property',
        icon: Home,
        template: {
          title: 'Liquidity & Liability',
          trigger: 'Zillow links sharing',
          agenda: ['Down payment sources', 'Mortgage impact on cashflow', 'Budget stress test'],
          output: 'Affordability range card'
        }
      }
    ]
  },
  {
    id: 'grow',
    label: 'Grow',
    color: '#10B981', // Emerald
    description: 'Expansion & Optimization',
    stations: [
      {
        id: 'equity-event',
        label: 'IPO / Exit',
        icon: TrendingUp,
        template: {
          title: 'Concentration Risk',
          trigger: 'Company announcement',
          agenda: ['Tax implication model', 'Diversification schedule', 'Goal funding lock-in'],
          output: 'Tax-efficient sale plan'
        }
      },
      {
        id: 'family-expansion',
        label: 'Family Growth',
        icon: Users,
        template: {
          title: 'Protection Checkup',
          trigger: 'Expecting child / Marriage',
          agenda: ['Insurance gap analysis', 'Beneficiary review', 'Education funding start'],
          output: 'Safety net summary'
        }
      }
    ]
  },
  {
    id: 'transition',
    label: 'Transition',
    color: '#F59E0B', // Amber
    description: 'Shift to Preservation',
    stations: [
      {
        id: 'pre-retirement',
        label: 'The Red Zone',
        icon: ShieldAlert,
        template: {
          title: 'Retirement Rehearsal',
          trigger: '5 years to target date',
          agenda: ['Expense simulation', 'Healthcare gaps', 'Social Security timing'],
          output: 'Income replacement map'
        }
      }
    ]
  },
  {
    id: 'legacy',
    label: 'Legacy',
    color: '#8B5CF6', // Purple
    description: 'Impact & Stewardship',
    stations: [
      {
        id: 'estate-plan',
        label: 'Wealth Transfer',
        icon: Heart,
        template: {
          title: 'Family Governance',
          trigger: 'Estate value threshold',
          agenda: ['Heir preparedness', 'Charitable intent', 'Trust structure review'],
          output: 'Family mission statement'
        }
      }
    ]
  }
];

// Flattened list for easier navigation logic
const allStations = metroLines.flatMap(line => 
  line.stations.map(station => ({ ...station, lineId: line.id, lineColor: line.color, lineLabel: line.label }))
);

export const LifeGraphics = () => {
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setPage } = useRouter();

  const activeStation = allStations[activeStationIndex];

  // Scroll to card when index changes (if not triggered by scroll)
  const scrollToCard = (index: number) => {
    setActiveStationIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = 320; // approximate card width + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigateToProfile = () => {
    setPage('home');
    setTimeout(() => {
        const el = document.getElementById('client-profile');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-24 bg-[#FDFCF8] border-t border-gray-200 overflow-hidden relative" id="lifecycle-metro">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#2E2E48]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
              Event-Driven Intelligence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
            Life isn't a list. It's a journey.
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Mirra maps key life events to specific meeting templates, ensuring you're always ready for the "moments that matter."
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:h-[600px]">
          
          {/* LEFT COL: Metro Map Visualization (Interactive) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 shadow-xl p-8 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <MapPin className="w-64 h-64 text-[#2E2E48]" />
            </div>

            <h3 className="text-lg font-bold text-[#2E2E48] mb-8 z-10">Client Journey Map</h3>
            
            {/* The Metro Line SVG/Div Construction */}
            <div className="relative flex-1 flex items-center justify-center p-12">
               <div className="relative w-full h-64 flex items-center">
                  {/* Track Line Background */}
                  <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-100 rounded-full -translate-y-1/2"></div>
                  
                  {/* Active Progress Line */}
                  <motion.div 
                    className="absolute top-1/2 left-0 h-1.5 bg-[#2E2E48] rounded-full -translate-y-1/2 origin-left transition-all duration-500"
                    style={{ 
                        width: `${(activeStationIndex / (allStations.length - 1)) * 100}%` 
                    }}
                  />

                  {/* Stations */}
                  <div className="absolute inset-0 flex justify-between items-center w-full">
                      {allStations.map((station, index) => {
                          const isActive = index === activeStationIndex;
                          const isPast = index < activeStationIndex;
                          const isAlternating = index % 2 === 0;
                          
                          return (
                              <div key={station.id} className="relative group">
                                  {/* Station Dot */}
                                  <button
                                    onClick={() => scrollToCard(index)}
                                    className={cn(
                                        "relative z-10 w-5 h-5 rounded-full border-[3px] transition-all duration-300 flex items-center justify-center bg-white",
                                        isActive 
                                            ? "scale-150 shadow-lg border-current" 
                                            : isPast ? "border-[#2E2E48] bg-[#2E2E48]" : "border-gray-300 hover:border-gray-400"
                                    )}
                                    style={{ 
                                        borderColor: isActive ? station.lineColor : (isPast ? '#2E2E48' : undefined),
                                        backgroundColor: isPast ? '#2E2E48' : 'white'
                                    }}
                                  >
                                      {isActive && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: station.lineColor }} />}
                                  </button>
                                  
                                  {/* Station Label */}
                                  <div className={cn(
                                      "absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-all duration-300",
                                      isAlternating ? "top-10 pt-2" : "bottom-10 pb-2",
                                      isActive ? "opacity-100 translate-y-0" : `opacity-0 lg:opacity-50 lg:group-hover:opacity-100 ${isAlternating ? 'translate-y-2' : '-translate-y-2'}`
                                  )}>
                                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">{station.lineLabel}</span>
                                      <span className={cn("block font-serif font-bold text-sm", isActive ? "text-[#1A1A1A] scale-105" : "text-gray-400")}>
                                          {station.label}
                                      </span>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
               </div>
            </div>

            {/* Bottom Legend/Hint */}
            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <div className="flex gap-4">
                    {metroLines.map(line => (
                        <div key={line.id} className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: line.color }}></div>
                            <span className="font-medium uppercase tracking-wider text-[10px]">{line.label}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-1">
                   <MousePointer2 className="w-3 h-3" /> Click stations to preview templates
                </div>
            </div>
          </div>

          {/* RIGHT COL: Active Card Display (Sticky-ish) */}
          <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 to-white rounded-[2rem] -z-10 opacity-50 blur-xl"></div>
              
              <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStation.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="h-full"
                  >
                      {/* Meeting Template Card */}
                      <div className="bg-white rounded-2xl border-2 shadow-2xl overflow-hidden h-full flex flex-col" style={{ borderColor: activeStation.lineColor }}>
                          
                          {/* Card Header */}
                          <div className="p-6 text-white relative overflow-hidden" style={{ backgroundColor: activeStation.lineColor }}>
                              <div className="absolute top-0 right-0 opacity-20 transform translate-x-1/3 -translate-y-1/3">
                                  <activeStation.icon className="w-32 h-32" />
                              </div>
                              <div className="relative z-10">
                                  <div className="flex items-center gap-2 mb-2 opacity-90">
                                      <MapPin className="w-4 h-4" />
                                      <span className="text-xs font-bold uppercase tracking-widest">{activeStation.lineLabel} Station</span>
                                  </div>
                                  <h3 className="text-3xl font-serif font-bold mb-1">{activeStation.label}</h3>
                                  <p className="text-sm opacity-90 font-medium">Event Trigger: {activeStation.template.trigger}</p>
                              </div>
                          </div>

                          {/* Card Body */}
                          <div className="p-6 flex-1 flex flex-col gap-6">
                              
                              {/* Meeting Focus */}
                              <div>
                                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Recommended Meeting</span>
                                  <div className="flex items-start gap-3">
                                      <div className="p-2 bg-gray-100 rounded-lg shrink-0">
                                          <FileText className="w-5 h-5 text-[#2E2E48]" />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-lg text-[#1A1A1A]">{activeStation.template.title}</h4>
                                          <p className="text-xs text-gray-500 mt-1">Auto-generated based on detected life event.</p>
                                      </div>
                                  </div>
                              </div>

                              {/* Agenda */}
                              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Smart Agenda</span>
                                  <ul className="space-y-3">
                                      {activeStation.template.agenda.map((item, i) => (
                                          <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                              <div className="w-1.5 h-1.5 rounded-full bg-[#2E2E48]"></div>
                                              {item}
                                          </li>
                                      ))}
                                  </ul>
                              </div>

                              {/* Output */}
                              <div className="mt-auto">
                                  <div className="flex items-center justify-between p-4 bg-[#2E2E48] text-white rounded-xl shadow-lg">
                                      <div>
                                          <span className="text-[9px] font-bold uppercase opacity-70 block mb-1">Mirra Output</span>
                                          <span className="font-bold text-sm">{activeStation.template.output}</span>
                                      </div>
                                      <ArrowRight className="w-5 h-5 opacity-70" />
                                  </div>
                              </div>

                              <Button 
                                variant="ghost" 
                                className="w-full text-[#2E2E48] hover:bg-gray-50 text-xs font-bold uppercase tracking-wider"
                                onClick={handleNavigateToProfile}
                            >
                                View in Client Profile
                            </Button>
                          </div>
                      </div>
                  </motion.div>
              </AnimatePresence>
          </div>
        </div>
        
        {/* Mobile Horizontal Scroll Strip (Visible only on small screens) */}
        <div className="lg:hidden mt-8">
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Swipe to explore journey</p>
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x px-4" ref={scrollContainerRef}>
                {allStations.map((station, index) => {
                    const isActive = index === activeStationIndex;
                    return (
                        <div 
                            key={station.id} 
                            className="min-w-[90vw] md:min-w-[60vw] snap-center"
                            onClick={() => setActiveStationIndex(index)}
                        >
                            <div className={`bg-white rounded-2xl border-2 p-6 shadow-lg transition-all h-full flex flex-col ${isActive ? 'border-[#2E2E48] ring-4 ring-[#2E2E48]/5' : 'border-gray-200'}`} style={{ borderColor: isActive ? station.lineColor : undefined }}>
                                
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                    <div className="p-3 rounded-xl text-white shadow-sm" style={{ backgroundColor: station.lineColor }}>
                                        <station.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">{station.lineLabel}</span>
                                        <h4 className="font-serif font-bold text-xl leading-none text-[#1A1A1A]">{station.label}</h4>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 flex-1">
                                    <div>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Trigger</span>
                                        <p className="text-sm font-medium text-[#1A1A1A]">{station.template.trigger}</p>
                                    </div>
                                    
                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block mb-2">Meeting Agenda</span>
                                        <ul className="space-y-1.5">
                                            {station.template.agenda.slice(0, 2).map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                                                    <div className="w-1 h-1 rounded-full bg-[#2E2E48]"></div>
                                                    {item}
                                                </li>
                                            ))}
                                            {station.template.agenda.length > 2 && (
                                                <li className="text-[10px] text-gray-400 pl-3">+ {station.template.agenda.length - 2} more</li>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="pt-2">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Output</span>
                                        <div className="flex items-center gap-2 mt-1 text-[#2E2E48]">
                                            <FileText className="w-3.5 h-3.5" />
                                            <p className="text-sm font-bold">{station.template.output}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

      </div>
    </section>
  );
};
