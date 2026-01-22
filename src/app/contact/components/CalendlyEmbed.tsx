// src/app/contact/components/CalendlyEmbed.tsx
"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-3xl blur-2xl" />
      
      <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden">
        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/your-calendly-username?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=d33e9e"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>

      {/* Fallback if Calendly doesn't load */}
      <noscript>
        <div className="p-8 text-center">
          <p className="text-gray-400 mb-4">
            Please enable JavaScript to book a meeting with us.
          </p>
          <a
            href="https://calendly.com/your-calendly-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white font-semibold hover:shadow-lg transition-all"
          >
            Open Calendly in New Tab
          </a>
        </div>
      </noscript>
    </motion.div>
  )
}

