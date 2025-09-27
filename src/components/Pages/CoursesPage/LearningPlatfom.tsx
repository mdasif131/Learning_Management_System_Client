
import React from 'react';
import learingPlatfom_img from '@/app/assets/images/courses_Image/platform_img.png';
import Image from 'next/image';

const LearningPlatfom = () => {
  return (
    <div className="bg-[#EEF6FF] rounded-xl container mx-auto p-4 sm:p-12 my-10 shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
    
        <div className="flex-1 max-w-lg lg:max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#374151] mb-6 leading-tight">
            Know about learning <br className="hidden sm:inline" /> learning
            platform
          </h2>

          <ul className="space-y-4 mb-8">
            {/* Feature List Items with Custom Bullets */}
            {[
              'Free E-book, video & consolation',
              'Top instructors from around world',
              'Top courses from your team',
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-lg text-[#4B5563]"
              >
                <span className="flex-shrink-0 w-4 h-4 mt-1 mr-3 rounded-full bg-[#6EE7B7] border-2 border-[#10B981]"></span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Start Learning Button */}
          <button className="px-8 py-3 bg-[#4FC9BC] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#40A8A0] transition-colors duration-300">
            Start learning now
          </button>
        </div>

        <div className="flex-1 w-full max-w-xl p-2 relative">
          <Image
            src={learingPlatfom_img}
            alt="image"
            width={900}
            height={474}
            className='h-full w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPlatfom;
