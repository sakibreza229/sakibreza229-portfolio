"use client"; // Mark this as a Client Component

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { LuFolderSymlink } from "react-icons/lu";
import { FaArrowRight, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { libraries } from "@/app/data/CreativeWorksData";

interface Library {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  caseStudyLink?: string; // Optional case study link
  liveDemoLink?: string; // Optional live demo link
}

const Libraries: React.FC = () => {
  return (
      <div className="max-w-screen-lg relative mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".slide-next",
            prevEl: ".slide-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          {libraries.map((library: Library) => (
            <SwiperSlide
              key={library.title}
            >
              <div className="flex px-12 flex-col md:flex-row items-center gap-8 lg:gap-x-16">
              <div className="w-96 rounded-lg self-center">
                <img
                  src="https://heroui.com/images/card-example-5.jpeg"
                  alt={library.title}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{library.title}</h3>
                <p className="mb-3">{library.description}</p>
                <div className="flex items-center gap-x-2 font-medium">
                  <a
                    href={library.caseStudyLink || "#"} // Fallback to "#" if no link is provided
                    className="inline-flex items-center gap-x-1 hover:underline bg-primary text-white border border-primary px-3 py-1 rounded-lg"
                  >
                    <LuFolderSymlink />
                    Case Study
                  </a>
                  <a
                    href={library.liveDemoLink || "#"} // Fallback to "#" if no link is provided
                    className="arrow-btn border border-primary px-3 py-1 rounded-lg"
                  >
                    Live Demo <FaArrowRight className="arrow" />
                  </a>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          style={{ top: "calc(50% - 1.25rem)" }}
          className="slide-prev absolute left-1 -translate-y-1/2 z-[1] text-primary active:scale-90"
          aria-label="Previous Slide"
        >
          <FaAngleLeft className="text-4xl" />
        </button>
        <button
          style={{ top: "calc(50% - 1.25rem)" }}
          className="slide-next absolute right-1 -translate-y-1/2 z-[1] text-primary active:scale-90"
          aria-label="Next Slide"
        >
          <FaAngleRight className="text-4xl" />
        </button>
      </div>
  );
};

export default Libraries;