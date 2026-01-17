// src/app/contact/components/ContactForm.tsx
"use client"

import { motion } from "framer-motion"

export default function ContactForm() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-3xl blur-2xl" />

      <div className="relative h-full rounded-2xl sm:rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 lg:p-8 border-b border-white/10">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl font-bold text-white"
          >
            Send A Message
          </motion.h3>
        </div>

        {/* Iframe Container - Flex Grow */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <iframe
            src="https://41s1ne.share-na2.hsforms.com/2cdpGKGYxRuCahGRUZqL5DQ"
            width="100%"
            height="900"
            frameBorder="0"
            scrolling="no"
            className="w-full min-h-[900px]"
            title="Contact Form"
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <p className="text-center text-xs text-gray-500">
            🔒 Secure submission • We'll respond within 24 hours
          </p>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(211, 62, 158, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(211, 62, 158, 0.7);
        }
      `}</style>
    </div>
  )
}

