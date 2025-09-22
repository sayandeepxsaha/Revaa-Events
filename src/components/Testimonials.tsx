"use client";

import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Revaa Events made our wedding absolutely magical. Everything was flawless!",
    author: "Aditi Sharma",
    role: "Bride",
  },
  {
    text: "From planning to execution, the Revaa team handled our seminar with professionalism.",
    author: "Rahul Mehta",
    role: "Corporate Client",
  },
  {
    text: "The birthday décor was beyond expectations. My daughter loved every detail!",
    author: "Sneha Verma",
    role: "Parent",
  },
  {
    text: "Revaa turned our anniversary into a night to remember. Perfect arrangements!",
    author: "Ankit & Neha",
    role: "Couple",
  },
  {
    text: "Best event planners in town! Truly stress-free and beautiful execution.",
    author: "Vikram Singh",
    role: "Client",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16  overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-[Fraunces] text-pink-500">
        What Our Customers Say
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Infinite scrolling track */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-300 to-pink-300 text-black p-6 rounded-2xl shadow-lg w-[300px] flex-shrink-0 text-center"
            >
              <p className="italic text-lg leading-relaxed">
                “{testimonial.text}”
              </p>
              <footer className="mt-4">
                <div className="font-semibold text-lg">{testimonial.author}</div>
                <div className="text-sm text-gray-800">{testimonial.role}</div>
              </footer>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
