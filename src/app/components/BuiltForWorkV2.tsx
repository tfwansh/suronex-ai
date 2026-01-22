"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
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
    showLogos: true,
    logos: [
      { src: "/Integrations/aws-color.png", alt: "AWS" },
      { src: "/Integrations/Azure.png", alt: "Azure" },
      { src: "/Integrations/Googlecloud.png", alt: "Google Cloud" },
      { src: "/Integrations/oracle.png", alt: "Oracle Cloud" },
    ]
  },
  {
    icon: Shield,
    stat: "40+",
    label: "Standards & Best Practices",
    desc: "ISO 27K • PCI-DSS • HIPAA • GDPR • RBI • Custom Compliance",
    color: "#eab308",
    highlight: "Bring Your Own Compliance",
  },
  {
    icon: Sparkles,
    stat: "AI",
    label: "Enabled Platform",
    desc: "Context-based analytics • Continuous monitoring • Guided remediation",
    color: "#ec4899",
  },
  {
    icon: Zap,
    stat: "5min",
    label: "Setup",
    desc: "Agentless Cloud, SaaS & Native Providers",
    color: "#06b6d4",
  },
  {
    icon: Plug,
    stat: "10+",
    label: "Integrations",
    desc: "Cloud, Cloud Native & SaaS platforms",
    color: "#8b5cf6",
    badge: "Bring Your Own Integration",
  },
  {
    icon: FileBarChart,
    stat: "BI",
    label: "Intelligent Reporting",
    desc: "Generate Reports in No Time • Export in Multiple Formats",
    color: "#10b981",
    badge: "Bring Your Own Report"
  },
]

// Optimized particle system with reduced particles for mobile
function ParticleField({ color, isHovered, isMobile }: { color: string; isHovered: boolean; isMobile: boolean }) {
  const particleCount = isMobile ? 10 : 15 // Reduced for mobile performance
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 1.5 + 1,
  }))

  if (isMobile && !isHovered) return null // Don't render on mobile unless active

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full will-change-transform"
          style={{
            backgroundColor: color,
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={isHovered ? {
            y: [0, -80 - p.speed * 30],
            opacity: [0, 0.8, 0],
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

// Mobile optimized magnetic card with touch support
function MagneticCard({ capability, index }: { capability: typeof capabilities[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isActive, setIsActive] = useState(false)
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
  const rotateX = useTransform(springY, [-100, 100], [5, -5])
  const rotateY = useTransform(springX, [-100, 100], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / 5)
    mouseY.set((e.clientY - centerY) / 5)
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsActive(false)
      mouseX.set(0)
      mouseY.set(0)
    }
  }

  // Mobile touch handler
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation()
    setIsActive(!isActive)
    // Auto-deactivate after animation completes
    setTimeout(() => setIsActive(false), 3000)
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
          delay: index * 0.06,
        }
      } : {}}
      className="w-full"
    >
      <motion.div
        ref={cardRef}
        className={`relative overflow-hidden cursor-pointer group rounded-xl sm:rounded-2xl border transition-all will-change-transform ${isHighlighted
          ? 'bg-gradient-to-br from-yellow-500/10 via-black/50 to-black border-yellow-500/30 shadow-lg shadow-yellow-500/20'
          : 'bg-black/50 backdrop-blur-sm border-white/10'
          }`}
        style={isMobile ? {} : {
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsActive(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        whileHover={isMobile ? {} : {
          borderColor: isHighlighted ? "#fbbf24" : capability.color,
          transition: { duration: 0.3 }
        }}
        whileTap={isMobile ? { scale: 0.98 } : {}}
      >
        {/* Particle system */}
        <ParticleField color={capability.color} isHovered={isActive} isMobile={isMobile} />

        {/* Gradient glow on hover/active */}
        <motion.div
          className="absolute inset-0 opacity-0 will-change-transform"
          style={{
            background: isHighlighted
              ? `radial-gradient(circle at center, #fbbf2420 0%, transparent 70%)`
              : `radial-gradient(circle at center, ${capability.color}20 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1.5 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Scanning line effect */}
        {isActive && (
          <motion.div
            className="absolute inset-x-0 h-px will-change-transform"
            style={{
              background: isHighlighted
                ? `linear-gradient(90deg, transparent, #fbbf24, transparent)`
                : `linear-gradient(90deg, transparent, ${capability.color}, transparent)`,
              boxShadow: isHighlighted ? `0 0 15px #fbbf24` : `0 0 15px ${capability.color}`,
            }}
            animate={{
              top: ["0%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: 2,
              ease: "linear",
            }}
          />
        )}

        {isHighlighted && (
          <motion.div
            className="absolute -top-1 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.06 + 0.2 }}
          >
            ✨ {capability.highlight || capability.badge}
          </motion.div>
        )}

        {/* Custom badge for non-highlighted cards (like Integrations) */}
        {!isHighlighted && capability.badge && (
          <motion.div
            className="absolute -top-1 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: `${capability.color}20`,
              borderColor: `${capability.color}50`,
              borderWidth: '1px',
              color: capability.color
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.06 + 0.2 }}
          >
            ✨ {capability.badge}
          </motion.div>
        )}

        {/* COMPACT HEIGHT CONTAINER */}
        <div className="relative h-[260px] sm:h-[280px] md:h-[300px] p-4 sm:p-5 md:p-6 flex flex-col justify-between">

          {/* TOP SECTION - Icon */}
          <motion.div
            className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0"
          >
            {/* Pulsing blob background */}
            <motion.div
              className="absolute inset-0 rounded-full blur-lg sm:blur-xl will-change-transform"
              style={{
                backgroundColor: isHighlighted ? "#fbbf24" : capability.color,
              }}
              animate={isActive ? {
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              } : {
                scale: 1,
                opacity: 0.1,
              }}
              transition={{
                duration: 1.5,
                repeat: isActive ? 2 : 0,
                ease: "easeInOut",
              }}
            />

            {/* Icon container */}
            <motion.div
              className="relative w-full h-full rounded-lg sm:rounded-xl border-2 flex items-center justify-center will-change-transform"
              style={{
                borderColor: isHighlighted ? "#fbbf24" : capability.color,
              }}
              animate={isActive ? {
                y: -6,
                rotateY: isMobile ? 0 : 12,
                rotateX: isMobile ? 0 : -4,
              } : {
                y: 0,
                rotateY: 0,
                rotateX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
            >
              <Icon
                className="w-6 h-6 sm:w-7 sm:h-7"
                style={{ color: isHighlighted ? "#fbbf24" : capability.color }}
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>

          {/* MIDDLE SECTION - Compact Counter & Label */}
          <div className="flex-shrink-0">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 sm:mb-2 will-change-transform"
              style={{ color: isHighlighted ? "#fbbf24" : capability.color }}
              animate={isActive ? {
                scale: [1, 1.05, 1],
              } : {
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                repeat: isActive ? 2 : 0,
                ease: "easeOut",
              }}
            >
              {capability.stat}
            </motion.div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 font-medium">
              {capability.label}
            </div>
          </div>

          {/* BOTTOM SECTION - Compact Logos OR Description */}
          <div className="flex-shrink-0 h-[80px] sm:h-[90px] flex items-center justify-center">
            {capability.showLogos ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.06 + 0.3 }}
                className="flex items-center justify-center gap-3 sm:gap-4 w-full px-2"
              >
                {capability.logos?.map((logo, i) => (
                  <motion.div
                    key={i}
                    className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                    whileHover={!isMobile ? {
                      scale: 1.1,
                    } : {}}
                    whileTap={isMobile ? {
                      scale: 0.95,
                    } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.06 + 0.25 }}
                className="w-full flex items-center justify-center px-1 sm:px-2"
              >
                <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed text-center font-light">
                  {capability.desc}
                </p>
              </motion.div>
            )}
          </div>

          {/* Corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-bl-lg"
            style={{ backgroundColor: isHighlighted ? "#fbbf24" : capability.color }}
            animate={{
              opacity: isActive ? [0.3, 0.8, 0.3] : 0.25,
            }}
            transition={{
              duration: 0.8,
              repeat: isActive ? 2 : 0,
            }}
          />
        </div>
      </motion.div>
    </motion.div >
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

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-8 sm:py-10 md:py-12 bg-black relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] md:bg-[size:3rem_3rem]"
          style={{
            opacity: scrollProgress * 0.4,
          }}
        />
      </div>

      {/* Top divider line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-6 sm:mb-8 md:mb-10 text-center px-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white mb-3 sm:mb-4 leading-[1.1]">
              Beyond Checklists.{" "}
              <motion.span
                className="block sm:inline-block mt-1 sm:mt-0"
                animate={{
                  backgroundImage: [
                    "linear-gradient(45deg, #3b82f6, #ec4899)",
                    "linear-gradient(45deg, #ec4899, #10b981)",
                    "linear-gradient(45deg, #10b981, #3b82f6)",
                  ],
                }}
                transition={{
                  duration: 4,
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
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-400 font-light max-w-2xl mx-auto px-2"
            >
              Automated compliance and security for dynamic cloud environments
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cards grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-7xl mx-auto">
          {capabilities.map((item, i) => (
            <MagneticCard key={i} capability={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

