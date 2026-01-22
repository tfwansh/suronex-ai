"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck } from "lucide-react"; 
import { useRef } from "react";

const standards = [
  "ISO 27001", "SOC 2 Type II", "GDPR", "HIPAA", 
  "PCI-DSS", "NIST CSF", "FedRAMP", "CIS Benchmarks"
];

export default function Compliance() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-transparent relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} // <--- BLUR START
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // <--- BLUR END
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
              Compliance Coverage.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Navigate the complex world of compliance with automated support for over 40+ essential security frameworks.
          </p>
        </motion.div>

        {/* Floating Glass Badges (Staggered Animation) */}
        <div className="flex flex-wrap justify-center gap-4">
          {standards.map((std, i) => (
            <motion.div
              key={std}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: "#D33E9E" }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(211,62,158,0.3)] transition-all cursor-default group"
            >
              <ShieldCheck className="w-4 h-4 text-[#D33E9E] group-hover:text-white transition-colors" />
              {std}
            </motion.div>
          ))}
          <div className="px-6 py-3 rounded-full border border-dashed border-gray-700 text-gray-500 text-sm">
            + 32 More
          </div>
        </div>

      </motion.div>
    </section>
  );
}