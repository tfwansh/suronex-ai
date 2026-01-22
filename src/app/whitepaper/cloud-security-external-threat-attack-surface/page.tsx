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
  Eye,
  AlertTriangle,
  Zap,
  Target,
  Users,
  Server,
  Brain,
  Database,
  Activity,
  FileWarning,
  Crosshair,
  TrendingUp
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

const whitepaperContent = {
  title: "Cloud Security – External Threat Attack Surface",
  subtitle: "Understanding evolving threat actor tactics and implementing robust defenses against data exfiltration and identity exploitation",
  category: "Resources",
  author: "Suronex",
  publishedDate: "July 3, 2025",
  readingTime: "18 min read",
};

const threatTrends = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Risks to Service Accounts",
    desc: "Over-privileged service accounts and lateral movement tactics are increasingly significant threats.",
    color: "#D33E9E"
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "Identity Exploitation",
    desc: "Compromised user identities in hybrid environments can lead to persistent access and lateral movement.",
    color: "#8B4FB8"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Cloud Databases Under Attack",
    desc: "Threat actors are actively exploiting vulnerabilities and weak credentials to access sensitive information.",
    color: "#3530BA"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Increased Adaptability",
    desc: "Threat actors are leveraging Ransomware-as-a-Service (RaaS) offerings and adjusting tactics to evade detection.",
    color: "#D33E9E"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Diversified Attack Methods",
    desc: "Using privilege escalation and charging against victim billing accounts to maximize profits.",
    color: "#8B4FB8"
  }
];

const postAccessActions = [
  { action: "Lateral Movement", percentage: 62.2, color: "#D33E9E" },
  { action: "Insecure Private Keys Search", percentage: 13.7, color: "#8B4FB8" },
  { action: "Access Token Manipulation", percentage: 11.3, color: "#3530BA" },
  { action: "Other Activities", percentage: 12.8, color: "#6B7280" }
];

const identityCompromiseMethods = [
  "Brute-forcing using common/guessable passwords",
  "Replaying stolen credentials from previous breaches",
  "Credential stuffing",
  "Phishing and social engineering",
  "SIM swapping",
  "MFA fatigue (push/text-based notifications)",
  "Adversary in the Middle (AitM) attacks",
  "Targeted social engineering"
];

const serviceAccountMitigations = [
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Reduce service account key risk",
    desc: "Consider alternative solutions to using service account keys to reduce this attack surface."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Restrict service account key creation",
    desc: "Use organization policies to restrict service account key creation and limit assigned roles."
  },
  {
    icon: <Key className="w-5 h-5" />,
    title: "Optimize IAM policies",
    desc: "Ensure only necessary services have access to critical assets and regularly review IAM policies."
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Enhance internal threat monitoring",
    desc: "Reinvigorate lateral movement detection technologies and policies for internal-facing sensors."
  }
];

const identityMitigations = [
  {
    title: "Strong Authentication with Attribute-based Validation",
    items: [
      "Geo-verification for where the authentication request was initiated",
      "Identity risk reviews and verification (suspicious logins, leaked credentials, atypical travel)",
      "Time-based access enforcement (Just-in-Time) or predefined session durations",
      "Device state review and verification (pre-defined attributes, trusted health status)"
    ]
  },
  {
    title: "Comprehensive Identity Incident Response",
    items: [
      "Enforcing mandatory MFA for an account if not already configured",
      "Disabling and rotating credentials for an account",
      "Revoking access tokens within the IdP/cloud platform(s)/accessible application(s)",
      "Revoking cookies for authenticated identities within applications",
      "Reviewing, revoking, and regenerating programmatic/long-lived identities",
      "Reviewing registered devices and revoking any unauthorized/recently added devices",
      "Reviewing enforced MFA methods and removing weak methods",
      "Reviewing and revoking credentials/access for any newly registered applications"
    ]
  }
];

const databaseMitigations = [
  "Secure private connections",
  "Enable logging & monitoring",
  "Use robust Identity and Access Management (IAM)",
  "Proactively approach vulnerability management",
  "Enhance data protection with Virtual Private Cloud (VPC) service controls"
];

export default function CloudSecurityExternalThreats() {
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
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 my-12 not-prose">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Critical Threat Alert</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Cloud environments are facing an evolving threat from threat actors prioritizing data exfiltration, exploiting identity as the new perimeter, and adapting tactics to evade detection and attribution.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Despite the ongoing presence of ransomware and data theft risks, recent trends reveal a concerning shift. Threat actors are not only refining their tactics, techniques, and procedures (TTPs) within cloud environments, but they are also becoming more adept at obscuring their identities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              {/* Hero Image
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/external-threat-landscape.jpg"
                  alt="External Cloud Threat Attack Surface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs text-gray-400">
                  📸 Image: external-threat-landscape.jpg - Global threat map with attack vectors targeting cloud infrastructure
                </div>
              </div>
              */}

              {/* Current Threat Landscape */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Current Threat Landscape
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Global security and threat intelligence experts have identified the following critical threats in the current landscape:
              </p>

              {/* Threat Trends Grid */}
              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                {threatTrends.map((trend, idx) => (
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
                      style={{ backgroundColor: `${trend.color}20`, color: trend.color }}
                    >
                      {trend.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{trend.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{trend.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Service Account Exploitation */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Overprivileged Service Accounts: The New Attack Vector
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Cloud security research highlights that threat actors are shifting focus. Instead of solely focusing on stealing user login information and exploiting misconfigurations, they are now targeting overprivileged service accounts—accounts that have more privileges than necessary.
              </p>

              {/* Post-Access Actions Chart */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 my-12 not-prose">
                <h3 className="text-xl font-bold text-white mb-6">Post-Initial Access: Threat Actor Activities</h3>
                <div className="space-y-4">
                  {postAccessActions.map((action, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">{action.action}</span>
                        <span className="text-sm font-bold" style={{ color: action.color }}>{action.percentage}%</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: action.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${action.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-6 italic">
                  Data reveals 62.2% of post-access activities involve lateral movement attempts
                </p>
              </div>

              {/* Service Account Mitigations */}
              <h3 className="text-2xl font-bold mb-6 text-white">Mitigations for Service Account Protection</h3>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                {serviceAccountMitigations.map((mitigation, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#D33E9E]/20 flex items-center justify-center text-[#D33E9E]">
                        {mitigation.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 text-base">{mitigation.title}</h4>
                        <p className="text-sm text-gray-400">{mitigation.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Account Attack Flow */}
              {/* Service Account Attack Flow
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/service-account-attack-flow.png"
                  alt="Service Account Attack Chain"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: service-account-attack-flow.png - Flowchart showing initial access → privilege escalation → lateral movement
                </div>
              </div>
              */}

              {/* Identity as the New Boundary */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                The Boundary of Identity
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                As organizations expand the cyber boundary to cover a hybrid plane of on-premises, multi-cloud, and multi-Software as a Service-based applications, the common "boundary" has shifted from the network perimeter to the identity plane.
              </p>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#8B4FB8]/10 to-transparent border border-[#8B4FB8]/20 my-12 not-prose">
                <h3 className="text-xl font-bold text-white mb-4">Identity Compromise Methods</h3>
                <p className="text-gray-300 mb-6">
                  Identity compromise is no longer limited to password theft. Threat actors are now gaining access through:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {identityCompromiseMethods.map((method, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <AlertTriangle className="w-5 h-5 text-[#8B4FB8] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Identity Attack Chain Diagram */}
              {/* Identity Attack Chain Diagram
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/identity-attack-chain.png"
                  alt="Identity Compromise Attack Chain"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: identity-attack-chain.png - Chain reaction diagram from credential theft to full compromise
                </div>
              </div>
              */}

              {/* Identity Protection Mitigations */}
              <h3 className="text-2xl font-bold mb-6 text-white">Mitigations for Identity Protection</h3>

              <div className="space-y-8 my-12 not-prose">
                {identityMitigations.map((section, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-[#3530BA]" />
                      {section.title}
                    </h4>
                    <div className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02]">
                          <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Database Security */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Database Security: Critical Cloud Protection
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Threat actors are increasingly targeting databases, exploiting misconfigurations and vulnerabilities to gain access to sensitive information. Insecure databases containing critical business data and PII are particularly attractive targets.
              </p>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20 my-12 not-prose">
                <h3 className="text-xl font-bold text-white mb-6">Database Protection Best Practices</h3>
                <div className="space-y-3">
                  {databaseMitigations.map((mitigation, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <Database className="w-5 h-5 text-[#3530BA]" />
                      <span className="text-white font-medium">{mitigation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Threat Actor Spotlight: UNC2165 */}
              <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Threat Actor Spotlight: UNC2165
              </h2>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 my-12 not-prose">
                <div className="flex items-start gap-6 mb-6">
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <Crosshair className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">UNC2165: Ransomware and Data Theft Extortion</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      UNC2165 is a set of financially motivated threat actor activity dating to at least 2019 that abuses cloud services to host data exfiltrated from victim environments.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Attack Methodology</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• FAKEUPDATES infections for initial access</li>
                      <li>• COLORFAKE.V2 in-memory dropper</li>
                      <li>• MYTHIC post-exploitation framework</li>
                      <li>• Cloud storage abuse for data exfiltration</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5">
                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Impact Scope</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Nearly every industry affected</li>
                      <li>• Global victim distribution</li>
                      <li>• Links to Evil Corp operations</li>
                      <li>• Evolving ransomware families</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Leak Sites */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Growing Threat from Data Leak Sites
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Security experts have observed threat actors increasingly extorting victim organizations by exposing their stolen data on Data Leak Sites (DLS). This tactic impacts organizations across multiple cloud service providers, not just those with on-premises systems.
              </p>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 my-12 not-prose">
                <h3 className="text-xl font-bold text-white mb-4">EMBARGO DLS Activity</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <FileWarning className="w-4 h-4" /> Data Exfiltration
                    </h4>
                    <p className="text-sm text-gray-400">
                      Internal databases breached in ransomware attacks with personal data leaked on the dark web
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> Extortion Attempt
                    </h4>
                    <p className="text-sm text-gray-400">
                      Victim blog posts created with company details, incident descriptions, screenshots, and data links
                    </p>
                  </div>
                </div>
              </div>

              {/* Comprehensive Mitigation Strategy */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Comprehensive Protection Strategy
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <h3 className="text-xl font-bold text-white mb-4">Prevention</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Enroll in multifactor authentication (MFA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Implement robust IAM policies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Use Security Command Center (SCC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Enable proactive VM scanning</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20">
                  <h3 className="text-xl font-bold text-white mb-4">Detection & Response</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Automated sensitive data monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Monitor unexpected costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Prevent data exfiltration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Cloud-specific backup strategy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Final Statistics */}
              <div className="grid md:grid-cols-3 gap-6 my-16 not-prose">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
                  <div className="text-4xl font-black text-red-400 mb-2">62.2%</div>
                  <div className="text-sm text-gray-400">Post-access activities involve lateral movement</div>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
                  <div className="text-4xl font-black text-orange-400 mb-2">13.7%</div>
                  <div className="text-sm text-gray-400">Threat actors search for insecure private keys</div>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="text-4xl font-black text-yellow-400 mb-2">11.3%</div>
                  <div className="text-sm text-gray-400">Access token manipulation attempts</div>
                </div>
              </div>

            </article>

            {/* CTA Section */}
            <div className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              <div className="bg-[#030014] rounded-[22px] p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Protect your cloud infrastructure from evolving threats
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Discover how Suronex provides comprehensive protection against external threats with AI-powered threat detection, identity protection, and automated response capabilities.
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

