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
  TrendingUp,
  Users,
  Server,
  Brain,
  Activity,
  FileCheck,
  Layers
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

const whitepaperContent = {
  title: "Cloud Infrastructure Entitlement Management: Securing Access in Multi-Cloud Environments",
  subtitle: "Managing and enforcing least-privilege access controls to minimize security risks and ensure compliance",
  category: "Resources",
  author: "Suronex",
  publishedDate: "July 17, 2025",
  readingTime: "11 min read",
};

const ciemBenefits = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Least Privilege Enforcement",
    desc: "Ensures users and applications only have the minimum required permissions, reducing the attack surface.",
    color: "#D33E9E"
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Automated Entitlement Discovery",
    desc: "Continuously identifies and monitors excessive or misconfigured permissions.",
    color: "#8B4FB8"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Compliance and Audit Readiness",
    desc: "Helps organizations adhere to regulatory frameworks like GDPR, HIPAA, and NIST.",
    color: "#3530BA"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Real-Time Anomaly Detection",
    desc: "Uses AI-driven analytics to identify suspicious entitlement changes and potential insider threats.",
    color: "#D33E9E"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Cloud Visibility",
    desc: "Provides a centralized view of entitlements across AWS, Azure, Google Cloud, and hybrid environments.",
    color: "#8B4FB8"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Policy-Based Access Controls",
    desc: "Automates enforcement of security policies to prevent privilege escalation and unauthorized access.",
    color: "#3530BA"
  }
];

const useCases = [
  {
    number: "01",
    title: "Preventing Privilege Escalation",
    industry: "Financial Services",
    icon: <TrendingUp className="w-8 h-8" />,
    challenge: "A global financial institution struggled with overly permissive roles assigned to developers and automated scripts in their cloud environment.",
    solution: "By implementing CIEM, they identified misconfigured permissions and enforced least privilege policies, significantly reducing the risk of privilege escalation attacks.",
    gradient: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30"
  },
  {
    number: "02",
    title: "Securing Cloud-Native Applications",
    industry: "SaaS Provider",
    icon: <Server className="w-8 h-8" />,
    challenge: "A leading SaaS provider faced challenges in managing entitlements across their microservices architecture.",
    solution: "CIEM provided continuous monitoring and policy enforcement, ensuring that services accessed only the resources they needed, thereby improving their overall security posture.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    number: "03",
    title: "Achieving Compliance in a Multi-Cloud Environment",
    industry: "Healthcare",
    icon: <FileCheck className="w-8 h-8" />,
    challenge: "A healthcare company operating in multiple cloud platforms needed a unified approach to managing cloud entitlements to comply with HIPAA regulations.",
    solution: "CIEM provided real-time compliance reporting, reducing audit preparation time and ensuring consistent policy enforcement across cloud services.",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  }
];

const implementationPractices = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Continuous Monitoring and Risk Assessment",
    desc: "Implement automated tools to continuously track and assess cloud permissions."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Zero-Trust Access Model",
    desc: "Adopt a zero-trust security approach by verifying identities and enforcing least-privilege access."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI and Machine Learning Integration",
    desc: "Use AI-driven analytics to detect and remediate excessive permissions and anomalous behavior."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automated Remediation",
    desc: "Deploy policy-based automation to revoke unnecessary permissions and enforce security standards."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Integration with IAM and SIEM Solutions",
    desc: "Enhance security operations by integrating CIEM with existing identity and security information and event management (SIEM) solutions."
  }
];

const aiCiemFeatures = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Automated Entitlement Discovery & Correction",
    desc: "Detect and automatically adjust excessive permissions."
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Real-Time Threat Detection",
    desc: "Identify anomalous access patterns and insider threats."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Multi-Cloud Support",
    desc: "Centralized entitlement management across all cloud platforms."
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Adaptive Access Controls",
    desc: "Dynamically adjust access permissions based on user behavior and risk analysis."
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Audit and Compliance Reporting",
    desc: "Generate real-time reports to meet regulatory requirements."
  }
];

export default function CloudInfrastructureEntitlementManagement() {
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
                As organizations accelerate their cloud adoption, managing and securing user entitlements becomes increasingly complex. Cloud Infrastructure Entitlement Management (CIEM) is a critical component of cloud security that focuses on managing and enforcing least-privilege access controls across cloud environments.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                By leveraging CIEM, organizations can minimize security risks, prevent unauthorized access, and ensure compliance with regulatory standards.
              </p>

              {/* Hero Image Placeholder */}
              {/* Hero Image Placeholder
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/ciem-hero.jpg"
                  alt="Cloud Infrastructure Entitlement Management Visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs text-gray-400">
                  📸 Image: ciem-hero.jpg - Multi-cloud environment with access control layers and permission flows
                </div>
              </div>
              */}

              {/* Understanding CIEM */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Understanding CIEM
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                CIEM provides visibility, governance, and control over cloud identities and entitlements, ensuring that users, applications, and services have only the necessary permissions required to perform their tasks.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                Unlike traditional Identity and Access Management (IAM) solutions, CIEM is specifically designed for dynamic cloud environments where permissions are often overly permissive and challenging to manage at scale.
              </p>

              {/* CIEM vs IAM Comparison */}
              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20">
                  <div className="text-3xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold text-white mb-3">Traditional IAM</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Static permission management</li>
                    <li>• Manual policy creation</li>
                    <li>• Limited multi-cloud visibility</li>
                    <li>• Reactive security approach</li>
                  </ul>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-[#3530BA]/10 border border-[#D33E9E]/20">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-3">CIEM</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Dynamic entitlement management</li>
                    <li>• Automated policy enforcement</li>
                    <li>• Unified multi-cloud control</li>
                    <li>• Proactive threat detection</li>
                  </ul>
                </div>
              </div>

              {/* CIEM Architecture Diagram */}
              {/* CIEM Architecture Diagram
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/ciem-architecture.png"
                  alt="CIEM Architecture and Components"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: ciem-architecture.png - Architectural diagram showing CIEM components and data flow
                </div>
              </div>
              */}

              {/* Key Benefits */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Key Benefits of CIEM
              </h2>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                {ciemBenefits.map((benefit, idx) => (
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
                  src="/whitepaper/ciem-benefits-wheel.png"
                  alt="CIEM Benefits Visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: ciem-benefits-wheel.png - Circular diagram showing interconnected CIEM benefits
                </div>
              </div>
              */}

              {/* Use Cases */}
              <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Use Cases
              </h2>

              <div className="space-y-8 my-12 not-prose">
                {useCases.map((useCase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className={`relative p-8 rounded-2xl bg-gradient-to-br ${useCase.gradient} border ${useCase.borderColor} overflow-hidden`}
                  >
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-white/5">
                      {useCase.number}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="shrink-0 text-white/80">
                          {useCase.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                            {useCase.industry}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            Use Case {useCase.number}: {useCase.title}
                          </h3>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" /> Challenge
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {useCase.challenge}
                          </p>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Solution
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {useCase.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Use Case Results */}
              <div className="grid md:grid-cols-3 gap-6 my-16 not-prose">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
                  <div className="text-4xl font-black text-red-400 mb-2">73%</div>
                  <div className="text-sm text-gray-400">Reduction in privilege escalation risks</div>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                  <div className="text-4xl font-black text-blue-400 mb-2">89%</div>
                  <div className="text-sm text-gray-400">Improvement in security posture</div>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                  <div className="text-4xl font-black text-green-400 mb-2">65%</div>
                  <div className="text-sm text-gray-400">Faster audit preparation time</div>
                </div>
              </div>

              {/* Implementation */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Implementing CIEM
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                Organizations can integrate CIEM into their cloud security strategy by adopting the following best practices:
              </p>

              {/* Implementation Practices */}
              <div className="space-y-4 my-12 not-prose">
                {implementationPractices.map((practice, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#D33E9E]/30 transition-all group"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {practice.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{practice.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{practice.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Implementation Workflow */}
              {/* Implementation Workflow
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/ciem-implementation-workflow.png"
                  alt="CIEM Implementation Workflow"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: ciem-implementation-workflow.png - Step-by-step implementation process flowchart
                </div>
              </div>
              */}

              {/* AI-Driven CIEM Solution */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                AI-Driven CIEM Solution
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">
                To strengthen cloud security, organizations should adopt an AI-Powered CIEM Solution that offers:
              </p>

              {/* AI CIEM Features */}
              <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
                {aiCiemFeatures.map((feature, idx) => (
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

              {/* Solution Benefits Callout */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/10 to-[#3530BA]/10 border border-white/10 my-12 not-prose">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Powered by AI</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  By implementing an AI-driven CIEM solution, organizations can proactively manage cloud entitlements, enhance security, and ensure regulatory compliance. Our platform uses machine learning to continuously adapt to your environment and identify potential risks before they become threats.
                </p>
              </div>

              {/* Platform Dashboard */}
              {/* Platform Dashboard
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden my-16 border border-white/10 not-prose">
                <Image
                  src="/whitepaper/suronex-ciem-platform.png"
                  alt="Suronex AI-Powered CIEM Platform"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/60 px-3 py-1 rounded">
                  📸 Image: suronex-ciem-platform.png - Dashboard showing entitlement analysis and recommendations
                </div>
              </div>
              */}

              {/* Conclusion */}
              <h2 className="text-3xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Conclusion
              </h2>

              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Cloud Infrastructure Entitlement Management (CIEM) is a crucial security measure for organizations operating in complex cloud environments. By leveraging CIEM, businesses can mitigate risks associated with excessive entitlements, enforce least privilege access, and maintain compliance.
              </p>

              <p className="text-lg leading-relaxed text-gray-300 mb-12">
                As cloud security threats evolve, adopting an AI-powered CIEM strategy will be essential for organizations looking to enhance their cloud security posture.
              </p>

              {/* Final Stats */}
              <div className="grid md:grid-cols-4 gap-4 my-16 not-prose">
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#D33E9E] mb-2">92%</div>
                  <div className="text-xs text-gray-400">Automated permission discovery</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#8B4FB8] mb-2">76%</div>
                  <div className="text-xs text-gray-400">Reduction in over-privileged accounts</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#3530BA] mb-2">5x</div>
                  <div className="text-xs text-gray-400">Faster compliance audits</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-3xl font-black text-[#D33E9E] mb-2">100%</div>
                  <div className="text-xs text-gray-400">Multi-cloud coverage</div>
                </div>
              </div>

            </article>

            {/* CTA Section */}
            <div className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              <div className="bg-[#030014] rounded-[22px] p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to secure your cloud entitlements?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Discover how Suronex's AI-powered CIEM solution can help you enforce least-privilege access and minimize security risks across your multi-cloud environment.
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

