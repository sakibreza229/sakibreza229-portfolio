import React from 'react'
import { BsEnvelopeDashFill } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { Button } from '@nextui-org/react';

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-x-12 gap-y-6 bg-secondary text-white px-6 lg:px-12 py-6 rounded-[4rem] text-center md:text-left">
      <div>
        <h3 className="text-xl font-secondary font-semibold mb-1">
          Subscribe to my Newsletter!
        </h3>
        <p className="text-sm mb-4">
          A periodic update about my life, recent blog posts, how-tos and
          discover.
        </p>
        <div className="relative max-w-96 mx-auto md:mx-0">
        <input
          type="email"
          placeholder="Enter your email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full text-white rounded-2xl border border-neutral-300 bg-transparent py-2 pl-4 pr-32 text-sm ring-4 ring-transparent transition focus:outline-none"
        />
        <div className="absolute inset-y-1 right-[5px] flex justify-end">
          <Button
            type="submit"
            aria-label="Submit"
            variant='flat'
            className="h-full px-4 font-secondary text-white bg-[#2c2c54]"
            endContent={<FaEnvelopeOpenText/>}
          >
            Subscribe
          </Button>
        </div>
      </div>
      </div>

      {/* divider */}
      <div className='bg-white/30 w-[2px] h-32 hidden lg:block'></div>

      <div className="md:max-w-60">
        <h3 className="text-lg font-medium mb-1 md:mb-2 flex items-center justify-center md:justify-start gap-x-2">
          <BsEnvelopeDashFill /> No Spam
        </h3>
        <p className="text-sm">
          I never send spam. And you can unsubscribe at any time!
        </p>
      </div>
    </div>
  )
}

export default Newsletter