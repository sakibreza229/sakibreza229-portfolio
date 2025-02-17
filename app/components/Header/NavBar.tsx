"use client";

import React, { useEffect } from "react";
import NavItem from "./NavItem";
import { TbHome, TbUserHexagon, TbBriefcase, TbFolder, TbFileText } from "react-icons/tb";
import { PiMonitorPlay } from "react-icons/pi";

// Define an interface for section elements with an `id` attribute
interface SectionElement extends HTMLElement {
  id: string;
}

// Debounce utility function to limit the rate of function execution
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const NavBar: React.FC = () => {
  useEffect(() => {
    // Select all sections with an `id` attribute
    const sections = document.querySelectorAll("section[id]");

    // Function to handle scroll events and update active navigation links
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const section = current as SectionElement;
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50; // Adjust for sticky header offset
        const sectionId = section.getAttribute("id");

        // Find the corresponding navigation link for the section
        const link = document.querySelector(`.nav__item a[href*="${sectionId}"]`);

        // Add or remove the active class and aria-current attribute based on scroll position
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link?.classList.add("active-link");
          link?.setAttribute("aria-current", "page");
        } else {
          link?.classList.remove("active-link");
          link?.removeAttribute("aria-current");
        }
      });
    };

    // Debounce the scroll handler to improve performance
    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedHandleScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <div
      className="nav-menu fixed lg:static bottom-0 left-0 bg-container lg:bg-transparent w-full lg:w-auto h-16 lg:h-auto px-2 rounded-t-3xl lg:rounded-t-none content-center shadow-2xl lg:shadow-none"
      id="nav-menu"
    >
      <div className="flex justify-around items-center sm:justify-center sm:gap-x-8 md:gap-x-6">
        {/* Navigation Items */}
        <NavItem sectionId="#hero" navName="Home" navIcon={<TbHome />} />
        <NavItem sectionId="#about" navName="About" navIcon={<TbUserHexagon />} />
        <NavItem sectionId="#qualification" navName="Qualification" navIcon={<PiMonitorPlay />} />
        <NavItem sectionId="#services" navName="Services" navIcon={<TbBriefcase />} />
        <NavItem sectionId="#portfolio" navName="Portfolio" navIcon={<TbFolder />} />
        <NavItem sectionId="#blogs" navName="Blogs" navIcon={<TbFileText />} />
      </div>
    </div>
  );
};

export default NavBar;