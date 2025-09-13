"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGoogle, FaFacebookF, FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
    // TODO: Add actual login logic here
    alert(`Logged in as ${username}`);
    setUsername("");
    setPassword("");
    // Redirect or perform other actions after login

    if (username === "admin" && password === "admin") {
      // Redirect to admin dashboard or perform admin-specific actions
      window.location.href = "/dashboard/admin";
    } else if (username === "user" && password === "user") {
      // Redirect to user dashboard or perform user-specific actions
      window.location.href = "/dashboard/user";
    } else {
      // Handle invalid login
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side: Login Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-1/2 bg-[#0b1c2c] text-white flex flex-col justify-center items-center px-12 py-8"
      >
        <div className="text-3xl font-bold text-cyan-400 mb-2">LOGIN</div>
        <p className="text-gray-400 text-center mb-6">
          How to get started lorem ipsum dolor at?
        </p>

        <form
          onSubmit={handleSubmit}
          method="post"
          className="w-full max-w-sm space-y-4"
        >
          <div className="flex items-center bg-gray-300 rounded-lg px-4 py-2">
            <FaUser className="text-gray-700 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none w-full text-gray-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center bg-gray-300 rounded-lg px-4 py-2">
            <FaLock className="text-gray-700 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white hover:cursor-pointer py-2  rounded-full font-semibold"
          >
            Login Now
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-cyan-400 font-semibold">
              Login with Others
            </span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <button className="flex items-center justify-center w-full border border-white py-2 rounded-lg space-x-3 hover:bg-pink-400 hover:text-black transition">
            <FaGoogle /> <span>Login with Google</span>
          </button>
          <button className="flex items-center justify-center w-full border border-white py-2 rounded-lg space-x-3 hover:bg-pink-400 hover:text-black transition">
            <FaFacebookF /> <span>Login with Facebook</span>
          </button>

          <p className="text-center mt-6">
            Don’t Have an Account?{" "}
            <span className="text-pink-400 cursor-pointer">SignUp</span>
          </p>
        </form>
      </motion.div>

      {/* Right Side: Promotion */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-1/2 bg-gradient-to-br from-purple-500 to-pink-300 flex flex-col justify-center items-center text-white px-12 relative"
      >
        <div className="bg-white text-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-2xl absolute bottom-16 left-16">
          ⚡
        </div>
        <div className="text-left max-w-md">
          <h2 className="text-4xl font-bold mb-4">
            Greatness Begins with a Click —
          </h2>
          <h2 className="text-4xl font-bold mb-4">
            Join <span className="text-pink-500">Revaa</span> Today!
          </h2>
        </div>
        <Image
          src="/girl.png"
          alt="Illustration"
          width={400}
          height={400}
          className="mt-6"
        />
      </motion.div>
    </div>
  );
}
