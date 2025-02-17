import React from 'react'
import { HeadingSecondary } from '@/app/components/Headings'
import { testimonials } from '@/app/data/TestimonialData'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Avatar, Button } from '@nextui-org/react';
import LogoTicker from '@/app/components/LogoTicker';

// Define the type for a testimonial object
interface Testimonial {
  photo: string;
  name: string;
  review: string;
  passion: string;
}

const Testimonial = () => {
  return (
    <section className="section-testimonial">
      <HeadingSecondary title='Testimonial' subtitle="What's People Say" />

      <div className="max-w-4xl w-full mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: ".next-testimonial",
            prevEl: ".prev-testimonial",
          }}
          pagination={{ dynamicBullets: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          className="[padding:_0_1.75rem_2rem_1.75rem_!important] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          {testimonials.map((testimonial: Testimonial) => (
            <SwiperSlide key={testimonial.name} className="text-center">
              <Avatar src={testimonial.photo} className='h-24 w-24 mx-auto' color='secondary' showFallback />
              <p className="px-4 text-foreground/60 text-sm md:px-20 my-4">
                {testimonial.review}
              </p>
              <BiSolidQuoteLeft className="text-3xl text-primary-light mx-auto" />
              <div className="mt-2">
                <h6 className="font-semibold text-lg leading-none">
                  {testimonial.name}
                </h6>
                <span className="text-sm text-foreground/30 font-secondary">
                  {testimonial.passion}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button isIconOnly variant='flat' color='primary' className="prev-testimonial absolute left-0 top-1/2 -translate-y-1/2 z-[1] shadow-lg">
          <FaAngleLeft className="text-xl" />
        </Button>
        <Button isIconOnly variant='flat' color='primary' className="next-testimonial absolute right-0 top-1/2 -translate-y-1/2 z-[1] shadow-lg">
          <FaAngleRight className="text-xl" />
        </Button>
      </div>
      <LogoTicker />
    </section>
  )
}

export default Testimonial