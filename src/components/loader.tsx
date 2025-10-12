"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]">
      {/* Logo with scale + glow animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1, 0.9, 1],
          opacity: 1,
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center"
      >
        <Image
          src="/Revaa.png" // 👈 place your uploaded logo in /public as "revaa-logo.png"
          alt="Revaa Logo"
          width={140}
          height={140}
          priority
          className="drop-shadow-[0_0_20px_rgba(255,100,200,0.3)]"
        />
      </motion.div>

      {/* Text fade animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0.8, 1],
          y: [20, 0, 0, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="mt-6 text-lg font-semibold tracking-wide text-gray-700 dark:text-gray-200"
      >
      </motion.h1>
    </div>
  );
};

export default Loader;
