"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState, useTransition } from "react";
import { sendContact, type ContactState } from "@/lib/action"; // Adjust import path as needed

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budget: "",
    message: "",
  });




  const icons = [
    { component: Facebook, href: "https://facebook.com" },
    { component: Instagram, href: "https://www.instagram.com/revaa.events/" },
     { component: Twitter, href: "https://youtube.com" },
    { component: Linkedin, href: "https://linkedin.com" },
   
  ];

  const [state, setState] = useState<ContactState>({ ok: undefined });
  const [isPending, startTransition] = useTransition();

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

    // Clear field-specific errors when user starts typing
    if (state.errors?.[name as keyof typeof state.errors]) {
      setState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: undefined
        }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("eventType", formData.eventType);
      formDataObj.append("eventDate", formData.eventDate);
      formDataObj.append("budget", formData.budget);
      formDataObj.append("message", formData.message);

      const result = await sendContact(state, formDataObj);
      setState(result);

      // If successful, also send email via API
      if (result.ok) {
        try {
          const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              eventType: formData.eventType,
              eventDate: formData.eventDate,
              budget: formData.budget,
              message: formData.message,
            }),
          });

          if (response.ok) {
            // Reset form on success
            setFormData({
              name: "",
              email: "",
              phone: "",
              eventType: "",
              eventDate: "",
              budget: "",
              message: "",
            });
          }
        } catch (error) {
          console.error("Email sending failed:", error);
        }
      }
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-pink-600" />,
      title: "Call Us",
      details: "+91 90457 00873",
      subdetails: "Available Mon-Sat | 9am - 8pm",
    },
    {
      icon: <Mail className="h-5 w-5 text-pink-600" />,
      title: "Email Us",
      details: "hello@revaaevent.com",
      subdetails: "We typically reply within 12 hours",
    },
    {
      icon: <MapPin className="h-5 w-5 text-pink-600" />,
      title: "Our HQ",
      details: "Revaa Studios, Bhubaneswar, Orisha, India",
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

  return (
    <div id="contact" className="bg-gradient-to-br from-pink-50 to-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-pink-600 font-semibold mb-2 tracking-wide">
            REACH OUT TO REVAA-BOT
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Let&apos;s Plan Magic Together ✨
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
                {icons.map(({ component: Icon, href }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-pink-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-purple-600"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Icon size={20} />
                  </motion.a>
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

            {/* Success/Error Messages */}
            {state.message && (
              <div className={`mb-6 p-4 rounded-lg ${state.ok
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
                }`}>
                <p className="font-medium">{state.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${state.errors?.name ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {state.errors?.name && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
                  )}
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
                    placeholder="your@email.com"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${state.errors?.email ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {state.errors?.email && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${state.errors?.phone ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {state.errors?.phone && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.phone}</p>
                  )}
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${state.errors?.eventType ? "border-red-500" : "border-gray-300"
                      }`}
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
                  {state.errors?.eventType && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.eventType}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="" disabled>
                      Select budget range
                    </option>
                    {budgetRanges.map((range, i) => (
                      <option key={i} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell Us About Your Vision <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Describe your event vision, special requirements, or any questions you have..."
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${state.errors?.message ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {state.errors?.message && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={{ scale: isPending ? 1 : 1.05 }}
                  className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      SENDING...
                    </>
                  ) : (
                    "LET'S CREATE!"
                  )}
                </motion.button>
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="company"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}