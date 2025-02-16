import React,{ FC } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { Button } from "@nextui-org/react";

interface PortfolioCardProps {
  img: string;
  title: string;
  subtitle: string;
  description?: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ img, title, subtitle, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <figure className="relative aspect-w-16 aspect-h-9">
        <img
          src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1024x615.jpg"
          alt={title}
          width={500}
          height={300}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy" // Lazy load images for better performance
        />
      </figure>
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
        <div className="text-center">
          <h3 className="font-semibold text-xl text-primary mb-2">{title}</h3>
          <p className="text-sm text-white mb-4">{subtitle}</p>
          <Button
            aria-label={`View project: ${title}`}
            variant="flat"
            color="primary"
            startContent={<FaEye />}
          >
            View Project
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;