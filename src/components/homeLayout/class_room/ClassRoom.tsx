import Link from 'next/link';
import React from 'react';
import classImag from '@/app/assets/images/classImg.png';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
const ClassRoom = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  items-center justify-center gap-4 py-20">
      {/* step 01  */}
      <div className="relative px-7 py-3 flex flex-col justify-start space-y-6">
        <h2 className="text-[#2F327D] text-4xl font-bold z-20 leading-15">
          Everything you can do in a physical classroom,
          <span className="text-[#00CBB8] "> you can do with TOTC</span>
        </h2>
        <p className="text-[#696984] text-2xl leading-[180%]">
          TOTC&apos;s school management software helps traditional and online
          schools manage scheduling, attendance, payments and virtual classrooms
          all in one secure cloud-based system.
        </p>

        <Link href={'/'} className="text-[#696984] text-[22px] underline ">
          Learn more
        </Link>
        {/* dod 01  */}
        <div className="w-17 h-17 bg-[#33EFA0] rounded-full absolute top-0 left-0 -z-10"></div>
        {/* dod 02  */}
        <div className="w-[30px] h-[30px] bg-[#33EFA0] rounded-full absolute  right-8 bottom-[30%] -z-10"></div>
      </div>

      {/* step 02  */}
      <div className="">
        <div className="relative">
          {/* box 01  */}
          <div className="absolute -z-10 top-0 left-0 w-[138px] h-[138px] bg-[#23BDEE] rounded-[20px]"></div>
          {/* box 02  */}
          <div className="absolute -z-10 bottom-0 right-0 w-[231px] h-[231px] bg-[#33EFA0] rounded-[20px]"></div>

          {/* calss video  */}
          <div className="p-6 z-20 relative">
            <Image src={classImag} alt="image" width={705} height={471} />
            <button className="flex items-center justify-center gap-4 absolute inset-0">
              <div className="w-14 h-13 bg-white rounded-full flex items-center justify-center text-[#23BDEE] cursor-pointer shadow-md">
                <FaPlay className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
