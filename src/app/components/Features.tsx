"use client";
import { Cloud, Database, Lock, Activity, ShieldCheck, Zap } from "lucide-react"; // Make sure these icons are imported
import { motion } from "framer-motion";

const features = [
  {
    title: "Cloud Security",
    desc: "Complete visibility into AWS, Azure, and GCP workloads.",
    icon: <Cloud className="w-8 h-8 text-white" />,
    colSpan: "col-span-1 md:col-span-2", // Wide Card
    gradient: "from-[#3530BA]/30 to-transparent", // Blue Glow
    border: "group-hover:border-[#3530BA]/50"
  },
  {
    title: "Smart Inventory",
    desc: "Auto-classification of all digital assets.",
    icon: <Database className="w-8 h-8 text-white" />,
    colSpan: "col-span-1", // Small Card
    gradient: "from-[#D33E9E]/30 to-transparent", // Pink Glow
    border: "group-hover:border-[#D33E9E]/50"
  },
  {
    title: "Shadow IT",
    desc: "Detect unauthorized resources instantly.",
    icon: <Lock className="w-8 h-8 text-white" />,
    colSpan: "col-span-1", // Small Card
    gradient: "from-[#4C32B8]/30 to-transparent", // Purple Glow
    border: "group-hover:border-[#4C32B8]/50"
  },
  {
    title: "Governance",
    desc: "Automated compliance scorecards & reporting.",
    icon: <Activity className="w-8 h-8 text-white" />,
    colSpan: "col-span-1 md:col-span-2", // Wide Card
    gradient: "from-emerald-500/20 to-transparent", // Green Glow (for variety) or use Pink
    border: "group-hover:border-emerald-500/50"
  },
];

export default function Features() {
  return (
    <section id="products" className="bg-black py-32 px-6 relative overflow-hidden">
      
      {/* Background Blobs for Atmosphere */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#3530BA]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D33E9E]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            One Platform. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3530BA] to-[#D33E9E]">
                Total Control.
            </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                Replace fragmented tools with a single unified platform designed for the AI era.
            </p>
        </motion.div>
        
        {/* THE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Glass Panel Styling
              className={`${f.colSpan} group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-10 hover:-translate-y-2 transition-all duration-500 ${f.border}`}
            >
              {/* Internal Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                {/* Icon Box */}
                <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                </div>
                
                {/* Text */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}