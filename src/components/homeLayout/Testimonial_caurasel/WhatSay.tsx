import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { GoArrowRight } from 'react-icons/go';


const WhatSay = () => {
  return (
    <div className="container mx-auto w-full py-20  pb-30 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center  justify-around gap-4">
        <div>
          <h4 className="text-[#525596] flex items-center gap-3 text-xl uppercase">
            <span className="w-8 h-[.1rem] bg-[#525596]/80"></span>
            <span>TESTIMONIAL</span>
          </h4>
          <div className="flex flex-col space-y-6 mt-10">
            <h1 className="text-6xl font-bold text-[#2F327D]">
              What They Say?
            </h1>
            <p className="text-2xl text-[#696984] max-w-[607px]">
              TOTC has got more than 100k positive ratings from our users around
              the world.{' '}
            </p>
            <p className="text-2xl text-[#696984] max-w-[580px]">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="text-2xl text-[#696984] max-w-[607px]">
              Are you too? Please give your assessment
            </p>
          </div>
          <button className="text-[#49BBBD] text-lg md:text-[22px] flex text-center justify-center gap-4 border rounded-full pl-6 mt-14">
            <span className='inline-flex items-center'>Write your assessment</span>
            <div className="w-16 h-16 border rounded-full flex items-center justify-center">
              <GoArrowRight className="text-xl " />
            </div>
          </button>
        </div>
        <div>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default WhatSay;
