"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Minus } from "lucide-react";
import { useState, useRef } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What Is Suronex Platform Used For?",
    answer: "Suronex is a cloud compliance and security platform designed to help organizations identify, assess, and remediate security risks across multi-cloud and SaaS environments. It proactively monitors for misconfigurations and compliance gaps, providing actionable insights to strengthen security posture."
  },
  {
    question: "Which Cloud Platforms Does Suronex Support?",
    answer: "Suronex supports leading cloud providers, including AWS, Microsoft Azure, and Google Cloud Platform (GCP), as well as cloud-native platforms like EKS, AKS, and GKE."
  },
  {
    question: "Can Suronex Be Deployed On-Premises?",
    answer: "Suronex is primarily a SaaS solution, though certain features can support on-premises or hybrid deployments to meet specific organizational requirements."
  },
  {
    question: "What Types Of Misconfigurations Can Suronex Detect?",
    answer: "The platform identifies misconfigurations across key security domains, including network security, identity and access management (IAM), encryption, logging, and many other critical controls."
  },
  {
    question: "Does Suronex Provide Remediation Recommendations?",
    answer: "Yes. Suronex offers AI-guided remediation for security misconfigurations, leveraging pre-built policies and remediation scripts to help teams resolve issues quickly."
  },
  {
    question: "Does Suronex Support Multi-Cloud Security Management?",
    answer: "Absolutely. The platform provides a single pane of glass for monitoring and securing multiple cloud environments, ensuring consistent visibility and control."
  },
  {
    question: "How Often Are Security Controls Updated?",
    answer: "Suronex continuously evolves to address emerging threats. It currently includes over 1,000 built-in security controls across multiple cloud providers and SaaS platforms, with updates delivered at regular intervals."
  },
  {
    question: "Can Organizations Define Custom Security Policies?",
    answer: "Yes. Suronex allows organizations to create custom security policies, enabling rules tailored to specific security, compliance, and operational needs."
  },
  {
    question: "How Does Suronex Alert On Policy Violations?",
    answer: "When a policy is triggered, the platform can send alerts via email, Slack, Teams, or integrate with your SIEM. It also logs violations in audit reports and dashboards for visibility and tracking."
  },
  {
    question: "How Does Suronex Help With Compliance Management?",
    answer: "The platform continuously scans cloud environments against standards such as CIS, NIST, ISO 27001, PCI DSS, SOC 2, and GDPR, providing automated compliance reports to simplify audits and regulatory adherence."
  },
  {
    question: "What Kubernetes Security Risks Does Suronex Address?",
    answer: "Through Cloud Native Compliance module, Suronex detects misconfigurations in clusters, workloads, RBAC, API security, and runtime threats to ensure a secure container environment."
  },
  {
    question: "How Does Cloud-Native Compliance Help With Container Security?",
    answer: "Suronex monitors Kubernetes configurations and container runtime behavior, enforcing security policies to prevent attacks and maintain continuous compliance in containerized environments."
  }
];

export default function PremiumFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1);

  return (
    <section className="min-h-screen py-24 md:py-32 bg-[#0A0A0F] relative overflow-hidden">
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#D33E9E]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#3530BA]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D33E9E]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
              Support Center
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-[-0.02em] leading-[1.1]">
            Frequently Asked{" "}
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-br from-[#D33E9E] to-[#8B4FB8]">
              Questions
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-2xl font-light leading-relaxed">
            Everything you need to know about Suronex AI's cloud security and compliance platform
          </p>
        </motion.div>

        {/* Two Column Masonry Layout */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          
          {/* Left Column */}
          <div className="space-y-4 lg:space-y-6">
            {leftColumnFAQs.map((faq, index) => {
              const actualIndex = index * 2;
              return (
                <MinimalFAQCard
                  key={actualIndex}
                  faq={faq}
                  index={actualIndex}
                  isOpen={openIndex === actualIndex}
                  onToggle={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                />
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4 lg:space-y-6">
            {rightColumnFAQs.map((faq, index) => {
              const actualIndex = index * 2 + 1;
              return (
                <MinimalFAQCard
                  key={actualIndex}
                  faq={faq}
                  index={actualIndex}
                  isOpen={openIndex === actualIndex}
                  onToggle={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                />
              );
            })}
          </div>
        </div>

        {/* Refined Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                Our team is here to help you secure your cloud infrastructure
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-3 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
              <div className="absolute inset-[1px] rounded-full bg-[#0A0A0F]" />
              <span className="relative text-sm font-medium text-white flex items-center gap-2">
                Contact Support
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MinimalFAQCard({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.03,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`
          relative bg-white/[0.02] backdrop-blur-sm
          border border-white/[0.05]
          transition-all duration-500 ease-out
          ${isOpen 
            ? 'shadow-[0_0_0_1px_rgba(211,62,158,0.3)] bg-white/[0.03]' 
            : 'hover:bg-white/[0.03] hover:border-white/10'
          }
        `}>
          {/* Top Border Accent */}
          <motion.div
            animate={{
              scaleX: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] origin-left"
          />

          <div className="p-6 md:p-8">
            {/* Question */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <h3 className="text-lg md:text-xl font-medium text-white pr-4 leading-tight">
                {faq.question}
              </h3>

              {/* Minimal Toggle Icon */}
              <motion.div
                animate={{
                  rotate: isOpen ? 180 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0 mt-1"
              >
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center
                  border transition-colors duration-300
                  ${isOpen 
                    ? 'border-[#D33E9E]/50 bg-[#D33E9E]/10' 
                    : 'border-white/10 bg-white/5'
                  }
                `}>
                  <Minus className={`w-3.5 h-3.5 transition-colors duration-300 ${
                    isOpen ? 'text-[#D33E9E]' : 'text-gray-500'
                  }`} />
                </div>
              </motion.div>
            </div>

            {/* Answer */}
            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ 
                duration: 0.4, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className="overflow-hidden"
            >
              <div className="pb-2">
                <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

