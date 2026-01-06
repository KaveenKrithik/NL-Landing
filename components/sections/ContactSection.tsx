"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
            {/* Tech Pattern */}
            <div className="absolute inset-0 tech-pattern" />

            {/* Glowing Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
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
                        Get in Touch
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Contact Us
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have questions or want to learn more about our work? We&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Subject
                                    </label>
                                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent transition-colors">
                                        <option value="" className="bg-navy">Select a topic</option>
                                        <option value="donation" className="bg-navy">Donation Inquiry</option>
                                        <option value="volunteer" className="bg-navy">Volunteer Opportunities</option>
                                        <option value="partnership" className="bg-navy">Corporate Partnership</option>
                                        <option value="program" className="bg-navy">Program Information</option>
                                        <option value="other" className="bg-navy">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                                        placeholder="Tell us how we can help..."
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                        <div className="space-y-6 mb-10">
                            <a href="mailto:lumierefoundation.india@gmail.com" className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Email</div>
                                    <div className="text-white group-hover:text-accent transition-colors">lumierefoundation.india@gmail.com</div>
                                </div>
                            </a>

                            <a href="tel:+914412345678" className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <Phone className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                                    <div className="text-white group-hover:text-accent transition-colors">+91 44 1234 5678</div>
                                </div>
                            </a>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Address</div>
                                    <div className="text-white">
                                        123 Foundation Street<br />
                                        Anna Nagar, Chennai<br />
                                        Tamil Nadu 600040, India
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Operating Hours */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h4 className="text-lg font-semibold text-white mb-4">Office Hours</h4>
                            <div className="space-y-2 text-gray-400">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="text-white">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="text-gray-500">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
