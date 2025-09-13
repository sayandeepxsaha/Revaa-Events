"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Top Bar - Always Visible */}
      <div className="bg-gray-100 text-sm px-4 py-2 flex justify-end items-center space-x-4">
        <a href="#" className="text-gray-700 hover:underline">
          Help
        </a>
        <a href="/login" className="text-gray-700 hover:underline">
          Login
        </a>
        <a
          href="/signup"
          className="text-pink-600 font-semibold hover:underline"
        >
          Signup
        </a>
      </div>

      {/* Sticky Main Nav Row */}
      <div className="sticky top-0 z-50 bg-purple-600 text-white shadow-sm border-b border-gray-200">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="text-xl font-bold text-gray-800">
            <Link href="/">
              <Image src="/Revaa.png" alt="Revaa Logo" width={50} height={10} />
            </Link>
          </div>
          <div className="space-x-6">
            <Link href="/" className=" hover:text-pink-600">
              Home
            </Link>
            <Link href="/about" className=" hover:text-pink-600">
              About
            </Link>
            <Link href="/services" className=" hover:text-pink-600">
              Services
            </Link>
            <Link href="/contact" className=" hover:text-pink-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
