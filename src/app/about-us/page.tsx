// app/about-us/page.tsx
"use client"

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Shield, Target, Heart, ArrowRight, Globe, Check, Sparkles, Lock, Zap, Linkedin } from "lucide-react"
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="relative bg-black text-white font-light overflow-x-hidden w-full">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10 pointer-events-none" />
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <CompactStorySection />
        <ContainedTeamSection />
        <AdvisorsSection />
        <RefinedMissionVisionValues />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 ring-1 ring-white/5 mx-auto"
        >
          <Globe className="w-3.5 h-3.5 text-[#D33E9E]" />
          <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">About Suronex</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 sm:mb-8"
        >
          Securing the{" "}
          <span className="block mt-2 sm:mt-4">
            <span className="relative inline-block">
              Cloud
              <motion.div
                className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] blur-2xl sm:blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </span>{" "}
          <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
            Revolution
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4 font-light"
        >
          Two decades of expertise. One mission: <br className="hidden sm:block" />
          Empowering organizations to innovate fearlessly in the cloud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gradient-to-b from-[#D33E9E] to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function PremiumStoryCard({ story, index }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)
  const Icon = story.icon
  const parts = story.text.split(story.highlight)
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
        {/* Image Side - CLEAN NO BLUR */}
        <motion.div
          className={`relative h-[180px] md:h-[220px] rounded-3xl overflow-hidden group ${!isEven ? 'md:col-start-2' : ''}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={story.image}
            alt=""
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Clean Gradient Overlay - No blur */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Floating Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center shadow-2xl z-20"
          >
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </motion.div>

          {/* Premium Animated Border on Hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: '2px',
              background: 'linear-gradient(45deg, #D33E9E, #8B4FB8, #3530BA, #D33E9E)',
              backgroundSize: '300% 300%',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: isHovered ? 'gradientShift 3s linear infinite' : 'none'
            }}
          />
        </motion.div>

        {/* Content Side */}
        <motion.div
          className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 group">
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/5 to-[#3530BA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
            />

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              {parts[0]}
              <span className="relative inline-block mx-1">
                <motion.span
                  className="relative z-10 font-semibold text-white"
                  style={{
                    textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(211,62,158,0.3)"
                  }}
                >
                  {story.highlight}
                </motion.span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-[#D33E9E]/20 via-[#8B4FB8]/20 to-[#3530BA]/20 -skew-x-12 blur-sm rounded"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{ transformOrigin: "center" }}
                />
              </span>
              {parts[1]}
            </p>

            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D33E9E] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Connecting Line */}
      {index < 3 && (
        <motion.div
          className="hidden md:block absolute left-1/2 -bottom-12 w-[2px] h-12 bg-gradient-to-b from-[#D33E9E]/50 via-[#8B4FB8]/30 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ transformOrigin: 'top' }}
        />
      )}
    </motion.div>
  )
}

/* Updated Closing Statement with PURPLE GRADIENTS */
function CompactStorySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const stories = [
    {
      text: "Our journey began with a simple yet powerful question — how can organizations truly feel secure in the cloud?",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
      highlight: "truly feel secure",
      icon: Shield,
    },
    {
      text: "As digital transformation accelerated, we noticed a growing gap between innovation and security. Businesses were adopting the cloud to move faster, scale smarter, and innovate more — but in that race, many found security trailing behind.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      highlight: "gap between innovation and security",
      icon: Target,
    },
    {
      text: "We are a team of deeply passionate professionals with an average of over two decades of experience in Information Security, Cloud Security, and Cybersecurity.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
      highlight: "two decades of experience",
      icon: Globe,
    },
    {
      text: "With that expertise, we set out to build something different — a platform that doesn't just monitor risks, but truly empowers organizations to manage and mitigate them effortlessly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      highlight: "truly empowers organizations",
      icon: Sparkles,
    },
  ]

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0014] to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extralight mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
              Story
            </span>
          </h2>
        </motion.div>

        {/* Premium Cards Grid */}
        <div className="space-y-24">
          {stories.map((story, index) => (
            <PremiumStoryCard key={index} story={story} index={index} />
          ))}
        </div>

        {/* Headquarters Section - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="relative h-[450px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&q=80"
              alt="Global Headquarters"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={false}
            />

            {/* Stronger overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />

            {/* Floating Icon */}
            <motion.div
              className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#D33E9E] to-[#3530BA] flex items-center justify-center shadow-2xl z-20"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>

            {/* Content - Better spacing and sizing */}
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-16">
              <div className="text-center max-w-4xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white"
                  style={{
                    textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)"
                  }}
                >
                  <span className="relative inline-block">
                    {/* Clean text with strong shadow for contrast */}
                    <span
                      className="relative z-10 font-bold bg-gradient-to-r from-[#F472B6] via-[#C084FC] to-[#818CF8] text-transparent bg-clip-text"
                      style={{
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 2px 10px rgba(211, 62, 158, 0.5))',
                      }}
                    >
                      Suronex
                    </span>
                  </span>


                  {" "}is headquartered in{" "}
                  <span className="relative inline-block mx-1">
                    <motion.span
                      className="relative z-10 font-semibold text-white"
                      style={{
                        textShadow: "0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(211,62,158,0.4)"
                      }}
                    >
                      New Delhi, India
                    </motion.span>
                    <motion.span
                      className="absolute -inset-2 bg-white/15 -skew-x-12 blur-sm rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      style={{ transformOrigin: "center" }}
                    />
                  </span>
                  , with a corporate office in Gurgaon, Haryana, and our diverse, talented team is spread across{" "}
                  <span className="relative inline-block mx-1">
                    <motion.span
                      className="relative z-10 font-semibold text-white"
                      style={{
                        textShadow: "0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(53,48,186,0.4)"
                      }}
                    >
                      India and the Philippines
                    </motion.span>
                    <motion.span
                      className="absolute -inset-2 bg-white/15 -skew-x-12 blur-sm rounded"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      style={{ transformOrigin: "center" }}
                    />
                  </span>
                  .
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Closing Statement - CLEAN GLASSY VERSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center max-w-5xl mx-auto"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8">
            Today, our platform delivers{" "}
            <span className="relative inline-block mx-1">
              <motion.span
                className="relative z-10 font-semibold bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text"
              >
                complete visibility, control, and confidence
              </motion.span>
              {/* Clean underline */}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ transformOrigin: "center" }}
              />
              {/* Glassy background */}
              <motion.span
                className="absolute -inset-2 bg-gradient-to-r from-[#D33E9E]/10 via-[#8B4FB8]/10 to-[#3530BA]/10 backdrop-blur-sm rounded-lg -z-10 border border-white/5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </span>
            {" "}across your cloud environments.
          </p>
          <p className="text-xl text-gray-400 font-light">
            Because for us, security isn't just about protection — it's about{" "}
            <span className="text-[#D33E9E] font-medium">empowering progress</span>.
          </p>
        </motion.div>

      </div >

      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section >
  )
}


function ContainedTeamSection() {
  const team = [
    {
      name: "Manish K Saini",
      role: "Founder & CEO",
      bio: "detailed Bio",
      image: "/Team/manish.png",
      linkedin: "https://linkedin.com/in/manishksaini"
    },
    {
      name: "Prashant Mavinkurve",
      role: "Co-Founder & CTO",
      bio: "detailed Bio",
      image: "/Team/prashant.png",
      linkedin: "https://www.linkedin.com/in/iwebmarketing/"
    },
    {
      name: "Aditi Verma",
      role: "Chief Product Officer",
      bio: "detailed Bio",
      image: "/Team/aditiverma.png",
      linkedin: "https://linkedin.com/in/aditiiverma"
    },
    {
      name: "Raian Mondelo",
      role: "AI Innovation Lead",
      bio: "detailed Bio",
      image: "/Team/raimondelo.jpg",
      linkedin: "https://www.linkedin.com/in/raian-mondelo/"
    },
    {
      name: "Manan Tyagi",
      role: "Engineering Lead",
      bio: "detailed Bio",
      image: "/Team/manantyagi.jpg",
      linkedin: "https://www.linkedin.com/in/manan-t-b43bbb395/"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-16 text-center"
        >
          Meet the{" "}
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
            Visionaries
          </span>
        </motion.h2>

        {/* Desktop/Tablet Grid Layout - 3 top, 2 bottom */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {team.slice(0, 3).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {team.slice(3, 5).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="sm:hidden space-y-6">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, index }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative select-none group"
    >
      <div className="relative overflow-hidden rounded-3xl h-[420px] sm:h-[450px] md:h-[480px] bg-zinc-900">
        <motion.div
          className="absolute inset-0 rounded-3xl z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D33E9E" />
                <stop offset="50%" stopColor="#8B4FB8" />
                <stop offset="100%" stopColor="#3530BA" />
              </linearGradient>
            </defs>
            <motion.rect
              x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="20"
              fill="none" stroke={`url(#gradient-${index})`} strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ pathLength: { duration: 1, ease: "easeInOut" }, opacity: { duration: 0.3 } }}
            />
          </svg>
          <motion.div
            className="absolute inset-0 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ boxShadow: '0 0 20px rgba(211, 62, 158, 0.4), 0 0 40px rgba(139, 79, 184, 0.3)' }}
          />
        </motion.div>

        <Image src={member.image} alt={member.name} fill className="object-cover object-center" style={{ objectPosition: 'center 20%' }} />

        <a
          href={member.linkedin} target="_blank" rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0077B5] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <h3 className="text-2xl md:text-3xl font-light mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">{member.name}</h3>
          <p className="text-[#FF4DB8] font-normal text-lg drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">{member.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

function AdvisorsSection() {
  const advisors = [
    {
      name: "Anand Aggarwal",
      role: "Advisory Board",
      image: "/Team/anandaggarwal.jpeg",
      linkedin: "https://www.linkedin.com/in/anand-aggarwal/"
    },
    {
      name: "T R Rajesh",
      role: "Advisory Board",
      image: "/Team/trrajesh.jpg",
      linkedin: "https://www.linkedin.com/in/rajeshtr/"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-16 text-center"
        >
          Advisory{" "}
          <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
            Board
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <AdvisorCard key={advisor.name} advisor={advisor} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvisorCard({ advisor, index }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative select-none group"
    >
      <div className="relative overflow-hidden rounded-3xl h-[450px] bg-zinc-900">
        <motion.div
          className="absolute inset-0 rounded-3xl z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`advisor-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D33E9E" />
                <stop offset="50%" stopColor="#8B4FB8" />
                <stop offset="100%" stopColor="#3530BA" />
              </linearGradient>
            </defs>
            <motion.rect
              x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="20"
              fill="none" stroke={`url(#advisor-gradient-${index})`} strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ pathLength: { duration: 1, ease: "easeInOut" }, opacity: { duration: 0.3 } }}
            />
          </svg>
          <motion.div
            className="absolute inset-0 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ boxShadow: '0 0 20px rgba(211, 62, 158, 0.4), 0 0 40px rgba(139, 79, 184, 0.3)' }}
          />
        </motion.div>

        <Image src={advisor.image} alt={advisor.name} fill className="object-cover object-center" style={{ objectPosition: 'center 20%' }} />

        <a
          href={advisor.linkedin} target="_blank" rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0077B5] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <h3 className="text-2xl md:text-3xl font-light mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">{advisor.name}</h3>
        </div>
      </div>
    </motion.div>
  )
}

function RefinedMissionVisionValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/10 via-[#8B4FB8]/5 to-[#3530BA]/10" />

      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#D33E9E]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#3530BA]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-4">
            What Drives{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Us
            </span>
          </h2>
        </motion.div>

        <SophisticatedPrinciple
          label="Mission"
          title="Empowering secure innovation"
          content="Our Mission is to empower organizations to securely innovate and operate in the cloud by providing comprehensive solutions for compliance, security and governance. We enable proactive risk management, ensure regulatory adherence, and safeguard critical data through automated controls, continuous monitoring, and actionable insights, fostering trust, resilience, and sustainable growth."
          highlights={["empower organizations", "securely innovate and operate", "proactive risk management", "automated controls", "continuous monitoring"]}
          index={0}
          gradient="from-[#D33E9E] to-[#3530BA]"
        />

        <SophisticatedPrinciple
          label="Vision"
          title="Leading cloud security excellence"
          content="Our vision is to be the leading catalyst in securing cloud environments and driving regulatory excellence, empowering organizations worldwide to confidently embrace digital transformation. We envision a future where security, compliance, and governance are seamlessly integrated into every cloud operation—enabling innovation without compromise."
          highlights={["leading catalyst", "securing cloud environments", "regulatory excellence", "seamlessly integrated", "innovation without compromise"]}
          index={1}
          gradient="from-[#8B4FB8] to-[#3530BA]"
        />

        <SophisticatedPrinciple
          label="Values"
          title="Integrity, Authenticity, Honesty"
          content="At Suronex, we are committed to Integrity, Authenticity, and Honesty in delivering secure and compliant solutions. By emphasizing clear communication and a strong sense of responsibility, we safeguard digital assets and build lasting trust with every client interaction."
          highlights={["Integrity, Authenticity, and Honesty", "clear communication", "safeguard digital assets", "lasting trust"]}
          index={2}
          gradient="from-[#5049B8] to-[#3530BA]"
        />
      </div>
    </section>
  )
}

function SophisticatedPrinciple({ label, title, content, highlights, index, gradient }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [isHovered, setIsHovered] = useState(false)
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null)

  const renderContent = () => {
    let remainingContent = content
    const segments: any[] = []

    highlights.forEach((highlight: string) => {
      const index = remainingContent.toLowerCase().indexOf(highlight.toLowerCase())
      if (index !== -1) {
        if (index > 0) {
          segments.push({ type: 'text', content: remainingContent.substring(0, index) })
        }
        segments.push({ type: 'highlight', content: remainingContent.substring(index, index + highlight.length), key: highlight })
        remainingContent = remainingContent.substring(index + highlight.length)
      }
    })
    if (remainingContent) {
      segments.push({ type: 'text', content: remainingContent })
    }
    return segments
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mb-16 last:mb-0 border-l-2 border-white/10 pl-8 md:pl-12 relative cursor-default max-w-5xl mx-auto"
    >
      <motion.div
        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${gradient} origin-top`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="mb-4 overflow-hidden">
        <motion.span
          className="text-sm font-light text-gray-500 uppercase tracking-[0.3em] inline-block"
          animate={{ letterSpacing: isHovered ? "0.35em" : "0.3em", color: isHovered ? "rgb(156, 163, 175)" : "rgb(107, 114, 128)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {label}
        </motion.span>
      </div>

      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight mb-6 text-white relative overflow-hidden tracking-tight leading-tight">
        <motion.span
          className="inline-block"
          animate={{ letterSpacing: isHovered ? "0.01em" : "0em" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.span>
        <motion.span
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 blur-xl pointer-events-none`}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </h3>

      <motion.div
        className="text-lg md:text-xl leading-relaxed text-gray-400 font-light max-w-4xl"
        animate={{ color: isHovered ? "rgb(229, 231, 235)" : "rgb(156, 163, 175)" }}
        transition={{ duration: 0.3 }}
      >
        <p>
          {renderContent().map((segment: any, i: number) => {
            if (segment.type === 'highlight') {
              return (
                <motion.span
                  key={i}
                  onMouseEnter={() => setActiveHighlight(segment.key)}
                  onMouseLeave={() => setActiveHighlight(null)}
                  className="relative inline-block cursor-default mx-0.5"
                >
                  <motion.span
                    className="relative z-10 font-normal"
                    animate={{ color: activeHighlight === segment.key ? "#ffffff" : "inherit" }}
                    transition={{ duration: 0.2 }}
                  >
                    {segment.content}
                  </motion.span>
                  <motion.span
                    className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeHighlight === segment.key ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.span>
              )
            }
            return <span key={i}>{segment.content}</span>
          })}
        </p>
      </motion.div>

      <div className="mt-6 h-px bg-white/5 relative overflow-hidden">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-50`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0, opacity: isHovered ? 1 : 0.3 }}
          transition={{ scaleX: { delay: index * 0.1 + 0.2, duration: 0.6 }, opacity: { duration: 0.3 } }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-20 h-20 mx-auto mb-8 text-[#D33E9E]" />

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Get Started?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
            Suronex provides customised solutions to safeguard your data, ensuring compliance, protection, and peace of mind. Take control of your security today!
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-full text-base font-normal hover:shadow-[0_0_40px_rgba(211,62,158,0.5)] transition-all"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#D33E9E]/20 to-[#3530BA]/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
