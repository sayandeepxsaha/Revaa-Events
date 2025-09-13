"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const reasons = [
  {
    icon: (
      <Icons.Sparkles className="h-10 w-10 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Creative-Led Strategy",
    description:
      "We blend bold ideas with smart planning to create moments that leave lasting impressions—every single time.",
  },
  {
    icon: (
      <Icons.Cable className="h-10 w-10 text-pink-600 group-hover:rotate-12 transition-transform duration-300" />
    ),
    title: "Tech-Enabled Execution",
    description:
      "From digital invites to real-time analytics—we bring innovation and precision to every step of your event.",
  },
  {
    icon: (
      <Icons.Users2 className="h-10 w-10 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Client-First Culture",
    description:
      "Revaa works like an extension of your own team—collaborative, transparent, and always focused on your goals.",
  },
  {
    icon: (
      <Icons.Rocket className="h-10 w-10 text-pink-600 group-hover:rotate-6 transition-transform duration-300" />
    ),
    title: "Startup-Grade Speed",
    description:
      "We move fast without breaking the quality—because we know your time is money, and execution matters.",
  },
  {
    icon: (
      <Icons.Plug className="h-10 w-10 text-pink-600 group-hover:rotate-45 transition-transform duration-300" />
    ),
    title: "Full-Stack Event Power",
    description:
      "From branding to logistics, we’re your all-in-one partner for experiential campaigns, launches, and celebrations.",
  },
  {
    icon: (
      <Icons.MapPin className="h-10 w-10 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Pan-India Operations",
    description:
      "We bring Revaa’s magic to every corner of India—no city too far, no idea too wild.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="bg-white py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-pink-600 font-bold text-sm tracking-widest uppercase">
            Why Choose Revaa
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            The Experience Behind the Hype
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Revaa is not just an event agency—we’re your launchpad to remarkable
            moments, breakthrough brand stories, and flawless execution at
            scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-pink-100 rounded-full">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-700">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center bg-pink-100 p-2 rounded-full shadow-inner">
            <span className="text-gray-800 font-medium px-4 py-2">
              Let’s build something unforgettable.
            </span>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-all">
              Book a Discovery Call
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
