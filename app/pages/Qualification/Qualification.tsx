"use client";
import React, { useState } from "react";
import { HeadingPrimary } from "@/app/components/Headings";
import Timeline from "@/app/components/Timeline/Timeline";
import AwardCard from "@/app/components/AwardCard";
import { experience, education, awardsData } from "@/app/data/QualificationData";
import { HiBriefcase } from "react-icons/hi2";
import { FaUserGraduate, FaTrophy } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { Button } from "@nextui-org/react";

const Qualification = () => {
  const Tabs = {
    EXPERIENCE: "experience",
    EDUCATION: "education",
    ACHIEVEMENTS: "achievements",
    CERTIFICATES: "certificates",
  };

  const [activeTab, setActiveTab] = useState(Tabs.EXPERIENCE);

  const tabsData = [
    {
      id: Tabs.EXPERIENCE,
      icon: <HiBriefcase className="text-xl" />,
      label: "Experience",
    },
    { id: Tabs.EDUCATION, icon: <FaUserGraduate />, label: "Education" },
    {
      id: Tabs.ACHIEVEMENTS,
      icon: <FaTrophy className="text-lg" />,
      label: "Achievements",
    },
  ];

  return (
    <section id="qualification" className="section-container section-qualification">
      <HeadingPrimary
        title="Qualification"
        subtitle="My Personal Journey"
        context={
          <div className="hidden md:inline">
            <Button
              color="primary"
              variant="bordered"
              startContent={<IoDocumentText />}
            >
              My Resume
            </Button>
          </div>
        }
      />

      {/* Tabs */}
      <div className="flex justify-center flex-wrap md:gap-x-8 gap-4 mb-12">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`font-medium cursor-pointer hover:text-primary-hover inline-flex items-center gap-x-1 ${
              activeTab === tab.id ? "text-primary" : "text-primary-light"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeTab === Tabs.EXPERIENCE && (
          <Timeline timelineData={experience} />
        )}
        {activeTab === Tabs.EDUCATION && <Timeline timelineData={education} />}
        {activeTab === Tabs.ACHIEVEMENTS && <AwardCard awardsData={awardsData} />}
      </div>
    </section>
  );
};

export default Qualification;
