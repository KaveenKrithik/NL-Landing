"use client";

import { motion } from "framer-motion";
import { 
  School, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe, 
  Music, 
  Briefcase,
  Building2,
  Award,
  Heart,
  Sparkles
} from "lucide-react";

const educationalObjectives = [
  {
    icon: School,
    title: "Educational Institutions",
    description: "Establish, acquire, administer, and support schools (English, Tamil and Other Indian Language medium), colleges, universities, deemed universities, vocational training centers, libraries, and hostels across urban and rural areas of Tamil Nadu and India.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Academic Excellence",
    description: "Promote academic excellence by partnering with reputed institutions in India and abroad, ensuring high standards of education, infrastructure, and access to global learning opportunities.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Student Support",
    description: "Support deserving students through scholarships, stipends, uniforms, transportation, meals, and educational materials, enabling meritorious and economically underprivileged students to pursue quality education.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    title: "Adult Education & Digital Literacy",
    description: "Promote adult education and digital literacy, especially in tribal and remote areas, bridging knowledge gaps and enabling lifelong learning.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Expert Collaboration",
    description: "Engage and collaborate with educators, trainers, and domain experts across disciplines for teaching, coaching, research, and skill development in academic and vocational areas.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Music,
    title: "Holistic Development",
    description: "Promote holistic development through extracurricular activities including fine arts, music, dance, sports, foreign languages, and values-based education.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Heart,
    title: "Cultural Education",
    description: "Provide value-based education and youth development programs, including cultural education in music, instruments, and dance, academically and professionally to needy students.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "Employment Opportunities",
    description: "Provide employment opportunities to the disabled, needy, and marginalized individuals, creating pathways to economic independence.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Development Campuses",
    description: "Create socio-economic-educational development campuses facilitating education, training, and awareness programs for comprehensive community development.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Knowledge & Skills",
    description: "Engage teachers, instructors, and experts of good moral character to impart up-to-date knowledge and practical skills in sciences, industrial vocations, research, and other intellectually useful pursuits.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function EducationalObjectives() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Educational Purposes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight drop-shadow-sm">
            Transforming Lives Through Education
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl drop-shadow-sm">
            Comprehensive educational initiatives from primary schooling to higher education, 
            ensuring access, excellence, and holistic development for all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {educationalObjectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 100 }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${objective.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 drop-shadow-sm">
                    {objective.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow relative z-10 font-medium">
                    {objective.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

