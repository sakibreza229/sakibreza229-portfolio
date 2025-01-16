"use client";

import React, { useState, FC, useMemo } from "react";
import { HeadingPrimary } from "@/app/components/Headings";
import { languages, frameworks, tools } from "@/app/data/SkillsData";
import SkillCard from "./SkillCard";

const Skills: FC = () => {
  const [activeTab, setActiveTab] = useState<"languages" | "frameworks" | "tools">("languages");

  const handleTab = (tab: "languages" | "frameworks" | "tools") => {
    setActiveTab(tab);
  };

  const skillCategories = {
    languages,
    frameworks,
    tools,
  };

  const TabButton: FC<{ tab: "languages" | "frameworks" | "tools"; label: string }> = ({ tab, label }) => (
    <button
      onClick={() => handleTab(tab)}
      className={`transition-colors inline-flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium ${
        activeTab === tab
          ? "bg-primary text-white"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-500"
      }`}
    >
      {label}
    </button>
  );

  const SkillCategory = useMemo(
    () => (
      <div className="flex gap-x-3">
        <TabButton tab="languages" label="Languages" />
        <TabButton tab="frameworks" label="Frameworks" />
        <TabButton tab="tools" label="Tools" />
      </div>
    ),
    [activeTab]
  );

  return (
    <section id="skills" className="section-container section-skills">
      <HeadingPrimary title="Skills" subtitle="My tech stack" context={SkillCategory} />
      <div className="mt-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div
            key={category}
            className={`flex-wrap justify-center md:justify-normal gap-4 ${
              activeTab === category ? "flex" : "hidden"
            }`}
          >
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
