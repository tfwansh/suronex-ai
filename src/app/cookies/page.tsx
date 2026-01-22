'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Cookie, Calendar, Mail, Shield, ChevronRight, ExternalLink, FileText } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import { Footer } from '@/app/components/footer'

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute('id') || ''
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-hidden font-light">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      <Navbar />

      <div className="relative pt-32 pb-20 px-6">
        <HeroSection />

        <div className="max-w-7xl mx-auto">
          <div className="flex gap-12 relative">
            {/* Sticky Table of Contents */}
            <TableOfContents activeSection={activeSection} scrollToSection={scrollToSection} />

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <IntroSection />
              <MetadataSection />
              <WhatAreCookiesSection />
              <HowWeUseCookiesSection />
              <TypesOfCookiesSection />
              <CookieDurationSection />
              <ThirdPartySection />
              <YourChoicesSection />
              <DoNotTrackSection />
              <UpdatesSection />
              <ContactSection />
              <ResourcesSection />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

/* ============================================
   HERO SECTION
   ============================================ */
function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto mb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
          <Cookie className="w-3.5 h-3.5 text-white" />
          <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">Legal</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
            Cookie Policy
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Learn how Suronex uses cookies and similar technologies to enhance your experience.
        </p>
      </motion.div>
    </div>
  )
}

/* ============================================
   TABLE OF CONTENTS
   ============================================ */
function TableOfContents({ activeSection, scrollToSection }: any) {
  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'metadata', label: 'Version & Dates' },
    { id: 'what-are-cookies', label: 'What Are Cookies?' },
    { id: 'how-we-use', label: 'How We Use Cookies' },
    { id: 'types', label: 'Types of Cookies' },
    { id: 'duration', label: 'Cookie Duration' },
    { id: 'third-party', label: 'Third-Party Cookies' },
    { id: 'your-choices', label: 'Your Choices & Rights' },
    { id: 'do-not-track', label: 'Do Not Track' },
    { id: 'updates', label: 'Policy Updates' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'resources', label: 'Additional Resources' }
  ]

  return (
    <div className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-32">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Table of Contents
        </h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-2 text-sm w-full text-left px-3 py-2 rounded-lg transition-all ${activeSection === section.id
                ? 'bg-white/5 text-white font-medium border-l-2 border-white'
                : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                }`}
            >
              <ChevronRight className={`w-3 h-3 transition-transform ${activeSection === section.id ? 'translate-x-0.5' : ''
                }`} />
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

/* ============================================
   INTRO SECTION
   ============================================ */
function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="intro" ref={ref} className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-300 leading-relaxed text-justify mb-4">
          <span className="text-white font-medium">SURONEX CLOUDSAFE PRIVATE LIMITED</span>, including its affiliates and subsidiaries
          (collectively referred to as "Suronex," "we," "us," or "our"), is committed to protecting your privacy and providing
          transparency about our data collection practices.
        </p>
        <p className="text-gray-300 leading-relaxed text-justify mb-4">
          This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our website{' '}
          <a href="https://www.suronex.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
            www.suronex.ai
          </a>
          {' '}and use our cloud security platform.
        </p>
        <p className="text-gray-300 leading-relaxed text-justify">
          This policy should be read in conjunction with our Privacy Policy, which provides additional information about how we
          collect, use, and protect your personal information.
        </p>
      </motion.div>
    </section>
  )
}

/* ============================================
   METADATA SECTION
   ============================================ */
function MetadataSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="metadata" ref={ref} className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-white" />
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Version</h3>
            </div>
            <p className="text-xl font-bold text-white">V. 1.0</p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-white" />
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Effective Date</h3>
            </div>
            <p className="text-xl font-bold text-white">1st July 2025</p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-white" />
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Last Updated</h3>
            </div>
            <p className="text-xl font-bold text-white">1st July 2025</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* ============================================
   SECTION COMPONENT
   ============================================ */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id={id} ref={ref} className="mb-16 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
          {title}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </section>
  )
}

/* ============================================
   WHAT ARE COOKIES SECTION
   ============================================ */
function WhatAreCookiesSection() {
  return (
    <Section id="what-are-cookies" title="What Are Cookies?">
      <p className="text-justify">
        Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website.
        They contain information that is transferred to your device's hard drive and allow websites to recognize your device
        and store information about your preferences or past actions.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Similar Technologies</h3>
        <p className="mb-4 text-justify">In addition to cookies, we may use other tracking technologies including:</p>
        <ul className="list-none space-y-3 ml-0">
          {[
            'Web beacons/pixels: Small graphics that track user interactions',
            'Local storage: Data stored in your browser for enhanced functionality',
            'Session storage: Temporary data storage during your browsing session',
            'Software Development Kits (SDKs): Code that enables analytics and functionality'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ============================================
   HOW WE USE COOKIES SECTION
   ============================================ */
function HowWeUseCookiesSection() {
  const purposes = [
    'Ensure website security and protect against cyber threats and fraudulent activities',
    'Provide essential functionality for our cloud security platform and website',
    'Improve user experience through personalized content and preferences',
    'Analyze website performance and understand user behavior patterns',
    'Deliver relevant content and measure the effectiveness of our communications',
    'Facilitate authentication and maintain secure user sessions',
    'Remember your preferences such as language settings and display options'
  ]

  return (
    <Section id="how-we-use" title="How We Use Cookies">
      <p className="mb-4 text-justify">We use cookies and similar technologies to:</p>
      <div className="grid md:grid-cols-2 gap-4">
        {purposes.map((purpose, i) => (
          <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5 hover:border-[#D33E9E]/20 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span className="text-sm">{purpose}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ============================================
   TYPES OF COOKIES SECTION
   ============================================ */
function TypesOfCookiesSection() {
  return (
    <Section id="types" title="Types of Cookies We Use">
      {/* Essential Cookies */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Essential Cookies (Always Active)</h3>
        <p className="mb-4 text-justify">
          These cookies are strictly necessary for the website and platform to function properly. They cannot be disabled
          without affecting core functionality.
        </p>
        <div>
          <p className="font-semibold text-white mb-2">Purpose:</p>
          <ul className="list-none space-y-2 ml-0">
            {[
              'User authentication and session management',
              'Security features and fraud prevention',
              'Load balancing and website stability',
              'Basic functionality and navigation',
              'Legal compliance (e.g., cookie consent tracking)'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm italic">Legal Basis: Legitimate interest (essential for service provision)</p>
        </div>
      </div>

      {/* Analytical Cookies */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Analytical Cookies</h3>
        <p className="mb-4 text-justify">
          These cookies help us understand how visitors interact with our website and platform, allowing us to improve our services.
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-white mb-2">Examples:</p>
            <ul className="list-none space-y-2 ml-0">
              {['Google Analytics', 'Internal analytics tools', 'Heatmap and user behavior tracking'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Information Collected:</p>
            <ul className="list-none space-y-2 ml-0">
              {[
                'Pages visited and time spent',
                'Traffic sources and referral paths',
                'Device and browser information',
                'User interaction patterns'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm italic">Legal Basis: Legitimate interest / Consent (where required)</p>
        </div>
      </div>

      {/* Functional Cookies */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Functional Cookies</h3>
        <p className="mb-4 text-justify">These cookies enable enhanced functionality and personalization features.</p>
        <div>
          <p className="font-semibold text-white mb-2">Purpose:</p>
          <ul className="list-none space-y-2 ml-0">
            {[
              'Language and region preferences',
              'User interface customizations',
              'Feature preferences and settings',
              'Accessibility accommodations'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm italic">Legal Basis: Legitimate interest / Consent</p>
        </div>
      </div>

      {/* Marketing Cookies */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Marketing and Advertising Cookies</h3>
        <p className="mb-4 text-justify">
          These cookies are used to deliver relevant advertisements and measure marketing campaign effectiveness.
        </p>
        <div>
          <p className="font-semibold text-white mb-2">Purpose:</p>
          <ul className="list-none space-y-2 ml-0">
            {[
              'Targeted advertising delivery',
              'Conversion tracking and attribution',
              'Marketing campaign performance measurement',
              'Retargeting and remarketing activities'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm italic">Legal Basis: Consent (required in most jurisdictions)</p>
        </div>
      </div>
    </Section>
  )
}

/* ============================================
   COOKIE DURATION SECTION
   ============================================ */
function CookieDurationSection() {
  return (
    <Section id="duration" title="Duration of Cookies">
      <div className="space-y-6">
        <div className="p-5 rounded-lg bg-white/[0.01] border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-3">Session Cookies</h3>
          <p className="text-justify">
            Temporary cookies that are deleted when you close your browser. Used for essential functions like maintaining your login session.
          </p>
        </div>

        <div className="p-5 rounded-lg bg-white/[0.01] border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-3">Persistent Cookies</h3>
          <p className="mb-4 text-justify">
            Stored on your device for a specified period, ranging from hours to years, depending on their purpose:
          </p>
          <ul className="list-none space-y-2 ml-0">
            {[
              'Essential cookies: Up to 1 year',
              'Analytical cookies: Up to 2 years',
              'Functional cookies: Up to 1 year',
              'Marketing cookies: Up to 13 months'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

/* ============================================
   THIRD PARTY SECTION
   ============================================ */
function ThirdPartySection() {
  const services = [
    'Google Analytics: Website traffic analysis and user behavior insights',
    'Cloud Service Providers: Infrastructure and security services',
    'Marketing Platforms: Advertising delivery and campaign management',
    'Customer Support Tools: Chat widgets and support functionality',
    'Security Services: Threat detection and prevention tools'
  ]

  return (
    <Section id="third-party" title="Third-Party Cookies">
      <p className="text-justify">
        We work with trusted third-party service providers who may place cookies on your device to help us deliver and improve our services.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Third-Party Services Include:</h3>
        <div className="space-y-3">
          {services.map((service, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5 hover:border-[#8B4FB8]/20 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>{service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-3">Third-Party Privacy Policies</h3>
        <p className="mb-4">Each third-party service has its own privacy policy governing their use of cookies:</p>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Google Privacy Policy
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">International Data Transfers</h3>
        <p className="mb-4 text-justify">
          Some of our third-party services may transfer your data internationally. We ensure appropriate safeguards are in place
          for such transfers, including:
        </p>
        <ul className="list-none space-y-2 ml-0">
          {[
            'Standard Contractual Clauses (SCCs)',
            'Adequacy decisions',
            'Other approved transfer mechanisms'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ============================================
   YOUR CHOICES SECTION
   ============================================ */
function YourChoicesSection() {
  const browsers = [
    { name: 'Chrome', url: 'https://www.google.com/chrome/' },
    { name: 'Firefox', url: 'https://www.firefox.com/' },
    { name: 'Safari', url: 'https://www.apple.com/safari/' },
    { name: 'Edge', url: 'https://www.microsoft.com/edge/' }
  ]

  const impacts = [
    'Essential cookies: Website may not function properly',
    'Analytical cookies: We cannot improve our services based on usage data',
    'Functional cookies: Personalization features may not work',
    'Marketing cookies: You may see less relevant advertisements'
  ]

  return (
    <Section id="your-choices" title="Your Cookie Choices and Rights">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Managing Cookie Preferences</h3>
        <p className="text-justify mb-4">You have several options to control cookies:</p>
      </div>

      <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-3">Browser Settings</h4>
        <p className="mb-4 text-justify">All modern browsers allow you to:</p>
        <ul className="list-none space-y-2 ml-0 mb-6">
          {[
            'View cookies stored on your device',
            'Delete existing cookies',
            'Block future cookies',
            'Set preferences for specific websites'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="font-semibold text-white mb-3">Browser Help Pages:</p>
        <div className="flex flex-wrap gap-3">
          {browsers.map((browser) => (
            <a
              key={browser.name}
              href={browser.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm"
            >
              {browser.name}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <h4 className="text-lg font-semibold text-white mb-3">Our Cookie Consent Tool</h4>
        <p className="mb-4 text-justify">When you first visit our website, you can:</p>
        <ul className="list-none space-y-2 ml-0">
          {[
            'Accept all cookies',
            'Reject non-essential cookies',
            'Customize your preferences by category',
            'Access our cookie settings at any time'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Impact of Disabling Cookies</h3>
        <p className="mb-4 text-justify">Disabling certain cookies may affect your website experience:</p>
        <div className="space-y-3">
          {impacts.map((impact, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                <span>{impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Your Rights Under Privacy Laws</h3>
        <p className="mb-4 text-justify">Depending on your location, you may have additional rights:</p>
        <ul className="list-none space-y-2 ml-0">
          {[
            'Right to withdraw consent for non-essential cookies',
            'Right to access information about cookies we use',
            'Right to object to certain cookie uses',
            'Right to data portability for cookie-related data'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ============================================
   DO NOT TRACK SECTION
   ============================================ */
function DoNotTrackSection() {
  return (
    <Section id="do-not-track" title="Do Not Track Signals">
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="text-justify">
          Currently, our website does not respond to "Do Not Track" browser signals, as there is no universal standard for
          how to interpret these signals. However, you can use our cookie preference center and browser settings to control tracking.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   UPDATES SECTION
   ============================================ */
function UpdatesSection() {
  return (
    <Section id="updates" title="Updates to This Cookie Policy">
      <p className="text-justify mb-4">We may update this Cookie Policy periodically to reflect:</p>
      <ul className="list-none space-y-3 ml-0 mb-6">
        {[
          'Changes in our cookie practices',
          'New technologies or services',
          'Legal or regulatory requirements',
          'Business developments'
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mb-4 text-justify">When we make material changes, we will:</p>
      <ul className="list-none space-y-3 ml-0">
        {[
          'Update the "Last Updated" date',
          'Notify you through our website or email',
          'Provide prominent notice of significant changes',
          'Request renewed consent where required'
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

/* ============================================
   CONTACT SECTION
   ============================================ */
function ContactSection() {
  return (
    <Section id="contact" title="Contact Information">
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-gray-300 mb-6 text-justify">
          If you have questions about our use of cookies or this Cookie Policy, please contact us:
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-white font-semibold text-lg mb-2">SURONEX CLOUDSAFE PRIVATE LIMITED</p>
            <p className="text-gray-300">SF, Second Floor, Wadhwa Plaza, Sector-6 Dwarka</p>
            <p className="text-gray-300">New Delhi 110075, India</p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <a
              href="mailto:contact@suronex.ai"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>contact@suronex.ai</span>
            </a>
            <a
              href="mailto:privacy@suronex.ai"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Shield className="w-5 h-5" />
              <span>privacy@suronex.ai (Cookie-specific inquiries)</span>
            </a>
          </div>

          <div className="pt-4">
            <p className="text-gray-400 text-sm mb-2">Website:</p>
            <a
              href="https://www.suronex.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              https://www.suronex.ai
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-white font-semibold mb-2">Data Protection Officer</p>
            <a
              href="mailto:privacy@suronex.ai"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              privacy@suronex.ai
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ============================================
   RESOURCES SECTION
   ============================================ */
function ResourcesSection() {
  const resources = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Use', url: '/terms' }
  ]

  return (
    <Section id="resources" title="Additional Resources">
      <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <p className="text-gray-300 mb-4">Learn more about our data practices:</p>
        <div className="flex flex-col gap-3">
          {resources.map((resource) => (
            <Link
              key={resource.url}
              href={resource.url}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              {resource.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#D33E9E]/10 to-[#3530BA]/10 border border-white/10">
        <p className="text-sm text-gray-300 italic text-justify">
          By continuing to use our website, you acknowledge that you have read and understood this Cookie Policy and agree to
          our use of cookies as described herein.
        </p>
      </div>
    </Section>
  )
}
