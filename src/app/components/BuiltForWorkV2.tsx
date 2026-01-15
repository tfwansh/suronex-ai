"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef, useState } from "react"
import {
  Plug,
  FileBarChart,
  Cloud,
  Shield,
  Zap,
  Sparkles
} from "lucide-react"

const capabilities = [
  {
    icon: Cloud,
    stat: "4",
    label: "Cloud Providers",
    desc: "AWS • Azure • GCP • Oracle",
    color: "#3b82f6",
  },
  {
    icon: Shield,
    stat: "50+",
    label: "Standards & Practices",
    desc: "ISO 27K • PCI-DSS • HIPAA • GDPR • RBI • Custom Compliance",
    color: "#eab308",
    highlight: "Bring Your Own Compliance",
  },
  {
    icon: Sparkles,
    stat: "AI",
    label: "Enabled Platform",
    desc: "Context-based analytics • Continuous Monitoring of threat patterns • Guided remediation",
    color: "#ec4899",
  },
  {
    icon: Zap,
    stat: "5min",
    label: "Setup",
    desc: "Agentless cloud, SaaS & native providers",
    color: "#06b6d4",
  },
  {
    icon: Plug,
    stat: "Live",
    label: "Integrations",
    desc: "Integrations on demand • Cloud, DevOps & SaaS platforms",
    color: "#8b5cf6",
  },
  {
    icon: FileBarChart,
    stat: "Instant",
    label: "Reports Generation",
    desc: "BI Reporting on demand in no time • Export anywhere",
    color: "#10b981",
  },
]

// Particle system for each card
function ParticleField({ color, isHovered }: { color: string; isHovered: boolean }) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={isHovered ? {
            y: [0, -100 - p.speed * 50],
            opacity: [0, 1, 0],
          } : {
            y: 0,
            opacity: 0,
          }}
          transition={{
            duration: p.speed,
            repeat: isHovered ? Infinity : 0,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

// Magnetic hover effect card - Mobile optimized
function MagneticCard({ capability, index }: { capability: typeof capabilities[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mouse position tracking for magnetic effect (desktop only)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth magnetic pull
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  // Transform mouse position to card rotation
  const rotateX = useTransform(springY, [-100, 100], [8, -8])
  const rotateY = useTransform(springX, [-100, 100], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / 5)
    mouseY.set((e.clientY - centerY) / 5)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const Icon = capability.icon
  const isHighlighted = capability.highlight

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={inView ? {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.08,
        }
      } : {}}
      className="w-full"
    >
      <motion.div
        ref={cardRef}
        className={`relative overflow-hidden cursor-pointer group rounded-2xl border transition-all ${
          isHighlighted
            ? 'bg-gradient-to-br from-yellow-500/10 via-black/50 to-black border-yellow-500/30 shadow-lg shadow-yellow-500/20'
            : 'bg-black/50 backdrop-blur-sm border-white/10'
        }`}
        style={isMobile ? {} : {
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={isMobile ? {} : {
          borderColor: isHighlighted ? "#fbbf24" : capability.color,
          transition: { duration: 0.3 }
        }}
        whileTap={isMobile ? { scale: 0.98 } : {}}
      >
        {/* Particle system */}
        {!isMobile && <ParticleField color={capability.color} isHovered={isHovered} />}

        {/* Gradient glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: isHighlighted
              ? `radial-gradient(circle at center, #fbbf2420 0%, transparent 70%)`
              : `radial-gradient(circle at center, ${capability.color}20 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Scanning line effect - desktop only */}
        {!isMobile && (
          <motion.div
            className="absolute inset-x-0 h-px"
            style={{
              background: isHighlighted
                ? `linear-gradient(90deg, transparent, #fbbf24, transparent)`
                : `linear-gradient(90deg, transparent, ${capability.color}, transparent)`,
              boxShadow: isHighlighted ? `0 0 20px #fbbf24` : `0 0 20px ${capability.color}`,
            }}
            animate={isHovered ? {
              top: ["0%", "100%"],
            } : {
              top: "0%"
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "linear",
            }}
          />
        )}

        {/* "Bring Your Own" Badge */}
        {isHighlighted && (
          <motion.div
            className="absolute -top-1 right-4 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08 + 0.2 }}
          >
            ✨ Bring Your Own
          </motion.div>
        )}

        <div className="relative p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] flex flex-col justify-between">
          {/* Icon with refined hover animation */}
          <motion.div
            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-6 sm:mb-8"
          >
            {/* Pulsing blob background */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                backgroundColor: isHighlighted ? "#fbbf24" : capability.color,
              }}
              animate={isHovered ? {
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              } : {
                scale: 1,
                opacity: 0.15,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />

            {/* Icon container */}
            <motion.div
              className="relative w-full h-full rounded-lg border-2 flex items-center justify-center"
              style={{
                borderColor: isHighlighted ? "#fbbf24" : capability.color,
              }}
              animate={isHovered && !isMobile ? {
                y: -8,
                rotateY: 15,
                rotateX: -5,
              } : {
                y: 0,
                rotateY: 0,
                rotateX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Icon
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                style={{ color: isHighlighted ? "#fbbf24" : capability.color }}
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>

          {/* Counter */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
              style={{ color: isHighlighted ? "#fbbf24" : capability.color }}
              animate={isHovered && !isMobile ? {
                scale: [1, 1.08, 1],
              } : {
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1.5,
                ease: "easeOut",
              }}
            >
              {capability.stat}
            </motion.div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 font-medium">
              {capability.label}
            </div>
          </div>

          {/* Description */}
          <div className="relative">
            <motion.p
              className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? {
                y: 0,
                opacity: 1,
                transition: { delay: index * 0.08 + 0.3 }
              } : {}}
            >
              {capability.desc}
            </motion.p>
          </div>

          {/* Corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-2 rounded-bl-lg"
            style={{ backgroundColor: isHighlighted ? "#fbbf24" : capability.color }}
            animate={{
              opacity: isHovered ? [0.4, 1, 0.4] : 0.3,
            }}
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main component
export function BuiltForWorkV2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]"
          style={{
            opacity: scrollProgress * 0.5,
          }}
        />
      </div>

      {/* Top divider line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        {/* Bridge paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-2 pb-8 sm:pb-12 text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/60 leading-relaxed px-2"
          >
            Every one of these challenges disappears with{" "}
            <span className="text-white font-normal">Suronex</span>—a unified platform that turns compliance chaos into continuous confidence.
          </motion.p>
        </motion.div>

        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-12 sm:mb-16 md:mb-20 text-center px-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
              Beyond Checklists.{" "}
              <motion.span
                className="block sm:inline-block mt-2 sm:mt-0"
                animate={{
                  backgroundImage: [
                    "linear-gradient(45deg, #3b82f6, #ec4899)",
                    "linear-gradient(45deg, #ec4899, #10b981)",
                    "linear-gradient(45deg, #10b981, #3b82f6)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Built for Cloud Reality.
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 font-light max-w-3xl mx-auto px-2"
            >
              Automated compliance and security for dynamic cloud environments
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cards grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {capabilities.map((item, i) => (
            <MagneticCard key={i} capability={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center px-4"
        >
          <motion.button
            className="relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Purple gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{
                x: "100%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            />

            <span className="relative z-10 whitespace-nowrap">See it in action</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

