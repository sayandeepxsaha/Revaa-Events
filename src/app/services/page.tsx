"use client";

import {
  Heart,
  Briefcase,
  Gift,
  Calendar,
  Users,
  Camera,
  Music,
  Utensils,
  Palette,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Award,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import React, { useState, useEffect } from "react";

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

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services: Service[] = [
    {
      id: "wedding",
      title: "Wedding Planning",
      description:
        "Transform your special day into a fairy tale with our comprehensive wedding planning services.",
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

  const additionalServices = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography & Videography",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Entertainment & DJ",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Catering Services",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Decorations",
      color: "from-yellow-500 to-orange-500",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From intimate celebrations to grand corporate events, we craft
              experiences that resonate, inspire, and create lasting memories
              for you and your guests.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                {
                  icon: <CheckCircle className="w-5 h-5" />,
                  text: "500+ Events Delivered",
                },
                { icon: <Star className="w-5 h-5" />, text: "5-Star Rating" },
                {
                  icon: <Shield className="w-5 h-5" />,
                  text: "Insured & Licensed",
                },
                { icon: <Zap className="w-5 h-5" />, text: "24/7 Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 text-purple-200"
                >
                  <div className="text-purple-400">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService("")}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Service Icon */}
                <div
                  className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-xl`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Service Details */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing and Duration */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      Starting Price:
                    </span>
                    <span className="text-white font-bold">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">
                      Planning Time:
                    </span>
                    <span className="text-purple-300 font-medium text-sm">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enhance your event with our premium add-on services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div
                    className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300">
                How we bring your vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
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
                <div key={index} className="group text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <div className="text-white">{process.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                Why Choose Revaa?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Award-Winning Team",
                    desc: "Recognized excellence in event planning",
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "On-Time Delivery",
                    desc: "Every event delivered perfectly on schedule",
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Fully Insured",
                    desc: "Complete protection for your peace of mind",
                  },
                ].map((benefit, i) => (
                  <div key={i} className="group">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-200 leading-relaxed">
                  "We believe every event should tell a story. Our passionate
                  team combines creativity, precision, and years of experience
                  to ensure your celebration is nothing short of extraordinary."
                </p>
                <div className="mt-4 text-purple-300 font-semibold">
                  — Revaa Events Team
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Service Packages
              </h2>
              <p className="text-xl text-gray-300">
                Choose the package that fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Essential",
                  price: "₹25,000",
                  desc: "Perfect for intimate gatherings",
                  features: [
                    "Basic Planning",
                    "Vendor Coordination",
                    "Day-of Support",
                    "Timeline Management",
                  ],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Premium",
                  price: "₹75,000",
                  desc: "Comprehensive event management",
                  features: [
                    "Full Planning",
                    "Design Concepts",
                    "Vendor Management",
                    "Guest Coordination",
                    "Photography Package",
                  ],
                  color: "from-purple-500 to-pink-500",
                  popular: true,
                },
                {
                  name: "Luxury",
                  price: "₹2,00,000",
                  desc: "Ultimate white-glove service",
                  features: [
                    "Complete Planning",
                    "Custom Design",
                    "Premium Vendors",
                    "Concierge Service",
                    "Full Documentation",
                    "Post-Event Support",
                  ],
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}
                    >
                      {pkg.price}
                    </div>
                    <p className="text-gray-300 text-sm">{pkg.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    Choose Package
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Planning?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Let's discuss your event and create something unforgettable
                together. Get a free consultation and custom proposal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </button>

                <button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Info */}
              {/* <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:hello@revaa.events"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hello@revaa.events</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
