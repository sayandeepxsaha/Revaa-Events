"use client";

import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-serif mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Guiding our journey towards excellence in event management
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 rounded-3xl backdrop-blur-lg border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-xl">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Our Mission
              </h3>
            </div>
            <p className="text-lg leading-relaxed opacity-90">
              To create extraordinary events that exceed our clients'
              expectations while building lasting relationships based on trust,
              creativity, and flawless execution. We strive to make every
              celebration a perfect reflection of our clients' dreams and
              personalities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 rounded-3xl backdrop-blur-lg border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-xl">
                🌟
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed opacity-90">
              To be India's most trusted and innovative event management
              company, setting new standards in the industry while inspiring
              others to pursue excellence. We envision a future where every
              celebration tells a unique story worth remembering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
