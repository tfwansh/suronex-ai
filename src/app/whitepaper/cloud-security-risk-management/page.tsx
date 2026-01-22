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
  Lock,
  Eye,
  Server,
  TrendingUp
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

const whitepaperContent = {
  title: "Navigating Cloud Security: Risk Management & Compliance Best Practices",
  subtitle: "Cloud security risk and compliance are critical for protecting data, applications, and infrastructure in cloud environments",
  category: "Resources",
  author: "Suronex",
  publishedDate: "June 28, 2025",
  readingTime: "15 min read",
};

const complianceFrameworks = [
  {
    framework: "ISO/IEC 27001",
    description: "Global standard for information security management.",
    industry: "All industries"
  },
  {
    framework: "SOC 2",
    description: "Ensures secure handling of customer data (Trust Service Criteria).",
    industry: "SaaS, Cloud Services"
  },
  {
    framework: "NIST CSF (Cybersecurity Framework)",
    description: "Best practices for risk management.",
    industry: "Government, Enterprises"
  },
  {
    framework: "PCI DSS",
    description: "Secures payment card transactions.",
    industry: "Finance, E-commerce"
  },
  {
    framework: "GDPR",
    description: "Data protection and privacy for EU citizens.",
    industry: "All industries"
  },
  {
    framework: "HIPAA",
    description: "Protects health information (PHI).",
    industry: "Healthcare"
  },
  {
    framework: "FedRAMP",
    description: "Cloud security for US government agencies.",
    industry: "Government"
  },
  {
    framework: "CIS Benchmarks",
    description: "Security best practices for cloud providers.",
    industry: "All industries"
  }
];

const cloudRisks = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "Misconfigurations",
    desc: "Open storage buckets, insecure IAM policies, and excessive permissions."
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Data Breaches",
    desc: "Unauthorized access to sensitive data due to weak encryption, access control failures, or misconfigurations."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Insider Threats",
    desc: "Malicious or negligent employees exposing or misusing data."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Insecure APIs",
    desc: "Poorly secured APIs exposing cloud services to cyberattacks."
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Account Hijacking",
    desc: "Weak credentials, lack of MFA, or phishing attacks leading to compromised cloud accounts."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Lack of Visibility & Monitoring",
    desc: "Incomplete logging and lack of real-time security monitoring in multi-cloud environments."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Compliance Violations",
    desc: "Failure to meet regulatory requirements (e.g., GDPR, ISO 27001, HIPAA, PCI DSS)."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Shadow IT",
    desc: "Unauthorized cloud applications creating security blind spots."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Denial of Service (DoS) Attacks",
    desc: "Attackers overwhelming cloud resources, causing downtime."
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Data Loss",
    desc: "Unintentional deletion, lack of backups, or cloud provider failures."
  }
];

export default function CloudSecurityRiskManagement() {
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

              {/* Intro */}
              <p className="text-xl leading-relaxed text-white/90 mb-12">
                Organizations must balance security risks with regulatory compliance requirements to ensure data integrity, confidentiality, and availability across their cloud infrastructure.
              </p>

              {/* Hero Image Placeholder */}
              {/* Hero Image Placeholder
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 border border-white/10">
                <Image
                  src="/whitepaper/cloud-security-hero.jpg"
                  alt="Cloud Security Architecture Diagram"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs text-gray-400">
                  📸 Image: cloud-security-hero.jpg - Multi-cloud security architecture with AWS, Azure, GCP logos
                </div>
              </div>
              */}

              {/* Section 1: Cloud Security Risks */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                1. Cloud Security Risks
              </h2>

              <p className="mb-8 text-gray-300">
                Cloud environments introduce unique risks that require robust security controls.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-white">
                A. Common Cloud Security Risks
              </h3>

              {/* Risks Grid */}
              <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
                {cloudRisks.map((risk, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#D33E9E]/30 transition-all group"
                  >
                    <div className="shrink-0 mt-1 text-[#D33E9E] group-hover:scale-110 transition-transform">
                      {risk.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-base">{risk.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{risk.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Diagram Image Placeholder */}
              {/* Diagram Image Placeholder
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-12 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/cloud-threats-diagram.png"
                  alt="Cloud Security Threat Landscape"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: cloud-threats-diagram.png - Visualization of cloud attack vectors
                </div>
              </div>
              */}

              {/* Section 2: Compliance Frameworks */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                2. Cloud Compliance Frameworks
              </h2>

              <p className="mb-8 text-gray-300">
                Organizations must adhere to various security and compliance standards based on industry and geographical regulations.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-white">
                A. Key Compliance Frameworks
              </h3>

              {/* Compliance Table */}
              <div className="overflow-x-auto rounded-2xl border border-white/10 my-8 not-prose">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Framework</th>
                      <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Description</th>
                      <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Industry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {complianceFrameworks.map((framework, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 text-white font-medium">{framework.framework}</td>
                        <td className="px-6 py-4 text-gray-300 text-sm">{framework.description}</td>
                        <td className="px-6 py-4 text-gray-400 text-sm">{framework.industry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Compliance Logos Image Placeholder */}
              {/* Compliance Logos Image Placeholder
              <div className="relative w-full h-[200px] rounded-2xl overflow-hidden my-12 bg-white/[0.02] border border-white/10 flex items-center justify-center not-prose">
                <div className="text-center">
                  <Image
                    src="/whitepaper/compliance-logos.png"
                    alt="Compliance Framework Logos"
                    fill
                    className="object-contain p-8"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                    📸 Image: compliance-logos.png - ISO, SOC2, GDPR, HIPAA, PCI-DSS logos
                  </div>
                </div>
              </div>
              */}

              {/* Section 3: Best Practices */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                3. Best Practices for Cloud Security & Compliance
              </h2>

              <p className="mb-8 text-gray-300">
                To mitigate risks and ensure compliance, organizations should implement the following best practices:
              </p>

              {/* Best Practices Cards */}
              <div className="space-y-6 my-8 not-prose">
                {/* IAM */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-[#D33E9E]" />
                    A. Identity & Access Management (IAM)
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span>Enforce least privilege access (CIEM – Cloud Infrastructure Entitlement Management).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span>Use Multi-Factor Authentication (MFA) for all privileged accounts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span>Monitor inactive or excessive permissions and remove them.</span>
                    </li>
                  </ul>
                </div>

                {/* Data Protection */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[#3530BA]" />
                    B. Data Protection & Encryption
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span>Encrypt data at rest and in transit using strong encryption (AES-256, TLS 1.2/1.3).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span>Implement Data Loss Prevention (DLP) to detect and block unauthorized data transfers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span>Secure APIs with OAuth, OpenID, and API gateways.</span>
                    </li>
                  </ul>
                </div>

                {/* Monitoring */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B4FB8]/10 to-transparent border border-[#8B4FB8]/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-[#8B4FB8]" />
                    C. Continuous Monitoring & Threat Detection
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8B4FB8] shrink-0 mt-0.5" />
                      <span>Deploy SIEM (Security Information and Event Management) for real-time logging and monitoring.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8B4FB8] shrink-0 mt-0.5" />
                      <span>Use CSPM (Cloud Security Posture Management) tools to detect misconfigurations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8B4FB8] shrink-0 mt-0.5" />
                      <span>Leverage EDR (Endpoint Detection and Response) & XDR for proactive threat hunting.</span>
                    </li>
                  </ul>
                </div>

                {/* Network Security */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Server className="w-6 h-6 text-[#D33E9E]" />
                    D. Network Security
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span>Implement Zero Trust Architecture (ZTA) to restrict access based on identity and risk level.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span>Use Web Application Firewalls (WAF) and DDoS protection to secure cloud workloads.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#D33E9E] shrink-0 mt-0.5" />
                      <span>Enable Cloud-Native Security Controls (AWS Security Hub, Azure Defender, Google Security Command Center).</span>
                    </li>
                  </ul>
                </div>

                {/* Compliance Automation */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-[#3530BA]" />
                    E. Compliance Automation & Auditing
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span>Conduct regular security audits and penetration testing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span>Implement Compliance-as-Code (IaC) for automated security enforcement.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#3530BA] shrink-0 mt-0.5" />
                      <span>Ensure vendor security assessments for third-party cloud providers.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Security Dashboard Image Placeholder */}
              {/* Security Dashboard Image Placeholder
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-12 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/security-dashboard.png"
                  alt="Cloud Security Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: security-dashboard.png - Suronex platform dashboard showing security metrics
                </div>
              </div>
              */}

              {/* Critical Insights Section */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                The Reality of Cloud Security Incidents
              </h2>

              {/* Stat Cards */}
              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
                  <div className="text-4xl font-bold text-red-400 mb-2">Known Risks</div>
                  <h4 className="text-xl font-bold text-white mb-3">Most Incidents Are Preventable</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The high volume of alerts, combined with tedious and manual remediation processes, has security teams constantly fighting an ever-growing risk backlog. An increasing number of incidents are directly related to risks known to the organization – meaning the security team was previously aware of the issue but the fix had not been implemented.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
                  <div className="text-4xl font-bold text-orange-400 mb-2">5 Days</div>
                  <h4 className="text-xl font-bold text-white mb-3">Average Time-to-Exploit</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    While it takes security teams months to remediate vulnerabilities, attackers only need 5 days to exploit them (compared to 32 days the previous year). Organizations take 10X longer to remediate open vulnerabilities than attackers need to exploit them.
                  </p>
                </div>
              </div>

              {/* Timeline Visual */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 my-12 not-prose">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Remediation Timeline</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-400 font-medium">3.5 weeks</div>
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" style={{ width: '35%' }} />
                    </div>
                    <div className="text-sm text-gray-300">Misconfiguration in production</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-400 font-medium">6 weeks</div>
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: '60%' }} />
                    </div>
                    <div className="text-sm text-gray-300">Application vulnerability</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-400 font-medium">6-8+ weeks</div>
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full" style={{ width: '80%' }} />
                    </div>
                    <div className="text-sm text-gray-300">Critical vulnerability remediation</div>
                  </div>
                </div>
              </div>

              {/* Cost Impact */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-[#3530BA]/10 border border-white/10 my-12 not-prose">
                <h3 className="text-2xl font-bold text-white mb-4">The True Cost of Remediation</h3>
                <p className="text-gray-300 leading-relaxed">
                  While difficult to quantify, focusing solely on direct operational expenses – excluding both incident-related costs and missed opportunities while teams focus on manual remediation tasks (instead of strategic or revenue-generating initiatives like product development or scalability) — the annual operational costs associated with remediation are staggering.
                </p>
              </div>

              {/* Solutions Section */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Shifting Focus to Reduce Cloud Incidents
              </h2>

              <p className="mb-8 text-gray-300">
                The visibility problem has been solved—today's security teams know about their risks. Still, vulnerability exploitation continues to be one of the most common ways attackers gain initial access. Visibility is not security and the focus has now shifted from visibility to action.
              </p>

              <p className="mb-8 text-gray-300">
                Security teams are actively implementing new strategies to increase remediation efficiency, reduce risk acceptance, and minimize overall exposure:
              </p>

              {/* Strategy Cards */}
              <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-transparent border border-[#D33E9E]/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D33E9E]/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-[#D33E9E]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Effort-based Prioritization</h4>
                  <p className="text-sm text-gray-400">Focus on high-impact, low-effort fixes first</p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B4FB8]/10 to-transparent border border-[#8B4FB8]/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#8B4FB8]/20 flex items-center justify-center mx-auto mb-4">
                    <Server className="w-6 h-6 text-[#8B4FB8]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Automation</h4>
                  <p className="text-sm text-gray-400">Reduce manual remediation workload</p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3530BA]/10 to-transparent border border-[#3530BA]/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#3530BA]/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-[#3530BA]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Mitigating Controls</h4>
                  <p className="text-sm text-gray-400">Implement compensating security measures</p>
                </div>
              </div>

              {/* Automation Benefits Image Placeholder */}
              {/* Automation Benefits Image Placeholder
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-12 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/automation-benefits.png"
                  alt="Cloud Security Automation Benefits"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: automation-benefits.png - Before/after comparison of manual vs automated remediation
                </div>
              </div>
              */}

            </article>

            {/* CTA Section */}
            <div className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              <div className="bg-[#030014] rounded-[22px] p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to transform your cloud security?
                </h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  See how Suronex automates compliance, reduces remediation time, and eliminates security blind spots.
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

