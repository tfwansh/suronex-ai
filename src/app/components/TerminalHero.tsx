"use client";
import { motion } from "framer-motion";
import { Terminal, Check, ShieldAlert, Cpu, Lock, ArrowRight, Activity, Trash2, HelpCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function TerminalHero() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<any[]>([
    { type: "output", content: "SuroNEX Cloud Guard v2.4.0 initialized." },
    { type: "output", content: "System ready. Awaiting instructions..." }
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasRunAutoScan = useRef(false); 

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isScanning]);

  // === AUTO-RUN SCENARIO (The Demo) ===
  useEffect(() => {
    if (hasRunAutoScan.current) return;
    hasRunAutoScan.current = true;

    const runDemo = async () => {
        await new Promise(r => setTimeout(r, 1000));
        
        // 1. Simulate Typing
        const cmd = "scan --auto-remediate";
        for (let i = 0; i <= cmd.length; i++) {
            setInput(cmd.slice(0, i));
            await new Promise(r => setTimeout(r, 60));
        }
        await new Promise(r => setTimeout(r, 400));
        
        // 2. Execute
        handleCommand(null, "scan --auto-remediate");
    };

    runDemo();
  }, []);

  const handleCommand = async (e: React.FormEvent | null, manualCmd?: string) => {
    if (e) e.preventDefault();
    const cmdToRun = manualCmd || input;
    if (!cmdToRun.trim()) return;

    // Clean input
    const command = cmdToRun.trim().toLowerCase().split(" ")[0];

    setHistory(prev => [...prev, { type: "command", content: cmdToRun }]);
    setInput("");

    // === COMMAND 1: CLEAR ===
    if (command === "clear") {
        setHistory([
            { type: "output", content: "Terminal history cleared." }
        ]);
        return;
    }

    // === COMMAND 2: HELP ===
    if (command === "help") {
        setHistory(prev => [...prev, { 
            type: "output", 
            content: (
                <div className="flex flex-col gap-2 text-gray-400 my-2 text-xs md:text-sm">
                    <div className="border-b border-white/10 pb-1 mb-1 font-bold text-white">AVAILABLE COMMANDS</div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="text-[#D33E9E]">scan</span>
                        <span>Run infrastructure vulnerability assessment & auto-fix</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="text-[#D33E9E]">status</span>
                        <span>Check active defense system health</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-2">
                        <span className="text-[#D33E9E]">clear</span>
                        <span>Clear terminal screen</span>
                    </div>
                </div>
            )
        }]);
        return;
    }

    // === COMMAND 3: STATUS ===
    if (command === "status") {
        setHistory(prev => [...prev, { 
            type: "output", 
            content: (
                <div className="flex flex-col gap-1 my-2 bg-white/5 p-3 rounded border border-white/10">
                     <div className="flex items-center justify-between text-green-400 font-bold mb-2">
                        <span className="flex items-center gap-2"><Activity size={14} /> SYSTEM NOMINAL</span>
                        <span className="text-xs opacity-70">UPTIME: 99.99%</span>
                     </div>
                     <div className="text-xs text-gray-400 grid grid-cols-2 gap-4">
                        <div>Active Nodes: <span className="text-white">42</span></div>
                        <div>Threats Blocked: <span className="text-white">8,921</span></div>
                        <div>Latency: <span className="text-white">24ms</span></div>
                        <div>Compliance: <span className="text-white">100% (SOC2)</span></div>
                     </div>
                </div>
            )
        }]);
        return;
    }

    // === COMMAND 4: SCAN (The Main Demo) ===
    if (command === "scan") {
        setIsScanning(true);
        setHistory(prev => [...prev, { type: "output", content: "Initiating deep infrastructure scan..." }]);
        
        // DELAY 1: SCANNING
        await new Promise(r => setTimeout(r, 1200)); 
        
        // STEP 1: DISCOVERY (The Problem)
        setHistory(prev => [...prev, { 
            type: "threat", 
            content: (
                <div className="flex items-start gap-3 bg-red-500/10 border-l-2 border-red-500 p-3 rounded-r-md max-w-lg my-2 animate-in fade-in slide-in-from-left-4 duration-500">
                    <ShieldAlert className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <div>
                        <p className="text-red-400 font-bold tracking-wide">CRITICAL VULNERABILITY DETECTED</p>
                        <p className="text-red-300/70 text-xs mt-1 font-mono">CVE-2025-557 • Remote Code Execution (RCE) • Payment Gateway</p>
                    </div>
                </div>
            ) 
        }]);

        // DELAY 2: ANALYSIS
        await new Promise(r => setTimeout(r, 1000)); 
        
        // STEP 2: LOGIC (Showing the mechanism)
        setHistory(prev => [...prev, { 
            type: "output", 
            content: (
                <div className="flex flex-col gap-1 text-gray-400 text-xs my-1 font-mono opacity-80 pl-6 border-l border-white/10 ml-1">
                     <div className="flex items-center gap-2">
                        <ArrowRight size={10} />
                        <span>Isolating compromised container [ID: a7f-99]...</span>
                     </div>
                     <div className="flex items-center gap-2 text-blue-400">
                        <ArrowRight size={10} />
                        <span>Generating WAF rule to block malicious payload...</span>
                     </div>
                </div>
            )
        }]);

        await new Promise(r => setTimeout(r, 1200));

        // STEP 3: RESOLUTION (The Proof)
        setHistory(prev => [...prev, { 
            type: "fix", 
            content: (
                <div className="flex flex-col gap-2 my-2 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex items-center gap-2 text-[#D33E9E]">
                        <Lock size={14} />
                        <span>Deploying NEX-Shield™ Virtual Patch...</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 font-bold bg-green-500/10 p-2 rounded w-fit px-3 border border-green-500/20">
                        <Check size={16} />
                        <span>THREAT NEUTRALIZED. Traffic Normalized.</span>
                    </div>
                    <div className="text-xs text-gray-600 pl-1">
                        Log ID: #9921 • Latency: 24ms • No downtime detected
                    </div>
                </div>
            ) 
        }]);
        setIsScanning(false);
        return;
    }

    // Fallback for unknown commands
    setHistory(prev => [...prev, { type: "output", content: `Command '${command}' not recognized. Type 'help' for valid commands.` }]);
  };

  return (
    <section className="py-24 flex justify-center px-4">
      <div className="relative w-full max-w-4xl">
        
        <div className="absolute -inset-1 bg-gradient-to-r from-[#3530BA] to-[#D33E9E] rounded-xl opacity-20 blur-xl" />

        <div className="relative bg-[#0A0A0A]/95 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md h-[450px] flex flex-col font-mono text-sm md:text-base">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02] flex-shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Terminal size={12} />
                    <span>suronex-active-defense — zsh</span>
                </div>
                <div className="w-12" /> 
            </div>

            {/* Terminal Body */}
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto scrollbar-hide">
                <div className="flex flex-col gap-2">
                    {history.map((entry, i) => (
                        <div key={i} className="break-words">
                            {entry.type === "command" && (
                                <div className="flex items-center gap-3 text-gray-300 mt-4 mb-2">
                                    <span className="text-[#D33E9E] font-bold">➜</span>
                                    <span className="text-blue-400 font-bold">~</span>
                                    <span className="opacity-90">{entry.content}</span>
                                </div>
                            )}
                            {entry.type === "output" && <div className="text-gray-400 pl-6">{entry.content}</div>}
                            {(entry.type === "threat" || entry.type === "fix") && <div className="pl-6">{entry.content}</div>}
                        </div>
                    ))}
                    
                    {isScanning && (
                         <div className="text-gray-500 pl-6 flex items-center gap-2 mt-2">
                            <Cpu size={14} className="animate-spin" />
                            <span>Processing logic...</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Input Line */}
            <form onSubmit={(e) => handleCommand(e)} className="p-4 border-t border-white/5 bg-black/20 flex items-center gap-3">
                <span className="text-[#D33E9E]">➜</span>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type 'help' for commands..."
                    className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-700"
                    disabled={isScanning}
                />
            </form>

        </div>
      </div>
    </section>
  );
}