"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Insights() {
  const articles = [
    {
      title: "The Future of STEM Education in India",
      excerpt:
        "Exploring how innovative teaching methods and technology are transforming STEM education across Indian schools.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      title: "Building Innovation Labs: A Complete Guide",
      excerpt:
        "Learn how to set up and maintain a successful STEM innovation lab in your school or institution.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Resources",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    },
    {
      title: "Robotics in Education: Success Stories",
      excerpt:
        "Discover how robotics programs are inspiring students and achieving remarkable results in schools nationwide.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
    {
      title: "Integrating AI into Classroom Learning",
      excerpt:
        "A comprehensive look at how artificial intelligence is being used to enhance learning experiences.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    },
    {
      title: "STEM Accreditation: What It Means for Schools",
      excerpt:
        "Understanding the importance of STEM accreditation and how it benefits educational institutions.",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    },
    {
      title: "Maker Culture: Empowering Student Innovation",
      excerpt:
        "How maker spaces and DIY learning are fostering creativity and problem-solving skills in students.",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
  ];

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
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Insights & Resources</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Insights & <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              Stay updated with the latest trends, insights, and stories from the world of STEM education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/insights/${article.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

