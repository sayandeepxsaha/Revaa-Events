"use client";
import React from "react";
import { useRouter } from "next/navigation";


const AboutEvent = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/register"); // ✅ Change route if your registration page path is different
  };

  return (
    <div className="">

    <section className=" flex flex-col items-center justify-center text-center px-6 py-16 bg-white relative overflow-hidden -mt-20">


      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        

        <h2 className="text-4xl font-black text-center mt-10 text-pink-500">
          About This Event
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Step into a world of creativity, elegance, and expression at{" "}
          <span className="font-semibold text-rose-500">Revaa Couture Night</span> — 
          a mesmerizing fusion of fashion and art. This event celebrates the spirit
          of innovation where talented <b>designers</b> and confident <b>models</b> come 
          together to showcase stunning designs, bold ideas, and diverse cultures on one stage.
        </p>

        <button
          onClick={handleRedirect}
          className="mt-8 px-8 py-3 rounded-full bg-purple-200 border border-black text-netutral-100 font-black shadow-lg transition-colors hover:bg-purple-400 hover:text-white"
          >
          Register Now
        </button>
      </div>
    </section>
            </div>
  );
};

export default AboutEvent;
