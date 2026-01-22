"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import { Footer } from "@/app/components/footer"

// HERO SECTION
function SuronHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#D33E9E]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#3530BA]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 border border-[#D33E9E]/30 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#D33E9E] animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Coming Soon</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Meet{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Suron
            </span>
            <span className="text-5xl">!</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 mb-8 leading-relaxed">
            Your AI Security Advisor
          </p>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl">
            Transform your cloud security operations from reactive firefighting to proactive, intelligent defense. Suron handles the complexity while you focus on strategy.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Book a Demo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Right - Floating Chatbot Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-3xl blur-3xl opacity-30" />
            
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <Image
                src="/suron.png"
                alt="Suron AI Assistant"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-black/80 border border-[#D33E9E]/30 backdrop-blur-xl"
            >
              <div className="text-sm text-gray-400">AI Analyzing...</div>
              <div className="text-xs text-[#D33E9E] mt-1">99% Secure</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-black/80 border border-[#3530BA]/30 backdrop-blur-xl"
            >
              <div className="text-sm text-gray-400">Insights Ready</div>
              <div className="text-xs text-[#3530BA] mt-1">142 Recommendations</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// WHY SURON SECTION
function WhySuronSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      title: "Proactive Intelligence",
      description: "Unlike traditional chatbots, your AI teammate continuously analyzes your security posture and proactively surfaces insights without being asked.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-[#D33E9E] to-[#8B4FB8]"
    },
    {
      title: "Deep Analytics",
      description: "Processes vast amounts of security data to provide predictive insights, trend analysis, and strategic recommendations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-[#8B4FB8] to-[#3530BA]"
    },
    {
      title: "Contextual Understanding",
      description: "Learns your environment, business priorities, and risk tolerance to provide personalized guidance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-[#3530BA] to-[#5049B8]"
    },
    {
      title: "Action-Oriented",
      description: "Doesn't just answer questions—it guides decisions, automates workflows, and drives measurable security improvements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-[#5049B8] to-[#D33E9E]"
    }
  ]

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Suron is an{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              AI Security Advisor
            </span>
            ,<br />Not Just a Chatbot?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20">
        {/* Animated Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}
        >
          {feature.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-gray-400 leading-relaxed">{feature.description}</p>

        {/* Decorative Line */}
        <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${feature.gradient}`}
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// EXPERIENCE SECTION
function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      title: "Ask anything",
      description: "Natural language queries about your security posture, risks, and compliance status.",
      color: "#D33E9E"
    },
    {
      title: "Get insights",
      description: "AI-powered analysis of your entire cloud infrastructure with actionable recommendations.",
      color: "#8B4FB8"
    },
    {
      title: "Take action",
      description: "One-click remediation and automated workflows to fix issues instantly.",
      color: "#3530BA"
    }
  ]

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Experience the{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Difference
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your cloud security operations from reactive firefighting to proactive, intelligent defense. Suron handles the complexity while you focus on strategy.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-center gap-6">
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl font-bold"
                  style={{
                    borderColor: step.color,
                    color: step.color
                  }}
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <div className="flex-1 p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Book a Demo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// MAIN PAGE
export default function SuronAIPage() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navbar />
      <SuronHero />
      <WhySuronSection />
      <ExperienceSection />
      <Footer />
    </main>
  )
}

