"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function Services() {
  const router = useRouter();

  // ✅ handles card + button navigation
  const handleClick = () => {
    router.push("/services");
  };

  return (
    <div id="services">
      {/* Heading */}
      <h1 className="text-4xl font-black text-center mt-10 text-pink-500">
        Our Services
      </h1>

      <p className="text-center mt-5 mb-10 text-black-500 ">
        <b className="text-pink-600">REVAA</b> specializes in providing
        comprehensive event management services.
      </p>

      {/* Cards (alignment unchanged) */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          onClick={handleClick}
          containerClassName="relative flex-1 lg:basis-1/4 min-h-[300px] cursor-pointer group overflow-hidden bg-gradient-to-r from-purple-300 to-pink-300"
        >
          <div className="relative z-10 flex flex-col justify-center p-6 group-hover:opacity-0 transition-opacity duration-700">
            <h2 className="text-left text-xl font-semibold text-black">
              Exhibition Management & Product Launch
            </h2>
            <p className="mt-4 text-sm text-black-200">
              Organizing exhibitions with design, stand, HR, and marketing
              expertise.
            </p>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 group-hover:opacity-100"
            style={{ backgroundImage: "url('/card/card1.webp')" }}
          />
        </WobbleCard>

        {/* Repeat cards without touching alignment */}
        <WobbleCard
          onClick={handleClick}
          containerClassName="relative flex-1 lg:basis-1/4 min-h-[300px] cursor-pointer group overflow-hidden bg-gradient-to-r from-purple-300 to-pink-300"
        >
          <div className="relative z-10 flex flex-col justify-center p-6 group-hover:opacity-0 transition-opacity duration-700">
            <h2 className="text-left text-xl font-semibold text-black">
              Brand Management & Conferences
            </h2>
            <p className="mt-4 text-sm text-black-200">
              Holistic brand strategy guiding all corporate behaviors.
            </p>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 group-hover:opacity-100"
            style={{ backgroundImage: "url('/card/card2.webp')" }}
          />
        </WobbleCard>

        {/* Card 3 */}
        <WobbleCard
          onClick={handleClick}
          containerClassName="relative flex-1 lg:basis-1/4 min-h-[300px] cursor-pointer group overflow-hidden bg-gradient-to-r from-purple-300 to-pink-300"
        >
          <div className="relative z-10 flex flex-col justify-center p-6 group-hover:opacity-0 transition-opacity duration-700">
            <h2 className="text-left text-xl font-semibold text-black">
              Professional Development & Team Building
            </h2>
            <p className="mt-4 text-sm text-black-200">
              Positive work culture for organizational growth.
            </p>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 group-hover:opacity-100"
            style={{ backgroundImage: "url('/card/card3.webp')" }}
          />
        </WobbleCard>

        {/* Card 4 */}
        <WobbleCard
          onClick={handleClick}
          containerClassName="relative flex-1 lg:basis-1/4 min-h-[300px] cursor-pointer group overflow-hidden bg-gradient-to-r from-purple-300 to-pink-300"
        >
          <div className="relative z-10 flex flex-col justify-center p-6 group-hover:opacity-0 transition-opacity duration-700">
            <h2 className="text-left text-xl font-semibold text-black">
              Business Collaboration & Fundraising
            </h2>
            <p className="mt-4 text-sm text-black-200">
              Events designed to raise capital and build partnerships.
            </p>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 group-hover:opacity-100"
            style={{ backgroundImage: "url('/card/card4.webp')" }}
          />
        </WobbleCard>
      </div>

      {/* ALL SERVICES Button */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="mt-8 px-8 py-3 rounded-full bg-purple-200 border border-black  text-neutral-800 font-black shadow-lg transition-colors hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 text-lg"
        >
          View All Services
        </motion.button>
      </div>
    </div>
  );
}
