"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
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
    painDetail: "Operating across multi-cloud, cloud-native applications, and SaaS environments without a centralized control plane results in fragmented visibility.",
    solution: "Unified Visibility Across Your Entire Cloud Stack",
    solutionDetail: "Centralize risk and compliance across AWS, Azure, GCP, cloud-native workloads, and SaaS applications in a single control plane.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    icon: Shield,
  },
  {
    id: 2,
    pain: "Manual Compliance in Dynamic Cloud Environments",
    painDetail: "Cloud infrastructure changes continuously, but compliance processes remain static. Teams rely on spreadsheets and periodic checks that quickly become outdated.",
    solution: "Continuous, Automated Compliance for Dynamic Cloud",
    solutionDetail: "Replace manual checklists with continuous compliance automation. As your cloud changes, controls are evaluated in real time, evidence is collected automatically, and compliance posture stays current.",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    icon: FileCheck,
  },
  {
    id: 3,
    pain: "Audit Readiness Is Always a Fire Drill",
    painDetail: "Without continuous control validation, audits for ISO 27001, SOC 2, PCI DSS, or GDPR require weeks of manual preparation—draining resources and increasing gaps.",
    solution: "Always-On Audit Readiness",
    solutionDetail: "Stay audit-ready at all times, not just during audit season. Controls are continuously validated and mapped across frameworks like ISO 27001, SOC 2, PCI DSS, and GDPR—so audits become a reporting exercise, not a scramble.",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    icon: AlertTriangle,
  },
  {
    id: 4,
    pain: "Risk Is Discovered Too Late",
    painDetail: "Lacking real-time monitoring, control failures and misconfigurations are identified only after incidents occur, forcing teams into reactive remediation.",
    solution: "Proactive Risk Detection",
    solutionDetail: "Identify and prioritize risk before it becomes an incident. Real-time monitoring and intelligent correlation surface misconfigurations and control failures early, enabling faster remediation and reducing business impact.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    icon: Radar,
  },
  {
    id: 5,
    pain: "Cloud Scale Outpaces Governance",
    painDetail: "As cloud adoption accelerates, traditional tools and manual workflows fail to scale. Governance becomes inconsistent and compliance posture erodes.",
    solution: "Governance That Scales with Cloud Growth",
    solutionDetail: "Scale compliance and governance automatically as your cloud footprint grows. Standardized policies, inherited controls, and centralized reporting ensure consistent governance—without adding operational overhead or slowing innovation.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: Zap,
  },
  {
    id: 6,
    pain: "No Real-Time Risk Context for Executive Decisions",
    painDetail: "Without normalized risk scoring across cloud and SaaS environments, leaders lack understanding of what matters most. Security decisions are made on incomplete information.",
    solution: "Executive-Ready Risk Intelligence in Real Time",
    solutionDetail: "Deliver normalized, AI-driven risk scoring across cloud and SaaS environments. Surface what matters most right now with real-time risk context—so executives can prioritize decisions based on business impact, not raw alerts.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    icon: Target,
  },
  {
    id: 7,
    pain: "Inability to Prove Control Effectiveness",
    painDetail: "Policies may exist, but without continuous validation, organizations cannot demonstrate that controls are operating as designed—creating gaps in assurance.",
    solution: "Continuous Validation of Control Effectiveness",
    solutionDetail: "Prove that security and compliance controls work—at any point in time. Automatically validate controls across environments, maintain live evidence, and demonstrate operational effectiveness to auditors, regulators, customers, and the board.",
    gradient: "from-rose-500 via-pink-500 to-purple-500",
    icon: CheckCircle2,
  },
  {
    id: 8,
    pain: "Security Data Without Intelligence",
    painDetail: "Cloud platforms generate massive volumes of signals and alerts. Without AI-driven correlation, teams are overwhelmed by noise—while true risk goes unnoticed.",
    solution: "Turn Security Data into Actionable Intelligence",
    solutionDetail: "Cut through alert noise with AI-driven correlation and prioritization. Aggregate signals across cloud and SaaS, identify patterns, suppress false positives, and focus teams on the risks that truly require action.",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    icon: Brain,
  },
];

function ChallengeCard({ challenge, index }: { challenge: typeof challenges[0]; index: number }) {
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
      className="group relative min-h-[440px] sm:min-h-[460px] md:min-h-[480px]"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-950/50 via-neutral-950/30 to-neutral-950/50 backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.1] transition-all duration-700">

        {/* Gradient border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
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

        {/* Content container */}
        <div className="relative h-full p-6 flex flex-col z-10">

          {/* Top section with icon */}
          <div className="flex items-start justify-between mb-3 flex-shrink-0">
            <motion.div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.03] flex items-center justify-center relative overflow-hidden"
              animate={{
                backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} rounded-xl`}
                animate={{
                  opacity: isHovered ? 0.2 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <IconComponent
                  className="w-5 h-5 transition-colors duration-500"
                  style={{
                    color: isHovered ? 'rgb(168, 85, 247)' : 'rgb(115, 115, 115)',
                  }}
                  strokeWidth={1.5}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Main scrollable content area */}
          <div className="flex-1 min-h-0 relative mb-2">
            {/* Problem Content */}
            <motion.div
              className="h-full pr-1"
              animate={{
                opacity: isHovered ? 0 : 1,
                pointerEvents: isHovered ? 'none' : 'auto',
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-medium text-white leading-tight mb-3 tracking-tight">
                {challenge.pain}
              </h3>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed text-left">
                {challenge.painDetail}
              </p>
            </motion.div>

            {/* Solution Content */}
            <motion.div
              className="absolute inset-0 h-full overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20"
              animate={{
                opacity: isHovered ? 1 : 0,
                pointerEvents: isHovered ? 'auto' : 'none',
              }}
              transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <motion.div
                  className={`h-[2px] flex-1 bg-gradient-to-r ${challenge.gradient} relative overflow-hidden`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: isHovered ? ['-100%', '200%'] : '-100%',
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 0.5,
                    }}
                  />
                </motion.div>
                <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase flex-shrink-0">
                  Solution
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${challenge.gradient} bg-clip-text text-transparent leading-tight tracking-tight mb-2 sm:mb-3`}>
                {challenge.solution}
              </h3>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-left">
                {challenge.solutionDetail}
              </p>
            </motion.div>
          </div>
          {/* Bottom indicator with logo */}
          <motion.div
            className="flex items-center gap-2 flex-shrink-0 pt-2"
            animate={{
              opacity: isHovered ? 0 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-1">
              <motion.div
                className={`w-1 h-1 rounded-full bg-gradient-to-r ${challenge.gradient}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className={`w-1 h-1 rounded-full bg-gradient-to-r ${challenge.gradient}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3,
                }}
              />
              <motion.div
                className={`w-1 h-1 rounded-full bg-gradient-to-r ${challenge.gradient}`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6,
                }}
              />
            </div>
            <span className="text-[9px] sm:text-[10px] text-neutral-500 tracking-wide flex items-center gap-1.5">
              Hover to Reveal Solution
            </span>
          </motion.div>
        </div>

        {/* Ambient glow on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 pointer-events-none rounded-2xl`}
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
    <section className="relative py-8 sm:py-12 md:py-16 bg-[#0a0a0a] overflow-hidden">

      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/[0.03] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03],
            x: [0, 30, 0],
            y: [0, -20, 0],
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
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-600/[0.025] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.025, 0.045, 0.025],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-4">
              <span className="text-white">Why Cloud Governance </span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
                Breaks Without an Intelligent Tool
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-4"
          >
            Every security gap, manual process, and reactive incident costs you time, money, and trust.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

