"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";
import { useState, useEffect } from "react";

// Consolidated frameworks list
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

// Static logo component for mobile
function StaticLogo({ item }: { item: typeof complianceFrameworks[0] }) {
  const filterClass = item.needsInvert ? "invert brightness-[0.9]" : "";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-24 h-18 flex items-center justify-center rounded-lg ${
          item.needsBackground ? "bg-white/95 p-2 shadow-md" : ""
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            sizes="96px"
            className={`object-contain ${filterClass} ${
              item.needsBackground ? "opacity-100" : "opacity-75"
            }`}
            loading="lazy"
          />
        </div>
      </div>
      <span className="text-xs font-medium text-white/70 mt-2 text-center">
        {item.name}
      </span>
    </div>
  );
}

// Optimized scrolling logo for desktop
function ScrollingLogo({ item }: { item: typeof complianceFrameworks[0] }) {
  const filterClass = item.needsInvert ? "invert brightness-[0.9]" : "";

  return (
    <div className="flex-shrink-0 px-6 flex flex-col items-center">
      <div
        className={`relative w-32 h-24 flex items-center justify-center rounded-lg transition-all duration-300 ${
          item.needsBackground
            ? "bg-white/95 p-3 shadow-lg"
            : ""
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            sizes="128px"
            className={`object-contain ${filterClass} ${
              item.needsBackground ? "opacity-100" : "opacity-70"
            }`}
            loading="lazy"
          />
        </div>
      </div>
      <span className="text-sm font-semibold text-white/80 mt-2 text-center">
        {item.name}
      </span>
    </div>
  );
}

export default function ComplianceCoverage() {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Split for desktop scrolling
  const row1 = complianceFrameworks.slice(0, 11);
  const row2 = complianceFrameworks.slice(11);

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black border-y border-white/5 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3530BA] opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4"
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
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light"
          >
            Consistent control mapping across 40+ standards and best practices.
          </motion.p>
        </div>

        {/* MOBILE: Static Grid View */}
        {isMobile ? (
          <div className="px-4">
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {complianceFrameworks.slice(0, 12).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <StaticLogo item={item} />
                </motion.div>
              ))}
            </div>
            
            {/* Show more hint */}
            <p className="text-center text-sm text-white/50 mt-6">
              + 50 more frameworks
            </p>
          </div>
        ) : (
          /* DESKTOP: Optimized Infinite Scroll with CSS Animation */
          <div className="relative">
            {/* Fade masks */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

            <div className="space-y-8">
              {/* Row 1 */}
              <div className="overflow-hidden">
                <div 
                  className="flex animate-scroll-right"
                  style={{
                    width: 'fit-content',
                  }}
                >
                  {[...row1, ...row1].map((item, index) => (
                    <ScrollingLogo key={`r1-${index}`} item={item} />
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="overflow-hidden">
                <div 
                  className="flex animate-scroll-left"
                  style={{
                    width: 'fit-content',
                  }}
                >
                  {[...row2, ...row2].map((item, index) => (
                    <ScrollingLogo key={`r2-${index}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12 md:mt-14 px-4"
        >
          <Link href="/frameworks">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white font-semibold text-base md:text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span className="relative flex items-center gap-3">
                View All Frameworks
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* CSS-based smooth animations for desktop */}
      <style jsx global>{`
        @keyframes scroll-right {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-right,
          .animate-scroll-left {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

