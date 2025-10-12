"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-white to-pink-100 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md border border-pink-100"
      >
        <CheckCircle2 className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-pink-600 mb-2">
          Registration Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering for <strong>Revaa Couture Night</strong>!  
          We’ve received your details successfully.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            href="/"
            className="inline-block bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-gray-500 mt-8 text-sm"
      >
        You’ll receive an email confirmation shortly ✉️
      </motion.p>
    </div>
  );
}
