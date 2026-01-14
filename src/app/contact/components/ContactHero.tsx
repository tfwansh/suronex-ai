"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Building2, Facebook, Youtube, Linkedin, ArrowRight } from "lucide-react"

// X Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/suronex", color: "#1877F2", label: "Facebook" },
  { icon: XIcon, href: "https://x.com/suronex", color: "#000000", label: "X" },
  { icon: Youtube, href: "https://youtube.com/@suronex", color: "#FF0000", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/suronexcloudsafe", color: "#0A66C2", label: "LinkedIn" },
]

export default function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >

      {/* Contact Sales Card */}
      <motion.div
        className="group relative"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D33E9E]/10 to-[#3530BA]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 border border-white/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#D33E9E]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
              Contact Sales
            </h3>
          </div>

          <div className="flex items-center justify-between group-hover:pl-2 transition-all duration-300">
            <a
              href="mailto:contact@suronex.ai"
              className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D33E9E] group-hover:to-[#3530BA] transition-all duration-300"
            >
              contact@suronex.ai
            </a>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </motion.div>

      {/* Combined Offices Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="group relative"
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20 border border-white/10 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-[#D33E9E]" />
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                Our Offices
              </h4>
              <p className="text-lg font-semibold text-white">
                Suronex Cloudsafe Private Limited
              </p>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-4 pl-16">
            {/* Registered Office */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D33E9E] mt-2 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  Registered Office
                </p>
                <p className="text-sm text-gray-300">
                  New Delhi, India
                </p>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3530BA] mt-2 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  Corporate Office
                </p>
                <p className="text-sm text-gray-300">
                  Gurugram, Haryana, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="pt-6 border-t border-white/10"
      >
        <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <IconComponent className="relative w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                )
              })}
            </div>
        </div>
      </motion.div>

    </motion.div>
  )
}

