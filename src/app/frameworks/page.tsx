"use client"
import React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import { Footer } from "@/app/components/footer"

const PLATFORM_LOGOS = {
  AWS: '/Integrations/aws-color.png',
  Azure: '/Integrations/Azure.png',
Kubernetes: '/Integrations/Kubernetes.png',
  Office365: '/Integrations/copilot.png',  GCP: '/Integrations/Googlecloud.png',
}

// FRAMEWORK DATA
const frameworks = [
  // AWS-Specific Standards (1-6)
  {
    id: 'aws-onboarding',
    name: 'AWS Account Onboarding Best Practices',
    category: 'Best Practice',
    description: 'To establish a secure, scalable, and well-governed cloud foundation, AWS account onboarding should follow structured best practices. This includes setting up identity and access management (IAM), enabling security and monitoring services, applying tagging standards, and configuring guardrails through AWS Organizations and Service Control Policies (SCPs).',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'aws-control-tower',
    name: 'AWS Control Tower Guardrails',
    category: 'Best Practice',
    description: 'AWS Control Tower guardrails are preconfigured policies that help enforce governance, security, and compliance across AWS accounts. Best practices include enabling both preventive (Service Control Policies) and detective (AWS Config Rules) guardrails, aligning them with organizational compliance needs, and regularly reviewing their applicability as workloads evolve.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'aws-foundational-security',
    name: 'AWS Foundational Security Best Practices',
    category: 'Best Practice',
    description: 'AWS Foundational Security Best Practices provide a curated set of automated security controls across key AWS services to help organizations identify and remediate common security risks. These best practices focus on enforcing least privilege, enabling logging and monitoring, securing data at rest and in transit, and ensuring service configurations align with industry standards.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'aws-ftr',
    name: 'AWS Foundational Technical Review',
    category: 'Best Practice',
    description: 'The AWS Foundational Technical Review (FTR) is a structured assessment that helps ensure your workloads meet AWS best practices for security, reliability, and operational excellence before scaling or going to market. Guided by the AWS Well-Architected Framework, the FTR identifies potential risks and offers actionable recommendations to improve architecture quality.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'aws-waf-reliability',
    name: 'AWS Well Architected Framework - Reliability Pillar',
    category: 'Best Practice',
    description: 'The Reliability Pillar of the AWS Well-Architected Framework focuses on ensuring a system can recover from failures, meet demands, and evolve over time. It emphasizes designing distributed systems with fault tolerance, automated recovery, scalable infrastructure, and robust monitoring.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'aws-waf-security',
    name: 'AWS Well Architected Framework - Security Pillar',
    category: 'Best Practice',
    description: 'The Security Pillar of the AWS Well-Architected Framework focuses on protecting data, systems, and assets through risk management and mitigation strategies. It emphasizes key areas such as identity and access management, data protection, infrastructure security, threat detection, and incident response.',
    platforms: { AWS: 'full', Azure: 'none', GCP: 'none', Kubernetes: 'none' },
    hasDetailsPage: true,
  },

  // CIS Benchmarks - Special grouped card (7-12)
{
  id: 'cis-benchmarks',
  name: 'CIS Benchmarks',
  category: 'Best Practice',
  description: 'The CIS (Center for Internet Security) Benchmarks are industry-recognized best-practice configuration guidelines designed to harden operating systems, applications, cloud environments, and network devices—helping organizations defend against cyberattacks.',
  platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'full', Office365: 'full' },
  hasDetailsPage: true,
  isGrouped: true,
  versions: [
    { id: 'cis-1.4', name: 'Version 1.4' },
    { id: 'cis-1.5', name: 'Version 1.5' },
    { id: 'cis-2.0', name: 'Version 2.0' },
    { id: 'cis-3.0', name: 'Version 3.0' },
    { id: 'cis-4.0', name: 'Version 4.0' },
    { id: 'cis-5.0', name: 'Version 5.0' },
  ],
  versionCount: '20+',  // Changed from 6 to '20+'
},

  // Multi-platform Standards (13-42)
  {
    id: 'cisa-cyber-essentials',
    name: 'CISA Cyber Essentials',
    category: 'Best Practice',
    description: 'CISA Cyber Essentials is a guide developed by the Cybersecurity and Infrastructure Security Agency to help businesses establish basic cybersecurity practices. It focuses on six key areas: asset management, device and software security, controlled access, secure configurations, data protection, and incident response.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'fedramp-low',
    name: 'FedRAMP Low Version 4',
    category: 'Regulatory',
    description: 'FedRAMP Low V4 outlines standardized security requirements for cloud service providers handling low-impact federal data, such as publicly available or non-sensitive information. The goal is to ensure secure, compliant cloud services for federal use while streamlining authorization for systems with minimal risk profiles.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'fedramp-moderate',
    name: 'FedRAMP Moderate Version 4',
    category: 'Regulatory',
    description: 'FedRAMP Moderate V4 defines standardized security controls for cloud systems handling Controlled Unclassified Information (CUI) and moderately sensitive federal data. It ensures protection through rigorous requirements across access control, incident response, and risk management, enabling secure cloud adoption for federal agencies.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'ffiec',
    name: 'Federal Financial Institutions Examination Council (FFIEC)',
    category: 'Regulatory',
    description: 'The Federal Financial Institutions Examination Council (FFIEC) sets uniform standards for evaluating the safety, soundness, and cybersecurity of financial institutions in the U.S. It provides guidance, assessments, and best practices to help institutions manage risks and ensure regulatory compliance across the banking sector.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'gdpr',
    name: 'EU General Data Protection Regulation',
    category: 'Regulatory',
    description: 'The EU General Data Protection Regulation (GDPR) is a comprehensive data privacy law that governs how organizations collect, process, and protect personal data of individuals within the European Union. It emphasizes user consent, data minimization, transparency, and grants individuals greater control over their personal information.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'gxp-fda',
    name: 'GxP (FDA 21 CFR Part 11)',
    category: 'Regulatory',
    description: 'GxP refers to "Good Practice" guidelines (e.g., GMP, GLP, GCP) ensuring product quality and regulatory compliance in life sciences. FDA 21 CFR Part 11 specifically governs electronic records and signatures, requiring systems to be secure, validated, and auditable to ensure data integrity in regulated environments.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'gxp-eu',
    name: 'GxP EU Annex 11',
    category: 'Regulatory',
    description: 'EU Annex 11 is a guideline under the EU GMP framework that outlines requirements for computerized systems used in regulated GxP environments. It emphasizes system validation, data integrity, access control, and audit trails to ensure electronic records are reliable and compliant with Good Manufacturing Practices.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'hipaa',
    name: 'The Health Insurance Portability and Accountability Act',
    category: 'Regulatory',
    description: 'The Health Insurance Portability and Accountability Act (HIPAA) is a U.S. regulation that sets standards for protecting sensitive patient health information, focusing on privacy, security, and breach notification for healthcare providers and their partners.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'iso27001-2022',
    name: 'ISO/IEC 27001:2022',
    category: 'Certification',
    description: 'ISO 27001:2022 is the latest version of the international standard for Information Security Management Systems (ISMS), emphasizing risk-based thinking, updated control sets (aligned with ISO 27002:2022), and continuous improvement in managing information security.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'mitre-attack',
    name: 'Mitre Attack Framework',
    category: 'Best Practice',
    description: 'MITRE ATT&CK stands for "Adversarial Tactics, Techniques, and Common Knowledge." It is a knowledge base developed by MITRE Corporation that documents how real-world cyber attackers behave — step-by-step — during intrusions.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'nist-800-171',
    name: 'NIST 800-171 Revision 2',
    category: 'Best Practice',
    description: 'NIST 800-171 Rev. 2 provides guidelines to protect Controlled Unclassified Information (CUI) in non-federal systems. It outlines 14 families of security requirements aimed at ensuring confidentiality through access control, incident response, and risk management.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'nist-800-53-r4',
    name: 'NIST 800-53 Revision 4',
    category: 'Best Practice',
    description: 'NIST 800-53 Rev. 4 defines a comprehensive catalog of security and privacy controls for federal information systems, emphasizing flexibility and coverage across low, moderate, and high-impact systems to support FISMA compliance.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'nist-800-53-r5',
    name: 'NIST 800-53 Revision 5',
    category: 'Best Practice',
    description: 'NIST 800-53 Rev. 5 modernizes the control catalog with a focus on outcome-based controls, integrating cybersecurity and privacy, and addressing modern threats across all system types, including cloud and mobile environments.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'nist-csf',
    name: 'NIST Cyber Security Framework (CSF) Version 1.1',
    category: 'Best Practice',
    description: 'The NIST CSF 1.1 offers a voluntary, risk-based approach for organizations to manage and improve cybersecurity posture. It is organized into five core functions: Identify, Protect, Detect, Respond, and Recover.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'pci-dss-3.2.1',
    name: 'PCI DSS Version 3.2.1',
    category: 'Certification',
    description: 'PCI DSS 3.2.1 outlines security requirements for organizations that store, process, or transmit credit card data, focusing on access control, encryption, and regular monitoring to protect payment card information.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'pci-dss-4.0',
    name: 'PCI DSS Version 4.0',
    category: 'Certification',
    description: 'PCI DSS 4.0 introduces a more flexible, risk-based approach to payment card data security, emphasizing continuous compliance, customized validation methods, and stronger authentication and encryption controls.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'rbi-csf',
    name: 'RBI Cyber Security Framework',
    category: 'Regulatory',
    description: 'Issued by the Reserve Bank of India, this framework mandates banks and financial institutions to implement robust cybersecurity measures, including risk assessment, real-time monitoring, incident response, and regular audits.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'soc2',
    name: 'AICPA - SOC 2',
    category: 'Certification',
    description: "'SOC 2 is a framework developed by the AICPA to assess service organizations' controls related to security, availability, processing integrity, confidentiality, and privacy, helping ensure trust and transparency with clients.",
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'apra-cps234',
    name: 'Australia APRA CPS 234',
    category: 'Regulatory',
    description: 'CPS 234 is an Australian Prudential Regulation Authority (APRA) standard that requires regulated entities to implement robust information security controls, manage third-party risks, and ensure rapid detection and response to cyber incidents.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'ccpa',
    name: 'CCPA (California Consumer Privacy Act)',
    category: 'Regulatory',
    description: 'CCPA is a U.S. privacy law that gives California residents rights over their personal data, including access, deletion, and opting out of data sales. It mandates transparency and accountability for businesses handling consumer data.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'sebi-cscrf',
    name: 'SEBI - Cybersecurity and Cyber Resilience Framework (CSCRF)',
    category: 'Regulatory',
    description: 'The SEBI CSF mandates regulated market entities in India to establish robust cybersecurity and cyber resilience measures. It focuses on governance, risk assessment, incident response, and continuous monitoring to safeguard securities market infrastructure.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'irdai',
    name: 'IRDAI - Information & Cyber Security Guidelines',
    category: 'Regulatory',
    description: 'Issued by the Insurance Regulatory and Development Authority of India (IRDAI), these guidelines require insurers to implement strong cybersecurity policies, conduct regular audits, manage third-party risks, and ensure timely incident reporting and response.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'mas-trm',
    name: 'MAS - Technology Risk Management',
    category: 'Regulatory',
    description: 'The MAS TRM guidelines provide financial institutions in Singapore with comprehensive requirements to manage technology and cyber risks. It emphasizes governance, system availability, data protection, and incident response to ensure operational resilience.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'nis2',
    name: 'EU - Network and Information Systems Directive 2',
    category: 'Regulatory',
    description: 'The NIS2 Directive (Network and Information Systems Directive 2) is an EU law focused on enhancing cybersecurity across the European Union. It expands on the original NIS directive by broadening its scope to include more sectors, tightening security requirements, and introducing stricter enforcement measures.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'essential-eight',
    name: 'Essential Eight Maturity Model (2023)',
    category: 'Benchmark',
    description: 'The Essential Eight Maturity Model is an Australian cybersecurity framework developed by the Australian Signals Directorate (ASD) and published by the Australian Cyber Security Centre (ACSC). Originally released in June 2017, the November 2023 update incorporates alignment with the Information Security Manual (ISM) and strengthened security requirements to counter evolving threat landscapes.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'ism-2024',
    name: 'Information Security Manual (2024)',
    category: 'Standard',
    description: "'The Information Security Manual (ISM) is a comprehensive cybersecurity framework published by the Australian Signals Directorate (ASD) and updated in December 2024. It represents the considered advice of Australia's national intelligence agency and provides organizations with strategic and practical guidance for protecting information technology (IT) and operational technology (OT) systems, applications, and data from cyber threats.",
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'cyber-essentials-uk',
    name: 'Cyber Essentials (UK) v3.2',
    category: 'Standard',
    description: 'Cyber Essentials v3.2 is a UK government-backed cybersecurity certification scheme developed by the National Cyber Security Centre (NCSC) and published in April 2025. It provides a baseline framework for organizations to protect their IT infrastructure against common, internet-originating cyber threats.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'c2m2',
    name: 'C2M2 (2022)',
    category: 'Benchmark',
    description: 'The Cybersecurity Capability Maturity Model (C2M2) is a free, self-assessment framework developed by the U.S. Department of Energy in collaboration with public and private sector cybersecurity experts. It provides organizations with a structured, risk-based methodology to evaluate, benchmark, and progressively improve their cybersecurity capabilities across 10 critical domains.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'dora',
    name: 'DORA in Control Framework v3.2',
    category: 'Regulatory',
    description: "European Union (EU) financial entities and their critical Information and Communications Technology (ICT) providers must comply with the EU Digital Operational Resilience Act (Regulation (EU) 2022/2554 - 'DORA'). DORA standardizes how financial entities report cybersecurity incidents, test their digital operational resilience, and manage ICT third-party risk across the financial services sector and EU member states.",
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
  },
  {
    id: 'nist-800-66r2',
    name: 'NIST SP 800-66r2 (HIPAA Security Rule)',
    category: 'Best Practice',
    description: 'NIST Special Publication 800-66 Revision 2, published February 14, 2024, titled "Implementing the Health Insurance Portability and Accountability Act (HIPAA) Security Rule: A Cybersecurity Resource Guide," provides authoritative practical guidance for HIPAA-regulated entities to protect electronic protected health information (ePHI) and achieve compliance with the HIPAA Security Rule.',
    platforms: { AWS: 'full', Azure: 'full', GCP: 'full', Kubernetes: 'none' },
    hasDetailsPage: true,
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
            Automated support for 40+ security frameworks across AWS, Azure, and GCP
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
                    {['AWS', 'Azure', 'GCP'].map((platform) => (
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
                    {['Best Practice', 'Regulatory', 'Certification', 'Benchmark', 'Standard'].map((category) => (
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
            {['AWS', 'Azure', 'GCP'].map((platform) => (
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
            {['Best Practice', 'Regulatory', 'Certification', 'Benchmark', 'Standard'].map((category) => (
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
              {framework.isGrouped && (
                <span className="ml-2 text-xs text-gray-400 font-normal">
                  ({framework.versionCount} versions)
                </span>
              )}
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

              	      	      {/* Show versions if grouped */}
              {framework.isGrouped && framework.versions && (
  <div className="mb-4 pb-4 border-b border-white/10">
    <div className="text-xs text-gray-500 font-semibold uppercase mb-2">
      Supported Versions
    </div>
    <div className="grid grid-cols-2 gap-2">
      {framework.versions.map((version: any) => (
        <div key={version.id} className="text-xs text-gray-400 px-2 py-1 bg-white/5 rounded">
          {version.name}
        </div>
      ))}
    </div>
    <div className="text-xs text-gray-500 italic mt-2">
      and more...
    </div>
  </div>
)}

			      
			      
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

// DESKTOP CARD VIEW
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
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${framework.category === 'Best Practice' ? 'bg-[#D33E9E]/20 text-[#D33E9E]' :
                      framework.category === 'Regulatory' ? 'bg-[#3530BA]/20 text-[#8B4FB8]' :
                        framework.category === 'Certification' ? 'bg-amber-500/20 text-amber-400' :
                          framework.category === 'Benchmark' ? 'bg-cyan-500/20 text-cyan-400' :
                            'bg-emerald-500/20 text-emerald-400'
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
                    {framework.isGrouped && (
                      <span className="block text-xs text-gray-400 font-normal mt-1">
                        {framework.versionCount} versions supported
                      </span>
                    )}
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

                          {/* Show versions if grouped */}
{framework.isGrouped && framework.versions && (
  <div className="mb-4">
    <div className="text-xs text-gray-500 font-semibold uppercase mb-2">
      Supported Versions
    </div>
    <div className="grid grid-cols-2 gap-2">
      {framework.versions.map((version: any) => (
        <div key={version.id} className="text-xs text-gray-300 px-2 py-1 bg-white/5 rounded border border-white/10">
          {version.name}
        </div>
      ))}
    </div>
    <div className="text-xs text-gray-500 italic mt-2">
      and more...
    </div>
  </div>
)}

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
