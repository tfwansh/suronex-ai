"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, Shield, Search, Sliders, BarChart3, Globe } from "lucide-react";

const solutions = [
  {
    title: "Eliminate Blind Spots",
    desc: "Unified dashboard provides complete visibility across AWS, Azure, GCP, and SaaS applications.",
    icon: <Search className="w-6 h-6 text-[#3530BA]" />,
  },
  {
    title: "Automate Compliance",
    desc: "Save hours of manual effort by streamlining repetitive compliance checks and reducing dependency on spreadsheets.",
    icon: <Zap className="w-6 h-6 text-[#D33E9E]" />,
  },
  {
    title: "Standardize Controls",
    desc: "Enforce consistent policies and security controls across all your multi-cloud environments.",
    icon: <Sliders className="w-6 h-6 text-[#4C32B8]" />,
  },
  {
    title: "Proactive Risk Detection",
    desc: "Real-time compliance scoring and misconfiguration alerts help you fix issues before audits.",
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "Continuous Monitoring",
    desc: "Move from reactive to proactive with continuous assessments that catch risks early.",
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Future-Proof & Scalable",
    desc: "A flexible framework that grows with your business and evolving global regulations.",
    icon: <Globe className="w-6 h-6 text-orange-400" />,
  }
];

export default function Solution() {
  const containerRef = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <section ref={containerRef} className="py-4 bg-transparent px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3530BA]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D33E9E]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div style={{ y, opacity: sectionOpacity }} className="max-w-7xl mx-auto relative z-10">
        
        {/* ANIMATED HEADER */}
        <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
        >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-12"></div>
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
                    Intelligent Solutions
                </span> <br /> 
                For Complex Problems.
            </h2>
        </motion.div>

        {/* SPOTLIGHT GRID */}
        <div 
            ref={gridRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 group relative"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[2rem] z-0"
                style={{ background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(211, 62, 158, 0.15), transparent 40%)` }}
            />

            {solutions.map((sol, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative overflow-hidden p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md z-10"
                >
                    <div
                        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                        style={{ background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)` }}
                    />
                    <div className="relative z-20">
                        <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                            {sol.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}