"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ChevronUp,
  Heart
} from "lucide-react";
// import { useState } from "react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Image 
                    src="/Revaa.png" 
                    alt="Revaa Logo" 
                    width={48} 
                    height={48}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <span className="text-3xl font-bold tracking-wide bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Revaa
                </span>
              </div>
              <p className="text-purple-100 leading-relaxed mb-6 max-w-md">
                Revaa is your trusted partner in planning, managing, and executing
                extraordinary events that create lasting memories.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/revaa.events/", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-6 text-lg text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Collections", href: "/collection" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Contact", href: "/#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-purple-100 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="group-hover:border-b border-white/50 pb-0.5">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-6 text-lg text-white relative">
                Contact Us
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <Mail size={18} className="mt-1 text-purple-200 group-hover:text-white transition-colors duration-300" />
                  <div>
                    <p className="text-xs text-purple-200 mb-1">Email</p>
                    <a 
                      href="mailto:hello@revaa.evnts" 
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:underline"
                    >
                      contact@revaaeevent.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <Phone size={18} className="mt-1 text-purple-200 group-hover:text-white transition-colors duration-300" />
                  <div>
                    <p className="text-xs text-purple-200 mb-1">Phone</p>
                    <a 
                      href="tel:+916372915914" 
                      className="text-purple-100 hover:text-white transition-colors duration-300 hover:underline"
                    >
                      +91 6372 915 914
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <MapPin size={18} className="mt-1 text-purple-200 group-hover:text-white transition-colors duration-300" />
                  <div>
                    <p className="text-xs text-purple-200 mb-1">Location</p>
                    <p className="text-purple-100">Bhubaneswar, Odisha, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-purple-200">
                <span>&copy; {new Date().getFullYear()} Revaa. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center space-x-1">
                  <span>Made with</span>
                  <Heart size={14} className="text-red-400 animate-pulse" />
                  <span>in India</span>
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                
                <Link href="/t&c" className="text-purple-200 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center space-x-1 text-purple-200 hover:text-white transition-all duration-300 group"
                >
                  <span>Back to top</span>
                  <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </footer>
  );
};