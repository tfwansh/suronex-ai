"use client"

import { ArrowRightIcon } from "./Icons";
import { TypingEffect } from "./typing-effect";
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Cloud, Shield, FileBarChart, Activity } from "lucide-react";

const FlowSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 1024);
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const timelineItems = [
        {
            title: "Connect",
            description: "Seamlessly integrate with any supported cloud provider or SaaS platform in under 5 minutes.",
            detailedDescription: "Suronex is designed for rapid onboarding and instant value. You can securely connect any supported cloud provider or SaaS platform in under 5 minutes, without agents, complex configurations, or service disruption. The moment a connection is established, Suronex's intelligent discovery engine automatically scans your environment, maps your entire cloud ecosystem, and uncovers resources, dependencies, configurations, and security gaps across clouds and SaaS platforms.",
            color: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
            accentColor: "rgb(59, 130, 246)",
            icon: Cloud,
            pattern: "nodes",
            keyCapabilities: [
                "Connect any provider in under 5 minutes with secure, read-only access",
                "Instant scans triggered automatically upon successful connection",
                "Immediate visibility across infrastructure, identities, networks, SaaS, and workloads",
                "Automated compliance reporting aligned to your required standards"
            ]
        },
        {
            title: "Scan",
            description: "AI-driven continuous scanning delivers deep security and compliance insights in real time.",
            detailedDescription: "Suronex's advanced AI-driven scan engine continuously and rapidly scans your entire cloud stack, delivering deep security and compliance insights in real time. Built for modern, dynamic environments, the platform performs high-speed, intelligent assessments across infrastructure, identities, networks, workloads, and SaaS applications—detecting misconfigurations, compliance violations, and potential vulnerabilities before they escalate into incidents.",
            color: "from-purple-500/20 via-violet-500/20 to-purple-500/20",
            accentColor: "rgb(168, 85, 247)",
            icon: Activity,
            pattern: "waves",
            keyCapabilities: [
                "Continuous monitoring with real-time risk detection and instant alerts",
                "AI-powered security and compliance assessments at scale",
                "Automated compliance reporting mapped to required standards",
                "True multi-cloud coverage across AWS, Azure, GCP, Oracle, and expanding SaaS integrations"
            ]
        },
        {
            title: "Remediate",
            description: "AI-generated remediation guidance helps teams fix issues quickly and accurately.",
            detailedDescription: "Suronex delivers AI-generated, step-by-step remediation guidance for every identified misconfiguration and vulnerability—helping teams fix issues quickly, accurately, and with confidence. Our AI models continuously track API changes across cloud providers and integrations, ensuring remediation guidance is always up to date and aligned with the latest cloud-native best practices.",
            color: "from-pink-500/20 via-rose-500/20 to-pink-500/20",
            accentColor: "rgb(236, 72, 153)",
            icon: Shield,
            pattern: "grid",
            keyCapabilities: [
                "Real-time awareness of cloud API changes for precise remediation guidance",
                "AI-driven, context-aware remediation steps",
                "Multi-cloud remediation support across AWS, Azure, and GCP",
                "Multiple remediation options via Console, CLI, and IaC tools such as Terraform"
            ]
        },
        {
            title: "Report",
            description: "BI-integrated reporting delivers clear, actionable insights for executives and auditors.",
            detailedDescription: "Suronex delivers BI-integrated reporting that turns complex security and compliance data into clear, actionable insights for executives and auditors. With intuitive dashboards and on-demand reporting, security leaders and CXOs can track key risk and compliance KPIs in minutes—not weeks. The platform enables instant generation of audit-ready compliance reports aligned with frameworks such as SOC 2, ISO 27001, GDPR, and more.",
            color: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20",
            accentColor: "rgb(16, 185, 129)",
            icon: FileBarChart,
            pattern: "dots",
            keyCapabilities: [
                "BI-integrated dashboards for executive and operational visibility",
                "CXO-ready reports generated in minutes",
                "One-click export of security and compliance reports",
                "Support for multiple report formats for audits and stakeholder needs"
            ]
        }
    ];

    // Optimized pattern rendering
    const renderPattern = (pattern: string, accentColor: string, isActive: boolean) => {
        if (isMobile && !isActive) return null;

        const patternCount = isMobile ?
            { nodes: 10, waves: 3, grid: 40, dots: 50 } :
            { nodes: 15, waves: 4, grid: 60, dots: 80 };

        switch (pattern) {
            case "nodes":
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(patternCount.nodes)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={`${Math.random() * 100}%`}
                                cy={`${Math.random() * 100}%`}
                                r={Math.random() * 2 + 1}
                                fill={accentColor}
                                animate={{
                                    opacity: isActive ? [0.2, 0.5, 0.2] : [0.1, 0.2, 0.1],
                                    scale: isActive ? [1, 1.3, 1] : 1,
                                }}
                                transition={{
                                    duration: 2 + Math.random(),
                                    repeat: Infinity,
                                    delay: Math.random(),
                                }}
                            />
                        ))}
                    </svg>
                );
            case "waves":
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(patternCount.waves)].map((_, i) => (
                            <motion.path
                                key={i}
                                d={`M0,${50 + i * 20} Q150,${30 + i * 20} 300,${50 + i * 20} T600,${50 + i * 20}`}
                                stroke={accentColor}
                                strokeWidth="1.5"
                                fill="none"
                                animate={{
                                    opacity: isActive ? [0.3, 0.5, 0.3] : [0.2, 0.3, 0.2],
                                }}
                                transition={{
                                    duration: 2 + i * 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </svg>
                );
            case "grid":
            case "dots":
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(patternCount[pattern])].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={`${(i % 10) * 10 + 5}%`}
                                cy={`${Math.floor(i / 10) * 10 + 5}%`}
                                r="1"
                                fill={accentColor}
                                animate={{
                                    opacity: isActive ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: (i % 10) * 0.1,
                                }}
                            />
                        ))}
                    </svg>
                );
            default:
                return null;
        }
    };

    const handleMobileClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-10 sm:py-12 md:py-16 relative overflow-hidden">
            {/* Subtle ambient background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Gradient Line Breaker */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8 sm:mb-10"
                />

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white">
                        <TypingEffect text="Start Your Cloud Compliance Journey in Four Simple Steps" />
                    </h2>
                </motion.div>

                {/* Desktop Expandable Cards */}
                <div className="mt-8 sm:mt-10 md:mt-12">
                    <div className="hidden lg:flex gap-3 h-[450px] relative">
                        {timelineItems.map((item, index) => {
                            const isHovered = hoveredIndex === index;
                            const isAnyHovered = hoveredIndex !== null;
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    layout
                                    animate={{
                                        flex: isHovered ? 2.5 : isAnyHovered ? 0.3 : 1,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.32, 0.72, 0, 1]
                                    }}
                                    className="relative rounded-xl overflow-hidden cursor-pointer group will-change-transform"
                                    style={{
                                        minWidth: isAnyHovered && !isHovered ? '70px' : 'auto'
                                    }}
                                >
                                    {/* Background */}
                                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl">
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                                            animate={{
                                                opacity: isHovered ? [0.3, 0.4, 0.3] : [0.1, 0.15, 0.1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />

                                        {renderPattern(item.pattern, item.accentColor, isHovered)}

                                        {/* Floating orb */}
                                        <motion.div
                                            className="absolute w-24 h-24 rounded-full blur-2xl"
                                            style={{ backgroundColor: item.accentColor, opacity: 0.2 }}
                                            animate={{
                                                x: isHovered ? [0, 50, 0] : [0, 25, 0],
                                                y: isHovered ? [0, -40, 0] : [0, -20, 0],
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />

                                        {/* Large Icon Watermark */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            animate={{
                                                opacity: [0.05, 0.15, 0.05],
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Icon className="w-48 h-48" style={{ color: item.accentColor }} strokeWidth={0.5} />
                                        </motion.div>
                                    </div>

                                    {/* Content - Collapsed State */}
                                    <AnimatePresence mode="wait">
                                        {!isHovered && (
                                            <motion.div
                                                initial={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="relative h-full flex flex-col justify-between p-5"
                                            >
                                                {!isAnyHovered && (
                                                    <motion.div
                                                        className="flex justify-center mb-3"
                                                        animate={{ y: [0, -8, 0] }}
                                                        transition={{
                                                            duration: 2.5,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    >
                                                        <div className="relative">
                                                            <motion.div
                                                                className="absolute inset-0 rounded-full blur-lg"
                                                                style={{ backgroundColor: item.accentColor }}
                                                                animate={{
                                                                    scale: [1, 1.4, 1],
                                                                    opacity: [0.3, 0.5, 0.3],
                                                                }}
                                                                transition={{
                                                                    duration: 1.5,
                                                                    repeat: Infinity,
                                                                }}
                                                            />
                                                            <Icon
                                                                className="w-14 h-14 relative"
                                                                style={{ color: item.accentColor }}
                                                                strokeWidth={1.5}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                <div>
                                                    <motion.h3
                                                        className="text-white font-bold tracking-tight leading-none"
                                                        style={{
                                                            fontSize: isAnyHovered && !isHovered ? '1.5rem' : '3rem',
                                                            writingMode: isAnyHovered && !isHovered ? 'vertical-rl' : 'horizontal-tb',
                                                            textOrientation: isAnyHovered && !isHovered ? 'mixed' : 'initial',
                                                            letterSpacing: '-0.02em'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </motion.h3>

                                                    {!isAnyHovered && (
                                                        <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: item.accentColor }}>
                                                            <span className="tracking-wide">Hover to explore</span>
                                                            <motion.div
                                                                animate={{ x: [0, 3, 0] }}
                                                                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                                            >
                                                                <ArrowRightIcon className="w-4 h-4" />
                                                            </motion.div>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Content - Expanded State */}
                                    <AnimatePresence mode="wait">
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3, delay: 0.15 }}
                                                className="relative h-full flex flex-col p-6 justify-between overflow-y-auto custom-scrollbar"
                                            >
                                                <div className="space-y-5">
                                                    {/* Icon + Title */}
                                                    <div className="flex items-center gap-3">
                                                        <motion.div
                                                            initial={{ scale: 0, rotate: -180 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{ type: "spring", stiffness: 180, delay: 0.15 }}
                                                            className="relative"
                                                        >
                                                            <motion.div
                                                                className="absolute inset-0 rounded-full blur-lg"
                                                                style={{ backgroundColor: item.accentColor }}
                                                                animate={{
                                                                    scale: [1, 1.3, 1],
                                                                    opacity: [0.4, 0.6, 0.4],
                                                                }}
                                                                transition={{
                                                                    duration: 1.5,
                                                                    repeat: Infinity,
                                                                }}
                                                            />
                                                            <Icon
                                                                className="w-12 h-12 relative"
                                                                style={{ color: item.accentColor }}
                                                                strokeWidth={1.5}
                                                            />
                                                        </motion.div>

                                                        <motion.h3
                                                            initial={{ y: 15, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.2 }}
                                                            className="text-white text-4xl font-bold tracking-tight leading-none"
                                                            style={{ letterSpacing: '-0.03em' }}
                                                        >
                                                            {item.title}
                                                        </motion.h3>
                                                    </div>

                                                    {/* Description */}
                                                    <motion.p
                                                        initial={{ y: 15, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.25 }}
                                                        className="text-white/90 text-base leading-relaxed font-light"
                                                    >
                                                        {item.detailedDescription}
                                                    </motion.p>

                                                    {/* Feature List */}
                                                    <motion.div
                                                        initial={{ y: 15, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="space-y-3 pt-2"
                                                    >
                                                        <h4 className="text-white/70 font-bold text-xs uppercase tracking-widest">
                                                            Key Capabilities
                                                        </h4>
                                                        <ul className="space-y-2 text-neutral-300">
                                                            {item.keyCapabilities.map((feature, i) => (
                                                                <motion.li
                                                                    key={i}
                                                                    initial={{ x: -15, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    transition={{ delay: 0.35 + i * 0.04 }}
                                                                    className="flex items-start gap-2 group/item"
                                                                >
                                                                    <motion.span
                                                                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                                        style={{ backgroundColor: item.accentColor }}
                                                                        whileHover={{ scale: 1.4 }}
                                                                    />
                                                                    <span className="text-sm font-light leading-relaxed group-hover/item:text-white transition-colors">
                                                                        {feature}
                                                                    </span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                </div>

                                                {/* Bottom Indicator */}
                                                <motion.div
                                                    initial={{ y: 15, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="flex items-center gap-2 text-sm font-medium mt-4"
                                                    style={{ color: item.accentColor }}
                                                >
                                                    <span className="w-10 h-0.5" style={{ backgroundColor: item.accentColor }}></span>
                                                    <span className="tracking-wider">0{index + 1}</span>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Border Glow */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl pointer-events-none border-2"
                                        animate={{
                                            borderColor: isHovered ? `${item.accentColor}99` : 'rgba(255, 255, 255, 0.08)',
                                            boxShadow: isHovered
                                                ? `0 0 40px ${item.accentColor}55`
                                                : '0 0 0px rgba(0, 0, 0, 0)',
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile/Tablet - Fixed and Interactive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-5">
                        {timelineItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeIndex === index;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                >
                                    <motion.div
                                        onClick={() => handleMobileClick(index)}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                                        animate={{
                                            borderColor: isActive ? `${item.accentColor}99` : 'rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0">
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                                                animate={{
                                                    opacity: isActive ? [0.2, 0.3, 0.2] : 0.15,
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: isActive ? Infinity : 0,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            {renderPattern(item.pattern, item.accentColor, isActive)}
                                        </div>

                                        <div className="relative p-5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <motion.div
                                                    animate={{
                                                        scale: isActive ? [1, 1.1, 1] : 1,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                >
                                                    <Icon className="w-10 h-10" style={{ color: item.accentColor }} strokeWidth={1.5} />
                                                </motion.div>
                                                <h3 className="text-white tracking-tight text-2xl sm:text-3xl font-bold leading-tight" style={{ letterSpacing: '-0.02em' }}>
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isActive ? 'auto' : 0,
                                                    opacity: isActive ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-3">
                                                    {item.detailedDescription}
                                                </p>
                                            </motion.div>

                                            {!isActive && (
                                                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                                                    {item.description}
                                                </p>
                                            )}

                                            <div className="mt-3 text-xs font-medium" style={{ color: item.accentColor }}>
                                                {isActive ? 'Tap to collapse' : 'Tap to expand'}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 sm:mt-14 flex justify-center">
                    <Link href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead">
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 180 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 tracking-wide overflow-hidden group"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                            />

                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl"
                                animate={{
                                    opacity: [0.5, 0.8, 0.5],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <div className="absolute inset-0 rounded-full border-2 border-purple-400/50" />

                            <span className="relative text-white z-10">Book Demo</span>
                            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-white" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FlowSection;

