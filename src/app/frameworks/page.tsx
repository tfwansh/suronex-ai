"use client"
import React from "react"  // ADD THIS LINE
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image" // Added import
import Navbar from "@/app/components/Navbar"
import { Footer } from "@/app/components/footer"

const PLATFORM_LOGOS = {
  AWS: '/Integrations/aws-color.png',
  Azure: '/Integrations/Azure.png',
  GCP: '/Integrations/Googlecloud.png',
  Kubernetes: '/Integrations/Kubernetes.png',
}

// FRAMEWORK DATA (keep your existing data)
const frameworks = [
  {
    id: 'cisa-cyber-essentials',
    name: 'CISA Cyber Essentials',
    category: 'Security',
    description: 'Cybersecurity and Infrastructure Security Agency essential practices for protecting against common cyber threats.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'ens-rd-2022',
    name: 'ENS RD 2022 – ALTA',
    category: 'Regional',
    description: 'Spanish National Security Scheme for high-level security requirements.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'fedramp-low',
    name: 'FedRAMP Low Version 4',
    category: 'Security',
    description: 'Federal Risk and Authorization Management Program for low-impact cloud systems.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'fedramp-moderate',
    name: 'FedRAMP Moderate Version 4',
    category: 'Security',
    description: 'Federal Risk and Authorization Management Program for moderate-impact cloud systems.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'ffiec',
    name: 'Federal Financial Institutions Examination Council (FFIEC)',
    category: 'Industry',
    description: 'Information security standards for financial institutions in the United States.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'gdpr',
    name: 'EU General Data Protection Regulation (GDPR)',
    category: 'Regional',
    description: 'European Union regulation on data protection and privacy for individuals.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'hipaa',
    name: 'The Health Insurance Portability and Accountability Act (HIPAA)',
    category: 'Industry',
    description: 'US legislation providing data privacy and security provisions for safeguarding medical information.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'iso27001-2022',
    name: 'ISO/IEC 27001:2022',
    category: 'Security',
    description: 'Latest international standard for information security management systems (ISMS).',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'iso27001-2013',
    name: 'ISO/IEC 27001:2013',
    category: 'Security',
    description: 'Previous version of the international standard for information security management systems.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'mitre-attack',
    name: 'Mitre Attack Framework',
    category: 'Security',
    description: 'Globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'nist-800-171',
    name: 'NIST 800-171 Revision 2',
    category: 'Security',
    description: 'Protecting Controlled Unclassified Information in nonfederal systems and organizations.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'nist-800-53-r4',
    name: 'NIST 800-53 Revision 4',
    category: 'Security',
    description: 'Security and Privacy Controls for Information Systems and Organizations.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'nist-800-53-r5',
    name: 'NIST 800-53 Revision 5',
    category: 'Security',
    description: 'Latest version of Security and Privacy Controls for Information Systems.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'nist-csf',
    name: 'NIST Cyber Security Framework (CSF) Version 1.1',
    category: 'Security',
    description: 'Framework for improving critical infrastructure cybersecurity.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'pci-dss-3.2.1',
    name: 'PCI DSS Version 3.2.1',
    category: 'Industry',
    description: 'Payment Card Industry Data Security Standard for organizations handling card payments.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'pci-dss-4.0',
    name: 'PCI DSS Version 4.0',
    category: 'Industry',
    description: 'Latest Payment Card Industry Data Security Standard with enhanced security requirements.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'rbi-csf',
    name: 'RBI Cyber Security Framework',
    category: 'Regional',
    description: 'Reserve Bank of India cybersecurity framework for financial institutions.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'soc2',
    name: 'AICPA – SOC 2',
    category: 'Security',
    description: 'Service Organization Control 2 for service providers storing customer data in the cloud.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'apra-cps234',
    name: 'APRA CPS 234',
    category: 'Regional',
    description: 'Australian Prudential Regulation Authority Information Security standard.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'sebi-cscrf',
    name: 'SEBI Cybersecurity and Cyber Resilience Framework (CSCRF)',
    category: 'Regional',
    description: 'Securities and Exchange Board of India cybersecurity framework.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'irdai',
    name: 'IRDAI Information & Cyber Security Guidelines',
    category: 'Regional',
    description: 'Insurance Regulatory and Development Authority of India security guidelines.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'mas-trm',
    name: 'Technology Risk Management (MAS)',
    category: 'Regional',
    description: 'Monetary Authority of Singapore technology risk management guidelines.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full' },
  },
  {
    id: 'cis-v2',
    name: 'CIS Benchmark Version 2.0',
    category: 'Cloud-native',
    description: 'Center for Internet Security benchmark for secure cloud configuration.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
  },
  {
    id: 'cis-v3',
    name: 'CIS Benchmark Version 3.0',
    category: 'Cloud-native',
    description: 'Latest CIS benchmark for cloud security best practices.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
  },
  {
    id: 'cis-v4',
    name: 'CIS Benchmark Version 4.0',
    category: 'Cloud-native',
    description: 'Enhanced CIS benchmark with advanced security controls.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
  },
  {
    id: 'nis2',
    name: 'EU Network and Information Systems Directive 2 (NIS 2)',
    category: 'Regional',
    description: 'European Union directive on cybersecurity for critical infrastructure.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
  },
  {
    id: 'aws-waf-reliability',
    name: 'AWS Well Architected Framework – Reliability Pillar',
    category: 'Cloud-native',
    description: 'AWS best practices for building reliable and resilient systems.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'full' },
  },
  {
    id: 'aws-waf-security',
    name: 'AWS Well Architected Framework – Security Pillar',
    category: 'Cloud-native',
    description: 'AWS security best practices and design principles.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'full' },
  },
  {
    id: 'cis-k8s-1.4',
    name: 'CIS Benchmark Version 1.4',
    category: 'Cloud-native',
    description: 'CIS Kubernetes benchmark for container orchestration security.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'full' },
  },
  {
    id: 'cis-azure-2.1',
    name: 'CIS Benchmark Version 2.1',
    category: 'Cloud-native',
    description: 'CIS benchmark specific to Microsoft Azure security.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'aws-onboarding',
    name: 'AWS Account Onboarding Best Practices',
    category: 'Cloud-native',
    description: 'Best practices for securely setting up new AWS accounts.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'aws-control-tower',
    name: 'AWS Control Tower Guardrails',
    category: 'Cloud-native',
    description: 'AWS Control Tower governance and compliance guardrails.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'aws-foundational-security',
    name: 'AWS Foundational Security Best Practices',
    category: 'Cloud-native',
    description: 'AWS Security Hub foundational security controls.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'aws-ftr',
    name: 'AWS Foundational Technical Review',
    category: 'Cloud-native',
    description: 'Technical review framework for AWS workloads.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'cis-aws-1.5',
    name: 'CIS Benchmark Version 1.5',
    category: 'Cloud-native',
    description: 'Latest CIS AWS Foundations Benchmark.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'cis-k8s-1.10',
    name: 'CIS Benchmark Version 1.10',
    category: 'Cloud-native',
    description: 'CIS Kubernetes security benchmark version 1.10.',
    platforms: { AWS: 'none', Azure: 'none', GCP: 'none', Kubernetes: 'full' },
  },
  {
    id: 'cis-k8s-1.11',
    name: 'CIS Benchmark Version 1.11',
    category: 'Cloud-native',
    description: 'Latest CIS Kubernetes security benchmark.',
    platforms: { AWS: 'none', Azure: 'none', GCP: 'none', Kubernetes: 'full' },
  },
  {
    id: 'cis-k8s-1.8',
    name: 'CIS Benchmark Version 1.8',
    category: 'Cloud-native',
    description: 'CIS Kubernetes security benchmark version 1.8.',
    platforms: { AWS: 'none', Azure: 'none', GCP: 'none', Kubernetes: 'full' },
  },
  {
    id: 'cis-aws-5.0',
    name: 'CIS Benchmark Version 5.0',
    category: 'Cloud-native',
    description: 'Enhanced CIS AWS benchmark with latest controls.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'gxp-fda',
    name: 'GxP (FDA 21 CFR Part 11)',
    category: 'Industry',
    description: 'FDA regulations for electronic records and signatures in life sciences.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'gxp-eu',
    name: 'GxP EU Annex 11',
    category: 'Industry',
    description: 'European Medicines Agency computerized systems guidelines.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
  {
    id: 'korea-isms',
    name: 'Korea ISMS-P 2023',
    category: 'Regional',
    description: 'Korean Information Security Management System and Personal Information Protection.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
  },
]
// HERO SECTION
function ComplianceCoverageHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 via-transparent to-[#3530BA]/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Comprehensive Compliance{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Coverage
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-gray-400 leading-relaxed">
            Automated support for 40+ security frameworks across AWS, Azure, GCP, and Kubernetes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// MOBILE FILTERS - COLLAPSIBLE
function MobileFilters({
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  matchCount,
  totalCount,
  onReset
}: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="px-4 py-3">
        {/* Search Bar */}
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D33E9E]/50 text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filter Toggle Button */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex-1 flex items-center justify-between px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
              {(filters.platforms.length + filters.categories.length) > 0 && (
                <span className="px-1.5 py-0.5 bg-[#D33E9E] rounded-full text-xs font-semibold">
                  {filters.platforms.length + filters.categories.length}
                </span>
              )}
            </span>
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <span className="text-xs text-gray-400 whitespace-nowrap">
            {matchCount} of {totalCount}
          </span>
        </div>

        {/* Collapsible Filters */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {/* Platform Filters */}
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase mb-2">Platform</div>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Azure', 'GCP', 'Kubernetes'].map((platform) => (
                      <button
                        key={platform}
                        onClick={() => {
                          const newPlatforms = filters.platforms.includes(platform)
                            ? filters.platforms.filter((p: string) => p !== platform)
                            : [...filters.platforms, platform]
                          setFilters({ ...filters, platforms: newPlatforms })
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filters.platforms.includes(platform)
                          ? 'bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white'
                          : 'bg-white/5 text-gray-400 border border-white/10'
                          }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filters */}
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase mb-2">Category</div>
                  <div className="flex flex-wrap gap-2">
                    {['Security', 'Industry', 'Regional', 'Cloud-native'].map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          const newCategories = filters.categories.includes(category)
                            ? filters.categories.filter((c: string) => c !== category)
                            : [...filters.categories, category]
                          setFilters({ ...filters, categories: newCategories })
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filters.categories.includes(category)
                          ? 'bg-gradient-to-r from-[#8B4FB8] to-[#3530BA] text-white'
                          : 'bg-white/5 text-gray-400 border border-white/10'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Button */}
                {(filters.platforms.length > 0 || filters.categories.length > 0 || searchQuery) && (
                  <button
                    onClick={() => {
                      onReset()
                      setIsOpen(false)
                    }}
                    className="w-full py-2 text-sm text-[#D33E9E] font-medium"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// DESKTOP FILTERS
function DesktopFilters({
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  matchCount,
  totalCount,
  onReset
}: any) {
  return (
    <div className="hidden md:block sticky top-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search frameworks (e.g., SOC 2, HIPAA, ISO 27001)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D33E9E]/50 focus:bg-white/10 transition-all text-lg"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 items-center justify-between">
          {/* Platform Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Platform:</span>
            {['AWS', 'Azure', 'GCP', 'Kubernetes'].map((platform) => (
              <motion.button
                key={platform}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const newPlatforms = filters.platforms.includes(platform)
                    ? filters.platforms.filter((p: string) => p !== platform)
                    : [...filters.platforms, platform]
                  setFilters({ ...filters, platforms: newPlatforms })
                }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${filters.platforms.includes(platform)
                  ? 'bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
              >
                {platform}
              </motion.button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Category:</span>
            {['Security', 'Industry', 'Regional', 'Cloud-native'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const newCategories = filters.categories.includes(category)
                    ? filters.categories.filter((c: string) => c !== category)
                    : [...filters.categories, category]
                  setFilters({ ...filters, categories: newCategories })
                }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${filters.categories.includes(category)
                  ? 'bg-gradient-to-r from-[#8B4FB8] to-[#3530BA] text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Results Count & Reset */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-sm text-gray-400">
              <span className="text-white font-semibold">{matchCount}</span> of {totalCount} frameworks
            </span>
            {(filters.platforms.length > 0 || filters.categories.length > 0 || searchQuery) && (
              <button
                onClick={onReset}
                className="text-sm text-gray-400 hover:text-white transition-colors underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// SUPPORT INDICATOR
function SupportIndicator({ support }: { support: 'full' | 'partial' | 'none' | 'roadmap' }) {
  if (support === 'full') {
    return (
      <div className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
        <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )
  }

  return <div className="text-gray-700 text-xs md:text-base">—</div>
}

// MOBILE CARD VIEW
function MobileFrameworkCard({ framework, isExpanded, onToggle }: any) {
  const supportedPlatforms = Object.entries(framework.platforms)
    .filter(([_, support]) => support !== 'none')
    .map(([platform]) => platform)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden"
    >
      {/* Card Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full px-4 py-4 text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2">
              {framework.name}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-500 px-2 py-0.5 bg-white/5 rounded">
                {framework.category}
              </span>
              <span className="text-xs text-gray-400">
                {supportedPlatforms.length} platform{supportedPlatforms.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* Platform Badges - Logos */}
        <div className="flex gap-3 mt-4 flex-wrap">
          {supportedPlatforms.map((platform) => (
            <div
              key={platform}
              className="relative w-7 h-7 bg-white/5 rounded p-1"
              title={platform}
            >
              <Image
                src={PLATFORM_LOGOS[platform as keyof typeof PLATFORM_LOGOS]}
                alt={platform}
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-4">
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {framework.description}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-[#D33E9E] hover:text-white transition-colors"
              >
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// DESKTOP CARD VIEW - Award-level design replacing checkmarks table
function CoverageMatrix({ frameworks, expandedRow, setExpandedRow }: any) {
  return (
    <div className="hidden md:block max-w-7xl mx-auto px-6 py-12">
      {/* Grid of Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frameworks.map((framework: any, index: number) => {
          const supportedPlatforms = Object.entries(framework.platforms)
            .filter(([_, support]) => support !== 'none')
            .map(([platform]) => platform)
          const isExpanded = expandedRow === framework.id

          return (
            <motion.div
              key={framework.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              onClick={() => setExpandedRow(isExpanded ? null : framework.id)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                animate={isExpanded ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded
                  ? 'bg-gradient-to-br from-[#D33E9E]/10 to-[#3530BA]/10 border-[#D33E9E]/50 shadow-[0_0_40px_rgba(211,62,158,0.2)]'
                  : 'bg-white/[0.02] border-white/10 hover:border-[#D33E9E]/30 hover:bg-white/[0.04]'
                  }`}
              >
                {/* Background Glow on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : ''
                  }`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D33E9E]/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#3530BA]/10 rounded-full blur-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${framework.category === 'Security' ? 'bg-[#D33E9E]/20 text-[#D33E9E]' :
                      framework.category === 'Industry' ? 'bg-[#3530BA]/20 text-[#8B4FB8]' :
                        framework.category === 'Regional' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-cyan-500/20 text-cyan-400'
                      }`}>
                      {framework.category}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Framework Name */}
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#D33E9E] transition-colors">
                    {framework.name}
                  </h3>

                  {/* Platform Logos */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {supportedPlatforms.map((platform) => (
                      <div key={platform} className="relative w-8 h-8 rounded-lg bg-white/5 p-1.5 border border-white/10 hover:bg-white/10 transition-colors" title={platform}>
                        <Image
                          src={PLATFORM_LOGOS[platform as keyof typeof PLATFORM_LOGOS]}
                          alt={platform}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            {framework.description}
                          </p>
                          <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#D33E9E] hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Learn more</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, rgba(211,62,158,0.1) 0%, transparent 50%, rgba(53,48,186,0.1) 100%)',
                  }} />
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Empty State */}
      {frameworks.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">No frameworks match your filters</p>
          <p className="text-gray-600 text-sm mt-2">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

// CTA SECTION
function ComplianceCTA() {
  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D33E9E]/10 to-[#3530BA]/10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Continuously Expanding Coverage
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
            We regularly add support for new frameworks and standards. Have a specific compliance need?
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <motion.a
              href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Book a Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// MAIN PAGE COMPONENT
export default function ComplianceCoveragePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    platforms: [] as string[],
    categories: [] as string[],
  })
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredFrameworks = frameworks.filter((framework) => {
    const matchesSearch = framework.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPlatform = filters.platforms.length === 0 ||
      filters.platforms.some((p) => framework.platforms[p as keyof typeof framework.platforms] !== 'none')
    const matchesCategory = filters.categories.length === 0 ||
      filters.categories.includes(framework.category)
    return matchesSearch && matchesPlatform && matchesCategory
  })

  const handleReset = () => {
    setSearchQuery('')
    setFilters({ platforms: [], categories: [] })
  }

  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navbar />
      <ComplianceCoverageHero />

      {/* Conditional Rendering based on screen size */}
      <MobileFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
        matchCount={filteredFrameworks.length}
        totalCount={frameworks.length}
        onReset={handleReset}
      />

      <DesktopFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
        matchCount={filteredFrameworks.length}
        totalCount={frameworks.length}
        onReset={handleReset}
      />

      {/* Mobile: Card View */}
      <div className="md:hidden px-4 py-6 space-y-3">
        {filteredFrameworks.map((framework, index) => (
          <MobileFrameworkCard
            key={framework.id}
            framework={framework}
            isExpanded={expandedRow === framework.id}
            onToggle={() => setExpandedRow(expandedRow === framework.id ? null : framework.id)}
          />
        ))}
        {filteredFrameworks.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No frameworks match your filters
          </div>
        )}
      </div>

      {/* Desktop: Table View */}
      <CoverageMatrix
        frameworks={filteredFrameworks}
        expandedRow={expandedRow}
        setExpandedRow={setExpandedRow}
      />

      <ComplianceCTA />
      <Footer />
    </main>
  )
}

