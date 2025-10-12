"use client";

import {
  Heart,
  Briefcase,
  Gift,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Award,
  Shield,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavbarDemo } from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { useRouter } from "next/navigation";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  duration: string;
  color: string;
  popular?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const ServicesPage: React.FC = () => {
  // const [activeService, setActiveService] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  const services: Service[] = [
    {
      id: "wedding",
      title: "Wedding Planning",
      description:
        "Transform your special day into a fairy tale withour wedding planning services.",
      icon: <Heart className="w-8 h-8" />,
      features: [
        "Venue Selection",
        "Decoration & Themes",
        "Catering Management",
        "Photography & Videography",
        "Guest Coordination",
        "Timeline Management",
      ],
      price: "Starting ₹2,00,000",
      duration: "6-12 months planning",
      color: "from-pink-500 to-rose-500",
      popular: true,
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description:
        "Professional events that elevate your brand and create lasting business connections.",
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        "Conference Planning",
        "Product Launches",
        "Team Building",
        "Networking Events",
        "Executive Meetings",
        "Brand Activations",
      ],
      price: "Starting ₹75,000",
      duration: "2-6 months planning",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "birthday",
      title: "Birthday Celebrations",
      description:
        "Create magical moments with personalized birthday parties for all ages.",
      icon: <Gift className="w-8 h-8" />,
      features: [
        "Theme Design",
        "Entertainment",
        "Custom Decorations",
        "Cake & Catering",
        "Photography",
        "Party Favors",
      ],
      price: "Starting ₹25,000",
      duration: "2-4 weeks planning",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "anniversary",
      title: "Anniversary Events",
      description:
        "Celebrate love and milestones with elegant anniversary celebrations.",
      icon: <Calendar className="w-8 h-8" />,
      features: [
        "Romantic Settings",
        "Memory Displays",
        "Custom Menus",
        "Live Entertainment",
        "Guest Management",
        "Photography",
      ],
      price: "Starting ₹50,000",
      duration: "1-3 months planning",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "social",
      title: "Social Gatherings",
      description:
        "From intimate dinners to grand celebrations, we make every gathering memorable.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Event Concept",
        "Venue Styling",
        "Catering Services",
        "Entertainment",
        "Logistics",
        "Guest Experience",
      ],
      price: "Starting ₹40,000",
      duration: "2-8 weeks planning",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "conference",
      title: "Conferences & Seminars",
      description:
        "Professional conferences that inspire, educate, and connect your audience.",
      icon: <Award className="w-8 h-8" />,
      features: [
        "Speaker Management",
        "Technical Setup",
        "Registration Systems",
        "Networking Sessions",
        "Live Streaming",
        "Event App",
      ],
      price: "Starting ₹1,00,000",
      duration: "3-8 months planning",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "personal", label: "Personal Events" },
    { id: "corporate", label: "Corporate" },
    { id: "celebration", label: "Celebrations" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => {
          if (selectedCategory === "personal")
            return ["wedding", "birthday", "anniversary"].includes(service.id);
          if (selectedCategory === "corporate")
            return ["corporate", "conference"].includes(service.id);
          if (selectedCategory === "celebration")
            return ["birthday", "anniversary", "social"].includes(service.id);
          return true;
        });

  // function setActiveService( ): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <>
            <NavbarDemo />

    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-3/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 left-1/2 w-72 h-72 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="text-center py-16 md:py-20 px-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
              Services
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8"
          >
            From intimate celebrations to grand corporate events, we craft
            experiences that resonate, inspire, and create lasting memories for
            you and your guests.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10"
          >
            {[
              { icon: <CheckCircle className="w-5 h-5" />, text: "500+ Events" },
              { icon: <Star className="w-5 h-5" />, text: "5-Star Rating" },
              { icon: <Shield className="w-5 h-5" />, text: "Insured & Licensed" },
              { icon: <Zap className="w-5 h-5" />, text: "24/7 Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-purple-600 bg-white px-4 py-2 rounded-xl shadow-sm"
              >
                <div className="text-purple-500">{item.icon}</div>
                <span className="font-medium text-sm md:text-base">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Service Categories Filter */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                    : "bg-white text-gray-800 border hover:border-purple-400"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-20"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-r from-purple-200 to-pink-200 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
                // onMouseEnter={() => setActiveService()}
                // onMouseLeave={() => setActiveService()}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Service Icon */}
                <div
                  className={`bg-gradient-to-r ${service.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Service Details */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-black mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-black text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & Duration */}
                <div className="space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-bold">Starting:</span>
                    <span className="text-black font-semibold">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black font-bold">Planning:</span>
                    <span className="text-black">{service.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                    onClick={() => router.push("/contact")}
                    whileHover={{ scale: 1.05 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-3">
                Our Process
              </h2>
              <p className="text-base md:text-lg text-black">
                How we bring your vision to life
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  desc: "We listen to your vision and understand your needs",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  step: "02",
                  title: "Proposal & Planning",
                  desc: "Detailed proposal with timeline and budget breakdown",
                  icon: <Calendar className="w-6 h-6" />,
                },
                {
                  step: "03",
                  title: "Coordination",
                  desc: "We handle all vendors, logistics, and coordination",
                  icon: <CheckCircle className="w-6 h-6" />,
                },
                {
                  step: "04",
                  title: "Event Execution",
                  desc: "Flawless execution while you enjoy your special day",
                  icon: <Sparkles className="w-6 h-6" />,
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div className="relative mb-4  flex justify-center">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <div className="text-white">{process.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 group-hover:text-pink-500 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-[-120px]">  
      <Testimonials />
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
