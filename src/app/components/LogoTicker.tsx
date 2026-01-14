"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

// Consolidated frameworks list (35 total)
const complianceFrameworks = [
  { name: "ISO 27001:2022", logo: "/png format/ISO-2022-logo.png", filter: "brightness" },
  { name: "SOC 2 Type II", logo: "/png format/soc2 logo.png", filter: "none" },
  { name: "GDPR", logo: "/png format/gdpr logo.png", filter: "brightness" },
  { name: "HIPAA", logo: "/png format/HIPAA-logo.png", filter: "none" },
  { name: "NIST CSF", logo: "/png format/NIST logo.png", filter: "invert" }, // Fixed dark logo
  { name: "FedRAMP", logo: "/png format/fedramp logo.png", filter: "none" },
  { name: "CIS Benchmarks", logo: "/png format/CIS-logo.png", filter: "none" },
  { name: "Mitre ATT&CK", logo: "/png format/mitre attck logo.png", filter: "brightness" },
  { name: "CCPA", logo: "/png format/CCPA-logo.png", filter: "none" },
  { name: "PCI-DSS", logo: "/png format/PCI-logo.png", filter: "brightness" },
  { name: "RBI Cyber Security", logo: "/png format/RBI cyber security framework.png", filter: "invert" }, // Fixed dark logo
  { name: "APRA CPS 234", logo: "/png format/APRA-logo.png", filter: "brightness" },
  { name: "SEBI CSCRF", logo: "/png format/SEBI - CSCRF logo 1.png", filter: "brightness" },
  { name: "DORA", logo: "/png format/DORA-logo.png", filter: "none" },
  { name: "ENISA NIS 2", logo: "/png format/ENISA_NIS-2_logo.png", filter: "brightness" },
  { name: "C5", logo: "/png format/C5-logo.png", filter: "none" },
  { name: "ENS", logo: "/png format/ens-logo.png", filter: "brightness" },
  { name: "COPPA", logo: "/png format/COPPA logo.jpg", filter: "brightness" },
  { name: "ISO 27001:2013", logo: "/png format/ISO-2013-logo.png", filter: "brightness" },
  { name: "IRDAI Guidelines", logo: "/png format/IRDAI - ICSG logo 2 1.png", filter: "brightness" },
  { name: "MAS TRM", logo: "/png format/Technology Risk  Management Guideline logo (MAS) 1.png", filter: "brightness" },
  { name: "CISA Cyber Essentials", logo: "/png format/CISA Cyber Essentials.png", filter: "none" },
  { name: "Korea ISMS-P", logo: "/png format/kisa isms p 2023.png", filter: "brightness" },
  { name: "GxP FDA 21 CFR Part 11", logo: "/png format/Gxp 21 cfr part 11.png", filter: "brightness" },
  { name: "Essential 8", logo: "/png format/essential_8-logo.png", filter: "brightness" },
  { name: "C2M2", logo: "/png format/C2M2-logo.png", filter: "none" },
  { name: "LGPD", logo: "/png format/LGPD logo.png", filter: "brightness" },
  { name: "ISM", logo: "/png format/Information-Security_Manual-_ISM_logo.png", filter: "brightness" },
  { name: "FFIEC", logo: "/png format/Ffiec logo.png", filter: "invert" },
  { name: "BAIT & VAIT", logo: "/png format/BAIT & VAIT logo.png", filter: "brightness" },
  { name: "Common Cloud Controls", logo: "/png format/Common Cloud Controls Catalog (CCC)-logo.png", filter: "none" },
];

// Split into two rows for visual interest
const row1 = complianceFrameworks.slice(0, 16);
const row2 = complianceFrameworks.slice(16);

// CSS filter configurations for dark logos
const filterStyles = {
  none: "",
  brightness: "saturate-0 brightness-[2] opacity-80",
  invert: "invert brightness-[1.2] saturate-0 opacity-90",
};

// Logo component with proper filters
function ComplianceLogo({ item, index }: { item: typeof complianceFrameworks[0]; index: number }) {
  const baseFilter = filterStyles[item.filter as keyof typeof filterStyles] || filterStyles.brightness;
  
  return (
    <motion.div
      className="group relative flex-shrink-0 cursor-pointer px-6"
      whileHover={{ scale: 1.1, y: -6 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
    >
      {/* Hover background glow */}
      <div className="absolute inset-0 -m-4 bg-gradient-to-br from-[#D33E9E]/10 via-transparent to-[#3530BA]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      {/* Logo container with consistent sizing */}
      <div className="relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
        <Image
          src={item.logo}
          alt={item.name}
          fill
          className={`object-contain ${baseFilter} group-hover:saturate-100 group-hover:brightness-110 group-hover:opacity-100 transition-all duration-500 ease-out`}
        />
      </div>

      {/* Tooltip on hover */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <p className="text-xs text-white font-medium">{item.name}</p>
      </div>
    </motion.div>
  );
}

export default function ComplianceCoverage() {
  return (
    <section className="py-8 md:py-12 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black border-y border-white/5 backdrop-blur-sm relative">
      
      {/* Refined background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3530BA] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight mb-4"
          >
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              Compliance Coverage
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Automated support for 35+ essential security and compliance frameworks
          </motion.p>
        </div>

        {/* Infinite Scrolling Rows */}
        <div className="relative space-y-12 md:space-y-16">
          {/* Gradient fade masks - properly positioned */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scroll Right → Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center"
              animate={{
                x: [0, -1920], // Adjust based on content width
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Triple repetition for seamless loop */}
              {[...row1, ...row1, ...row1].map((item, index) => (
                <ComplianceLogo key={`row1-${index}`} item={item} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Scroll Left → Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex items-center"
              animate={{
                x: [-1920, 0], // Opposite direction
              }}
              transition={{
                x: {
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Triple repetition for seamless loop */}
              {[...row2, ...row2, ...row2].map((item, index) => (
                <ComplianceLogo key={`row2-${index}`} item={item} index={index} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-8 md:mt-12"
        >
          <Link href="/frameworks">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white font-semibold text-base md:text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow duration-300"
            >
              <span className="relative flex items-center gap-3">
                View All Frameworks
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.span>
              </span>

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.6 }
                }}
                style={{ skewX: -20 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Motion preference support */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

