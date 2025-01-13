import React from "react";

import { Tooltip } from "@nextui-org/react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pb-12 lg:pb-0 relative">
      <div className="bg-primary-dark border-y-2 border-solid border-white px-2 pt-24 md:pt-36 lg:pt-28 pb-12">
        <div className="grid grid-cols-1 items-center justify-center gap-y-5 lg:grid-cols-3 max-w-screen-xl mx-auto px-8">
          {/* footer title */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="personal logo"
              width={64}
              height={64}
            />
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-8">Sakib Reza</h2>
              <span className="font-secondary">Fullstack Developer</span>
            </div>
          </div>

          {/* footer links */}
          <ul className="flex justify-center gap-x-4 sm:gap-x-6 text-center font-medium *:transition">
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#contact">Support</a>
            </li>
          </ul>

          {/* footer social */}
          <div className="flex justify-self-center lg:justify-self-end leading-3 text-secondary *:inline-flex *:ml-4 *:transition-all">
            <Tooltip
              content="Facebook/sakibreza229"
              showArrow={true}
              color="secondary"
            >
              <a
                href="#"
                className="hover:translate-y-1 bg-white p-1 rounded-md  hover:text-primary"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </Tooltip>
            <Tooltip
              content="Instagram/sakibreza229"
              showArrow={true}
              color="secondary"
            >
              <a
                href="#"
                className="hover:translate-y-1 bg-white p-1 rounded-md  hover:text-primary"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </Tooltip>
            <Tooltip
              content="Youtube/@craftycodeer"
              showArrow={true}
              color="secondary"
            >
              <a
                href="#"
                className="hover:translate-y-1 bg-white p-1 rounded-md  hover:text-primary"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </Tooltip>
            <Tooltip
              content="X/sakibreza229"
              showArrow={true}
              color="secondary"
            >
              <a
                href="#"
                className="hover:translate-y-1 bg-white p-1 rounded-md  hover:text-primary"
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </Tooltip>
          </div>
        </div>

        {/* copyright text */}
        <p className="text-center text-sm mt-12 font-secondary">
          © 2024 by{" "}
          <a
            href="#"
            className="text-primary font-primary font-medium hover:underline"
          >
            Sakib Reza
          </a>{" "}
          | All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
