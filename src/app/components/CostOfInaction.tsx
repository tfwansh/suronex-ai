"use client";
import { Siren, Workflow, Scale, ScanEye } from "lucide-react"; 
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pains = [
  {
    title: "Blind Spots",
    desc: "Fragmented visibility leaves critical risks unnoticed.",
    icon: <ScanEye className="w-8 h-8 text-[#FF4D4D]" />, 
    color: "group-hover:border-[#FF4D4D]/50",
    glow: "bg-[#FF4D4D]"
  },
  {
    title: "Inefficient Processes",
    desc: "Hours wasted on spreadsheets drain productivity.",
    icon: <Workflow className="w-8 h-8 text-[#FF9E4D]" />, 
    color: "group-hover:border-[#FF9E4D]/50",
    glow: "bg-[#FF9E4D]"
  },
  {
    title: "Audit Failures",
    desc: "Manual errors lead to penalties and failed audits.",
    icon: <Scale className="w-8 h-8 text-[#FFD700]" />, 
    color: "group-hover:border-[#FFD700]/50",
    glow: "bg-[#FFD700]"
  },
  {
    title: "Reactive Security",
    desc: "Risks are detected too late, causing firefighting.",
    icon: <Siren className="w-8 h-8 text-[#FF4D4D]" />, 
    color: "group-hover:border-[#FF4D4D]/50",
    glow: "bg-[#FF4D4D]"
  }
];

export default function CostOfInaction() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-transparent relative overflow-hidden">
      
      {/* Background Red Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div style={{ scale, opacity }} className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ANIMATED HEADER */}
        <motion.h2 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          The Cost of <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Doing Nothing.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                group relative flex gap-6 p-8 rounded-3xl overflow-hidden
                bg-white/[0.03] backdrop-blur-xl border border-white/10
                transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl
                ${pain.color}
              `}
            >
              {/* --- GLASS EFFECTS --- */}
              
              {/* 1. Glossy Top Gradient (Reflection) */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* 2. Colored Ambient Glow Spot behind the icon */}
              <div className={`absolute -left-10 -top-10 w-40 h-40 ${pain.glow} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500 pointer-events-none`} />

              {/* 3. Noise Texture (Optional realism) */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />


              {/* --- CONTENT --- */}
              <div className="relative z-10 flex-shrink-0 pt-1 p-3 rounded-2xl bg-black/40 h-fit border border-white/10 shadow-inner">
                  {pain.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{pain.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {pain.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}