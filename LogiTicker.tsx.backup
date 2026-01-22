"use client";
import { motion } from "framer-motion";
// Removed ShieldCheck import as it is no longer needed

const companies = [
  "Acme Corp", "Quantum", "Echo Valley", "Celestial",
  "Pulse Systems", "Apex Security", "Nexus AI", "Cyber Dyne",
];

export default function LogoTicker() {
  return (
    <section className="py-32 overflow-hidden bg-black/20 border-y border-white/5 backdrop-blur-sm relative">
      
      {/* Background Glow for Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3530BA] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-full">
        
        {/* === HEADER SECTION === */}
        <div className="text-center mb-20 px-4 relative z-10">
            
            {/* 1. Pill Badge REMOVED */}

            {/* 2. Main Title */}
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
                Trusted by the world&apos;s most <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
                    innovative security teams
                </span>
            </motion.h2>

            {/* 3. Subtitle REMOVED */}
        </div>


        {/* === SCROLLING TICKER === */}
        <div className="relative flex flex-col gap-12">
             
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            {/* ROW 1: Right to Left */}
            <div className="flex overflow-hidden">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ 
                        duration: 40,
                        repeat: Infinity, 
                        ease: "linear",
                    }}
                    className="flex gap-24 pr-24"
                >
                    {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                        <h3 
                            key={index}
                            className="text-3xl md:text-5xl font-light tracking-tight text-gray-600 transition-all duration-500 cursor-default whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#D33E9E] hover:to-[#3530BA] hover:scale-105"
                        >
                            {company}
                        </h3>
                    ))}
                </motion.div>
            </div>

            {/* ROW 2: Left to Right */}
            <div className="flex overflow-hidden">
                <motion.div 
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{ 
                        duration: 40,
                        repeat: Infinity, 
                        ease: "linear",
                    }}
                    className="flex gap-24 pr-24"
                >
                     {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                        <h3 
                            key={index}
                            className="text-3xl md:text-5xl font-light tracking-tight text-gray-600 transition-all duration-500 cursor-default whitespace-nowrap hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#D33E9E] hover:to-[#3530BA] hover:scale-105"
                        >
                            {company}
                        </h3>
                    ))}
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}