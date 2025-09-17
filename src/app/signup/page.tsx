'use client';

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Briefcase, 
  Gift, 
  Calendar, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Camera,
  Palette,
  Music,
  Sparkles,
  Play,
  Quote,
  Clock,
  Shield
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  price: string;
}

interface Testimonial {
  name: string;
  event: string;
  text: string;
  rating: number;
  avatar: string;
}

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroServices: Service[] = [
    {
      id: 'wedding',
      title: 'Weddings',
      description: 'Fairy tale weddings that celebrate your love story',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      price: 'From ₹2,00,000'
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Professional events that elevate your brand',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      price: 'From ₹75,000'
    },
    {
      id: 'birthday',
      title: 'Celebrations',
      description: 'Memorable birthday parties and special occasions',
      icon: <Gift className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      price: 'From ₹25,000'
    }
  ];

  const features = [
    { icon: <Award className="w-6 h-6" />, title: '500+ Events', desc: 'Successfully delivered' },
    { icon: <Users className="w-6 h-6" />, title: '50K+ Guests', desc: 'Happy experiences' },
    { icon: <CheckCircle className="w-6 h-6" />, title: '100% Satisfaction', desc: 'Client happiness rate' },
    { icon: <Clock className="w-6 h-6" />, title: '4+ Years', desc: 'Of excellence' }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Priya & Rahul',
      event: 'Wedding Celebration',
      text: 'Revaa made our dream wedding come true! Every detail was perfect, from the decorations to the coordination. Our guests are still talking about how beautiful everything was.',
      rating: 5,
      avatar: '👰'
    },
    {
      name: 'Tech Innovations Ltd.',
      event: 'Annual Conference',
      text: 'Professional, organized, and creative. Revaa helped us create a corporate event that truly impressed our clients and partners. Highly recommended!',
      rating: 5,
      avatar: '🏢'
    },
    {
      name: 'Ananya Sharma',
      event: 'Birthday Party',
      text: 'My daughter\'s birthday party was magical! The theme, decorations, and entertainment were all perfectly coordinated. Thank you for making her day so special.',
      rating: 5,
      avatar: '🎂'
    }
  ];

  const portfolioItems = [
    { title: 'Elegant Wedding', image: '💐', category: 'Wedding' },
    { title: 'Corporate Gala', image: '🏛️', category: 'Corporate' },
    { title: 'Birthday Magic', image: '🎈', category: 'Birthday' },
    { title: 'Anniversary Celebration', image: '💑', category: 'Anniversary' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                <span className="text-white">Create </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
                  Extraordinary
                </span>
                <br />
                <span className="text-white">Memories with </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  REVAA
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                We transform your vision into unforgettable experiences. From intimate celebrations to grand events, 
                every detail is crafted with passion, precision, and creativity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3">
                  <Calendar className="w-5 h-5" />
                  <span>Plan Your Event</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>View Our Work</span>
                </button>
              </div>
            </div>

            {/* Hero Services */}
            <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {heroServices.map((service, index) => (
                  <div
                    key={service.id}
                    className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-xl mx-auto`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>

                    <div className="text-center">
                      <div className="text-purple-300 font-semibold mb-4">{service.price}</div>
                      <button className="text-white font-medium hover:text-purple-300 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-20 left-10 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <div className="absolute top-40 right-16 opacity-30 animate-bounce" style={{ animationDelay: '2s' }}>
            <Heart className="w-6 h-6 text-pink-400" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-30 animate-bounce" style={{ animationDelay: '3s' }}>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="absolute bottom-60 right-32 opacity-30 animate-bounce" style={{ animationDelay: '4s' }}>
            <Gift className="w-6 h-6 text-green-400" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Revaa?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just event planners – we're experience creators, memory makers, and dream architects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From weddings to corporate events, we create experiences that resonate and inspire.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Services List */}
              <div className="space-y-8">
                {[
                  { 
                    icon: <Heart className="w-8 h-8" />, 
                    title: 'Wedding Planning', 
                    desc: 'Complete wedding planning from engagement to reception, creating your perfect day.',
                    color: 'from-pink-500 to-rose-500'
                  },
                  { 
                    icon: <Briefcase className="w-8 h-8" />, 
                    title: 'Corporate Events', 
                    desc: 'Professional conferences, product launches, and networking events that elevate your brand.',
                    color: 'from-blue-500 to-indigo-500'
                  },
                  { 
                    icon: <Users className="w-8 h-8" />, 
                    title: 'Social Gatherings', 
                    desc: 'Birthday parties, anniversaries, and celebrations that bring people together.',
                    color: 'from-green-500 to-emerald-500'
                  },
                  { 
                    icon: <Calendar className="w-8 h-8" />, 
                    title: 'Special Occasions', 
                    desc: 'Custom events tailored to your unique vision and requirements.',
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map((service, index) => (
                  <div key={index} className="group flex items-start space-x-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-xl flex-shrink-0`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Planning?</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Let's discuss your vision and create an event that exceeds your expectations. 
                  Get a free consultation and custom proposal today.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Free initial consultation',
                    'Custom event proposal',
                    'Flexible budget options',
                    'Full-service planning'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">Call us: +91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300">Real stories from our happy clients</p>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center max-w-4xl mx-auto">
                <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6 opacity-50" />
                
                <div className="transition-all duration-500 ease-in-out">
                  <blockquote className="text-2xl text-white italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div className="text-left">
                      <cite className="text-purple-300 font-semibold text-lg block">
                        {testimonials[currentTestimonial].name}
                      </cite>
                      <p className="text-gray-400">{testimonials[currentTestimonial].event}</p>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Navigation */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-purple-500 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                A glimpse into the extraordinary events we've created
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                >
                  <div className="aspect-square flex items-center justify-center text-6xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    {item.image}
                  </div>
                  <div className="p-6">
                    <div className="text-purple-300 text-sm font-medium mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="text-white font-medium bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
                <span>View Full Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
              <p className="text-xl text-gray-300">Our simple 4-step process to create your perfect event</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Discovery', 
                  desc: 'We listen to your vision, understand your needs, and discuss your budget and timeline.',
                  icon: <Users className="w-6 h-6" />
                },
                { 
                  step: '02', 
                  title: 'Planning', 
                  desc: 'Our team creates a detailed proposal with concepts, timeline, and vendor recommendations.',
                  icon: <Calendar className="w-6 h-6" />
                },
                { 
                  step: '03', 
                  title: 'Coordination', 
                  desc: 'We handle all logistics, vendor management, and coordinate every aspect of your event.',
                  icon: <CheckCircle className="w-6 h-6" />
                },
                { 
                  step: '04', 
                  title: 'Execution', 
                  desc: 'On the day of your event, we ensure flawless execution while you enjoy every moment.',
                  icon: <Sparkles className="w-6 h-6" />
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      <div className="text-white">{process.icon}</div>
                    </div>
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Complete Event Solutions</h2>
              <p className="text-xl text-gray-300">Everything you need for a perfect event, all in one place</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Camera className="w-6 h-6" />, title: 'Photography', desc: 'Professional event photography and videography' },
                { icon: <Palette className="w-6 h-6" />, title: 'Design & Decor', desc: 'Custom themes and stunning decorations' },
                { icon: <Music className="w-6 h-6" />, title: 'Entertainment', desc: 'DJs, live music, and entertainment acts' },
                { icon: <Shield className="w-6 h-6" />, title: 'Event Security', desc: 'Professional security and crowd management' }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Extraordinary</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Your perfect event is just a conversation away. Get in touch with our team and let's bring your vision to life 
                with creativity, precision, and passion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Free Consultation</span>
                </button>
                
                <a 
                  href="tel:+919876543210"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Contact Information */}
              <div className="border-t border-white/10 pt-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Call Us</p>
                      <a href="tel:+919876543210" className="text-white font-semibold hover:text-purple-300 transition-colors duration-300">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email Us</p>
                      <a href="mailto:hello@revaa.events" className="text-white font-semibold hover:text-purple-300 transition-colors duration-300">
                        hello@revaa.events
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Visit Us</p>
                      <p className="text-white font-semibold">Bhubaneswar, Odisha</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">5-Star Rated</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="col-span-2">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                  REVAA
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Creating extraordinary experiences that celebrate life's most precious moments. 
                  Your trusted partner for unforgettable events since 2020.
                </p>
                <div className="flex space-x-4">
                  {['📱', '📧', '📍', '🌟'].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors duration-300 cursor-pointer">
                      <span className="text-lg">{emoji}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Social Events', 'Event Design', 'Photography'].map((service, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">hello@revaa.events</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Bhubaneswar, Odisha</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Sat: 9AM-8PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 Revaa Events. All rights reserved. Creating memories since 2020.
              </div>
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                  <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="tel:+919876543210"
            className="group bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none"
          >
            <Phone className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;