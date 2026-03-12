import React from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Shield, Database, Workflow, Users, FileText } from 'lucide-react';

interface FAQProps {
  hideHeader?: boolean;
}

export const FAQ = ({ hideHeader = false }: FAQProps) => {
  const faqs = [
    {
      icon: Shield,
      question: "Is this compliant? Will it create regulatory risk?",
      answer: "Mirra is designed for compliance from the ground up. We don't provide investment advice or recommendations. Instead, we translate behavioral signals into conversation guidance. No audio is stored unless you explicitly choose to. All outputs are audit-ready and designed to support your existing compliance workflows.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Database,
      question: "How is client data used? Can we opt out of audio storage?",
      answer: "You have full control. By default, Mirra processes conversations in real-time and discards audio immediately after generating insights. All data is encrypted in transit and at rest. You can configure retention policies to match your firm's data governance requirements.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Workflow,
      question: "How does Mirra integrate with our existing CRM and tools?",
      answer: "Mirra doesn't replace your CRM—it enhances it. We integrate with your calendar, CRM, and note-taking tools to pull context and push insights. Outputs are CRM-ready and can be automatically synced to your existing systems via API or manual export.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Users,
      question: "How do we roll this out to our team?",
      answer: "We provide a structured onboarding program: 1) Pilot with 2-3 advisors for 2 weeks, 2) Review results and gather feedback, 3) Gradual rollout with training sessions. Most firms are fully operational within 30 days. We provide ongoing support and best practice sharing.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: FileText,
      question: "Is this a recording/transcription tool?",
      answer: "No. Mirra is an intelligence layer, not a recording tool. While we can process meeting audio to extract insights, our core value is in the behavioral analysis and advisor guidance—not in storing or managing recordings. You control whether any audio is retained.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        {!hideHeader && (
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-[#2E2E48]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#2E2E48] uppercase">
              Common Questions
            </span>
            <div className="h-px w-8 bg-[#2E2E48]"></div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
            Questions we hear most from firms
          </h2>
          <p className="text-lg text-gray-600">
            Addressing the top concerns about compliance, data, and implementation.
          </p>
        </div>
        )}

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-gray-100 rounded-lg px-6 bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4 pr-4">
                      <div className={`w-10 h-10 rounded-lg ${faq.bg} flex items-center justify-center flex-shrink-0 mt-1`}>
                        <faq.icon className={`w-5 h-5 ${faq.color}`} />
                      </div>
                      <span className="text-lg font-serif text-[#1A1A1A]">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14 pr-4 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};
