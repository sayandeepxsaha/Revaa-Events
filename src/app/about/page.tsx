"use client";

import CountUpStats from "@/components/CountUp";
import { NavbarDemo } from "@/components/Navbar";
import TeamSection from "@/components/team/demo";
import Testimonials from "@/components/Testimonials";

import {
  Heart,
  Award,
  Star,
  CheckCircle,
  Globe,
  Zap,
  Sparkles,
} from "lucide-react";
import React from "react";
const AboutPage: React.FC = () => {
  return (
    <>
            <NavbarDemo />
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-black">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
                REVAA
              </span>
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
              We are storytellers, dream architects, and memory makers. Since
              2020, we&apos;ve been crafting extraordinary events that celebrate
              life&apos;s most precious moments.
            </p>

       
            <CountUpStats />

            {/* Floating Elements for Visual Appeal */}
            <div className="absolute top-10 left-10 opacity-30">
              <div className="animate-bounce" style={{ animationDelay: "1s" }}>
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div className="absolute top-40 right-16 opacity-30">
              <div className="animate-bounce" style={{ animationDelay: "2s" }}>
                <Heart className="w-5 h-5 text-pink-400" />
              </div>
            </div>
            <div className="absolute bottom-40 left-20 opacity-30">
              <div className="animate-bounce" style={{ animationDelay: "3s" }}>
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Our Story Section */}
          <div className="mb-20 mt-15">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-pink-500 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-black leading-relaxed">
                  <p className="text-lg">
                    Founded in 2025, Revaa Events is your trusted partner in turning celebrations into unforgettable experiences. 
                    We specialize in planning and managing all kinds of events – from birthday parties, weddings, and anniversaries to corporate gatherings, conferences, and seminars.

                  </p>
                  <p>
                    At Revaa, we believe that every event is unique, and every detail matters. Our passionate team blends creativity, precision, 
                    and professionalism to deliver seamless experiences that reflect your style, vision, and purpose.

                  </p>
                </div>

                {/* <div className="mt-8 flex flex-wrap gap-4">
                  {["Creativity", "Quality", "Trust", "Innovation"].map(
                    (value, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full"
                      >
                        <span className="text-purple-300 font-medium text-sm">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div> */}
              </div>

              <div className="relative">
                <div className=" bg-gradient-to-r from-purple-300 to-pink-300 backdrop-blur-xl  rounded-2xl p-8 border border-purple-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        icon: <Award className="w-8 h-8 text-pink-600" />,
                        title: "Award Winning",
                        desc: "Recognized excellence",
                      },
                      {
                        icon: <CheckCircle className="w-8 h-8 text-pink-600" />,
                        title: "Certified Team",
                        desc: "Professional expertise",
                      },
                      {
                        icon: <Globe className="w-8 h-8 text-pink-600" />,
                        title: "Pan-India",
                        desc: "Events across India",
                      },
                      {
                        icon: <Zap className="w-8 h-8 text-pink-600" />,
                        title: "Quick Response",
                        desc: "24-hour turnaround",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="text-center group hover:scale-105 transition-transform duration-300"
                      >
                        <div className="text-purple-400 mb-3 flex justify-center group-hover:text-pink-400 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-black font-semibold mb-1 ">
                          {item.title}
                        </h3>
                        <p className="text-gray-800 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          <TeamSection />

          

         
          
          

          

          {/* Call to Action */}
          
        </div>
        {/* end max-w wrapper */}
      </div>
      {/* end relative z-10 */}
      <div className="mt-[-120px]">
      <Testimonials/>
      </div>
    </div>
     </>
  );
};

export default AboutPage;
