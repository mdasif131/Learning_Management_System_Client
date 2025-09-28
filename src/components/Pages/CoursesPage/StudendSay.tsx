import React from 'react'
import studend_avater from '@/app/assets/images/courses_Image/student_avater.png'
import tacher_1 from '@/app/assets/images/courses_Image/tacher_1.png'
import tacher_2 from '@/app/assets/images/courses_Image/tacher_2.png'
import tacher_3 from '@/app/assets/images/courses_Image/tacher_3.png'
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaTwitterSquare } from 'react-icons/fa'

const StudendSay = () => {
  return (
    <div className="bg-[#EEF6FF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-15">
        <h3 className="text-black text-lg sm:text-xl py-4  lg:text-3xl">
          What our students have to say
        </h3>
        <div className="bg-white rounded-4xl px-5 py-8 flex flex-col lg:flex-row space-y-8 justify-around lg:px-8 items-center">
          <div className='p-4'>
            <Image src={studend_avater} alt="avater" width={450} height={450} />
          </div>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-3xl text-black'>Savannah Nguyen</h2>
            <p className='text-xl '>tanya.hill@example.com</p>
            <p className="text-[#696984] leading-[180%] max-w-[527px]">
              Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising
              elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipising elit, sed do eiusmod tempor
            </p>
            <div className="flex items-center justify-start gap-4">
              <FaTwitterSquare className="rounded-full text-2xl bg-white text-[#49BBBD]" />
              <FaFacebookSquare className="rounded-full text-2xl  bg-white text-[#49BBBD]" />
              <FaInstagramSquare className="rounded-full text-2xl  bg-white text-[#49BBBD]" />
            </div>
          </div>
          <div className='flex lg:flex-col gap-4 lg:space-y-8'>
            <Image src={tacher_1} alt="avater" width={70} height={70} className='rounded-full' />
            <Image src={tacher_2} alt="avater" width={70} height={70} className='rounded-full' />
            <Image src={tacher_3} alt="avater" width={70} height={70} className='rounded-full' />
            <Image src={tacher_2} alt="avater" width={70} height={70} className='rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudendSay