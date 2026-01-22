'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Shield, Calendar, Mail, ChevronRight, ExternalLink, FileText, Lock, Eye, Users, Globe } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import { Footer } from '@/app/components/footer'

export default function PrivacyPolicyPage() {
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
              <InformationCollectedSection />
              <HowWeUseSection />
              <LegalBasisSection />
              <InformationSharingSection />
              <DataSecuritySection />
              <YourRightsSection />
              <DataRetentionSection />
              <CookiesSection />
              <ThirdPartySection />
              <ChildrenPrivacySection />
              <RegionalPrivacySection />
              <ContactSection />
              <PolicyUpdatesSection />
              <GoverningLawSection />
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
          <Shield className="w-3.5 h-3.5 text-white" />
          <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">Legal</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
            Privacy Policy
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Learn how Suronex collects, uses, and protects your personal information across our global services.
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
    { id: 'information-collected', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Data' },
    { id: 'legal-basis', label: 'Legal Basis' },
    { id: 'information-sharing', label: 'Information Sharing' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'your-rights', label: 'Your Privacy Rights' },
    { id: 'data-retention', label: 'Data Retention' },
    { id: 'cookies', label: 'Cookies & Tracking' },
    { id: 'third-party', label: 'Third-Party Services' },
    { id: 'children', label: "Children's Privacy" },
    { id: 'regional', label: 'Regional Privacy' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'updates', label: 'Policy Updates' },
    { id: 'governing-law', label: 'Governing Law' }
  ]

  return (
    <div className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-32">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Table of Contents
        </h3>
        <nav className="space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
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
          This Privacy Policy ("Policy") explains how <span className="text-white font-medium">SURONEX CLOUDSAFE PRIVATE LIMITED</span> and
          its subsidiaries/affiliates ("Suronex," "we," "us," or "our") collect, use, store, and protect your personal information
          when you use our cloud security platform, visit our websites, or interact with our services globally.
        </p>
        <p className="text-gray-300 leading-relaxed text-justify">
          We are committed to protecting your privacy and ensuring transparency about our data practices. This Policy applies to
          all users worldwide who access our services through{' '}
          <a href="https://www.suronex.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
            www.suronex.ai
          </a>
          {' '}and our cloud security platform.
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
   INFORMATION COLLECTED SECTION
   ============================================ */
function InformationCollectedSection() {
  return (
    <Section id="information-collected" title="Information We Collect">
      {/* Personal Information */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Personal Information You Provide</h3>
        </div>
        <p className="mb-4 text-justify">We collect information you directly provide when you:</p>
        <ul className="list-none space-y-2 ml-0 mb-6">
          {[
            'Create an account or register for our services',
            'Use our cloud security platform',
            'Contact us for support or inquiries',
            'Subscribe to our communications',
            'Attend our events or webinars'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-semibold text-white mb-2">This information may include:</p>
        <ul className="list-none space-y-2 ml-0">
          {[
            'Name and contact details (email address, phone number, company name)',
            'Account credentials (username, login ID)',
            'Professional information (job title, department, company size)',
            'Communication preferences',
            'Any information you provide in support requests or feedback'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Platform Usage */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Platform Usage Information</h3>
        </div>
        <p className="mb-4 text-justify">When you use our cloud security platform, we automatically collect:</p>
        <ul className="list-none space-y-2 ml-0">
          {[
            'Login/logout timestamps and session duration',
            'Features and pages accessed within the platform',
            'Cloud accounts connected (AWS, Azure, Google Cloud, etc.)',
            'Number and types of cloud resources discovered',
            'Security configurations and scan results',
            'Platform navigation and usage patterns',
            'IP addresses and device information'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Information */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Technical Information</h3>
        </div>
        <p className="mb-4 text-justify">We automatically collect technical information including:</p>
        <ul className="list-none space-y-2 ml-0">
          {[
            'Browser type and version',
            'Operating system and device information',
            'IP address and location data (city/country level)',
            'Cookies and similar tracking technologies',
            'Log files and system activity'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What We Don't Collect */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Information We Do NOT Collect</h3>
        <p className="mb-4 text-justify">We do not intentionally collect:</p>
        <ul className="list-none space-y-2 ml-0">
          {[
            'Government-issued ID numbers or passport information',
            'Payment card details (processed by third-party payment processors)',
            'Sensitive personal data (health, genetic, biometric information)',
            'Social media account passwords',
            'Personal files or documents unless specifically uploaded to our platform'
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
   HOW WE USE SECTION
   ============================================ */
function HowWeUseSection() {
  const categories = [
    {
      title: 'Service Provision',
      color: 'blue',
      items: [
        'Providing and maintaining our cloud security platform',
        'Processing your account registration and authentication',
        'Enabling platform features and functionality',
        'Providing customer support and technical assistance'
      ]
    },
    {
      title: 'Security and Compliance',
      color: 'red',
      items: [
        'Monitoring and analyzing security threats',
        'Ensuring platform security and preventing unauthorized access',
        'Detecting and preventing fraudulent activities',
        'Complying with legal and regulatory requirements'
      ]
    },
    {
      title: 'Communication',
      color: 'green',
      items: [
        'Sending service-related notifications and updates',
        'Providing security alerts and platform status updates',
        'Responding to your inquiries and support requests',
        'Sending marketing communications (with your consent)'
      ]
    },
    {
      title: 'Improvement and Analytics',
      color: 'purple',
      items: [
        'Analyzing platform usage to improve our services',
        'Developing new features and capabilities',
        'Conducting research and analytics',
        'Personalizing your platform experience'
      ]
    }
  ]

  /* REMOVED getColorClasses */

  return (
    <Section id="how-we-use" title="How We Use Your Information">
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category, idx) => {
          return (
            <div key={idx} className={`p-6 rounded-xl bg-white/5 border border-white/10`}>
              <h3 className={`text-lg font-semibold text-white mb-4`}>{category.title}</h3>
              <ul className="list-none space-y-2 ml-0">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0`} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ============================================
   LEGAL BASIS SECTION
   ============================================ */
function LegalBasisSection() {
  const bases = [
    {
      title: 'Contract Performance',
      description: 'To provide our services and fulfill our contractual obligations',
      icon: '📝'
    },
    {
      title: 'Legitimate Interests',
      description: 'To improve our services, ensure security, and conduct business operations',
      icon: '⚖️'
    },
    {
      title: 'Legal Compliance',
      description: 'To comply with applicable laws and regulations',
      icon: '📋'
    },
    {
      title: 'Consent',
      description: 'Where you have provided specific consent for certain processing activities',
      icon: ''
    }
  ]

  return (
    <Section id="legal-basis" title="Legal Basis for Processing">
      <p className="text-justify mb-6">We process your personal information based on:</p>
      <div className="grid md:grid-cols-2 gap-6">
        {bases.map((basis, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-start gap-3 mb-3">
              {/* Icon removed */}
              <h3 className="text-lg font-semibold text-white">{basis.title}</h3>
            </div>
            <p className="text-sm">{basis.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ============================================
   INFORMATION SHARING SECTION
   ============================================ */
function InformationSharingSection() {
  return (
    <Section id="information-sharing" title="Information Sharing and Disclosure">
      {/* We Do Not Sell */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-3">We Do Not Sell Personal Information</h3>
        <p className="text-justify">
          We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
        </p>
      </div>

      {/* International Transfers */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-3">International Transfers</h3>
        <p className="text-justify">
          As a global organization, your information may be transferred to and processed in countries where our subsidiaries,
          affiliates, or service providers operate. We ensure appropriate safeguards are in place for international transfers.
        </p>
      </div>

      {/* Authorized Sharing */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Authorized Sharing</h3>
        <p className="mb-4 text-justify">We may share your information in the following circumstances:</p>
        <div className="space-y-4">
          {[
            {
              title: 'Service Providers',
              desc: 'With trusted third-party vendors who assist in providing our services (cloud hosting, analytics, customer support)'
            },
            {
              title: 'Business Partners',
              desc: 'With authorized partners who help deliver our services, under strict confidentiality agreements'
            },
            {
              title: 'Legal Requirements',
              desc: 'When required by law, legal process, or government authorities'
            },
            {
              title: 'Business Transfers',
              desc: 'In connection with mergers, acquisitions, or asset transfers (with appropriate safeguards)'
            },
            {
              title: 'Safety and Security',
              desc: 'To protect our rights, property, safety, or that of our users or others'
            }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5">
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ============================================
   DATA SECURITY SECTION
   ============================================ */
function DataSecuritySection() {
  return (
    <Section id="data-security" title="Data Security">
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Security Measures</h3>
        </div>
        <p className="mb-6 text-justify">
          We implement comprehensive security measures to protect your personal information:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Encryption of data in transit and at rest',
            'Access controls and authentication mechanisms',
            'Regular security assessments and monitoring',
            'Employee training on data protection practices',
            'Incident response procedures'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="text-justify">
          While we maintain industry-standard security practices, no system is completely secure. We encourage you to use
          strong passwords and keep your account credentials confidential.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   YOUR RIGHTS SECTION
   ============================================ */
function YourRightsSection() {
  const rights = [
    {
      title: 'Access and Portability',
      items: ['Request access to your personal information', 'Receive a copy of your data in a portable format'],
      icon: '📂'
    },
    {
      title: 'Correction and Updates',
      items: ['Correct inaccurate or incomplete information', 'Update your account and profile information'],
      icon: '✏️'
    },
    {
      title: 'Deletion and Erasure',
      items: ['Request deletion of your personal information', 'Close your account and remove associated data'],
      icon: '🗑️'
    },
    {
      title: 'Objection and Restriction',
      items: ['Object to certain processing activities', 'Request restriction of processing in specific circumstances'],
      icon: '🚫'
    },
    {
      title: 'Consent Withdrawal',
      items: ['Withdraw consent for marketing communications', 'Opt-out of non-essential data processing'],
      icon: '⚠️'
    }
  ]

  return (
    <Section id="your-rights" title="Your Privacy Rights">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {rights.map((right, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              {/* Icon removed */}
              <h3 className="text-lg font-semibold text-white">{right.title}</h3>
            </div>
            <ul className="list-none space-y-2 ml-0">
              {right.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">How to Exercise Your Rights</h3>
        <p className="mb-4 text-justify">To exercise your privacy rights, contact us at:</p>
        <ul className="list-none space-y-2 ml-0 mb-4">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>
              Email:{' '}
              <a href="mailto:privacy@suronex.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                privacy@suronex.ai
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>Through your account settings (where available)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>Via our support portal</span>
          </li>
        </ul>
        <p className="text-sm italic">We will respond to your requests within the timeframes required by applicable law.</p>
      </div>
    </Section>
  )
}

/* ============================================
   DATA RETENTION SECTION
   ============================================ */
function DataRetentionSection() {
  return (
    <Section id="data-retention" title="Data Retention">
      <p className="mb-6 text-justify">We retain your personal information for as long as necessary to:</p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          'Provide our services and maintain your account',
          'Comply with legal and regulatory requirements',
          'Resolve disputes and enforce our agreements',
          'Achieve the purposes outlined in this Policy'
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-justify">
        When information is no longer needed, we securely delete or anonymize it according to our data retention schedule.
      </p>
    </Section>
  )
}

/* ============================================
   COOKIES SECTION
   ============================================ */
function CookiesSection() {
  return (
    <Section id="cookies" title="Cookies and Tracking Technologies">
      <p className="mb-6 text-justify">We use cookies and similar technologies to:</p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          'Enable platform functionality and maintain your session',
          'Analyze platform usage and performance',
          'Provide personalized experiences',
          'Support security measures'
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <p className="text-justify">
          You can manage cookie preferences through your browser settings, though this may affect platform functionality.
          For more details, see our{' '}
          <Link href="/cookies" className="text-blue-400 hover:text-blue-300 transition-colors">
            Cookie Policy
          </Link>
          .
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   THIRD PARTY SECTION
   ============================================ */
function ThirdPartySection() {
  return (
    <Section id="third-party" title="Third-Party Services">
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="text-justify">
          Our platform may integrate with third-party services (cloud providers, analytics tools). These services have their
          own privacy policies, and we encourage you to review them. We are not responsible for third-party privacy practices.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   CHILDREN'S PRIVACY SECTION
   ============================================ */
function ChildrenPrivacySection() {
  return (
    <Section id="children" title="Children's Privacy">
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="text-justify mb-4">
          Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information
          from children.
        </p>
        <p className="text-justify">
          If you believe we have inadvertently collected information from a child, please contact us immediately at{' '}
          <a href="mailto:privacy@suronex.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
            privacy@suronex.ai
          </a>
          .
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   REGIONAL PRIVACY SECTION
   ============================================ */
function RegionalPrivacySection() {
  const regions = [
    {
      title: 'European Union (GDPR)',
      description: 'For EU residents, we comply with the General Data Protection Regulation, including providing specific rights and protections outlined in this Policy.',
      flag: '🇪🇺'
    },
    {
      title: 'California (CCPA)',
      description: 'For California residents, we comply with the California Consumer Privacy Act, including specific disclosure and opt-out rights.',
      flag: '🇺🇸'
    },
    {
      title: 'Other Jurisdictions',
      description: 'We comply with applicable privacy laws in all jurisdictions where we operate or have users.',
      flag: '🌍'
    }
  ]

  return (
    <Section id="regional" title="Regional Privacy Considerations">
      <div className="space-y-6">
        {regions.map((region, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#D33E9E]/20 transition-all">
            <div className="flex items-start gap-3 mb-3">
              {/* Flag removed */}
              <h3 className="text-lg font-semibold text-white">{region.title}</h3>
            </div>
            <p className="text-justify">{region.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ============================================
   CONTACT SECTION
   ============================================ */
function ContactSection() {
  return (
    <Section id="contact" title="Contact Information">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[#D33E9E]/10 to-[#3530BA]/10 border border-white/10">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">Data Protection Officer</h3>
          <p className="text-gray-300 mb-2">For privacy-related inquiries, contact our Data Protection Officer:</p>
          <a
            href="mailto:privacy@suronex.ai"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>privacy@suronex.ai</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4">General Privacy Inquiries</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white font-semibold text-lg mb-2">SURONEX CLOUDSAFE PRIVATE LIMITED</p>
              <p className="text-gray-300">SF, Second Floor, Wadhwa Plaza, Sector-6 Dwarka</p>
              <p className="text-gray-300">New Delhi 110075, India</p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:privacy@suronex.ai"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>privacy@suronex.ai</span>
              </a>
              <a
                href="https://www.suronex.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>https://www.suronex.ai</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ============================================
   POLICY UPDATES SECTION
   ============================================ */
function PolicyUpdatesSection() {
  return (
    <Section id="updates" title="Policy Updates">
      <p className="mb-6 text-justify">
        We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will:
      </p>
      <div className="space-y-4">
        {[
          'Post the updated Policy on our website',
          'Notify you of material changes through email or platform notifications',
          'Indicate the effective date of any changes'
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-[#D33E9E]/10 to-[#3530BA]/10 border border-white/10">
        <p className="text-justify italic">
          Your continued use of our services after policy updates constitutes acceptance of the revised terms.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   GOVERNING LAW SECTION
   ============================================ */
function GoverningLawSection() {
  return (
    <Section id="governing-law" title="Governing Law">
      <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <p className="text-justify">
          This Privacy Policy is governed by the laws of India. Any disputes related to this Policy will be resolved in the
          courts of India, subject to applicable international privacy law requirements.
        </p>
      </div>
    </Section>
  )
}
