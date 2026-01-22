"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={targetRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-transparent pt-24 md:pt-32 pb-12 md:pb-16"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#3530BA]/30 rounded-full blur-[100px] animate-float mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#D33E9E]/20 rounded-full blur-[120px] animate-float mix-blend-screen" style={{ animationDelay: "2s" }} />
      </div>

      {/* Shield Background with Breathing Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-[0.3]">
          <Image
            src="/shield-bg.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        style={{ scale, y }}
        className="z-10 relative flex flex-col items-center gap-6 md:gap-8 max-w-5xl mx-auto px-4 md:px-8 w-full"
      >
        <motion.div style={{ opacity: textOpacity }} className="flex flex-col items-center gap-5 md:gap-7 w-full">

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative overflow-hidden text-white/90 font-bold tracking-[0.15em] md:tracking-[0.3em] uppercase text-[10px] sm:text-xs md:text-sm border border-white/10 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full backdrop-blur-md bg-white/5 text-center"
          >
            Intelligent. Integrated. Compliant.

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.0, duration: 1.0, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 h-[2px] md:h-[3px] bg-[#D33E9E]"
            />
          </motion.h2>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[2.5rem] leading-[1.1] sm:text-5xl sm:leading-tight md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-center text-white md:leading-[1]"
          >
            Secure your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C32B8] via-[#3530BA] to-[#D33E9E] drop-shadow-[0_0_30px_rgba(76,50,184,0.4)]">
              Cloud Future.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-400 max-w-2xl text-center leading-relaxed px-2 sm:px-4"
          >
AI Enabled platform to simplify compliance, strengthen security, and govern your entire cloud stack at scale.

          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-2 md:mt-4 w-full sm:w-auto justify-center items-stretch sm:items-center px-4 sm:px-0"
        >
          {/* Primary Button - Book Demo */}
          <a href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead" className="w-full sm:w-auto">
            <button className="group relative rounded-full p-[2px] overflow-hidden hover:scale-105 transition-transform duration-300 w-full">
              <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D33E9E_0%,#3530BA_50%,#D33E9E_100%)]" />
              <div className="relative h-full w-full rounded-full bg-black px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-5">
                <span className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D33E9E] group-hover:to-[#3530BA] transition-all whitespace-nowrap">
                  Book a Demo
                </span>
              </div>
            </button>
          </a>

          {/* Secondary Button - Sign In */}
          <a href="/contact" className="w-full sm:w-auto">
            <button className="w-full px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 hover:-translate-y-1 whitespace-nowrap">
              Sign Up
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

