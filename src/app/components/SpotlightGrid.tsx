"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Database, Lock, Activity, ShieldCheck, Zap } from "lucide-react";

// --- THE DATA ---
const features = [
  {
    title: "Cloud Security",
    desc: "Complete visibility into AWS, Azure, and GCP workloads.",
    icon: <Cloud className="w-8 h-8 text-white" />,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Smart Inventory",
    desc: "Auto-classification of all digital assets.",
    icon: <Database className="w-8 h-8 text-white" />,
    colSpan: "col-span-1",
  },
  {
    title: "Shadow IT",
    desc: "Detect unauthorized resources instantly.",
    icon: <Lock className="w-8 h-8 text-white" />,
    colSpan: "col-span-1",
  },
  {
    title: "Governance",
    desc: "Automated compliance scorecards & reporting.",
    icon: <Activity className="w-8 h-8 text-white" />,
    colSpan: "col-span-1 md:col-span-2",
  },
];

export default function SpotlightGrid() {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <section className="py-32 bg-black px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Total Control. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3530BA] to-[#D33E9E]">
                    In The Spotlight.
                </span>
            </h2>
        </div>

        {/* --- THE SPOTLIGHT WRAPPER --- */}
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 group"
        >
          {/* THE MAGIC GLOW 
             This div follows the mouse and reveals the borders.
          */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[2rem] z-0"
            style={{
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(211, 62, 158, 0.15), transparent 40%)`,
            }}
          />

          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.colSpan} relative rounded-[2rem] bg-white/5 border border-white/10 p-10 overflow-hidden z-10`}
            >
              {/* INDIVIDUAL CARD HIGHLIGHT 
                 Each card *also* tracks the mouse relative to itself for a subtle inner glow.
              */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                style={{
                  background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                }}
              />
              
              {/* Content */}
              <div className="relative z-20 flex flex-col h-full justify-between gap-8 pointer-events-none">
                <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 shadow-inner">
                    {f.icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>

              {/* Card Background Pattern (optional texture) */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}