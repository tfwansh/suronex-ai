"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { Facebook, Youtube, Linkedin, ArrowRight, Mail } from "lucide-react"

const footerLinks = {
  products: [
    { label: "Cloud Security", href: "/products/cloud-security" },
    { label: "Cloud Compliance", href: "/products/cloud-compliance" },
    { label: "Cloud Native Compliance", href: "/cloud-native-compliance" },
    { label: "Cloud Inventory", href: "/products/cloud-inventory" },
    { label: "SaaS Security", href: "/products/saas-security" },
  ],
  company: [
    { label: "About us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "FAQs", href: "/faq" },
    { label: "Whitepaper", href: "/whitepaper" },
  ],
}

// X Logo Component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-2-1.5-2a1.6 1.6 0 00-1.5 1.1 2 2 0 00-.1 1V19h-3v-9h3v1.3a3.8 3.8 0 013.4-1.87c2.44 0 4.2 1.6 4.2 5.03z" />
    </svg>
  )
}

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/suronex",
    color: "#1877F2",
    hoverBg: "hover:bg-[#1877F2]/10",
    label: "Facebook"
  },
  {
    icon: XIcon,
    href: "https://x.com/suronex",
    color: "#000000",
    hoverBg: "hover:bg-white/10",
    label: "X (Twitter)"
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@suronex",
    color: "#FF0000",
    hoverBg: "hover:bg-[#FF0000]/10",
    label: "YouTube"
  },
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/company/suronexcloudsafe",
    color: "#0A66C2",
    hoverBg: "hover:bg-[#0A66C2]/10",
    label: "LinkedIn"
  },
]

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const gradientY = useTransform(scrollYProgress, [0, 1], [200, -100])
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1])

  return (
    <footer ref={containerRef} className="relative bg-black text-white overflow-hidden">
      {/* Animated gradient background - reduced opacity on mobile via CSS */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <motion.div
          style={{ y: gradientY, opacity: gradientOpacity }}
          className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-[#D33E9E]/30 via-[#8B4FB8]/20 to-transparent rounded-full blur-[60px] md:blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(gradientY, (v) => -v), opacity: gradientOpacity }}
          className="absolute bottom-0 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tl from-[#3530BA]/30 via-[#8B4FB8]/20 to-transparent rounded-full blur-[60px] md:blur-[120px]"
        />
      </div>

      {/* Grid pattern - hidden on mobile via CSS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] hidden md:block" />

      {/* Top border with gradient shimmer - simpler on mobile */}
      <div className="relative h-px overflow-hidden">
        <motion.div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[#D33E9E] to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5"
          >
            {/* Logo */}
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <motion.div
                  className="relative w-12 h-12"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Glow behind shield - CSS-based animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E] to-[#3530BA] rounded-xl blur-lg opacity-40 md:opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow" />

                  {/* Shield image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/shield-bg.png"
                      alt="Suronex Shield"
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <span className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D33E9E] group-hover:to-[#3530BA] transition-all duration-300">
                  suroNEX
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-6 lg:mb-8 text-base max-w-md">
              AI-powered cloud governance that prevents misconfigurations, vulnerabilities and enforces security & compliance continuously
            </p>

            {/* CTA button */}
            <div className="flex flex-wrap items-center gap-3 mb-6 lg:mb-8">
              <Link
                href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#8B4FB8]/40 overflow-hidden hover:shadow-[#8B4FB8]/60 transition-shadow"
              >
                <span className="relative z-10">Book a demo</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />

                {/* Sheen effect - desktop only via CSS */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" style={{ transform: 'skewX(-20deg)' }} />
              </Link>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/50 text-sm font-medium mb-4 uppercase tracking-wider">Connect with us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group relative w-11 h-11 rounded-xl
                        bg-white/5 backdrop-blur-sm
                        border border-white/10
                        flex items-center justify-center
                        transition-all duration-300
                        ${social.hoverBg}
                        hover:border-white/20
                        md:hover:-translate-y-1 md:hover:scale-105
                        active:scale-95
                      `}
                      aria-label={social.label}
                    >
                      {/* Glowing background - desktop only */}
                      <div
                        className="hidden md:block absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: `${social.color}40` }}
                      />

                      <IconComponent className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />

                      {/* Underline glow - desktop only */}
                      <div
                        className="hidden md:block absolute -bottom-1 left-1/2 h-0.5 w-0 group-hover:w-8 transition-all duration-300 -translate-x-1/2"
                        style={{
                          backgroundColor: social.color === "#000000" ? "#ffffff" : social.color,
                          boxShadow: social.color === "#000000" ? '0 0 8px #ffffff' : `0 0 8px ${social.color}`
                        }}
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Nav columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <h3 className="font-bold text-white mb-4 lg:mb-6 text-sm uppercase tracking-[0.2em]">
              Products
            </h3>
            <ul className="space-y-3 lg:space-y-3.5">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    onClick={(e: React.MouseEvent) => link.href === "/#" && e.preventDefault()}
                    className={`group inline-flex items-center gap-2 text-white/60 transition-all duration-300 text-sm ${link.href === "/#" ? "opacity-50 cursor-default" : "hover:text-white"}`}
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="font-bold text-white mb-4 lg:mb-6 text-sm uppercase tracking-[0.2em]">
              Company
            </h3>
            <ul className="space-y-3 lg:space-y-3.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={`group inline-flex items-center gap-2 text-white/60 transition-all duration-300 text-sm ${link.href === "/#" ? "opacity-50 cursor-default" : "hover:text-white"}`}
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h3 className="font-bold text-white mb-4 lg:mb-6 text-sm uppercase tracking-[0.2em]">
              Resources
            </h3>
            <ul className="space-y-3 lg:space-y-3.5 mb-6 lg:mb-8">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className={`group inline-flex items-center gap-2 text-white/60 transition-all duration-300 text-sm ${link.href === "/#" ? "opacity-50 cursor-default" : "hover:text-white"}`}
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-[0.2em]">
                Contact
              </h3>
              <a
                href="mailto:contact@suronex.ai"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#D33E9E]" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  contact@suronex.ai
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-8 lg:mb-12 pb-8 lg:pb-12 border-b border-white/10"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="group relative hover:md:-translate-y-1 hover:md:scale-105 transition-transform">
              <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28">
                <Image
                  src="/aws-partner.png"
                  alt="AWS Partner"
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="group relative hover:md:-translate-y-1 hover:md:scale-105 transition-transform">
              <div className="relative w-40 h-20 md:w-48 md:h-24 lg:w-60 lg:h-28">
                <Image
                  src="/nvidia.png"
                  alt="NVIDIA Inception"
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="group relative hover:md:-translate-y-1 hover:md:scale-105 transition-transform">
              <div className="relative w-40 h-20 md:w-48 md:h-24 lg:w-60 lg:h-28">
                <Image
                  src="/ncoe.svg"
                  alt="NCOE"
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Disclaimer Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.23 }}
            className="mt-8"
          >
            <p className="text-[10px] sm:text-xs text-neutral-400 text-center leading-relaxed">
              All product names, logos, and brands are property of their respective owners.
              All company, product, and service names used in this website are for identification purposes only.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          <div className="text-sm text-white/50">
            © 2026 Suronex. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: "Terms of use", href: "/terms" },
              { label: "Privacy policy", href: "/privacy" },
              { label: "Cookie policy", href: "/cookies" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative text-white/50 hover:text-white transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
