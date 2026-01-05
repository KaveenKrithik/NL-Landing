"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize STEM education by providing innovative, hands-on learning experiences that inspire the next generation of innovators and problem solvers.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Our Vision",
      description:
        "To be the leading provider of comprehensive STEM education solutions, empowering students and educators across India and beyond.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in STEM education, recognized by STEM.org USA accreditation and trusted by leading educational institutions.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously evolve our programs, integrating cutting-edge technologies and methodologies to stay at the forefront of educational innovation.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-50 to-gray-50" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight drop-shadow-lg">
              About <span className="text-primary drop-shadow-md">Nexus Labs</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-semibold bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl drop-shadow-sm">
              Transforming education through innovation, one student at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-square"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  From our humble beginnings, we always envisioned a company that
                  could bring innovative STEM solutions to schools and organizations.
                  What started as a passion project has grown into one of India's
                  leading STEM education providers.
                </p>
                <p>
                  With a commitment to quality and impact, our journey led us to receive
                  the prestigious <strong className="text-primary">STEM accreditation from STEM.org USA</strong>.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  This accreditation is a testament to our dedication to rigorous
                  standards, recognized methodologies, and a future-focused approach in
                  STEM education.
                </p>
                <p>
                  Today, we collaborate with hundreds of educational institutions,
                  empowering thousands of students with the skills and knowledge they
                  need to thrive in an increasingly technology-driven world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl h-full">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "500+", label: "Schools Partnered" },
              { number: "50K+", label: "Students Impacted" },
              { number: "100+", label: "STEM Labs Installed" },
              { number: "10+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

