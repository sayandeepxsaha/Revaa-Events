"use client";

import {
  Heart,
  Users,
  Award,
  Target,
  Lightbulb,
  Star,
  Calendar,
  CheckCircle,
  ArrowRight,
  Camera,
  Palette,
  Music,
  Coffee,
  Globe,
  Zap,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";

// Ensure Sparkles is imported
// Sparkles icon is available in lucide-react as `Sparkles` [9][6]

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredMember, setHoveredMember] = useState("");

  const teamMembers: TeamMember[] = [
    {
      name: "Priya Sharma",
      role: "Founder & Creative Director",
      image: "👩‍💼",
      bio: "With 10+ years in event planning, Priya transforms visions into reality with her creative expertise and attention to detail.",
      expertise: ["Wedding Planning", "Creative Direction", "Client Relations"],
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Manager",
      image: "👨‍💼",
      bio: "Rajesh ensures seamless execution with his logistics expertise and vendor relationship management.",
      expertise: ["Operations", "Vendor Management", "Timeline Planning"],
    },
    {
      name: "Anita Patel",
      role: "Design Specialist",
      image: "👩‍🎨",
      bio: "Anita brings artistic vision to life, creating stunning visual experiences for every event.",
      expertise: ["Interior Design", "Theme Development", "Decor Planning"],
    },
    {
      name: "Vikash Singh",
      role: "Corporate Events Lead",
      image: "👨‍💻",
      bio: "Vikash specializes in corporate events, ensuring professional excellence and brand alignment.",
      expertise: [
        "Corporate Events",
        "Conference Planning",
        "Brand Activations",
      ],
    },
  ];

  const milestones: Milestone[] = [
    {
      year: "2020",
      title: "Revaa Founded",
      description:
        "Started with a vision to create extraordinary events in Bhubaneswar",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "100 Events Milestone",
      description: "Celebrated our first 100 successful events across Odisha",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to a team of 15+ passionate event professionals",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Award Recognition",
      description:
        'Received "Best Event Planner" award from Odisha Business Excellence',
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "500+ Events",
      description:
        "Crossed 500 successful events with 100% client satisfaction",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description:
        "We pour our hearts into every event, treating each celebration as our own.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Uncompromising quality in every detail, from planning to execution.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "Working closely with clients to understand and exceed their expectations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Constantly evolving with fresh ideas and cutting-edge event trends.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
              <span className="text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                REVAA
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We are storytellers, dream architects, and memory makers. Since
              2020, we&apos;ve been crafting extraordinary events that celebrate
              life&apos;s most precious moments.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              {[
                { number: "500+", label: "Events Created" },
                { number: "50K+", label: "Happy Guests" },
                { number: "4", label: "Years Excellence" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements for Visual Appeal */}
            <div className="absolute top-20 left-10 opacity-30">
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
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Founded in 2020 in the heart of Bhubaneswar, Revaa began
                    with a simple yet powerful vision: to transform ordinary
                    moments into extraordinary memories. What started as a
                    passion project has evolved into Odisha&apos;s premier event
                    planning company.
                  </p>
                  <p>
                    We believe that every celebration tells a unique story.
                    Whether it&apos;s the joy of a wedding, the pride of a
                    corporate milestone, or the warmth of a family gathering, we
                    specialize in bringing those stories to life through
                    meticulous planning and creative execution.
                  </p>
                  <p>
                    Today, we&apos;re proud to have created over 500 successful
                    events, touched the lives of 50,000+ guests, and built
                    lasting relationships with clients who have become part of
                    our extended family.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
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
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        icon: <Award className="w-8 h-8" />,
                        title: "Award Winning",
                        desc: "Recognized excellence",
                      },
                      {
                        icon: <CheckCircle className="w-8 h-8" />,
                        title: "Certified Team",
                        desc: "Professional expertise",
                      },
                      {
                        icon: <Globe className="w-8 h-8" />,
                        title: "Pan-India",
                        desc: "Events across India",
                      },
                      {
                        icon: <Zap className="w-8 h-8" />,
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
                        <h3 className="text-white font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To create unforgettable experiences that bring people
                  together, celebrate life&apos;s precious moments, and exceed
                  expectations through innovative planning, flawless execution,
                  and genuine care for every detail.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be recognized as India&apos;s most trusted and innovative
                  event planning company, known for transforming ordinary
                  celebrations into extraordinary experiences that create
                  lasting memories for generations.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-center transform hover:scale-105"
                  onMouseEnter={() => setActiveSection(`value-${index}`)}
                >
                  <div
                    className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-xl`}
                  >
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The creative minds behind every successful event
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 text-center transform hover:scale-105"
                  onMouseEnter={() => setHoveredMember(member.name)}
                  onMouseLeave={() => setHoveredMember("")}
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300 text-3xl">
                    {member.image}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>

                  <p className="text-purple-300 font-medium mb-4">
                    {member.role}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300">
                Key milestones in our growth story
              </p>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } gap-8`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group hover:scale-105">
                        <div className="text-purple-300 font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    {/* Timeline node */}
                    <div className="relative z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-xl hover:scale-125 transition-transform duration-300">
                        <div className="text-white">{milestone.icon}</div>
                      </div>
                    </div>
                    {/* Spacer for alternating layout */}
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What We Do Best */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                What We Do Best
              </h2>
              <p className="text-xl text-gray-300">Our areas of expertise</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Camera className="w-6 h-6" />,
                  title: "Visual Storytelling",
                  desc: "Capturing every precious moment",
                },
                {
                  icon: <Palette className="w-6 h-6" />,
                  title: "Creative Design",
                  desc: "Unique themes and decorations",
                },
                {
                  icon: <Music className="w-6 h-6" />,
                  title: "Entertainment",
                  desc: "Music, shows, and performances",
                },
                {
                  icon: <Coffee className="w-6 h-6" />,
                  title: "Hospitality",
                  desc: "Exceptional guest experiences",
                },
              ].map((specialty, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-white">{specialty.icon}</div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{specialty.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <blockquote className="text-2xl text-white italic mb-6 leading-relaxed">
                &quot;Revaa didn&apos;t just plan our wedding – they brought our
                dreams to life. Every detail was perfect, and our guests are
                still talking about it months later. They truly understand what
                makes an event special.&quot;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl">
                  👰
                </div>
                <div className="text-left">
                  <cite className="text-purple-300 font-semibold">
                    Sneha &amp; Arjun
                  </cite>
                  <p className="text-gray-400 text-sm">Wedding Clients, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Revaa?
              </h2>
              <p className="text-xl text-gray-300">
                What sets us apart in the event planning industry
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "End-to-End Service",
                  description:
                    "From initial concept to final cleanup, we handle every aspect of your event planning and execution.",
                  features: [
                    "Complete Planning",
                    "Vendor Management",
                    "Day-of Coordination",
                    "Post-Event Support",
                  ],
                },
                {
                  title: "Personalized Approach",
                  description:
                    "Every event is unique, and we tailor our services to match your specific vision, style, and budget.",
                  features: [
                    "Custom Themes",
                    "Personal Consultation",
                    "Flexible Packages",
                    "Budget Optimization",
                  ],
                },
                {
                  title: "Professional Excellence",
                  description:
                    "Our certified team brings years of experience and industry connections to ensure flawless execution.",
                  features: [
                    "Expert Team",
                    "Premium Vendors",
                    "Quality Assurance",
                    "Timely Delivery",
                  ],
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Awards */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-xl rounded-2xl p-12 border border-yellow-500/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                Recognition &amp; Awards
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    title: "Best Event Planner 2024",
                    org: "Odisha Business Excellence Awards",
                    icon: <Award className="w-8 h-8" />,
                  },
                  {
                    title: "Customer Choice Award",
                    org: "Eastern India Wedding Awards",
                    icon: <Heart className="w-8 h-8" />,
                  },
                  {
                    title: "Innovation in Events",
                    org: "Bhubaneswar Chamber of Commerce",
                    icon: <Lightbulb className="w-8 h-8" />,
                  },
                ].map((award, i) => (
                  <div key={i} className="group">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <div className="text-white">{award.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-yellow-300 text-sm font-medium">
                      {award.org}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-lg text-gray-200 leading-relaxed">
                  &quot;Recognition from industry peers validates our commitment
                  to excellence and motivates us to continue setting new
                  standards in event planning.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Let&apos;s discuss your upcoming event and see how we can bring
                your vision to life. Schedule a free consultation to get
                started.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </button>

                <button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>View Our Work</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Contact */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-gray-300 mb-4">Or reach out directly:</p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300"
                  >
                    <span>📞 +91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:hello@revaa.events"
                    className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300"
                  >
                    <span>✉️ hello@revaa.events</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end max-w wrapper */}
      </div>
      {/* end relative z-10 */}
    </div>
  );
};

export default AboutPage;
