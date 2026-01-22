'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield,
  Zap,
  Brain,
  Eye,
  Lock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Rocket,
  FileText,
  DollarSign,
  Activity,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
  BarChart3,
  Users,
  Headphones,
  CreditCard,
  Target
} from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import { Footer } from '@/app/components/footer'

// Fluid Text Animation Component


const SubtleHighlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block mx-0.5">
      <span className="relative z-10 text-gray-100 font-medium">{children}</span>
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



export default function CloudSecurityPage() {
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
        <ProblemSection />
        <SolutionSection />
        <ContinuousSecuritySection />
        <ProactivePreventionSection />
        <AIIntelligenceSection />
        <CentralizedControlSection />
        <ExecutiveVisibilitySection />
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
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-10 overflow-hidden">
      {/* Gradient Orbs - Refined */}
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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: "easeOut" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 ring-1 ring-white/5"
          >
            <Shield className="w-3.5 h-3.5 text-[#D33E9E]" />
            <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">Cloud Security</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
            <span className="block text-white">Cloud Security,</span>
            <span className="block">
              <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
                Built for Multi-Cloud Reality
              </span>
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mt-6">
            Secure your entire cloud stack with <SubtleHighlight>AI-driven context</SubtleHighlight> and automated remediation.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ============================================
   PROBLEM SECTION - REDESIGNED
   ============================================ */
function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      icon: Shield,
      value: "95%",
      description: "of cloud security incidents are caused by misconfigurations",
      gradient: "from-[#D33E9E]/20 to-[#ff6b6b]/20"
    },
    {
      icon: Activity,
      description: "Security teams struggle with alert fatigue, manual audits, and limited context",
      gradient: "from-[#3530BA]/20 to-[#D33E9E]/20"
    },
    {
      icon: Zap,
      description: "Compliance and audit preparation slows down innovation",
      gradient: "from-[#ff6b6b]/20 to-[#3530BA]/20"
    }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden">
      {/* Subtle backdrop blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D33E9E]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4">
            The Problem:{' '}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#ff6b6b] text-transparent bg-clip-text">
              Cloud Security Is Fragmented
            </span>{' '}
            and Error-Prone
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Problem Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] rounded-full" />
              <div className="space-y-6 pl-2">
                <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
                  As organizations scale across AWS, Azure, Google Cloud, Oracle Cloud, and SaaS platforms, cloud security becomes increasingly <SubtleHighlight>complex</SubtleHighlight>.
                </p>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
                  Misconfigurations, excessive permissions, exposed resources, and inconsistent policies remain the leading cause of cloud security incidents.
                </p>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
                  Traditional tools rely on manual reviews, siloed visibility, and reactive alerts—leaving teams overwhelmed and risks unnoticed until it's too late.
                </p>
              </div>
            </div>

            {/* Subtle trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4 mt-4 border-t border-white/5"
            >
              <p className="text-sm text-gray-400 font-light italic">
                Don't let security gaps slow your cloud innovation
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5"
          >
            {stats.map((stat, i) => {
              const IconComp = stat.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${stat.gradient} backdrop-blur-sm hover:border-[#D33E9E]/30 transition-all duration-300`}
                >
                  {/* Icon or Value */}
                  <div className="flex items-start gap-4">
                    {stat.value ? (
                      <div className="flex-1">
                        <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-[#D33E9E] to-[#ff6b6b] text-transparent bg-clip-text mb-3">
                          {stat.value}
                        </div>
                        <p className="text-base text-gray-200 leading-relaxed font-light">
                          {stat.description}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                          <IconComp className="w-5 h-5 text-[#D33E9E]" />
                        </div>
                        <p className="text-base text-gray-200 leading-relaxed font-light flex-1">
                          {stat.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D33E9E]/0 to-[#3530BA]/0 group-hover:from-[#D33E9E]/5 group-hover:to-[#3530BA]/5 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SOLUTION SECTION - REDESIGNED
   ============================================ */
function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: Eye,
      title: "Unified Visibility",
      description: "Continuous monitoring across your entire cloud stack"
    },
    {
      icon: Target,
      title: "AI-Powered Intelligence",
      description: "Contextual risk analysis with intelligent prioritization"
    },
    {
      icon: Zap,
      title: "Automated Remediation",
      description: "Guided fixes that turn security into a proactive capability"
    }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3530BA]/5 via-transparent to-[#D33E9E]/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-tight">
            How Suronex{' '}
            <span className="bg-gradient-to-r from-[#3530BA] to-[#D33E9E] text-transparent bg-clip-text">
              Solves Cloud Security
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-5 text-base md:text-lg text-gray-200 leading-relaxed font-light">
            <p>
              Suronex delivers a unified, <SubtleHighlight>AI-first Cloud Security platform</SubtleHighlight> that continuously monitors, analyzes, and secures your entire cloud stack—across infrastructure, identities, networks, data, and SaaS—within a truly multi-cloud ecosystem.
            </p>
            <p>
              Our platform automatically detects misconfigurations, contextual risks, and security gaps, then guides teams with <SubtleHighlight>AI-powered remediation</SubtleHighlight> and intelligent prioritization, turning cloud security into a proactive, scalable capability.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature, i) => {
            const IconComp = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#3530BA]/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3530BA]/20 to-[#D33E9E]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <IconComp className="w-6 h-6 text-[#D33E9E]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3530BA] group-hover:to-[#D33E9E] transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#3530BA] to-[#D33E9E] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D33E9E]/0 to-[#3530BA]/0 group-hover:from-[#D33E9E]/10 group-hover:to-[#3530BA]/10 rounded-2xl blur-xl transition-all duration-300" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 font-light">
            Transform reactive alerts into{' '}
            <span className="text-[#D33E9E] font-medium">proactive security</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}


/* ============================================
   CONTINUOUS SECURITY SECTION
   ============================================ */
function ContinuousSecuritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    "1,250+ built-in security checks aligned with cloud provider best practices",
    "Custom policy engine to define and enforce organization-specific security rules",
    "Baseline security monitoring to detect deviations in real time",
    "Risk-based prioritization using AI-driven scoring based on impact, exposure, and exploitability",
    "AI-guided remediation with step-by-step instructions via Console or CLI"
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-4"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            <SubtleHighlight>Continuous, Automated</SubtleHighlight>{' '}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Security Assessment
            </span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TabbedImageCarousel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-5"
          >
            {features.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E] mt-2 flex-shrink-0 shadow-[0_0_8px_#D33E9E]" />
                <p className="text-gray-300 leading-relaxed text-base font-light">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TabbedImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { src: '/images/compliance-aws.png', alt: 'AWS Compliance', label: 'AWS' },
    { src: '/images/compliance-azure.png', alt: 'Azure Compliance', label: 'Azure' },
    { src: '/images/compliance-gcp.png', alt: 'GCP Compliance', label: 'GCP' },
  ]

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#D33E9E]/10 to-[#3530BA]/10 rounded-2xl blur-2xl" />
        <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#0a0a0a] shadow-2xl">
          <div className="relative aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-2"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex
              ? 'bg-[#D33E9E] w-8'
              : 'bg-white/20 hover:bg-white/40'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

/* ============================================
   PROACTIVE PREVENTION
   ============================================ */
function ProactivePreventionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { label: 'Overview', src: '/images/overview.png' },
    { label: 'Remediation', src: '/images/remediation-guide.png' },
  ]

  useEffect(() => {
    const interval = setInterval(() => setActiveTab((prev) => (prev + 1) % tabs.length), 3000)
    return () => clearInterval(interval)
  }, [tabs.length])

  const features = [
    { icon: Shield, text: "Eliminate misconfigurations before they are exploited" },
    { icon: Lock, text: "Strengthen IAM controls by monitoring permissions, roles, and access policies" },
    { icon: Eye, text: "Secure networks with continuous checks on segmentation, firewalls, and encryption" },
    { icon: Lock, text: "Prevent data exposure by identifying public resources and overly permissive access" }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden bg-white/[0.015]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            <SubtleHighlight>Proactive Risk Prevention</SubtleHighlight>{' '}
            <span className="bg-gradient-to-r from-[#3530BA] to-[#D33E9E] text-transparent bg-clip-text">
              Across the Cloud Stack
            </span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 order-2 lg:order-1"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] mt-2 flex-shrink-0 shadow-[0_0_8px_#D33E9E]" />
                <p className="text-base text-gray-200 leading-relaxed font-light">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex justify-center gap-4 mb-6">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${i === activeTab
                    ? 'bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-[0_0_20px_rgba(211,62,158,0.3)] transform scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-l from-[#D33E9E]/10 to-[#3530BA]/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#0a0a0a] shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={tabs[activeTab].src}
                        alt={tabs[activeTab].label}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   AI INTELLIGENCE
   ============================================ */
function AIIntelligenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cards = [
    { title: "Context-Aware Alerting", text: "Intelligent alerting that reduces noise through context-aware prioritization" },
    { title: "Anomaly Detection", text: "Using machine learning to identify unusual behavior patterns" },
    { title: "Predictive Analytics", text: "Surface risks and compliance gaps before incidents occur" },
    { title: "Smart Recommendations", text: "Security improvements and optimization suggestions" },
    { title: "Behavioral Analysis", text: "Distinguish normal vs. abnormal cloud activity" }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            <SubtleHighlight>AI-Driven Intelligence</SubtleHighlight>,{' '}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Not Alert Noise
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-[#D33E9E]/40 transition-all group"
            >
              <h4 className="text-white font-bold mb-3 text-base group-hover:text-[#D33E9E] transition-colors">
                {card.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CENTRALIZED CONTROL
   ============================================ */
function CentralizedControlSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: "83%", label: "reduction in security incidents" },
    { value: "60%", label: "faster compliance reporting" },
    { value: "40%", label: "team efficiency improvement" }
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative overflow-hidden bg-white/[0.015]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Centralized Control
            </span>{' '}
            & Operational Efficiency
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light mb-8">
              Suronex provides a single pane of glass for multi-cloud security visibility, automating up to 80% of routine security tasks.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#D33E9E]/10 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#D33E9E]" />
                </div>
                <span className="text-gray-200 text-base font-light">Built-in collaboration workflows</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#3530BA]/10 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#3530BA]" />
                </div>
                <span className="text-gray-200 text-base font-light">Unified remediation tracking</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#D33E9E]/10 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#D33E9E]" />
                </div>
                <span className="text-gray-200 text-base font-light">Faster response times</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-[#3530BA]/10 border border-white/10 backdrop-blur-sm"
          >
            <p className="text-xs text-gray-300 uppercase tracking-widest mb-8 font-bold">Proven Impact</p>
            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text min-w-[100px]">
                    {stat.value}
                  </span>
                  <span className="text-gray-200 text-base">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   EXECUTIVE VISIBILITY
   ============================================ */
function ExecutiveVisibilitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    "Executive dashboards for real-time security posture and risk trends",
    "Custom reports for security, compliance, and leadership teams",
    "Trend analysis and benchmarking against industry best practices"
  ]

  return (
    <section ref={ref} className="py-10 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            <SubtleHighlight>Executive Visibility</SubtleHighlight> &{' '}
            <span className="bg-gradient-to-r from-[#3530BA] to-[#D33E9E] text-transparent bg-clip-text">
              Measurable Outcomes
            </span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">See the Big Picture</h4>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
              Gain instant insights into your security posture over time. Track improvements, identify recurring issues, and demonstrate value to stakeholders.
            </p>
            <div className="space-y-4">
              {features.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.04]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] mt-2 flex-shrink-0" />
                  <p className="text-gray-200 leading-relaxed text-base font-light">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
              <Image
                src="/images/gcp-compliance-trend.png"
                alt="Executive Visibility Trends"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-[#D33E9E]/20 blur-[100px] -z-10" />
          </motion.div>
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
    <section ref={ref} className="py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight">
            <SubtleHighlight>Cloud Security That</SubtleHighlight>{' '}
            <span className="block mt-2 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Scales With You
            </span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Suronex transforms cloud security from reactive monitoring into <SubtleHighlight>continuous, intelligent protection</SubtleHighlight>—secure by design, AI-powered, and built for modern multi-cloud environments.
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

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
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
                  <h4 className="text-xl font-bold text-white leading-tight">{section.title}</h4>
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
   FINAL CTA
   ============================================ */
function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-10 px-6 pb-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="p-0.5 rounded-[32px] bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA]">
            <div className="bg-black/90 backdrop-blur-xl rounded-[27px] p-8 md:p-12 text-center shadow-[0_0_80px_rgba(211,62,158,0.15)]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight tracking-tight">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
                  Cloud Security?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto font-light">
                See how Suronex automates compliance, reduces remediation time, and eliminates security blind spots.
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

