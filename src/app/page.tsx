"use client";
import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import React from "react";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import ContactUs from "./contact/page";
import { NavbarDemo } from "@/components/Navbar";

const page = () => {
  const pathname = usePathname();
  useEffect(() => {
    if (window.location.hash === '#contact_us') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },[pathname]);

  return (
    <div>
      <NavbarDemo />
      <Hero />
      <Services/>
      <About/>
      <ContactUs />
    </div>
  );
};

export default page;
