"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const achievements = [
    "Curated 50+ unique launch & social events in 1 year",
    "Clients ranging from local startups to global brands",
    "Presence across 10+ metro cities in India",
    "Recognized as an emerging innovator in event-tech",
  ];

  return (
    <>
    <div>
      <h1 className="text-4xl font-black text-center mt-15 -mb-15 text-pink-500">
        About Us
      </h1>
    </div>
    <div className="bg-gray-50 py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image + floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl relative"
          >
            <div className="bg-gray-300 h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 flex items-center justify-center">
                <p className="text-gray-800 font-semibold text-lg">
                  Team @ Revaa
                </p>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-3 -right-6 bg-white p-5 rounded-xl shadow-lg w-52"
              >
                <div className="text-pink-600 font-extrabold text-3xl">
                  2025
                </div>
                <div className="text-gray-700 font-medium text-sm">
                  Year We Launched Revaa
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-gray-700 mb-5">
              At <b className="text-pink-600">Revaa</b>, we blend creativity
              with technology to design and deliver unforgettable events for
              brands, creators, and communities. From launch parties to branded
              installations, our agile team ensures every detail is on point.
            </p>

            <p className="text-gray-700 mb-8">
              As a startup built by young visionaries, we’re not just organizing
              events — we’re crafting moments that connect people, inspire
              action, and leave a lasting impression.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Link href="/about" className="font-semibold">
              DISCOVER OUR STORY
              </Link>
            </motion.button>
            
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
