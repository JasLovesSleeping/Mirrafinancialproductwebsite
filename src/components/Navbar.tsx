import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useRouter } from './Router';
import { WaitlistModal } from './WaitlistModal';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { setPage, currentPage } = useRouter();
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
      // Mapping for specific internal routes
      const routeMap: Record<string, string> = {
          'homepage': 'home',
          'product': 'product',
          'methodology': 'methodology',
          'security': 'security',
      };

      const target = routeMap[page.toLowerCase()] || page.toLowerCase();
      
      setPage(target as any);
      setMobileOpen(false);
  };

  const navItems = ['Homepage', 'Product', 'Methodology', 'Security'];

  if (currentPage === 'assessment') return null;

  return (
    <>
        <WaitlistModal isOpen={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
        <motion.nav 
            className="fixed top-4 z-50 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)]"
            initial={{ y: -20, opacity: 0, maxWidth: "1400px" }}
            animate={{ 
                y: 0, 
                opacity: 1,
                maxWidth: scrolled ? "1200px" : "1400px", 
                top: scrolled ? "20px" : "24px" 
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className={`bg-[#2E2E48]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between relative transition-all duration-500 ${scrolled ? 'md:px-4 md:py-2.5' : 'md:px-6 md:py-3'}`}>
            
            {/* Left: Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 justify-start flex-1 relative z-20">
                {navItems.map((item) => {
                    // Mapping for active state
                    const routeMap: Record<string, string> = {
                        'Homepage': 'home',
                        'Product': 'product',
                        'Methodology': 'methodology',
                        'Security': 'security'
                    };
                    const isActive = currentPage === routeMap[item];
                    
                    return (
                    <button 
                        key={item}
                        type="button"
                        onClick={() => handleNav(item)}
                        className={`text-xs font-medium uppercase tracking-widest transition-all duration-500 relative group whitespace-nowrap cursor-pointer ${scrolled ? 'text-[10px]' : ''} ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        {item}
                        <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </button>
                )})}
            </div>

            {/* Center: Logo (Absolute) */}
            <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group z-10"
                onClick={() => setPage('home')}
            >
                <span className={`font-serif font-bold text-white tracking-tight group-hover:opacity-80 transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                    Mirra
                </span>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider -mt-1 group-hover:text-white transition-colors">
                    by Finaric AI
                </span>
            </div>

            {/* Mobile Right: Hamburger */}
            <div className="lg:hidden flex-1 flex justify-end">
                <button 
                    onClick={() => setMobileOpen(true)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <Menu className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Right: Actions */}
            <div className="hidden lg:flex shrink-0 justify-end items-center gap-4 relative z-20">
                <Button 
                    variant="ghost"
                    onClick={() => setIsWaitlistOpen(true)}
                    className={`text-white hover:bg-white/10 font-medium rounded-lg text-xs uppercase tracking-wider transition-all duration-500 ${scrolled ? 'h-8 text-[10px]' : 'h-10'}`}
                >Become a Design Partner</Button>
                <Button 
                    onClick={() => setPage('assessment')} 
                    className={`bg-white hover:bg-gray-100 text-[#2E2E48] font-bold rounded-lg text-xs uppercase tracking-wider transition-all duration-500 shadow-lg hover:shadow-xl ${scrolled ? 'px-4 h-8 text-[10px]' : 'px-5 h-10'}`}
                >View sample profile</Button>
            </div>
        </div>
        </motion.nav>

        {/* Mobile Full Screen Menu */}
        <AnimatePresence>
            {mobileOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-[60] bg-[#FDFCF8] flex flex-col"
                >
                    <div className="p-6 flex items-center justify-between border-b border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif font-bold text-[#1A1A1A]">Mirra</span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">by Finaric AI</span>
                        </div>
                        <button 
                            onClick={() => setMobileOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-[#2E2E48]" />
                        </button>
                    </div>
                    
                    <div className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto">
                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <button 
                                    key={item}
                                    onClick={() => handleNav(item)}
                                    className="text-2xl font-serif text-[#1A1A1A] flex items-center justify-between group text-left"
                                >
                                    {item}
                                    <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2E2E48]" />
                                </button>
                            ))}
                        </div>

                        <div className="mt-auto flex flex-col gap-4">
                            <Button 
                                variant="ghost"
                                onClick={() => {
                                    setIsWaitlistOpen(true);
                                    setMobileOpen(false);
                                }}
                                className="w-full h-14 text-lg font-serif text-[#2E2E48] hover:bg-gray-100"
                            >
                                Join Waitlist
                            </Button>
                            <Button 
                                onClick={() => setPage('assessment')}
                                className="w-full bg-[#2E2E48] text-white h-14 text-lg font-serif"
                            >
                                View Example Assessment
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};
