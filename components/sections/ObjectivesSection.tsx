"use client";

import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, Monitor } from "lucide-react";
import { useRef } from "react";

const objectives = [
  {
    icon: Building2,
    title: "Education & Skill Development",
    description:
      "Establishing schools, colleges, and training institutions. Providing scholarships for meritorious and underprivileged students, digital literacy, and vocational programs.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: GraduationCap,
    title: "Healthcare & Medical Relief",
    description:
      "Free medical camps, health screenings, support for surgeries and specialized treatments, mental and physical therapy, and charitable medical centers.",
    color: "bg-cyan-100",
    iconColor: "text-cyan-500",
  },
  {
    icon: Monitor,
    title: "Women & Youth Empowerment",
    description:
      "Skill training and self-employment initiatives, residential facilities for women trainees, youth employability and leadership programs.",
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

// Animated curve path component
function AnimatedCurve() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main curve - going from bottom left to top right */}
        <motion.path
          d="M-100 750 Q 200 650, 350 500 T 600 350 T 900 200 T 1300 -50"
          stroke="#06b6d4"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 },
          }}
        />
        {/* Second decorative curve */}
        <motion.path
          d="M-50 850 Q 250 700, 400 550 T 700 400 T 1000 250 T 1350 50"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 0.3 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
            opacity: { duration: 0.5, delay: 0.3 },
          }}
        />
        {/* Third decorative curve */}
        <motion.path
          d="M-150 700 Q 150 600, 300 450 T 550 300 T 850 150 T 1250 -100"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 0.2 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            pathLength: { duration: 2.2, ease: "easeInOut", delay: 0.5 },
            opacity: { duration: 0.5, delay: 0.5 },
          }}
        />
      </svg>
    </div>
  );
}

export default function ObjectivesSection() {
  return (
    <section
      id="objectives"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />

      {/* Animated Curve Background */}
      <AnimatedCurve />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Section Label */}
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Focus Areas
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Empowering Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lumiere Foundation focuses on holistic development through
            education, healthcare, empowerment, and sustainable community
            initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${objective.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon
                        className={`w-8 h-8 ${objective.iconColor}`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {objective.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
