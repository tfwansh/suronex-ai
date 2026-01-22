"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import { 
  Shield, 
  AlertTriangle, 
  FileCheck, 
  Radar, 
  Zap, 
  Target, 
  CheckCircle2, 
  Brain 
} from "lucide-react";

const challenges = [
  {
    id: 1,
    pain: "No Unified View of Cloud Risk",
    painDetail: "Operating across multi-cloud, cloud-native applications, and SaaS environments without a centralized control plane results in fragmented visibility. Security and compliance risks remain hidden across accounts, subscriptions, and services.",
    solution: "Single Pane of Glass",
    solutionDetail: "Unified dashboard aggregating security posture across AWS, Azure, GCP, and 100+ SaaS apps—providing complete visibility and eliminating blind spots.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    icon: Shield,
    // lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_cloud_security.json" // Add your Lottie URL here
  },
  {
    id: 2,
    pain: "Manual Compliance in Dynamic Cloud Environments",
    painDetail: "Cloud infrastructure changes continuously, but compliance processes remain static. Teams rely on spreadsheets, screenshots, and periodic checks that quickly become outdated and inaccurate.",
    solution: "Continuous Automated Compliance",
    solutionDetail: "Real-time control monitoring that adapts to infrastructure changes automatically—replacing manual tracking with intelligent, always-current compliance validation.",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    icon: FileCheck,
  },
  {
    id: 3,
    pain: "Audit Readiness Is Always a Fire Drill",
    painDetail: "Without continuous control validation, audits for ISO 27001, SOC 2, PCI DSS, or GDPR require weeks of manual preparation—draining resources and increasing the likelihood of gaps, delays, and audit findings.",
    solution: "Audit-Ready Evidence 24/7",
    solutionDetail: "Pre-mapped controls with automated evidence collection across 35+ frameworks—turning weeks of prep into instant compliance reporting.",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    icon: AlertTriangle,
  },
  {
    id: 4,
    pain: "Risk Is Discovered Too Late",
    painDetail: "Lacking real-time and intelligent monitoring, control failures and misconfigurations are identified only after incidents occur, forcing teams into reactive remediation and executive escalation.",
    solution: "Proactive Risk Detection",
    solutionDetail: "AI-powered continuous monitoring that identifies and alerts on control failures instantly—before they escalate into security incidents.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    icon: Radar,
  },
  {
    id: 5,
    pain: "Cloud Scale Outpaces Governance",
    painDetail: "As cloud adoption accelerates, traditional tools and manual workflows fail to scale. Governance becomes inconsistent, compliance posture erodes, and security teams struggle to keep pace with business growth.",
    solution: "Governance at Cloud Speed",
    solutionDetail: "Automated policy enforcement that scales with your infrastructure—maintaining consistent governance no matter how fast you grow.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: Zap,
  },
  {
    id: 6,
    pain: "No Real-Time Risk Context for Executive Decisions",
    painDetail: "Without normalized, intelligent risk scoring across cloud and SaaS environments, leaders lack a clear understanding of what matters most right now. Security decisions are made on incomplete or outdated information, increasing business and regulatory exposure.",
    solution: "Executive Risk Intelligence",
    solutionDetail: "Real-time risk scoring with business context—giving leadership actionable insights to make informed security decisions confidently.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    icon: Target,
  },
  {
    id: 7,
    pain: "Inability to Prove Control Effectiveness",
    painDetail: "Policies may exist, but without continuous validation, organizations cannot confidently demonstrate that controls are operating as designed—creating gaps in assurance for auditors, regulators, customers, and the board.",
    solution: "Continuous Control Validation",
    solutionDetail: "Automated testing that proves controls work as designed—providing auditable evidence of effectiveness, not just existence.",
    gradient: "from-rose-500 via-pink-500 to-purple-500",
    icon: CheckCircle2,
  },
  {
    id: 8,
    pain: "Security Data Without Intelligence",
    painDetail: "Cloud platforms generate massive volumes of signals and alerts. Without AI-driven correlation and prioritization, teams are overwhelmed by noise—while true risk goes unnoticed.",
    solution: "AI-Driven Risk Prioritization",
    solutionDetail: "Machine learning that cuts through alert fatigue—surfacing critical risks while filtering noise, so teams focus on what truly matters.",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    icon: Brain,
  },
];

function ChallengeBar({ challenge, index }: { challenge: typeof challenges[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = challenge.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.21, 0.45, 0.27, 0.9] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Fixed height container */}
      <div className="relative h-[220px] rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-950/50 via-neutral-950/30 to-neutral-950/50 backdrop-blur-xl border border-white/[0.02] hover:border-white/[0.05] transition-all duration-700">

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
          className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${challenge.gradient}`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* Problem Content */}
        <motion.div
          className="absolute inset-0 p-10 flex items-start justify-between"
          animate={{
            opacity: isHovered ? 0 : 1,
            x: isHovered ? -50 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex-1 pr-8">
            <span className="text-xs font-mono text-neutral-500 tracking-[0.25em] uppercase block mb-5">
              Problem {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-3xl font-medium text-white leading-tight tracking-tight mb-5">
              {challenge.pain}
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {challenge.painDetail}
            </p>
          </div>

          {/* Animated Icon */}
          <motion.div
            className="w-16 h-16 rounded-xl bg-white/[0.03] flex items-center justify-center flex-shrink-0 relative overflow-hidden"
            animate={{
              backgroundColor: isHovered ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.03)",
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient glow behind icon */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0`}
              animate={{
                opacity: isHovered ? 0.2 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div
              animate={{
                rotate: isHovered ? [0, -10, 10, 0] : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <IconComponent 
                className={`w-8 h-8 ${isHovered ? 'text-purple-400' : 'text-neutral-500'}`}
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Solution Content - Left title | Right description */}
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 p-10"
            >
              {/* Top line with SOLUTION label */}
              <div className="flex items-center gap-6 mb-8">
                <motion.div
                  className={`h-[2px] w-32 bg-gradient-to-r ${challenge.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
                <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
                  Solution
                </span>
              </div>

              {/* Solution Layout: Title on left | Vertical bar | Description on right */}
              <div className="flex items-start gap-8 h-[calc(100%-80px)]">
                {/* Left: Solution Title (1/3) */}
                <div className="flex-shrink-0 w-[35%]">
                  <h3 className={`text-4xl font-semibold bg-gradient-to-r ${challenge.gradient} bg-clip-text text-transparent leading-tight tracking-tight`}>
                    {challenge.solution}
                  </h3>
                </div>

                {/* Vertical Separator Bar */}
                <motion.div
                  className={`w-[2px] self-stretch bg-gradient-to-b ${challenge.gradient} opacity-40`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  style={{ transformOrigin: "top" }}
                />

                {/* Right: Solution Description (2/3) */}
                <div className="flex-1">
                  <p className="text-xl text-white leading-relaxed">
                    {challenge.solutionDetail}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Liquid Flow Overlay - RIGHT to LEFT */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "0%" }}
          animate={{
            x: isHovered ? "-100%" : "0%",
          }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-l ${challenge.gradient} opacity-10`}
            style={{
              maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Ambient glow on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 pointer-events-none`}
          animate={{
            opacity: isHovered ? 0.03 : 0,
          }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </motion.div>
  );
}

export default function MultiCloudChallenge2() {
  const [showAll, setShowAll] = useState(false);
  const displayedChallenges = showAll ? challenges : challenges.slice(0, 4);

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Enhanced ambient effects with more movement */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
            x: [0, 50, 0],
            y: [0, -30, 0],
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
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Additional floating orbs */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-indigo-600/[0.025] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.025, 0.045, 0.025],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 18,
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

        {/* Stacked Bars - Progressive Disclosure */}
        <div className="space-y-5 mb-12">
          <AnimatePresence mode="sync">
            {displayedChallenges.map((challenge, index) => (
              <ChallengeBar key={challenge.id} challenge={challenge} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-16"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3 rounded-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] text-neutral-300 hover:text-white font-light text-sm overflow-hidden backdrop-blur-xl transition-all duration-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative flex items-center gap-2">
                View All 8 Challenges
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        )}

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
            <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <span className="relative flex items-center gap-3">
              See Suronex in Action
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

