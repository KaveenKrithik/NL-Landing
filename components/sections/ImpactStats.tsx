"use client";

import { motion } from "framer-motion";
import { Users, School, Heart, Briefcase, GraduationCap, Home } from "lucide-react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

const impactStats = [
  {
    icon: School,
    number: "50+",
    label: "Educational Institutions",
    color: "from-blue-500 to-cyan-500",
    description: "Schools, colleges, and training centers",
  },
  {
    icon: Users,
    number: "10K+",
    label: "Students Supported",
    color: "from-purple-500 to-pink-500",
    description: "Scholarships and educational aid",
  },
  {
    icon: Heart,
    number: "5K+",
    label: "Medical Beneficiaries",
    color: "from-red-500 to-pink-500",
    description: "Free medical camps and treatments",
  },
  {
    icon: Briefcase,
    number: "2K+",
    label: "Vocational Trainees",
    color: "from-green-500 to-emerald-500",
    description: "Skill development graduates",
  },
  {
    icon: Home,
    number: "500+",
    label: "Shelter Beneficiaries",
    color: "from-orange-500 to-red-500",
    description: "Old age homes and orphanages",
  },
  {
    icon: GraduationCap,
    number: "1K+",
    label: "Adult Learners",
    color: "from-indigo-500 to-blue-500",
    description: "Digital literacy programs",
  },
];

export default function ImpactStats() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Transforming lives through education, healthcare, and community development
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 150 }}
                className="text-center group"
              >
                <motion.div
                  className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </motion.div>
                <motion.div
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 drop-shadow-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                >
                  <AnimatedNumber value={stat.number} duration={1.5} />
                </motion.div>
                <div className="text-lg text-white font-semibold mb-2 drop-shadow-lg">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

