"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight, Shield, CheckCircle2, Cloud, Package, Lock, FileCheck2, Boxes, Sparkles, BookOpen, FileText, Users, Mail, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCategory {
  title: string;
  items: {
    name: string;
    description: string;
    link: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const productCategories: ProductCategory[] = [
  {
    title: "Security & Compliance",
    items: [
      {
        name: "Cloud Security",
        description: "Continuous security monitoring across your infrastructure",
        link: "/products/cloud-security",
        icon: Shield
      },
      {
        name: "Cloud Compliance",
        description: "Automated compliance for AWS, Azure, and GCP",
        link: "/products/cloud-compliance",
        icon: CheckCircle2
      },
      {
        name: "Cloud Native Compliance",
        description: "Kubernetes and container security posture management",
        link: "/#",
        icon: Cloud
      },
      {
        name: "Cloud Inventory",
        description: "Real-time asset discovery and inventory management",
        link: "/products/cloud-inventory",
        icon: Package
      },
      {
        name: "SaaS Security",
        description: "Security Posture for SaaS Applications",
        link: "/products/saas-security",
        icon: Lock
      }
    ]
  },
  {
    title: "Platform",
    items: [
      {
        name: "Frameworks",
        description: "Support for 40+ compliance frameworks and standards",
        link: "/frameworks",
        icon: FileCheck2
      }
    ]
  }
];

const resourcesItems = [
  {
    name: "FAQs",
    description: "Find answers to common questions about Suronex",
    link: "/faq",
    icon: BookOpen
  },
  {
    name: "Whitepaper",
    description: "Deep dive into cloud security and compliance best practices",
    link: "/whitepaper",
    icon: FileText
  }
];

const companyItems = [
  {
    name: "About Us",
    description: "Learn about our mission and team",
    link: "/about-us",
    icon: Users
  },
  {
    name: "Contact Us",
    description: "Get in touch with our team",
    link: "/contact",
    icon: Mail
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDesktopDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[999] transition-all duration-500 ease-out ${scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
          : "bg-white/85 backdrop-blur-md"
          }`}
      >
        {/* Top Navbar Bar */}
        <div className={`border-b border-gray-200 transition-all duration-300 ${openDesktopDropdown ? 'border-gray-200' : scrolled ? 'border-gray-200' : 'border-gray-200/60'}`}>
          {/* Liquid flow effect on scroll */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3530BA] via-[#D33E9E] to-[#3530BA] opacity-0"
            animate={{
              opacity: scrolled ? [0, 0.3, 0] : 0,
              x: scrolled ? ["0%", "100%"] : "0%"
            }}
            transition={{
              opacity: { duration: 2, repeat: Infinity },
              x: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20 relative">
            {/* LOGO */}
            <Link href="/" className="relative z-[1000] flex-shrink-0">
              <motion.div
                className="relative w-32 sm:w-40 h-10 sm:h-12 flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="Suronex Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </motion.div>
            </Link>

            {/* DESKTOP NAV - CENTERED */}
            <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 hidden lg:flex items-center gap-8">
              {/* Products */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDesktopDropdown("products")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 relative group">
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${openDesktopDropdown === "products" ? "rotate-180" : ""
                      }`}
                  />

                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#3530BA]/5 to-[#D33E9E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    animate={{
                      scale: openDesktopDropdown === "products" ? [1, 1.05, 1] : 1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </button>
              </div>

              {/* Resources */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDesktopDropdown("resources")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300">
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${openDesktopDropdown === "resources" ? "rotate-180" : ""
                      }`}
                  />
                </button>
              </div>

              {/* Company */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDesktopDropdown("company")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300">
                  Company
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${openDesktopDropdown === "company" ? "rotate-180" : ""
                      }`}
                  />
                </button>
              </div>
            </div>

            {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(211,62,158,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-2.5 rounded-full text-white text-sm font-bold bg-gradient-to-r from-[#3530BA] via-[#4C32B8] to-[#D33E9E] shadow-[0_0_20px_rgba(211,62,158,0.4)] transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative">Book a Demo</span>
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-full text-black text-sm font-bold border-2 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#D33E9E,#3530BA)_border-box] border-transparent hover:text-white hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#D33E9E,#3530BA)_border-box] transition-all duration-300"
                >
                  Sign Up
                </motion.button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON - Fixed positioning */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition-colors duration-300 z-[1000] flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div >

        {/* COMPACT FULL-WIDTH DROPDOWN PANEL - Products */}
        <AnimatePresence>
          {
            openDesktopDropdown === "products" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
                className="w-full border-b border-gray-200 bg-white/98 backdrop-blur-xl overflow-hidden"
                onMouseEnter={() => setOpenDesktopDropdown("products")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-[#3530BA] via-[#D33E9E] to-[#3530BA]"
                  style={{ backgroundSize: "200% 100%" }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="max-w-7xl mx-auto px-6 py-5">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column - All Products */}
                    <div>
                      <div className="space-y-0.5">
                        {productCategories[0].items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.link}
                              className={`group/item flex items-start gap-3 p-2.5 rounded-lg transition-all duration-300 relative overflow-hidden ${item.link === '/#' ? 'cursor-default opacity-60' : 'hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10'}`}
                              onClick={(e) => item.link === '/#' && e.preventDefault()}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D33E9E]/10 to-transparent opacity-0 group-hover/item:opacity-100"
                                animate={{
                                  x: ["-100%", "100%"]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />

                              <div className="relative flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group-hover/item:from-[#3530BA]/10 group-hover/item:to-[#D33E9E]/10 transition-all duration-300">
                                <Icon className="w-4 h-4 text-gray-600 group-hover/item:text-[#3530BA] transition-colors" />
                              </div>

                              <div className="flex-1 min-w-0 relative">
                                <div className="flex items-center gap-2">
                                  <h4 className={`text-sm font-semibold transition-colors ${item.link === '/#' ? 'text-gray-400' : 'text-gray-900 group-hover/item:text-[#3530BA]'}`}>
                                    {item.name}
                                  </h4>
                                  {item.link !== '/#' && (
                                    <ArrowRight className="w-3.5 h-3.5 text-[#D33E9E] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                  )}
                                </div>
                                <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column - Enhanced Platform Items */}
                    <div className="space-y-4">
                      {productCategories[1].items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.link}
                            className="group/featured block p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#D33E9E]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-[#3530BA]/5 to-[#D33E9E]/5 opacity-0 group-hover/featured:opacity-100"
                              transition={{ duration: 0.3 }}
                            />

                            <div className="relative">
                              <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3530BA]/10 to-[#D33E9E]/10 flex items-center justify-center group-hover/featured:scale-110 transition-transform duration-300">
                                  <Icon className="w-5 h-5 text-[#3530BA]" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-base font-bold text-gray-900 group-hover/featured:text-[#3530BA] transition-colors">
                                      {item.name}
                                    </h4>
                                    <ArrowRight className="w-4 h-4 text-[#D33E9E] opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-x-1 transition-all" />
                                  </div>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </div>

                              {item.name === "Frameworks" && (
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                  <p className="text-xs text-gray-500 font-medium">
                                    ISO 27001 • SOC 2 • PCI DSS • HIPAA • GDPR • NIST • CIS • and more
                                  </p>
                                </div>
                              )}

                              {/* Integrations removed from data, so won't match here */}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence >


        {/* FULL-WIDTH DROPDOWN PANEL - Resources */}
        <AnimatePresence>
          {
            openDesktopDropdown === "resources" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
                className="w-full border-b border-gray-200 bg-white/98 backdrop-blur-xl overflow-hidden"
                onMouseEnter={() => setOpenDesktopDropdown("resources")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-[#3530BA] via-[#D33E9E] to-[#3530BA]"
                  style={{ backgroundSize: "200% 100%" }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="max-w-2xl space-y-2">
                    {resourcesItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.link}
                          className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10 transition-all duration-300 relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D33E9E]/10 to-transparent opacity-0 group-hover/item:opacity-100"
                            animate={{
                              x: ["-100%", "100%"]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />

                          <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group-hover/item:from-[#3530BA]/10 group-hover/item:to-[#D33E9E]/10 transition-all duration-300">
                            <Icon className="w-6 h-6 text-gray-600 group-hover/item:text-[#3530BA] transition-colors" />
                          </div>

                          <div className="flex-1 min-w-0 relative">
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-semibold text-gray-900 group-hover/item:text-[#3530BA] transition-colors">
                                {item.name}
                              </h4>
                              <ArrowRight className="w-4 h-4 text-[#D33E9E] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            </div>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence >

        {/* FULL-WIDTH DROPDOWN PANEL - Company */}
        <AnimatePresence>
          {
            openDesktopDropdown === "company" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
                className="w-full border-b border-gray-200 bg-white/98 backdrop-blur-xl overflow-hidden"
                onMouseEnter={() => setOpenDesktopDropdown("company")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-[#3530BA] via-[#D33E9E] to-[#3530BA]"
                  style={{ backgroundSize: "200% 100%" }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="max-w-2xl space-y-2">
                    {companyItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.link}
                          className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10 transition-all duration-300 relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D33E9E]/10 to-transparent opacity-0 group-hover/item:opacity-100"
                            animate={{
                              x: ["-100%", "100%"]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />

                          <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group-hover/item:from-[#3530BA]/10 group-hover/item:to-[#D33E9E]/10 transition-all duration-300">
                            <Icon className="w-6 h-6 text-gray-600 group-hover/item:text-[#3530BA] transition-colors" />
                          </div>

                          <div className="flex-1 min-w-0 relative">
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-semibold text-gray-900 group-hover/item:text-[#3530BA] transition-colors">
                                {item.name}
                              </h4>
                              <ArrowRight className="w-4 h-4 text-[#D33E9E] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            </div>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence >
      </nav >

      {/* MOBILE MENU - Fixed width and positioning */}
      <AnimatePresence>
        {
          mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-2xl z-[999] overflow-y-auto"
              >
                <div className="p-4 sm:p-6 pt-20 sm:pt-24">
                  <div className="space-y-2">
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(openMobileDropdown === "products" ? null : "products")
                      }
                      className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left text-gray-800 font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200"
                    >
                      Products
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${openMobileDropdown === "products" ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openMobileDropdown === "products" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 sm:pl-4 pt-2 space-y-4">
                            {productCategories.map((category) => (
                              <div key={category.title}>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 px-2">
                                  {category.title}
                                </h4>
                                <div className="space-y-1">
                                  {category.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                      <Link
                                        key={item.name}
                                        href={item.link}
                                        onClick={(e) => {
                                          if (item.link === '/#') {
                                            e.preventDefault();
                                          } else {
                                            setMobileMenuOpen(false);
                                          }
                                        }}
                                        className={`flex items-start gap-2.5 sm:gap-3 px-2 py-2 sm:py-2.5 rounded-lg transition-all duration-200 ${item.link === '/#' ? 'cursor-default opacity-60' : 'hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10'}`}
                                      >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <div className="flex-1 min-w-0">
                                          <div className="text-xs sm:text-sm font-medium text-gray-900">
                                            {item.name}
                                          </div>
                                          <div className="text-xs text-gray-600 mt-0.5">
                                            {item.description}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(openMobileDropdown === "resources" ? null : "resources")
                      }
                      className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left text-gray-800 font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200"
                    >
                      Resources
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${openMobileDropdown === "resources" ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openMobileDropdown === "resources" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 sm:pl-4 pt-2 space-y-1">
                            {resourcesItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.link}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-start gap-2.5 sm:gap-3 px-2 py-2 sm:py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10 transition-all duration-200"
                                >
                                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                                      {item.name}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-0.5">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(openMobileDropdown === "company" ? null : "company")
                      }
                      className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left text-gray-800 font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200"
                    >
                      Company
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${openMobileDropdown === "company" ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openMobileDropdown === "company" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 sm:pl-4 pt-2 space-y-1">
                            {companyItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.link}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-start gap-2.5 sm:gap-3 px-2 py-2 sm:py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10 transition-all duration-200"
                                >
                                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                                      {item.name}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-0.5">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
                    <Link
                      href="https://meetings-na2.hubspot.com/manish-k-saini/website-lead"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-center text-white text-sm sm:text-base font-bold bg-gradient-to-r from-[#3530BA] via-[#4C32B8] to-[#D33E9E] shadow-[0_0_20px_rgba(211,62,158,0.4)] hover:shadow-[0_0_30px_rgba(211,62,158,0.6)] transition-all duration-300"
                    >
                      Book a Demo
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-center text-black text-sm sm:text-base font-bold border border-gray-300 hover:text-white hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#D33E9E,#3530BA)_border-box] transition-all duration-300"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )
        }
      </AnimatePresence >
    </>
  );
}
