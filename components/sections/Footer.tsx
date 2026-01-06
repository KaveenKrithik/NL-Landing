"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const trustLinks = [
  "About the Trust",
  "Our Founders",
  "Trust Deed",
  "Annual Reports",
];

const programLinks = [
  "Schools",
  "Scholarships",
  "Vocational Training",
  "Digital Literacy",
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Use",
  "80G Certificate",
  "12A Registration",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 relative overflow-hidden">
      {/* Tech Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/lumiere-logo.png"
                alt="Lumiere Foundation Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold tracking-wide text-primary">LUMIERE</div>
                <div className="text-xs font-medium text-white tracking-widest">FOUNDATION</div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              A Public Charitable Trust registered under the Indian Trusts Act, 1882. Dedicated to education and empowerment across Tamil Nadu and India.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: The Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">The Trust</h4>
            <ul className="space-y-3">
              {trustLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>

            <div className="space-y-4 mb-8">
              <a href="mailto:lumierefoundation.india@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                lumierefoundation.india@gmail.com
              </a>
              <a href="tel:+914412345678" className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 44 1234 5678
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 lg:mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} Lumiere Foundation. All rights reserved. | Registered under Indian Trusts Act, 1882
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
