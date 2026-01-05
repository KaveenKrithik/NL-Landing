"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Zap } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const openings = [
    {
      title: "STEM Education Specialist",
      department: "Education",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "We're looking for an experienced STEM education specialist to develop curriculum and lead training programs.",
    },
    {
      title: "Robotics Instructor",
      department: "Education",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Join our team to teach robotics and inspire the next generation of innovators through hands-on learning.",
    },
    {
      title: "Lab Installation Engineer",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Install and maintain STEM labs across schools. Technical background in electronics and engineering required.",
    },
    {
      title: "Content Developer",
      department: "Content",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Create engaging educational content, curriculum materials, and learning resources for STEM programs.",
    },
    {
      title: "Sales & Business Development",
      department: "Sales",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Drive business growth by building relationships with educational institutions and promoting our STEM solutions.",
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Delhi, NCR",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Ensure client satisfaction by managing relationships, providing support, and ensuring successful program implementation.",
    },
  ];

  const benefits = [
    { icon: Heart, title: "Health Insurance", description: "Comprehensive health coverage for you and your family" },
    { icon: Zap, title: "Learning & Development", description: "Continuous learning opportunities and skill development" },
    { icon: Users, title: "Great Team", description: "Work with passionate educators and innovators" },
    { icon: Briefcase, title: "Flexible Work", description: "Flexible working hours and remote options" },
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Help us transform STEM education and inspire the next generation of innovators
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80')",
            }}
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Join Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of a mission-driven team that's making a real impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-xl">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <Link href="/contact-us">
                      <motion.button
                        className="px-6 py-3 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't See a Role That Fits?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link href="/contact-us">
              <motion.button
                className="px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Your Resume
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

