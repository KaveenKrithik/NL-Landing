"use client";

import { motion } from "framer-motion";
import {
    School,
    GraduationCap,
    Users,
    Monitor,
    Palette,
    Music,
    Scissors,
    Heart
} from "lucide-react";

const programs = [
    {
        icon: School,
        title: "Educational Institutions",
        description: "Establishing and administering schools (English, Tamil, and other Indian Language mediums), colleges, universities, deemed universities, vocational training centers, libraries, hostels, and tuition centers across urban and rural areas.",
        color: "from-blue-500 to-blue-600",
        lightColor: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        icon: GraduationCap,
        title: "Academic Excellence",
        description: "Partnering with reputed institutions in India and abroad to ensure high standards of education, infrastructure, and access to global learning opportunities through international collaborations.",
        color: "from-purple-500 to-purple-600",
        lightColor: "bg-purple-50",
        iconColor: "text-purple-500",
    },
    {
        icon: Users,
        title: "Student Support Programs",
        description: "Providing scholarships, stipends, uniforms, transportation, meals, and educational materials to meritorious and economically underprivileged students to pursue quality education.",
        color: "from-cyan-500 to-cyan-600",
        lightColor: "bg-cyan-50",
        iconColor: "text-cyan-500",
    },
    {
        icon: Monitor,
        title: "Digital Literacy",
        description: "Promoting adult education and digital literacy especially in tribal and remote areas, bridging knowledge gaps and enabling lifelong learning for communities.",
        color: "from-green-500 to-green-600",
        lightColor: "bg-green-50",
        iconColor: "text-green-500",
    },
    {
        icon: Users,
        title: "Educator Collaboration",
        description: "Engaging and collaborating with educators, trainers, and domain experts across disciplines for teaching, coaching, research, and skill development in academic and vocational areas.",
        color: "from-orange-500 to-orange-600",
        lightColor: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        icon: Palette,
        title: "Holistic Development",
        description: "Promoting holistic development through extracurricular activities including fine arts, music, dance, sports, foreign languages, and values-based education.",
        color: "from-pink-500 to-pink-600",
        lightColor: "bg-pink-50",
        iconColor: "text-pink-500",
    },
    {
        icon: Music,
        title: "Cultural Education",
        description: "Providing value-based education and youth development programs including cultural education in music, instruments, and dance – academically and professionally to needy students.",
        color: "from-indigo-500 to-indigo-600",
        lightColor: "bg-indigo-50",
        iconColor: "text-indigo-500",
    },
    {
        icon: Scissors,
        title: "Vocational Training",
        description: "Establishing vocational training programs such as tailoring, embroidery, handicrafts, beauty courses, computer education, candle making, garment and apparel training with hostel facilities for poor and destitute women.",
        color: "from-teal-500 to-teal-600",
        lightColor: "bg-teal-50",
        iconColor: "text-teal-500",
    },
];

export default function ProgramsSection() {
    return (
        <section id="programs" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
                        Educational Purposes
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Our Programs & Initiatives
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        As defined in our Trust Deed, our objectives include but are not limited to the following educational purposes across Tamil Nadu and India.
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={program.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 ${program.lightColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className={`w-7 h-7 ${program.iconColor}`} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">
                        Want to learn more about our programs or get involved?
                    </p>
                    <a
                        href="#donate"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                    >
                        <Heart className="w-5 h-5" />
                        Support a Program
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
