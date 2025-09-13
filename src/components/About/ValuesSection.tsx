"use client";

import { motion } from "framer-motion";

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

const ValuesSection = () => {
  const values: ValueItem[] = [
    {
      icon: "✨",
      title: "Creativity",
      description:
        "We believe every event should be unique. Our creative team brings innovative concepts and fresh perspectives to make your celebration truly one-of-a-kind.",
    },
    {
      icon: "🎯",
      title: "Precision",
      description:
        "Excellence is in the details. From timeline management to vendor coordination, we ensure every element is executed with meticulous precision.",
    },
    {
      icon: "🤝",
      title: "Trust",
      description:
        "Your dreams are precious to us. We build lasting relationships based on transparency, reliability, and unwavering commitment to your vision.",
    },
    {
      icon: "💎",
      title: "Quality",
      description:
        "We never compromise on quality. From venue selection to vendor partnerships, we maintain the highest standards in everything we do.",
    },
    {
      icon: "🌟",
      title: "Innovation",
      description:
        "We stay ahead of trends and embrace new technologies to bring cutting-edge solutions to your events and create memorable experiences.",
    },
    {
      icon: "❤️",
      title: "Passion",
      description:
        "Event planning isn't just our job—it's our passion. We pour our hearts into every celebration, treating each event as if it were our own.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-800 font-serif mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision we make and every event we
            create
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-300 text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
