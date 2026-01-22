'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'
import Link from 'next/link'
import { FileText, Calendar, Mail, Shield, ChevronRight } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import { Footer } from '@/app/components/footer'

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
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
              <DefinitionsSection />
              <AcceptanceSection />
              <AccountSection />
              <PermittedUseSection />
              <CustomerContentSection />
              <PrivacySection />
              <PaymentSection />
              <ServiceAvailabilitySection />
              <IntellectualPropertySection />
              <TerminationSection />
              <DisclaimersSection />
              <LiabilitySection />
              <IndemnificationSection />
              <ConfidentialitySection />
              <GeneralSection />
              <ContactSection />
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
          <FileText className="w-3.5 h-3.5 text-white" />
          <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">Legal</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#D33E9E] via-[#8B4FB8] to-[#3530BA] text-transparent bg-clip-text">
            Terms of Use
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Please read these terms carefully before using the Suronex platform and services.
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
    { id: 'definitions', label: 'Definitions' },
    { id: 'acceptance', label: 'Acceptance & Eligibility' },
    { id: 'account', label: 'Account Registration' },
    { id: 'permitted-use', label: 'Permitted Use' },
    { id: 'customer-content', label: 'Customer Content' },
    { id: 'privacy', label: 'Privacy & Data' },
    { id: 'payment', label: 'Payment Terms' },
    { id: 'service', label: 'Service Availability' },
    { id: 'ip', label: 'Intellectual Property' },
    { id: 'termination', label: 'Termination' },
    { id: 'disclaimers', label: 'Disclaimers' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'confidentiality', label: 'Confidentiality' },
    { id: 'general', label: 'General Provisions' },
    { id: 'contact', label: 'Contact Information' }
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
        className="prose prose-invert prose-lg max-w-none"
      >
        <p className="text-gray-300 leading-relaxed text-justify">
          These Terms of Use ("Terms") govern your access to and use of the SaaS platform and website (
          <a href="https://suronex.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
            https://suronex.ai/
          </a>
          ) provided by <span className="text-white font-medium">SURONEX CLOUDSAFE PRIVATE LIMITED</span> ("Suronex," "we," "us," or "our"),
          located at SF, Second Floor, Wadhwa Plaza, Sector-6 Dwarka New Delhi 110075. By accessing or using our platform,
          you agree to be bound by these Terms.
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
   DEFINITIONS SECTION
   ============================================ */
function DefinitionsSection() {
  const definitions = [
    { term: 'Customer', definition: 'means the individual or entity that has registered for and uses our SaaS Services.' },
    { term: 'SaaS Services', definition: 'means Suronex\'s cloud security platform and related services made available through our website and platform.' },
    { term: 'Customer Content', definition: 'means all data, files, and materials you upload, submit, or transmit through our platform.' },
    { term: 'Platform', definition: 'means our web-based application, website, and associated services.' },
    { term: 'Documentation', definition: 'means user guides, help materials, and other documentation we provide for using our services.' }
  ]

  return (
    <Section id="definitions" title="Definitions">
      <div className="space-y-4">
        {definitions.map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all">
            <span className="font-semibold text-white">"{item.term}"</span> {item.definition}
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ============================================
   ACCEPTANCE SECTION
   ============================================ */
function AcceptanceSection() {
  return (
    <Section id="acceptance" title="Acceptance and Eligibility">
      <p className="text-justify">By using our platform, you represent that:</p>
      <ul className="list-none space-y-3 ml-0">
        <li className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span>You are at least 18 years old or the legal age in your jurisdiction</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span>You have the authority to bind your organization to these Terms</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span>Your use complies with all applicable laws and regulations</span>
        </li>
      </ul>
    </Section>
  )
}

/* ============================================
   ACCOUNT SECTION
   ============================================ */
function AccountSection() {
  return (
    <Section id="account" title="Account Registration and Security">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Account Creation</h3>
        <p className="mb-4 text-justify">You must create an account to access our SaaS Services. You agree to:</p>
        <ul className="list-none space-y-3 ml-0 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>Provide accurate and complete registration information</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>Maintain and update your account information</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>Keep your login credentials secure and confidential</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Account Responsibility</h3>
        <p className="mb-4 text-justify">You are solely responsible for:</p>
        <ul className="list-none space-y-3 ml-0">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>All activities under your account</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>Maintaining the security of your account credentials</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>
              Immediately notifying us of any unauthorized access at{' '}
              <a href="mailto:security@suronex.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                security@suronex.ai
              </a>
            </span>
          </li>
        </ul>
      </div>
    </Section>
  )
}

/* ============================================
   PERMITTED USE SECTION
   ============================================ */
function PermittedUseSection() {
  return (
    <Section id="permitted-use" title="Permitted Use and Restrictions">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">License Grant</h3>
        <p className="text-justify">
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access
          and use our SaaS Services for your internal business operations.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Prohibited Activities</h3>
        <p className="mb-4 text-justify">You may not:</p>
        <ul className="list-none space-y-3 ml-0">
          {[
            'Copy, modify, or create derivative works of our platform or services',
            'Reverse engineer, decompile, or disassemble our software',
            'Use our services to build competing products or services',
            'Share access with unauthorized users',
            'Remove or obscure proprietary notices',
            'Use our services for illegal activities or to transmit harmful content',
            'Attempt to gain unauthorized access to our systems'
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
   CUSTOMER CONTENT SECTION
   ============================================ */
function CustomerContentSection() {
  return (
    <Section id="customer-content" title="Customer Content and Data">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Your Content</h3>
        <p className="text-justify">
          You retain ownership of your Customer Content. By using our services, you grant us a limited license to
          access, process, and store your content solely to provide our services.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Data Security</h3>
        <p className="text-justify">
          We implement appropriate security measures to protect your data. However, you acknowledge that no system
          is completely secure, and you use our services at your own risk.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Content Requirements</h3>
        <p className="mb-4 text-justify">You represent that your Customer Content:</p>
        <ul className="list-none space-y-3 ml-0">
          {[
            'Does not infringe third-party intellectual property rights',
            'Does not contain malicious, defamatory, or illegal content',
            'Complies with all applicable privacy and data protection laws'
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
   PRIVACY SECTION
   ============================================ */
function PrivacySection() {
  return (
    <Section id="privacy" title="Privacy and Data Protection">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Privacy Policy</h3>
        <p className="text-justify">
          Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Data Processing</h3>
        <p className="text-justify">
          By using our services, you consent to our processing of your data as described in our Privacy Policy and as
          necessary to provide our services.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">International Transfers</h3>
        <p className="text-justify">
          Our services may involve international data transfers. You consent to such transfers as necessary for service provision.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   PAYMENT SECTION
   ============================================ */
function PaymentSection() {
  return (
    <Section id="payment" title="Payment Terms">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Fees</h3>
          <p className="text-justify">
            Subscription fees are specified in your service plan and are payable in advance. All fees are non-refundable
            except as expressly stated.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Taxes</h3>
          <p className="text-justify">
            You are responsible for all applicable taxes related to your use of our services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Payment Processing</h3>
          <p className="text-justify">
            You authorize us to charge your designated payment method for all applicable fees. Fees are due within 30 days
            of invoice date.
          </p>
        </div>
      </div>
    </Section>
  )
}

/* ============================================
   SERVICE AVAILABILITY SECTION
   ============================================ */
function ServiceAvailabilitySection() {
  return (
    <Section id="service" title="Service Availability and Support">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Service Levels</h3>
        <p className="text-justify">
          We strive to maintain high service availability but do not guarantee uninterrupted access. Service level
          commitments are detailed in our Service Level Agreement.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Maintenance</h3>
        <p className="text-justify">
          We may perform scheduled maintenance that temporarily affects service availability. We will provide reasonable
          notice of planned maintenance.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   INTELLECTUAL PROPERTY SECTION
   ============================================ */
function IntellectualPropertySection() {
  return (
    <Section id="ip" title="Intellectual Property">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Our Rights</h3>
        <p className="text-justify">
          We retain all rights, title, and interest in our platform, services, software, and related intellectual property.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Feedback</h3>
        <p className="text-justify">
          Any suggestions or feedback you provide may be used by us without restriction or obligation to you.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   TERMINATION SECTION
   ============================================ */
function TerminationSection() {
  return (
    <Section id="termination" title="Termination">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Termination Rights</h3>
        <p className="mb-4 text-justify">Either party may terminate these Terms:</p>
        <ul className="list-none space-y-3 ml-0">
          {[
            'For material breach that remains uncured after 30 days\' written notice',
            'Immediately for violation of usage restrictions',
            'With 30 days\' notice for non-renewal'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Effect of Termination</h3>
        <p className="mb-4 text-justify">Upon termination:</p>
        <ul className="list-none space-y-3 ml-0">
          {[
            'Your access to our services will cease',
            'You remain liable for all unpaid fees',
            'We may delete your data after a reasonable retention period'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Suspension</h3>
        <p className="mb-4 text-justify">We may suspend your access for:</p>
        <ul className="list-none space-y-3 ml-0">
          {[
            'Non-payment after 15 days\' notice',
            'Suspected harmful or illegal activities',
            'Violation of these Terms'
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
   DISCLAIMERS SECTION
   ============================================ */
function DisclaimersSection() {
  return (
    <Section id="disclaimers" title="Disclaimers and Warranties">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Service Warranty</h3>
        <p className="text-justify">
          We warrant that our services will perform substantially in accordance with our Documentation under normal use.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Disclaimers</h3>
        <p className="text-gray-300 text-justify">
          Except as expressly stated, our services are provided "as is" without warranties of any kind. We disclaim all
          warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   LIABILITY SECTION
   ============================================ */
function LiabilitySection() {
  return (
    <Section id="liability" title="Limitation of Liability">
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <p className="mb-4 text-gray-300 text-justify">
          To the maximum extent permitted by law:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Excluded Damages</h3>
            <p className="text-gray-300 text-justify">
              Neither party will be liable for indirect, incidental, special, consequential, or punitive damages, including
              lost profits, data, or business opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Liability Cap</h3>
            <p className="text-gray-300 text-justify">
              Our total liability will not exceed the fees you paid during the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Exceptions</h3>
            <p className="text-gray-300 text-justify">
              These limitations do not apply to breaches of confidentiality, indemnification obligations, or violations
              of intellectual property rights.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ============================================
   INDEMNIFICATION SECTION
   ============================================ */
function IndemnificationSection() {
  return (
    <Section id="indemnification" title="Indemnification">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Our Indemnification</h3>
        <p className="text-justify">
          We will defend you against claims that our services infringe third-party intellectual property rights and pay
          resulting damages, subject to limitations and exclusions detailed in our service agreement.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Your Indemnification</h3>
        <p className="text-justify">
          You will defend us against claims arising from your Customer Content, misuse of our services, or violation of these Terms.
        </p>
      </div>
    </Section>
  )
}

/* ============================================
   CONFIDENTIALITY SECTION
   ============================================ */
function ConfidentialitySection() {
  return (
    <Section id="confidentiality" title="Confidentiality">
      <p className="text-justify">
        Both parties agree to maintain the confidentiality of any confidential information received from the other party
        and use it solely for purposes related to our business relationship.
      </p>
    </Section>
  )
}

/* ============================================
   GENERAL PROVISIONS SECTION
   ============================================ */
function GeneralSection() {
  const provisions = [
    {
      title: 'Governing Law',
      content: 'These Terms are governed by the laws of India, and disputes will be resolved in the courts of India.'
    },
    {
      title: 'Entire Agreement',
      content: 'These Terms, along with our Privacy Policy and Service Level Agreement, constitute the entire agreement between us.'
    },
    {
      title: 'Modifications',
      content: 'We may update these Terms by posting revised terms on our website. Continued use constitutes acceptance of updated Terms.'
    },
    {
      title: 'Severability',
      content: 'If any provision is deemed invalid, the remaining provisions will remain in effect.'
    },
    {
      title: 'Force Majeure',
      content: 'Neither party will be liable for delays or failures due to circumstances beyond reasonable control.'
    },
    {
      title: 'Assignment',
      content: 'You may not assign these Terms without our consent. We may assign these Terms in connection with a merger or sale of our business.'
    },
    {
      title: 'No Waiver',
      content: 'Failure to enforce any provision does not constitute a waiver of that provision.'
    }
  ]

  return (
    <Section id="general" title="General Provisions">
      <div className="space-y-6">
        {provisions.map((provision, i) => (
          <div key={i} className="p-5 rounded-lg bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all">
            <h3 className="text-lg font-semibold text-white mb-2">{provision.title}</h3>
            <p className="text-justify">{provision.content}</p>
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
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-gray-300 mb-6 text-justify">
          For questions about these Terms, please contact us at:
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
              href="mailto:security@suronex.ai"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Shield className="w-5 h-5" />
              <span>security@suronex.ai</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400 italic text-justify">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
          </p>
        </div>
      </div>
    </Section>
  )
}
