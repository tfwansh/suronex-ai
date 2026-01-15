// app/about-us/page.tsx
"use client"

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Shield, Target, Heart, ArrowRight, Globe, Check, Sparkles, Lock, Zap } from "lucide-react"
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";
import Image from "next/image"
export default function AboutPage() {
  return (
    <main className="relative bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10 pointer-events-none" />
      <Navbar />
      <HeroSection />
      <StorySection />
      <RefinedMissionVisionValues />
      <ContainedTeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8"
        >
          Securing the{" "}
          <span className="block mt-4">
            <span className="relative inline-block">
              Cloud
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </span>{" "}
          <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
            Revolution
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
        >
          Two decades of expertise. One mission: <br />
          Empowering organizations to innovate fearlessly in the cloud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gradient-to-b from-[#D33E9E] to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const storyBlocks = [
    {
      text: "Our journey began with a simple yet powerful question — how can organizations truly feel secure in the cloud?",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
      highlight: "truly feel secure",
      icon: Shield,
      position: "left"
    },
    {
      text: "As digital transformation accelerated, we noticed a growing gap between innovation and security. Businesses were adopting the cloud to move faster, scale smarter, and innovate more — but in that race, many found security trailing behind.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      highlight: "gap between innovation and security",
      icon: Shield,
      position: "right"
    },
    {
      text: "We are a team of deeply passionate professionals with an average of over two decades of experience in Information Security, Cloud Security, and Cybersecurity.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
      highlight: "two decades of experience",
      icon: Globe,
      position: "left"
    },
    {
      text: "With that expertise, we set out to build something different — a platform that doesn't just monitor risks, but truly empowers organizations to manage and mitigate them effortlessly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      highlight: "truly empowers organizations",
      icon: Target,
      position: "right"
    },
    {
      text: "Our organization is headquartered in New Delhi, India, with a corporate office in Gurgaon, Haryana, and our diverse, talented team is spread across India and the Philippines.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
      highlight: "India and the Philippines",
      icon: Globe,
      position: "center"
    }
  ]

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Story
            </span>
          </h2>
        </motion.div>

        <div className="space-y-48">
          {storyBlocks.map((block, index) => (
            <StoryBlock key={index} block={block} index={index} />
          ))}
        </div>

        <ClosingStatement />
      </div>
    </section>
  )
}

function StoryBlock({ block, index }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.4 })
  const Icon = block.icon
  const parts = block.text.split(block.highlight)

  if (block.position === "center") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="relative"
      >
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <img
            src={block.image}
            alt=""
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center max-w-4xl">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center mx-auto mb-6"
                whileInView={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 0.8 }}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                {parts[0]}
                <span className="relative inline-block mx-2">
                  <span className="relative z-10 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text font-bold">
                    {block.highlight}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 -skew-x-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </span>
                {parts[1]}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`grid md:grid-cols-2 gap-12 items-center ${block.position === "right" ? "md:grid-flow-dense" : ""}`}>
        <div className={`relative h-[400px] rounded-3xl overflow-hidden group ${block.position === "right" ? "md:col-start-2" : ""}`}>
          <img
            src={block.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center shadow-2xl"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        <div className={block.position === "right" ? "md:col-start-1 md:row-start-1" : ""}>
          <motion.p
            initial={{ opacity: 0, x: block.position === "right" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 leading-relaxed"
          >
            {parts[0]}
            <span className="relative inline-block mx-2">
              <span className="relative z-10 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text font-bold">
                {block.highlight}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 -skew-x-12"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
            {parts[1]}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

function ClosingStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.8 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className="mt-32 text-center max-w-4xl mx-auto"
    >
      <p className="text-3xl md:text-4xl font-bold leading-relaxed">
        Today, our platform embodies that vision — delivering{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
            complete visibility, control, and confidence
          </span>
          <motion.span
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D33E9E] to-[#3530BA]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </span>
        {" "}across your cloud environments.
      </p>
      <p className="text-xl text-gray-400 mt-8">
        Because for us, security isn't just about protection — it's about{" "}
        <span className="text-[#D33E9E] font-semibold">empowering progress</span>.
      </p>
    </motion.div>
  )
}

// SOPHISTICATED Mission/Vision/Values - Stacked with Liquid Flow
function RefinedMissionVisionValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/5 to-[#3530BA]/10" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#D33E9E]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#3530BA]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            What Drives{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Us
            </span>
          </h2>
        </motion.div>

        {/* Mission */}
        <SophisticatedPrinciple
          label="Mission"
          title="Empowering secure innovation"
          content="Our Mission is to empower organizations to securely innovate and operate in the cloud by providing comprehensive solutions for compliance, security and governance. We enable proactive risk management, ensure regulatory adherence, and safeguard critical data through automated controls, continuous monitoring, and actionable insights, fostering trust, resilience, and sustainable growth."
          highlights={["empower organizations", "securely innovate and operate", "proactive risk management", "automated controls", "continuous monitoring"]}
          index={0}
          gradient="from-[#D33E9E] to-[#3530BA]"
        />

        {/* Vision */}
        <SophisticatedPrinciple
          label="Vision"
          title="Leading cloud security excellence"
          content="Our vision is to be the leading catalyst in securing cloud environments and driving regulatory excellence, empowering organizations worldwide to confidently embrace digital transformation. We envision a future where security, compliance, and governance are seamlessly integrated into every cloud operation—enabling innovation without compromise."
          highlights={["leading catalyst", "securing cloud environments", "regulatory excellence", "seamlessly integrated", "innovation without compromise"]}
          index={1}
          gradient="from-[#8B4FB8] to-[#3530BA]"
        />

        {/* Values */}
        <SophisticatedPrinciple
          label="Values"
          title="Integrity, Authenticity, Honesty"
          content="At Suronex, we are committed to Integrity, Authenticity, and Honesty in delivering secure and compliant solutions. By emphasizing clear communication and a strong sense of responsibility, we safeguard digital assets and build lasting trust with every client interaction."
          highlights={["Integrity, Authenticity, and Honesty", "clear communication", "safeguard digital assets", "lasting trust"]}
          index={2}
          gradient="from-[#5049B8] to-[#3530BA]"
        />
      </div>
    </section>
  )
}

function SophisticatedPrinciple({ label, title, content, highlights, index, gradient }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [isHovered, setIsHovered] = useState(false)
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null)

  // Render content with highlights
  const renderContent = () => {
    let remainingContent = content
    const segments: any[] = []
    
    highlights.forEach((highlight: string) => {
      const index = remainingContent.toLowerCase().indexOf(highlight.toLowerCase())
      if (index !== -1) {
        if (index > 0) {
          segments.push({
            type: 'text',
            content: remainingContent.substring(0, index)
          })
        }
        segments.push({
          type: 'highlight',
          content: remainingContent.substring(index, index + highlight.length),
          key: highlight
        })
        remainingContent = remainingContent.substring(index + highlight.length)
      }
    })
    if (remainingContent) {
      segments.push({
        type: 'text',
        content: remainingContent
      })
    }
    
    return segments
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-24 last:mb-0 border-l-2 border-white/10 pl-12 relative cursor-default max-w-5xl"
    >
      {/* Liquid flow animated border accent on hover */}
      <motion.div
        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${gradient} origin-top`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Label - Premium Typography */}
      <div className="mb-6 overflow-hidden">
        <motion.span
          className="text-base font-light text-gray-500 uppercase tracking-[0.3em] inline-block"
          animate={{
            letterSpacing: isHovered ? "0.35em" : "0.3em",
            color: isHovered ? "rgb(156, 163, 175)" : "rgb(107, 114, 128)"
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {label}
        </motion.span>
      </div>

      {/* Title - Large and Sophisticated */}
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white relative overflow-hidden tracking-tight leading-tight">
        <motion.span
          className="inline-block"
          animate={{
            letterSpacing: isHovered ? "0.01em" : "0em",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.span>

        {/* Subtle glow effect on hover */}
        <motion.span
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 blur-xl pointer-events-none`}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </h3>

      {/* Content - Premium Typography with proper wrapping */}
      <motion.div
        className="text-lg md:text-xl leading-relaxed text-gray-400 font-light max-w-4xl"
        animate={{
          color: isHovered ? "rgb(229, 231, 235)" : "rgb(156, 163, 175)"
        }}
        transition={{ duration: 0.3 }}
        style={{
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1.08) contrast(1.03)',
          wordBreak: "normal",
          overflowWrap: "break-word",
          hyphens: "auto"
        }}
      >
        <p>
          {renderContent().map((segment: any, i: number) => {
            if (segment.type === 'highlight') {
              return (
                <motion.span
                  key={i}
                  onMouseEnter={() => setActiveHighlight(segment.key)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className="relative inline-block cursor-default mx-0.5"
                >
                  <motion.span
                    className="relative z-10 font-normal"
                    animate={{
                      color: activeHighlight === segment.key ? "#ffffff" : "inherit",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {segment.content}
                  </motion.span>
                  
                  {/* Subtle underline on hover */}
                  <motion.span
                    className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeHighlight === segment.key ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.span>
              )
            }
            return <span key={i}>{segment.content}</span>
          })}
        </p>
      </motion.div>

      {/* Accent line with gradient reveal */}
      <div className="mt-8 h-px bg-white/5 relative overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-50`}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isInView ? 1 : 0,
            opacity: isHovered ? 1 : 0.3
          }}
          transition={{
            scaleX: { delay: index * 0.15 + 0.3, duration: 0.8 },
            opacity: { duration: 0.3 }
          }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  )
}

// Final CTA
function FinalCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center p-16 rounded-3xl bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/5 to-[#3530BA]/10 border border-white/10"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to secure your cloud with confidence?
      </h3>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Join teams who've reduced compliance time by 78% while shipping faster
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-lg inline-flex items-center gap-2"
        >
          Book a Demo
          <ArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="/products/cloud-compliance"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-lg hover:bg-white/5 transition-colors"
        >
          Explore Platform
        </motion.a>
      </div>
    </motion.div>
  )
}

// FIXED Team Section - Proper Constraints
function ContainedTeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const team = [
    {
      name: "Manish K Saini",
      role: "Role",
      location: "New Delhi, India",
      bio: "detailed Bio",
      image: "Team/manishksaini.jpg"
    },
    {
      name: "Prashant Mavinkurve",
      role: "Role",
      location: "Gurugram, India",
      bio: "detailed Bio",
      image: "Team/prashant.jpg"
    },
    {
      name: "Aditi Verma",
      role: "Chief Product Officer",
      location: "Gurugram, India",
      bio: "detailed Bio",
      image: "Team/aditiverma.png"
    },
    {
      name: "Raian Mondelo",
      role: "AI Innovation Lead",
      location: "New Delhi, India",
      bio: "detailed Bio",
      image: "Team/raimondelo.jpg"
    },
    {
      name: "Manan Tyagi",
      role: "Engineering Lead",
      location: "Gurugram, India",
      bio: "detailed Bio",
      image: "Team/manantyagi.jpg"
    }
  ]

  // Calculate total width of all cards
  const cardWidth = 450
  const gap = 32
  const totalWidth = (team.length * cardWidth) + ((team.length - 1) * gap)

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Meet the{" "}
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
            Visionaries
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-400 mt-4"
        >
          Drag to explore our team
        </motion.p>
      </div>

      <div className="relative h-[600px]">
        <motion.div
          drag="x"
          dragConstraints={{
            left: Math.min(0, -(totalWidth - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 200)),
            right: 0
          }}
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          className="flex gap-8 absolute left-0 pl-6 cursor-grab active:cursor-grabbing"
        >
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </motion.div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </section>
  )
}

function TeamCard({ member, index }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-[450px] select-none"
    >
      <motion.div
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-3xl h-[550px] bg-zinc-900"
      >
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover brightness-[1.08] contrast-[1.03] transition-transform duration-700"
          style={{
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1.08) contrast(1.03)',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <motion.div
            animate={{ y: isHovered ? -20 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-extrabold mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">{member.name}</h3>
            <p className="text-[#FF4DB8] font-bold text-lg mb-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">{member.role}</p>
            <p className="text-base text-white font-semibold mb-4 flex drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] items-center gap-2">
              <Globe className="w-4 h-4" />
              {member.location}
            </p>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                {member.bio}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div 
          className="absolute inset-0 rounded-3xl transition-all duration-300 pointer-events-none"
          style={{
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1.08) contrast(1.03)',
            boxShadow: isHovered 
              ? '0 0 0 2px rgba(211, 62, 158, 0.8), 0 0 35px rgba(211, 62, 158, 0.6), 0 0 70px rgba(139, 79, 184, 0.4)' 
              : '0 0 0 0px transparent'
          }}
        />
      </motion.div>
    </motion.div>
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <Shield className="w-20 h-20 mx-auto mb-8 text-[#D33E9E]" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Get Started?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Suronex provides customised solutions to safeguard your data, ensuring compliance, protection, and peace of mind. Take control of your security today!
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-full text-base font-semibold hover:shadow-[0_0_40px_rgba(211,62,158,0.5)] transition-all duration-300"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}

