import React from "react";
import { HeadingSecondary } from "@/app/components/Headings";
import Image from "next/image";
import { FaDownload, FaPlay, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Tabs, Tab } from "@nextui-org/react";
import AboutBrief from "./AboutBrief";
import AboutInterests from "./AboutInterests";
import AboutInfos from "./AboutInfos";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

/**
 * About Component
 *
 * This component represents the "About Me" section of the portfolio.
 * It includes a brief introduction, personal information, hobbies, and action buttons.
 */
const About = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section id="about" className="section-container section-about">
      {/* Section Heading */}
      <HeadingSecondary title="About Me" subtitle="Introducing myself" />

      {/* Content Container */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-y-6 gap-x-12 mb-6">
        {/* About Image Section */}
        <div className="w-full md:w-[40%] shadow-md overflow-hidden">
          <Image
            src="/images/about-img.webp"
            alt="Sakib Reza"
            width={378}
            height={176}
            className="w-full h-full rounded-xl object-cover"
            priority // Ensures the image is loaded with high priority
          />
        </div>

        {/* About Content Section */}
        <div className="w-full md:w-[60%]">
          {/* Tabs for Personal Info, My Story, and Beyond Coding */}
          <Tabs
            aria-label="About Me Tabs"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full",
              tab: "max-w-fit px-0",
              tabContent: "font-medium text-sm text-secondary",
            }}
            color="primary"
            variant="underlined"
            className="w-full"
          >
            {/* Personal Info Tab */}
            <Tab key="personal-info" title="Personal Info">
              <h3 className="font-semibold font-secondary text-2xl mb-2 capitalize">
                Building, Learning, Innovating, Growing
              </h3>
              <p className="mb-4 leading-snug">
                I’m a full-stack developer passionate about crafting seamless
                web, mobile, and desktop applications, focusing on performance,
                user experience, and innovation to build scalable, efficient
                solutions that bring ideas to life.{" "}
                <a
                  className="text-primary hover:text-primary-hover font-medium transition-colors inline-flex gap-x-1 items-center"
                  href="#"
                >
                  Explore my journey <FaArrowUpRightFromSquare />
                </a>
              </p>
              <AboutInfos />
            </Tab>

            {/* My Story Tab */}
            <Tab key="my-story" title="My Story">
              <AboutBrief />
            </Tab>

            {/* Beyond Coding Tab */}
            <Tab key="hobby" title="Beyond Coding">
              <AboutInterests />
            </Tab>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-4 md:justify-start mt-4">
            {/* Download CV Button */}
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

            {/* Watch Intro Button */}
            <Button
              color="primary"
              variant="bordered"
              startContent={<FaPlay />}
              onPress={onOpen}
            >
              Watch Intro
            </Button>
          </div>
        </div>
      </div>

      {/* Intro Modal */}
      <Modal
        size="xl"
        radius="lg"
        hideCloseButton
        placement="center"
        backdrop="blur"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "pb-4 pt-0 px-0",
          base: "bg-transparent text-[#a8b0d3] p-0 shadow-none",
          footer: "p-0",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <video
                  width="100%"
                  height="auto"
                  controls
                  className="rounded-xl aspect-video"
                >
                  <source src="/coming_soon.mp4" type="video/mp4" />
                  <source src="/coming_soon.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="shadow-xl"
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  variant="flat"
                  onPress={onClose}
                  className="shadow-xl"
                >
                  Hire Me
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default About;