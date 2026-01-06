"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Vocational", path: "/vocational" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-stone-100 via-neutral-100 to-stone-100 border-b border-stone-200/60">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left side - Contact Info */}
            <div className="flex items-center gap-4 md:gap-6 text-gray-800">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">(123) 456-7890</span>
              </a>
              <span className="hidden md:inline text-gray-300">|</span>
              <a
                href="mailto:lumierefoundation.india@gmail.com"
                className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline font-medium">
                  lumierefoundation.india@gmail.com
                </span>
              </a>
            </div>

            {/* Right side - Scrolling Address */}
            <div className="flex items-center gap-3 overflow-hidden">
              <MapPin className="w-3.5 h-3.5 text-gray-700 flex-shrink-0 hidden md:block" />
              <div className="relative overflow-hidden max-w-md">
                <motion.div
                  animate={{
                    x: [0, -500],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear",
                    },
                  }}
                  className="whitespace-nowrap text-gray-800 font-medium"
                >
                  123 Foundation Street, Community Center, Education District,
                  City 12345
                  <span className="mx-8">•</span>
                  123 Foundation Street, Community Center, Education District,
                  City 12345
                </motion.div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-500 ${isScrolled
          ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-navy/80 backdrop-blur-xl"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" className="flex items-center gap-3 group">
                {/* Logo Image */}
                <Image
                  src="/lumiere-logo.png"
                  alt="Lumiere Foundation Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <div>
                  <div className="text-xl lg:text-2xl font-bold tracking-wide">
                    <span className="text-white">LUMIERE</span>
                  </div>
                  <div className="text-xs lg:text-sm font-medium text-primary tracking-widest">
                    FOUNDATION
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.path}
                    className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Contribute Button */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <Link href="#donate">
                  <motion.button
                    className="ml-4 px-6 py-3 bg-primary text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-4 h-4" />
                    Contribute
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-300 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-navy-light border-t border-white/10">
              <div className="container mx-auto px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-3 rounded-lg text-base font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Link
                    href="#donate"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3 mt-2 bg-primary text-white rounded-lg text-base font-semibold text-center"
                  >
                    <Heart className="w-4 h-4 inline mr-2" />
                    Contribute
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
