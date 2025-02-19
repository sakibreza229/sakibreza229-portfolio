import React from "react";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import {
  FaUser,
  FaCalendar,
  FaUserGraduate,
  FaEnvelope,
  FaGlobe,
  FaLocationDot,
} from "react-icons/fa6";
import { IconType } from "react-icons"; // Import type for icon

type AboutInfoProps = {
  icon: IconType; // Accepts an icon component from react-icons
  label: string; // Label for the info item
  text: string; // Text content for the info item
};

const AboutInfo: React.FC<AboutInfoProps> = ({ icon: Icon, label, text }) => {
  return (
    <div className="flex items-center gap-x-1">
      <Icon className="text-primary" />{" "}
      {/* Render the passed icon with a size class */}
      <h4 className="font-medium font-secondary">{label}:</h4>{" "}
      {/* Dynamic label with color and spacing */}
      <p className="ml-1">{text}</p> {/* Dynamic text with color class */}
    </div>
  );
};
const AboutInfos = () => {
  return (
    <div className="grid grid-cols-2 gap-y-2">
      <div className="space-y-2">
        <AboutInfo icon={FaUser} label="Name" text="Sakib Reza" />
        <AboutInfo
          icon={FaCalendar}
          label="Date of Birth"
          text="22 September, 2006"
        />
        <AboutInfo
          icon={FaGlobeAmericas}
          label="Nationality"
          text="Bangladeshi"
        />
        <AboutInfo
          icon={FaUserGraduate}
          label="Degree"
          text="Computer Science"
        />
      </div>
      <div className="space-y-2">
        <AboutInfo
          icon={BsFillBriefcaseFill}
          label="Freelance"
          text="Available Right Now"
        />
        <AboutInfo
          icon={FaEnvelope}
          label="Email"
          text="sakibreza229@gmail.com"
        />
        <AboutInfo
          icon={FaGlobe}
          label="Website"
          text="sakibreza229.netlify.app"
        />
        <AboutInfo
          icon={FaLocationDot}
          label="Address"
          text="Dhaka, Bangladesh"
        />
      </div>
    </div>
  );
};

export default AboutInfos;
