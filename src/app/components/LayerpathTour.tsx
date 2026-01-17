// src/app/components/LayerpathTour.tsx
"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef, MouseEvent } from "react"

interface LayerpathTourProps {
  tourId?: string
  embedUrl?: string
  title?: string
  description?: string
  className?: string
  compact?: boolean // For smaller variant
}

export default function LayerpathTour({ 
  tourId = "cmki0mxkl0003jj04zahxx1g2",
  embedUrl,
  title,
  description,
  className = "",
  compact = false
}: LayerpathTourProps) {
  const iframeSrc = embedUrl || `https://share.layerpath.com/e/${tourId}/tour`
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // 3D Tilt effect values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300)
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Optional Header */}
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-6"
        >
          {title && (
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-400 text-xs md:text-sm">
              {description}
            </p>
          )}
        </motion.div>
      )}

      {/* 3D Tilt Container */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`relative group cursor-pointer ${
          compact ? "max-w-4xl" : "max-w-5xl"
        } mx-auto`}
      >
        {/* Animated Glow on Click */}
        <motion.div
          animate={{
            opacity: isClicked ? [0.3, 0.6, 0.3] : 0.3,
            scale: isClicked ? [1, 1.05, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-1 bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] rounded-xl md:rounded-2xl blur-xl group-hover:opacity-50 transition-opacity duration-500"
        />
        
        {/* Main Container with 3D depth */}
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(50px)",
          }}
          className="relative bg-black/60 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Compact or Full Size */}
          <div style={{ 
            position: "relative", 
            paddingBottom: compact ? "45%" : "56.25%", // 16:9 normal, more compact option
            height: 0, 
            width: "100%" 
          }}>
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0
              }}
              src={iframeSrc}
              allowFullScreen
              // @ts-ignore
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowTransparency={true}
              title={title || "Interactive Product Tour"}
              loading="lazy"
              className="rounded-lg md:rounded-xl"
            />
          </div>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 pointer-events-none"
            style={{
              transform: "translateZ(75px)",
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* 3D Bottom Shadow */}
        <motion.div
          style={{
            transform: "translateZ(-50px)",
          }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-[#D33E9E]/20 blur-2xl rounded-full"
        />
      </motion.div>

      {/* Mobile hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="text-center text-xs text-white/40 mt-4 md:hidden"
      >
        Tap to interact • Pinch to zoom
      </motion.p>
    </div>
  )
}

