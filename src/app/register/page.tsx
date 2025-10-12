"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Users,
  Briefcase,
  Camera,
  Upload
} from "lucide-react";
import { NavbarDemo } from "@/components/Navbar";
import Image from "next/image";
export default function RevaaRegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    portfolioLink: "",
    role: "",
  });
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPaymentScreenshot(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (paymentScreenshot) data.append("paymentScreenshot", paymentScreenshot);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setTimeout(() => router.push("/success"), 1200);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-200 to-purple-300 flex items-center justify-center px-4 py-12 mt-5">
      <NavbarDemo/>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-pink-100 p-8 md:p-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 tracking-wide">
            Revaa Couture Night
          </h1>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Fill out your details below to join this exclusive event 
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <User className="w-5 h-5 mr-2 text-pink-500" />
              Full Name *
            </label>
            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <Mail className="w-5 h-5 mr-2 text-pink-500" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <Phone className="w-5 h-5 mr-2 text-pink-500" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <Users className="w-5 h-5 mr-2 text-pink-500" />
              Gender *
            </label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          {/* Portfolio */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <Briefcase className="w-5 h-5 mr-2 text-pink-500" />
              Portfolio / Resume Link
            </label>
            <input
              type="url"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition"
              placeholder="https://yourportfolio.com"
            />
          </div>

          {/* Role */}
          <div>
            <label className="flex items-center text-gray-700 font-medium mb-2">
              <Camera className="w-5 h-5 mr-2 text-pink-500" />
              Registering As *
            </label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition"
            >
              <option value="">Select Role</option>
              <option value="model">Model</option>
              <option value="designer">Designer</option>
            </select>
          </div>

          {/* Conditional for Model */}
          {formData.role === "model" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-pink-50 border border-pink-200 rounded-2xl p-5"
            >
              <p className="text-pink-700 font-medium text-center mb-4">
                💳 Payment Required for Models (₹500)
              </p>
               <div className="bg-white border-2 border-pink-300 justify-center items-center p-3 rounded-lg mb-4 w-48 mx-auto">
                  <Image
                    src="/paymentQR.jpg"
                    alt="Model Payment QR"
                    width={180}
                    height={180}
                    className="rounded-lg"
                  />
                </div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Upload className="w-5 h-5 mr-2 text-pink-500" />
                Upload Payment Screenshot *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="block w-full text-sm text-gray-600 border border-gray-200 rounded-xl cursor-pointer bg-white file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-pink-500 file:text-white hover:file:bg-pink-600 transition"
              />
            </motion.div>
          )}

          {/* Conditional for Designer */}
          {formData.role === "designer" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-50 border border-green-200 text-green-700 font-medium text-center py-3 rounded-xl"
            >
              Designer registration is free ✨
            </motion.div>
          )}

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-purple-600 transition"
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </motion.button>

          {/* Status */}
          {status && (
            <div
              className={`text-center py-3 rounded-xl mt-2 ${
                status === "success"
                  ? "bg-green-50 text-green-600 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}
            >
              {status === "success"
                ? "✅ Registration Successful! Redirecting..."
                : "⚠️ Something went wrong!"}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
