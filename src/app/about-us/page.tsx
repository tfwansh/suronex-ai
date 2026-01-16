// app/about-us/page.tsx
"use client"

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Shield, Target, Heart, ArrowRight, Globe, Check, Sparkles, Lock, Zap, Linkedin } from "lucide-react"
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="relative bg-black text-white font-light">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10 pointer-events-none" />
      <Navbar />
      <HeroSection />
      <StorySection />
      <RefinedMissionVisionValues />
      <ContainedTeamSection />
      <AdvisorsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] mb-6 sm:mb-8"
        >
          Securing the{" "}
          <span className="block mt-2 sm:mt-4">
            <span className="relative inline-block">
              Cloud
              <motion.div
                className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] blur-2xl sm:blur-3xl opacity-40"
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4 font-light"
        >
          Two decades of expertise. One mission: <br className="hidden sm:block" />
          Empowering organizations to innovate fearlessly in the cloud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
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
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Story
            </span>
          </h2>
        </motion.div>

        <div className="space-y-20 sm:space-y-28 md:space-y-36 lg:space-y-48">
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
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden">
          <img
            src={block.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="text-center max-w-4xl">
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center mx-auto mb-4 sm:mb-6"
                whileInView={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 0.8 }}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </motion.div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                {parts[0]}
                <span className="relative inline-block mx-1 sm:mx-2">
                  <span 
                    className="relative z-10 font-normal text-white"
                    style={{
                      textShadow: "0 2px 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6), 0 0 60px rgba(211,62,158,0.4)"
                    }}
                  >
                    {block.highlight}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-white/20 -skew-x-12 blur-sm"
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
      <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${block.position === "right" ? "md:grid-flow-dense" : ""}`}>
        <div className={`relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group ${block.position === "right" ? "md:col-start-2" : ""}`}>
          <img
            src={block.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center shadow-2xl"
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </motion.div>
        </div>

        <div className={block.position === "right" ? "md:col-start-1 md:row-start-1" : ""}>
          <motion.p
            initial={{ opacity: 0, x: block.position === "right" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light"
          >
            {parts[0]}
            <span className="relative inline-block mx-1 sm:mx-2">
              <span className="relative z-10 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text font-normal">
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
      className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 text-center max-w-4xl mx-auto"
    >
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
        Today, our platform embodies that vision — delivering{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text font-normal">
            complete visibility, control, and confidence
          </span>
          <motion.span
            className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#D33E9E] to-[#3530BA]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </span>
        {" "}across your cloud environments.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-6 sm:mt-8 font-light">
        Because for us, security isn't just about protection — it's about{" "}
        <span className="text-[#D33E9E] font-normal">empowering progress</span>.
      </p>
    </motion.div>
  )
}

function RefinedMissionVisionValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/5 to-[#3530BA]/10" />

      <motion.div
        className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#D33E9E]/10 rounded-full blur-3xl"
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
        className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#3530BA]/10 rounded-full blur-3xl"
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
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight mb-6">
            What Drives{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Us
            </span>
          </h2>
        </motion.div>

        <SophisticatedPrinciple
          label="Mission"
          title="Empowering secure innovation"
          content="Our Mission is to empower organizations to securely innovate and operate in the cloud by providing comprehensive solutions for compliance, security and governance. We enable proactive risk management, ensure regulatory adherence, and safeguard critical data through automated controls, continuous monitoring, and actionable insights, fostering trust, resilience, and sustainable growth."
          highlights={["empower organizations", "securely innovate and operate", "proactive risk management", "automated controls", "continuous monitoring"]}
          index={0}
          gradient="from-[#D33E9E] to-[#3530BA]"
        />

        <SophisticatedPrinciple
          label="Vision"
          title="Leading cloud security excellence"
          content="Our vision is to be the leading catalyst in securing cloud environments and driving regulatory excellence, empowering organizations worldwide to confidently embrace digital transformation. We envision a future where security, compliance, and governance are seamlessly integrated into every cloud operation—enabling innovation without compromise."
          highlights={["leading catalyst", "securing cloud environments", "regulatory excellence", "seamlessly integrated", "innovation without compromise"]}
          index={1}
          gradient="from-[#8B4FB8] to-[#3530BA]"
        />

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
      className="mb-16 sm:mb-20 md:mb-24 last:mb-0 border-l-2 border-white/10 pl-6 sm:pl-8 md:pl-12 relative cursor-default max-w-5xl mx-auto"
    >
      <motion.div
        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${gradient} origin-top`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className="mb-4 sm:mb-6 overflow-hidden">
        <motion.span
          className="text-xs sm:text-sm md:text-base font-light text-gray-500 uppercase tracking-[0.25em] sm:tracking-[0.3em] inline-block"
          animate={{
            letterSpacing: isHovered ? "0.35em" : "0.3em",
            color: isHovered ? "rgb(156, 163, 175)" : "rgb(107, 114, 128)"
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {label}
        </motion.span>
      </div>

      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 text-white relative overflow-hidden tracking-tight leading-tight">
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
        className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 font-light max-w-4xl"
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

      <div className="mt-6 sm:mt-8 h-px bg-white/5 relative overflow-hidden">
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

function ContainedTeamSection() {
  const team = [
    {
      name: "Manish K Saini",
      role: "Role",
      bio: "detailed Bio",
      image: "Team/manishksaini.jpg",
      linkedin: "https://linkedin.com/in/manishksaini"
    },
    {
      name: "Prashant Mavinkurve",
      role: "Role",
      bio: "detailed Bio",
      image: "Team/prashant.jpg",
      linkedin: "https://linkedin.com/in/prashant"
    },
    {
      name: "Aditi Verma",
      role: "Chief Product Officer",
      bio: "detailed Bio",
      image: "Team/aditiverma.png",
      linkedin: "https://linkedin.com/in/aditiverma"
    },
    {
      name: "Raian Mondelo",
      role: "AI Innovation Lead",
      bio: "detailed Bio",
      image: "Team/raimondelo.jpg",
      linkedin: "https://linkedin.com/in/raimondelo"
    },
    {
      name: "Manan Tyagi",
      role: "Engineering Lead",
      bio: "detailed Bio",
      image: "Team/manantyagi.jpg",
      linkedin: "https://linkedin.com/in/manantyagi"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 sm:mb-16 text-center"
        >
          Meet the{" "}
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
            Visionaries
          </span>
        </motion.h2>

        {/* Desktop/Tablet Grid Layout - 3 top, 2 bottom */}
        <div className="hidden sm:block">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {team.slice(0, 3).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
          
          {/* Bottom Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {team.slice(3, 5).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="sm:hidden space-y-6">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, index }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative select-none"
    >
      <motion.div
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[420px] sm:h-[450px] md:h-[480px] bg-zinc-900"
      >
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.08] contrast-[1.03] transition-transform duration-700"
          style={{
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1.08) contrast(1.03)',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            objectPosition: 'center 20%'
          }}
          loading="lazy"
        />

        {/* LinkedIn Icon */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0077B5] transition-colors duration-300 group"
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 z-10">
          <motion.div
            animate={{ y: isHovered ? -15 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-1.5 sm:mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">{member.name}</h3>
            <p className="text-[#FF4DB8] font-normal text-base sm:text-lg mb-3 sm:mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">{member.role}</p>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-3 sm:pt-4 font-light">
                {member.bio}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-300 pointer-events-none"
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

function AdvisorsSection() {
  const advisors = [
    {
      name: "Advisor Name 1",
      role: "Advisory Role",
      bio: "Experienced advisor with expertise in cloud security and digital transformation.",
      image: "Team/advisor1.jpg",
      linkedin: "https://linkedin.com/in/advisor1"
    },
    {
      name: "Advisor Name 2",
      role: "Advisory Role",
      bio: "Strategic advisor specializing in cybersecurity and regulatory compliance.",
      image: "Team/advisor2.jpg",
      linkedin: "https://linkedin.com/in/advisor2"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-12 sm:mb-16 text-center"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
            Advisors
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <AdvisorCard key={advisor.name} advisor={advisor} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvisorCard({ advisor, index }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative select-none"
    >
      <motion.div
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[400px] sm:h-[450px] bg-zinc-900"
      >
        <img
          src={advisor.image}
          alt={advisor.name}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.08] contrast-[1.03] transition-transform duration-700"
          style={{
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1.08) contrast(1.03)',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            objectPosition: 'center 20%'
          }}
          loading="lazy"
        />

        <a
          href={advisor.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0077B5] transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 z-10">
          <motion.div
            animate={{ y: isHovered ? -12 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-1.5 sm:mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">{advisor.name}</h3>
            <p className="text-[#FF4DB8] font-normal text-base sm:text-lg mb-3 sm:mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">{advisor.role}</p>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-3 sm:pt-4 font-light">
                {advisor.bio}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-300 pointer-events-none"
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
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <Shield className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-6 sm:mb-8 text-[#D33E9E]" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-4 sm:mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Get Started?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 font-light">
            Suronex provides customised solutions to safeguard your data, ensuring compliance, protection, and peace of mind. Take control of your security today!
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-full text-sm sm:text-base font-normal hover:shadow-[0_0_40px_rgba(211,62,158,0.5)] transition-all duration-300"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 rounded-full blur-3xl pointer-events-none"
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
