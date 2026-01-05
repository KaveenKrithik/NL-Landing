"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { 
  Microscope, 
  Wrench, 
  Building2, 
  Users, 
  GraduationCap, 
  BookOpen,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Microscope,
      title: "Nexus STEM Labs",
      description:
        "State-of-the-art STEM laboratories equipped with cutting-edge technology and tools for comprehensive hands-on learning experiences.",
      features: [
        "Modern equipment and technology",
        "Comprehensive curriculum integration",
        "Expert training and support",
        "Regular updates and maintenance",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wrench,
      title: "ATAL Tinkering Labs",
      description:
        "Innovative tinkering spaces designed to foster creativity, innovation, and problem-solving skills among students.",
      features: [
        "DIY learning environment",
        "Robotics and electronics kits",
        "3D printing capabilities",
        "Mentorship programs",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Building2,
      title: "Fabrication Labs",
      description:
        "Advanced fabrication facilities enabling students to bring their ideas to life through prototyping and manufacturing.",
      features: [
        "CNC machines and tools",
        "Laser cutting equipment",
        "Material processing",
        "Safety protocols",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "CSR STEM Solutions",
      description:
        "Corporate social responsibility programs bringing STEM education to underserved communities and schools.",
      features: [
        "Community outreach",
        "Scholarship programs",
        "Teacher training",
        "Resource provision",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: "Workshops",
      description:
        "Interactive workshops covering various STEM domains, from robotics and AI to IoT and aeromodelling.",
      features: [
        "Expert-led sessions",
        "Hands-on activities",
        "Certification programs",
        "Flexible scheduling",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: BookOpen,
      title: "Courses",
      description:
        "Comprehensive courses designed to build strong foundations in STEM subjects and advanced specializations.",
      features: [
        "Structured curriculum",
        "Progress tracking",
        "Online and offline options",
        "Industry-relevant content",
      ],
      color: "from-teal-500 to-cyan-500",
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Comprehensive STEM solutions tailored to your educational needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceImages = [
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
              ];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 h-full flex flex-col relative">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${serviceImages[index]})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col flex-grow">
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link href="/contact-us">
                      <motion.div
                        className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              Ready to Transform Your STEM Education?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with us to discuss how we can help bring innovative STEM solutions to your institution.
            </p>
            <Link href="/contact-us">
              <motion.button
                className="px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

