"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Floating education words and symbols for background effect
const floatingWords = [
  { text: "EDUCATION", x: "5%", y: "15%", size: "text-6xl", delay: 0 },
  { text: "KNOWLEDGE", x: "70%", y: "20%", size: "text-5xl", delay: 2 },
  { text: "EMPOWER", x: "15%", y: "60%", size: "text-7xl", delay: 4 },
  { text: "LEARN", x: "80%", y: "70%", size: "text-4xl", delay: 1 },
  { text: "GROWTH", x: "45%", y: "85%", size: "text-5xl", delay: 3 },
  { text: "FUTURE", x: "25%", y: "40%", size: "text-6xl", delay: 5 },
  { text: "INSPIRE", x: "60%", y: "45%", size: "text-4xl", delay: 2.5 },
  { text: "WISDOM", x: "85%", y: "35%", size: "text-5xl", delay: 1.5 },
  { text: "CHANGE", x: "10%", y: "80%", size: "text-4xl", delay: 4.5 },
  { text: "HOPE", x: "55%", y: "10%", size: "text-6xl", delay: 3.5 },
];

const floatingSymbols = [
  { text: "∑", x: "20%", y: "25%", size: "text-8xl", delay: 0.5 },
  { text: "∞", x: "75%", y: "55%", size: "text-7xl", delay: 2.5 },
  { text: "π", x: "40%", y: "75%", size: "text-6xl", delay: 4.5 },
  { text: "√", x: "65%", y: "30%", size: "text-8xl", delay: 1.5 },
  { text: "α", x: "30%", y: "55%", size: "text-5xl", delay: 3.5 },
  { text: "λ", x: "50%", y: "35%", size: "text-6xl", delay: 5.5 },
  { text: "Ω", x: "85%", y: "80%", size: "text-7xl", delay: 0 },
  { text: "∫", x: "5%", y: "45%", size: "text-9xl", delay: 2 },
];

const floatingEquations = [
  { text: "E = mc²", x: "8%", y: "30%", delay: 1 },
  { text: "a² + b² = c²", x: "72%", y: "65%", delay: 3 },
  { text: "F = ma", x: "35%", y: "90%", delay: 5 },
  { text: "∫ f(x)dx", x: "90%", y: "15%", delay: 2 },
];

// Zoom fade loop animation variant
const zoomFadeAnimation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: {
    scale: [0.5, 1.2, 1, 1.2, 0.5],
    opacity: [0, 0.08, 0.05, 0.08, 0],
  },
};

const symbolZoomFadeAnimation = {
  initial: { scale: 0.3, opacity: 0 },
  animate: {
    scale: [0.3, 1.3, 1, 1.3, 0.3],
    opacity: [0, 0.1, 0.06, 0.1, 0],
  },
};

const equationZoomFadeAnimation = {
  initial: { scale: 0.4, opacity: 0 },
  animate: {
    scale: [0.4, 1.1, 0.9, 1.1, 0.4],
    opacity: [0, 0.06, 0.04, 0.06, 0],
  },
};

export default function Hero() {
  return (
    <section id="trust" className="relative pt-20 lg:pt-24 overflow-hidden min-h-screen flex items-center bg-navy">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 tech-pattern" />

      {/* Floating Education Words - Zoom Fade Loop Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingWords.map((word, index) => (
          <motion.div
            key={`word-${index}`}
            className={`absolute font-bold text-white ${word.size} tracking-widest select-none`}
            style={{
              left: word.x,
              top: word.y,
            }}
            initial={zoomFadeAnimation.initial}
            animate={zoomFadeAnimation.animate}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: word.delay,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            {word.text}
          </motion.div>
        ))}

        {/* Floating Math Symbols with Zoom Fade */}
        {floatingSymbols.map((symbol, index) => (
          <motion.div
            key={`symbol-${index}`}
            className={`absolute font-serif text-accent ${symbol.size} select-none`}
            style={{
              left: symbol.x,
              top: symbol.y,
            }}
            initial={symbolZoomFadeAnimation.initial}
            animate={symbolZoomFadeAnimation.animate}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: symbol.delay,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            {symbol.text}
          </motion.div>
        ))}

        {/* Floating Equations with Zoom Fade */}
        {floatingEquations.map((equation, index) => (
          <motion.div
            key={`equation-${index}`}
            className="absolute text-primary font-mono text-2xl select-none"
            style={{
              left: equation.x,
              top: equation.y,
            }}
            initial={equationZoomFadeAnimation.initial}
            animate={equationZoomFadeAnimation.animate}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: equation.delay,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            {equation.text}
          </motion.div>
        ))}
      </div>

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

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/hero-classroom.png"
                alt="Students learning in a classroom"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
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
