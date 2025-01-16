import React from "react";
import { IconType } from "react-icons"; // Import type for icon

type AboutInfoProps = {
  icon: IconType; // Accepts an icon component from react-icons
  label: string; // Label for the info item
  text: string; // Text content for the info item
};

const AboutInfo: React.FC<AboutInfoProps> = ({ icon: Icon, label, text }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Icon className="text-gray-400 dark:text-gray-300" /> {/* Render the passed icon with a size class */}
      <h4 className="font-medium text-gray-500 dark:text-white">{label}:</h4> {/* Dynamic label with color and spacing */}
      <p className="">{text}</p> {/* Dynamic text with color class */}
    </div>
  );
};

export default AboutInfo;
