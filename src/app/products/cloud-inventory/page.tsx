'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Database,
  Search,
  Layers,
  Eye,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  BarChart3,
  Users,
  Lock,
  Activity,
  Download,
  Rocket,
  Headphones,
  CreditCard
} from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import { Footer } from '@/app/components/footer'

const SubtleHighlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block mx-0.5">
      <span className="relative z-10 text-gray-100 font-medium">
        {children}
      </span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-[#D33E9E]/5 to-[#3530BA]/5 -skew-x-6 rounded-sm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      />
    </span>
  )
}

export default function CloudInventoryPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D33E9E] selection:text-white relative overflow-hidden font-light">
      {/* Background - Fixed subtle noise */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#D33E9E]/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      <Navbar />

      <div className="relative">
        <HeroSection />
        <AssetDiscoverySection />
        <DeepContextSection />
        <UnifiedDashboardSection />
        <DataExportSection />
        <ClosingSection />
        <GettingStartedSection />
        <FinalCTA />
      </div>

      <Footer />
    </main>
  )
}

/* ============================================
   HERO SECTION
   ============================================ */
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-10 overflow-hidden">
      {/* Animated Glow Blobs - Reduced Intensity */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full mix-blend-screen bg-[#D33E9E]/10 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full mix-blend-screen bg-[#3530BA]/10 blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 ring-1 ring-white/5"
        >
          <Database className="w-3.5 h-3.5 text-[#D33E9E]" />
          <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">Cloud Inventory</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
          <span className="block text-white">Multi-Cloud Asset</span>
          <span className="block">
            <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
              Inventory & Visibility
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 font-light"
        >
          Gain complete, real-time visibility across your entire cloud footprint with Suronex's unified multi-cloud inventory. Automatically discover, classify, and track every asset across public clouds, cloud-native platforms like Kubernetes, and SaaS applications—all from a <SubtleHighlight>single pane of glass</SubtleHighlight>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          As cloud environments grow and change rapidly, Suronex ensures you always know <SubtleHighlight>what you have</SubtleHighlight>, <SubtleHighlight>where it lives</SubtleHighlight>, <SubtleHighlight>who owns it</SubtleHighlight>, and <SubtleHighlight>what risk it carries</SubtleHighlight>.
        </motion.p>
      </motion.div>
    </section>
  )
}

/* ============================================
   COMPREHENSIVE ASSET DISCOVERY SECTION
   ============================================ */
function AssetDiscoverySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Define features with specific fluid highlights
  const features = [
    { text: "discovery of compute, storage, databases, containers, Kubernetes resources, IAM entities, and more", highlight: "Automatic discovery" },
    { text: "inventory updates as resources are created, modified, or deleted", highlight: "Continuous inventory" },
    { text: "classification by environment (Prod/Dev/Test), owner, business criticality, and compliance sensitivity", highlight: "Smart asset classification" },
    { text: "to instantly flag untagged or unauthorized resources", highlight: "Shadow IT detection" },
    { text: "with filters to locate any asset in seconds", highlight: "Powerful, code-free search" }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Comprehensive Asset{' '}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">Discovery & Inventory</span>
          </h2>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
            Suronex continuously discovers and inventories assets across your multi-cloud and SaaS environments—without agents or manual effort.
          </p>

          <div className="space-y-5">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E] mt-2 flex-shrink-0 shadow-[0_0_8px_#D33E9E]" />
                <p className="text-gray-300 leading-relaxed text-base font-light">
                  <span className="text-white font-medium mr-1">{item.highlight}</span>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Card - Resource Types - Adjusted Height */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] w-full">
            {/* Glass highlights */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />

            <Image
              src="/images/inventory-resource-types.png"
              alt="Comprehensive Asset Discovery"
              width={800}
              height={600}
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
          {/* Decorative backdrop */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] opacity-10 blur-2xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   DEEP ASSET CONTEXT SECTION
   ============================================ */
function DeepContextSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const featureList = [
    "Detailed configurations",
    "Associated vulnerabilities",
    "IAM relationships",
    "Asset-level risk scores",
    "Change history"
  ]
  const featureSuffixes = [
    " and permissions",
    " and misconfigurations",
    " and access paths",
    " and compliance mappings",
    " and security events"
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden bg-white/[0.015]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image Card Left - Resource Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 relative h-full flex items-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] group w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3530BA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

            <Image
              src="/images/inventory-resource-details.png"
              alt="Deep Asset Context"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#3530BA]/20 blur-[60px] -z-10" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="px-2.5 py-1 rounded-full border border-[#3530BA]/30 bg-[#3530BA]/10 text-[#7a75e6] text-xs font-semibold uppercase tracking-wider">
              Context Aware
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Deep Asset Context &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3530BA] to-[#D33E9E]">Risk Insights</span>
          </h2>

          <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Every asset in Suronex comes with <SubtleHighlight>rich contextual intelligence</SubtleHighlight>, helping teams understand risk, compliance impact, and relationships instantly.
          </p>

          <div className="grid gap-3">
            {featureList.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="flex items-center gap-3 p-3.5 rounded-lg border border-white/5 bg-white/[0.01] transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-[#3530BA]/20 flex items-center justify-center flex-shrink-0 text-[#7a75e6]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-gray-300 text-sm font-light">
                  <span className="text-white font-medium">{text}</span>
                  {featureSuffixes[i]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   UNIFIED DASHBOARDS SECTION
   ============================================ */
function UnifiedDashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cardData = [
    { highlight: "Executive views", text: "with posture summaries, risk trends, and compliance scorecards" },
    { highlight: "Engineer-friendly drill-downs", text: "into assets, configurations, and incidents" },
    { highlight: "Customizable dashboards", text: "for CXOs, DevOps, Security, and Audit teams" }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Unified,{' '}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">Role-Based Dashboards</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Suronex provides a <SubtleHighlight>single, unified dashboard</SubtleHighlight> tailored to different stakeholders across the organization.
          </p>
        </motion.div>

        {/* Dashboard Image Feature - Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, type: "spring", damping: 30 }}
          className="relative max-w-4xl mx-auto mb-16 perspective-1000"
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(211,62,158,0.1)] bg-[#050505]">
            <Image
              src="/images/inventory-summary.png"
              alt="Unified Dashboards"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {cardData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D33E9E]/20 transition-all text-center group"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[#D33E9E]/10 to-[#3530BA]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {i === 0 ? <BarChart3 className="w-5 h-5 text-gray-200" /> :
                  i === 1 ? <Search className="w-5 h-5 text-gray-200" /> :
                    <Users className="w-5 h-5 text-gray-200" />}
              </div>
              <p className="text-gray-300 leading-relaxed text-sm font-light">
                <span className="block text-white font-medium mb-1 text-base">{item.highlight}</span>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   FLEXIBLE DATA EXPORT SECTION
   ============================================ */
function DataExportSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    { highlight: "Support for Excel", text: "Power BI, and other BI tools" },
    { highlight: "Audit-ready data", text: "for compliance and governance needs" }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden bg-gradient-to-b from-black to-[#050505]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D33E9E]/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Flexible Data{' '}
            <span className="bg-gradient-to-r from-[#3530BA] to-[#D33E9E] text-transparent bg-clip-text">Access & Export</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Export asset inventory, risk, and compliance data with <SubtleHighlight>one click</SubtleHighlight> for reporting or deeper analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3530BA] to-[#D33E9E] p-[1px] mb-4 rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                  {i === 0 ? <Download className="w-6 h-6 text-white" /> : <Shield className="w-6 h-6 text-white" />}
                </div>
              </div>
              <p className="text-lg font-medium text-white mb-2">{i === 0 ? "Seamless Integration" : "Compliance Ready"}</p>
              <p className="text-gray-400 leading-relaxed text-sm font-light">
                <span className="text-gray-200 font-normal">{item.highlight}</span>, {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CLOSING SECTION
   ============================================ */
function ClosingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-10 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Know Every Asset.{' '}
            <span className="block mt-2 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">Control Every Risk.</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Suronex turns multi-cloud inventory from static lists into <SubtleHighlight>living intelligence</SubtleHighlight>—giving teams clarity, control, and confidence across the entire cloud stack.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   GETTING STARTED SECTION
   ============================================ */
function GettingStartedSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const sections = [
    {
      icon: Rocket,
      title: 'Quick Deployment',
      features: [
        { title: '5-minute Setup:', desc: 'Connect your cloud accounts in minutes with read-only access' },
        { title: 'Agentless Architecture:', desc: 'No agents to install or maintain across your infrastructure' },
        { title: 'Immediate Value:', desc: 'Start seeing security insights within minutes of deployment' },
        { title: 'Gradual Rollout:', desc: 'Phase deployment across environments and teams' }
      ]
    },
    {
      icon: Headphones,
      title: 'Implementation Support',
      features: [
        { title: 'Dedicated Customer Success:', desc: 'Assigned customer success manager for onboarding' },
        { title: 'Professional Services:', desc: 'Optional implementation and customization services' },
        { title: 'Training Program:', desc: 'Comprehensive training programs for your security team' },
        { title: 'Support:', desc: 'Dedicated technical support and assistance' }
      ]
    },
    {
      icon: CreditCard,
      title: 'Pricing Models',
      features: [
        { title: 'Cloud Spend Based Pricing:', desc: 'Pay based on your cloud spending' },
        { title: 'Flexible Licensing:', desc: 'Monthly or annual subscription options' },
        { title: 'Enterprise Packages:', desc: 'Custom pricing for large-scale deployments' },
        { title: 'Free Trial:', desc: '30-day full-featured trial with no commitment' }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative bg-white/[0.01]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3530BA]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Getting <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">Started</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, i) => {
            const IconComp = section.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:bg-white/[0.05] transition-all group shadow-xl"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                    <IconComp className="w-7 h-7 text-[#D33E9E] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-white leading-tight">{section.title}</h4>
                </div>

                <div className="space-y-5">
                  {section.features.map((feature, j) => (
                    <div key={j} className="flex flex-col gap-1.5">
                      <div className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3530BA] shadow-[0_0_8px_#3530BA] mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-gray-100 text-base block">{feature.title}</span>
                          <span className="text-base text-gray-400 font-light leading-relaxed">{feature.desc}</span>
                        </div>
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

/* ============================================
   FINAL CTA - Whitepaper Style
   ============================================ */
function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-10 px-6 pb-10">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          {/* Gradient Border Wrapper - Refined */}
          <div className="p-0.5 rounded-[32px] bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA]">
            <div className="bg-black/90 backdrop-blur-xl rounded-[27px] p-8 md:p-12 text-center shadow-[0_0_80px_rgba(211,62,158,0.15)]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight">
                Stop Guessing.{' '}
                <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">Start Securing.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto font-light">
                Take control of your multi-cloud inventory with complete visibility and automated asset management.
              </p>
              <Link
                href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-base font-bold hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
