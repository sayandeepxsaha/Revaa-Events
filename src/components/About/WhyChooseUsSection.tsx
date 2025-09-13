"use client";

import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      number: "1",
      title: "Personalized Consultation",
      description:
        "We start every project with in-depth discussions to understand your vision, preferences, and unique requirements.",
    },
    {
      number: "2",
      title: "End-to-End Service",
      description:
        "From initial concept to final cleanup, we handle every aspect of your event with professional expertise.",
    },
    {
      number: "3",
      title: "Premium Network",
      description:
        "Access to exclusive venues, top-tier vendors, and premium services across India for exceptional experiences.",
    },
    {
      number: "4",
      title: "24/7 Support",
      description:
        "Our dedicated team provides round-the-clock support throughout your event journey for complete peace of mind.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-800 font-serif mb-4">
            Why Choose Revaa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What makes us different in the world of event planning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-navy-800 font-serif mb-8">
              Our Unique Approach
            </h3>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4"
                >
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {reason.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-800 mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-3xl shadow-lg flex items-center justify-center"
          >
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🌟</div>
              <p className="text-2xl font-semibold">
                Excellence in Every Detail
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
