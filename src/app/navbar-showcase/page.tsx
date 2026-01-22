"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  text: string;
  link: string;
}

interface Navlink {
  base: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navlinks: Navlink[] = [
  {
    base: "Products",
    href: "/",
    dropdown: [
      { text: "Cloud Security", link: "/products/cloud-security" },
      { text: "Inventory Management", link: "/products/inventory-management" },
      { text: "Governance, Risk & Compliance", link: "/products/governance-risk-compliance" }
    ]
  },
  {
    base: "Company",
    href: "/",
    dropdown: [
      { text: "About Us", link: "/about-us" },
      { text: "Contact Us", link: "/contact" }
    ]
  },
  {
    base: "Resources",
    href: "/",
    dropdown: [
      { text: "FAQs", link: "/faq" },
      { text: "Whitepaper", link: "/whitepaper" }
    ]
  },
  {
    base: "Suron AI",
    href: "/suron-ai"
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[999] transition-all duration-500 ease-out
          ${
            scrolled
              ? "bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
              : "bg-white/85 backdrop-blur-md border-b border-gray-200/60"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="relative z-[1000]">
            <motion.div
              className="relative w-40 h-12 flex items-center cursor-pointer"
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

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navlinks.map((item) => (
              <div key={item.base} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300 relative"
                >
                  {item.base}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* DROPDOWN MENU */}
                {item.dropdown && (
                  <div
                    className="
                      absolute left-0 top-full mt-2 w-64
                      rounded-2xl border shadow-2xl
                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-300 ease-out
                      bg-white border-gray-200/50
                    "
                  >
                    <div className="p-2">
                      {item.dropdown.map((drop, idx) => (
                        <Link
                          key={drop.text}
                          href={drop.link}
                          className="
                            block px-4 py-3 rounded-xl text-sm font-medium text-gray-700
                            hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10
                            hover:text-black transition-all duration-200
                          "
                        >
                          {drop.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-300 hover:border-black hover:text-black transition-all duration-300"
              >
                Sign In
              </motion.button>
            </Link>

            <Link href="/book-demo">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(211,62,158,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 py-2.5 rounded-full text-white text-sm font-bold
                  bg-gradient-to-r from-[#3530BA] via-[#4C32B8] to-[#D33E9E]
                  shadow-[0_0_20px_rgba(211,62,158,0.4)]
                  transition-all duration-300
                "
              >
                Book a Demo
              </motion.button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition-colors duration-300 z-[1000]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="
                fixed top-0 right-0 h-full w-[85%] max-w-sm
                bg-white shadow-2xl z-[999]
                overflow-y-auto
              "
            >
              <div className="p-6 pt-24">
                {/* Mobile Nav Links */}
                <div className="space-y-1">
                  {navlinks.map((item) => (
                    <div key={item.base}>
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() =>
                              setOpenDropdown(openDropdown === item.base ? null : item.base)
                            }
                            className="
                              w-full flex items-center justify-between
                              px-4 py-3 rounded-xl text-left
                              text-gray-800 font-semibold text-base
                              hover:bg-gray-100 transition-colors duration-200
                            "
                          >
                            {item.base}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                openDropdown === item.base ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {openDropdown === item.base && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pt-2 space-y-1">
                                  {item.dropdown.map((drop) => (
                                    <Link
                                      key={drop.text}
                                      href={drop.link}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="
                                        block px-4 py-2.5 rounded-lg
                                        text-gray-600 text-sm font-medium
                                        hover:bg-gradient-to-r hover:from-[#D33E9E]/10 hover:to-[#3530BA]/10
                                        hover:text-black transition-all duration-200
                                      "
                                    >
                                      {drop.text}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="
                            block px-4 py-3 rounded-xl
                            text-gray-800 font-semibold text-base
                            hover:bg-gray-100 transition-colors duration-200
                          "
                        >
                          {item.base}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Link
                    href="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block w-full px-6 py-3 rounded-full text-center
                      text-gray-800 font-semibold border-2 border-gray-300
                      hover:border-black hover:text-black
                      transition-all duration-300
                    "
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/book-demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block w-full px-6 py-3 rounded-full text-center
                      text-white font-bold
                      bg-gradient-to-r from-[#3530BA] via-[#4C32B8] to-[#D33E9E]
                      shadow-[0_0_20px_rgba(211,62,158,0.4)]
                      hover:shadow-[0_0_30px_rgba(211,62,158,0.6)]
                      transition-all duration-300
                    "
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

