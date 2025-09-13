"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[60vh] bg-amber-400 flex items-center justify-center text-center relative overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-white z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
          About Revaa
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-4">
          Discover the story behind India&apos;s most trusted event planning
          company, where creativity meets precision to create extraordinary
          celebrations.
        </p>
        <div className="text-yellow-400 opacity-80">
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>{" "}
          / About Us
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
