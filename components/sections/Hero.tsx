"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="trust" className="relative pt-20 lg:pt-24 overflow-hidden min-h-screen flex items-center bg-navy">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 tech-pattern" />

      {/* Glowing Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light border border-white/10 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                EST. UNDER INDIAN TRUSTS ACT, 1882
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Empowering{" "}
              <span className="text-accent">Generations</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              A Public Charitable Trust dedicated to establishing educational institutions, promoting academic excellence, and providing vocational training to the underprivileged across Tamil Nadu and India.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#objectives">
                <motion.button
                  className="group px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Mission
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="#donate">
                <motion.button
                  className="px-8 py-4 bg-transparent text-white rounded-full text-lg font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Support Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800/50 border border-white/10">
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50" />

              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-gray-700/50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Featured Image</p>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
