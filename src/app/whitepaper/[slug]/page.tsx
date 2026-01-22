"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Download, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";


const whitepaperContent = {
  title: "Multi-Cloud Security Redefined",
  subtitle: "Transform Compliance from Complexity to Confidence",
  category: "Cloud Security",
  author: "Suronex Research Team",
  publishedDate: "December 19, 2025",
  readingTime: "12 min read",
  content: [
    {
      type: "intro",
      text: "Organizations today face fragmented compliance, manual processes, and growing security challenges across multi-cloud environments. Traditional compliance methods can't keep up. Our AI-powered platform solves this by providing complete visibility, intelligent controls, and scalable security that evolves with your business. From startups to enterprises, we ensure you stay ahead of compliance demands instead of reacting under pressure."
    },
    {
      type: "heading",
      text: "The Cost of Not Having a Risk & Compliance Tool"
    },
    {
      type: "paragraph",
      text: "Navigating the complex world of compliance with automated support for over 40+ essential security frameworks, standards, and best practices is no longer optional. Without it, businesses face significant risks:"
    },
    {
      type: "list",
      items: [
        { title: "Blind Spots in Security", desc: "Fragmented visibility across AWS, Azure, GCP, and SaaS apps leaves critical risks unnoticed until they cause damage." },
        { title: "Inefficient & Manual Processes", desc: "Hours wasted on spreadsheets, evidence collection, and repetitive compliance tasks drain your team's productivity." },
        { title: "Audit Delays & Higher Costs", desc: "Preparing for ISO 27001, SOC 2, PCI-DSS or GDPR audits becomes painful, resource-heavy & prone to errors—leading to failed audits or costly penalties." },
        { title: "Reactive Security Posture", desc: "Without continuous monitoring, risks are detected too late, putting your business in firefighting mode after an incident." }
      ]
    },
    {
      type: "heading",
      text: "How Suronex Solves These Challenges"
    },
    {
      type: "grid",
      items: [
        { title: "Eliminate Blind Spots", desc: "Unified dashboard provides complete visibility across AWS, Azure, GCP, and SaaS applications. Continuous monitoring ensures no risk or misconfiguration goes unnoticed." },
        { title: "Automate Compliance", desc: "Save hours of manual effort by streamlining repetitive compliance checks. Reduce dependency on spreadsheets, consultants, and multiple tools." },
        { title: "Standardize Controls", desc: "Prebuilt compliance templates (ISO 27001, SOC 2, PCI-DSS, GDPR, HIPAA). Enforce consistent policies and controls across all cloud environments." },
        { title: "Proactive Risk Detection", desc: "Real-time compliance scoring and misconfiguration alerts. Prioritized remediation guidance helps teams fix issues before audits or breaches." }
      ]
    }
  ]
};

export default function WhitepaperDetail() {
  const params = useParams();
  const { scrollYProgress } = useScroll();
  

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#D33E9E]/30 relative font-sans">
      
      
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] origin-left z-[1001]" />

    
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] opacity-20">
          <Image src="/shield-bg.png" alt="Shield" fill className="object-contain" />
        </div>
        <div className="absolute inset-0 bg-[#030014]/90" /> 
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            
           
            <Link href="/whitepaper" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Library
            </Link>

         
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
              <div className="flex gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#D33E9E]/10 border border-[#D33E9E]/20 text-[#D33E9E] text-xs font-bold uppercase tracking-wider">
                  {whitepaperContent.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {whitepaperContent.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#3530BA] pl-6">
                {whitepaperContent.subtitle}
              </p>
            </motion.div>

         
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10 mb-12 text-sm text-gray-400">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center text-white font-bold text-xs">S</div>
                  <span className="text-white">{whitepaperContent.author}</span>
                </div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {whitepaperContent.publishedDate}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {whitepaperContent.readingTime}</div>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D33E9E] text-white hover:bg-[#D33E9E]/80 transition-colors font-medium">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>

           
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300">
              {whitepaperContent.content.map((block, idx) => {
                if (block.type === "intro") return <p key={idx} className="text-xl leading-relaxed text-white/90 mb-12">{block.text}</p>;
                if (block.type === "heading") return <h2 key={idx} className="text-3xl font-bold mt-12 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{block.text}</h2>;
                if (block.type === "paragraph") return <p key={idx} className="mb-6">{block.text}</p>;
                
                if (block.type === "list") {
                  return (
                    <div key={idx} className="grid gap-4 my-8">
                      {block.items?.map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                          <div className="mt-1 shrink-0"><CheckCircle2 className="w-5 h-5 text-[#D33E9E]" /></div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-400 m-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }

                if (block.type === "grid") {
                  return (
                    <div key={idx} className="grid md:grid-cols-2 gap-6 my-8">
                      {block.items?.map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-[#3530BA]/50 transition-colors">
                          <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </article>

           
            <div className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              <div className="bg-[#030014] rounded-[22px] p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to secure your multi-cloud?</h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get the full Suronex experience. Book a personalized demo to see these strategies in action.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </main>

        <div className="relative w-full border-t border-white/10 bg-[#030014]/60 backdrop-blur-xl [&_footer]:!bg-transparent [&_section]:!bg-transparent [&_div]:!bg-transparent">
          <Footer />
        </div>
      </div>
    </div>
  );
}