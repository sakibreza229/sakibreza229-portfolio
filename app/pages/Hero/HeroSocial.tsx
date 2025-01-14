import React from 'react'
import { Tooltip } from "@nextui-org/react";

type HeroSocialProps = {
    label: string;
    href: string;
    Icon: React.ElementType;
  };

const HeroSocial: React.FC<HeroSocialProps> = ({label, href, Icon}) => {
  return (
    <Tooltip content={label} color="foreground" showArrow={true}>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        <Icon />
      </a>
    </Tooltip>
  );
}

export default HeroSocial