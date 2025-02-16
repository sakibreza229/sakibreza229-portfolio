import React, {useState} from 'react'
import { HeadingSecondary } from '@/app/components/Headings'
import Concepts from './Concepts';
import Libraries from './Libraries';
import { SiGitbook, SiFlathub } from "react-icons/si";


// Define types for tabs
type Tab = "concepts" | "libraries";

const CreativeProjects = () => {
  const [activeTab, setActiveTab] = useState<Tab>("concepts");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="section-container creative-projects">
      <HeadingSecondary title='Creative Showcase' subtitle='My inovative works' />

      <div className="flex justify-center gap-x-6 mb-8">
        <button
          className={`font-medium cursor-pointer hover:text-primary-hover inline-flex items-center gap-x-2 ${
            activeTab === "concepts" ? "text-primary" : ""
          }`}
          onClick={() => handleTabClick("concepts")}
        >
          <SiFlathub /> Concepts
        </button>
        <button
          className={`font-medium cursor-pointer hover:text-primary-hover inline-flex items-center gap-x-2 ${
            activeTab === "libraries" ? "text-primary" : ""
          }`}
          onClick={() => handleTabClick("libraries")}
        >
          <SiGitbook /> Libraries
        </button>
      </div>

      {activeTab === "concepts" && <Concepts />}
      {activeTab === "libraries" && <Libraries />}
    </section>
  )
}

export default CreativeProjects