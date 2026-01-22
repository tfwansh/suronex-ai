"use client";

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import ContactHero from "./components/ContactHero";
import BookingSection from "./components/BookingSection";
import Navbar from "../components/Navbar";
import { Footer } from "../components/footer";

export default function ContactPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(211, 62, 158, 0.06),
      transparent 80%
    )
  `;

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#D33E9E]/30 relative font-sans overflow-hidden">
      {/* Mouse-following spotlight */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: spotlightBackground }}
      />

      {/* Animated background with shield and glows */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Central shield animation */}
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-4/5 h-4/5 rounded-full bg-gradient-to-br from-[#D33E9E]/60 via-[#3530BA]/30 to-transparent blur-[70px]"
          />

          <motion.div
            animate={{
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-full drop-shadow-[0_0_15px_rgba(211,62,158,0.9)] drop-shadow-[0_0_50px_rgba(53,48,186,0.6)]"
          >
            <Image
              src="/shield-bg.png"
              alt="Suronex Shield Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Floating gradient blobs */}
        <div className="absolute inset-0 overflow-hidden font-sans z-[-2]">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3530BA]/10 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D33E9E]/10 rounded-full blur-[150px]"
          />
        </div>

        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 md:pt-48 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-20 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-lg shadow-purple-500/10"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-200 tracking-widest uppercase">Get in Touch</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
                Let&apos;s Strengthen Your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] via-[#9F5FD6] to-[#3530BA]">
                  Cloud Security Together
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Whether you&apos;re a growing startup or a global enterprise, Suronex helps you simplify compliance,
                strengthen cloud security, and stay ahead of risk — without slowing innovation.
              </p>
            </motion.div>

            {/* Two-column grid: Contact form + Booking */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
              {/* Left: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <ContactHero />
              </motion.div>

              {/* Right: Booking Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl p-1 border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)]"
              >
                <div className="rounded-[22px] bg-black/20 overflow-hidden">
                  <BookingSection />
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="relative w-full border-t border-white/10 bg-[#030014]/60 backdrop-blur-xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}

