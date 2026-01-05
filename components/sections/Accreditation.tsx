"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Star, Sparkles } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "STEM REVIEWED",
    color: "blue",
    id: "STEM-001",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: CheckCircle,
    title: "STEM ACCREDITED",
    color: "red",
    id: "STEM-002",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Star,
    title: "STEM CERTIFIED",
    color: "green",
    id: "STEM-003",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Accreditation() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Recognition
                </span>
              </div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                From our humble beginnings, we always envisioned a company that
                could bring innovative STEM solutions to schools and
                organizations. With a commitment to quality and impact, our
                journey led us to receive the prestigious{" "}
                <span className="text-primary font-semibold">
                  STEM accreditation from STEM.org USA
                </span>
                . This accreditation is a testament to our dedication to
                rigorous standards, recognized methodologies, and a
                future-focused approach in STEM education.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 flex items-center gap-6 relative overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${badge.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      {/* Icon */}
                      <div
                        className={`w-20 h-20 rounded-xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {badge.title}
                        </h3>
                        <p className="text-sm text-gray-500">{badge.id}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
