"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Lumiere Foundation?",
    answer:
      "Lumiere Foundation is a charitable and educational trust committed to empowering individuals and communities through inclusive education, healthcare access, social welfare, and sustainable development initiatives. Established as an irrevocable charitable trust, we work solely for the public good.",
  },
  {
    question: "What are the focus areas of Lumiere Foundation?",
    answer:
      "Our focus areas include: Education & Skill Development, Healthcare & Medical Relief, Women & Youth Empowerment, Social Welfare & Environment, and Community Development. We aim to create lasting positive change through comprehensive programs in each area.",
  },
  {
    question: "How can I contribute to the Foundation?",
    answer:
      "You can support us by: making a one-time or recurring donation, sponsoring education or medical assistance, or through CSR and institutional partnerships. All donations are utilized strictly for charitable purposes.",
  },
  {
    question: "Is the Foundation transparent about its operations?",
    answer:
      "Yes, we operate under applicable laws of India with full transparency. Our annual accounts are audited by a Chartered Accountant, donations are acknowledged with official receipts, and all surplus is reinvested only for charitable objectives.",
  },
  {
    question: "What educational programs do you offer?",
    answer:
      "We support schools, colleges, universities & training institutions, provide scholarships for meritorious and underprivileged students, offer digital literacy and pro-skill education, and vocational programs including tailoring, computer skills, handicrafts, and beauty courses.",
  },
  {
    question: "What healthcare services does the Foundation provide?",
    answer:
      "We organize free medical camps and health screenings, provide support for surgeries and specialized treatments, offer mental and physical therapy for persons with disabilities, and operate charitable medical centers and hospitals.",
  },
  {
    question: "How does the Foundation support women and youth?",
    answer:
      "We provide skill training and self-employment initiatives, residential facilities for women trainees, and youth employability and leadership programs. Our vocational training centers offer courses in tailoring, computer education, handicrafts, and more.",
  },
  {
    question: "How is the Foundation governed?",
    answer:
      "Lumiere Foundation is governed by a committed Board of Trustees who serve in an honorary capacity. There is no profit distribution to trustees, all funds are used solely for charitable purposes, decisions are taken collectively by the Board, and we maintain full compliance with Indian laws.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
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
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
            isOpen ? "bg-primary" : "bg-gray-100 group-hover:bg-gray-200"
          }`}
        >
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
            <p className="pb-6 text-gray-600 leading-relaxed pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
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
            Find answers to common questions about our foundation, programs, and
            how you can get involved
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
