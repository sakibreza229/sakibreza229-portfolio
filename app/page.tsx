"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Layout Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Page Components
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

// Utility Components
import FloatingActionMenu from "./utils/FloatingMenu/FloatingActionMenu";
import ScrollToTop from "./utils/ScrollToTop";

/**
 * Home Component
 * 
 * This is the main component of the application. It wraps the entire application
 * with NextUI and NextThemes providers, and includes all the page components
 * along with the header, footer, and utility components like the floating action menu
 * and scroll-to-top button.
 */
export default function Home() {
  return (
    <NextUIProvider>
      {/* Theme Provider to enable light/dark mode */}
      <NextThemesProvider attribute="class" defaultTheme="light">
        {/* Header Component */}
        <Header />

        {/* Main Content Section */}
        <main>
          <Hero /> {/* Hero Section */}
          <About /> {/* About Me Section */}
          <Skills /> {/* Skills Section */}
          <Qualification /> {/* Qualifications Section */}
          <Services /> {/* Services Offered Section */}
          <SideProjects /> {/* Side Projects Section */}
          <PortfolioProjects /> {/* Portfolio Projects Section */}
          <CreativeProjects /> {/* Creative Projects Section */}
          <Pricing /> {/* Pricing Section */}
          <Testimonial /> {/* Testimonials Section */}
          <Blogs /> {/* Blogs Section */}
          <Contact /> {/* Contact Section */}
        </main>

        {/* Footer Component */}
        <Footer />

        {/* Floating Action Menu for quick actions */}
        <FloatingActionMenu />

        {/* Scroll-to-Top Button for better navigation */}
        <ScrollToTop />
      </NextThemesProvider>
    </NextUIProvider>
  );
}