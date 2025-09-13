"use client";

import { motion } from "framer-motion";

interface Award {
  icon: string;
  title: string;
  organization: string;
  year: string;
}

const AwardsSection = () => {
  const awards: Award[] = [
    {
      icon: "🏆",
      title: "Best Event Planning Company",
      organization: "India Event Awards",
      year: "2024",
    },
    {
      icon: "⭐",
      title: "Excellence in Wedding Planning",
      organization: "WeddingSutra Awards",
      year: "2023",
    },
    {
      icon: "🎖️",
      title: "Innovation in Event Technology",
      organization: "EventTech India",
      year: "2023",
    },
    {
      icon: "🌟",
      title: "Customer Choice Award",
      organization: "VenueMonk Recognition",
      year: "2022",
    },
    {
      icon: "💎",
      title: "Luxury Event Specialist",
      organization: "Premium Events India",
      year: "2022",
    },
    {
      icon: "🎭",
      title: "Creative Excellence Award",
      organization: "Design & Events Magazine",
      year: "2021",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-800 font-serif mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating our achievements and industry recognition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 hover:border-yellow-600 border border-transparent transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {award.icon}
              </div>
              <h4 className="text-lg font-bold text-navy-800 mb-2">
                {award.title}
              </h4>
              <p className="text-gray-600 mb-2">{award.organization}</p>
              <div className="text-yellow-600 font-semibold">{award.year}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
