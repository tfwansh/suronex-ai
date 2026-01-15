"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

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
  //{ name: "C5", logo: "/png format/C5-logo.png", needsInvert: false, needsBackground: false },
  //{ name: "ENS", logo: "/png format/ens-logo.png", needsInvert: false, needsBackground: false },
  //{ name: "COPPA", logo: "/png format/COPPA logo.jpg", needsInvert: false, needsBackground: false },
  //{ name: "ISO 27001:2013", logo: "/png format/ISO-2013-logo.png", needsInvert: false, needsBackground: false },
  { name: "IRDAI Guidelines", logo: "/png format/IRDAI - ICSG logo 2 1.png", needsInvert: false, needsBackground: true },
  { name: "MAS TRM", logo: "/png format/mas.png", needsInvert: false, needsBackground: false },
  { name: "CISA Cyber Essentials", logo: "/png format/CISA Cyber Essentials.png", needsInvert: false, needsBackground: false },
  //{ name: "Korea ISMS-P", logo: "/png format/kisa isms p 2023.png", needsInvert: false, needsBackground: true },
  { name: "GxP FDA 21 CFR Part 11", logo: "/png format/Gxp 21 cfr part 11.png", needsInvert: false, needsBackground: true },
  { name: "Essential 8", logo: "/png format/essential_8-logo.png", needsInvert: false, needsBackground: false },
  //{ name: "LGPD", logo: "/png format/LGPD logo.png", needsInvert: false, needsBackground: false },
  //{ name: "ISM", logo: "/png format/Information-Security_Manual-_ISM_logo.png", needsInvert: false, needsBackground: false },
  { name: "FFIEC", logo: "/png format/Ffiec logo.png", needsInvert: true, needsBackground: true },
  //{ name: "BAIT & VAIT", logo: "/png format/BAIT & VAIT logo.png", needsInvert: false, needsBackground: true },
  //{ name: "Common Cloud Controls", logo: "/png format/Common Cloud Controls Catalog (CCC)-logo.png", needsInvert: false, needsBackground: false },
];

// Split into two rows
const row1 = complianceFrameworks.slice(0, 15);
const row2 = complianceFrameworks.slice(15);

// Enhanced logo component with better visibility
function ComplianceLogo({ item }: { item: typeof complianceFrameworks[0] }) {
  const filterClass = item.needsInvert
    ? "invert brightness-[0.9]"
    : "";

  return (
    <div className="flex-shrink-0 px-6 md:px-8">
      {/* Larger logo container with optional background */}
      <motion.div 
        className={`relative w-40 h-28 md:w-48 md:h-32 flex items-center justify-center rounded-xl transition-all duration-300 ${
          item.needsBackground 
            ? 'bg-white/95 p-4 shadow-lg hover:shadow-xl hover:bg-white' 
            : 'hover:scale-105'
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 160px, 192px"
            className={`object-contain transition-all duration-300 ${filterClass} ${
              item.needsBackground ? 'opacity-100' : 'opacity-80 hover:opacity-100'
            }`}
            loading="lazy"
          />
        </div>
        
        {/* Subtle glow effect on hover for non-background logos */}
        {!item.needsBackground && (
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at center, rgba(211, 62, 158, 0.1) 0%, transparent 70%)',
            }}
          />
        )}
      </motion.div>
      
      {/* Optional: Tooltip with framework name on hover */}
      <div className="text-center mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-gray-500 font-medium">{item.name}</span>
      </div>
    </div>
  );
}

export default function ComplianceCoverage() {
  // Calculate animation distance based on number of logos (adjusted for larger size)
  const row1Distance = row1.length * 200; // Increased from 160px
  const row2Distance = row2.length * 200;

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black border-y border-white/5 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#3530BA] opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4"
          >
            Enterprise Compliance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              Without the Complexity
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Consistent control mapping across 50+ standards and best practices.
          </motion.p>
        </div>

        {/* Scrolling logos - optimized for performance */}
        <div className="relative space-y-10 md:space-y-14">
          {/* Enhanced fade masks */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Right to Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center"
              animate={{
                x: [0, -row1Distance],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...row1, ...row1, ...row1].map((item, index) => (
                <ComplianceLogo key={`row1-${index}`} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center"
              animate={{
                x: [-row2Distance, 0],
              }}
              transition={{
                x: {
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...row2, ...row2, ...row2].map((item, index) => (
                <ComplianceLogo key={`row2-${index}`} item={item} />
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
          className="flex justify-center mt-16 md:mt-20 px-4"
        >
          <Link href="/frameworks">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white font-semibold text-base md:text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
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

              {/* Shine effect */}
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

