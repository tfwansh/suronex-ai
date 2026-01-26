// app/components/AnimatedImageViewer.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Pause, Play } from 'lucide-react'

interface AnimatedImageViewerProps {
    src: string
    alt: string
    zoomSequence?: Array<{
        scale: number
        x: string
        y: string
        duration: number
    }>
    className?: string
}

export function AnimatedImageViewer({
    src,
    alt,
    zoomSequence,
    className = ''
}: AnimatedImageViewerProps) {
    const [currentStep, setCurrentStep] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    // Default zoom sequence: top-right → top-left → bottom → full view
    const defaultSequence = [
        { scale: 1.8, x: '70%', y: '20%', duration: 4000 },
        { scale: 1.8, x: '30%', y: '20%', duration: 4000 },
        { scale: 1.6, x: '50%', y: '70%', duration: 4000 },
        { scale: 1, x: '50%', y: '50%', duration: 3000 }
    ]

    const sequence = zoomSequence || defaultSequence

    useEffect(() => {
        if (isPaused) return

        const currentDuration = sequence[currentStep].duration
        const timer = setTimeout(() => {
            setCurrentStep((prev) => (prev + 1) % sequence.length)
        }, currentDuration)

        return () => clearTimeout(timer)
    }, [currentStep, isPaused, sequence])

    const currentTransform = sequence[currentStep]

    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative w-full h-full bg-black/50">
                <motion.div
                    className="relative w-full h-full"
                    animate={{
                        scale: currentTransform.scale,
                        x: `calc(50% - ${currentTransform.x})`,
                        y: `calc(50% - ${currentTransform.y})`
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    style={{
                        transformOrigin: 'center center'
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </div>

            {/* Controls Overlay */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-4 right-4 z-20"
                    >
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 hover:bg-black/90 transition-all group"
                        >
                            {isPaused ? (
                                <Play className="w-4 h-4 text-white group-hover:text-[#D33E9E]" />
                            ) : (
                                <Pause className="w-4 h-4 text-white group-hover:text-[#D33E9E]" />
                            )}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {sequence.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentStep
                                ? 'w-8 bg-[#D33E9E]'
                                : 'w-1.5 bg-white/30 hover:bg-white/50'
                        }`}
                    />
                ))}
            </div>

            {/* Viewing Label */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 z-20"
                >
                    <span className="text-xs text-white font-medium">
                        Auto-scrolling view {currentStep + 1}/{sequence.length}
                    </span>
                </motion.div>
            )}
        </div>
    )
}

