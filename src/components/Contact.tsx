"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out to Revaa! We’ll be in touch shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-pink-600" />,
      title: "Call Us",
      details: "+91 98765 43210",
      subdetails: "Available Mon-Sat | 9am - 8pm",
    },
    {
      icon: <Mail className="h-5 w-5 text-pink-600" />,
      title: "Email Us",
      details: "hello@revaa.events",
      subdetails: "We typically reply within 12 hours",
    },
    {
      icon: <MapPin className="h-5 w-5 text-pink-600" />,
      title: "Our HQ",
      details: "Revaa Studios, Bengaluru, India",
      subdetails: "By appointment only",
    },
    {
      icon: <Clock className="h-5 w-5 text-pink-600" />,
      title: "Timings",
      details: "Mon - Sat: 9:00 AM to 8:00 PM",
      subdetails: "Closed on Sundays",
    },
  ];

  const eventTypes = [
    "Corporate Meetup",
    "Wedding Planning",
    "Startup Launch",
    "College Fest",
    "Fashion Show",
    "Fundraiser",
    "Custom Theme Event",
    "Other",
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-pink-600 font-semibold mb-2 tracking-wide">
            REACH OUT TO REVAABOTS
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Let's Plan Magic Together ✨
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Ready to transform your vision into a memorable event? Our team is
            just a form away!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              How to Reach Us
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-purple-100 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-gray-700">{item.details}</p>
                    <p className="text-gray-500 text-sm">{item.subdetails}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Social Connect</h4>
              <div className="flex space-x-4">
                {["FB", "IG", "LI", "YT"].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    className="h-10 w-10 bg-pink-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-purple-600"
                    whileHover={{ scale: 1.2 }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Tell Us About Your Event
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </motion.div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@revaa.in"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    {eventTypes.map((type, i) => (
                      <option key={i} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Share your ideas, goals or dreams..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-all"
                >
                  LET'S CREATE!
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
