import React from 'react';
import { ShieldCheck, Lock, FileCheck, Server } from 'lucide-react';
import { Button } from './ui/button';

export const Security = () => {
  return (
    <section id="security" className="py-20 bg-[#F9F9FB] border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-2xl font-serif text-[#1A1A1A] mb-8">Enterprise-grade security. Built for RIAs.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex items-center justify-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#2E2E48]" />
                <span className="text-sm font-bold text-gray-700">SOC 2 Type II</span>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex items-center justify-center gap-3">
                <Lock className="w-4 h-4 text-[#2E2E48]" />
                <span className="text-sm font-bold text-gray-700">AES-256 Encryption</span>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex items-center justify-center gap-3">
                <FileCheck className="w-4 h-4 text-[#2E2E48]" />
                <span className="text-sm font-bold text-gray-700">Audit Trails</span>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex items-center justify-center gap-3">
                <Server className="w-4 h-4 text-[#2E2E48]" />
                <span className="text-sm font-bold text-gray-700">Data Retention</span>
            </div>
        </div>

        <Button variant="link" className="text-xs font-bold text-[#2E2E48] uppercase tracking-wider">
            Request Security Pack →
        </Button>

      </div>
    </section>
  );
};
