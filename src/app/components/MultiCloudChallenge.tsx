"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const challenges = [
  {
    id: 1,
    pain: "No Unified View of Cloud Risk",
    painDetail: "Operating across multi-cloud, cloud-native applications, and SaaS environments without a centralized control plane results in fragmented visibility. Security and compliance risks remain hidden across accounts, subscriptions, and services.",
    solution: "Single Pane of Glass",
    solutionDetail: "Unified dashboard aggregating security posture across AWS, Azure, GCP, and 100+ SaaS apps—providing complete visibility and eliminating blind spots.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    id: 2,
    pain: "Manual Compliance in Dynamic Cloud Environments",
    painDetail: "Cloud infrastructure changes continuously, but compliance processes remain static. Teams rely on spreadsheets, screenshots, and periodic checks that quickly become outdated and inaccurate.",
    solution: "Continuous Automated Compliance",
    solutionDetail: "Real-time control monitoring that adapts to infrastructure changes automatically—replacing manual tracking with intelligent, always-current compliance validation.",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500"
  },
  {
    id: 3,
    pain: "Audit Readiness Is Always a Fire Drill",
    painDetail: "Without continuous control validation, audits for ISO 27001, SOC 2, PCI DSS, or GDPR require weeks of manual preparation—draining resources and increasing the likelihood of gaps, delays, and audit findings.",
    solution: "Audit-Ready Evidence 24/7",
    solutionDetail: "Pre-mapped controls with automated evidence collection across 35+ frameworks—turning weeks of prep into instant compliance reporting.",
    gradient: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    id: 4,
    pain: "Risk Is Discovered Too Late",
    painDetail: "Lacking real-time and intelligent monitoring, control failures and misconfigurations are identified only after incidents occur, forcing teams into reactive remediation and executive escalation.",
    solution: "Proactive Risk Detection",
    solutionDetail: "AI-powered continuous monitoring that identifies and alerts on control failures instantly—before they escalate into security incidents.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500"
  },
  {
    id: 5,
    pain: "Cloud Scale Outpaces Governance",
    painDetail: "As cloud adoption accelerates, traditional tools and manual workflows fail to scale. Governance becomes inconsistent, compliance posture erodes, and security teams struggle to keep pace with business growth.",
    solution: "Governance at Cloud Speed",
    solutionDetail: "Automated policy enforcement that scales with your infrastructure—maintaining consistent governance no matter how fast you grow.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    id: 6,
    pain: "No Real-Time Risk Context for Executive Decisions",
    painDetail: "Without normalized, intelligent risk scoring across cloud and SaaS environments, leaders lack a clear understanding of what matters most right now. Security decisions are made on incomplete or outdated information, increasing business and regulatory exposure.",
    solution: "Executive Risk Intelligence",
    solutionDetail: "Real-time risk scoring with business context—giving leadership actionable insights to make informed security decisions confidently.",
    gradient: "from-purple-500 via-pink-500 to-rose-500"
  },
  {
    id: 7,
    pain: "Inability to Prove Control Effectiveness",
    painDetail: "Policies may exist, but without continuous validation, organizations cannot confidently demonstrate that controls are operating as designed—creating gaps in assurance for auditors, regulators, customers, and the board.",
    solution: "Continuous Control Validation",
    solutionDetail: "Automated testing that proves controls work as designed—providing auditable evidence of effectiveness, not just existence.",
    gradient: "from-rose-500 via-pink-500 to-purple-500"
  },
  {
    id: 8,
    pain: "Security Data Without Intelligence",
    painDetail: "Cloud platforms generate massive volumes of signals and alerts. Without AI-driven correlation and prioritization, teams are overwhelmed by noise—while true risk goes unnoticed.",
    solution: "AI-Driven Risk Prioritization",
    solutionDetail: "Machine learning that cuts through alert fatigue—surfacing critical risks while filtering noise, so teams focus on what truly matters.",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500"
  },
];

function ChallengeCard({ challenge, index }: { challenge: typeof challenges[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.21, 0.45, 0.27, 0.9] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[380px]"
    >
      <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-950/50 via-neutral-950/30 to-neutral-950/50 backdrop-blur-xl border border-white/[0.02] hover:border-white/[0.05] transition-all duration-700">
        
        {/* Gradient border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(to bottom right, transparent 30%, ${isHovered ? 'rgba(168, 85, 247, 0.1)' : 'transparent'} 100%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.7 }}
        />

        {/* Left accent line */}
        <motion.div
          className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b ${challenge.gradient}`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* Content container */}
        <div className="relative h-full p-8 flex flex-col">
          
          {/* Top section */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              animate={{
                opacity: isHovered ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[10px] font-mono text-neutral-600 tracking-[0.2em] uppercase">
                Problem {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
            
            <motion.div
              className="w-8 h-8 rounded-lg bg-white/[0.02] flex items-center justify-center"
              animate={{
                backgroundColor: isHovered ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.02)",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.svg
                className="w-4 h-4 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  rotate: isHovered ? 90 : 0,
                  color: isHovered ? "rgb(168, 85, 247)" : "rgb(82, 82, 82)",
                }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </motion.svg>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-4 relative">
              {/* Problem Content */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: isHovered ? 0 : 1,
                  y: isHovered ? -10 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-normal text-white leading-[1.3] mb-4 tracking-tight">
                  {challenge.pain}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {challenge.painDetail}
                </p>
              </motion.div>

              {/* Solution Content */}
              <motion.div
                className="space-y-4"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                }}
                transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
                style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className={`h-px flex-1 bg-gradient-to-r ${challenge.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="text-[10px] font-mono text-neutral-600 tracking-[0.2em] uppercase">
                    Solution
                  </span>
                </div>
                
                <h3 className={`text-2xl font-normal bg-gradient-to-r ${challenge.gradient} bg-clip-text text-transparent leading-[1.3] tracking-tight`}>
                  {challenge.solution}
                </h3>
                
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {challenge.solutionDetail}
                </p>
              </motion.div>
            </div>

            {/* Bottom indicator */}
            <motion.div
              className="flex items-center gap-3 mt-6"
              animate={{
                opacity: isHovered ? 0 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex gap-1"
                animate={{
                  gap: isHovered ? "6px" : "4px",
                }}
              >
                <div className="w-1 h-1 rounded-full bg-neutral-700" />
                <div className="w-1 h-1 rounded-full bg-neutral-800" />
                <div className="w-1 h-1 rounded-full bg-neutral-900" />
              </motion.div>
              <span className="text-[10px] text-neutral-700 font-light tracking-wider">
                Hover to reveal
              </span>
            </motion.div>
          </div>
        </div>

        {/* Ambient glow on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0`}
          animate={{
            opacity: isHovered ? 0.03 : 0,
          }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </motion.div>
  );
}

export default function MultiCloudChallenge() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      
      {/* Minimal ambient effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-pink-600/[0.02] rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
{/* Header */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-center mb-16 md:mb-24"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
      <span className="text-white">Why Cloud Governance </span>
      <br className="hidden sm:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
        Breaks Without Us
      </span>
    </h2>
  </motion.div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed px-4"
  >
    Every security gap, manual process, and reactive incident costs you time, money, and trust.{" "}
    <span className="text-white font-semibold">Hover each card to discover our AI-powered solutions.</span>
  </motion.p>
</motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.button
            className="group relative px-10 py-4 rounded-full bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] text-white font-light text-base overflow-hidden backdrop-blur-xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Gradient glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            
            <span className="relative flex items-center gap-3">
              See Suronex in Action
              <motion.svg
                className="w-4 h-4"
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

