import React from 'react';
import { Tooltip } from '@nextui-org/react';

// Define the props for the HeroSocial component
type HeroSocialProps = {
  label: string; // The tooltip label for the social link
  href: string; // The URL for the social link
  Icon: React.ElementType; // The icon component to display
};

const HeroSocial: React.FC<HeroSocialProps> = ({ label, href, Icon }) => {
  return (
    <Tooltip content={label} color="foreground" showArrow={true}>
      {/* Social Link */}
      <a
        href={href}
        aria-label={label} // Accessibility: Provide a label for screen readers
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Security: Prevent opener exploitation
        className="hover:text-primary transition-colors" // Styling for hover effect
      >
        {/* Render the icon */}
        <Icon />
      </a>
    </Tooltip>
  );
};

export default HeroSocial;