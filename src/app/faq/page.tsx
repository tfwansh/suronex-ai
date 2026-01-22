"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Plus, 
  Minus, 
  Search, 
  ShieldCheck, 
  Lock, 
  Zap,
  FileQuestion,
  MessageCircle,
  Mail,
  ArrowRight
} from "lucide-react";

import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

const faqs = [
  {
    category: "General & Platform",
    questions: [
      {
        q: "What is Suronex platform used for?",
        a: "Suronex is a cloud compliance and security platform designed to help organizations identify, assess, and remediate security risks across multi-cloud and SaaS environments. It proactively monitors for misconfigurations and compliance gaps, providing actionable insights to strengthen security posture."
      },
      {
        q: "Which cloud platforms does Suronex support?",
        a: "Suronex supports leading cloud providers, including AWS, Microsoft Azure, and Google Cloud Platform (GCP), as well as cloud-native platforms like EKS, AKS, and GKE."
      },
      {
        q: "Can Suronex be deployed on-premises?",
        a: "Suronex is primarily a SaaS solution, though certain features can support on-premises or hybrid deployments to meet specific organizational requirements."
      },
      {
        q: "Does Suronex support multi-cloud security management?",
        a: "Absolutely. The platform provides a single pane of glass for monitoring and securing multiple cloud environments, ensuring consistent visibility and control."
      }
    ]
  },
  {
    category: "Security & Remediation",
    questions: [
      {
        q: "What types of misconfigurations can Suronex detect?",
        a: "The platform identifies misconfigurations across key security domains, including network security, identity and access management (IAM), encryption, logging, and many other critical controls."
      },
      {
        q: "Does Suronex provide remediation recommendations?",
        a: "Yes. Suronex offers AI-guided remediation for security misconfigurations, leveraging pre-built policies and remediation scripts to help teams resolve issues quickly."
      },
      {
        q: "How often are security controls updated?",
        a: "Suronex continuously evolves to address emerging threats. It currently includes over 1,000 built-in security controls across multiple cloud providers and SaaS platforms, with updates delivered at regular intervals."
      },
      {
        q: "Can organizations define custom security policies?",
        a: "Yes. Suronex allows organizations to create custom security policies, enabling rules tailored to specific security, compliance, and operational needs."
      },
      {
        q: "How does Suronex alert on policy violations?",
        a: "When a policy is triggered, the platform can send alerts via email, Slack, Teams, or integrate with your SIEM. It also logs violations in audit reports and dashboards for visibility and tracking."
      }
    ]
  },
  {
    category: "Compliance & Cloud Native",
    questions: [
      {
        q: "How does Suronex help with compliance management?",
        a: "The platform continuously scans cloud environments against standards such as CIS, NIST, ISO 27001, PCI DSS, SOC 2, and GDPR, providing automated compliance reports to simplify audits and regulatory adherence."
      },
      {
        q: "What Kubernetes security risks does Suronex address?",
        a: "Through its Cloud Native Compliance module, Suronex detects misconfigurations in clusters, workloads, RBAC, API security, and runtime threats to ensure a secure container environment."
      },
      {
        q: "How does cloud-native compliance help with container security?",
        a: "Suronex monitors Kubernetes configurations and container runtime behavior, enforcing security policies to prevent attacks and maintain continuous compliance in containerized environments."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("General & Platform-0");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

 
  const filteredFAQs = faqs
    .map((section) => {
      
      const filteredQuestions = section.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      return { ...section, questions: filteredQuestions };
    })
    
    .filter((section) => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#D33E9E]/30 relative font-sans">
      
     
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        
        
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-4/5 h-4/5 rounded-full bg-gradient-radial from-[#D33E9E]/60 via-[#3530BA]/30 to-transparent blur-[70px] -z-10"
          />
          <motion.div 
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full drop-shadow-[0_0_15px_rgba(211,62,158,0.9)] drop-shadow-[0_0_50px_rgba(53,48,186,0.6)]"
          >
            <Image src="/shield-bg.png" alt="Suronex Shield Logo" fill className="object-contain" priority />
          </motion.div>
        </div>

     
        <div className="absolute inset-0 overflow-hidden font-sans z-[-2]">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3530BA]/10 rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D33E9E]/10 rounded-full blur-[150px]" 
          />
        </div>
      </div>

   
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 md:pt-48 pb-20 px-6">
          
        
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-lg shadow-purple-500/10">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-200 tracking-widest uppercase">Support Center</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
                How can we <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] via-[#9F5FD6] to-[#3530BA]">
                  help you today?
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                Find answers about platform capabilities, security features, and compliance support.
              </p>

          
              <div className="relative max-w-xl mx-auto group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-full opacity-30 group-hover:opacity-75 transition duration-500 blur-lg"></div>
                <div className="relative flex items-center bg-white/[0.03] backdrop-blur-2xl border border-white/20 rounded-full px-6 py-4 shadow-2xl transition-all duration-300 group-hover:bg-white/[0.05]">
                  <Search className="w-5 h-5 text-gray-400 mr-4" />
                  <input 
                    type="text" 
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 text-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>

       
          <section className="max-w-3xl mx-auto space-y-16">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((section, sIndex) => (
                <div key={sIndex}>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIndex * 0.1 }}
                    className="text-2xl font-bold mb-8 flex items-center gap-3 text-white"
                  >
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                      {section.category === "General & Platform" && <ShieldCheck className="w-6 h-6 text-[#D33E9E]" />}
                      {section.category === "Security & Remediation" && <Lock className="w-6 h-6 text-[#3530BA]" />}
                      {section.category === "Compliance & Cloud Native" && <Zap className="w-6 h-6 text-[#D33E9E]" />}
                    </div>
                    {section.category}
                  </motion.h3>

                  <div className="space-y-4">
                    {section.questions.map((item, qIndex) => {
                      const id = `${section.category}-${qIndex}`;
                      const isOpen = openIndex === id;

                      return (
                        <motion.div
                          key={qIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: qIndex * 0.05 }}
                          className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out backdrop-blur-xl ${isOpen ? "border-[#D33E9E]/40 bg-white/[0.08] shadow-[0_0_50px_rgba(211,62,158,0.15)]" : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"}`}
                        >
                          <button
                            onClick={() => toggleFAQ(id)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                              {item.q}
                            </span>
                            <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? "border-[#D33E9E] bg-[#D33E9E] text-white rotate-180" : "border-white/10 bg-white/5 text-gray-400"}`}>
                              {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <div className="px-6 pb-8 pt-2">
                                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                                  <p className="text-gray-300 leading-relaxed text-base">
                                    {item.a}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="inline-flex justify-center items-center p-6 bg-white/5 rounded-full mb-6">
                  <FileQuestion className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
                <p className="text-gray-400">
                  We couldn&apos;t find any answers matching &quot;<span className="text-[#D33E9E]">{searchQuery}</span>&quot;.
                </p>
              </motion.div>
            )}
          </section>

         
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-24"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-10 text-center backdrop-blur-xl overflow-hidden">
              
             
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3530BA]/30 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D33E9E]/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 mb-6">
                  <MessageCircle className="w-8 h-8 text-[#D33E9E]" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-3">Still have questions?</h3>
                <p className="text-gray-400 max-w-lg mb-8 text-lg">
                  Can&apos;t find the answer you&apos;re looking for? Our team is here to help with any technical or account-related questions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:contact@suronex.ai"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email Support
                  </a>
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Sales
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

        </main>
        
       
        <div className="relative w-full border-t border-white/10 bg-[#030014]/60 backdrop-blur-xl [&_footer]:!bg-transparent [&_section]:!bg-transparent [&_div]:!bg-transparent">
          <Footer />
        </div>
      </div>
    </div>
  );
}
