"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const TimelineSection = () => {
  const timeline: TimelineItem[] = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Revaa was founded with a vision to transform event planning in India. Started with our first wedding in Mumbai.",
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      description:
        "Expanded to corporate events and private celebrations. Planned 50+ successful events across 5 cities.",
    },
    {
      year: "2022",
      title: "Recognition & Growth",
      description:
        'Won "Best Event Planning Company" award. Grew team to 15+ professionals and expanded to 10 cities.',
    },
    {
      year: "2023",
      title: "Innovation & Excellence",
      description:
        "Launched virtual and hybrid event services. Crossed 300+ events milestone and established partnerships with premium venues.",
    },
    {
      year: "2024",
      title: "Premium Excellence",
      description:
        "Launched luxury destination wedding services. Completed 500+ events and expanded to 15+ cities across India.",
    },
    {
      year: "2025",
      title: "Future Vision",
      description:
        "Continuing innovation in sustainable events and smart technology integration for unforgettable experiences.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-800 font-serif mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Milestones that shaped our path to excellence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-600 to-yellow-400 rounded-full" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                }`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <h4 className="text-xl font-bold text-navy-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg z-10">
                {item.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
