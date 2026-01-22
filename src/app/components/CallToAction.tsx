"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Info, FileText, AlertCircle, Calendar, ArrowRight } from "lucide-react";

export default function CallToAction() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // === SPOTLIGHT LOGIC ===
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={containerRef}
      className="pt-20 pb-12 md:pt-24 md:pb-16 px-6 relative overflow-hidden bg-transparent"
    >
      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto relative"
      >
        {/* Wrapper for the CARD */}
        <div className="relative group">
          {/* THE GLOWING BACKGROUND BLOBS */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3530BA] via-[#D33E9E] to-[#4C32B8] rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:blur-2xl" />

          {/* === MAIN GLASS CARD === */}
          <div
            className="relative rounded-[2rem] bg-black/60 backdrop-blur-xl border border-white/10 p-10 md:p-16 text-center overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* SPOTLIGHT EFFECT */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(211, 62, 158, 0.15),
                    transparent 80%
                  )
                `,
              }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Ready to secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
                your infrastructure?
              </span>
            </h2>

            <p className="relative z-10 text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-12">
              Join the forward-thinking companies that trust Suronex to automate
              governance and eliminate blind spots.
            </p>

            {/* === BOOK A DEMO BUTTON === */}
            <a
              href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(211,62,158,0.4)] transition-all duration-300 group/btn hover:scale-105"
            >
              <Calendar className="w-5 h-5 group-hover/btn:text-[#D33E9E] transition-colors" />
              <span>Book a Live Demo</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>


      </motion.div>
    </section>
  );
}

