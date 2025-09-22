"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  number: number;
  suffix?: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ number, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true }); // triggers only once when visible

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = number / (60 * duration); // ~60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= number) {
        clearInterval(interval);
        setCount(number);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, number, duration]);

  return (
    <motion.span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default function CountUpStats() {
  const stats = [
    { number: 100, suffix: "+", label: "Events Created" },
    { number: 50000, suffix: "+", label: "Happy Guests" },
    { number: 4, label: "Years of Expertise" },
    { number: 100, suffix: "%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 -mb-20 max-w-3xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 text-center"
        >
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
            <CountUp number={stat.number} suffix={stat.suffix} />
          </div>
          <div className="text-gray-900 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
