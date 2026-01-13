"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Navbar from "@/app/components/Navbar"
import { Footer } from "@/app/components/footer"

// FRAMEWORK DATA - Complete list from your table
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
    <section ref={ref} className="relative pt-32 pb-20 px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D33E9E]/5 via-transparent to-[#3530BA]/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Comprehensive Compliance{" "}
            <span className="bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-transparent bg-clip-text">
              Coverage
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            Automated support for 40+ security frameworks across AWS, Azure, GCP, and Kubernetes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// SEARCH AND FILTERS - FIXED
function SearchAndFilters({
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  matchCount,
  totalCount,
  onReset
}: any) {
  return (
    <div className="sticky top-0 z-50 bg-black border-b border-white/10">
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
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filters.platforms.includes(platform)
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
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filters.categories.includes(category)
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
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-[#D33E9E] to-[#3530BA]">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )
  }

  if (support === 'partial') {
    return (
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-[#8B4FB8]">
        <div className="w-3 h-3 rounded-full bg-[#8B4FB8]" />
      </div>
    )
  }

  if (support === 'roadmap') {
    return (
      <div className="text-xs text-gray-600 font-medium">Coming</div>
    )
  }

  return (
    <div className="text-gray-700">—</div>
  )
}

// FRAMEWORK DETAIL EXPANSION
function FrameworkDetail({ framework }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="p-8 border-t border-white/10"
    >
      <div className="max-w-4xl">
        <h3 className="text-2xl font-bold text-white mb-4">{framework.name}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{framework.description}</p>

        {/* Platform Support */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Platform Support
          </div>
          <div className="flex gap-2 flex-wrap">
            {Object.entries(framework.platforms).map(([platform, support]: any) => (
              support !== 'none' && (
                <div
                  key={platform}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300"
                >
                  {platform}
                </div>
              )
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#D33E9E] hover:text-white transition-colors"
          >
            <span className="font-medium">Learn more about this framework</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// COVERAGE MATRIX
function CoverageMatrix({ frameworks, expandedRow, setExpandedRow }: any) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const [hoveredCol, setHoveredCol] = useState<string | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
        <table className="w-full">
          {/* NON-STICKY HEADER - scrolls away naturally */}
          <thead className="z-10 border-b border-white/10 bg-black">
            <tr>
              <th className="sticky left-0 z-20 bg-black px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider min-w-[350px] border-r border-white/10">
                Compliance Framework
              </th>
              {['AWS', 'Azure', 'GCP', 'Kubernetes'].map((platform) => (
                <th
                  key={platform}
                  onMouseEnter={() => setHoveredCol(platform)}
                  onMouseLeave={() => setHoveredCol(null)}
                  className={`px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider transition-all bg-black ${
                    hoveredCol === platform ? 'text-[#D33E9E]' : 'text-gray-400'
                  }`}
                >
                  {platform}
                </th>
              ))}
            </tr>
          </thead>

          {/* Framework Rows */}
          <tbody className="divide-y divide-white/5">
            {frameworks.map((framework: any, index: number) => (
              <>
                <motion.tr
                  key={framework.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  onMouseEnter={() => setHoveredRow(framework.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  onClick={() => setExpandedRow(expandedRow === framework.id ? null : framework.id)}
                  className={`cursor-pointer transition-all ${
                    hoveredRow === framework.id ? 'bg-white/5' : ''
                  } ${expandedRow === framework.id ? 'bg-white/10' : ''}`}
                >
                  {/* Framework Name - Sticky */}
                  <td className="sticky left-0 z-20 bg-black px-6 py-5 border-r border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="font-medium text-white mb-1">{framework.name}</div>
                        <div className="text-sm text-gray-500">{framework.category}</div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedRow === framework.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </td>

                  {/* Platform Support Cells */}
                  {['AWS', 'Azure', 'GCP', 'Kubernetes'].map((platform) => {
                    const support = framework.platforms[platform]
                    return (
                      <td
                        key={platform}
                        className={`px-6 py-5 text-center transition-all bg-black ${
                          hoveredCol === platform ? 'bg-white/5' : ''
                        }`}
                      >
                        <SupportIndicator support={support} />
                      </td>
                    )
                  })}
                </motion.tr>

                {/* Expanded Detail Row */}
                {expandedRow === framework.id && (
                  <tr key={`${framework.id}-detail`}>
                    <td colSpan={5} className="bg-black/40">
                      <FrameworkDetail framework={framework} />
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// CTA SECTION
function ComplianceCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D33E9E]/10 to-[#3530BA]/10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Continuously Expanding Coverage
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            We regularly add support for new frameworks and standards. Have a specific compliance need?
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#D33E9E] to-[#3530BA] rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Book a Demo
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-lg text-white hover:bg-white/5 transition-colors"
            >
              Talk to an Expert
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

  // Filter frameworks based on search and filters
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
      <SearchAndFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
        matchCount={filteredFrameworks.length}
        totalCount={frameworks.length}
        onReset={handleReset}
      />
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

