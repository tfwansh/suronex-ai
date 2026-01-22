"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Check, Clock, Sparkles } from "lucide-react"

// Integration data - Updated with correct paths and individual sizes
const integrations = [
  { name: "Microsoft Teams", logo: "/Integrations/microsoftteams.png", status: "live", category: "Collaboration", logoSize: 80 },
  { name: "Terraform", logo: "/Integrations/terraform.png", status: "soon", category: "IaC", logoSize: 85 },
  { name: "Google Cloud", logo: "/Integrations/Googlecloud.png", status: "live", category: "Cloud", logoSize: 90 },
  { name: "Kubernetes", logo: "/Integrations/Kubernetes.png", status: "live", category: "Orchestration", logoSize: 85 },
  { name: "ServiceNow", logo: "/Integrations/Servicenow.png", status: "live", category: "ITSM", logoSize: 95 },
  { name: "AWS", logo: "/Integrations/AWS.png", status: "live", category: "Cloud", logoSize: 90 },
  { name: "GitHub", logo: "/Integrations/Github.png", status: "live", category: "DevOps", logoSize: 75 },
  { name: "Azure", logo: "/Integrations/Azure.png", status: "live", category: "Cloud", logoSize: 85 },
  { name: "Slack", logo: "/Integrations/slack.png", status: "live", category: "Collaboration", logoSize: 90 },
  { name: "Confluence", logo: "/Integrations/Confluence.png", status: "soon", category: "Documentation", logoSize: 80 },
  { name: "Jira", logo: "/Integrations/Jira.png", status: "live", category: "Project Management", logoSize: 85 },
  { name: "Microsoft 365", logo: "/Integrations/copilot.png", status: "live", category: "Productivity", logoSize: 90 },
  { name: "Okta", logo: "/Integrations/Okta.png", status: "live", category: "Identity", logoSize: 75 },
  { name: "HubSpot", logo: "/Integrations/hubspot.png", status: "soon", category: "CRM", logoSize: 80 },
  { name: "Salesforce", logo: "/Integrations/salesforce.png", status: "soon", category: "CRM", logoSize: 85 },
  { name: "Oracle Cloud", logo: "/Integrations/oracle.png", status: "live", category: "Cloud", logoSize: 90 },
  { name: "Alibaba Cloud", logo: "/Integrations/alibaba.png", status: "soon", category: "Cloud", logoSize: 90 },
  { name: "Splunk", logo: "/Integrations/splunk.png", status: "soon", category: "Analytics", logoSize: 85 },
]

// Status badge component
function StatusBadge({ status }: { status: string }) {
  const config = {
    live: {
      icon: Check,
      label: "",
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
      color: "#9ca3af",
      bg: "bg-neutral-500/10",
      border: "border-neutral-500/20"
    }
  }

  const { icon: Icon, label, color, bg, border } = config[status as keyof typeof config]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15 }}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${bg} border ${border} backdrop-blur-sm`}
    >
      <Icon className="w-3 h-3" style={{ color }} />
      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-medium" style={{ color }}>
        {label}
      </span>
    </motion.div>
  )
}

// Magnetic integration card with mobile optimization
function IntegrationCard({ integration, index, isMobile }: { integration: typeof integrations[0]; index: number; isMobile: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for magnetic effect (desktop only)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(springY, [-100, 100], [4, -4])
  const rotateY = useTransform(springX, [-100, 100], [-4, 4])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / 10)
    mouseY.set((e.clientY - centerY) / 10)
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsActive(false)
      mouseX.set(0)
      mouseY.set(0)
    }
  }

  const handleClick = () => {
    if (isMobile && !isComingSoon) {
      setIsActive(!isActive)
      setTimeout(() => setIsActive(false), 2000)
    }
  }

  const isComingSoon = integration.status === "soon"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.04,
        }
      } : {}}
      style={isMobile ? {} : { perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        className={`relative bg-white/[0.02] border overflow-hidden cursor-pointer group rounded-xl sm:rounded-2xl will-change-transform ${isComingSoon
            ? 'border-white/5'
            : 'border-white/10 hover:border-white/20'
          }`}
        style={isMobile ? {} : {
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsActive(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        whileTap={isMobile ? { scale: 0.98 } : {}}
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
              background: `radial-gradient(circle at center, #D33E9E18 0%, transparent 70%)`,
            }}
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Card content */}
        <div className={`relative p-4 sm:p-6 min-h-[180px] sm:min-h-[200px] flex flex-col items-center justify-center ${isComingSoon ? 'opacity-60' : ''
          }`}>
          {/* Logo with white background */}
          <motion.div
            className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4"
            animate={isActive && !isComingSoon ? {
              y: -3,
              scale: 1.05,
            } : {
              y: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            {/* Glow effect behind logo */}
            {!isComingSoon && (
              <motion.div
                className="absolute inset-0 rounded-full blur-xl sm:blur-2xl"
                style={{
                  background: 'radial-gradient(circle, #D33E9E20 0%, transparent 70%)',
                }}
                animate={isActive ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                } : {
                  scale: 1,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: isActive ? 2 : 0,
                }}
              />
            )}

            {/* White background container for icon */}
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
              <Image
                src={integration.logo}
                alt={integration.name}
                width={integration.logoSize}
                height={integration.logoSize}
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>

          {/* Integration name - Brighter and bigger */}
          <motion.h3
            className={`text-xs sm:text-sm font-semibold mb-2 text-center leading-tight ${isComingSoon ? 'text-neutral-500' : 'text-white/90'
              }`}
            animate={isActive && !isComingSoon ? {
              color: '#ffffff',
              scale: 1.02,
            } : {
              scale: 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {integration.name}
          </motion.h3>

          {/* Status badge - only show for non-live integrations */}
          {integration.status !== "live" && <StatusBadge status={integration.status} />}

          {/* Category tag (subtle) - enhanced visibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive && !isComingSoon ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-2 left-2 text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-wider font-medium"
          >
            {integration.category}
          </motion.div>
        </div>

        {/* Shimmer effect on hover (live integrations only) */}
        {!isComingSoon && isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={{
              x: "200%",
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Top-right corner accent */}
        {!isComingSoon && (
          <motion.div
            className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-0"
            style={{
              background: 'radial-gradient(circle at top right, #D33E9E12 0%, transparent 70%)',
            }}
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
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

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const liveIntegrations = integrations.filter(i => i.status === "live")
  const upcomingIntegrations = integrations.filter(i => i.status === "soon")

  return (
    <section className="relative py-10 sm:py-12 md:py-14 bg-black overflow-hidden">
      {/* Subtle gradient background - reduced size */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #D33E9E 0%, transparent 70%)',
          }}
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #3530BA 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header - Compact and brighter */}
        <motion.div
          ref={ref}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Subtle tag */}
            <div className="inline-block mb-5 sm:mb-6">
              <div className="px-3 sm:px-4 py-1 sm:py-1.5 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-full">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/60 font-medium">
                  Integrations
                </span>
              </div>
            </div>

            {/* Main headline - Brighter and bigger */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4 sm:mb-5 leading-tight px-2">
              Works with the tools<br />
              <motion.span
                className="inline-block font-normal"
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

            {/* Subtitle - Brighter */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-white/60 font-light max-w-xl mx-auto px-4"
            >
              Connect seamlessly with your existing infrastructure. No disruption, just protection.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Live integrations grid - Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 sm:mb-12"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 max-w-7xl mx-auto">
            {liveIntegrations.map((integration, index) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
                index={index}
                isMobile={isMobile}
              />
            ))}
          </div>
        </motion.div>

        {/* Coming soon section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "none" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-5 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-light text-white/70 mb-2">Coming soon</h3>
            <p className="text-xs sm:text-sm text-neutral-600">More integrations on the way</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {upcomingIntegrations.map((integration, index) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
                index={index + liveIntegrations.length}
                isMobile={isMobile}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA and Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 sm:mt-12 px-4"
        >
          <p className="text-xs sm:text-sm text-white/50 mb-2">
            Don't see your tool?{" "}
            <a href="/contact" className="text-white/80 hover:text-white underline underline-offset-4 transition-colors font-medium">
              Request an integration
            </a>
          </p>

        </motion.div>

        {/* Mobile tap hint */}
        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-center text-[10px] text-white/30 mt-6"
          >
            Tap cards to see animations
          </motion.p>
        )}
      </div>
    </section>
  )
}

