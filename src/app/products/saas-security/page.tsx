'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    Shield,
    Zap,
    LayoutGrid,
    Eye,
    Lock,
    Search,
    AlertTriangle,
    ArrowRight,
    Rocket,
    FileText,
    DollarSign,
    Activity,
    CheckCircle2,
    Globe,
    Server,
    Users,
    Bell,
    BarChart3,
    CreditCard,
    Headphones
} from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import { Footer } from '@/app/components/footer'

/* ============================================
   SHARED COMPONENTS
   ============================================ */

const SubtleHighlight = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="relative inline-block mx-0.5">
            <span className="relative z-10 text-gray-100 font-medium">{children}</span>
            <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#D33E9E]/10 to-[#3530BA]/10 -skew-x-6 rounded-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            />
        </span>
    )
}

/* ============================================
   MAIN PAGE COMPONENT
   ============================================ */
export default function SaasSecurityPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#D33E9E] selection:text-white relative overflow-hidden font-light">
            {/* Background - Fixed subtle noise */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#3530BA]/5 to-transparent blur-3xl pointer-events-none" />
            </div>

            <Navbar />

            <div className="relative">
                <HeroSection />
                <ProblemSection />
                <SolutionOverviewSection />
                <CombinedVisibilityRiskSection />
                <RemediationSection />
                <CombinedComplianceTrendSection />
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
        <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-10 overflow-hidden">
            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full mix-blend-screen bg-[#D33E9E]/10 blur-[80px]"
                animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full mix-blend-screen bg-[#3530BA]/10 blur-[80px]"
                animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto text-center h-full flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: "easeOut" }}>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 ring-1 ring-white/5"
                    >
                        <LayoutGrid className="w-3.5 h-3.5 text-[#D33E9E]" />
                        <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">SaaS Security</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
                        <span className="block text-white">Secure Your SaaS Stack</span>
                        <span className="block">
                            <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
                                Continuously & Intelligently
                            </span>
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mt-6 mb-12">
                        Suronex delivers <SubtleHighlight>AI-powered SaaS Security Posture Management</SubtleHighlight> that provides continuous visibility, risk detection, and guided remediation across your entire SaaS ecosystem.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        <Link href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead" target="_blank">
                            <button className="px-8 py-3.5 rounded-full text-white text-base font-bold bg-gradient-to-r from-[#3530BA] to-[#D33E9E] shadow-[0_0_20px_rgba(211,62,158,0.4)] hover:shadow-[0_0_30px_rgba(211,62,158,0.6)] hover:scale-105 transition-all duration-300">
                                Book a Demo
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="px-8 py-3.5 rounded-full text-white text-base font-bold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                                Contact Sales
                            </button>
                        </Link>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    )
}

/* ============================================
   PROBLEM SECTION
   ============================================ */
function ProblemSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const stats = [
        { value: "86%", label: "organizations rank SaaS security as a top priority" },
        { value: "46%", label: "lack visibility into non-human identities" },
        { value: "63%", label: "overshare sensitive data across SaaS apps" },
        { value: "55%", label: "experience unsanctioned SaaS adoption" }
    ]

    return (
        <section ref={ref} className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        The Problem: SaaS Is the <br />
                        <span className="bg-gradient-to-r from-[#ff8c8c] via-[#ff6b6b] to-[#D33E9E] text-transparent bg-clip-text drop-shadow-sm brightness-125">
                            New Attack Surface
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        SaaS platforms have become a primary target due to misconfigurations, excessive access, unmanaged identities, and decentralized ownership.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Why Traditional Tools Fail</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Recent incidents—including Microsoft cloud identity attacks, Okta-related exposures, and SaaS data exfiltration campaigns targeting Snowflake—highlight that traditional tools weren't designed for SaaS-native risks.
                        </p>
                        <ul className="space-y-4">
                            {stats.map((stat, i) => (
                                <li key={i} className="flex items-center gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                                    <div className="text-2xl font-bold text-[#D33E9E] w-16 flex-shrink-0">{stat.value}</div>
                                    <div className="text-gray-300 text-sm font-light">{stat.label}</div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex justify-center"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#D33E9E]/20 to-transparent blur-2xl rounded-3xl" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-2xl w-full">
                            <Image
                                src="/images/notif-saas.png"
                                alt="SaaS Security Trends"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

/* ============================================
   SOLUTION OVERVIEW WITH IMAGE TICKER
   ============================================ */
function SolutionOverviewSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        { src: "/images/trend-saassecurity.png", alt: "SaaS Security Trends" },
        { src: "/images/saas3.png", alt: "Risk Detection" },
        { src: "/images/saas2.png", alt: "SaaS Security Overview" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={ref} className="py-12 px-6 relative bg-white/[0.015]">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center justify-center p-3 mb-8 bg-[#3530BA]/10 rounded-full">
                        <Shield className="w-8 h-8 text-[#3530BA]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        How Suronex Secures Your SaaS Environment
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed font-light">
                        Suronex brings <SubtleHighlight>visibility, context, and control</SubtleHighlight> to SaaS security by continuously monitoring configurations, identities, access paths, and compliance posture across all connected SaaS platforms.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-12 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-4xl mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D33E9E]/10 to-[#3530BA]/10 z-10 pointer-events-none" />

                    <div className="relative h-[400px] md:h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                    ? 'bg-[#D33E9E] w-8'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ============================================
   COMBINED VISIBILITY & RISK DETECTION SECTION
   ============================================ */
function CombinedVisibilityRiskSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const visibilityPoints = [
        "Discover every connected user, service account, integration, and workload",
        "Monitor popular platforms: Microsoft 365, Google Workspace, GitHub, Okta",
        "Identify exposed subdomains, risky integrations, and excessive permissions",
        "Eliminate blind spots caused by decentralized SaaS ownership"
    ]

    const riskPoints = [
        "Detect misconfigurations, risky access settings, and insecure defaults",
        "Monitor non-human identities, OAuth apps, and third-party integrations",
        "AI-driven risk prioritization based on impact, exploitability, and data sensitivity",
        "Focus teams on what truly matters—not alert noise"
    ]

    return (
        <section ref={ref} className="py-12 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Visibility Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="bg-white/[0.02] p-8 rounded-3xl border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Globe className="w-6 h-6 text-[#3530BA]" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#3530BA]">Complete Visibility</h3>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Complete Visibility <br />
                            <span className="text-white/60">Across SaaS Assets</span>
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed font-light">
                            Gain a unified, real-time view of your entire SaaS footprint. Stop guessing what's out there.
                        </p>

                        <div className="space-y-4">
                            {visibilityPoints.map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#3530BA] mt-2.5 flex-shrink-0" />
                                    <p className="text-gray-300 font-light leading-relaxed text-sm">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Risk Detection Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.02] p-8 rounded-3xl border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Search className="w-6 h-6 text-[#D33E9E]" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#D33E9E]">Intelligent Detection</h3>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Continuous Risk Detection <br />
                            <span className="text-white/60">& Prioritization</span>
                        </h2>
                        <p className="text-gray-300 mb-6 leading-relaxed font-light">
                            Suronex continuously evaluates SaaS security posture without requiring access to multiple consoles or tools.
                        </p>

                        <div className="space-y-4">
                            {riskPoints.map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-1 rounded-full bg-[#D33E9E]/10 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#D33E9E]" />
                                    </div>
                                    <p className="text-gray-300 font-light leading-relaxed text-sm">{text}</p>
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
   REMEDIATION SECTION
   ============================================ */
function RemediationSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section ref={ref} className="py-12 px-6 relative bg-white/[0.015]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-6 bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 rounded-2xl border border-white/5">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        AI-Guided Remediation
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Fix SaaS risks quickly and confidently with AI-generated remediation guidance. Reduce dependency on SaaS-specific expertise.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        { icon: FileText, title: "Step-by-Step Instructions", desc: "Detailed guides tailored to each specific SaaS platform and configuration." },
                        { icon: Users, title: "Team Enabled", desc: "Clear guidance accessible for security, IT, and compliance teams alike." },
                        { icon: LayoutGrid, title: "Contextual Awareness", desc: "Remediation suggestions that understand your specific environment settings." }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors"
                        >
                            <card.icon className="w-8 h-8 text-[#D33E9E] mb-4" />
                            <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                            <p className="text-gray-400 font-light">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ============================================
   COMBINED COMPLIANCE & TREND SECTION
   ============================================ */
function CombinedComplianceTrendSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section ref={ref} className="py-12 px-6 relative bg-gradient-to-b from-black to-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Compliance Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="bg-white/[0.02] p-8 rounded-3xl border border-white/10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            SaaS Compliance & <br /> Audit Readiness
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed font-light">
                            Suronex aligns SaaS security posture with global regulatory and industry standards—automatically.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E]" />
                                <span className="text-gray-300 text-sm">Map SaaS configurations to compliance frameworks</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E]" />
                                <span className="text-gray-300 text-sm">Identify compliance gaps and policy violations in real time</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E]" />
                                <span className="text-gray-300 text-sm">Maintain continuous audit readiness with minimal manual effort</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Trend Analytics Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.02] p-8 rounded-3xl border border-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <BarChart3 className="w-8 h-8 text-[#3530BA]" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Trend Analytics</h3>
                        </div>
                        <p className="text-gray-300 text-lg font-light leading-relaxed">
                            Track your compliance journey over time. Demonstrate improvement to stakeholders and auditors with historical trend data spanning 90 days or more.
                        </p>
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
        <section ref={ref} className="py-12 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        One Platform. <br />
                        <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
                            Total SaaS Control.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
                        Suronex transforms SaaS security from a reactive checklist into a continuous, intelligence-driven capability—helping organizations reduce risk, prevent breaches, and maintain compliance as SaaS adoption accelerates.
                    </p>
                    <p className="text-lg text-white font-medium">
                        Secure every SaaS app. Control every access. Stay compliant—always.
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
                                    SaaS Security?
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
