"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const trainingPrograms = [
    {
        title: "Tailoring & Embroidery",
        description: "Professional garment construction courses.",
    },
    {
        title: "Computer Education",
        description: "Basic to advanced IT literacy.",
    },
    {
        title: "Crafts & Beauty",
        description: "Candle making, handicrafts, and cosmetology.",
    },
];

export default function VocationalSection() {
    return (
        <section id="vocational" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
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
                            Skill Development
                        </span>

                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Vocational Training for Independence
                        </h2>

                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            We believe in dignity through labor. Our dedicated centers provide income-generating skills to women and youth, accompanied by hostel facilities for those in need.
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
                                        <span className="text-white font-semibold">{program.title}:</span>{" "}
                                        <span className="text-gray-400">{program.description}</span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <Link href="#donate">
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
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-800/50 border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-gray-500 p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-700/50 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs">Tailoring Center</p>
                                </div>
                            </div>
                        </div>

                        {/* Image 2 - Computer Lab */}
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-800/50 border border-white/10 mt-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-gray-500 p-4">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-700/50 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs">Computer Lab</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
