import React, { useState } from "react";
import { HeadingPrimary } from "@/app/components/Headings";
import { services } from "@/app/data/ServicesData";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { TbSquareRoundedCheck } from "react-icons/tb";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

// Define the type for a single service
interface Service {
  name: string;
  iconComponent: React.ReactNode;
  tagline: string;
  overview: string;
  keyFeatures: string[];
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <section id="services" className="section-container">
      <HeadingPrimary
        title="Services"
        subtitle="What I Offer"
        context={
          <div className="hidden md:flex gap-x-2">
            <Button isIconOnly isDisabled color="primary" variant="solid"><FaAngleLeft /></Button>
            <Button isIconOnly color="primary"><FaAngleRight /></Button>
          </div>
        }
      />
      <div className="grid md:grid-cols-3 gap-5 md:gap-8">
        {services.map((service: Service, index: number) => (
          <div
            key={service.name}
            className="relative bg-white rounded-3xl px-8 py-12 z-0 overflow-hidden group shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center group-hover:scale-105 transition-transform">
              <span className="text-7xl mb-6 text-primary group-hover:text-white">
                {service.iconComponent}
              </span>
              <h3 className="font-semibold text-xl text-primary-dark group-hover:text-white">
                {service.name}
              </h3>
              <p className="text-sm text-typography-muted group-hover:text-white my-3">
                {service.tagline}
              </p>
              <button
                aria-label={`Learn more about ${service.name}`}
                onClick={() => openModal(service)}
                className="arrow-btn group-hover:text-white"
              >
                See More <FaArrowRight className="arrow" />
              </button>
            </div>
            <div className="absolute z-[-1] -top-10 -right-10 w-12 h-12 bg-primary rounded-full group-hover:scale-[25] transition-all duration-300">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm font-medium">
        Looking for a custom job?{" "}
        <a href="#contact" className="text-primary hover:underline">
          Click here
        </a>{" "}
        to contact me! 👋
      </p>

      {selectedService && (
        <Modal
          classNames={{
            closeButton: "text-primary hover:text-danger text-xl",
          }}
          isOpen={true}
          onOpenChange={closeModal}
          aria-labelledby="modal-title"
        >
          <ModalContent className="bg-white p-4 rounded-3xl max-w-screen-sm w-full mx-auto">
            <ModalHeader className="text-3xl font-bold" id="modal-title">
              {selectedService.name}
            </ModalHeader>
            <ModalBody>
              <p className="mb-2 text-sm">{selectedService.overview}</p>
              <span className="inline-block font-semibold text-lg">
                Features & Benefits
              </span>
              <ul className="text-sm space-y-1 list-none">
                {selectedService.keyFeatures.map((keyFeature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <TbSquareRoundedCheck className="text-primary flex-shrink-0 mt-1" />
                    <span>{keyFeature}</span>
                  </li>
                ))}
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button onPress={closeModal}>Close</Button>
              <Button color="primary">Get Started</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </section>
  );
};

export default Services;
