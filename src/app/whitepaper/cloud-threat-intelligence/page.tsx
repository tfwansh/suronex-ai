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
  AlertTriangle,
  Zap,
  Target,
  Eye,
  Brain,
  Server,
  Lock,
  TrendingUp,
  Activity,
  Users,
  Search,
  Bell,
  Crosshair,
  FileWarning
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

const whitepaperContent = {
  title: "Cloud Threat Intelligence: Strengthening Security in the Digital Age",
  subtitle: "Leveraging real-time insights and threat data to proactively safeguard cloud assets against emerging cyber threats",
  category: "Resources",
  author: "Suronex",
  publishedDate: "June 30, 2025",
  readingTime: "14 min read",
};

const ctiBenefits = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Proactive Threat Detection",
    desc: "CTI enables security teams to identify potential threats before they can exploit vulnerabilities.",
    color: "#D33E9E"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Enhanced Incident Response",
    desc: "By understanding attack patterns, organizations can respond swiftly and effectively to security incidents.",
    color: "#8B4FB8"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Improved Compliance",
    desc: "Real-time threat insights help businesses align with regulatory requirements and industry best practices.",
    color: "#3530BA"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reduced Attack Surface",
    desc: "CTI helps organizations implement security controls that minimize exposure to cloud-specific threats.",
    color: "#D33E9E"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Strategic Decision-Making",
    desc: "Security teams can prioritize risks and allocate resources effectively based on intelligence-driven insights.",
    color: "#8B4FB8"
  }
];

const caseStudies = [
  {
    number: "01",
    title: "Defending Against Ransomware in the Cloud",
    industry: "Financial Services",
    icon: <Lock className="w-8 h-8" />,
    challenge: "A multinational financial services company experienced an attempted ransomware attack targeting its cloud-based data storage.",
    solution: "By leveraging Cloud Threat Intelligence, the organization detected unusual activity linked to a known ransomware group. CTI helped the security team isolate the affected instances, block malicious IPs, and prevent data encryption, saving the company from potential financial and reputational losses.",
    outcome: "Zero data loss, $5M+ in potential damages avoided",
    gradient: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/30"
  },
  {
    number: "02",
    title: "Preventing Cloud Account Takeover",
    industry: "E-commerce",
    icon: <Users className="w-8 h-8" />,
    challenge: "A leading e-commerce platform faced an increased number of phishing attacks aimed at compromising cloud administrator accounts.",
    solution: "With CTI, the security team identified a trend in credential-stuffing attempts originating from specific threat actors. By enforcing multi-factor authentication (MFA) and using behavior analytics, the company mitigated unauthorized access attempts and strengthened account security.",
    outcome: "95% reduction in successful account compromise attempts",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    number: "03",
    title: "Detecting Insider Threats",
    industry: "Healthcare",
    icon: <Eye className="w-8 h-8" />,
    challenge: "A healthcare provider using cloud-based electronic medical records (EMR) detected unusual data access patterns from an internal user.",
    solution: "CTI revealed that the behavior matched tactics used by insider threats in previous incidents. This intelligence allowed the organization to investigate and mitigate the risk, ensuring sensitive patient data remained secure.",
    outcome: "Protected 100K+ patient records from unauthorized access",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  }
];

const implementationStrategies = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "Leveraging Threat Intelligence Platforms (TIPs)",
    desc: "Utilize platforms that aggregate, analyze, and distribute threat intelligence in real time."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Collaboration with Threat Intelligence Feeds",
    desc: "Subscribe to trusted threat intelligence sources such as ISACs (Information Sharing and Analysis Centers), cybersecurity vendors, and government agencies."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI and Machine Learning Integration",
    desc: "Use AI-driven analytics to detect anomalies and automate threat detection in cloud environments."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Continuous Monitoring and Threat Hunting",
    desc: "Implement real-time monitoring and proactive threat-hunting techniques to identify potential security breaches."
  }
];

const cspmFeatures = [
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Automated Compliance Monitoring",
    desc: "Ensures continuous compliance with industry standards such as GDPR, HIPAA, and NIST."
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Real-Time Threat Detection",
    desc: "AI-driven analytics identify misconfigurations and potential vulnerabilities before exploitation."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Adaptive Security Posture Management",
    desc: "Dynamically suggest security controls based on evolving threat intelligence."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Integrated Incident Response",
    desc: "Automates remediation workflows to mitigate threats without manual intervention."
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Cloud Resource Visibility",
    desc: "Provides centralized visibility into multi-cloud environments to detect and respond to security gaps."
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Behavioral Analytics",
    desc: "Uses AI-powered insights to detect anomalies and insider threats."
  }
];

const threatTypes = [
  { emoji: "🎣", name: "Phishing Attacks", percentage: 38 },
  { emoji: "🔒", name: "Ransomware", percentage: 24 },
  { emoji: "☁️", name: "Cloud Misconfigurations", percentage: 18 },
  { emoji: "👤", name: "Insider Threats", percentage: 12 },
  { emoji: "🌐", name: "DDoS Attacks", percentage: 8 }
];

export default function CloudThreatIntelligence() {
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
                As organizations increasingly shift to cloud-based environments, cyber threats continue to evolve, becoming more sophisticated and persistent. Cloud Threat Intelligence (CTI) plays a crucial role in identifying, analyzing, and mitigating security risks that target cloud infrastructures.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                By leveraging real-time insights and threat data, organizations can proactively safeguard their cloud assets and data against emerging cyber threats.
              </p>

              {/* Hero Image Placeholder */}
              {/* Hero Image Placeholder
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/threat-intelligence-hero.jpg"
                  alt="Cloud Threat Intelligence Network Visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs text-gray-400">
                  📸 Image: threat-intelligence-hero.jpg - Global threat map with real-time attack vectors
                </div>
              </div>
              */}

              {/* Understanding CTI */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Understanding Cloud Threat Intelligence
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Cloud Threat Intelligence involves collecting and analyzing data related to cyber threats that target cloud environments. This intelligence includes:
              </p>

              {/* CTI Components Grid */}
              <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#D33E9E]/20 flex items-center justify-center mb-4">
                    <Crosshair className="w-6 h-6 text-[#D33E9E]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Indicators of Compromise (IOCs)</h4>
                  <p className="text-sm text-gray-400">Malicious IPs, domains, file hashes, and URLs</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B4FB8]/10 to-transparent border border-[#8B4FB8]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#8B4FB8]/20 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-[#8B4FB8]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Tactics, Techniques & Procedures (TTPs)</h4>
                  <p className="text-sm text-gray-400">Attack patterns and methodologies used by adversaries</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#3530BA]/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#3530BA]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Threat Actor Profiles</h4>
                  <p className="text-sm text-gray-400">Attribution and characteristics of known attackers</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                By integrating CTI into their security strategy, organizations can anticipate attacks and take preemptive measures to defend their cloud infrastructure.
              </p>

              {/* Threat Landscape Visualization */}
              {/* Threat Landscape Visualization
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/threat-landscape-2025.png"
                  alt="2025 Cloud Threat Landscape"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: threat-landscape-2025.png - Bar chart showing top cloud threats by category
                </div>
              </div>
              */}

              {/* Threat Types Distribution */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 my-12 not-prose">
                <h3 className="text-xl font-bold text-white mb-6">Top Cloud Threats in 2025</h3>
                <div className="space-y-4">
                  {threatTypes.map((threat, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="text-2xl">{threat.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-white">{threat.name}</span>
                          <span className="text-sm font-bold text-[#D33E9E]">{threat.percentage}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${threat.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Key Benefits of Cloud Threat Intelligence
              </h2>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                {ctiBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Benefits Infographic */}
              {/* Benefits Infographic
              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/cti-benefits-infographic.png"
                  alt="Cloud Threat Intelligence Benefits"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: cti-benefits-infographic.png - Circular diagram showing CTI impact on security posture
                </div>
              </div>
              */}

              {/* Case Studies */}
              <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Case Studies
              </h2>

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
                          <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Solution
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                            <span className="font-bold text-white">Outcome:</span>
                            <span className="text-gray-300">{study.outcome}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Case Study Metrics */}
              <div className="grid md:grid-cols-3 gap-6 my-16 not-prose">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
                  <div className="text-4xl font-black text-red-400 mb-2">$5M+</div>
                  <div className="text-sm text-gray-400">Prevented financial loss from ransomware</div>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                  <div className="text-4xl font-black text-blue-400 mb-2">95%</div>
                  <div className="text-sm text-gray-400">Reduction in account compromise attempts</div>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                  <div className="text-4xl font-black text-green-400 mb-2">100K+</div>
                  <div className="text-sm text-gray-400">Patient records protected from insider threats</div>
                </div>
              </div>

              {/* Implementation */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Implementing Cloud Threat Intelligence
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Organizations can adopt CTI by integrating it into their existing security operations and cloud-native security tools. Key implementation strategies include:
              </p>

              {/* Implementation Strategies */}
              <div className="space-y-4 my-12 not-prose">
                {implementationStrategies.map((strategy, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#D33E9E]/30 transition-all group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {strategy.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{strategy.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{strategy.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Implementation Architecture */}
              {/* Implementation Architecture
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/cti-implementation-flow.png"
                  alt="CTI Implementation Architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: cti-implementation-flow.png - Flowchart showing CTI data flow from sources to action
                </div>
              </div>
              */}

              {/* Suronex Solution */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Suronex AI-Driven CSPM Solution
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                To further strengthen cloud security, organizations should adopt a Cloud Security Posture Management (CSPM) solution integrated with AI-driven Cloud Threat Intelligence (CTI). Our AI-Powered CSPM Solution includes:
              </p>

              {/* CSPM Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                {cspmFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#3530BA]/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#3530BA]/20 flex items-center justify-center text-[#3530BA]">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Platform Screenshot */}
              {/* Platform Screenshot
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/suronex-cti-platform.png"
                  alt="Suronex AI-Powered CSPM Platform"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: suronex-cti-platform.png - Dashboard showing real-time threat intelligence and alerts
                </div>
              </div>
              */}

              {/* Solution Benefits Callout */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/10 to-[#3530BA]/10 border border-white/10 my-12 not-prose">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Why Suronex?</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  By implementing this AI-driven CSPM solution, organizations can proactively manage cloud security risks, ensuring a robust and resilient security posture against evolving cyber threats. Our platform combines real-time threat intelligence with automated remediation to keep your cloud environment secure 24/7.
                </p>
              </div>

              {/* Comparison Chart */}
              {/* Comparison Chart
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/traditional-vs-ai-cti.png"
                  alt="Traditional vs AI-Driven CTI Comparison"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: traditional-vs-ai-cti.png - Side-by-side comparison table or chart
                </div>
              </div>
              */}

              {/* Conclusion */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Conclusion
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Cloud Threat Intelligence is a critical component of modern cloud security strategies. By staying ahead of evolving cyber threats, organizations can protect their cloud assets, maintain compliance, and minimize security risks.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                As threat landscapes continue to shift, investing in robust CTI capabilities will be essential in ensuring a resilient and secure cloud infrastructure.
              </p>

              {/* Final Stats */}
              <div className="grid md:grid-cols-4 gap-4 my-16 not-prose">
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#D33E9E] mb-2">78%</div>
                  <div className="text-xs text-gray-400">Faster threat detection</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#8B4FB8] mb-2">62%</div>
                  <div className="text-xs text-gray-400">Reduced false positives</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#3530BA] mb-2">3x</div>
                  <div className="text-xs text-gray-400">ROI on security investments</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#D33E9E] mb-2">24/7</div>
                  <div className="text-xs text-gray-400">Continuous monitoring</div>
                </div>
              </div>

            </article>

            {/* CTA Section */}
            <div className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              <div className="bg-[#030014] rounded-[22px] p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Are you ready to enhance your cloud security posture?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Explore our cutting-edge Cloud Security Posture Management powered with Real-time Threat Intelligence.
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

