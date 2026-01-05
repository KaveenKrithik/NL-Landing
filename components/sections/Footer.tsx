"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const services = [
  "Propeller STEM Labs",
  "ATAL Tinkering Labs",
  "Fabrication Labs",
  "CSR STEM Solutions",
  "Workshops",
  "Courses",
];

const community = ["Nexus Young Scientist", "Nexus Wings"];

const resources = [
  "Privacy Policy",
  "Refund and Returns Policy",
  "Terms and Conditions",
];

const knowMore = [
  "Science with Salman",
  "Awards & Recognitions",
  "Success Stories",
  "News",
  "Blogs",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Column 1: Propeller Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-primary">Nexus</span> Labs
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Nexus Labs is one of the top 10 STEM education
              institutions in India and Tamil Nadu's leading ATAL and STEM lab
              providers.
            </p>
            <div className="flex gap-2 mb-6">
              <div className="px-3 py-1.5 bg-primary/20 rounded-lg text-xs font-semibold text-primary border border-primary/30">
                STEM
              </div>
              <div className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs font-semibold border border-gray-700">
                STEMI
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Community</h4>
            <ul className="space-y-3">
              {community.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <Link
                    href={`#${resource.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 5: Know More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Know More</h4>
            <ul className="space-y-3">
              {knowMore.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a href="mailto:info@propellertechnologies.in" className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@propellertechnologies.in
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 123 456 7890
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 lg:mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} Nexus Labs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
