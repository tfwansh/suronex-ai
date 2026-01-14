"use client";

import { motion } from "framer-motion";

export default function MultiCloudChallenge() {
  return (
    <section className="bg-transparent text-white py-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with SUBTLE glowing gradient like BuiltForWork */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl lg:text-8xl font-light tracking-tight leading-[1.05]">
            <span className="text-white">The Cost of </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
                Not Having
              </span>
              {/* VERY SUBTLE glow - barely visible */}
              <span 
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 blur-sm opacity-30" 
                aria-hidden="true"
              >
                Not Having
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                a Risk & Compliance Tool
              </span>
              {/* VERY SUBTLE glow - barely visible */}
              <span 
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-sm opacity-30" 
                aria-hidden="true"
              >
                a Risk & Compliance Tool
              </span>
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 font-light">
            Security gaps, manual chaos, and audit nightmares are costing you more than you think.
          </p>
        </motion.div>

        {/* Cards Grid - EXACT original layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Card 1 - Blind Spots */}
          <motion.div
            initial={{ x: typeof window !== "undefined" && window.innerWidth > 1024 ? -100 : 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative md:col-span-1 overflow-hidden rounded-xl group cursor-pointer"
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_30%,#201f3d_65%,#420935_80%)] blur-2xl group-hover:scale-110 transition-transform duration-700"
            />

            {/* Card content */}
            <motion.div 
              className="relative z-10 flex flex-col h-full justify-between p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <p className="text-sm text-gray-300 max-w-xs group-hover:text-white transition-colors duration-300">
                Fragmented visibility across AWS, Azure, GCP, and SaaS apps leaves critical risks unnoticed until they cause damage.
              </p>

              <h3 className="text-3xl sm:text-4xl font-semibold mt-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                Blind Spots in <br /> Security
              </h3>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"
                style={{
                  background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)",
                }}
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>

          {/* Card 2 - Inefficient Processes */}
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="md:col-span-2 rounded-xl bg-gradient-to-br from-violet-900 via-purple-900 to-pink-800 p-0.5 group cursor-pointer"
          >
            <motion.div 
              className="relative z-10 flex flex-col h-full justify-between p-6 rounded-xl bg-[#0a0a0a] overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl group-hover:text-white transition-colors duration-300">
                Hours wasted on spreadsheets, evidence collection, and repetitive compliance tasks drain your team's productivity.
              </p>
              
              <h3 className="text-3xl sm:text-4xl font-semibold mt-12 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                Inefficient & Manual <br /> Processes
              </h3>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)",
                }}
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>

          {/* Card 3 - Audit Delays */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="md:col-span-2 rounded-xl bg-gradient-to-br from-violet-900 via-purple-900 to-pink-800 p-0.5 group cursor-pointer"
          >
            <motion.div 
              className="relative z-10 flex flex-col h-full justify-between p-6 bg-[#0a0a0a] rounded-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl group-hover:text-white transition-colors duration-300">
                Preparing for ISO 27001, SOC 2, PCI-DSS or GDPR audits becomes painful, resource-heavy & prone to errors—leading to failed audits or costly penalties.
              </p>
              
              <h3 className="text-3xl sm:text-4xl font-semibold mt-12 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                Audit Delays & <br /> Higher Costs
              </h3>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)",
                }}
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>

          {/* Card 4 - Reactive Security */}
          <motion.div
            initial={{ x: typeof window !== "undefined" && window.innerWidth > 1024 ? 100 : 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative md:col-span-1 overflow-hidden rounded-xl group cursor-pointer"
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_30%,#201f3d_65%,#420935_80%)] blur-2xl group-hover:scale-110 transition-transform duration-700"
            />

            <motion.div 
              className="relative z-10 flex flex-col h-full justify-between p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                Without continuous monitoring, risks are detected too late, putting your business in firefighting mode after an incident.
              </p>

              <h3 className="text-3xl sm:text-4xl font-semibold mt-16 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                Reactive Security <br /> Posture
              </h3>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"
                style={{
                  background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)",
                }}
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>

          {/* Card 5 - Limited Scalability (Full width) */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="md:col-span-3 rounded-xl bg-gradient-to-br from-violet-900 via-purple-900 to-pink-800 p-0.5 group cursor-pointer"
          >
            <motion.div 
              className="relative z-10 flex flex-col h-full justify-between p-6 bg-[#0a0a0a] rounded-xl overflow-hidden"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <p className="text-base sm:text-lg text-neutral-300 max-w-3xl group-hover:text-white transition-colors duration-300">
                As your cloud footprint grows, manual methods can't keep pace with evolving compliance and regulatory demands.
              </p>
              
              <h3 className="text-3xl sm:text-4xl font-semibold mt-12 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                Limited Scalability
              </h3>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)",
                }}
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

