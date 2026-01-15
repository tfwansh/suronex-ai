"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef, useState } from "react"
import Image from "next/image"
import { Check, Clock, Sparkles } from "lucide-react"

// Integration data - Updated with correct paths
const integrations = [
  // Live integrations
  {
    name: "Microsoft Teams",
    logo: "/Integrations/microsoftteams.png",
    status: "live",
    category: "Collaboration"
  },
  {
    name: "Terraform",
    logo: "/Integrations/terraform.png",
    status: "live",
    category: "IaC"
  },
  {
    name: "Google Cloud",
    logo: "/Integrations/Googlecloud.png",
    status: "live",
    category: "Cloud"
  },
  {
    name: "Kubernetes",
    logo: "/Integrations/Kubernetes.png",
    status: "live",
    category: "Orchestration"
  },
  {
    name: "ServiceNow",
    logo: "/Integrations/Servicenow.png",
    status: "live",
    category: "ITSM"
  },
  {
    name: "AWS",
    logo: "/Integrations/AWS.png",
    status: "live",
    category: "Cloud"
  },
  {
    name: "GitHub",
    logo: "/Integrations/Github.png",
    status: "live",
    category: "DevOps"
  },
  {
    name: "Azure",
    logo: "/Integrations/Azure.png",
    status: "live",
    category: "Cloud"
  },
  {
    name: "Slack",
    logo: "/Integrations/slack.png",
    status: "live",
    category: "Collaboration"
  },
  {
    name: "Confluence",
    logo: "/Integrations/Confluence.png",
    status: "live",
    category: "Documentation"
  },
  {
    name: "Jira",
    logo: "/Integrations/Jira.png",
    status: "live",
    category: "Project Management"
  },
  {
    name: "Microsoft 365",
    logo: "/Integrations/copilot.png",
    status: "live",
    category: "Productivity"
  },

  // Coming soon
  {
    name: "Okta",
    logo: "/Integrations/Okta.png",
    status: "soon",
    category: "Identity"
  },
  {
    name: "HubSpot",
    logo: "/Integrations/hubspot.png",
    status: "soon",
    category: "CRM"
  },
  {
    name: "Salesforce",
    logo: "/Integrations/salesforce.png",
    status: "soon",
    category: "CRM"
  },
  {
    name: "Oracle Cloud",
    logo: "/Integrations/oracle.png",
    status: "soon",
    category: "Cloud"
  },
  {
    name: "Alibaba Cloud",
    logo: "/Integrations/alibaba.png",
    status: "soon",
    category: "Cloud"
  },
  {
    name: "Splunk",
    logo: "/Integrations/splunk.png",
    status: "soon",
    category: "Analytics"
  },
]

// Status badge component
function StatusBadge({ status }: { status: string }) {
  const config = {
    live: {
      icon: Check,
      label: "Live",
      color: "#10b981",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    beta: {
      icon: Sparkles,
      label: "Beta",
      color: "#8B4FB8",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    soon: {
      icon: Clock,
      label: "Coming soon",
      color: "#6b7280",
      bg: "bg-neutral-500/10",
      border: "border-neutral-500/20"
    }
  }

  const { icon: Icon, label, color, bg, border } = config[status as keyof typeof config]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${bg} border ${border} backdrop-blur-sm`}
    >
      <Icon className="w-3 h-3" style={{ color }} />
      <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color }}>
        {label}
      </span>
    </motion.div>
  )
}

// Magnetic integration card
function IntegrationCard({ integration, index }: { integration: typeof integrations[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(springY, [-100, 100], [5, -5])
  const rotateY = useTransform(springX, [-100, 100], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / 10)
    mouseY.set((e.clientY - centerY) / 10)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const isComingSoon = integration.status === "soon"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.05,
        }
      } : {}}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        className={`relative bg-white/[0.02] border overflow-hidden cursor-pointer group rounded-2xl ${
          isComingSoon
            ? 'border-white/5'
            : 'border-white/10 hover:border-white/20'
        }`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={!isComingSoon ? {
          transition: { duration: 0.3 }
        } : {}}
      >
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />

        {/* Gradient glow on hover (only for live integrations) */}
        {!isComingSoon && (
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: `radial-gradient(circle at center, #D33E9E15 0%, transparent 70%)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Card content */}
        <div className={`relative p-8 min-h-[240px] flex flex-col items-center justify-center ${
          isComingSoon ? 'opacity-60' : ''
        }`}>
          {/* Logo with white background */}
          <motion.div
            className="relative w-28 h-28 mb-6"
            animate={isHovered && !isComingSoon ? {
              y: -4,
              scale: 1.05,
            } : {
              y: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* Glow effect behind logo */}
            {!isComingSoon && (
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, #D33E9E20 0%, transparent 70%)',
                }}
                animate={isHovered ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                } : {
                  scale: 1,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                }}
              />
            )}

            {/* White background container for icon */}
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 shadow-lg">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Integration name */}
          <motion.h3
            className={`text-sm font-medium mb-3 text-center ${
              isComingSoon ? 'text-neutral-500' : 'text-white/90'
            }`}
            animate={isHovered && !isComingSoon ? {
              color: '#ffffff',
            } : {}}
            transition={{ duration: 0.2 }}
          >
            {integration.name}
          </motion.h3>

          {/* Status badge */}
          <StatusBadge status={integration.status} />

          {/* Category tag (subtle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered && !isComingSoon ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-3 left-3 text-[10px] text-neutral-600 uppercase tracking-wider"
          >
            {integration.category}
          </motion.div>
        </div>

        {/* Shimmer effect on hover (live integrations only) */}
        {!isComingSoon && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={isHovered ? {
              x: ["-100%", "200%"],
            } : {
              x: "-100%",
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Top-right corner accent */}
        {!isComingSoon && (
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 opacity-0"
            style={{
              background: 'radial-gradient(circle at top right, #D33E9E10 0%, transparent 70%)',
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

// Main integrations section
export function IntegrationsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const liveIntegrations = integrations.filter(i => i.status === "live")
  const upcomingIntegrations = integrations.filter(i => i.status === "soon")

  return (
    <section className="relative py-12 bg-black overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #D33E9E 0%, transparent 70%)',
          }}
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #3530BA 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Subtle tag */}
            <div className="inline-block mb-8">
              <div className="px-4 py-1.5 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-full">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">
                  Integrations
                </span>
              </div>
            </div>

            {/* Main headline */}
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
              Works with the tools<br />
              <motion.span
                className="inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #D33E9E, #8B4FB8, #3530BA)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                you already use
              </motion.span>
            </h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-neutral-500 font-light max-w-xl mx-auto"
            >
              Connect seamlessly with your existing infrastructure. No disruption, just protection.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Live integrations grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {liveIntegrations.map((integration, index) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Coming soon section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-light text-white/70 mb-2">Coming soon</h3>
            <p className="text-sm text-neutral-600">More integrations on the way</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {upcomingIntegrations.map((integration, index) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
                index={index + liveIntegrations.length}
              />
            ))}
          </div>
        </motion.div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-neutral-600 mb-6">
            Don't see your tool?{" "}
            <a href="#" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">
              Request an integration
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

