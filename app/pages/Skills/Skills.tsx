import React from "react";
import { HeadingPrimary } from '@/app/components/Headings'
import {languages, frameworks, tools} from '@/app/data/SkillsData'
import {Tabs, Tab} from "@nextui-org/react";
import SkillCard from "./SkillCard";

const SkillCategory = () => {
  return (
    <Tabs color="primary" variant="light">
      <Tab title='Languages' key="languages"></Tab>
      <Tab title='Frameworks' key="frameworks"></Tab>
      <Tab title='Tools' key="tools"></Tab>
    </Tabs>
  )
}

const Skills = () => {
  return (
    <section id='skills' className='section-container section-skills'>
      <HeadingPrimary title='Skills' subtitle='My tech stack' context={<SkillCategory />} />
      
    </section>
  )
}

export default Skills