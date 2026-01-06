"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Partner 1", category: "Education" },
    { name: "Partner 2", category: "Corporate" },
    { name: "Partner 3", category: "NGO" },
    { name: "Partner 4", category: "Government" },
    { name: "Partner 5", category: "International" },
    { name: "Partner 6", category: "Education" },
];

export default function PartnersSection() {
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
                        Our Network
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Trusted Partners
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We collaborate with reputed institutions in India and abroad to ensure the highest quality of education and service delivery
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="aspect-square bg-gray-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-gray-100 hover:border-gray-200 hover:bg-gray-100 transition-all duration-300">
                                <div className="w-16 h-16 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">
                                        {partner.name.charAt(0)}
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500 font-medium">{partner.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partnership CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-navy to-navy-light rounded-3xl p-8 lg:p-12 text-center"
                >
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        Interested in Partnering With Us?
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        We welcome collaborations with educational institutions, corporations, NGOs, and government bodies committed to educational empowerment.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                    >
                        Become a Partner
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
