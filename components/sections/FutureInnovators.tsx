"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Kamak", logo: "/logos/kamak.svg" },
  { name: "BVM Global", logo: "/logos/bvm.svg" },
  { name: "Sandhanam Vidyalaya", logo: "/logos/sandhanam.svg" },
  { name: "Anneyya Public School", logo: "/logos/anneyya.svg" },
  { name: "RIPS", logo: "/logos/rips.svg" },
  { name: "Partner 6", logo: "/logos/partner6.svg" },
  { name: "Partner 7", logo: "/logos/partner7.svg" },
  { name: "Partner 8", logo: "/logos/partner8.svg" },
  { name: "Partner 9", logo: "/logos/partner9.svg" },
  { name: "Partner 10", logo: "/logos/partner10.svg" },
];

export default function FutureInnovators() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight drop-shadow-md">
            Empowering{" "}
            <span className="text-primary drop-shadow-sm">Future Innovators</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-800 max-w-3xl mx-auto font-semibold bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl drop-shadow-sm">
            Collaborating with Next-Gen Educational Partners to Shape the
            Nation's Change Makers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="aspect-square bg-white rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo Placeholder */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold text-gray-400">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
