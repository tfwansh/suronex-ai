"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null)

  return (
    <section ref={ref} className="relative min-h-screen flex bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Left Side - Light */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-1/2 bg-gray-50 relative overflow-hidden group"
      >
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Eyebrow */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                For Teams
              </span>
            </div>

            {/* Hero text */}
            <h3 className="text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[0.95] tracking-tight">
              Expert-guided
              <br />
              <span className="font-bold">demo</span>
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-12 max-w-md leading-relaxed">
              See how Fortune 500 companies automate compliance across AWS, Azure, and GCP.
              Personalized 30-minute walkthrough.
            </p>

            {/* Specs list */}
            <div className="space-y-4 mb-16 text-sm text-gray-600 font-mono">
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-400">01</span>
                <span>Live platform demo</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-400">02</span>
                <span>Multi-cloud assessment</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-400">03</span>
                <span>Framework mapping</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-400">04</span>
                <span>ROI & pricing review</span>
              </div>
            </div>

            {/* Animated Button */}
            <button
              onMouseEnter={() => setHoveredButton('left')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group/btn inline-flex items-center gap-4 px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg transition-all hover:gap-6"
            >
              <span>Book a demo</span>

              <div className="relative w-9 h-9 flex items-center justify-center">
                <motion.span
                  className="absolute inset-0 bg-white rounded-full flex items-center justify-center"
                  initial={{ width: 0, height: 0, padding: 0 }}
                  animate={hoveredButton === 'left' ? {
                    width: '2.25rem',
                    height: '2.25rem',
                    padding: '0.6rem'
                  } : {
                    width: 0,
                    height: 0,
                    padding: 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                    initial={{ rotate: -180 }}
                    animate={hoveredButton === 'left' ? { rotate: 0 } : { rotate: -180 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <path
                      d="M1.05403 31.6175C0.271626 32.3972 0.271626 33.6614 1.05403 34.441C1.83644 35.2207 3.10497 35.2207 3.88737 34.441L1.05403 31.6175ZM35.5599 2.05152C35.5599 0.948871 34.6629 0.0549994 33.5564 0.0549994L15.5251 0.0549994C14.4187 0.0549994 13.5217 0.948871 13.5217 2.05152C13.5217 3.15416 14.4187 4.04804 15.5251 4.04804H31.5529V20.0202C31.5529 21.1228 32.4499 22.0167 33.5564 22.0167C34.6629 22.0167 35.5599 21.1228 35.5599 20.0202L35.5599 2.05152ZM3.88737 34.441L34.9731 3.46327L32.1397 0.639766L1.05403 31.6175L3.88737 34.441Z"
                      fill="#1a1a1a"
                    />
                  </motion.svg>
                </motion.span>
              </div>
            </button>

            {/* Social proof */}
            <div className="mt-8">
              <p className="text-xs text-gray-500 font-medium">
                Trusted by 500+ security teams worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Large number watermark */}
        <motion.div
          className="absolute bottom-16 right-16 text-9xl font-bold text-gray-900/[0.03] select-none pointer-events-none"
          animate={{ opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          01
        </motion.div>
      </motion.div>

      {/* Center divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent -translate-x-1/2 z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Right Side - Dark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
        className="w-1/2 bg-gray-900 relative overflow-hidden group"
      >
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Eyebrow */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                For Individuals
              </span>
            </div>

            {/* Hero text */}
            <h3 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-[0.95] tracking-tight">
              Start free
              <br />
              <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                trial
              </span>
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-md leading-relaxed">
              Deploy in 5 minutes. Monitor 1250+ security checks across unlimited cloud accounts.
              30 days free—no credit card.
            </p>

            {/* Specs list */}
            <div className="space-y-4 mb-16 text-sm text-gray-500 font-mono">
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-600">01</span>
                <span>Agentless setup (API keys)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-600">02</span>
                <span>40+ compliance frameworks</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-600">03</span>
                <span>Real-time monitoring</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 text-gray-600">04</span>
                <span>One-click audit reports</span>
              </div>
            </div>

            {/* Animated Button */}
            <button
              onMouseEnter={() => setHoveredButton('right')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group/btn inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-medium text-lg transition-all hover:gap-6 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span>Start free trial</span>

              <div className="relative w-9 h-9 flex items-center justify-center">
                <motion.span
                  className="absolute inset-0 bg-gray-900 rounded-full flex items-center justify-center"
                  initial={{ width: 0, height: 0, padding: 0 }}
                  animate={hoveredButton === 'right' ? {
                    width: '2.25rem',
                    height: '2.25rem',
                    padding: '0.6rem'
                  } : {
                    width: 0,
                    height: 0,
                    padding: 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                    initial={{ rotate: -180 }}
                    animate={hoveredButton === 'right' ? { rotate: 0 } : { rotate: -180 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <path
                      d="M1.05403 31.6175C0.271626 32.3972 0.271626 33.6614 1.05403 34.441C1.83644 35.2207 3.10497 35.2207 3.88737 34.441L1.05403 31.6175ZM35.5599 2.05152C35.5599 0.948871 34.6629 0.0549994 33.5564 0.0549994L15.5251 0.0549994C14.4187 0.0549994 13.5217 0.948871 13.5217 2.05152C13.5217 3.15416 14.4187 4.04804 15.5251 4.04804H31.5529V20.0202C31.5529 21.1228 32.4499 22.0167 33.5564 22.0167C34.6629 22.0167 35.5599 21.1228 35.5599 20.0202L35.5599 2.05152ZM3.88737 34.441L34.9731 3.46327L32.1397 0.639766L1.05403 31.6175L3.88737 34.441Z"
                      fill="white"
                    />
                  </motion.svg>
                </motion.span>
              </div>
            </button>

            {/* Social proof */}
            <div className="mt-8">
              <p className="text-xs text-gray-500 font-medium">
                No credit card • Cancel anytime • Full access
              </p>
            </div>
          </motion.div>
        </div>

        {/* Large number watermark */}
        <motion.div
          className="absolute bottom-16 right-16 text-9xl font-bold text-white/[0.03] select-none pointer-events-none"
          animate={{ opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          02
        </motion.div>
      </motion.div>
    </section>
  )
}

