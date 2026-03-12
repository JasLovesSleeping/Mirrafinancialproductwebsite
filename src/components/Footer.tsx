import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#050507] border-t border-white/5 py-12 text-sm text-gray-500">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
           <a href="#" className="hover:text-white transition-colors">Privacy</a>
           <a href="#" className="hover:text-white transition-colors">Terms</a>
           <a href="#" className="hover:text-white transition-colors">Security Pack</a>
           <a href="#" className="hover:text-white transition-colors">Subprocessors</a>
        </div>
        <div className="text-center md:text-right">
           <p>&copy; {new Date().getFullYear()} Finaric AI. Mirra is a product of Finaric AI.</p>
        </div>
      </div>
    </footer>
  );
};
