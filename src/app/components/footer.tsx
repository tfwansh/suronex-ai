"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { Facebook, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  products: [
  { label: "Cloud Security", href: "/products/cloud-security" },
  { label: "Cloud Compliance", href: "/products/cloud-compliance" },
  { label: "Cloud Native Compliance", href: "/products/cloud-native-compliance" },
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
    icon: Linkedin,
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

  const textY = useTransform(scrollYProgress, [0, 1], [100, -50])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 1])

  return (
    <footer ref={containerRef} className="bg-black border-t border-white/5 text-gray-300 relative overflow-hidden">

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D33E9E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3530BA]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative h-32 border-b border-white/5">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h2
            className="text-[20vw] font-black leading-none select-none"
            style={{
              WebkitTextStroke: '2px rgba(211, 62, 158, 0.15)',
              color: 'transparent',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            SURONEX
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 mb-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <motion.div
                  className="relative w-12 h-12"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E] to-[#3530BA] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative w-full h-full">
                    <Image
                      src="/shield-bg.png"
                      alt="Suronex Shield"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D33E9E] group-hover:to-[#3530BA] transition-all duration-300">
                  Suronex<span className="text-[#8B4FB8]">.ai</span>
                </span>
              </div>
            </Link>

            <p className="text-gray-500 leading-relaxed mb-6 text-sm font-light">
              AI-powered cloud compliance platform. Automate security posture management across AWS, Azure, and GCP.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      group relative w-11 h-11 rounded-xl
                      bg-white/5 backdrop-blur-sm
                      border border-white/10
                      flex items-center justify-center
                      transition-all duration-300
                      ${social.hoverBg}
                      hover:border-white/20
                    `}
                    aria-label={social.label}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: `${social.color}40` }}
                    />

                    <IconComponent
                      className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                    />

                    <motion.div
                      className="absolute -bottom-1 left-1/2 h-0.5 w-0 group-hover:w-8 transition-all duration-300"
                      style={{
                        backgroundColor: social.color === "#000000" ? "#ffffff" : social.color,
                        transform: 'translateX(-50%)',
                        boxShadow: social.color === "#000000" ? '0 0 8px #ffffff' : `0 0 8px ${social.color}`
                      }}
                    />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">
              Products
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-300 text-sm font-light"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">
              Company
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-300 text-sm font-light"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">
              Resources
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-300 text-sm font-light"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust Badges - Clean minimal style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 mb-12"
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-1.5 bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 border border-white/20 rounded-full">
                <span className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text font-bold">
                  Certified Partners
                </span>
              </div>
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-500 text-sm font-light">Recognized partnerships driving cloud security excellence</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {/* AWS */}
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative"
            >
              <div className="relative w-40 h-28 md:w-48 md:h-32">
                <Image
                  src="/aws-partner.png"
                  alt="AWS Partner"
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>

            {/* NVIDIA */}
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative"
            >
              <div className="relative w-52 h-28 md:w-60 md:h-32">
                <Image
                  src="/nvidia.png"
                  alt="NVIDIA Inception"
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>

            {/* NCOE */}
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative"
            >
              <div className="relative w-52 h-28 md:w-60 md:h-32">
                <Image
                  src="/ncoe.svg"
                  alt="NCOE"
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-600 font-light">©2026 Suronex. All rights reserved.</span>
            </div>

            <div className="flex gap-8 text-sm">
              {[
                { label: "Terms of use", href: "/terms" },
                { label: "Privacy policy", href: "/privacy" },
                { label: "Cookie policy", href: "/cookies" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative text-gray-600 hover:text-white transition-colors duration-300 font-light"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#D33E9E] to-[#3530BA] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
