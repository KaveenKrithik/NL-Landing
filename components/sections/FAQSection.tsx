"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is Lumiere Foundation?",
        answer: "Lumiere Foundation is a public charitable trust established under the Indian Trusts Act, 1882. We are dedicated to educational and charitable purposes, focusing on establishing educational institutions, promoting academic excellence, and providing vocational training across Tamil Nadu and India.",
    },
    {
        question: "Are donations tax-exempt?",
        answer: "Yes, all donations to Lumiere Foundation are eligible for tax exemption under Section 80G of the Income Tax Act. We provide official receipts for all contributions that can be used for tax filing purposes.",
    },
    {
        question: "How can I contribute to the Foundation?",
        answer: "You can contribute in multiple ways: one-time donations, monthly giving programs, corporate partnerships through CSR initiatives, or by volunteering your time and skills. Visit our donation section to learn more about each option.",
    },
    {
        question: "What programs does the Foundation support?",
        answer: "We support a wide range of educational programs including: establishing and managing schools, colleges, and vocational training centers; providing scholarships and student support; digital literacy programs especially in tribal areas; cultural education in music and arts; and vocational training for women in tailoring, embroidery, and handicrafts.",
    },
    {
        question: "How is my donation used?",
        answer: "We maintain 100% transparency in our operations. Your donations directly support: student scholarships, educational materials, infrastructure development, teacher training, vocational equipment, hostel facilities, and meal programs for underprivileged students.",
    },
    {
        question: "Can I sponsor a specific student or program?",
        answer: "Yes, we offer options to sponsor individual students, specific programs, or vocational training kits. Contact us to learn more about targeted sponsorship opportunities that match your giving preferences.",
    },
    {
        question: "How can I verify the Foundation's legitimacy?",
        answer: "Lumiere Foundation is a registered trust under the Indian Trusts Act, 1882. We have valid 80G and 12A registrations. Our annual reports, audited financial statements, and registration documents are available upon request.",
    },
    {
        question: "Does the Foundation work only in Tamil Nadu?",
        answer: "While our primary focus is Tamil Nadu, our Trust Deed allows us to operate across urban and rural areas of India. We also engage in international collaborations with reputed institutions abroad to ensure global learning opportunities.",
    },
];

function FAQItem({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 last:border-b-0"
        >
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-primary transition-colors">
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-white" />
                    ) : (
                        <Plus className="w-4 h-4 text-gray-600" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 leading-relaxed pr-12">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
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
                        Common Questions
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our foundation, programs, and how you can get involved
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                        Contact us for more information
                        <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
