import React from 'react';
import featuresImg from '@/app/assets/images/featues_Img/featuresImg.png';
import mantor1 from '@/app/assets/images/featues_Img/mantor1.png';
import mantor2 from '@/app/assets/images/featues_Img/mantor2.png';
import mantor3 from '@/app/assets/images/featues_Img/mantor3.png';
import mantor4 from '@/app/assets/images/featues_Img/mantor4.png';
import mantor5 from '@/app/assets/images/featues_Img/mantor5.png';
import featurs_Icon_1 from '@/app/assets/images/featues_Img/features_Icon_1.png';
import featurs_Icon_2 from '@/app/assets/images/featues_Img/featurs_Icon_2.png';
import featurs_Icon_3 from '@/app/assets/images/featues_Img/featurs_Icon_3.png';
import Image from 'next/image';
import { IoCall } from 'react-icons/io5';

const FeaturesSection = () => {
  return (
    <section className="px-4 py-12 lg:py-20 container mx-auto">
      {/* Top side */}
      <div className="text-center flex flex-col items-center gap-4 px-4 py-8 lg:py-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#00CBB8] font-bold">
          <span className="text-[#2F327D]">Our</span> Features
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#696984] max-w-4xl mx-auto leading-relaxed">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
        {/* Left side - Image Section */}
        <div className="relative w-full lg:w-[55%] xl:w-[50%] max-w-2xl mx-auto lg:mx-0">
          {/* Main container with responsive scaling */}
          <div
            className="relative w-full h-0 pb-[65%] sm:pb-[60%] md:pb-[55%] lg:scale-100 lg:rotate-0 lg:translate-0 lg:mt-0 
                         scale-75  -translate-y-10 -translate-x-5 mx-auto lg:mx-0"
          >
            {/* Main background image */}
            <div className="absolute inset-0">
              <Image
                className="w-full h-full object-contain"
                src={featuresImg}
                alt="features background"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>

            {/* Dot cycle */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                           w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[93px] lg:h-[93px]
                           rounded-full bg-white/50 drop-shadow-lg flex items-center justify-center"
            >
              <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] lg:w-[76px] lg:h-[76px] bg-white rounded-full"></div>
            </div>

            {/* Mentor 1 with buttons */}
            <div className="absolute z-20 top-[20%] left-[5%] w-[35%] sm:w-[40%]">
              <div className="relative w-full">
                <Image
                  src={mantor1}
                  alt="mentor 1"
                  width={255}
                  height={254}
                  className="w-full h-auto"
                />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-2 sm:mt-4">
                  <button className="bg-[#3465E1] cursor-pointer px-4 py-2 sm:px-6 sm:py-3 text-white text-sm sm:text-base lg:text-xl rounded-full whitespace-nowrap w-full sm:w-auto text-center">
                    Present
                  </button>
                  <button className="cursor-pointer px-2 py-1 sm:px-2 sm:py-2 bg-[#FFD4E1] rounded-full text-white w-full sm:w-auto">
                    <span className="bg-[#E13468] rounded-full px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center gap-2 text-sm sm:text-base lg:text-xl">
                      <IoCall className="text-sm sm:text-lg" />
                      <span>Call</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Other mentor images with responsive positioning */}
            <div className="absolute z-10 left-[45%] top-[25%] w-[20%]">
              <Image
                src={mantor2}
                alt="mentor 2"
                width={177}
                height={161}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute top-[22%] left-[70%] z-30 w-[22%]">
              <Image
                src={mantor3}
                alt="mentor 3"
                width={202}
                height={196}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute top-[55%] left-[45%] w-[20%]">
              <Image
                src={mantor4}
                alt="mentor 4"
                width={177}
                height={161}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute top-[58%] left-[72%] w-[25%]">
              <Image
                src={mantor5}
                alt="mentor 5"
                width={240}
                height={133}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col gap-6 lg:gap-8 mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] text-[#2F327D] font-bold leading-tight">
            A <span className="text-[#00CBB8]">user interface</span> designed
            for the classroom
          </h2>

          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image
                  src={featurs_Icon_1}
                  alt="icon"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed flex-1">
                Teachers don't get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>

            <div className="flex items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image
                  src={featurs_Icon_2}
                  alt="icon"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed flex-1">
                TA's and presenters can be moved to the front of the class.
              </p>
            </div>

            <div className="flex items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image
                  src={featurs_Icon_3}
                  alt="icon"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed flex-1">
                Teachers can easily see all students and class data at one time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
