// src/app/contact/components/BookingSection.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Calendar, MessageSquare } from "lucide-react"
import ContactForm from "./ContactForm"
import CalendarBooking from "./CalendarBooking"

type TabType = "demo" | "contact"

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState<TabType>("demo")

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative h-full flex flex-col"
    >
      {/* Tab Switcher */}
      <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 shrink-0">
        <motion.button
          onClick={() => setActiveTab("demo")}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className={`
            flex-1 relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm transition-all duration-300
            ${activeTab === "demo"
              ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-[0_0_20px_rgba(211,62,158,0.3)] border border-transparent"
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-white"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Book Demo</span>
          </div>
        </motion.button>

        <motion.button
          onClick={() => setActiveTab("contact")}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className={`
            flex-1 relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm transition-all duration-300
            ${activeTab === "contact"
              ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-[0_0_20px_rgba(211,62,158,0.3)] border border-transparent"
              : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-white"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Contact Us</span>
          </div>
        </motion.button>
      </div>

      {/* Content Area */}
      <div className="relative flex-1 min-h-[520px] md:min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "demo" ? (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <CalendarBooking />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  )
}

