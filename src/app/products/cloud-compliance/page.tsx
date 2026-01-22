'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  BarChart3,
  Users,
  Activity,
  Rocket,
  Headphones,
  CreditCard,
  Layers,
  Zap,
  Eye,
  Target
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

export default function CloudCompliancePage() {
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
        <ContinuousComplianceSection />
        <OnePlatformSection />
        <FlexibleEngineSection />
        <ContextualRiskSection />
        <FasterAuditsSection />
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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Animated Glow Blobs */}
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
          <Shield className="w-3.5 h-3.5 text-[#D33E9E]" />
          <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">Cloud Compliance</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
          <span className="block text-white">Cloud Compliance,</span>
          <span className="block">
            <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
              Built for Continuous Change
            </span>
          </span>
        </h1>
      </motion.div>
    </section>
  )
}

/* ============================================
   IMAGE TICKER COMPONENT - FIXED HEIGHT
   ============================================ */
function ImageTicker({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />

      {/* Fixed aspect ratio container to prevent height jumping */}
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Ticker Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex
              ? 'bg-[#D33E9E] w-8'
              : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

/* ============================================
   PROBLEM SECTION - CENTERED HEADING
   ============================================ */
function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const tickerImages = [
    { src: '/images/Screenshot 2026-01-21 at 7.41.59 PM.png', alt: 'Frameworks' },
    { src: '/images/critical-findings.png', alt: 'Critical Findings' },
    { src: '/images/Screenshot 2026-01-21 at 7.39.24 PM.png', alt: 'Unified Platform - Findings by Region' },
    { src: '/images/threats.png', alt: 'Threat Detection' }
  ]

  return (
    <section ref={ref} className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
            The Problem:{' '}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Compliance Is No Longer Periodic
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-5xl mx-auto">
            <p>
              In today's <SubtleHighlight>multi-cloud environments</SubtleHighlight>, compliance is no longer a <SubtleHighlight>point-in-time activity</SubtleHighlight>. A <SubtleHighlight>single cloud misconfiguration</SubtleHighlight> can lead to data exposure, audit failures, or regulatory penalties. As organizations scale across <SubtleHighlight>AWS, Azure, Google Cloud, Oracle Cloud, Kubernetes, and SaaS platforms</SubtleHighlight>, managing compliance through manual checks, siloed tools, and periodic audits becomes slow, error-prone, and unsustainable.
            </p>
            <p>
              Security teams struggle with <SubtleHighlight>fragmented visibility</SubtleHighlight>, <SubtleHighlight>continuous configuration changes</SubtleHighlight>, and <SubtleHighlight>increasing regulatory pressure</SubtleHighlight>—making it difficult to stay compliant without slowing innovation.
            </p>
          </div>
        </motion.div>

        {/* Image Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <ImageTicker images={tickerImages} />
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SOLUTION SECTION - CENTERED HEADING
   ============================================ */
function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const tickerImages = [
    //{ src: '/images/Screenshot 2026-01-21 at 7.37.24 PM.png', alt: 'AWS Baseline Controls' },
    { src: '/images/Screenshot 2026-01-21 at 7.42.42 PM.png', alt: 'Compliance Overview Dashboard' },
    { src: '/images/integrations-overview.png', alt: 'Integrations Overview' }
  ]

  return (
    <section ref={ref} className="py-12 px-6 relative overflow-hidden bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
            How Suronex{' '}
            <span className="bg-gradient-to-r from-[#3530BA] to-[#D33E9E] text-transparent bg-clip-text">
              Solves Cloud Compliance
            </span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed font-light mb-8 max-w-5xl mx-auto">
            <p>
              Suronex delivers a <SubtleHighlight>unified, AI-powered Cloud Compliance platform</SubtleHighlight> that embeds compliance directly into your cloud operations. With <SubtleHighlight>continuous monitoring</SubtleHighlight>, <SubtleHighlight>automated evidence collection</SubtleHighlight>, and <SubtleHighlight>contextual risk analysis</SubtleHighlight>, Suronex helps organizations achieve and maintain compliance—<SubtleHighlight>without manual overhead or blind spots</SubtleHighlight>.
            </p>
            <p>
              The platform continuously scans your entire cloud stack to identify <SubtleHighlight>misconfigurations</SubtleHighlight>, <SubtleHighlight>compliance violations</SubtleHighlight>, and <SubtleHighlight>risk exposures</SubtleHighlight>, enabling teams to remediate issues <SubtleHighlight>before they become audit or security incidents</SubtleHighlight>.
            </p>
          </div>

          {/* Image Ticker */}
          <div className="max-w-4xl mx-auto">
            <ImageTicker images={tickerImages} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   CONTINUOUS COMPLIANCE MONITORING
   ============================================ */
function ContinuousComplianceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    "Always-on compliance monitoring across multi-cloud environments",
    "Fully automated assessments with real-time alerts",
    "AI-guided remediation to quickly resolve violations",
    "Integrations for automated notifications and workflows"
  ]

  return (
    <section ref={ref} className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">Continuous</span>{' '}
            Compliance Monitoring
          </h2>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
            Compliance doesn't stop after an audit. Suronex <SubtleHighlight>continuously monitors</SubtleHighlight> your cloud infrastructure, cloud-native services, identities, and SaaS platforms against selected <SubtleHighlight>regulatory frameworks and security standards</SubtleHighlight>.
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
                <p className="text-gray-300 leading-relaxed text-base font-light">{item}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-gray-300 mt-8 leading-relaxed font-light italic">
            Suronex ensures your compliance posture stays up to date as your environment evolves.
          </p>
        </motion.div>

        {/* Image: Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/Screenshot 2026-01-21 at 7.40.56 PM.png"
                alt="Compliance Standards"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] opacity-10 blur-2xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   ONE PLATFORM SECTION - SIMPLIFIED QUOTE
   ============================================ */
function OnePlatformSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    "Built-in integrations across cloud providers, Kubernetes, and SaaS",
    "Continuous monitoring without operational complexity",
    "On-demand integrations based on customer requirements"
  ]

  return (
    <section ref={ref} className="py-12 px-6 relative overflow-hidden bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight text-center">
            One Platform for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3530BA] to-[#D33E9E]">
              Security & Compliance
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light text-center max-w-3xl mx-auto">
            Suronex unifies <SubtleHighlight>cloud security and compliance</SubtleHighlight> into a <SubtleHighlight>single control plane</SubtleHighlight>, eliminating the need for multiple point solutions.
          </p>

          <div className="space-y-4 mb-10 max-w-4xl mx-auto">
            {features.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#3530BA] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed text-base font-light">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Simplified Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-3xl mx-auto text-center py-12 px-8"
          >
            <div className="relative">
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-4 tracking-tight">
                Security and compliance work{' '}
                <span className="font-bold bg-gradient-to-r from-[#3530BA] to-[#D33E9E] text-transparent bg-clip-text">
                  together
                </span>
                —by design.
              </p>
              <motion.div
                className="h-[2px] w-24 bg-gradient-to-r from-[#3530BA] to-[#D33E9E] rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   FLEXIBLE COMPLIANCE ENGINE
   ============================================ */
function FlexibleEngineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    "40+ built-in frameworks including SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, NIST, and more",
    "Bring Your Own Compliance (BYOC) to define custom standards and policies",
    "Tailor built-in controls to internal security requirements",
    "Manage multiple frameworks from a single dashboard"
  ]

  return (
    <section ref={ref} className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <SubtleHighlight>Flexible, Customizable</SubtleHighlight>{' '}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Compliance Engine
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Every organization has <SubtleHighlight>unique compliance needs</SubtleHighlight>. Suronex provides <SubtleHighlight>unmatched flexibility</SubtleHighlight> to manage multiple standards and custom security programs simultaneously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D33E9E]/20 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E] mt-2 flex-shrink-0 shadow-[0_0_8px_#D33E9E]" />
                <p className="text-gray-300 leading-relaxed text-base font-light">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CONTEXTUAL RISK INTELLIGENCE
   ============================================ */
function ContextualRiskSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    "Continuous detection of cloud misconfigurations",
    "Context-aware risk scoring based on exposure, identities, vulnerabilities, and data paths",
    "Prioritized insights that focus teams on the most critical risks",
    "Complete visibility across infrastructure, identity, network, containers, and data"
  ]

  return (
    <section ref={ref} className="py-12 px-6 relative overflow-hidden bg-white/[0.015]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            <SubtleHighlight>Contextual Risk Intelligence</SubtleHighlight>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              Not Checklist Compliance
            </span>
          </h2>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed font-light">
            Suronex goes beyond <SubtleHighlight>checklist-driven compliance</SubtleHighlight> by using <SubtleHighlight>contextual analysis and graph-based intelligence</SubtleHighlight> to assess real risk.
          </p>

          <div className="space-y-4">
            {features.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all"
              >
                <Target className="w-5 h-5 text-[#D33E9E] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed text-base font-light">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/compliance-frameworks.png"
                alt="Contextual Risk Intelligence"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] opacity-10 blur-2xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   FASTER AUDITS SECTION
   ============================================ */
function FasterAuditsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    { title: "Automated mapping", text: "of cloud controls to compliance requirements" },
    { title: "Requirement-based", text: "evidence collection" },
    { title: "Compliance scores", text: "that guide audit readiness" },
    { title: "Alerts", text: "when compliance drifts below defined thresholds" },
    { title: "One-click", text: "audit-ready reports for auditors and stakeholders" }
  ]

  return (
    <section ref={ref} className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <SubtleHighlight>Faster Audits</SubtleHighlight>,{' '}
            <span className="bg-gradient-to-r from-[#3530BA] to-[#D33E9E] text-transparent bg-clip-text">
              Less Manual Work
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Suronex significantly reduces the <SubtleHighlight>time, cost, and effort</SubtleHighlight> required for <SubtleHighlight>audits and regulatory reporting</SubtleHighlight>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="flex flex-col items-start p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3530BA]/20 to-[#D33E9E]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-[#D33E9E]" />
              </div>
              <p className="text-gray-300 leading-relaxed text-base font-light">
                <span className="text-white font-semibold">{item.title}</span> {item.text}
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
    <section ref={ref} className="py-12 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            <SubtleHighlight>Compliance That</SubtleHighlight>{' '}
            <span className="block mt-2 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Scales With Your Business
            </span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Suronex transforms cloud compliance into a <SubtleHighlight>continuous, intelligent, and automated process</SubtleHighlight>, enabling organizations to scale cloud adoption with confidence. By <SubtleHighlight>reducing manual effort</SubtleHighlight>, <SubtleHighlight>eliminating blind spots</SubtleHighlight>, and <SubtleHighlight>embedding compliance into everyday operations</SubtleHighlight>, Suronex helps teams stay secure, pass audits faster, and maintain regulatory confidence in a cloud-first world.
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
    <section ref={ref} className="py-12 px-6 relative bg-white/[0.01]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3530BA]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
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
   FINAL CTA
   ============================================ */
function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-12 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="p-0.5 rounded-[32px] bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA]">
            <div className="bg-black/90 backdrop-blur-xl rounded-[27px] p-8 md:p-12 text-center shadow-[0_0_80px_rgba(211,62,158,0.15)]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight">
                Stay Compliant.{' '}
                <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
                  Stay Secure.
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto font-light">
                Transform your cloud compliance from periodic audits to continuous, automated assurance with Suronex.
              </p>
              <Link
                href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-base font-bold hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
