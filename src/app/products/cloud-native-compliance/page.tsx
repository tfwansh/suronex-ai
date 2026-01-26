'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    Shield,
    Zap,
    Eye,
    Search,
    ArrowRight,
    Rocket,
    FileText,
    Activity,
    CheckCircle2,
    Globe,
    Server,
    Users,
    Layers,
    BarChart3,
    CreditCard,
    Headphones,
    Container,
    Network,
    KeyRound
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
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            />
        </span>
    )
}

/* ============================================
   MAIN PAGE COMPONENT
   ============================================ */
export default function CloudNativeCompliancePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#D33E9E] selection:text-white relative overflow-hidden font-light">
            {/* Background */}
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
                <VisibilitySection />
                <ComplianceMonitoringSection />
                <MisconfigurationDetectionSection />
                <SecureAccessSection />
                <PolicyFlexibilitySection />
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
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, 150])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-10 overflow-hidden">
            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full mix-blend-screen bg-[#D33E9E]/10 blur-[80px]"
                animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full mix-blend-screen bg-[#3530BA]/10 blur-[80px]"
                animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: 'easeOut' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 ring-1 ring-white/5"
                    >
                        <Container className="w-3.5 h-3.5 text-[#D33E9E]" />
                        <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">Cloud Native Compliance</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
                        <span className="block text-white">Secure and Comply Across</span>
                        <span className="block text-white">Your Kubernetes Environments</span>
                        <span className="block mt-2">
                            <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
                                Continuously
                            </span>
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mt-6 mb-12">
                        Kubernetes has become the backbone of modern cloud-native applications—but it has also introduced a new class of security and compliance risks. Suronex helps
                        organizations secure and govern Kubernetes environments with <SubtleHighlight>continuous compliance</SubtleHighlight>, <SubtleHighlight>real-time visibility</SubtleHighlight>, and{' '}
                        <SubtleHighlight>intelligent remediation</SubtleHighlight>, without slowing development velocity.
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

    const challenges = [
        'Limited visibility into cluster configurations and access paths',
        'Over-privileged service accounts and RBAC roles',
        'Vulnerable container images deployed across multiple clusters',
        'Difficulty maintaining compliance with CIS and regulatory standards'
    ]

    return (
        <section ref={ref} className="py-16 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        The Problem: <br />
                        <span className="bg-gradient-to-r from-[#ff8c8c] via-[#ff6b6b] to-[#D33E9E] text-transparent bg-clip-text drop-shadow-sm brightness-125">
                            Kubernetes Changes Faster Than Compliance
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                        Misconfigured APIs, overly permissive RBAC, exposed services, and vulnerable container images continue to be leading causes of cloud-native incidents. Recent industry incidents and disclosures
                        (2024–2025) involving Kubernetes API exposure, insecure workloads, and compromised container images across managed Kubernetes platforms have reinforced a hard truth:{' '}
                        <span className="text-white font-medium">Kubernetes security failures are rarely zero-day exploits—they are configuration failures.</span>
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Challenge List */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white text-center">Security Teams Face:</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-center">
                            Modern Kubernetes environments—across Amazon EKS, Azure AKS, and Google GKE—are highly dynamic. Clusters, pods, namespaces, identities, and network policies change constantly, making manual
                            audits and point-in-time checks ineffective.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {challenges.map((text, i) => (
                                <div key={i} className="flex items-start gap-4 bg-white/[0.03] p-5 rounded-xl border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E] mt-2.5 flex-shrink-0" />
                                    <p className="text-gray-300 font-light leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Static Image, large and clear */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <div className="absolute inset-0 pointer-events-none -z-10" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
                            <Image
                                src="/Cloud_Native_3.png"
                                alt="Kubernetes security and compliance illustration"
                                width={1600}
                                height={900}
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
   SOLUTION OVERVIEW
   ============================================ */
function SolutionOverviewSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section ref={ref} className="py-12 px-6 relative bg-white/[0.015]">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8 }}>
                    <div className="inline-flex items-center justify-center p-3 mb-8 bg-[#3530BA]/10 rounded-full">
                        <Shield className="w-8 h-8 text-[#3530BA]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How Suronex Solves Cloud-Native Compliance</h2>
                    <p className="text-lg text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
                        Suronex delivers <SubtleHighlight>Kubernetes Security Posture Management (KSPM)</SubtleHighlight> and <SubtleHighlight>Cloud-Native Compliance</SubtleHighlight> in a single, unified platform.
                        Within minutes, Suronex maps your Kubernetes environments, continuously scans for misconfigurations, and enforces compliance aligned with industry benchmarks.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

/* ============================================
   VISIBILITY SECTION
   ============================================ */
function VisibilitySection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const points = [
        'Unified visibility across EKS, AKS, and GKE',
        'Continuous discovery of clusters, namespaces, pods, services, and workloads',
        'Map Kubernetes components to the underlying cloud infrastructure',
        'Identify where vulnerable container images are deployed—instantly'
    ]

    return (
        <section ref={ref} className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="w-6 h-6 text-[#3530BA]" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#3530BA]">Complete Visibility</h3>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Complete Visibility <br />
                            <span className="text-white/60">Across Kubernetes</span>
                        </h2>

                        <div className="space-y-4">
                            {points.map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#3530BA] mt-2.5 flex-shrink-0" />
                                    <p className="text-gray-300 font-light leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 relative flex justify-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-2xl w-full bg-black/40">
                            <Image
                                src="/Cloud_Native_1.png"
                                alt="Kubernetes Environment Overview"
                                width={1200}
                                height={600}
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
   COMPLIANCE MONITORING SECTION
   ============================================ */
/* ============================================
   COMPLIANCE MONITORING SECTION
   ============================================ */
function ComplianceMonitoringSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const features = [
        'CIS Kubernetes Benchmark checks with daily scans',
        'Continuous monitoring of API configurations, RBAC, and network segmentation',
        'Drift detection to identify deviations from secure baselines',
        'Audit-ready compliance reports with detailed findings'
    ]

    const detailBlocks = [
        {
            title: 'Real-Time Monitoring',
            desc: 'Track configuration changes, API modifications, and RBAC updates as they happen across all your Kubernetes clusters.'
        },
        {
            title: 'Drift Detection',
            desc: 'Automatically identify when cluster configurations deviate from security baselines and compliance requirements.'
        },
        {
            title: 'Audit Reports',
            desc: 'Generate comprehensive compliance reports with detailed findings, evidence, and remediation guidance for auditors.'
        }
    ]

    return (
        <section ref={ref} className="py-16 px-6 relative bg-white/[0.015]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-[#D33E9E]" />
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#D33E9E]">
                            Continuous Monitoring
                        </h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Continuous Kubernetes <br />
                        <span className="text-white/60">Compliance Monitoring</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Suronex automates Kubernetes compliance checks using industry-recognized benchmarks and standards.
                    </p>
                </motion.div>

                {/* CIS card on left + detail content on right */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.4fr)] gap-10 items-start"
                >
                    {/* Left: CIS Benchmark Card */}
                    <div className="rounded-3xl bg-gradient-to-br from-[#1A1025] via-[#140c20] to-[#09030f] border border-white/10 shadow-2xl p-6 flex flex-col items-center">
                        <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                            <Image
                                src="/Cloud_Native_5.png"
                                alt="CIS Kubernetes Benchmark Compliance Card"
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            CIS Kubernetes Benchmark v1.10 with 600 total checks and 95% compliance score.
                        </p>

                        {/* Key features list (small, under the card) */}
                        <div className="mt-6 space-y-3 w-full">
                            {features.map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-[#D33E9E] mt-0.5 flex-shrink-0" />
                                    <p className="text-[13px] text-gray-300 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Real-time / Drift / Audit + full-width image */}
                    <div className="rounded-3xl bg-gradient-to-br from-[#1A1025] via-[#12091F] to-[#06010b] border border-white/10 shadow-2xl p-6 md:p-8 flex flex-col gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <BarChart3 className="w-6 h-6 text-white" />
                                <h4 className="text-xl font-bold text-white">Compliance Trend Tracking</h4>
                            </div>
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                Monitor compliance trends over 90 days with detailed historical data showing improvement
                                trajectory and compliance score evolution.
                            </p>
                        </div>

                        {/* Side content from old card */}
                        <div className="space-y-3">
                            {detailBlocks.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-white/[0.03] border border-white/8"
                                >
                                    <h5 className="text-sm font-semibold text-white mb-1">{item.title}</h5>
                                    <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Full-width trend image under the text */}
                        <div className="mt-4 relative rounded-2xl overflow-hidden border border-white/15 bg-black/40">
                            <Image
                                src="/Cloud_Native_6.png"
                                alt="90-day Compliance Trend"
                                width={1600}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ============================================
   MISCONFIGURATION DETECTION SECTION
   ============================================ */
function MisconfigurationDetectionSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const capabilities = [
        'Detect misconfigurations across clusters, pods, containers, and services',
        'Identify risky exposure paths caused by IAM, networking, and service misalignment',
        'Eliminate false positives through contextual risk analysis',
        'Prioritize findings based on exploitability and impact'
    ]

    return (
        <section ref={ref} className="py-16 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Search className="w-6 h-6 text-[#D33E9E]" />
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#D33E9E]">Risk Detection</h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Kubernetes Misconfiguration <br />
                        <span className="text-white/60">& Risk Detection</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Prevent real-world Kubernetes threats—without alert fatigue.
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-12"
                >
                    {capabilities.map((text, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E] mt-2.5 flex-shrink-0" />
                            <p className="text-gray-300 font-light leading-relaxed">{text}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Wide compliance trend image moved here */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
                        <Image
                            src="/Cloud_Native_2.png" // wide trend + stats image
                            alt="Compliance trend and findings statistics"
                            width={1600}
                            height={900}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

/* ============================================
   SECURE ACCESS SECTION
   ============================================ */
function SecureAccessSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const features = [
        'Monitor RBAC roles, service accounts, and permissions',
        'Identify over-provisioned access and privilege escalation risks',
        'Enforce least-privilege access across workloads and teams'
    ]

    return (
        <section ref={ref} className="py-12 px-6 relative bg-white/[0.015]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <KeyRound className="w-6 h-6 text-[#3530BA]" />
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#3530BA]">Least Privilege</h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Secure Access with <br />
                        <span className="text-white/60">Least Privilege</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
                        Suronex continuously evaluates Kubernetes identities and access controls.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors"
                        >
                            <CheckCircle2 className="w-8 h-8 text-[#3530BA] mb-4" />
                            <p className="text-gray-300 font-light leading-relaxed">{text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ============================================
   POLICY FLEXIBILITY SECTION
   ============================================ */
function PolicyFlexibilitySection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const features = [
        {
            title: 'Out-of-the-box policy templates for Kubernetes security',
            icon: FileText
        },
        {
            title: 'Support for CIS, ISO 27001, SOC 2, PCI DSS, GDPR, and more',
            icon: Shield
        },
        {
            title: 'Customize policies or import your own using a smart policy editor',
            icon: Zap
        },
        {
            title: 'Manage multiple compliance frameworks simultaneously',
            icon: Layers
        }
    ]

    return (
        <section ref={ref} className="py-12 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Built-In Compliance & <br />
                        <span className="text-white/60">Policy Flexibility</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Stay compliant with global and industry regulations while adapting to your internal standards.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <Icon className="w-8 h-8 text-[#D33E9E] mb-4 group-hover:scale-110 transition-transform" />
                                <p className="text-gray-200 font-light leading-relaxed">{feature.title}</p>
                            </motion.div>
                        )
                    })}
                </div>
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

    const benefits = [
        'Centralized Kubernetes asset inventory',
        'One-click, audit-ready compliance reports',
        'Clear evidence mapping for auditors and stakeholders',
        'Reduce audit preparation time without slowing deployments'
    ]

    return (
        <section ref={ref} className="py-12 px-6 relative bg-white/[0.015]">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="w-6 h-6 text-[#3530BA]" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#3530BA]">Audit Readiness</h3>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Faster Audits, <br />
                            <span className="text-white/60">Less Manual Effort</span>
                        </h2>

                        <div className="space-y-4">
                            {benefits.map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-[#3530BA] mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-300 font-light leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
                            <Image
                                src="/Cloud_Native_4.png"
                                alt="Kubernetes Inventory List"
                                width={1200}
                                height={700}
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
   CLOSING SECTION
   ============================================ */
function ClosingSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section ref={ref} className="py-12 px-6 text-center relative">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Cloud-Native Compliance <br />
                        <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">That Scales</span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                        Suronex enables organizations to secure Kubernetes by design—with continuous compliance, deep visibility, and intelligent remediation built into daily operations.
                    </p>
                    <p className="text-lg text-white font-medium">Protect your clusters. Govern your workloads. Stay compliant—continuously.</p>
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
                { title: '5-minute Setup:', desc: 'Connect your Kubernetes clusters in minutes with read-only access' },
                { title: 'Agentless Architecture:', desc: 'No agents to install or maintain across your clusters' },
                { title: 'Immediate Value:', desc: 'Start seeing security insights within minutes of deployment' },
                { title: 'Gradual Rollout:', desc: 'Phase deployment across clusters and environments' }
            ]
        },
        {
            icon: Headphones,
            title: 'Implementation Support',
            features: [
                { title: 'Dedicated Customer Success:', desc: 'Assigned customer success manager for onboarding' },
                { title: 'Professional Services:', desc: 'Optional implementation and customization services' },
                { title: 'Training Program:', desc: 'Comprehensive training for your security and DevOps teams' },
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
                <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
                    <div className="p-0.5 rounded-[32px] bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA]">
                        <div className="bg-black/90 backdrop-blur-xl rounded-[27px] p-8 md:p-12 text-center shadow-[0_0_80px_rgba(211,62,158,0.15)]">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight tracking-tight">
                                Ready to Secure Your{' '}
                                <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">Kubernetes Environments?</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto font-light">
                                See how Suronex automates Kubernetes compliance, reduces risk, and maintains continuous security posture.
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

