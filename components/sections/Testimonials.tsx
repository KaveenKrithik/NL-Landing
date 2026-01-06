"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Principal, BVM Global School",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "Lumiere Foundation has transformed our community through their educational initiatives. The scholarships and support they provide have enabled many underprivileged students to pursue quality education. The impact is truly remarkable.",
  },
  {
    name: "Rajesh Kumar",
    role: "STEM Coordinator, Sandhanam Vidyalaya",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "The vocational training programs from Lumiere Foundation are exceptional. Many women in our community have gained income-generating skills and achieved economic independence. The hostel facilities make it accessible to all.",
  },
  {
    name: "Anjali Mehta",
    role: "Parent & Educator",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "My daughter received a full scholarship from Lumiere Foundation, including tuition, hostel, and meals. The cultural education programs in music and dance have enriched her life. We are forever grateful.",
  },
  {
    name: "Prof. Suresh Iyer",
    role: "Director, Anneyya Public School",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "Lumiere Foundation's commitment to educational excellence is evident in their partnerships with reputed institutions. The medical relief camps they organize have helped hundreds in our village. Truly a blessing.",
  },
  {
    name: "Kavya Reddy",
    role: "Student, Grade 10",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "I received free medical treatment through Lumiere Foundation's charitable hospital. The care was exceptional, and they covered all expenses. This foundation truly serves the needy with compassion.",
  },
  {
    name: "Dr. Meera Nair",
    role: "CSR Head, TechCorp India",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "Our partnership with Lumiere Foundation has enabled us to support their disaster relief efforts. During the floods, they provided immediate aid and long-term rehabilitation. Their work is truly transformative.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Quote className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-primary">What People Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from beneficiaries, partners, and community members who've experienced the Lumiere Foundation impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col relative overflow-hidden">
                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
