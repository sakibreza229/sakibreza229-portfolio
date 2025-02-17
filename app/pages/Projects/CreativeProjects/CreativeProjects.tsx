import React, {useState} from 'react'
import { HeadingSecondary } from '@/app/components/Headings'
import Libraries from './Libraries';
import Concepts from './Concepts';
import { SiGitbook, SiFlathub } from "react-icons/si";


// Define types for tabs
type Tab = "concepts" | "libraries";

const CreativeProjects = () => {
  const [activeTab, setActiveTab] = useState<Tab>("libraries");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="section-container creative-projects">
      <HeadingSecondary title='Creative Showcase' subtitle='My inovative works' />

      <div className="flex justify-center gap-x-6 mb-8">
        <button
          className={`font-medium cursor-pointer hover:text-primary inline-flex items-center gap-x-2 ${
            activeTab === "libraries" ? "text-primary" : ""
          }`}
          onClick={() => handleTabClick("libraries")}
        >
          <SiGitbook /> Libraries
        </button>
        <button
          className={`font-medium cursor-pointer hover:text-primary inline-flex items-center gap-x-2 ${
            activeTab === "concepts" ? "text-primary" : ""
          }`}
          onClick={() => handleTabClick("concepts")}
        >
          <SiFlathub /> Concepts
        </button>
      </div>

      {activeTab === "libraries" && <Libraries />}
      {activeTab === "concepts" && <Concepts />}
    </section>
  )
}

export default CreativeProjects