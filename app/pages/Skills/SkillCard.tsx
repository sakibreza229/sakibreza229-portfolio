import React, { ReactNode } from "react";
import { Tooltip } from "@nextui-org/react";

interface Skill {
  name: string;
  level: string;
  image: ReactNode;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Tooltip content={skill.level} color="primary" showArrow={true}>
      <div
        className="w-24 h-24 flex flex-col justify-center items-center 
                   border-2 border-gray-300 dark:border-secondary 
                   bg-container p-4 shadow-md rounded-xl cursor-pointer 
                   group hover:border-primary-light hover:shadow-lg 
                   transition-all duration-300"
        aria-label={`Skill: ${skill.name}, Level: ${skill.level}`}
      >

        {/* Skills Image */}
        {skill.image}
      
        <p
          className="text-xs text-neutral-500 dark:text-secondary 
                     font-semibold text-center font-secondary"
        >
          {skill.name}
        </p>
      </div>
    </Tooltip>
  );
};

export default SkillCard;
