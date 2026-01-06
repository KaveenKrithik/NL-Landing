"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import Image from "next/image";

const impactLevels = [
    { id: "materials", label: "Materials", amount: 2500, description: "School supplies for one student", image: "/images/teacher-student.png" },
    { id: "literacy", label: "Literacy", amount: 5000, description: "Adult literacy program support", image: "/images/hero-classroom.png" },
    { id: "culture", label: "Culture", amount: 10000, description: "Cultural and arts education", image: "/images/community-event.png" },
    { id: "vocational", label: "Vocational", amount: 15000, description: "Vocational training sponsorship", image: "/images/vocational-tailoring.png" },
    { id: "scholarship", label: "Scholarship", amount: 25000, description: "Complete tuition, hostel, and food for a year", image: "/images/scholarship-student.png" },
];

export default function DonationSection() {
    const [selectedLevel, setSelectedLevel] = useState(4); // Default to Scholarship

    const currentImpact = impactLevels[selectedLevel];

    return (
        <section id="donate" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                        Your Contribution Matters
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose an area of impact defined in our Trust Deed.
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            {/* Left - Image/Preview */}
                            <div className="relative aspect-square lg:aspect-auto min-h-[300px] lg:min-h-[400px]">
                                <Image
                                    src={currentImpact.image}
                                    alt={currentImpact.description}
                                    fill
                                    className="object-cover transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Impact Label Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 z-10">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {currentImpact.label === "Scholarship" ? "Full Scholarship" : currentImpact.label}
                                    </h3>
                                    <p className="text-gray-200">
                                        {currentImpact.description}
                                    </p>
                                </div>
                            </div>

                            {/* Right - Controls */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                {/* Slider Section */}
                                <div className="mb-8">
                                    <label className="block text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                                        Select Impact Level
                                    </label>

                                    {/* Custom Slider */}
                                    <div className="relative mb-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="4"
                                            value={selectedLevel}
                                            onChange={(e) => setSelectedLevel(parseInt(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
                                            style={{
                                                background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${selectedLevel * 25}%, #e5e7eb ${selectedLevel * 25}%, #e5e7eb 100%)`
                                            }}
                                        />
                                        {/* Orange dot indicator */}
                                        <div
                                            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full shadow-lg pointer-events-none transition-all duration-300"
                                            style={{ left: `calc(${selectedLevel * 25}% - 10px)` }}
                                        />
                                    </div>

                                    {/* Labels */}
                                    <div className="flex justify-between text-sm text-gray-500">
                                        {impactLevels.map((level) => (
                                            <span key={level.id} className="text-center">
                                                {level.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Donation Amount */}
                                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
                                                Donation Amount
                                            </label>
                                            <div className="text-4xl font-bold text-gray-900">
                                                ₹{currentImpact.amount.toLocaleString("en-IN")}
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <GraduationCap className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    className="w-full py-4 bg-navy text-white rounded-xl text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-navy-light transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Proceed to Donate
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>

                                {/* Tax Exemption Note */}
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    All donations are eligible for tax exemption under 80G.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Custom Slider Styles */}
            <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 0;
          height: 0;
          background: transparent;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 0;
          height: 0;
          background: transparent;
          cursor: pointer;
          border: none;
        }
      `}</style>
        </section>
    );
}
