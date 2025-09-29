"use client";
import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import React from "react";
import ContactUs from "./contact/page";
import { NavbarDemo } from "@/components/Navbar";
import Demo from "./event/page";

const page = () => {
  return (
    <div>
      <Demo />
      <NavbarDemo />
      <Hero />
      <Services/>
      <About/>
      <ContactUs />
    </div>
  );
};

export default page;
