"use client";

import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Link from "next/link";
import {Badge, Avatar} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("#header");

    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full px-2 z-50 flex items-center transition-all duration-300 ease-linear"
      id="header"
    >
      <nav className="nav text-foreground flex justify-between items-center mx-auto max-w-screen-xl xl:px-8 w-full transition-all duration-200 ease-linear">
        <div className="flex items-center gap-x-4 nav-logo">
          <Badge color="success" content="" placement="bottom-right" shape="circle">
            <Avatar
              isBordered 
              radius="full"
              color="primary"
              src="/avatar.webp"
              showFallback
              className="w-8 h-8"
            />
          </Badge>
          <a
            href="#"
            className="font-bold text-xl sm:text-2xl font-secondary text-[#b8b8ff] hover:text-primary transition-colors"
          >
            Sakib Reza<span className="text-primary">.</span>
          </a>
        </div>

        <div className="flex items-center gap-x-6">
          <NavBar />
          <Button color="primary" radius="lg">
            <Link href="#contact">Say Hello</Link>
            <PiPaperPlaneTiltFill />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
