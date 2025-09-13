"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";
import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Birthday Party",
    "Anniversary",
    "Conference",
    "Product Launch",
    "Networking Event",
    "Other",
  ];
  const budgetRanges = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹3,00,000",
    "₹3,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "Above ₹10,00,000",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-12 text-center max-w-md border border-white/20">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We've received your inquiry and will get back to you within 4 hours
            with a personalized proposal.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center py-20 px-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Contact </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              REVAA
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into an unforgettable experience. Let's create
            something extraordinary together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 98765 43210",
                      href: "tel:+919876543210",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@revaa.events",
                      href: "mailto:hello@revaa.events",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Bhubaneswar, Odisha",
                      href: "#",
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      value: "Mon-Sat: 9AM-8PM",
                      href: "#",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 group cursor-pointer"
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-300 font-medium text-sm">
                          {item.label}
                        </h3>
                        <p className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Events Created" },
                  { number: "50K+", label: "Happy Guests" },
                  { number: "24/7", label: "Support" },
                  { number: "100%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center group cursor-default"
                  >
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-pink-400 group-hover:to-yellow-400 transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Plan Your Event
                  </h2>
                  <p className="text-gray-300">
                    Share your vision and we'll bring it to life
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Event Type */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                      >
                        <option value="" className="text-gray-800 bg-gray-100">
                          Select event type
                        </option>
                        {eventTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="text-gray-800 bg-gray-100"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date and Guest Count */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Expected Guests
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Number of guests"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                    >
                      <option value="" className="text-gray-800 bg-gray-100">
                        Select budget range
                      </option>
                      {budgetRanges.map((range) => (
                        <option
                          key={range}
                          value={range}
                          className="text-gray-800 bg-gray-100"
                        >
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none"
                      placeholder="Describe your event vision, special requirements, or any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative flex items-center justify-center space-x-3">
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Inquiry</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <p className="text-green-300 text-sm font-medium">
                    ✓ 4-hour response guarantee • ✓ Free consultation • ✓ No
                    hidden costs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Prefer to Talk Directly?
              </h2>
              <p className="text-xl text-gray-300">
                Choose your preferred way to connect with our team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Call Us Now",
                  subtitle: "Instant consultation",
                  icon: Phone,
                  action: "tel:+919876543210",
                  color: "from-green-500 to-emerald-500",
                  time: "2 min response",
                },
                {
                  title: "Email Inquiry",
                  subtitle: "Detailed discussion",
                  icon: Mail,
                  action: "mailto:hello@revaa.events",
                  color: "from-blue-500 to-cyan-500",
                  time: "4 hour response",
                },
                {
                  title: "Schedule Meeting",
                  subtitle: "Face-to-face planning",
                  icon: Calendar,
                  action: "#",
                  color: "from-purple-500 to-pink-500",
                  time: "Next day available",
                },
              ].map((option, index) => (
                <a
                  key={index}
                  href={option.action}
                  className="group block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div
                    className={`bg-gradient-to-r ${option.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
                  >
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{option.subtitle}</p>
                  <div className="text-sm text-purple-300 font-medium">
                    {option.time}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Revaa?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We combine creative excellence with professional execution to
                deliver events that exceed expectations. From intimate
                gatherings to grand celebrations, every detail is crafted with
                precision and passion.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Expert Team",
                    desc: "Seasoned professionals",
                  },
                  {
                    icon: Calendar,
                    title: "On-Time Delivery",
                    desc: "Every deadline met",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Assured",
                    desc: "100% satisfaction rate",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-3 group"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm text-center">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <a
        href="tel:+919876543210"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-20 animate-pulse hover:animate-none"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default ContactPage;
