// app/products/governance-risk-compliance/page.tsx
"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Shield, ArrowRight, CheckCircle, TrendingUp, Eye, Zap, Clock, 
  FileText, Network, Building2, BarChart3, Users, Target, Lock, 
  AlertTriangle, Database, Scale, Sparkles, GitBranch, Activity,
  ClipboardCheck, Bell, Layers, Code, ChevronDown, ChevronUp
} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

export default function GRCPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <motion.div
          className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-[#D33E9E]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#3530BA]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <Navbar />
      <HeroSection />
      <BusinessImpact />
      <CoreCapabilitiesShowcase />
      <PolicyManagementShowcase />
      <ComplianceManagementShowcase />
      <RiskManagementShowcase />
      <AnalyticsShowcase />
      <KeyBenefitsShowcase />
      <CTASection />
      <Footer />
    </main>
  )
}

// Hero Section
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="relative pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D33E9E]/30 bg-[#D33E9E]/10 text-[#D33E9E] text-sm font-semibold mb-8 cursor-default"
            >
              <Shield className="w-4 h-4" />
              Governance, Risk & Compliance
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Streamline enterprise{" "}
              <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
                risk management
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              Automate compliance, mitigate third-party risk, and gain end-to-end GRC visibility across your organization.
            </p>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              GRC provides a unified platform for managing enterprise governance, risk, and compliance activities across your organization. Our solution automates policy management, streamlines compliance workflows, enables comprehensive third-party risk assessment, and provides executives with real-time visibility into organizational risk posture and compliance status.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(211, 62, 158, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-lg transition-all"
              >
                Request Demo
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold text-lg transition-all"
              >
                View Platform
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '78%', label: 'Faster compliance prep' },
                { value: '82%', label: 'Faster audits' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - MASSIVE Hero Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ y: -10, rotateY: -3 }}
                transition={{ duration: 0.3 }}
                className="relative"
                style={{
                  transform: 'perspective(1400px) rotateY(-8deg) rotateX(4deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
                  <div className="relative h-full flex items-center justify-center p-12">
                    <div className="text-center">
                      <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/30 to-[#3530BA]/30 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Shield className="w-12 h-12 text-white" />
                      </motion.div>
                      <div className="text-white text-2xl font-bold mb-3">
                        📸 INSERT HERO SCREENSHOT
                      </div>
                      <div className="text-gray-400 max-w-md">
                        GRC Platform Dashboard - Unified view of compliance status, risk metrics, and policy management
                      </div>
                    </div>
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/10 via-transparent to-[#3530BA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-[#D33E9E]/30 via-purple-500/20 to-[#3530BA]/30 blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Business Impact Stats
function BusinessImpact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: '78%', label: 'reduction in compliance preparation time', sublabel: 'with automated workflows' },
    { value: '65%', label: 'improvement in risk visibility', sublabel: 'and decision-making' },
    { value: '82%', label: 'faster audit completion', sublabel: 'with centralized evidence management' },
    { value: '71%', label: 'reduction in third-party risk incidents', sublabel: 'through proactive monitoring' }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">GRC Business Impact</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Proven results across enterprise GRC programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center cursor-default group"
            >
              <div className="relative inline-block mb-6">
                <motion.div 
                  className="text-7xl font-bold bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Core Capabilities Showcase - VISUAL GRID (Not boring cards!)
function CoreCapabilitiesShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const capabilities = [
    {
      title: "Comprehensive Policy Management",
      icon: FileText,
      color: "from-pink-500 to-rose-500",
      items: [
        "Policy Lifecycle Automation",
        "Version Control & History",
        "Policy Distribution & Acknowledgment",
        "Policy Mapping",
        "Exception Management"
      ]
    },
    {
      title: "Third-Party & Vendor Risk Assessment",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Vendor Risk Profiling",
        "Vendor Lifecycle Management",
        "Contract Risk Assessment",
        "Continuous Monitoring",
        "Regulatory Compliance Verification"
      ]
    },
    {
      title: "End-to-End Risk & Compliance Management",
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
      items: [
        "Integrated Risk Register",
        "Compliance Framework Management",
        "Control Effectiveness Testing",
        "Audit Management",
        "Regulatory Change Management"
      ]
    }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Core Features & Capabilities</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive GRC platform for enterprise governance, risk management, and compliance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {capabilities.map((capability, i) => {
            const IconComponent = capability.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-default"
              >
                {/* Card with gradient border effect */}
                <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden h-full">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-6 relative z-10`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6 relative z-10 group-hover:text-[#D33E9E] transition-colors">
                    {capability.title}
                  </h3>

                  {/* Features list */}
                  <div className="space-y-3 relative z-10">
                    {capability.items.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.15 + j * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${capability.color} text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                        <span className="text-sm text-gray-400">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative glow */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Policy Management - HUGE Showcase with ALL Details
function PolicyManagementShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const policyFeatures = [
    { title: "Template Library", desc: "Pre-built policy templates for common regulatory and industry requirements" },
    { title: "Approval Workflows", desc: "Configurable approval workflows with stakeholder routing and notifications" },
    { title: "Version Management", desc: "Comprehensive version control with diff tracking and rollback capabilities" },
    { title: "Compliance Monitoring", desc: "Automated monitoring of policy adherence and violation detection" },
    { title: "Exception Tracking", desc: "Formal exception request and approval processes with expiration management" },
    { title: "Regular Review Cycles", desc: "Automated policy review scheduling and stakeholder notification" }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Policy Management Platform
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl">
            Complete policy lifecycle automation from creation to retirement
          </p>
        </motion.div>

        {/* HUGE Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-20 group"
        >
          <motion.div
            whileHover={{ y: -15, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            style={{
              transform: 'perspective(1600px) rotateX(4deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-white/10 shadow-2xl">
              <div className="relative h-full flex items-center justify-center p-16">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 flex items-center justify-center"
                  >
                    <FileText className="w-16 h-16 text-[#D33E9E]" />
                  </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: Policy Management Dashboard
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Policy creation interface, approval workflows, version control, distribution tracking, and compliance monitoring
                  </div>
                </div>
                
                <motion.div
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 30%, rgba(211, 62, 158, 0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 70%, rgba(53, 48, 186, 0.15) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 30%, rgba(211, 62, 158, 0.15) 0%, transparent 50%)',
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute inset-0 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="absolute -inset-12 bg-gradient-to-r from-[#D33E9E]/40 via-purple-500/30 to-[#3530BA]/40 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policyFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ x: 10, scale: 1.02 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl group hover:border-[#D33E9E]/30 transition-all cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold mb-2 group-hover:text-[#D33E9E] transition-colors">{feature.title}</div>
                  <div className="text-sm text-gray-400">{feature.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Compliance Management - COMPLETE with expandable sections
function ComplianceManagementShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedSection, setExpandedSection] = useState<number | null>(0)

  const complianceSections = [
    {
      title: "Control Framework Management",
      icon: Layers,
      color: "from-green-500 to-emerald-500",
      items: [
        { title: "Control Library", desc: "Comprehensive library of controls mapped to multiple frameworks" },
        { title: "Control Mapping", desc: "Automated mapping of controls across different regulatory requirements" },
        { title: "Control Testing", desc: "Automated and manual control testing with evidence collection" },
        { title: "Control Effectiveness", desc: "Measure and report on control effectiveness and maturity" }
      ]
    },
    {
      title: "Audit Management & Evidence Collection",
      icon: ClipboardCheck,
      color: "from-blue-500 to-indigo-500",
      items: [
        { title: "Audit Planning", desc: "Comprehensive audit planning tools with resource allocation and scheduling" },
        { title: "Evidence Management", desc: "Centralized repository for audit evidence with automated collection" },
        { title: "Audit Workflows", desc: "Configurable workflows for different audit types and methodologies" },
        { title: "Finding Management", desc: "Track audit findings, management responses, and remediation status" },
        { title: "Audit Reporting", desc: "Automated generation of audit reports and management letters" }
      ]
    },
    {
      title: "Regulatory Change Management",
      icon: Bell,
      color: "from-orange-500 to-red-500",
      items: [
        { title: "Regulatory Intelligence", desc: "Monitor regulatory changes and their impact on compliance requirements" },
        { title: "Impact Assessment", desc: "Assess the impact of regulatory changes on current compliance programs" },
        { title: "Compliance Updates", desc: "Update compliance frameworks and controls based on regulatory changes" }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Compliance Management
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Manage multiple regulatory frameworks with automated controls and evidence collection
          </p>
        </motion.div>

        {/* HUGE Compliance Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 group"
        >
          <motion.div
            whileHover={{ y: -15, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            style={{
              transform: 'perspective(1600px) rotateX(3deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
              <div className="relative h-full flex items-center justify-center p-16">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 flex items-center justify-center"
                  >
                    <Scale className="w-16 h-16 text-[#D33E9E]" />
                  </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: Compliance Framework Dashboard
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Multi-framework compliance view showing SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR status, controls, and audit readiness
                  </div>
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="absolute -inset-12 bg-gradient-to-r from-purple-500/40 via-[#D33E9E]/30 to-[#3530BA]/40 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Framework Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {['SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA', 'GDPR', 'SEBI CSF', 'RBI CSF', 'NIST'].map((framework, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-lg hover:border-[#D33E9E]/50 hover:bg-white/10 transition-all cursor-pointer"
            >
              {framework}
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-20">
          <motion.a
            href="/frameworks"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
          >
            View all frameworks
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-6">
          {complianceSections.map((section, i) => {
            const IconComponent = section.icon
            const isExpanded = expandedSection === i
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : i)}
                  className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-left">{section.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 grid md:grid-cols-2 gap-6">
                    {section.items.map((item, j) => (
                      <div key={j} className="flex gap-4">
                        <CheckCircle className={`w-6 h-6 flex-shrink-0 mt-1 bg-gradient-to-r ${section.color} text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                        <div>
                          <div className="font-semibold mb-1">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Risk Management - Complete with ALL items
function RiskManagementShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedSection, setExpandedSection] = useState<number | null>(0)

  const riskSections = [
    {
      title: "Enterprise Risk Assessment",
      icon: Target,
      color: "from-red-500 to-orange-500",
      items: [
        { title: "Risk Identification", desc: "Comprehensive risk identification across all business areas and processes" },
        { title: "Risk Analysis", desc: "Qualitative and quantitative risk analysis with likelihood and impact assessment" },
        { title: "Risk Evaluation", desc: "Risk evaluation against organizational risk appetite and tolerance levels" },
        { title: "Risk Treatment", desc: "Develop and implement risk treatment strategies and action plans" },
        { title: "Risk Monitoring", desc: "Continuous monitoring of risk indicators and treatment effectiveness" }
      ]
    },
    {
      title: "Risk Register & Documentation",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      items: [
        { title: "Centralized Risk Register", desc: "Single source of truth for all organizational risks" },
        { title: "Risk Categorization", desc: "Categorize risks by type, source, business area, and impact" },
        { title: "Risk Relationships", desc: "Map relationships between risks, controls, and business processes" },
        { title: "Risk History", desc: "Maintain complete history of risk assessments and treatment decisions" },
        { title: "Risk Reporting", desc: "Automated risk reporting for different stakeholder audiences" }
      ]
    },
    {
      title: "Business Impact Analysis",
      icon: Building2,
      color: "from-cyan-500 to-blue-500",
      items: [
        { title: "Asset Identification", desc: "Identify and catalog critical business assets and processes" },
        { title: "Dependency Mapping", desc: "Map dependencies between business processes and supporting assets" },
        { title: "Impact Assessment", desc: "Assess potential impacts of risk scenarios on business operations" },
        { title: "Recovery Planning", desc: "Develop recovery time and point objectives for critical processes" },
        { title: "Scenario Modeling", desc: "Model different risk scenarios and their potential business impacts" }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Risk Management & Assessment
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Identify, assess, and mitigate risks across your entire organization with intelligent automation
          </p>
        </motion.div>

        {/* Two-column layout with screenshot */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left - Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="group"
          >
            <motion.div
              whileHover={{ x: -10, y: -10, rotateY: 3 }}
              transition={{ duration: 0.4 }}
              style={{
                transform: 'perspective(1200px) rotateY(8deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
                <div className="relative h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 flex items-center justify-center"
                    >
                      <Target className="w-12 h-12 text-[#D33E9E]" />
                    </motion.div>
                    <div className="text-white text-2xl font-bold mb-3">
                      📸 INSERT: Risk Register
                    </div>
                    <div className="text-gray-400 max-w-md">
                      Centralized risk register with dynamic scoring, heat maps, and mitigation tracking
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                </div>
              </div>
              <div className="absolute -inset-8 bg-gradient-to-r from-red-500/30 to-orange-500/30 blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>

          {/* Right - Quick overview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="space-y-6">
              {riskSections.map((section, i) => {
                const IconComponent = section.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold mb-1">{section.title}</div>
                      <div className="text-gray-400">{section.items.length} comprehensive capabilities</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Expandable detailed sections */}
        <div className="space-y-6">
          {riskSections.map((section, i) => {
            const IconComponent = section.icon
            const isExpanded = expandedSection === i
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : i)}
                  className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-left">{section.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 grid md:grid-cols-2 gap-6">
                    {section.items.map((item, j) => (
                      <div key={j} className="flex gap-4">
                        <CheckCircle className={`w-6 h-6 flex-shrink-0 mt-1 bg-gradient-to-r ${section.color} text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                        <div>
                          <div className="font-semibold mb-1">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Analytics - Complete with ALL reporting features
function AnalyticsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const reportingFeatures = [
    { title: "C-Level Dashboards", desc: "Executive dashboards with key risk and compliance metrics" },
    { title: "Board Reporting", desc: "Board-ready reports on organizational risk posture and compliance status" },
    { title: "Regulatory Reporting", desc: "Automated generation of required regulatory reports and filings" },
    { title: "Management Reporting", desc: "Detailed reports for management teams and department heads" },
    { title: "Stakeholder Communication", desc: "Tailored reports for different stakeholder groups and audiences" }
  ]

  const predictiveFeatures = [
    { title: "Risk Forecasting", desc: "Predict future risk levels based on current trends and indicators" },
    { title: "Compliance Prediction", desc: "Forecast compliance gaps and potential violations" },
    { title: "Vendor Risk Intelligence", desc: "Predictive analytics for vendor risk and performance issues" }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Advanced Analytics & Reporting
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            AI-powered insights and predictive intelligence for proactive risk management
          </p>
        </motion.div>

        {/* HUGE Analytics Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 group"
        >
          <motion.div
            whileHover={{ y: -15, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            style={{
              transform: 'perspective(1600px) rotateX(4deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
              <div className="relative h-full flex items-center justify-center p-16">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 flex items-center justify-center"
                  >
                    <BarChart3 className="w-16 h-16 text-[#D33E9E]" />
                  </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: Analytics & Reporting Dashboard
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Executive dashboards with predictive analytics, risk forecasting, compliance predictions, and vendor intelligence
                  </div>
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-[#D33E9E]/40 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Two sections: Reporting & Predictive */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reporting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Reporting</h3>
            </div>
            
            <div className="space-y-4">
              {reportingFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="flex gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-[#D33E9E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-400">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Predictive Analytics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Predictive Analytics & Intelligence</h3>
            </div>
            
            <div className="space-y-4">
              {predictiveFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-[#D33E9E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-400">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Key Benefits - ALL 4 categories
function KeyBenefitsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      title: "Operational Excellence",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      items: [
        { title: "Process Automation", desc: "Automate routine GRC tasks and workflows to improve efficiency" },
        { title: "Centralized Management", desc: "Single platform for managing all governance, risk, and compliance activities" },
        { title: "Real-Time Visibility", desc: "Real-time dashboards and reporting for informed decision-making" },
        { title: "Resource Optimization", desc: "Optimize allocation of resources across GRC activities" }
      ]
    },
    {
      title: "Risk Reduction",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      items: [
        { title: "Proactive Risk Management", desc: "Identify and mitigate risks before they impact the business" },
        { title: "Third-Party Risk Control", desc: "Comprehensive management of vendor and partner risks" },
        { title: "Compliance Assurance", desc: "Ensure continuous compliance with regulatory requirements" },
        { title: "Incident Prevention", desc: "Reduce incidents through effective policy and control management" }
      ]
    },
    {
      title: "Business Value",
      icon: TrendingUp,
      color: "from-blue-500 to-purple-500",
      items: [
        { title: "Cost Reduction", desc: "Reduce costs associated with compliance, audits, and risk incidents" },
        { title: "Faster Decision-Making", desc: "Provide executives with timely risk and compliance information" },
        { title: "Competitive Advantage", desc: "Maintain competitive advantage through effective risk management" },
        { title: "Stakeholder Confidence", desc: "Build confidence with customers, investors, and regulators" }
      ]
    },
    {
      title: "Regulatory & Audit Efficiency",
      icon: Scale,
      color: "from-pink-500 to-red-500",
      items: [
        { title: "Audit Readiness", desc: "Maintain continuous audit readiness with automated evidence collection" },
        { title: "Regulatory Compliance", desc: "Streamline compliance with multiple regulatory frameworks" },
        { title: "Faster Audits", desc: "Reduce audit time and cost through efficient evidence management" },
        { title: "Reduced Penalties", desc: "Minimize regulatory penalties through proactive compliance management" }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Key Benefits</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Drive operational excellence, reduce risk, and create measurable business value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#D33E9E]/30 transition-all cursor-default"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold group-hover:text-[#D33E9E] transition-colors">{benefit.title}</h3>
                </div>

                <div className="space-y-4">
                  {benefit.items.map((item, j) => (
                    <div key={j} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D33E9E] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to transform your GRC program?
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            See how Suronex streamlines governance, reduces risk, and ensures compliance
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(211, 62, 158, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-xl"
            >
              Schedule a Demo
              <ArrowRight className="w-6 h-6" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white/20 rounded-lg font-semibold text-xl hover:bg-white/10 transition-all"
            >
              Download Whitepaper
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

