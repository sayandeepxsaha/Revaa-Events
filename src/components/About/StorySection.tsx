"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface StatItem {
  number: string;
  label: string;
}

const CounterCard: React.FC<{ stat: StatItem; index: number }> = ({
  stat,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(stat.number.replace(/\D/g, ""));
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 20);
    }
  }, [isInView, stat.number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-yellow-600 mb-2">
        {count}
        {stat.number.replace(/\d/g, "")}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
  );
};

const StorySection = () => {
  const stats: StatItem[] = [
    { number: "500+", label: "Events Planned" },
    { number: "50,000+", label: "Happy Guests" },
    { number: "15+", label: "Cities Covered" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-navy-800 font-serif mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020 with a dream to redefine event planning in India,
              Revaa began as a passion project by a team of creative
              professionals who believed that every celebration deserves to be
              extraordinary.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              What started as planning intimate gatherings for friends and
              family has now blossomed into one of India's most trusted event
              management companies, having orchestrated over 500 successful
              events across the country.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our name "Revaa" represents the flowing river of creativity and
              precision that runs through every event we create. Just like a
              river shapes the landscape it touches, we shape unforgettable
              experiences that leave lasting impressions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-lg flex items-center justify-center"
          >
            <div className="text-center text-navy-800">
              <div className="text-6xl mb-4">🎭</div>
              <p className="text-xl font-semibold">Where Stories Come Alive</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <CounterCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
