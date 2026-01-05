"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get your STEM lab up and running in record time with our streamlined installation process.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Certified Excellence",
    description: "STEM.org USA accredited programs ensuring the highest quality standards in education.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description: "Serving schools and institutions across India with comprehensive STEM solutions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Cutting-edge technology and methodologies to keep education ahead of the curve.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    color: "from-purple-500 to-pink-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Choose <span className="text-primary">Nexus Labs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach to STEM education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center group`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative rounded-3xl overflow-hidden aspect-square">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute -top-6 ${isEven ? "-right-6" : "-left-6"} w-24 h-24 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 drop-shadow-sm">{feature.title}</h3>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

