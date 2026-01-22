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
  Lock,
  Key,
  Database,
  Eye,
  AlertTriangle,
  Zap,
  TrendingUp,
  FileCheck,
  Users,
  Server,
  Search,
  Activity
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

const whitepaperContent = {
  title: "The Future of Cloud Security: Proactive Identity & Data Protection",
  subtitle: "Building resilient security strategies through proactive identity management and comprehensive data protection",
  category: "Resources",
  author: "Suronex",
  publishedDate: "July 7, 2025",
  readingTime: "10 min read",
};

const identityMeasures = [
  {
    icon: <Key className="w-5 h-5" />,
    title: "Apply least privilege access with Role-Based Access Control (RBAC)",
    desc: "Ensure users only have access to resources necessary for their role"
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Regularly review permissions and detect dormant or high-risk accounts",
    desc: "Continuous auditing to identify and remediate access anomalies"
  }
];

const dataEssentials = [
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Encryption Everywhere",
    desc: "Secure data at rest, in transit, and in use using security tools"
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Data Loss Prevention (DLP)",
    desc: "Implement DLP solutions to monitor and prevent data exfiltration"
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Backups That Work",
    desc: "Regularly back up critical data and test recovery processes with backup tools"
  }
];

const dataProactiveMeasures = [
  "Identify and classify sensitive data for enhanced visibility and monitoring",
  "Perform frequent penetration tests to identify weak points in your data storage and transmission systems"
];

const postureMeasures = [
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Secure log aggregation and threat detection",
    color: "#D33E9E"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Use endpoint and workload protection",
    color: "#8B4FB8"
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Implement CSPM (Cloud Security Posture Management)",
    color: "#3530BA"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Leverage AI-driven tools to identify and prioritize risks while reducing false positives",
    color: "#D33E9E"
  }
];

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Prevent Data Breaches",
    desc: "Early detection stops threats before they escalate.",
    gradient: "from-red-500/10 to-pink-500/10",
    borderColor: "border-red-500/20"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Ensure Regulatory Compliance",
    desc: "Stay compliant with standards like GDPR, HIPAA, and ISO 27001.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Strengthen Trust",
    desc: "Robust security builds confidence with clients and stakeholders.",
    gradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Reduce Costs",
    desc: "Proactive measures minimize the financial impact of breaches and downtime.",
    gradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20"
  }
];

export default function FutureCloudSecurity() {
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
              <p className="text-xl leading-relaxed text-white/90 mb-12">
                In today's cloud-driven world, cybersecurity is no longer optional—it's the backbone of business resilience. Protecting identities, securing client and organizational data, and adopting proactive security measures are critical to staying ahead of evolving threats. Here's how modern Security Monitoring strategies can empower your organization to build a robust security posture and safeguard what matters most.
              </p>

              {/* Hero Image Placeholder */}
              {/* Hero Image Placeholder
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/future-security-hero.jpg"
                  alt="Future of Cloud Security Visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs text-gray-400">
                  📸 Image: future-security-hero.jpg - Futuristic cloud security network with identity and data protection layers
                </div>
              </div>
              */}

              {/* Key Pillars */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Key Pillars of Cloud Security: Data & Identity
              </h2>

              {/* Pillar 1: Identity */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20 my-12 not-prose">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#D33E9E]/20 flex items-center justify-center">
                    <Key className="w-7 h-7 text-[#D33E9E]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#D33E9E] uppercase tracking-wider mb-1">Pillar 1</div>
                    <h3 className="text-2xl font-bold text-white">Securing Identities: The Gateway to Your Systems</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Identities are the first line of defense. Protecting them ensures only legitimate users access your systems.
                </p>

                <div className="space-y-4">
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Proactive Measures:</div>
                  {identityMeasures.map((measure, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#D33E9E]/20 flex items-center justify-center text-[#D33E9E]">
                        {measure.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-base">{measure.title}</h4>
                        <p className="text-sm text-gray-400">{measure.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Identity Management Diagram */}
              {/* Identity Management Diagram
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/identity-management-flow.png"
                  alt="Identity Management Architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: identity-management-flow.png - RBAC hierarchy and access control workflow
                </div>
              </div>
              */}

              {/* Pillar 2: Data Security */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20 my-12 not-prose">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#3530BA]/20 flex items-center justify-center">
                    <Database className="w-7 h-7 text-[#3530BA]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#3530BA] uppercase tracking-wider mb-1">Pillar 2</div>
                    <h3 className="text-2xl font-bold text-white">Data Security: The Heart of Your Business</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Client and organizational data are prime targets for attackers. Protecting this data ensures business continuity and client trust.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Essential Practices:</div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {dataEssentials.map((essential, idx) => (
                        <div key={idx} className="p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                          <div className="w-10 h-10 rounded-lg bg-[#3530BA]/20 flex items-center justify-center text-[#3530BA] mx-auto mb-3">
                            {essential.icon}
                          </div>
                          <h4 className="font-bold text-white mb-2 text-sm">{essential.title}</h4>
                          <p className="text-xs text-gray-400">{essential.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Proactive Measures:</div>
                    <div className="space-y-3">
                      {dataProactiveMeasures.map((measure, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                          <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Protection Layers */}
              {/* Data Protection Layers
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/data-protection-layers.png"
                  alt="Multi-Layer Data Protection Strategy"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: data-protection-layers.png - Concentric circles showing encryption, DLP, backup layers
                </div>
              </div>
              */}

              {/* Vulnerability Management */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#8B4FB8]/10 to-transparent border border-[#8B4FB8]/20 my-12 not-prose">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#8B4FB8]/20 flex items-center justify-center">
                    <Search className="w-7 h-7 text-[#8B4FB8]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#8B4FB8] uppercase tracking-wider mb-1">Pillar 3</div>
                    <h3 className="text-2xl font-bold text-white">Proactive Security Scanning and Vulnerability Management</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Conduct regular scans to detect and fix vulnerabilities in cloud workloads, applications, and configurations.
                </p>
              </div>

              {/* Security Posture Monitoring */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/10 to-[#3530BA]/10 border border-white/10 my-12 not-prose">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#D33E9E] uppercase tracking-wider mb-1">Pillar 4</div>
                    <h3 className="text-2xl font-bold text-white">Active Security Posture Monitoring for Real-Time Insights</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Continuously assess and improve your organization's security posture to stay ahead of threats.
                </p>

                <div className="space-y-4">
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Proactive Measures:</div>
                  {postureMeasures.map((measure, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div
                        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${measure.color}20`, color: measure.color }}
                      >
                        {measure.icon}
                      </div>
                      <span className="text-white font-medium">{measure.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CSPM Dashboard Preview */}
              {/* CSPM Dashboard Preview
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/cspm-real-time-monitoring.png"
                  alt="Real-Time Security Posture Monitoring Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: cspm-real-time-monitoring.png - Live dashboard with security metrics and alerts
                </div>
              </div>
              */}

              {/* Why It Matters */}
              <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Why Proactive Identity & Data Security Matters
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-8 rounded-2xl bg-gradient-to-br ${benefit.gradient} border ${benefit.borderColor}`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Benefits Visualization */}
              {/* Benefits Visualization
              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/proactive-security-roi.png"
                  alt="ROI of Proactive Security Measures"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: proactive-security-roi.png - Graph showing cost savings from preventing breaches
                </div>
              </div>
              */}

              {/* Statistics Banner */}
              <div className="grid md:grid-cols-4 gap-4 my-16 not-prose">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <div className="text-4xl font-black text-[#D33E9E] mb-2">82%</div>
                  <div className="text-xs text-gray-400">Breaches prevented with proactive measures</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#8B4FB8]/10 to-transparent border border-[#8B4FB8]/20">
                  <div className="text-4xl font-black text-[#8B4FB8] mb-2">45%</div>
                  <div className="text-xs text-gray-400">Cost reduction from early detection</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20">
                  <div className="text-4xl font-black text-[#3530BA] mb-2">99.9%</div>
                  <div className="text-xs text-gray-400">Compliance adherence rate</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <div className="text-4xl font-black text-[#D33E9E] mb-2">60%</div>
                  <div className="text-xs text-gray-400">Faster incident response time</div>
                </div>
              </div>

            </article>

            {/* CTA Section */}
            <div className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              <div className="bg-[#030014] rounded-[22px] p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to build a proactive security posture?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Discover how Suronex can help you secure identities, protect data, and stay ahead of evolving threats with AI-powered cloud security.
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

