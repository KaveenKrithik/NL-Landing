"use client";

import { motion } from "framer-motion";
import { Handshake, Building2, Users, Gift } from "lucide-react";

const waysToHelp = [
  {
    icon: Gift,
    title: "One-Time Donation",
    description:
      "Make a single contribution to support our educational, healthcare, and empowerment programs. Every rupee counts towards transforming a life.",
    cta: "Donate Now",
    href: "#donate",
    color: "bg-primary",
    lightColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Recurring Donation",
    description:
      "Join our community of monthly donors and provide sustained support for education, medical assistance, and vocational training programs.",
    cta: "Give Monthly",
    href: "#donate",
    color: "bg-accent",
    lightColor: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Building2,
    title: "Sponsor a Program",
    description:
      "Sponsor education or medical assistance directly. Choose to support scholarships, healthcare camps, or vocational training initiatives.",
    cta: "Sponsor Now",
    href: "#donate",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Handshake,
    title: "CSR Partnership",
    description:
      "Partner with us through CSR and institutional partnerships. We offer comprehensive reporting and impact measurement for corporate donors.",
    cta: "Partner With Us",
    href: "#contact",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export default function HowToHelpSection() {
  return (
    <section
      id="help"
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
            Get Involved
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            How You Can Help
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            There are many ways to contribute to our mission of transforming
            lives through education, healthcare, and empowerment
          </p>
        </motion.div>

        {/* Ways to Help Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {waysToHelp.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${way.lightColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon
                      className={`w-7 h-7 ${way.iconColor}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {way.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                    {way.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={way.href}
                    className={`inline-flex items-center justify-center px-6 py-3 ${way.color} text-white rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg`}
                  >
                    {way.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">
                All donations are eligible for
              </span>
            </div>
            <div className="font-bold text-gray-900">80G Tax Exemption</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
