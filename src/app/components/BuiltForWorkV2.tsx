"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef, useState } from "react"
import {
  Cloud,
  Shield,
  Zap,
  FileCheck,
  Brain,
  Eye
} from "lucide-react"

const capabilities = [
  {
    icon: Cloud,
    stat: "3",
    label: "Multi-cloud",
    desc: "AWS • Azure • GCP",
    color: "#3b82f6",
  },
  {
    icon: Shield,
    stat: "40+",
    label: "Frameworks",
    desc: "ISO • SOC 2 • HIPAA",
    color: "#eab308",
  },
  {
    icon: Brain,
    stat: "AI",
    label: "Remediation",
    desc: "Guided fixes",
    color: "#ec4899",
  },
  {
    icon: Zap,
    stat: "5m",
    label: "Setup",
    desc: "Agentless API",
    color: "#06b6d4",
  },
  {
    icon: Eye,
    stat: "24/7",
    label: "Monitoring",
    desc: "Real-time alerts",
    color: "#8b5cf6",
  },
  {
    icon: FileCheck,
    stat: "1-Click",
    label: "Reports",
    desc: "Instant evidence",
    color: "#10b981",
  },
]

// Particle system for each card
function ParticleField({ color, isHovered }: { color: string; isHovered: boolean }) {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
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

// Magnetic hover effect card
function MagneticCard({ capability, index }: { capability: typeof capabilities[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse position tracking for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth magnetic pull
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  // Transform mouse position to card rotation
  const rotateX = useTransform(springY, [-100, 100], [15, -15])
  const rotateY = useTransform(springX, [-100, 100], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
      animate={inView ? {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.08,
        }
      } : {}}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        ref={cardRef}
        className="relative bg-black border border-white/10 overflow-hidden cursor-pointer group"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          borderColor: capability.color,
          transition: { duration: 0.3 }
        }}
      >
        {/* Particle system */}
        <ParticleField color={capability.color} isHovered={isHovered} />

        {/* Gradient glow on hover */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: `radial-gradient(circle at center, ${capability.color}20 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-x-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${capability.color}, transparent)`,
            boxShadow: `0 0 20px ${capability.color}`,
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

        <div className="relative p-10 min-h-[320px] flex flex-col justify-between">
          {/* Icon with refined hover animation */}
          <motion.div
            className="relative w-16 h-16 mb-8"
          >
            {/* Pulsing blob background - subtle and elegant */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{ backgroundColor: capability.color }}
              animate={isHovered ? {
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              } : {
                scale: 1,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />

            {/* Icon container with smooth lift and tilt */}
            <motion.div
              className="relative w-full h-full border-2 flex items-center justify-center"
              style={{
                borderColor: capability.color,
                transformStyle: "preserve-3d",
              }}
              animate={isHovered ? {
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
              {/* Icon with breathing scale animation */}
              <motion.div
                animate={isHovered ? {
                  scale: [1, 1.15, 1],
                } : {
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <Icon
                  className="w-8 h-8"
                  style={{ color: capability.color }}
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Subtle shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={isHovered ? {
                  x: ["-100%", "100%"],
                  opacity: [0, 0.1, 0],
                } : {
                  x: "-100%",
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Counter with elastic animation */}
          <div className="mb-8">
            <motion.div
              className="text-7xl font-bold mb-2"
              style={{ color: capability.color }}
              animate={isHovered ? {
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
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
              {capability.label}
            </div>
          </div>

          {/* Description with typewriter reveal */}
          <div className="relative overflow-hidden">
            <motion.p
              className="text-sm text-neutral-400 font-light"
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

          {/* Corner accent with pulse */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-2"
            style={{ backgroundColor: capability.color }}
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? [1, 0.5, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
            }}
          />

          {/* Bottom edge glow */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ backgroundColor: capability.color }}
            animate={{
              opacity: isHovered ? [0.2, 1, 0.2] : 0,
              scaleX: isHovered ? [0.5, 1, 0.5] : 0,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main component with scroll-based reveal
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
      className="py-12 bg-neutral-950 relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            opacity: scrollProgress * 0.5,
          }}
        />
      </div>

      {/* Elegant divider line with gradient */}
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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Content transition - bridges the story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-2 pb-8 text-center max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-white/60 leading-relaxed"
          >
            Every one of these challenges disappears with{" "}
            <span className="text-white font-normal">Suronex</span> —
            a unified platform that turns compliance chaos into continuous confidence.
          </motion.p>
        </motion.div>

        {/* Header with scroll-triggered reveal */}
        <motion.div
          ref={ref}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <h2 className="text-6xl lg:text-8xl font-light tracking-tight text-white mb-6 leading-[1.05]">
              Built for{" "}
              <motion.span
                className="inline-block"
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
                real work
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-neutral-400 font-light max-w-2xl mx-auto"
            >
              Enterprise compliance that actually ships
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cards grid with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {capabilities.map((item, i) => (
            <MagneticCard key={i} capability={item} index={i} />
          ))}
        </div>

        {/* Floating CTA with purple gradient */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            className="relative px-12 py-5 border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm uppercase tracking-[0.2em] font-medium overflow-hidden group"
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

            <span className="relative z-10">See it in action</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

