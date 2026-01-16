// app/about-us/page.tsx
"use client"

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Shield, Target, Heart, ArrowRight, Globe, Check, Sparkles, Lock, Zap, Users, Linkedin } from "lucide-react"
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="relative bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-pink-900/20 pointer-events-none" />
      <Navbar />
      <HeroSection />
      <StorySection />
      <RefinedMissionVisionValues />
      <LeadershipSection />
      <AdvisorsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-0 overflow-hidden">
      <div className="absolute inset-0">
        {/* Enhanced gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-[#D33E9E]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-[#3530BA]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-gradient-to-r from-[#D33E9E]/10 via-[#8B4FB8]/10 to-[#3530BA]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-6 md:mb-8"
        >
          Securing the{" "}
          <span className="block mt-2 md:mt-4">
            <span className="relative inline-block">
              Cloud
              <motion.div
                className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] blur-2xl md:blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
        >
          Two decades of expertise. One mission: <br className="hidden md:block" />
          Empowering organizations to innovate fearlessly in the cloud.
        </motion.p>
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
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80",
      highlight: "truly feel secure",
      icon: Shield,
      position: "left"
    },
    {
      text: "As digital transformation accelerated, we noticed a growing gap between innovation and security. Businesses were adopting the cloud to move faster, scale smarter, and innovate more — but in that race, many found security trailing behind.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80",
      highlight: "gap between innovation and security",
      icon: Shield,
      position: "right"
    },
    {
      text: "We are a team of deeply passionate professionals with an average of over two decades of experience in Information Security, Cloud Security, and Cybersecurity.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&q=80",
      highlight: "two decades of experience",
      icon: Globe,
      position: "left"
    },
    {
      text: "With that expertise, we set out to build something different — a platform that doesn't just monitor risks, but truly empowers organizations to manage and mitigate them effortlessly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
      highlight: "truly empowers organizations",
      icon: Target,
      position: "right"
    },
    {
      text: "Our organization is headquartered in New Delhi, India, with a corporate office in Gurgaon, Haryana, and our diverse, talented team is spread across India and the Philippines.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80",
      highlight: "India and the Philippines",
      icon: Globe,
      position: "center"
    }
  ]

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Story
            </span>
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
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
  const isInView = useInView(ref, { once: false, amount: 0.3 })
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
        <div className="relative h-80 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
          <img
            src={block.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
          {/* Enhanced contrast overlay for center block */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
            <div className="text-center max-w-3xl md:max-w-4xl">
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-3xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center mx-auto mb-8 shadow-2xl"
                whileInView={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 0.8 }}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
              </motion.div>

              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-white drop-shadow-2xl tracking-wide">
                {parts[0]}
                <span className="relative inline-block mx-2">
                  <span className="relative z-10 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text text-shadow-lg">
                    {block.highlight}
                  </span>
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
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative"
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${block.position === "right" ? "md:grid-flow-dense" : ""}`}>
        <div className={`relative h-72 md:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden group ${block.position === "right" ? "md:col-start-2" : ""}`}>
          <img
            src={block.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-110"
          />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute top-6 right-6 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center shadow-2xl"
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </motion.div>
        </div>

        <div className={`order-first md:order-none ${block.position === "right" ? "md:col-start-1 md:row-start-1" : ""}`}>
          <motion.p
            initial={{ opacity: 0, x: block.position === "right" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-100 leading-relaxed"
          >
            {parts[0]}
            <span className="relative inline-block mx-2">
              <span className="relative z-10 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text font-bold">
                {block.highlight}
              </span>
            </span>
            {parts[1]}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

// REVERTED: Original Sophisticated Mission/Vision/Values
function ClosingStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.6 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="mt-16 md:mt-24 text-center max-w-3xl md:max-w-4xl mx-auto"
    >
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
        Today, our platform embodies that vision — delivering{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
            complete visibility, control, and confidence
          </span>
        </span>
        {" "}across your cloud environments.
      </p>
      <p className="text-lg md:text-xl text-gray-300 mt-6">
        Because for us, security isn't just about protection — it's about{" "}
        <span className="text-[#D33E9E] font-semibold">empowering progress</span>.
      </p>
    </motion.div>
  )
}
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
      <motion.div
        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${gradient} origin-top`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

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

        <motion.span
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 blur-xl pointer-events-none`}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </h3>

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
function LeadershipSection() {
  const team = [
    {
      name: "Manish K Saini",
      role: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/manish-k-saini-suronex",
      image: "Team/manishksaini.jpg"
    },
    {
      name: "Prashant Mavinkurve",
      role: "CTO",
      linkedin: "https://www.linkedin.com/in/prashant-mavinkurve",
      image: "Team/prashant.jpg"
    },
    {
      name: "Aditi Verma",
      role: "Chief Product Officer",
      linkedin: "https://www.linkedin.com/in/aditi-verma-suronex",
      image: "Team/aditiverma.png"
    },
    {
      name: "Raian Mondelo",
      role: "AI Innovation Lead",
      linkedin: "https://www.linkedin.com/in/raian-mondelo",
      image: "Team/raimondelo.jpg"
    },
    {
      name: "Manan Tyagi",
      role: "Engineering Lead",
      linkedin: "https://www.linkedin.com/in/manan-tyagi-suronex",
      image: "Team/manantyagi.jpg"
    }
  ]

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 sm:mb-8"
          >
            <Users className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 mx-auto block text-[#D33E9E]" />
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Visionaries driving Suronex forward
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {team.map((member, index) => (
            <GalleryPortrait key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Premium Gallery Portrait - Professional & Subtle
function GalleryPortrait({ member, index }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-none"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Subtle frame glow */}
      <motion.div 
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        animate={{ scale: isHovered ? 1.02 : 1 }}
      />
      
      <div className="relative overflow-hidden rounded-3xl h-72 sm:h-80 md:h-96 lg:h-[420px] bg-gradient-to-b from-zinc-900/50 to-black/30 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Centered portrait with professional lighting */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl object-cover ring-4 ring-white/20 hover:ring-white/40 transition-all duration-700 shadow-2xl"
            animate={{ 
              scale: isHovered ? 1.08 : 1,
              brightness: isHovered ? 1.3 : 1,
              contrast: isHovered ? 1.25 : 1.1,
              filter: isHovered ? 'saturate(1.3)' : 'saturate(1)'
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        {/* Enhanced content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent rounded-b-3xl">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-2 sm:mb-3 drop-shadow-lg leading-tight"
            animate={{ y: isHovered ? -4 : 0 }}
          >
            {member.name}
          </motion.h3>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF4DB8] drop-shadow-md tracking-wide"
            animate={{ scale: isHovered ? 1.02 : 1 }}
          >
            {member.role}
          </motion.p>
          
          {/* Professional LinkedIn - Mission-style */}
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 sm:mt-6 pt-3 border-t border-white/20 hover:border-white/50 transition-all duration-300 group/link"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-md hover:shadow-lg transition-all duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover/link:text-[#0077B5] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 hover:text-white ml-2 hidden sm:inline">
              View Profile
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
function AdvisorsSection() {
  const advisors = [
    {
      name: "Ravi Shankar",
      role: "Cybersecurity Veteran",
      linkedin: "https://www.linkedin.com/in/ravi-shankar-advisor",
      image: "Team/advisor1.jpg"
    },
    {
      name: "Priya Mehta",
      role: "Cloud Strategy Expert",
      linkedin: "https://www.linkedin.com/in/priya-mehta-advisor",
      image: "Team/advisor2.jpg"
    }
  ]

  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-black/40 to-black/70">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Strategic{" "}
            <span className="bg-gradient-to-r from-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
              Advisors
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 justify-items-center">
          {advisors.map((advisor, index) => (
            <GalleryPortrait key={advisor.name} member={advisor} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-4xl md:max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Shield className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 text-[#D33E9E]" />
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Get Started?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Suronex provides customized solutions to safeguard your data, ensuring compliance, protection, and peace of mind.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-2xl md:rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

