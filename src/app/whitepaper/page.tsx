"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, ArrowRight, FileText, Sparkles } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/footer";

// --- WHITEPAPERS LIST ---
const whitepapers = [
  {
    id: "1",
    slug: "cloud-security-risk-management",
    title: "Navigating Cloud Security: Risk Management & Compliance Best Practices",
    excerpt: "A comprehensive guide to aligning your cloud operations with major regulatory frameworks while effectively managing security risks in a dynamic environment.",
    category: "Compliance",
    author: "Suronex Research Team",
    publishedDate: "June 28, 2025",
    readingTime: 15,
    featuredImage: "/whitepaper/20945284.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    slug: "cloud-vulnerability-management",
    title: "Cloud Vulnerability Management: Strengthening Cloud Security Posture",
    excerpt: "Continuous detection, assessment, and remediation of security weaknesses across cloud infrastructure, applications, and services.",
    category: "Cloud Security",
    author: "Suronex",
    publishedDate: "June 22, 2025",
    readingTime: 12,
    featuredImage: "/whitepaper/26648.jpg",
    isFeatured: false,
  },
  {
    id: "3",
    slug: "cloud-threat-intelligence",
    title: "Cloud Threat Intelligence: Strengthening Security in the Digital Age",
    excerpt: "Leveraging real-time insights and threat data to proactively safeguard cloud assets against emerging cyber threats.",
    category: "Threat Intel",
    author: "Suronex",
    publishedDate: "June 30, 2025",
    readingTime: 14,
    featuredImage: "/whitepaper/55291.jpg",
    isFeatured: false,
  },
  {
    id: "4",
    slug: "future-cloud-security-identity-data-protection",
    title: "The Future of Cloud Security: Proactive Identity & Data Protection",
    excerpt: "Building resilient security strategies through proactive identity management and comprehensive data protection.",
    category: "Cloud Security",
    author: "Suronex",
    publishedDate: "July 7, 2025",
    readingTime: 10,
    featuredImage: "/whitepaper/57838.jpg",
    isFeatured: false,
  },
  {
    id: "5",
    slug: "cloud-infrastructure-entitlement-management",
    title: "Cloud Infrastructure Entitlement Management: Securing Access in Multi-Cloud",
    excerpt: "Managing and enforcing least-privilege access controls to minimize security risks and ensure compliance across multi-cloud environments.",
    category: "Cloud Security",
    author: "Suronex",
    publishedDate: "July 17, 2025",
    readingTime: 11,
    featuredImage: "/whitepaper/629.jpg",
    isFeatured: false,
  },
  {
    id: "6",
    slug: "cloud-security-external-threat-attack-surface",
    title: "Cloud Security – External Threat Attack Surface",
    excerpt: "Understanding evolving threat actor tactics and implementing robust defenses against data exfiltration and identity exploitation.",
    category: "Threat Intel",
    author: "Suronex",
    publishedDate: "July 3, 2025",
    readingTime: 18,
    featuredImage: "/whitepaper/cloud-system-tablet-background-smart-technology-remixed-media.jpg",
    isFeatured: false,
  },
  {
    id: "7",
    slug: "cspm-solution-importance-for-startups",
    title: "CSPM Solution and Its Importance to Startup Organizations",
    excerpt: "How Cloud Security Posture Management drives startup success through secure cloud environments, compliance, and investor confidence.",
    category: "Best Practices",
    author: "Suronex",
    publishedDate: "July 26, 2025",
    readingTime: 16,
    featuredImage: "/whitepaper/cloud-upload-icon-line-connection-circuit-board.jpg",
    isFeatured: false,
  }
];

const categories = ["All", "Cloud Security", "Compliance", "Threat Intel", "Best Practices"];

export default function WhitepaperListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPaper = whitepapers.find(p => p.isFeatured);
  const regularPapers = filteredPapers.filter(p => p.id !== featuredPaper?.id);

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-[#D33E9E]/30 relative font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-4/5 h-4/5 rounded-full bg-gradient-radial from-[#D33E9E]/60 via-[#3530BA]/30 to-transparent blur-[70px] -z-10"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full drop-shadow-[0_0_15px_rgba(211,62,158,0.9)]"
          >
            <Image src="/shield-bg.png" alt="Shield" fill className="object-contain" priority />
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden font-sans z-[-2]">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3530BA]/10 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D33E9E]/10 rounded-full blur-[150px]"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 md:pt-48 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-lg shadow-purple-500/10">
                <FileText className="w-4 h-4 text-[#D33E9E]" />
                <span className="text-xs font-semibold text-gray-200 tracking-widest uppercase">Research & Insights</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D33E9E] via-[#9F5FD6] to-[#3530BA]">Whitepaper</span> <br />
                Library
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Deep dives into cloud security, compliance strategies, and the future of AI governance.
              </p>
            </motion.div>

            {/* Search & Filter Bar */}
            <div className="sticky top-24 z-40 mb-16">
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center shadow-2xl">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search whitepapers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D33E9E]/50 transition-all"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                          ? "bg-gradient-to-r from-[#D33E9E] to-[#3530BA] text-white shadow-lg"
                          : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Whitepaper */}
            {featuredPaper && !searchQuery && selectedCategory === "All" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <Link href={`/whitepaper/${featuredPaper.slug}`} className="group block relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#D33E9E]/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#D33E9E]/20 to-[#3530BA]/20">
                      {featuredPaper.featuredImage ? (
                        <Image src={featuredPaper.featuredImage} alt={featuredPaper.title} fill className="object-cover object-left group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Sparkles className="w-20 h-20 text-white/10" />
                        </div>
                      )}
                      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#D33E9E] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        Featured
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-[#3530BA] text-sm font-bold uppercase tracking-widest mb-4">{featuredPaper.category}</div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D33E9E] group-hover:to-[#3530BA] transition-all">
                        {featuredPaper.title}
                      </h2>
                      <p className="text-gray-400 text-lg mb-8 line-clamp-3">{featuredPaper.excerpt}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                        <span className="text-white font-medium">{featuredPaper.author}</span>
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPaper.publishedDate}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPaper.readingTime} min read</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#D33E9E] font-semibold group-hover:gap-4 transition-all">
                        Read Whitepaper <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Whitepaper Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPapers.map((paper, idx) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={`/whitepaper/${paper.slug}`} className="group block h-full rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#3530BA]/30 overflow-hidden hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                      {paper.featuredImage ? (
                        <Image src={paper.featuredImage} alt={paper.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FileText className="w-16 h-16 text-white/5" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300">
                        {paper.category}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D33E9E] transition-colors line-clamp-2">{paper.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{paper.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                        <span>{paper.publishedDate}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {paper.readingTime} min</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredPapers.length === 0 && (
              <div className="text-center py-20">
                <FileText className="w-16 h-16 text-white/10 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No whitepapers found</h3>
                <p className="text-gray-400">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </main>

        <div className="relative w-full border-t border-white/10 bg-[#030014]/60 backdrop-blur-xl [&_footer]:!bg-transparent [&_section]:!bg-transparent [&_div]:!bg-transparent">
          <Footer />
        </div>
      </div>
    </div>
  );
}

