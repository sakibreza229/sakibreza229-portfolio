"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Badge, Avatar, Button } from "@nextui-org/react";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import NavBar from "./NavBar";

const Header = () => {
  // Create a reference to the header element for DOM manipulation
  const headerRef = useRef<HTMLElement>(null);

  // Add a scroll event listener to toggle the "scroll-header" class
  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      // Add the "scroll-header" class when the user scrolls down more than 20px
      if (header && window.scrollY > 20) {
        header.classList.add("scroll-header");
      } else if (header) {
        // Remove the "scroll-header" class when the user is at the top of the page
        header.classList.remove("scroll-header");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef} // Attach the ref to the header element
      className="fixed top-0 left-0 w-full px-2 z-50 flex items-center transition-all duration-300 ease-linear"
      id="header"
    >
      {/* Navigation Bar */}
      <nav className="nav text-foreground flex justify-between items-center mx-auto max-w-screen-xl w-full transition-all duration-200 ease-linear">
        {/* Logo Section */}
        <div className="flex items-center gap-x-4 nav-logo">
          {/* Avatar with a Badge */}
          <Badge
            color="success"
            content=""
            placement="bottom-right"
            shape="circle"
          >
            <Avatar
              isBordered
              radius="full"
              color="primary"
              src="/avatar.webp" // Avatar image source
              showFallback // Show a fallback UI if the image fails to load
              className="w-8 h-8" // Avatar size
            />
          </Badge>
          <div className="flex flex-col">
            {/* Link to the homepage */}
            <Link
              href="#"
              className="font-bold text-xl sm:text-2xl font-secondary text-foreground hover:text-primary transition-colors"
            >
              Sakib Reza<span className="text-primary">.</span>{" "}
              {/* Highlight the dot with primary color */}
            </Link>
          </div>
        </div>

        {/* Navigation and Button Section */}
        <div className="flex items-center gap-x-6">
          {/* Render the NavBar component */}
          <NavBar />
          {/* Button to navigate to the contact section */}
          <Button color="primary" radius="lg" variant="shadow">
            <Link href="#contact" className="flex items-center gap-2">
              Say Hello {/* Button text */}
              <PiPaperPlaneTiltFill /> {/* Icon */}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
