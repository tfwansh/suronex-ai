"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";
import { useState, useEffect } from "react";

// Consolidated frameworks list with visibility settings
const complianceFrameworks = [
  { name: "ISO 27001:2022", logo: "/png format/ISO-2022-logo.png", needsInvert: false, needsBackground: false },
  { name: "SOC 2 Type II", logo: "/png format/soc2 logo.png", needsInvert: false, needsBackground: false },
  { name: "GDPR", logo: "/png format/gdpr logo.png", needsInvert: false, needsBackground: false },
  { name: "HIPAA", logo: "/png format/HIPAA-logo.png", needsInvert: false, needsBackground: false },
  { name: "NIST CSF", logo: "/png format/NIST logo.png", needsInvert: true, needsBackground: false },
  { name: "FedRAMP", logo: "/png format/fedramp logo.png", needsInvert: false, needsBackground: false },
  { name: "CIS Benchmarks", logo: "/png format/CIS-logo.png", needsInvert: false, needsBackground: false },
  { name: "Mitre ATT&CK", logo: "/png format/mitre attck logo.png", needsInvert: false, needsBackground: false },
  { name: "CCPA", logo: "/png format/CCPA-logo.png", needsInvert: false, needsBackground: false },
  { name: "PCI-DSS", logo: "/png format/PCI-logo.png", needsInvert: false, needsBackground: false },
  { name: "RBI Cyber Security", logo: "/png format/RBI cyber security framework.png", needsInvert: false, needsBackground: true },
  { name: "APRA CPS 234", logo: "/png format/APRA-logo.png", needsInvert: false, needsBackground: true },
  { name: "SEBI CSCRF", logo: "/png format/SEBI - CSCRF logo 1.png", needsInvert: false, needsBackground: true },
  { name: "DORA", logo: "/png format/DORA-logo.png", needsInvert: false, needsBackground: false },
  { name: "ENISA NIS 2", logo: "/png format/ENISA_NIS-2_logo.png", needsInvert: false, needsBackground: false },
  { name: "IRDAI Guidelines", logo: "/png format/IRDAI - ICSG logo 2 1.png", needsInvert: false, needsBackground: true },
  { name: "MAS TRM", logo: "/png format/mas.png", needsInvert: false, needsBackground: false },
  { name: "CISA Cyber Essentials", logo: "/png format/CISA Cyber Essentials.png", needsInvert: false, needsBackground: false },
  { name: "GxP FDA 21 CFR Part 11", logo: "/png format/Gxp 21 cfr part 11.png", needsInvert: false, needsBackground: true },
  { name: "Essential 8", logo: "/png format/essential_8-logo.png", needsInvert: false, needsBackground: false },
  { name: "FFIEC", logo: "/png format/Ffiec logo.png", needsInvert: true, needsBackground: true },
];

// Split into two rows
const row1 = complianceFrameworks.slice(0, 11);
const row2 = complianceFrameworks.slice(11);

// Enhanced logo component with mobile optimization
function ComplianceLogo({ item, isMobile }: { item: typeof complianceFrameworks[0]; isMobile: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const filterClass = item.needsInvert ? "invert brightness-[0.9]" : "";

  return (
    <div 
      className="flex-shrink-0 px-4 sm:px-5 md:px-6 group"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Logo container */}
      <motion.div
        className={`relative w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-26 flex items-center justify-center rounded-lg transition-all duration-300 ${
          item.needsBackground
            ? "bg-white/95 p-3 shadow-lg group-hover:shadow-xl group-hover:bg-white"
            : ""
        }`}
        animate={!isMobile && isHovered ? {
          scale: 1.05,
          y: -4,
        } : {
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
            className={`object-contain transition-all duration-300 ${filterClass} ${
              item.needsBackground ? "opacity-100" : "opacity-70 group-hover:opacity-100"
            }`}
            loading="lazy"
          />
        </div>

        {/* Enhanced glow effect on hover */}
        {!item.needsBackground && (
          <motion.div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at center, rgba(211, 62, 158, 0.15) 0%, transparent 70%)",
            }}
          />
        )}
      </motion.div>

      {/* Framework name with enhanced gradient */}
      <div className="text-center mt-2 sm:mt-2.5">
        <motion.span
          className="inline-block text-xs sm:text-sm md:text-base font-semibold
                     text-white/80
                     bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA]
                     bg-clip-text
                     transition-all duration-300 ease-out
                     group-hover:text-transparent"
          animate={!isMobile && isHovered ? {
            scale: 1.05,
          } : {
            scale: 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {item.name}
        </motion.span>
      </div>
    </div>
  );
}

export default function ComplianceCoverage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate animation distance based on number of logos
  const row1Distance = row1.length * (isMobile ? 140 : 180);
  const row2Distance = row2.length * (isMobile ? 140 : 180);

  return (
    <section className="py-10 sm:py-12 md:py-14 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black border-y border-white/5 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#3530BA] opacity-5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-3 sm:mb-4"
          >
            Enterprise Compliance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA] font-normal">
              Without the Complexity
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light"
          >
            Consistent control mapping across 50+ standards and best practices.
          </motion.p>
        </div>

        {/* Scrolling logos */}
        <div 
          className="relative space-y-6 sm:space-y-8 md:space-y-10"
          onMouseEnter={() => !isMobile && setIsPaused(true)}
          onMouseLeave={() => !isMobile && setIsPaused(false)}
        >
          {/* Enhanced fade masks */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-28 md:w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-28 md:w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Right to Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center will-change-transform"
              animate={{
                x: [0, -row1Distance],
              }}
              transition={{
                x: {
                  duration: isMobile ? 30 : 35,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...row1, ...row1, ...row1].map((item, index) => (
                <ComplianceLogo key={`row1-${index}`} item={item} isMobile={isMobile} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center will-change-transform"
              animate={{
                x: [0, -row1Distance],
              }}
              transition={{
                x: {
                  duration: isMobile ? 32 : 37,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...row2, ...row2, ...row2].map((item, index) => (
                <ComplianceLogo key={`row2-${index}`} item={item} isMobile={isMobile} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Button with enhanced interactivity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10 sm:mt-12 md:mt-14 px-4"
        >
          <Link href="/frameworks">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white font-semibold text-sm sm:text-base md:text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span className="relative flex items-center gap-2 sm:gap-3">
                View All Frameworks
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </span>

              {/* Enhanced shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  transition: { duration: 0.5 },
                }}
                style={{ skewX: -20 }}
              />

              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full"
                animate={{
                  opacity: [0, 0.2, 0],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile tap hint */}
        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="text-center text-xs text-white/40 mt-6"
          >
            Tap logos to explore frameworks
          </motion.p>
        )}
      </div>

      {/* Reduced motion support */}
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

