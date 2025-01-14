import React from "react";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import {
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaDribbble,
  FaArrowUpFromBracket,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { SiDailydotdev } from "react-icons/si";
import HeroBgAnimation from "./HeroBgAnimation";
import HeroBadge from "./HeroBadge";
import HeroSocial from "./HeroSocial";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-hero relative h-full w-full bg-layout [clip-path:_polygon(0%_0%,_100%_0,_100%_94%,_50%_100%,_0_94%)]"
    >
      <div className="section-container mt-16">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          {/* Hero Image and Badges */}
          <div className="relative self-center order-1 sm:order-2">
            <HeroBadge text="Years of Experience" number="5+" position="top-[60%] -left-12" />
            <HeroBadge text="Satisfied Clients" number="50+" position="bottom-6 -right-4" />

            <svg
              className="w-56 fill-primary md:w-72 lg:w-96"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" style={{ maskType: "alpha" }}>
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image className="w-44" x="34" y="16" href="/images/perfil.webp" />
              </g>
            </svg>
          </div>

          {/* Hero Text */}
          <div className="max-w-[598px] text-center md:text-left order-2 md:order-1">
            <h6 className="font-medium text-[#6c6cff] dark:text-[#f0f8f5] mt-4 md:mt-0 mb-2 md:mb-4">
              Hello, my name is <span className="animate-blink font-bold text-foreground">_</span>
            </h6>
            <h1 className="font-bold text-4xl sm:text-7xl font-secondary text-foreground">
              Sakib Reza
            </h1>
            <h3 className="mt-2 md:mt-6 font-medium text-xl md:text-3xl">
              a <span className="text-primary font-secondary">Fullstack Developer</span>
            </h3>
            <p className="mt-4 mb-6 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, animi atque eos ex ipsa, libero voluptas possimus quasi consequatur.
            </p>
            <div className="flex justify-center md:justify-start gap-x-4">
              <Button color="primary" variant="shadow" endContent={<FaArrowUpFromBracket />}>
                Hire Me
              </Button>
              <Button
                variant="shadow"
                color="secondary"
                endContent={<FaArrowRightToBracket />}
                className="text-white"
              >
                See Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-y-5 gap-x-3 justify-center md:justify-start mt-4">
          <div className="flex items-center gap-x-2">
            <span className="w-24 h-[2px] bg-foreground hidden lg:block"></span>
            <span className="text-sm font-medium">Checkout My:</span>
          </div>
          <HeroSocial href="https://linkedin.com/in/your-linkedin" label="LinkedIn" Icon={FaLinkedinIn} />
          <HeroSocial href="https://github.com/your-github" label="GitHub" Icon={FaGithub} />
          <HeroSocial href="https://behance.net/your-behance" label="Behance" Icon={FaBehance} />
          <HeroSocial href="https://dribbble.com/your-dribbble" label="Dribbble" Icon={FaDribbble} />
          <HeroSocial href="https://daily.dev/your-profile" label="Daily Dev" Icon={SiDailydotdev} />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="w-full flex justify-center mt-2">
        <Tooltip content="Scroll Down" showArrow={true} color="foreground">
          <Link href="#about" className="text-4xl text-primary animate-scroll-down">
            <IoChevronDownOutline />
          </Link>
        </Tooltip>
      </div>

      {/* Background Decorations */}
      <div className="bg-secondary absolute -top-16 left-[50px] transform translate-x-[-50%] blur-[180px] w-[250px] h-[250px] rounded-full z-[-1]"></div>
      <div className="bg-primary absolute top-[20%] right-0 transform translate-x-[-50%] blur-[180px] w-[280px] h-[280px] rounded-full z-[-1]"></div>

      {/* Animated Background */}
      <HeroBgAnimation />
    </section>
  );
};

export default Hero;
