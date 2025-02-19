"use client";

import { motion } from "framer-motion"; // Correct import
import React, { useRef } from "react";
import { interests } from "@/app/data/AboutData"; // Ensure this import is correct
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const AboutInterests = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full flex gap-4">
      <div className="w-full md:w-[70%] min-h-60 h-full overflow-hidden bg-container/40 rounded-3xl p-4">
        <div className="mb-4">
          <h4 className="text-3xl font-bold font-secondary flex gap-x-2 mb-2">
            Beyond the Code <FaPuzzlePiece />
          </h4>
          <p className="text-sm">
            Beyond the screen, I explore creativity through diverse
            passions—fueling innovation with every new experience.
          </p>
        </div>
        <motion.div
          ref={constraintsRef}
          className="relative h-24 flex flex-wrap gap-2"
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.title}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              className="absolute text-xs w-max bg-gradient-to-r from-primary-light via-primary to-primary-hover active:cursor-move text-white px-3 py-1 rounded-l-full rounded-r-full"
              style={{
                left: interest.left,
                top: interest.top,
              }}
            >
              {interest.emoji + " " + interest.title}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="bg-container/60 group w-full md:w-[30%] rounded-3xl p-4 text-center relative overflow-hidden">
        <h4 className="text-xl font-bold font-secondary">My Reads</h4>
        <p className="text-xs mb-4">
          Explore the books sharping my perspectives
        </p>
        <img
          src="/images/book.png"
          alt="book image"
          className="absolute w-40 group-hover:scale-105 group-hover:brightness-125 transition-all duration-300 ease-in-out"
        />
        <a href="#" className="absolute text-primary font-medium -bottom-[100%] group-hover:bottom-10 left-1/2 -translate-x-1/2 inline-flex w-max items-center hover:text-primary-hover transition-all gap-x-1">
          <span>More Reads</span> <FaArrowUpRightFromSquare />
        </a>
      </div>
    </div>
  );
};

export default AboutInterests;
