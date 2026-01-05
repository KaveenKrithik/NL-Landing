"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Events", path: "/events" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg shadow-black/5"
          : "bg-white/80 backdrop-blur-2xl"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-xl lg:text-2xl font-bold">
                <span className="text-primary">Nexus</span>{" "}
                <span className="text-gray-900">Labs</span>
              </div>
            </Link>
            <div className="text-[10px] lg:text-xs font-normal text-gray-500 mt-0.5">
              STEM Education & Innovation
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.path}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu - Curtain Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Left Curtain */}
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              exit={{ x: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 bottom-0 w-1/2 bg-white shadow-2xl z-[70] lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-24 space-y-3">
                {navItems.slice(0, Math.ceil(navItems.length / 2)).map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-4 rounded-xl text-base font-bold transition-all ${
                          isActive
                            ? "bg-primary text-white shadow-lg"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            {/* Right Curtain */}
            <motion.div
              initial={{ x: "50%" }}
              animate={{ x: 0 }}
              exit={{ x: "50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-1/2 bg-white shadow-2xl z-[70] lg:hidden overflow-y-auto border-l border-gray-200"
            >
              <div className="p-6 pt-24 space-y-3">
                {navItems.slice(Math.ceil(navItems.length / 2)).map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-4 rounded-xl text-base font-bold transition-all ${
                          isActive
                            ? "bg-primary text-white shadow-lg"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
