import React from "react";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

interface Skill {
  name: string;
  level: string;
  image: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Tooltip content={skill.level} color="primary" showArrow={true}>
      <div className="w-24 h-24 flex flex-col justify-center items-center border-2 border-solid border-gray-300 dark:border-secondary hover:border-primary-light bg-container p-4 shadow-md rounded-xl cursor-help group">
        <Image
          src={skill.image}
          alt={`${skill.name} Icon`}
          width={42}
          height={42}
          className="mb-2 group-hover:scale-110 transition-transform"
        />
        <p className="text-xs text-neutral-400 dark:text-secondary font-semibold text-center font-secondary">
          {skill.name}
        </p>
      </div>
    </Tooltip>
  );
};

export default SkillCard;
