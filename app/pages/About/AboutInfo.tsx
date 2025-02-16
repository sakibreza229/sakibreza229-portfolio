import React from "react";
import { IconType } from "react-icons"; // Import type for icon

type AboutInfoProps = {
  icon: IconType; // Accepts an icon component from react-icons
  label: string; // Label for the info item
  text: string; // Text content for the info item
};

const AboutInfo: React.FC<AboutInfoProps> = ({ icon: Icon, label, text }) => {
  return (
    <div className="flex items-center gap-x-1">
      <Icon className="text-primary" /> {/* Render the passed icon with a size class */}
      <h4 className="font-medium font-secondary">{label}:</h4> {/* Dynamic label with color and spacing */}
      <p className="ml-1">{text}</p> {/* Dynamic text with color class */}
    </div>
  );
};

export default AboutInfo;
