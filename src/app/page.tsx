"use client";

import React, { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import Night from "./event/page";
import Loader from "@/components/loader"; 
import AboutEvent from "@/components/AboutEvent";
import { usePathname } from "next/navigation";
// import { Services } from "@/components/Services";
// import About from "@/components/About";
// import ContactUs from "./contact/page";


const Page = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate loading for 2.5s (adjust as needed)
    const timer = setTimeout(() => {
      
      setLoading(false);

    }, 2500)
                return () => clearTimeout(timer);
  }, []);
  useEffect(()=>{
    setTimeout(()=>{if (pathname === "/") {
      // Already on homepage → just scroll
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home with hash
      window.location.href = "/#contact";
    }}
  ,3000)},[]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-hidden">
          <NavbarDemo />
          <Night />
          <AboutEvent/>
          <Hero />
          {/* <Services /> */}
          {/* <About /> */}
          {/* <ContactUs /> */}
        </div>
      )}
    </>
  );
};

export default Page;
