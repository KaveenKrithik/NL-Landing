"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image with People's Legs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50">
          {/* Placeholder for background image showing people's legs on dirt ground */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/20"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-center">
              We're transforming STEM education by integrating innovation,
              hands-on learning, and future-ready skills
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

