"use client"

import { ArrowRightIcon } from "./Icons";
import { TypingEffect } from "./typing-effect";
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";
import { useState } from "react";
import { Check, Zap, Shield, FileText } from "lucide-react";

const FlowSection2 = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const timelineItems = [
        {
            title: "Connect",
            icon: Zap,
            shortDesc: "Seamlessly integrate your entire cloud infrastructure",
            description: "Intelligent discovery engine automatically maps your complete cloud ecosystem in real-time.",
            detailedDescription: "Seamlessly integrate with AWS, Azure, GCP, and on-premises infrastructure. Our intelligent discovery engine automatically maps your entire cloud ecosystem, identifying resources, relationships, and vulnerabilities across multiple cloud providers.",
            highlights: ["AWS", "Azure", "GCP", "on-premises", "real-time"],
            features: [
                "Agentless API integration in under 5 minutes",
                "Auto-discovery of all cloud resources and dependencies",
                "Real-time asset inventory with relationship mapping",
                "Zero-downtime deployment across hybrid environments"
            ],
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            bgGradient: "from-blue-500/20 to-cyan-500/20",
            staticImage: "https://picsum.photos/seed/connect-static/1200/400",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDhxZm5vOGRzYjZtaHZpbGFpY3RmZnlrYTR6aWJrYnB5OXlrbWVhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif",
        },
        {
            title: "Scan",
            icon: Shield,
            shortDesc: "Advanced AI-powered threat detection and vulnerability assessment",
            description: "Continuous monitoring and deep security analysis across your entire infrastructure.",
            detailedDescription: "Advanced threat detection powered by AI continuously monitors your infrastructure. Our scanning engine performs deep security assessments, identifying misconfigurations, compliance violations, and potential vulnerabilities before they become critical issues.",
            highlights: ["AI", "threat detection", "security assessments", "misconfigurations", "compliance violations"],
            features: [
                "24/7 continuous compliance monitoring and alerting",
                "AI-driven anomaly detection with predictive insights",
                "Deep configuration analysis against 40+ frameworks",
                "Context-aware vulnerability prioritization"
            ],
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            bgGradient: "from-purple-500/20 to-pink-500/20",
            staticImage: "https://picsum.photos/seed/scan-static/1200/400",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBqOGd5bm1wMzNrb3JjZWh4M3JuNWtoYzd5ZGd0YWp1dGpjbGN6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9C25UNTwfZuk85WP/giphy.gif",
        },
        {
            title: "Remediate",
            icon: Check,
            shortDesc: "One-click automated remediation with intelligent workflows",
            description: "Eliminate security risks instantly with smart automation and best practices.",
            detailedDescription: "One-click automated remediation workflows eliminate security risks instantly. Our intelligent automation engine applies industry best practices, generates compliance reports, and maintains detailed audit trails for complete governance.",
            highlights: ["One-click", "automated remediation", "best practices", "audit trails", "governance"],
            features: [
                "Guided remediation with step-by-step instructions",
                "Automated policy enforcement and drift detection",
                "Pre-approved playbooks for instant risk mitigation",
                "Rollback capabilities with full change history"
            ],
            gradient: "from-emerald-500 via-green-500 to-lime-500",
            bgGradient: "from-emerald-500/20 to-green-500/20",
            staticImage: "https://picsum.photos/seed/remediate-static/1200/400",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3V5MHdkaGVvbGZxZGx5YjBraGk4azJsMGlsejdoZWZoNWx0bHFoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlPwMAzh13pcZ20/giphy.gif",
        },
        {
            title: "Report",
            icon: FileText,
            shortDesc: "Executive dashboards and audit-ready compliance reports",
            description: "Comprehensive reporting with real-time KPIs and export capabilities.",
            detailedDescription: "Executive dashboards and compliance reports at your fingertips. Generate comprehensive security reports, track KPIs, demonstrate compliance with SOC 2, ISO 27001, GDPR, and other frameworks. Export audit-ready documentation instantly.",
            highlights: ["Executive dashboards", "SOC 2", "ISO 27001", "GDPR", "audit-ready", "instant export"],
            features: [
                "BI reporting on demand in no time with live data",
                "Customizable dashboards with role-based access",
                "One-click evidence collection for auditors",
                "Automated compliance attestation reports"
            ],
            gradient: "from-orange-500 via-amber-500 to-yellow-500",
            bgGradient: "from-orange-500/20 to-amber-500/20",
            staticImage: "https://picsum.photos/seed/report-static/1200/400",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGMwZWoyOGNxdGo1ZWR3eWJ5NWd1bzBiMmczNDJmZGU4dHpocmo0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
        }
    ];

    const highlightText = (text: string, highlights: string[]) => {
        let result = text;
        highlights.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            result = result.replace(regex, '<mark class="bg-gradient-to-r from-purple-400/30 to-pink-400/30 text-white px-1 rounded">$1</mark>');
        });
        return result;
    };

    return (
        <section className="bg-transparent text-white py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <div className="border-l-4 border-gradient-to-b from-purple-500 to-pink-500 pl-4 sm:pl-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 leading-tight">
                            <TypingEffect text="Start Your Cloud Compliance Journey in Four Simple Steps" />
                        </h2>
                    </div>
                </div>

                {/* Desktop Expandable Rows */}
                <div className="hidden md:block space-y-4">
                    {timelineItems.map((item, index) => {
                        const isExpanded = expandedIndex === index;
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                layout
                                initial={false}
                                animate={{
                                    height: isExpanded ? "auto" : "100px",
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                                onMouseEnter={() => setExpandedIndex(index)}
                                onMouseLeave={() => setExpandedIndex(null)}
                                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                            >
                                {/* Background with Image */}
                                <div className="absolute inset-0 z-0">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={isExpanded ? 'animated' : 'static'}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 0.3, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-full h-full object-cover"
                                            src={isExpanded ? item.animatedImage : item.staticImage}
                                            alt={`${item.title} workflow`}
                                            loading="lazy"
                                        />
                                    </AnimatePresence>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} backdrop-blur-sm`} />
                                    <div className="absolute inset-0 bg-black/60" />
                                </div>

                                {/* Border Glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    animate={{
                                        boxShadow: isExpanded
                                            ? `0 0 0 2px rgba(168, 85, 247, 0.6), 0 20px 60px rgba(168, 85, 247, 0.3)`
                                            : '0 0 0 1px rgba(255, 255, 255, 0.1)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Content */}
                                <div className="relative z-10 p-6 md:p-8">
                                    {/* Collapsed State */}
                                    <AnimatePresence mode="wait">
                                        {!isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex items-center justify-between"
                                            >
                                                <div className="flex items-center gap-6">
                                                    {/* Step Number */}
                                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                                                        <span className="text-2xl font-bold text-white">0{index + 1}</span>
                                                    </div>

                                                    {/* Icon */}
                                                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5`}>
                                                        <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                                                            <Icon className="w-7 h-7 text-white" />
                                                        </div>
                                                    </div>

                                                    {/* Title & Short Desc */}
                                                    <div>
                                                        <h3 className="text-3xl font-bold text-white mb-1">{item.title}</h3>
                                                        <p className="text-base text-neutral-300 font-light">{item.shortDesc}</p>
                                                    </div>
                                                </div>

                                                {/* Expand Indicator */}
                                                <motion.div
                                                    className="flex items-center gap-2 text-purple-400 opacity-60 group-hover:opacity-100"
                                                    animate={{ x: [0, 8, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    <span className="text-sm font-medium hidden xl:block">Hover to explore</span>
                                                    <ArrowRightIcon className="w-5 h-5" />
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Expanded State */}
                                    <AnimatePresence mode="wait">
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 50 }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                className="space-y-6"
                                            >
                                                {/* Header */}
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center gap-6">
                                                        {/* Step Number */}
                                                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                                                            <span className="text-3xl font-bold text-white">0{index + 1}</span>
                                                        </div>

                                                        {/* Icon */}
                                                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5`}>
                                                            <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                                                                <Icon className="w-8 h-8 text-white" />
                                                            </div>
                                                        </div>

                                                        {/* Title */}
                                                        <div>
                                                            <h3 className="text-5xl font-bold text-white mb-2">{item.title}</h3>
                                                            <p className={`text-lg font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8 pl-24">
                                                    {/* Detailed Description */}
                                                    <div>
                                                        <h4 className="text-white/90 font-bold text-sm uppercase tracking-widest mb-4">
                                                            Overview
                                                        </h4>
                                                        <p
                                                            className="text-neutral-200 text-lg leading-relaxed font-light"
                                                            dangerouslySetInnerHTML={{
                                                                __html: highlightText(item.detailedDescription, item.highlights)
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Features */}
                                                    <div>
                                                        <h4 className="text-white/90 font-bold text-sm uppercase tracking-widest mb-4">
                                                            Key Capabilities
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {item.features.map((feature, idx) => (
                                                                <motion.li
                                                                    key={idx}
                                                                    initial={{ opacity: 0, x: 20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                                                    className="flex items-start gap-3 group/item"
                                                                >
                                                                    <motion.div
                                                                        className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} flex-shrink-0`}
                                                                        whileHover={{ scale: 1.5 }}
                                                                    />
                                                                    <span className="text-neutral-300 text-base leading-relaxed group-hover/item:text-white transition-colors">
                                                                        {feature}
                                                                    </span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Accordion */}
                <div className="md:hidden space-y-4">
                    {timelineItems.map((item, index) => {
                        const isExpanded = expandedIndex === index;
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                layout
                                className="relative rounded-2xl overflow-hidden"
                            >
                                {/* Background */}
                                <div className="absolute inset-0 z-0">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={isExpanded ? 'animated' : 'static'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.3 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full object-cover"
                                            src={isExpanded ? item.animatedImage : item.staticImage}
                                            alt={`${item.title} workflow`}
                                            loading="lazy"
                                        />
                                    </AnimatePresence>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}`} />
                                    <div className="absolute inset-0 bg-black/70" />
                                </div>

                                {/* Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none border-2"
                                    animate={{
                                        borderColor: isExpanded ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Header - Always visible */}
                                    <button
                                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                        className="w-full p-5 flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Step Number */}
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                                                <span className="text-xl font-bold text-white">0{index + 1}</span>
                                            </div>

                                            {/* Icon */}
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} p-0.5`}>
                                                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-white text-left">{item.title}</h3>
                                        </div>

                                        {/* Expand Icon */}
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 90 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowRightIcon className="w-5 h-5 text-purple-400" />
                                        </motion.div>
                                    </button>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 pb-5 space-y-6">
                                                    {/* Description */}
                                                    <div>
                                                        <p className={`text-base font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
                                                            {item.description}
                                                        </p>
                                                        <p
                                                            className="text-neutral-200 text-sm leading-relaxed"
                                                            dangerouslySetInnerHTML={{
                                                                __html: highlightText(item.detailedDescription, item.highlights)
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Features */}
                                                    <div>
                                                        <h4 className="text-white/90 font-bold text-xs uppercase tracking-widest mb-3">
                                                            Key Capabilities
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {item.features.map((feature, idx) => (
                                                                <li key={idx} className="flex items-start gap-2">
                                                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} flex-shrink-0`} />
                                                                    <span className="text-neutral-300 text-sm leading-relaxed">
                                                                        {feature}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="mt-12 md:mt-16 flex justify-center">
                    <Link href="/contact">
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-4 rounded-full overflow-hidden"
                        >
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient-x" />

                            {/* Content */}
                            <div className="relative flex items-center gap-3 text-white font-bold text-lg">
                                <span>Book a Demo</span>
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ArrowRightIcon className="w-5 h-5" />
                                </motion.div>
                            </div>

                            {/* Shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FlowSection2;

