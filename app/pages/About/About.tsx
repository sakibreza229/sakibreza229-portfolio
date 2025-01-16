import React from "react";
import { HeadingSecondary } from "@/app/components/Headings";
import Image from "next/image";
import AboutInfo from "./AboutInfo";
import { Button } from "@nextui-org/react";
import {
  FaDownload,
  FaPlay,
  FaHourglassHalf,
  FaClipboardCheck,
  FaMedal,
  FaUsers,
} from "react-icons/fa6";
import { Tabs, Tab } from "@nextui-org/react";
import AboutStory from "./AboutStory";

const About = () => {
  return (
    <section id="about" className="section-container section-about">
      {/* Heading */}
      <HeadingSecondary title="About Me" subtitle="Introducing myself" />

      <div className="flex flex-col md:flex-row justify-center items-start gap-y-6 gap-x-12 mb-6">
        {/* About Image */}
        <div className="w-full md:w-[40%] shadow-md overflow-hidden">
          <Image
            src="/images/about-img.webp"
            alt="Sakib Reza"
            width={378}
            height={176}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-[60%]">
          <Tabs
            aria-label="Options"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-primary-light",
              cursor: "w-full",
              tab: "max-w-fit px-0",
              tabContent: "font-medium text-sm",
            }}
            color="primary"
            variant="underlined"
            className="w-full"
          >
            <Tab key="personal-info" title="Personal Info">
              <h3 className="font-semibold text-3xl mb-2 capitalize">
                unmatched service for over 10 years
              </h3>
              <p className="mb-6 leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore cupiditate itaque velit consequatur sint quisquam
                architecto ipsa neque ratione earum.
              </p>

              {/* About Info Grid */}
              <div className="grid grid-cols-2 gap-y-2">
                <AboutInfo icon={FaUsers} label="Name" text="Sakib Reza" />
                <AboutInfo
                  icon={FaUsers}
                  label="Website"
                  text="sakibreza.com"
                />
                <AboutInfo icon={FaHourglassHalf} label="Age" text="25" />
                <AboutInfo
                  icon={FaClipboardCheck}
                  label="Experience"
                  text="3 Years"
                />
                <AboutInfo icon={FaMedal} label="Degree" text="BSc" />
                <AboutInfo icon={FaUsers} label="Team" text="5 Members" />
                <AboutInfo icon={FaMedal} label="Freelance" text="BSc" />
                <AboutInfo
                  icon={FaUsers}
                  label="Date of Birth"
                  text="5 Members"
                />
              </div>
            </Tab>
            <Tab key="my-story" title="My Story">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima laborum, esse provident consequatur odio ipsum enim optio qui? Ea deleniti eum recusandae enim placeat nihil repudiandae totam iusto, nesciunt unde tempore. Repudiandae quis, magnam optio minus nam a atque laboriosam reprehenderit facilis minima veniam assumenda voluptatum officia aliquid, veritatis cumque cupiditate omnis. Illum molestias id quae, aperiam, maiores magnam minima praesentium deleniti saepe ducimus inventore omnis doloremque ab modi, est nemo voluptate iste. Maxime perferendis repellendus ipsa a, facere nihil? Nulla deserunt molestiae cumque nesciunt earum? Alias ratione saepe aspernatur rem maiores recusandae, velit omnis, tempore voluptas cupiditate hic?
              </p>
            </Tab>
            <Tab key="hobby" title="Beside Code">
              <div className="w-full h-64 bg-container rounded-xl">
                s
              </div>
            </Tab>
          </Tabs>
          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-4 md:justify-start mt-4">
            <Button color="primary" endContent={<FaDownload />}>
              <a
                href="assets/documents/Sakib Reza - CV.pdf"
                download="Sakib Reza - CV"
                className="no-underline text-white"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </Button>
            <Button
              color="primary"
              variant="bordered"
              startContent={<FaPlay />}
            >
              <a
                href="#"
                className="no-underline text-primary"
                rel="noopener noreferrer"
                aria-label="Watch introduction video"
              >
                Watch Intro
              </a>
            </Button>
          </div>
        </div>
      </div>
      <AboutStory />
    </section>
  );
};

export default About;
