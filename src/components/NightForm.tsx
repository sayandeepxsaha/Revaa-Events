"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  User,
  Users,
  Briefcase,
  Camera,
  Upload,
  CheckCircle2,
} from "lucide-react";

export default function RevaaRegistrationForm() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    gender: string;
    portfolioLink: string;
    role: string;
    paymentScreenshot: File | null;
  }>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    portfolioLink: "",
    role: "",
    paymentScreenshot: null,
  });

  const [showQR, setShowQR] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "role") setShowQR(value === "model");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, paymentScreenshot: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.gender || !formData.role) {
      setStatus("⚠️ Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    if (formData.role === "model" && !formData.paymentScreenshot) {
      setStatus("⚠️ Please upload your payment screenshot.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("✅ Registration successful! We’ll reach out to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        portfolioLink: "",
        role: "",
        paymentScreenshot: null,
      });
      setShowQR(false);
    } catch {
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 px-4 py-10">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-3xl p-8 border border-rose-200">
        <h1 className="text-center text-3xl font-bold text-rose-600 mb-2">
          Revaa Couture Night
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Designer & Model Registration Form
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="flex items-center font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2 text-rose-500" /> Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center font-semibold text-gray-700 mb-2">
              <Mail className="w-4 h-4 mr-2 text-rose-500" /> Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center font-semibold text-gray-700 mb-2">
              <Phone className="w-4 h-4 mr-2 text-rose-500" /> Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="flex items-center font-semibold text-gray-700 mb-2">
              <Users className="w-4 h-4 mr-2 text-rose-500" /> Gender *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Portfolio */}
          <div>
            <label className="flex items-center font-semibold text-gray-700 mb-2">
              <Briefcase className="w-4 h-4 mr-2 text-rose-500" /> Resume/Portfolio Link
            </label>
            <input
              type="url"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Role */}
          <div>
            <label className="flex items-center font-semibold text-gray-700 mb-2">
              <Camera className="w-4 h-4 mr-2 text-rose-500" /> Registering As *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-400"
              required
            >
              <option value="">Select Role</option>
              <option value="model">Model</option>
              <option value="designer">Designer</option>
            </select>
          </div>

          {/* QR for Models */}
          {showQR && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 text-center animate-fadeIn">
              <h3 className="font-semibold text-rose-600 mb-3">
                Payment Required for Models (₹500)
              </h3>
              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 bg-gradient-to-br from-rose-300 to-pink-400 rounded-lg flex items-center justify-center text-white font-semibold">
                  QR Code
                </div>
              </div>
              <label className="flex items-center justify-center font-semibold text-gray-700 mb-2">
                <Upload className="w-4 h-4 mr-2 text-rose-500" /> Upload Screenshot *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm border border-gray-300 rounded-xl p-2 file:bg-rose-500 file:text-white file:rounded-md file:px-3 file:py-1 file:border-0 file:mr-3"
              />
              {formData.paymentScreenshot && (
                <p className="text-green-600 text-sm mt-2">
                  <CheckCircle2 className="inline w-4 h-4 mr-1" />
                  {formData.paymentScreenshot.name}
                </p>
              )}
            </div>
          )}

          {/* Free Designer Note */}
          {formData.role === "designer" && (
            <p className="bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-center py-3 animate-fadeIn">
              Designer registration is free 🎉
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-all duration-300"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center font-medium mt-2 ${
                status.startsWith("✅")
                  ? "text-green-600"
                  : status.startsWith("❌")
                  ? "text-red-600"
                  : "text-rose-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          For queries, contact us at <b>revaa.couture@gmail.com</b>
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
