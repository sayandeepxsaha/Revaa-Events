"use client";

import { motion } from "framer-motion";
import { Building, Crown, Award, DollarSign } from "lucide-react";
import { useState } from "react";

export default function ServiceShowcase() {
  const [services] = useState([
    {
      icon: <Building className="h-12 w-12 text-pink-600" />,
      title: "Exhibition Management & Product Launch",
      description:
        "The process of organizing an exhibition necessitates the collaboration of various disciplines, including design and stand concerns, personal management, and marketing tactics.",
    },
    {
      icon: <Crown className="h-12 w-12 text-pink-600" />,
      title: "Brand Management Business Consultancy & Medical Conference",
      description:
        "According to the holistic approach, brand is the central building block of everything that an organisation does. Brand is the guideline for all the corporate behaviour, whether it be external or internal.",
    },
    {
      icon: <Award className="h-12 w-12 text-pink-600" />,
      title:
        "Professional Development Program Team Building Events & Mentorship Programs",
      description:
        "Development and Team goes hand in hand. The restoration of a positive work environment is crucial to achieving an organization's goals.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-pink-600" />,
      title: "Business Collaboration Events & Fund Raiser Events",
      description:
        "A fund raiser is an event or campaign whose primary purpose is to raise money for a cause, charity or non-profit organisations.",
    },
  ]);

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center"
        >
          <p className="text-pink-600 font-medium mb-2">SERVICES</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Services We Offer
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl">
            <b className="text-pink-600">REVAA</b> pecializes in providing
            comprehensive event management services tailored to meet the unique
            needs and objectives of each client. Our offerings encompass every
            aspect of event planning and execution, ensuring a seamless and
            memorable experience for both hosts and attendees alike.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-pink-600 w-fit text-white px-6 py-3 rounded hover:bg-pink-700 transition-colors"
          >
            VIEW ALL SERVICES
          </motion.button>
        </motion.div>

        {/* Right Services Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-purple-100 rounded-2xl p-6 w-[280px] flex flex-col items-center text-center shadow-md cursor-pointer transition-all duration-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
