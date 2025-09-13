"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-blue-950 text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-serif mb-6">
            Ready to Create Magic Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Let's turn your vision into reality. Our team is excited to discuss
            your upcoming celebration and create something extraordinary
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Start Planning Your Event
            </Link>
            <Link
              href="/portfolio"
              className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 inline-block"
            >
              View Our Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
