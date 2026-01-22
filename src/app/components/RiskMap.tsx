"use client";
import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  Database, 
  ShieldAlert, 
  Box, 
  Bot
} from "lucide-react";

export default function RiskMap() {
  
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,48,186,0.1),transparent_70%)] pointer-events-none" />
      
      {/* HEADER */}
      <div className="relative z-10 text-center mb-16 px-4 w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-snug">
              Visualizing the{" "}
              <span className="relative inline-block px-1">
                Attack
                {/* === Animated Red Underline === */}
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
                    className="absolute left-0 -bottom-1 md:-bottom-2 h-[3px] md:h-[4px] bg-[#EF4444] rounded-full shadow-[0_0_12px_rgba(239,68,68,0.6)]"
                />
              </span>
              {" "}Path
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Most tools show you a list. We show you the <span className="text-[#EF4444] font-semibold">story</span>.
          </p>
      </div>

      {/* GRAPH CONTAINER */}
      <div className="relative w-full max-w-7xl mx-auto px-4 flex justify-center items-center h-[400px]">
         
        {/* The Graph Layout */}
        <div className="flex items-center justify-center w-full">
            
            {/* === 1. INTERNET (Down) === */}
            <Node 
                icon={<Globe size={28} />} 
                label="Internet" 
                subLabel="Public Access"
                description="Entry point"
                color="blue"
                delay={0}
                hasNext={true}
                position="bottom"
            />

            {/* === 2. FIREWALL (Up) === */}
            <Node 
                icon={<Box size={28} />} 
                label="Container" 
                subLabel="Web App"
                description="Public-facing app"
                color="orange"
                delay={0.2}
                hasNext={true}
                position="top"
            />

            {/* === 3. VULNERABLE SERVER (Down) === */}
            <div className="relative group flex flex-col items-center">
                <Node 
                    icon={<Server size={28} />} 
                    label="Server" 
                    subLabel="EC2 Instance"
                    description="Vulnerable Code"
                    color="blue"
                    delay={0.4}
                    hasNext={true}
                    position="bottom"
                />
                
                {/* --- THE ATTACK ARC (Red Jump Line) --- */}
                <div className="absolute bottom-[60%] left-[50%] w-[320px] h-[180px] pointer-events-none z-0">
                    <svg className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="attack-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EF4444" stopOpacity="0" />
                                <stop offset="50%" stopColor="#EF4444" stopOpacity="1" />
                                <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Guide Line */}
                        <path 
                            d="M 0 180 C 0 -50, 320 -50, 320 180" 
                            fill="none" 
                            stroke="#EF4444" 
                            strokeWidth="2" 
                            strokeDasharray="6 6"
                            className="opacity-30"
                        />
                        
                        {/* Animated Beam */}
                        <motion.path 
                            d="M 0 180 C 0 -50, 320 -50, 320 180" 
                            fill="none" 
                            stroke="url(#attack-gradient)" 
                            strokeWidth="4"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                ease: "linear",
                                repeatDelay: 0.2 
                            }}
                        />
                    </svg>

                    {/* ALERT BADGE */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30"
                    >
                         <div className="relative">
                            <div className="absolute inset-0 bg-red-500 animate-ping opacity-40 rounded-full" />
                            <div className="w-12 h-12 rounded-full bg-[#EF4444] border-4 border-[#0A0A0A] flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.8)]">
                                <ShieldAlert size={24} />
                            </div>
                         </div>
                         <div className="mt-2 bg-[#121212] border border-red-500/50 px-3 py-1 rounded-full text-red-400 text-[10px] font-mono font-bold shadow-xl whitespace-nowrap z-40">
                            CVE-2025-557
                         </div>
                    </motion.div>
                </div>
            </div>


            {/* === 4. INTERNAL NETWORK (Up) === */}
            <Node 
                icon={<Box size={28} />} 
                label="Internal" 
                subLabel="VPC"
                description="Private Network"
                color="blue"
                delay={0.6}
                hasNext={true}
                position="top"
            />

            {/* === 5. COMPROMISED IDENTITY (Down) === */}
            <Node 
                icon={<Bot size={28} />} 
                label="Service Bot" 
                subLabel="Admin Role"
                description="Admin Access"
                color="purple"
                delay={0.8}
                hasNext={true}
                position="bottom"
            />

            {/* === 6. TARGET DB (Up) === */}
            <Node 
                icon={<Database size={28} />} 
                label="Customer DB" 
                subLabel="PII Data"
                description="Target Asset"
                color="red"
                delay={1.0}
                hasNext={false}
                isTarget={true}
                position="top"
            />

        </div>
      </div>
    </div>
  );
}

// === REUSABLE NODE COMPONENT ===
function Node({ icon, label, subLabel, description, color, delay, hasNext, isTarget, position }: any) {
    const colors: any = {
        blue: "border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#60A5FA] shadow-[#3B82F6]/20",
        orange: "border-[#F97316]/40 bg-[#F97316]/10 text-[#FB923C] shadow-[#F97316]/20",
        purple: "border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#A78BFA] shadow-[#8B5CF6]/20",
        red: "border-[#EF4444]/60 bg-[#EF4444]/20 text-[#F87171] shadow-[#EF4444]/40"
    };

    const activeColor = colors[color] || colors.blue;
    
    // Determine Text Positioning
    const textPositionClass = position === "top" 
        ? "bottom-[130%] mb-2" 
        : "top-[130%] mt-2";

    return (
        <div className="flex items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay, duration: 0.4, type: "spring" }}
                className="relative z-10 flex flex-col items-center group"
            >
                {/* Node Shape */}
                <div className={`w-20 h-20 rounded-2xl rotate-45 flex items-center justify-center border-2 backdrop-blur-md transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 ${activeColor} ${isTarget ? 'shadow-[0_0_40px_rgba(239,68,68,0.5)] animate-pulse' : 'shadow-lg'}`}>
                    <div className="-rotate-45 group-hover:rotate-0 transition-all duration-500">
                        {icon}
                    </div>
                </div>

                {/* LABELS & DESCRIPTION BOX */}
                <div className={`absolute left-1/2 -translate-x-1/2 text-center w-40 flex flex-col items-center ${textPositionClass}`}>
                    
                    <p className={`text-sm font-bold tracking-wide ${color === 'red' ? 'text-red-400' : 'text-white'}`}>{label}</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest font-mono mt-0.5 mb-2">{subLabel}</p>
                    
                    {/* Description Box */}
                    <div className="bg-[#121212]/90 border border-white/5 rounded-md px-2 py-1.5 backdrop-blur-sm shadow-lg w-full">
                        <p className="text-[10px] text-gray-400 leading-tight">
                            {description}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Connecting Line */}
            {hasNext && (
                <div className="w-[60px] md:w-[80px] h-[3px] bg-[#1A1A1A] relative rounded-full mx-1 overflow-hidden">
                     <motion.div 
                        className={`absolute inset-0 h-full ${color === 'red' ? 'bg-red-500' : 'bg-[#3B82F6]'}`}
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ delay: delay + 0.3, duration: 0.6, ease: "circOut" }}
                     />
                </div>
            )}
        </div>
    );
}