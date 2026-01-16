// src/app/contact/components/ContactForm.tsx
"use client"

import { motion } from "framer-motion"
import { useState, FormEvent } from "react"
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const formDataToSend = new FormData(e.currentTarget)
    formDataToSend.append("access_key", "ed6de2e2-0bfb-4fc6-9a18-53b2cbbf81fd")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 4000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 to-[#3530BA]/5 rounded-3xl blur-2xl" />

      <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 overflow-y-auto custom-scrollbar">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send A Message</h3>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Name */}
          <div className="group">
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="john@company.com"
            />
          </div>

          {/* Mobile */}
          <div className="group">
            <label htmlFor="mobile" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
              Mobile *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Subject */}
          <div className="group">
            <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
              placeholder="How can we help?"
            />
          </div>

          {/* Message */}
          <div className="group">
            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
              Type your message / question
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              disabled={status === "loading"}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-[#D33E9E]/50 focus:ring-2 focus:ring-[#D33E9E]/20 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50"
              placeholder="Tell us more about your needs..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={status === "idle" ? { scale: 1.01 } : {}}
            whileTap={status === "idle" ? { scale: 0.99 } : {}}
            className={`
              w-full py-3 sm:py-4 rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2
              ${status === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-400"
                : status === "error"
                ? "bg-red-500/20 border border-red-500/50 text-red-400"
                : "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] hover:shadow-lg hover:shadow-[#D33E9E]/25"
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {status === "loading" && (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Message Sent!</span>
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle className="w-5 h-5" />
                <span>Failed. Try Again</span>
              </>
            )}
            {status === "idle" && (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>

          {/* Success/Error Messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-3"
            >
              ✓ Thank you! We'll get back to you soon.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3"
            >
              ✗ Something went wrong. Please try again.
            </motion.div>
          )}
        </form>

        {/* Footer info */}
        <p className="text-center text-xs text-gray-500 mt-6 pt-4 border-t border-white/10">
          🔒 Secure submission • We'll respond within 24 hours
        </p>
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

