"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

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
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start auto-scrolling
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="relative py-16 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-[Fraunces] text-pink-500">
        What Our Customers Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }} // adjust based on content width
          dragElastic={0.2}
          onDragStart={() => controls.stop()} // pause auto-scroll while dragging
          onDragEnd={() => {
            // resume auto-scroll after drag
            controls.start({
              x: ["0%", "-100%"],
              transition: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              },
            });
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
