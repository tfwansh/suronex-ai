"use client"

import { ArrowRightIcon } from "./Icons";
import { TypingEffect } from "./typing-effect";
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";
import { useState } from "react";
import { Cloud, Scan, Shield, FileBarChart, Sparkles, Zap, CheckCircle, Activity } from "lucide-react";

const FlowSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const timelineItems = [
        {
            title: "Connect",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            detailedDescription: "Seamlessly integrate with AWS, Azure, GCP, and on-premises infrastructure. Our intelligent discovery engine automatically maps your entire cloud ecosystem, identifying resources, relationships, and vulnerabilities across multiple cloud providers in real-time.",
            color: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
            accentColor: "rgb(59, 130, 246)",
            icon: Cloud,
            pattern: "nodes",
        },
        {
            title: "Scan",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            detailedDescription: "Advanced threat detection powered by AI continuously monitors your infrastructure. Our scanning engine performs deep security assessments, identifying misconfigurations, compliance violations, and potential vulnerabilities before they become critical issues.",
            color: "from-purple-500/20 via-violet-500/20 to-purple-500/20",
            accentColor: "rgb(168, 85, 247)",
            icon: Activity,
            pattern: "waves",
        },
        {
            title: "Remediate",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            detailedDescription: "One-click automated remediation workflows eliminate security risks instantly. Our intelligent automation engine applies industry best practices, generates compliance reports, and maintains detailed audit trails for complete governance.",
            color: "from-pink-500/20 via-rose-500/20 to-pink-500/20",
            accentColor: "rgb(236, 72, 153)",
            icon: Shield,
            pattern: "grid",
        },
        {
            title: "Report",
            isLargeTitle: true,
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud.",
            detailedDescription: "Executive dashboards and compliance reports at your fingertips. Generate comprehensive security reports, track KPIs, demonstrate compliance with SOC 2, ISO 27001, GDPR, and other frameworks. Export audit-ready documentation instantly.",
            color: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20",
            accentColor: "rgb(16, 185, 129)",
            icon: FileBarChart,
            pattern: "dots",
        }
    ];

    // Different animated patterns for each card
    const renderPattern = (pattern: string, accentColor: string, isHovered: boolean) => {
        switch (pattern) {
            case "nodes":
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(20)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={`${Math.random() * 100}%`}
                                cy={`${Math.random() * 100}%`}
                                r={Math.random() * 3 + 1}
                                fill={accentColor}
                                animate={{
                                    opacity: isHovered ? [0.2, 0.6, 0.2] : [0.1, 0.3, 0.1],
                                    scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                        {[...Array(15)].map((_, i) => (
                            <motion.line
                                key={`line-${i}`}
                                x1={`${Math.random() * 100}%`}
                                y1={`${Math.random() * 100}%`}
                                x2={`${Math.random() * 100}%`}
                                y2={`${Math.random() * 100}%`}
                                stroke={accentColor}
                                strokeWidth="0.5"
                                animate={{
                                    opacity: isHovered ? [0.1, 0.3, 0.1] : [0.05, 0.15, 0.05],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: Math.random(),
                                }}
                            />
                        ))}
                    </svg>
                );
            case "waves":
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(5)].map((_, i) => (
                            <motion.path
                                key={i}
                                d={`M0,${50 + i * 15} Q150,${30 + i * 15} 300,${50 + i * 15} T600,${50 + i * 15}`}
                                stroke={accentColor}
                                strokeWidth="2"
                                fill="none"
                                animate={{
                                    d: [
                                        `M0,${50 + i * 15} Q150,${30 + i * 15} 300,${50 + i * 15} T600,${50 + i * 15}`,
                                        `M0,${50 + i * 15} Q150,${70 + i * 15} 300,${50 + i * 15} T600,${50 + i * 15}`,
                                        `M0,${50 + i * 15} Q150,${30 + i * 15} 300,${50 + i * 15} T600,${50 + i * 15}`,
                                    ],
                                    opacity: isHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </svg>
                );
            case "grid":
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <motion.rect
                                    width="40"
                                    height="40"
                                    fill="none"
                                    stroke={accentColor}
                                    strokeWidth="0.5"
                                    animate={{
                                        opacity: isHovered ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={`${(i % 4) * 25 + 12.5}%`}
                                cy={`${Math.floor(i / 4) * 50 + 25}%`}
                                r="4"
                                fill={accentColor}
                                animate={{
                                    opacity: isHovered ? [0.3, 0.8, 0.3] : [0.2, 0.5, 0.2],
                                    scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2 + i * 0.2,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                            />
                        ))}
                    </svg>
                );
            case "dots":
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(100)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={`${(i % 10) * 10 + 5}%`}
                                cy={`${Math.floor(i / 10) * 10 + 5}%`}
                                r="1.5"
                                fill={accentColor}
                                animate={{
                                    opacity: isHovered ? [0.2, 0.6, 0.2] : [0.1, 0.3, 0.1],
                                    scale: isHovered ? [1, 1.8, 1] : [1, 1.3, 1],
                                }}
                                transition={{
                                    duration: 2 + (i % 10) * 0.1,
                                    repeat: Infinity,
                                    delay: (i % 20) * 0.05,
                                }}
                            />
                        ))}
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section className="bg-black text-white py-16 md:py-20 relative overflow-hidden">
            {/* Subtle ambient background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Gradient Line Breaker */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-12"
                />

                {/* Header Section - Centered and Expanded */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                        <TypingEffect text="Start Your Cloud Compliance Journey in Four Simple Steps" />
                    </h2>
                </motion.div>

                {/* Desktop Expandable Cards */}
                <div className="mt-12 md:mt-20">
                    <div className="hidden lg:flex gap-4 h-[600px] relative">
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
                                        duration: 0.6,
                                        ease: [0.32, 0.72, 0, 1]
                                    }}
                                    className="relative rounded-2xl overflow-hidden cursor-pointer group"
                                    style={{
                                        minWidth: isAnyHovered && !isHovered ? '80px' : 'auto'
                                    }}
                                >
                                    {/* Premium Glass Background with Chromatic Effect */}
                                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl">
                                        {/* Animated gradient overlay */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                                            animate={{
                                                opacity: isHovered ? [0.3, 0.5, 0.3] : [0.1, 0.2, 0.1],
                                                scale: isHovered ? [1, 1.05, 1] : 1,
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />

                                        {/* Animated Pattern Background */}
                                        {renderPattern(item.pattern, item.accentColor, isHovered)}

                                        {/* Floating orbs animation */}
                                        <motion.div
                                            className="absolute w-32 h-32 rounded-full blur-3xl"
                                            style={{ backgroundColor: item.accentColor, opacity: 0.15 }}
                                            animate={{
                                                x: isHovered ? [0, 80, 0] : [0, 40, 0],
                                                y: isHovered ? [0, -60, 0] : [0, -30, 0],
                                                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        <motion.div
                                            className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl"
                                            style={{ backgroundColor: item.accentColor, opacity: 0.1 }}
                                            animate={{
                                                x: isHovered ? [0, -50, 0] : [0, -25, 0],
                                                y: isHovered ? [0, 50, 0] : [0, 25, 0],
                                                scale: isHovered ? [1, 1.4, 1] : [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 10,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1
                                            }}
                                        />

                                        {/* Large Icon Watermark */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            animate={{
                                                opacity: isHovered ? 0.08 : 0.04,
                                                scale: isHovered ? 1.2 : 1,
                                                rotate: isHovered ? [0, 5, 0] : 0,
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Icon className="w-64 h-64" style={{ color: item.accentColor }} strokeWidth={0.5} />
                                        </motion.div>

                                        {/* Noise texture overlay */}
                                        <div className="absolute inset-0 opacity-[0.015]" style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                                        }} />
                                    </div>

                                    {/* Content - Collapsed State */}
                                    <AnimatePresence mode="wait">
                                        {!isHovered && (
                                            <motion.div
                                                initial={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="relative h-full flex flex-col justify-between p-6"
                                            >
                                                {/* Top Icon */}
                                                {!isAnyHovered && (
                                                    <motion.div
                                                        className="flex justify-center mb-4"
                                                        animate={{
                                                            y: [0, -10, 0],
                                                        }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    >
                                                        <div className="relative">
                                                            <motion.div
                                                                className="absolute inset-0 rounded-full blur-xl"
                                                                style={{ backgroundColor: item.accentColor }}
                                                                animate={{
                                                                    scale: [1, 1.5, 1],
                                                                    opacity: [0.3, 0.6, 0.3],
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                }}
                                                            />
                                                            <Icon 
                                                                className="w-16 h-16 relative" 
                                                                style={{ color: item.accentColor }} 
                                                                strokeWidth={1.5}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                <div>
                                                    <motion.h3
                                                        className={`${
                                                            item.isLargeTitle
                                                                ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text pb-1 leading-none overflow-visible'
                                                                : 'text-white'
                                                        } font-bold tracking-tight leading-none ${isAnyHovered && !isHovered ? 'text-2xl' : 'text-5xl'}`}
                                                        style={{
                                                            writingMode: isAnyHovered && !isHovered ? 'vertical-rl' : 'horizontal-tb',
                                                            textOrientation: isAnyHovered && !isHovered ? 'mixed' : 'initial',
                                                            fontFamily: 'var(--font-geist-sans)',
                                                            fontWeight: 600,
                                                            letterSpacing: '-0.02em'
                                                        }}
                                                    >
                                                        {item.title}
                                                    </motion.h3>

                                                    {!isAnyHovered && (
                                                        <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: item.accentColor }}>
                                                            <span className="tracking-wide">Hover to explore</span>
                                                            <motion.div
                                                                animate={{ x: [0, 4, 0] }}
                                                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
                                                transition={{ duration: 0.4, delay: 0.2 }}
                                                className="relative h-full flex flex-col p-8 justify-between"
                                            >
                                                <div className="space-y-6">
                                                    {/* Icon + Title Section */}
                                                    <div className="flex items-center gap-4">
                                                        <motion.div
                                                            initial={{ scale: 0, rotate: -180 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                                            className="relative"
                                                        >
                                                            <motion.div
                                                                className="absolute inset-0 rounded-full blur-xl"
                                                                style={{ backgroundColor: item.accentColor }}
                                                                animate={{
                                                                    scale: [1, 1.5, 1],
                                                                    opacity: [0.4, 0.7, 0.4],
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                }}
                                                            />
                                                            <Icon 
                                                                className="w-14 h-14 relative" 
                                                                style={{ color: item.accentColor }} 
                                                                strokeWidth={1.5}
                                                            />
                                                        </motion.div>
                                                        
                                                        <div>
                                                            <motion.h3
                                                                initial={{ y: 20, opacity: 0 }}
                                                                animate={{ y: 0, opacity: 1 }}
                                                                transition={{ delay: 0.3 }}
                                                                className={`${
                                                                    item.isLargeTitle
                                                                        ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text pb-1 leading-none overflow-visible'
                                                                        : 'text-white'
                                                                } text-6xl font-bold tracking-tight leading-none`}
                                                                style={{
                                                                    fontFamily: 'var(--font-geist-sans)',
                                                                    fontWeight: 700,
                                                                    letterSpacing: '-0.03em'
                                                                }}
                                                            >
                                                                {item.title}
                                                            </motion.h3>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <motion.p
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.4 }}
                                                        className="text-neutral-200 text-lg leading-relaxed font-light"
                                                        style={{
                                                            fontFamily: 'var(--font-geist-sans)',
                                                            letterSpacing: '-0.01em'
                                                        }}
                                                    >
                                                        {item.detailedDescription}
                                                    </motion.p>

                                                    {/* Feature List */}
                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.45 }}
                                                        className="space-y-4 pt-2"
                                                    >
                                                        <h4 className="text-white/80 font-bold text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                                                            Key Capabilities
                                                        </h4>
                                                        <ul className="space-y-3 text-neutral-300">
                                                            {[
                                                                "Real-time monitoring and instant alerting system",
                                                                "Automated compliance reporting and documentation",
                                                                "Multi-cloud support (AWS, Azure, GCP, Kubernetes)",
                                                                "Detailed audit trails with immutable logging"
                                                            ].map((feature, i) => (
                                                                <motion.li
                                                                    key={i}
                                                                    initial={{ x: -20, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    transition={{ delay: 0.5 + i * 0.05 }}
                                                                    className="flex items-start gap-3 group/item"
                                                                >
                                                                    <motion.span
                                                                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                                                                        style={{ backgroundColor: item.accentColor }}
                                                                        whileHover={{ scale: 1.5 }}
                                                                        transition={{ duration: 0.2 }}
                                                                    />
                                                                    <span className="text-sm font-light leading-relaxed group-hover/item:text-white transition-colors" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                                                        {feature}
                                                                    </span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                </div>

                                                {/* Bottom Indicator */}
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.7 }}
                                                    className="flex items-center gap-3 text-sm font-medium"
                                                    style={{ color: item.accentColor, fontFamily: 'var(--font-geist-mono)' }}
                                                >
                                                    <span className="w-12 h-0.5" style={{ backgroundColor: item.accentColor }}></span>
                                                    <span className="tracking-wider">0{index + 1}</span>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Border Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl pointer-events-none border-2"
                                        animate={{
                                            borderColor: isHovered ? `${item.accentColor}99` : 'rgba(255, 255, 255, 0.1)',
                                            boxShadow: isHovered
                                                ? `0 0 60px ${item.accentColor}66, inset 0 0 60px ${item.accentColor}1a`
                                                : '0 0 0px rgba(168, 85, 247, 0)',
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile/Tablet Grid Fallback */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8">
                        {timelineItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`${index % 2 !== 0 ? "sm:mt-24" : ""}`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="group relative h-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                                    >
                                        {/* Mobile glass background */}
                                        <div className="absolute inset-0">
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                                                animate={{
                                                    opacity: [0.1, 0.2, 0.1],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            {renderPattern(item.pattern, item.accentColor, false)}
                                        </div>

                                        <div className="relative p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Icon className="w-12 h-12" style={{ color: item.accentColor }} strokeWidth={1.5} />
                                                <h3 className={`${item.isLargeTitle ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text pb-1 leading-none overflow-visible' : 'text-white'} tracking-tight text-4xl font-bold leading-tight`} style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.02em' }}>
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="text-neutral-300 text-base leading-relaxed font-light" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Button with Purple Gradient Glow */}
                <div className="mt-16 flex justify-center">
                    <Link href="/contact">
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-10 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 tracking-wide overflow-hidden group"
                            style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.01em' }}
                        >
                            {/* Animated purple gradient background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                            />
                            
                            {/* Pulsing glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            
                            {/* Border glow */}
                            <div className="absolute inset-0 rounded-full border-2 border-purple-400/50" />
                            
                            <span className="relative text-white z-10">Book Demo</span>
                            <ArrowRightIcon className="w-5 h-5 relative z-10 text-white" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FlowSection;

