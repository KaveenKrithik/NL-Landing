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
    text: "Nexus Labs has transformed our school's approach to STEM education. The labs are state-of-the-art, and our students are more engaged than ever. The results speak for themselves - we've seen a 40% increase in STEM enrollment.",
  },
  {
    name: "Rajesh Kumar",
    role: "STEM Coordinator, Sandhanam Vidyalaya",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "The training programs from Nexus Labs are exceptional. Our teachers have gained invaluable skills, and the curriculum integration has been seamless. Our students are now creating innovative projects we never thought possible.",
  },
  {
    name: "Anjali Mehta",
    role: "Parent & Educator",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "My daughter's interest in robotics has skyrocketed since joining the Nexus Labs program. The hands-on approach and expert guidance have made learning fun and engaging. Highly recommend!",
  },
  {
    name: "Prof. Suresh Iyer",
    role: "Director, Anneyya Public School",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "Nexus Labs' accreditation from STEM.org USA gives us confidence in their quality. The labs are well-maintained, and their support team is always responsive. A true partner in education.",
  },
  {
    name: "Kavya Reddy",
    role: "Student, Grade 10",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "I love the 3D printing and robotics workshops! The instructors are patient and knowledgeable. I've built projects I'm really proud of, and it's helped me decide to pursue engineering.",
  },
  {
    name: "Dr. Meera Nair",
    role: "CSR Head, TechCorp India",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
    rating: 5,
    text: "Our CSR partnership with Nexus Labs has been incredibly successful. They've helped us bring STEM education to 50+ underserved schools. The impact on students has been remarkable.",
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
            Hear from educators, students, and partners who've experienced the Nexus Labs difference
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
