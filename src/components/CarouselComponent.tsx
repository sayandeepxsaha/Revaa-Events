"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    image: "/slide1.png",
    title: "Plan Memorable Events",
    description: "Organize weddings, parties, and conferences seamlessly.",
  },
  {
    image: "/slide2.png",
    title: "Elegant Decor & Catering",
    description: "We make every detail count — from ambiance to food.",
  },
  {
    image: "/slide3.png",
    title: "Your Vision, Our Mission",
    description: "Let's bring your dream event to life.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-2xl">
      {/* Slide Container */}
      <motion.div
        className="flex h-full"
        animate={{ x: `-${current * 100}%` }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          opacity: { duration: 0.6 },
        }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="w-full flex-shrink-0 h-full relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              {/* Title Animation */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
              >
                {slide.title}
              </motion.h2>

              {/* Description Animation */}
              <motion.p
                className="text-lg text-white/90 mb-6 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 60 }}
              >
                {slide.description}
              </motion.p>

              {/* Contact Us Button */}
              <motion.a
                href="#contact"
                className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 text-black px-3 py-1 rounded-full hover:bg-white transition z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 text-black px-3 py-1 rounded-full hover:bg-white transition z-10"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
