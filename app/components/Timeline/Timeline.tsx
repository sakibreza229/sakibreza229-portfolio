import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./TimelineStyle.css";

interface TimelineItem {
  title: string;
  date: string;
  icon: React.ReactNode;
  description: string;
  rowClass: string;
}

interface TimelineProps {
  timelineData: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ timelineData }) => {
  return (
    <div className="w-full relative px-5">
      <div className="h-full w-[3px] bg-primary absolute left-[19px] md:left-1/2 -translate-x-1/2"></div>
      {timelineData.map((item, index) => (
        <div className={`flex ${item.rowClass}`} key={index}>
          <div className="timeline-card relative bg-container p-5 shadow-lg hover:shadow-2xl rounded-xl mb-4 transition-shadow before:absolute before:content-[''] before:h-[15px] before:w-[15px] before:bg-container before:top-8 before:rotate-45 group">
            <span className="icon text-primary absolute -left-[60px] md:left-auto bg-background p-1 text-2xl group-hover:bg-primary group-hover:text-container transition-all duration-300 ease-in-out border-[3px] border-solid border-primary rounded-full">
              {item.icon}
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-typography-title">{item.title}</h3>
              <span className="text-xs text-primary-light font-medium flex items-center gap-x-1">
                <FaRegCalendarAlt /> {item.date}
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
