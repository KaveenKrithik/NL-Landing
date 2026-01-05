"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Events() {
  const events = [
    {
      title: "National STEM Innovation Summit 2024",
      date: "April 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Chennai, Tamil Nadu",
      attendees: "500+",
      description:
        "Join us for a day of innovation, learning, and networking. Featuring keynote speakers, workshops, and student showcases.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      status: "upcoming",
    },
    {
      title: "Robotics Workshop Series",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Bangalore, Karnataka",
      attendees: "100+",
      description:
        "Hands-on robotics workshop covering basics to advanced concepts. Perfect for students and educators.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      status: "upcoming",
    },
    {
      title: "STEM Educators Conference",
      date: "May 5, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Mumbai, Maharashtra",
      attendees: "300+",
      description:
        "A conference dedicated to educators, featuring best practices, curriculum discussions, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      status: "upcoming",
    },
    {
      title: "Young Innovators Competition",
      date: "May 20, 2024",
      time: "8:00 AM - 8:00 PM",
      location: "Delhi, NCR",
      attendees: "200+",
      description:
        "Annual competition showcasing innovative projects from students across India. Awards and recognition for top performers.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      status: "upcoming",
    },
    {
      title: "AI & Machine Learning Bootcamp",
      date: "March 10, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Hyderabad, Telangana",
      attendees: "150+",
      description:
        "Intensive bootcamp covering AI fundamentals, machine learning, and practical applications in education.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      status: "past",
    },
    {
      title: "3D Printing & Design Workshop",
      date: "February 25, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Pune, Maharashtra",
      attendees: "80+",
      description:
        "Learn 3D printing from design to production. Hands-on experience with industry-standard equipment.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      status: "past",
    },
  ];

  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Events & Workshops</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Upcoming <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Join us for workshops, conferences, and competitions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                        Upcoming
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {event.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users className="w-5 h-5 text-primary" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    <Link href="/contact-us" className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Register Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl h-full flex">
                  <div className="w-1/3 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                  </div>
                  <div className="w-2/3 p-6 lg:p-8 flex flex-col">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold w-fit mb-4">
                      Past Event
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                    <div className="text-sm text-gray-500">
                      {event.date} • {event.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

