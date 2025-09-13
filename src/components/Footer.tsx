// src/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image src="/Revaa.png" alt="Revaa Logo" width={40} height={40} />
            <span className="text-2xl font-bold tracking-wide">Revaa</span>
          </div>
          <p className="text-sm">
            Revaa is your trusted partner in planning, managing, and executing
            extraordinary events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a href="mailto:info@revaa.com" className="underline">
                info@revaa.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+911234567890" className="underline">
                +91 12345 67890
              </a>
            </li>
            <li>Location: Bhubaneswar, Odisha, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-purple-500 py-4 text-center text-sm bg-purple-800">
        &copy; {new Date().getFullYear()} Revaa. All rights reserved.
      </div>
    </footer>
  );
};
