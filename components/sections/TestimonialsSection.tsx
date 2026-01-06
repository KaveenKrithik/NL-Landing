"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
    {
        quote: "The scholarship from Lumiere Foundation changed my life. I was able to complete my education and now I'm working as a software engineer. I will forever be grateful.",
        name: "Priya Krishnan",
        role: "Scholarship Beneficiary, 2019",
        location: "Chennai, Tamil Nadu",
    },
    {
        quote: "After completing tailoring training at the vocational center, I started my own small business. Today, I support my entire family and have hired two other women.",
        name: "Lakshmi Devi",
        role: "Vocational Training Graduate",
        location: "Madurai, Tamil Nadu",
    },
    {
        quote: "The computer education program opened doors I never knew existed. Coming from a tribal village, I now work in digital marketing and help others learn technology.",
        name: "Karthik Selvam",
        role: "Digital Literacy Program",
        location: "Nilgiris, Tamil Nadu",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
                        Impact Stories
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Voices of Change
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real stories from beneficiaries whose lives have been transformed through our programs
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-gray-50 rounded-3xl p-8 relative hover:bg-gray-100 transition-colors duration-300">
                                {/* Quote Icon */}
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Quote className="w-6 h-6 text-primary" />
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    &ldquo;{story.quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                                        {story.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{story.name}</div>
                                        <div className="text-sm text-gray-500">{story.role}</div>
                                        <div className="text-xs text-gray-400">{story.location}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
