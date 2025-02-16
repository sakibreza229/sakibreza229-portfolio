import React from "react";
import { Button } from "@nextui-org/react";
import { PiCertificateFill, PiArrowRightBold } from "react-icons/pi";

interface Award {
  title: string;
  description: string;
  date: string;
  issuer: string;
  imgSrc: string;
}

interface AwardCardProps {
  awardsData: Award[];
}

const AwardCard: React.FC<AwardCardProps> = ({ awardsData }) => {
  return (
    <div>
      {awardsData.map((award, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-16 mt-24"
        >
          {/* Image Section */}
          <div className={`${idx % 2 !== 0 ? "order-2" : ""}`}>
            <img
              src={award.imgSrc}
              alt={award.title}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className={`${idx % 2 !== 0 ? "order-1 text-right" : ""}`}>
            <h3 className="text-2xl font-semibold">
              {award.title}
            </h3>
            <p className={`mt-2 ${idx % 2 == 0 ? "text-primary" : "text-secondary"} text-sm`}>
              <strong>Date:</strong> {award.date} • <strong>Issued by:</strong>{" "}
              {award.issuer}
            </p>
            <p className="my-4">{award.description}</p>

            {/* Action Buttons */}
            <div className={`flex gap-x-4 ${idx % 2 !== 0 ? "justify-end" : ""}`}>
              <Button color={idx % 2 == 0 ? "primary" : "secondary"} startContent={<PiCertificateFill />} className="text-white">
                Certificate
              </Button>
              <Button
                color={idx % 2 == 0 ? "primary" : "secondary"}
                variant="bordered"
                endContent={<PiArrowRightBold />}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardCard;
