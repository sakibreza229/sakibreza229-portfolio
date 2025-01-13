import React, { useState } from "react";
import { SiPolkadot } from "react-icons/si";
import { FaIdCard, FaTimes } from "react-icons/fa";

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="relative flex justify-center items-center">
      <button
        onClick={toggleMenu}
        className={`transition-transform duration-500 absolute z-20 text-2xl p-3 rounded-full shadow-lg bg-container hover:rotate-90 hover:scale-105 ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
        aria-label="Extra Menu"
      >
        {isOpen ? <FaTimes /> : <SiPolkadot />}
      </button>

      {/* menu buttons */}
    </div>
  );
};

export default ActionMenu;
