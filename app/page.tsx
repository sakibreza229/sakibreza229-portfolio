"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
import CreativeProjects from "./pages/Projects/CreativeProjects/CreativeProjects";
import Pricing from "./pages/Pricing/Pricing";
import Testimonial from "./pages/Testimonial/Testimonial";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import FloatingActionMenu from "./utils/FloatingMenu/FloatingActionMenu";
import ScrollToTop from "./utils/ScrollToTop";

export default function Home() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
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
          <Testimonial />
          <Blogs />
          <Contact />
        </main>
        <Footer />

        {/* Floating Menu Buttons */}
        <FloatingActionMenu />
        {/* Scroll To Top Button */}
        <ScrollToTop />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
