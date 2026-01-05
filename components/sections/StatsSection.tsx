"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

const stats = [
  {
    icon: Users,
    number: "50K+",
    label: "Students Impacted",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: GraduationCap,
    number: "500+",
    label: "Schools Partnered",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    number: "100+",
    label: "STEM Labs Installed",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Satisfaction Rate",
    color: "from-green-500 to-emerald-500",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our commitment to excellence reflected in our achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <motion.div
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <AnimatedNumber value={stat.number} duration={2} />
                </motion.div>
                <div className="text-lg text-white font-semibold drop-shadow-lg">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

