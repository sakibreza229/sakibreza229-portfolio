"use client";

import React, { useEffect } from "react";
import NavItem from "./NavItem";
import { TbHome, TbUserHexagon, TbBriefcase, TbFolder, TbFileText } from "react-icons/tb";
import { PiMonitorPlay } from "react-icons/pi";

interface SectionElement extends HTMLElement {
  id: string;
}

const NavBar: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const section = current as SectionElement;
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50; // Adjust for sticky header offset
        const sectionId = section.getAttribute("id");

        const link = document.querySelector(`.nav__item a[href*="${sectionId}"]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link?.classList.add("active-link");
          link?.setAttribute("aria-current", "page");
        } else {
          link?.classList.remove("active-link");
          link?.removeAttribute("aria-current");
        }
      });
    };

    const debouncedHandleScroll = debounce(handleScroll, 50); // Debounce for better performance
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  // Debounce utility function
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <div
      className="nav-menu fixed lg:static bottom-0 left-0 bg-white lg:bg-transparent w-full lg:w-auto h-16 lg:h-auto px-2 rounded-t-3xl lg:rounded-t-none content-center shadow-2xl lg:shadow-none"
      id="nav-menu"
    >
      <div className="flex justify-around items-center sm:justify-center sm:gap-x-8 md:gap-x-6">
        <NavItem sectionId="#hero" navName="Home" navIcon={<TbHome />} />
        <NavItem sectionId="#about" navName="About" navIcon={<TbUserHexagon />} />
        <NavItem sectionId="#services" navName="Services" navIcon={<TbBriefcase />} />
        <NavItem sectionId="#portfolio" navName="Portfolio" navIcon={<TbFolder />} />
        <NavItem sectionId="#courses" navName="Courses" navIcon={<PiMonitorPlay />} />
        <NavItem sectionId="#blogs" navName="Blogs" navIcon={<TbFileText />} />
      </div>
    </div>
  );
};

export default NavBar;
