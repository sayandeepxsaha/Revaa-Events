import About from "@/components/About";
import ContactUs from "@/components/Contact";
import { Hero } from "@/components/Hero";
import ServiceShowcase from "@/components/ServiceShowcase";
// import Whychooseus from "@/components/whychooseus";
import React from "react";

const page = () => (
  <div>
    <Hero />
    <ServiceShowcase />
    <About />
    {/* <Whychooseus /> */}
    <ContactUs />
  </div>
);

export default page;
