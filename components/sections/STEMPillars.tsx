"use client";

import { motion } from "framer-motion";
import { Wrench, BookOpen, Brain, Lightbulb, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Wrench,
    title: "Hands on Learning",
    description:
      "We offer expert-led training sessions on STEM and ATAL Tinkering Labs, equipping students with essential skills in robotics, electronics, and innovation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Curriculum Integration",
    description:
      "We integrate a strong academic curriculum with STEM education, ensuring students build a well-rounded foundation in core subjects and excel in innovation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Multi-Domain Exposure",
    description:
      "From Robotics and AI to Aeromodelling and IoT, our programs span a wide array of STEM fields, catering to diverse age groups and learning needs.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Lightbulb,
    title: "DIY Learning",
    description:
      "We empower students with a maker mindset, encouraging them to experiment, innovate, and create their own projects, promoting creativity and self-reliance.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function STEMPillars() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our STEM Education Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four pillars that define our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 drop-shadow-sm">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed flex-grow relative z-10 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl">
                    {pillar.description}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="mt-6 relative z-10">
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
