"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lumiere Foundation is an irrevocable charitable and educational
            trust established to serve society through education, healthcare,
            and social empowerment. We believe that sustainable development
            begins when individuals are equipped with knowledge, health, and
            opportunity.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/community-event.png"
                alt="Community gathering at educational charity event"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Lumiere Foundation
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established as an irrevocable charitable trust, Lumiere Foundation
              works solely for the public good, guided by ethical governance,
              transparency, and social responsibility.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a registered Charitable & Educational Trust operating
              strictly on a not-for-profit basis with transparent governance and
              audited accounts. Our focus is on underserved and marginalized
              communities.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600">Not-for-Profit</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-accent mb-1">
                  Audited
                </div>
                <div className="text-sm text-gray-600">Annual Accounts</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "To build an inclusive and equitable society where education, healthcare, and opportunities are accessible to all.",
              color: "bg-blue-500",
            },
            {
              icon: Target,
              title: "Our Mission",
              description:
                "Promote quality education and skill development, provide compassionate healthcare to the needy, empower women, youth, and marginalized communities, and foster ethical values and social responsibility.",
              color: "bg-accent",
            },
            {
              icon: Heart,
              title: "Core Values",
              description:
                "Integrity • Compassion • Inclusion • Transparency • Service — These principles guide every initiative and decision we make.",
              color: "bg-primary",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
