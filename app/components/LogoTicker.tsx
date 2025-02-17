import React from "react";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

const LogoTicker: React.FC = () => {
  // Define the logos array
  const logos = ["/images/partners_logo/Partner (1).png", "/images/partners_logo/Partner (1).png", "/images/partners_logo/Partner (1).png", "/images/partners_logo/Partner (1).png", "/images/partners_logo/Partner (1).png"];

  return (
    <div className="max-w-screen-md mx-auto py-6 select-none">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex flex-none gap-14 -translate-x-1/2 pr-14"
        >
          {[...logos, ...logos].map((logo, index) => (
            <Tooltip key={index} title="Work as Frontend Developer">
              <img
                src={logo}
                alt={`Partner logo ${index}`}
                className="h-8 w-auto object-contain"
              />
            </Tooltip>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;