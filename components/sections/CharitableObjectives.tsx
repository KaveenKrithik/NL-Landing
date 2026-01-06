"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Hospital, 
  Home, 
  Users, 
  Utensils, 
  AlertCircle, 
  TreePine,
  Briefcase,
  Baby,
  Shield,
  Sparkles
} from "lucide-react";

const charitableObjectives = [
  {
    icon: Hospital,
    title: "Medical Relief",
    description: "Provide medical relief including free medical camps, general health checkups, eye screenings, specialized therapies for mental and physical disorders, and financial assistance for surgeries and treatments.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Hospital,
    title: "Medical Centers & Hospitals",
    description: "Establish and operate medical centers and charitable hospitals, providing maximum medical assistance to the needy and poor.",
    color: "from-rose-500 to-red-500",
  },
  {
    icon: Baby,
    title: "Child Adoption Services",
    description: "Provide child adoption services, as permitted by law, ensuring children find loving homes and families.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Home,
    title: "Old Age Homes & Orphanages",
    description: "Run old age homes, orphanages, and shelters for destitute women, children, and the elderly, ensuring safety, dignity, and rehabilitation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Family Welfare Programs",
    description: "Undertake family welfare programs, counseling, and legal aid awareness for the community, strengthening family bonds and rights.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Utensils,
    title: "Basic Necessities",
    description: "Provide food, clothing, and basic necessities to the poor, marginalized, and underprivileged, ensuring dignity and survival.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: AlertCircle,
    title: "Disaster Relief",
    description: "Undertake disaster relief and rehabilitation during natural calamities such as floods, droughts, earthquakes, and cyclones, providing immediate aid and long-term recovery.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: TreePine,
    title: "Environmental Awareness",
    description: "Conduct environmental and social awareness programs, including tree plantations, water conservation, rural ecological preservation, and public campaigns on sustainable practices.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Community Development",
    description: "Ameliorate the sufferings of marginalized communities, especially weaker sections, women, and occupational groups among minorities.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Briefcase,
    title: "Economic Development",
    description: "Provide economic development initiatives, self-employment support, and livelihood opportunities to artisans, weaker sections, and local communities.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Organ Donation Awareness",
    description: "Facilitate awareness about organ donation and encourage voluntary contributions, in accordance with the law, saving lives through education.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Women & Child Welfare",
    description: "Promote women's development, child welfare, and public awareness programs, including education, health, and vocational support.",
    color: "from-violet-500 to-purple-500",
  },
];

export default function CharitableObjectives() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Charitable Purposes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Serving Humanity with Compassion
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl drop-shadow-sm">
            Comprehensive charitable initiatives addressing healthcare, shelter, disaster relief, 
            and community development to uplift the marginalized and vulnerable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {charitableObjectives.map((objective, index) => {
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
                <div className="h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${objective.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10 drop-shadow-lg">
                    {objective.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-grow relative z-10 font-medium">
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

