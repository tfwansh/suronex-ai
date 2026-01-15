// app/products/inventory-management/page.tsx
"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import {
  Database, Search, Filter, TrendingUp, Eye, Zap, Cloud, Server,
  Shield, Lock, AlertTriangle, CheckCircle, BarChart3, Activity,
  Layers, Globe, ArrowRight, FileText, Download, Bell, RefreshCw,
  Tags, Code, Users, Cpu, HardDrive, Network, Container, Key,
  ChevronDown, Sparkles
} from "lucide-react"
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

export default function AssetInventoryPage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Ambient background - SURONEX COLORS */}
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
      <AssetDiscoveryShowcase />
      <DeepContextShowcase />
      <DashboardShowcase />
      <DataExportShowcase />
      <ChangeDetectionShowcase />
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
              <Database className="w-4 h-4" />
              Multi-Cloud Asset Inventory & Visibility
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Complete visibility into{" "}
              <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
                your cloud universe
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Gain complete visibility into your cloud infrastructure with our unified asset inventory platform. Automatically discover, classify, and monitor every resource across AWS, Azure, GCP, and cloud-native environments like Kubernetes — all from a single pane of glass.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(211, 62, 158, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-lg transition-all"
              >
                Start Free Trial
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold text-lg transition-all"
              >
                View Demo
              </motion.button>
            </div>

            {/* Cloud Provider Badges - SURONEX GRADIENT */}
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'AWS', color: 'from-[#D33E9E] to-[#B83280]' },
                { name: 'Azure', color: 'from-[#3530BA] to-[#5850D8]' },
                { name: 'GCP', color: 'from-[#8B4FB8] to-[#D33E9E]' },
                { name: 'Kubernetes', color: 'from-[#3530BA] to-[#8B4FB8]' }
              ].map((provider, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${provider.color} bg-opacity-10 border border-white/20 font-semibold cursor-default`}
                >
                  {provider.name}
                </motion.div>
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
                        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/30 to-[#3530BA]/30 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Database className="w-12 h-12 text-[#D33E9E]" />
                      </motion.div>
                      <div className="text-white text-2xl font-bold mb-3">
                        📸 INSERT HERO SCREENSHOT
                      </div>
                      <div className="text-gray-400 max-w-md">
                        Unified Asset Inventory Dashboard - Complete visibility across AWS, Azure, GCP, and Kubernetes
                      </div>
                    </div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/10 via-transparent to-[#3530BA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
                <div className="absolute -inset-8 bg-gradient-to-r from-[#D33E9E]/30 via-[#8B4FB8]/20 to-[#3530BA]/30 blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Asset Discovery Showcase - COMPLETE with ALL features
function AssetDiscoveryShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const discoveryFeatures = [
    {
      title: "Automatic Discovery",
      desc: "Continuously identify all assets — compute, storage, databases, containers, IAM entities, and more — across multiple cloud providers.",
      icon: Search,
      color: "from-[#D33E9E] to-[#B83280]"
    },
    {
      title: "Continuous Updates",
      desc: "Inventory auto-refreshes as resources are created, modified, or deleted to ensure data accuracy.",
      icon: RefreshCw,
      color: "from-[#3530BA] to-[#5850D8]"
    },
    {
      title: "Smart Classification",
      desc: "Categorize assets by business criticality, environment (Prod/Dev/Test), owner, and compliance sensitivity.",
      icon: Tags,
      color: "from-[#8B4FB8] to-[#D33E9E]"
    },
    {
      title: "Shadow IT Detection",
      desc: "Instantly flag unauthorized or untagged resources to reduce hidden risks.",
      icon: Eye,
      color: "from-[#D33E9E] to-[#8B4FB8]"
    },
    {
      title: "Powerful Search",
      desc: "Locate any asset in seconds using simple, code-free queries and advanced filters.",
      icon: Filter,
      color: "from-[#3530BA] to-[#D33E9E]"
    }
  ]

  const assetTypes = [
    'Compute (EC2, VMs)',
    'Storage (S3, Blob)',
    'Databases (RDS, SQL)',
    'Containers (ECS, AKS)',
    'IAM Entities',
    'Network Resources',
    'Serverless Functions',
    'Kubernetes Clusters'
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
            Comprehensive Asset Discovery & Inventory
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Automatically discover, classify, and monitor every resource across your entire cloud infrastructure
          </p>
        </motion.div>

        {/* HUGE Screenshot Showcase */}
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
                    <Search className="w-16 h-16 text-[#D33E9E]" />
                  </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: Asset Discovery Dashboard
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                    Real-time asset discovery across AWS, Azure, GCP showing compute, storage, databases, containers, IAM entities, and network resources
                  </div>

                  {/* Asset type badges overlay */}
                  <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {assetTypes.slice(0, 4).map((type, i) => (
                      <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                        {type}
                      </div>
                    ))}
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
            <div className="absolute -inset-12 bg-gradient-to-r from-[#D33E9E]/40 via-[#8B4FB8]/30 to-[#3530BA]/40 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </motion.div>

        {/* Asset Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {assetTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 bg-white/5 border border-white/10 rounded-xl text-center font-semibold hover:border-[#D33E9E]/30 transition-all cursor-default"
            >
              {type}
            </motion.div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoveryFeatures.map((feature, i) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl group hover:border-[#D33E9E]/30 transition-all cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold mb-2 group-hover:text-[#D33E9E] transition-colors">{feature.title}</div>
                    <div className="text-sm text-gray-400">{feature.desc}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Deep Context Showcase
function DeepContextShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contextFeatures = [
    { title: "Associated vulnerabilities and misconfigurations", icon: AlertTriangle },
    { title: "IAM relationships and access control details", icon: Key },
    { title: "Risk score and compliance posture", icon: Shield }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - HUGE Screenshot */}
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
                      <Layers className="w-12 h-12 text-[#D33E9E]" />
                    </motion.div>
                    <div className="text-white text-2xl font-bold mb-3">
                      📸 INSERT: Asset Detail View
                    </div>
                    <div className="text-gray-400 max-w-md">
                      Comprehensive asset context showing vulnerabilities, IAM relationships, risk scores, and compliance mappings
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                </div>
              </div>
              <div className="absolute -inset-8 bg-gradient-to-r from-[#3530BA]/30 to-[#8B4FB8]/30 blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Deep Asset Context & Insights
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Click into any asset to access comprehensive details — from configurations and permissions to misconfigurations, compliance mappings, and event history.
            </p>

            <div className="space-y-6">
              {contextFeatures.map((feature, i) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#D33E9E]/30 transition-all cursor-default"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold">{feature.title}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Dashboard Showcase
function DashboardShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const dashboardViews = [
    {
      title: "Executive-Level Insights",
      desc: "Compliance scorecards, risk trends, and posture summaries for leadership visibility.",
      icon: TrendingUp,
      color: "from-[#D33E9E] to-[#B83280]"
    },
    {
      title: "Engineer-Friendly Views",
      desc: "Drill-downs into specific assets, configurations, or incidents.",
      icon: Code,
      color: "from-[#3530BA] to-[#5850D8]"
    },
    {
      title: "Customizable Dashboards",
      desc: "Tailor views for CISOs, DevOps, or Audit teams to align with operational goals.",
      icon: Layers,
      color: "from-[#8B4FB8] to-[#D33E9E]"
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
            Unified Dashboard Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get a holistic, role-based view of your multicloud environment through a unified dashboard
          </p>
        </motion.div>

        {/* HUGE Dashboard Screenshot */}
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
                    <BarChart3 className="w-16 h-16 text-[#D33E9E]" />
                  </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: Unified Dashboard
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Role-based dashboard views for executives, engineers, and audit teams with customizable layouts
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="absolute -inset-12 bg-gradient-to-r from-[#D33E9E]/40 via-[#8B4FB8]/30 to-[#3530BA]/40 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Dashboard Views Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dashboardViews.map((view, i) => {
            const IconComponent = view.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#D33E9E]/30 transition-all cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${view.color} flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D33E9E] transition-colors">{view.title}</h3>
                <p className="text-gray-400">{view.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Data Export Showcase
function DataExportShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const exportFormats = ['CSV', 'JSON', 'Excel', 'PDF']
  const biTools = [
    { name: 'Microsoft Excel', icon: FileText },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Tableau', icon: TrendingUp },
    { name: 'Custom BI Tools', icon: Database }
  ]

  return (
    <section ref={ref} className="py-32 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Flexible Data Access & Export
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Export your asset inventory and compliance data in one click for deeper analysis in Excel, Power BI, or other BI tools.
            </p>

            {/* Export Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              {exportFormats.map((format, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(211, 62, 158, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:border-[#D33E9E]/50 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export as {format}
                </motion.button>
              ))}
            </div>

            {/* BI Tools List */}
            <div className="space-y-4">
              {biTools.map((tool, i) => {
                const IconComponent = tool.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#D33E9E]/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium flex-1">{tool.name}</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="group"
          >
            <motion.div
              whileHover={{ x: 10, y: -10, rotateY: -3 }}
              transition={{ duration: 0.4 }}
              style={{
                transform: 'perspective(1200px) rotateY(-8deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
                <div className="relative h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 flex items-center justify-center"
                    >
                      <Download className="w-12 h-12 text-[#D33E9E]" />
                    </motion.div>
                    <div className="text-white text-2xl font-bold mb-3">
                      📸 INSERT: Data Export Interface
                    </div>
                    <div className="text-gray-400 max-w-md">
                      One-click export to CSV, JSON, Excel, PDF with seamless BI tool integrations
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                </div>
              </div>
              <div className="absolute -inset-8 bg-gradient-to-r from-[#D33E9E]/30 to-[#8B4FB8]/30 blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Change Detection Showcase
function ChangeDetectionShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const alertTypes = [
    { type: 'New Asset Created', severity: 'info', time: '2 minutes ago', icon: Sparkles },
    { type: 'Configuration Drift Detected', severity: 'warning', time: '15 minutes ago', icon: AlertTriangle },
    { type: 'Public Exposure Risk', severity: 'critical', time: '1 hour ago', icon: Shield },
    { type: 'Asset Deleted', severity: 'info', time: '3 hours ago', icon: Database }
  ]

  const alertChannels = [
    { name: 'Email', enabled: true },
    { name: 'Slack', enabled: true },
    { name: 'PagerDuty', enabled: true },
    { name: 'Webhooks', enabled: false }
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
            Change Detection & Real-Time Alerts
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay ahead of change with instant alerts for new, modified, or deleted assets, configuration drift, and exposure risks — ensuring you never miss a critical event.
          </p>
        </motion.div>

        {/* HUGE Alert Screenshot */}
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
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center"
                  >
                    <Bell className="w-16 h-16 text-orange-400" />
                  </motion.div>
                  <div className="text-white text-3xl font-bold mb-4">
                    📸 INSERT: Real-Time Alerts Dashboard
                  </div>
                  <div className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Live change detection showing new assets, configuration drift, exposure risks, and deletions with multi-channel alerting
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            <div className="absolute -inset-12 bg-gradient-to-r from-red-500/40 via-orange-500/30 to-yellow-500/40 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Alert Types */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Recent Alerts</h3>
            {alertTypes.map((alert, i) => {
              const IconComponent = alert.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#D33E9E]/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      alert.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      alert.severity === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-[#D33E9E]/20 text-[#D33E9E]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-[#D33E9E] transition-colors">{alert.type}</div>
                      <div className="text-sm text-gray-500">{alert.time}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded text-xs font-medium ${
                    alert.severity === 'critical' ? 'bg-red-500/10 border border-red-500/20 text-red-400' :
                    alert.severity === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400' :
                    'bg-[#D33E9E]/10 border border-[#D33E9E]/20 text-[#D33E9E]'
                  }`}>
                    {alert.severity}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Alert Channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Alert Channels</h3>
            <div className="space-y-4">
              {alertChannels.map((channel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                >
                  <span className="font-medium">{channel.name}</span>
                  <div className={`w-12 h-6 rounded-full ${channel.enabled ? 'bg-[#D33E9E]' : 'bg-gray-600'} relative cursor-pointer`}>
                    <motion.div
                      animate={{ x: channel.enabled ? 24 : 4 }}
                      className="absolute top-1 w-4 h-4 bg-white rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#D33E9E]/10 border border-[#D33E9E]/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#D33E9E] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#D33E9E] mb-1">Instant Notifications</div>
                  <div className="text-sm text-gray-400">Get notified within seconds of any infrastructure change</div>
                </div>
              </div>
            </div>
          </motion.div>
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
            Ready to gain complete cloud visibility?
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            Start discovering, classifying, and monitoring your entire cloud infrastructure today
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "5-minute", sublabel: "Setup" },
              { label: "Agentless", sublabel: "Deployment" },
              { label: "30-day", sublabel: "Free Trial" },
              { label: "24/7", sublabel: "Support" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(211, 62, 158, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-xl"
            >
              Start Free Trial
              <ArrowRight className="w-6 h-6" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white/20 rounded-lg font-semibold text-xl hover:bg-white/10 transition-all"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

