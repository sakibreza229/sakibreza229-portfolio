"use client";

import React from "react";
import {NextUIProvider} from "@nextui-org/react";

// Layouts
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Qualification from "./pages/Qualification/Qualification";
import Services from "./pages/Services/Services";
import SideProjects from "./pages/Projects/SideProjects/SideProjects";
import PortfolioProjects from "./pages/Projects/PortfolioProjects/PortfolioProjects";
import InnovativeWorks from "./pages/InnovativeWorks/InnovativeWorks";
import CreativeProjects from "./pages/Projects/CreativeProjects/CreativeProjects";
import Pricing from "./pages/Pricing/Pricing";
import Concepts from "./pages/Concepts/Concepts";
import Blogs from "./pages/Blogs/Blogs";
import Testimonial from "./pages/Testimonial/Testimonial";
import Contact from "./pages/Contact/Contact";

export default function Home() {
  return (
    <NextUIProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <SideProjects />
        <PortfolioProjects />
        <CreativeProjects />
        <Pricing />
        <InnovativeWorks />
        <Concepts />
        <Blogs />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </NextUIProvider>
  );
}
