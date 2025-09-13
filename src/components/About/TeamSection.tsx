"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
}

const TeamSection = () => {
  const team: TeamMember[] = [
    {
      name: "Shyam Barua",
      role: "Founder & Creative Director",
      description:
        "With 8+ years in luxury events, Shyam brings artistic vision and strategic thinking to every celebration.",
      avatar: "👩‍💼",
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Manager",
      description:
        "Expert in logistics and vendor management, Rajesh ensures flawless execution of every event detail.",
      avatar: "👨‍💼",
    },
    {
      name: "Neha Patel",
      role: "Design & Décor Specialist",
      description:
        "Award-winning designer specializing in creating stunning visual experiences that captivate guests.",
      avatar: "👩‍🎨",
    },
    {
      name: "Arjun Singh",
      role: "Technology & Innovation Lead",
      description:
        "Integrates cutting-edge technology into events, from virtual experiences to smart event management.",
      avatar: "👨‍💻",
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate professionals behind every successful celebration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-3 transition-all duration-300 group"
            >
              <div className="h-64 bg-gradient-to-br from-yellow-600 to-yellow-500 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {member.avatar}
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-navy-800 mb-2">
                  {member.name}
                </h4>
                <div className="text-yellow-600 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-600 hover:text-white transition-colors"
                  >
                    📧
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-600 hover:text-white transition-colors"
                  >
                    💼
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-600 hover:text-white transition-colors"
                  >
                    📱
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
