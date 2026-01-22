"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  Share2,
  CheckCircle2,
  ArrowRight,
  Shield,
  Eye,
  Zap,
  BarChart3,
  Settings,
  Cloud,
  AlertTriangle,
  Lock,
  FileCheck,
  TrendingUp,
  Code,
  Activity,
  Server,
  Layers
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

const whitepaperContent = {
  title: "CSPM Solution and Its Importance to Startup Organizations",
  subtitle: "How Cloud Security Posture Management drives startup success through secure cloud environments, compliance, and investor confidence",
  category: "Resources",
  author: "Suronex",
  publishedDate: "July 26, 2025",
  readingTime: "16 min read",
};

const keyFunctions = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Visibility",
    desc: "CSPM tools provide comprehensive visibility into cloud assets, configurations, and security settings.",
    color: "#D33E9E"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Continuous Monitoring",
    desc: "They continuously monitor cloud environments for security deviations and potential risks.",
    color: "#8B4FB8"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Vulnerability Detection",
    desc: "CSPM solutions detect vulnerabilities and misconfigurations that could expose sensitive data.",
    color: "#3530BA"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Compliance Monitoring",
    desc: "Help organizations ensure compliance with industry regulations and security standards.",
    color: "#D33E9E"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automated Remediation",
    desc: "Many CSPM tools offer automated remediation capabilities to quickly address security issues.",
    color: "#8B4FB8"
  }
];

const whyItMatters = [
  {
    title: "Addressing Cloud Complexity",
    desc: "Cloud environments are dynamic and complex. CSPM tools automate the process of assessing and monitoring cloud security.",
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: "Mitigating Misconfigurations",
    desc: "CSPM solutions identify and remediate misconfigurations like open S3 buckets, weak access controls, and unencrypted data.",
    icon: <Lock className="w-5 h-5" />
  },
  {
    title: "Policy Enforcement and Compliance",
    desc: "CSPM tools automate compliance checks, providing reports and alerts on violations.",
    icon: <FileCheck className="w-5 h-5" />
  },
  {
    title: "Enhancing Visibility",
    desc: "CSPM provides a centralized view of an organization's cloud security posture across multiple cloud environments.",
    icon: <Eye className="w-5 h-5" />
  },
  {
    title: "Automating Remediation",
    desc: "Automated remediation capabilities reduce the time and effort required to respond to threats.",
    icon: <Zap className="w-5 h-5" />
  }
];

const implementationSteps = [
  "Define Objectives",
  "Identify Compliance Requirements",
  "Select the Right CSPM Tool",
  "Deploy CSPM Solution",
  "Integrate with Other Cloud Security Tools",
  "Cloud Asset Inventory",
  "Configure Cloud Security Policies",
  "Setup Monitoring and Alerting",
  "Detect and Remediate Misconfigurations",
  "Implement Automation and Orchestration",
  "Regularly Review and Remediate Findings",
  "Discover Misuse & Compliance Violations",
  "Continuously Improve Security Policies",
  "Use Secure Coding Standards",
  "Manage Updates and Patches",
  "Cloud Cost Optimization in Relation to Security",
  "Train and Educate Your Security Team",
  "Refine the Process"
];

const cspmFactors = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Integration with your cloud environment",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Automation capabilities",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: "Threat detection capabilities",
    gradient: "from-orange-400 to-red-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Reporting and analytics",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Customizable security policies",
    gradient: "from-indigo-400 to-purple-500"
  }
];

const caseStudies = [
  {
    number: "01",
    title: "Enterprise-Scale Multi-Cloud Governance",
    industry: "Financial Services / Healthcare",
    icon: <FileCheck className="w-8 h-8" />,
    challenge: "Large, regulated enterprises with extensive multi-cloud footprints need centralized visibility and consistent security policies across AWS, Azure, and GCP.",
    cspmRole: [
      "Automated compliance checks: CSPM continuously scans for violations, generating detailed reports and alerts",
      "Unified policy enforcement: Define and apply security policies across all cloud platforms",
      "Risk prioritization: Identify and prioritize critical misconfigurations and vulnerabilities"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    number: "02",
    title: "DevSecOps Integration",
    industry: "Software Development / Technology",
    icon: <Code className="w-8 h-8" />,
    challenge: "Organizations embracing DevSecOps practices integrate CSPM into CI/CD pipelines to shift security left and automate security checks.",
    cspmRole: [
      "Infrastructure-as-Code (IaC) scanning: Analyze IaC templates for security misconfigurations",
      "Runtime security monitoring: Continuously monitor production environments for threats",
      "Automated remediation: Automatically remediate certain misconfigurations"
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    number: "03",
    title: "Real-Time Threat Detection",
    industry: "E-commerce / Online Services",
    icon: <Activity className="w-8 h-8" />,
    challenge: "Organizations with high-volume, dynamic cloud environments need to detect and respond to threats in real time to minimize attack impact.",
    cspmRole: [
      "Anomaly detection: Identify unusual activity and potential threats",
      "Threat intelligence integration: Integrate with threat intelligence feeds to identify known threats",
      "Automated incident response: Automate certain incident response actions"
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  }
];

export default function CSPMImportanceForStartups() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#D33E9E]/30 relative font-sans">

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] origin-left z-[1001]"
      />

      {/* Background */}
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

            {/* Back Button */}
            <Link
              href="/whitepaper"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Library
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
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

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10 mb-12 text-sm text-gray-400">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center text-white font-bold text-xs">
                    S
                  </div>
                  <span className="text-white">{whitepaperContent.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {whitepaperContent.publishedDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {whitepaperContent.readingTime}
                </div>
              </div>
              {/*
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D33E9E] text-white hover:bg-[#D33E9E]/80 transition-colors font-medium">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
              */}
            </div>

            {/* Content */}
            <article className="prose prose-invert prose-lg max-w-none">

              {/* Introduction */}
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Introduction
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                For startups, it is crucial to secure cloud environments, protect data, maintain compliance with various applicable regulations, mitigate potential risks, and attract investment for sustainability and long-term success.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                By prioritizing cloud security and adopting AI, startups can navigate the complex digital landscape with confidence, ensuring they are well-equipped to seize opportunities and overcome challenges in their journey to success.
              </p>

              {/* Hero Image */}
              {/* Hero Image
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/startup-cspm-hero.jpg"
                  alt="Startup Cloud Security Visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs text-gray-400">
                  📸 Image: startup-cspm-hero.jpg - Startup team securing cloud infrastructure with CSPM dashboard
                </div>
              </div>
              */}

              {/* What is CSPM */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                What is CSPM (Cloud Security Posture Management)?
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Cloud Security Posture Management (CSPM) refers to a set of tools and practices to ensure the security and compliance of cloud resources and workloads. CSPM helps organizations ensure their cloud infrastructure is configured correctly to avoid vulnerabilities and misconfigurations that could lead to security breaches.
              </p>

              {/* Key Functions */}
              <h3 className="text-2xl font-bold mb-6 text-white">Key Functions of Cloud Security Posture Management</h3>

              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                {keyFunctions.map((func, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${func.color}20`, color: func.color }}
                    >
                      {func.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{func.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{func.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Why CSPM Matters */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Why Cloud Security Posture Management Matters
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Cloud Security Posture Management (CSPM) has become an essential component of modern cybersecurity, particularly as organizations increasingly rely on cloud infrastructure.
              </p>

              <div className="space-y-4 my-12 not-prose">
                {whyItMatters.map((reason, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#D33E9E]/30 transition-all"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center text-white">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CSPM Architecture */}
              {/* CSPM Architecture
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/cspm-architecture-diagram.png"
                  alt="CSPM Architecture and Workflow"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: cspm-architecture-diagram.png - CSPM components and data flow architecture
                </div>
              </div>
              */}

              {/* Implementation */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Cloud Security Posture Management Implementation
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Implementing Cloud Security Posture Management (CSPM) effectively involves a structured approach. Here's a comprehensive step-by-step guide:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-12 not-prose">
                {implementationSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#3530BA]/30 transition-all"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-white text-sm font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>

              {/* Animated CSPM Factors Section */}
              <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Factors to Select CSPM Solution
              </h2>

              {/* Animated Hexagonal Flow Chart */}
              <div className="relative py-16 px-6 my-16 rounded-3xl bg-gradient-to-br from-[#0A1628] to-[#030014] border border-cyan-500/20 overflow-hidden not-prose">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative flex flex-col items-center gap-0">
                  {cspmFactors.map((factor, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2, duration: 0.5 }}
                      className="relative flex items-center w-full max-w-2xl"
                      style={{
                        justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                        marginLeft: idx % 2 === 0 ? '0' : 'auto',
                        marginRight: idx % 2 === 0 ? 'auto' : '0'
                      }}
                    >
                      {/* Connecting Line */}
                      {idx < cspmFactors.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 + 0.3, duration: 0.4 }}
                          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-blue-500"
                          style={{
                            top: '100%',
                            transformOrigin: 'top'
                          }}
                        />
                      )}

                      {/* Hexagon Container */}
                      <div className="relative group">
                        {/* Hexagon Background */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="relative w-32 h-32"
                        >
                          {/* Outer Glow */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${factor.gradient} opacity-20 blur-xl`} />

                          {/* Hexagon Shape using clip-path */}
                          <div
                            className={`absolute inset-2 bg-gradient-to-br ${factor.gradient} opacity-10`}
                            style={{
                              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                            }}
                          />

                          {/* Inner Hexagon Border */}
                          <div
                            className={`absolute inset-3 bg-[#0A1628] border-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors`}
                            style={{
                              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                            }}
                          />

                          {/* Icon */}
                          <div className="absolute inset-0 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            {factor.icon}
                          </div>

                          {/* Pulse Animation */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.3
                            }}
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${factor.gradient} opacity-20`}
                            style={{
                              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                            }}
                          />
                        </motion.div>

                        {/* Label */}
                        <motion.div
                          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 + 0.2 }}
                          className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? 'left-full ml-6' : 'right-full mr-6'} whitespace-nowrap`}
                        >
                          <div className="px-6 py-3 rounded-xl bg-white/5 border border-cyan-500/30 backdrop-blur-sm">
                            <p className="text-white font-semibold text-sm">{factor.title}</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-cyan-500/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-blue-500/20 rounded-full" />
              </div>

              {/* Case Studies */}
              <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Cloud Security Case Studies
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                While detailed CSPM case studies are often kept confidential, here are three key areas where CSPM's impact is demonstrably significant:
              </p>

              <div className="space-y-8 my-12 not-prose">
                {caseStudies.map((study, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className={`relative p-8 rounded-2xl bg-gradient-to-br ${study.gradient} border ${study.borderColor} overflow-hidden`}
                  >
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-white/5">
                      {study.number}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="shrink-0 text-white/80">
                          {study.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                            {study.industry}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {study.title}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" /> Challenge
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> CSPM's Role
                          </div>
                          <div className="space-y-2">
                            {study.cspmRole.map((role, roleIdx) => (
                              <div key={roleIdx} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03]">
                                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{role}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Conclusion */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Conclusion
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Cloud Security Posture Management (CSPM) has become an indispensable tool for organizations navigating the complexities of cloud security. Here's a summary of its significance:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#D33E9E]" />
                    Proactive Security
                  </h4>
                  <p className="text-sm text-gray-400">CSPM shifts security from reactive to proactive, enabling organizations to identify and address risks before exploitation.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#8B4FB8]" />
                    Enhanced Visibility
                  </h4>
                  <p className="text-sm text-gray-400">Provides comprehensive visibility into cloud assets and configurations, maintaining control over security posture.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-[#3530BA]" />
                    Automated Compliance
                  </h4>
                  <p className="text-sm text-gray-400">Automates compliance monitoring and reporting, simplifying regulatory requirements.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/[0-02] border border-white/10">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#D33E9E]" />
                    Continuous Improvement
                  </h4>
                  <p className="text-sm text-gray-400">Facilitates continuous monitoring and improvement of cloud security practices.</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                By implementing and effectively utilizing CSPM tools, organizations can confidently leverage the benefits of cloud computing while minimizing security risks.
              </p>

              {/* Final Stats */}
              <div className="grid md:grid-cols-4 gap-4 my-16 not-prose">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <div className="text-4xl font-black text-[#D33E9E] mb-2">90%</div>
                  <div className="text-xs text-gray-400">Faster misconfiguration detection</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#8B4FB8]/10 to-transparent border border-[#8B4FB8]/20">
                  <div className="text-4xl font-black text-[#8B4FB8] mb-2">75%</div>
                  <div className="text-xs text-gray-400">Reduction in compliance prep time</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20">
                  <div className="text-4xl font-black text-[#3530BA] mb-2">85%</div>
                  <div className="text-xs text-gray-400">Automated remediation rate</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <div className="text-4xl font-black text-[#D33E9E] mb-2">24/7</div>
                  <div className="text-xs text-gray-400">Continuous cloud monitoring</div>
                </div>
              </div>

            </article>

            {/* CTA Section */}
            <div className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              <div className="bg-[#030014] rounded-[22px] p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to secure your startup's cloud infrastructure?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Discover how Suronex CSPM can help your startup build investor confidence, maintain compliance, and scale securely.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                >
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

