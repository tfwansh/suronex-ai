"use client"

import { ArrowRightIcon } from "./Icons";
import { TypingEffect } from "./typing-effect";
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";
import { useState } from "react";

const FlowSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const timelineItems = [
        {
            title: "Connect",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            detailedDescription: "Seamlessly integrate with AWS, Azure, GCP, and on-premises infrastructure. Our intelligent discovery engine automatically maps your entire cloud ecosystem, identifying resources, relationships, and vulnerabilities across multiple cloud providers in real-time.",
            staticImage: "https://picsum.photos/seed/connect-static/800/600",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDhxZm5vOGRzYjZtaHZpbGFpY3RmZnlrYTR6aWJrYnB5OXlrbWVhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif",
        },
        {
            title: "Scan",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            detailedDescription: "Advanced threat detection powered by AI continuously monitors your infrastructure. Our scanning engine performs deep security assessments, identifying misconfigurations, compliance violations, and potential vulnerabilities before they become critical issues.",
            staticImage: "https://picsum.photos/seed/scan-static/800/600",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBqOGd5bm1wMzNrb3JjZWh4M3JuNWtoYzd5ZGd0YWp1dGpjbGN6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9C25UNTwfZuk85WP/giphy.gif",
        },
        {
            title: "Remediate",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters.",
            detailedDescription: "One-click automated remediation workflows eliminate security risks instantly. Our intelligent automation engine applies industry best practices, generates compliance reports, and maintains detailed audit trails for complete governance.",
            staticImage: "https://picsum.photos/seed/remediate-static/800/600",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3V5MHdkaGVvbGZxZGx5YjBraGk4azJsMGlsejdoZWZoNWx0bHFoZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlPwMAzh13pcZ20/giphy.gif",
        },
        {
            title: "Report",
            isLargeTitle: true,
            subtitle: "Reality in work",
            description: "Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud.",
            detailedDescription: "Executive dashboards and compliance reports at your fingertips. Generate comprehensive security reports, track KPIs, demonstrate compliance with SOC 2, ISO 27001, GDPR, and other frameworks. Export audit-ready documentation instantly.",
            staticImage: "https://picsum.photos/seed/report-static/800/600",
            animatedImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGMwZWoyOGNxdGo1ZWR3eWJ5NWd1bzBiMmczNDJmZGU4dHpocmo0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
        }
    ];

    return (
        <section className="bg-transparent text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="grid grid-cols-5 max-w-5xl">
                    <div className="col-span-1 text-end pr-3 font-light text-sm tracking-widest text-neutral-400">
                        SURONEX 2026
                    </div>
                    <div className="col-span-4 md:col-span-4 text-4xl border-l border-white/20 pl-5">
                        <TypingEffect text="Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters, and automates the work that slows you down." />
                    </div>
                </div>

                {/* Desktop Expandable Cards */}
                <div className="mt-12 md:mt-20">
                    <div className="hidden lg:flex gap-4 h-[600px] relative">
                        {timelineItems.map((item, index) => {
                            const isHovered = hoveredIndex === index;
                            const isAnyHovered = hoveredIndex !== null;

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
                                    {/* Background Image - Switches between static and animated */}
                                    <motion.div 
                                        className="absolute inset-0"
                                        animate={{
                                            scale: isHovered ? 1 : 1.1,
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={isHovered ? 'animated' : 'static'}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="w-full h-full object-cover"
                                                src={isHovered ? item.animatedImage : item.staticImage}
                                                alt={`${item.title} workflow`}
                                                loading="lazy"
                                            />
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
                                    </motion.div>

                                    {/* Content - Collapsed State */}
                                    <AnimatePresence mode="wait">
                                        {!isHovered && (
                                            <motion.div
                                                initial={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="relative h-full flex flex-col justify-end p-6"
                                            >
                                                <motion.h3
                                                    className={`${
                                                        item.isLargeTitle
                                                            ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text'
                                                            : 'text-white'
                                                    } font-bold tracking-tight leading-none ${isAnyHovered && !isHovered ? 'text-2xl' : 'text-4xl'}`}
                                                    style={{
                                                        writingMode: isAnyHovered && !isHovered ? 'vertical-rl' : 'horizontal-tb',
                                                        textOrientation: isAnyHovered && !isHovered ? 'mixed' : 'initial',
                                                    }}
                                                >
                                                    {item.title}
                                                </motion.h3>
                                                
                                                {!isAnyHovered && item.subtitle && (
                                                    <p className="font-medium text-white/70 text-xs mt-2 tracking-wide uppercase">
                                                        {item.subtitle}
                                                    </p>
                                                )}

                                                {!isAnyHovered && (
                                                    <div className="mt-4 flex items-center gap-2 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-sm font-medium tracking-wide">Hover to explore</span>
                                                        <motion.div
                                                            animate={{ x: [0, 4, 0] }}
                                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                        >
                                                            <ArrowRightIcon className="w-4 h-4" />
                                                        </motion.div>
                                                    </div>
                                                )}
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
                                                    {/* Title Section */}
                                                    <div>
                                                        <h3 className={`${
                                                            item.isLargeTitle
                                                                ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text'
                                                                : 'text-white'
                                                        } text-5xl font-extrabold tracking-tight leading-none mb-3`}>
                                                            {item.title}
                                                        </h3>
                                                        {item.subtitle && (
                                                            <p className="text-purple-300 font-semibold text-base tracking-wider uppercase">
                                                                {item.subtitle}
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-neutral-200 text-base leading-relaxed font-light">
                                                        {item.detailedDescription}
                                                    </p>

                                                    {/* Feature List */}
                                                    <div className="space-y-4 pt-2">
                                                        <h4 className="text-white/90 font-bold text-xs uppercase tracking-widest">
                                                            Key Capabilities
                                                        </h4>
                                                        <ul className="space-y-3 text-neutral-300">
                                                            <li className="flex items-start gap-3 group/item">
                                                                <motion.span 
                                                                    className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"
                                                                    whileHover={{ scale: 1.5 }}
                                                                    transition={{ duration: 0.2 }}
                                                                />
                                                                <span className="text-sm font-light leading-relaxed group-hover/item:text-white transition-colors">
                                                                    Real-time monitoring and instant alerting system
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start gap-3 group/item">
                                                                <motion.span 
                                                                    className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"
                                                                    whileHover={{ scale: 1.5 }}
                                                                    transition={{ duration: 0.2 }}
                                                                />
                                                                <span className="text-sm font-light leading-relaxed group-hover/item:text-white transition-colors">
                                                                    Automated compliance reporting and documentation
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start gap-3 group/item">
                                                                <motion.span 
                                                                    className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"
                                                                    whileHover={{ scale: 1.5 }}
                                                                    transition={{ duration: 0.2 }}
                                                                />
                                                                <span className="text-sm font-light leading-relaxed group-hover/item:text-white transition-colors">
                                                                    Multi-cloud support (AWS, Azure, GCP, Kubernetes)
                                                                </span>
                                                            </li>
                                                            <li className="flex items-start gap-3 group/item">
                                                                <motion.span 
                                                                    className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"
                                                                    whileHover={{ scale: 1.5 }}
                                                                    transition={{ duration: 0.2 }}
                                                                />
                                                                <span className="text-sm font-light leading-relaxed group-hover/item:text-white transition-colors">
                                                                    Detailed audit trails with immutable logging
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Bottom Indicator */}
                                                <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                                                    <span className="w-8 h-0.5 bg-purple-500"></span>
                                                    <span className="tracking-wider">0{index + 1}</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Border Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl pointer-events-none border-2"
                                        animate={{
                                            borderColor: isHovered ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                                            boxShadow: isHovered 
                                                ? '0 0 60px rgba(168, 85, 247, 0.4), inset 0 0 60px rgba(168, 85, 247, 0.1)' 
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
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={index % 2 !== 0 ? { y: -100 } : { y: 100 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className={`${index % 2 !== 0 ? "sm:mt-24" : ""}`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="group relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                                >
                                    <div className="p-6 pb-4">
                                        <h3 className={`${item.isLargeTitle ? 'text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text' : 'text-white'} tracking-tight text-3xl lg:text-4xl font-bold mb-3 leading-tight`}>
                                            {item.title}
                                        </h3>
                                        {item.subtitle && (
                                            <p className="font-semibold text-white/70 text-xs mb-3 tracking-wider uppercase">{item.subtitle}</p>
                                        )}
                                        <p className="text-neutral-400 text-sm leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="relative h-48 overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <img
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                                src={item.staticImage}
                                                alt={`${item.title} workflow visualization`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                                        </motion.div>

                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                                                <ArrowRightIcon className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 blur-xl animate-pulse" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 md:mt-12 flex justify-center">
                    <Link href="/contact">
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 tracking-wide"
                        >
                            Book Demo <ArrowRightIcon className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FlowSection;

