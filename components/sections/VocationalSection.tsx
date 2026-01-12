"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const trainingPrograms = [
  {
    title: "Tailoring & Embroidery",
    description: "Professional garment construction and embroidery courses.",
  },
  {
    title: "Computer Education",
    description: "Basic to advanced IT and digital literacy skills.",
  },
  {
    title: "Handicrafts & Beauty",
    description: "Candle making, handicrafts, and cosmetology courses.",
  },
  {
    title: "Garment & Apparel",
    description: "Professional apparel training with industry skills.",
  },
];

export default function VocationalSection() {
  return (
    <section
      id="vocational"
      className="py-24 lg:py-32 bg-navy relative overflow-hidden"
    >
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 tech-pattern" />

      {/* Glowing Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
              Vocational Training
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Skills for Independence
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our vocational programs provide income-generating skills to women
              and youth. We offer residential facilities for trainees, enabling
              them to focus on developing skills that lead to self-employment
              and financial independence.
            </p>

            {/* Training Programs List */}
            <ul className="space-y-4 mb-10">
              {trainingPrograms.map((program, index) => (
                <motion.li
                  key={program.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-white font-semibold">
                      {program.title}:
                    </span>{" "}
                    <span className="text-gray-400">{program.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href="/donate">
              <motion.button
                className="px-8 py-4 bg-accent text-white rounded-full text-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Sponsor a Vocational Kit
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Image 1 - Tailoring */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/images/vocational-tailoring.png"
                alt="Women learning tailoring at vocational center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  Tailoring Center
                </p>
              </div>
            </div>

            {/* Image 2 - Computer Lab */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-xl mt-8">
              <Image
                src="/images/vocational-computer.png"
                alt="Students learning computer skills"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Computer Lab</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
