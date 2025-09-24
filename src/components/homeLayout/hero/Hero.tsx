import Link from 'next/link';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import heroImage from '@/app/assets/images/heroimage.png';
import userImg1 from '@/app/assets/images/user1.png';
import Image from 'next/image';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';
import groIcon from '@/app/assets/images/groIcon.png'

const Hero = () => {
  return (
    <section className="relative bg-[#49BBBD] pt-20 lg:pt-0 lg:h-[68vh] overflow-hidden">
      <div className="absolute -bottom-1 left-0   w-full  z-20 overflow-hidden">
        <svg
          width="1912"
          height="135"
          viewBox="0 0 1912 135"
          className="w-full  h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0.5 0
       C192.5 92.4 715.833 127.333 953.5 132
       H1100.96
       C1246.15 127.968 1397.01 112.783 1531 91
       C1694.18 64.4711 1831.78 27.2521 1913.5 5
       V135
       H0.5
       V0 Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:pt-20   lg:flex       items-start justify-between ">
        {/* left side  */}
        <div className="max-w-xl mb-16 lg:mb-0 w-full">
          <h1 className="text-white text-2xl  lg:text-[54px] font-[700] ">
            <span className="text-orange-300">Studing </span>{' '} 
            <span>Online is now</span>
            <br /> <span>much easier</span>
          </h1>

          <p className="mt-6 text-xl text-white">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center  gap-6">
            <Link
              href={'/courses'}
              className="bg-white/35 rounded-full px-6 py-3 text-white hover:bg-orange-300 transition-colors duration-500 ease-in-out text-lg font-medium"
            >
              Join for free
            </Link>
            <button className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#23BDEE] cursor-pointer shadow-md">
                <FaPlay className="w-4 h-4" />
              </div>
              <span className="font-[400] text-2xl">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* right side  */}

        <div className="relative w-full xl:w-1/2 ">
          <div className="relative w-100  h-[500px] md:transform md:scale-157 md:translate-y-6 md:translate-x-5 lg:translate-x-12 xl:translate-x-22">
            <Image src={heroImage} alt="heroImage" width={500} height={500} />
          </div>

          {/* join now  */}
          <div className="absolute left-0  bottom-2 xl:bottom-6 rounded-[20px] bg-white/80 backdrop-blur-[10px] transform lg:-translate-x-10 xl:-translate-x-60  lg:translate-y-16 p-6">
            <div className=" flex flex-col justify-center items-center gap-3">
              <div className="flex items-center justify-center gap-4">
                <div className="relative">
                  <Image src={userImg1} alt="image" width={100} height={100} />
                  {/* Active dod  */}
                  <div className="bg-white rounded-full size-6 p-1 absolute right-0 top-17">
                    <div className=" bg-green-400 size-4 rounded-full"></div>
                  </div>
                </div>
                <div className="text-gray-500">
                  <h4 className="text-lg lg:text-2xl  font-bold">
                    User Experience Class
                  </h4>
                  <p className="text-sm lg:text-xl">Today at 12.00 PM</p>
                </div>
              </div>

              <div>
                <button className="bg-[#D8587E]  text-sm md:text-xl text-white rounded-full px-10 py-3 ">
                  Join Now
                </button>
              </div>
            </div>
          </div>

          {/* Asisted  */}
          <div className="absolute left-0 xl:-left-20 -top-5 lg:top-6 flex items-center justify-center gap-4  rounded-[20px] bg-white/80 backdrop-blur-[10px] p-4">
            <div className="bg-[#23BDEE] size-[50px] rounded-md flex items-center justify-center">
              <HiOutlineCalendarDateRange className="text-white text-3xl" />
            </div>
            <div className="text-gray-500">
              <h3 className="text-lg lg:text-2xl font-bold">250k</h3>
              <p className="text-sm lg:text-xl -tracking-tight">
                Asisted Student
              </p>
            </div>
          </div>
          {/* Email  */}
          <div className="absolute top-40 sm:-right-8 flex items-center justify-center gap-4  rounded-[20px] bg-white/80 backdrop-blur-[10px] p-4">
            <div className="bg-[#F88C3D] size-[50px] rounded-md flex items-center justify-center">
              <MdEmail className="text-white text-3xl" />
            </div>
            <div className="text-gray-500">
              <h3 className="text-lg lg:text-2xl  font-bold">
                Congratulations
              </h3>
              <p className="text-sm lg:text-xl-tracking-tight">
                Your admission completed
              </p>
            </div>
          </div>
          <Image className='absolute top-0 right-[30%]' src={groIcon} alt='image' width={100} height={100}/>
        </div>
      </div>
    </section>
  );
};
export default Hero;

// const Hero = () => {
//   return (
  
//     <section className="relative bg-[#49BBBD] pt-20 lg:pt-0 lg:h-[84vh] overflow-hidden">
//       {/* SVG for the bottom curve - no changes needed here, it's already responsive */}
//       <div className="absolute bottom-[-1px] left-0 w-full h-32 z-20 overflow-hidden">
//         <svg
//           width="1912"
//           height="135"
//           viewBox="0 0 1912 135"
//           className="w-full h-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0.5 0 C192.5 92.4 715.833 127.333 953.5 132 H1100.96 C1246.15 127.968 1397.01 112.783 1531 91 C1694.18 64.4711 1831.78 27.2521 1913.5 5 V135 H0.5 V0 Z"
//             fill="white"
//           />
//         </svg>
//       </div>

//       {/* Main content container */}
//       {/* Changed to a column layout on mobile and row on large screens. Added gap for spacing. */}
//       <div className="relative z-10 container mx-auto px-6 py-10 lg:py-20 flex flex-col lg:flex-row lg:items-start lg:justify-between items-center">
//         {/* Left side content */}
//         {/* Centered text on mobile, left-aligned on large screens */}
//         <div className="max-w-xl mb-16 lg:mb-0 text-center lg:text-left">
//           <h1 className="text-white text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight">
//             <span className="text-orange-300">Studying</span> Online is now
//             <br /> much easier
//           </h1>

//           <p className="mt-6 text-lg md:text-xl text-white">
//             TOTC is an interesting platform that will teach you in a more
//             interactive way.
//           </p>

//           {/* Buttons container */}
//           {/* Stacks vertically on small screens, row on larger. Centered on mobile. */}
//           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
//             <Link
//               href={'/courses'}
//               className="bg-white/35 rounded-full px-8 py-3 text-white hover:bg-orange-300 transition-colors duration-300 ease-in-out text-lg font-medium"
//             >
//               Join for free
//             </Link>
//             {/* Added hover effect for the play button */}
//             <button className="flex items-center justify-center gap-4 group">
//               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#23BDEE] cursor-pointer shadow-md group-hover:scale-110 transition-transform duration-300">
//                 <FaPlay className="w-5 h-5" />
//               </div>
//               <span className="font-medium text-lg text-white">
//                 Watch how it works
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Right side Image and Floating Cards */}
//         {/* Added margin top on mobile, and made it relative to contain the absolute children on large screens */}
//         <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
//           {/* Image Container: Made transforms responsive. Image is smaller on mobile and scales up. */}
//           <div className="relative w-full max-w-[500px] h-auto lg:transform lg:scale-150 lg:translate-y-3 lg:translate-x-5">
//             <Image
//               src={heroImage}
//               alt="Student studying online"
//               width={500}
//               height={500}
//               priority // Good for LCP (Largest Contentful Paint)
//               style={{ width: '100%', height: 'auto' }} // Ensures image is responsive
//             />
//           </div>

//           {/* Floating cards: Repositioned to be 'absolute' only on large screens */}
//           {/* They are hidden on mobile by default and shown on lg screens */}

//           {/* "Join Now" Card */}
//           {/* Hidden on mobile, absolutely positioned on large screens */}
//           <div className="hidden lg:block absolute left-0 bottom-0 rounded-[20px] bg-white/80 backdrop-blur-[10px] transform -translate-x-18 translate-y-10 p-6 shadow-lg">
//             <div className="flex flex-col justify-center items-center gap-3">
//               <div className="flex items-center justify-center gap-4">
//                 <div className="relative">
//                   <Image
//                     src={userImg1}
//                     alt="User avatar"
//                     width={80}
//                     height={80}
//                   />
//                   {/* Active dot */}
//                   <div className="bg-white rounded-full size-6 p-1 absolute right-0 top-14">
//                     <div className="bg-green-400 size-4 rounded-full"></div>
//                   </div>
//                 </div>
//                 <div className="text-gray-600">
//                   <h4 className="text-xl font-bold">User Experience Class</h4>
//                   <p className="text-base">Today at 12.00 PM</p>
//                 </div>
//               </div>

//               <div>
//                 <button className="bg-[#D8587E] text-lg text-white rounded-full px-10 py-3 hover:bg-opacity-90 transition-colors">
//                   Join Now
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* "Assisted Student" Card */}
//           {/* Hidden on mobile, absolutely positioned on large screens */}
//           <div className="hidden lg:flex absolute left-0 top-6 items-center justify-center gap-4 rounded-[20px] bg-white/80 backdrop-blur-[10px] p-4 shadow-lg">
//             <div className="bg-[#23BDEE] size-[50px] rounded-md flex items-center justify-center">
//               <HiOutlineCalendarDateRange className="text-white text-3xl" />
//             </div>
//             <div className="text-gray-600">
//               <h3 className="text-2xl font-bold">250k</h3>
//               <p className="text-base -tracking-tight">Assisted Student</p>
//             </div>
//           </div>

//           {/* "Congratulations" Card */}
//           {/* Hidden on mobile, absolutely positioned on large screens */}
//           <div className="hidden lg:flex absolute -right-10 top-1/3 items-center justify-center gap-4 rounded-[20px] bg-white/80 backdrop-blur-[10px] p-4 shadow-lg">
//             <div className="bg-[#F88C3D] size-[50px] rounded-md flex items-center justify-center">
//               <MdEmail className="text-white text-3xl" />
//             </div>
//             <div className="text-gray-600">
//               <h3 className="text-2xl font-bold">Congratulations</h3>
//               <p className="text-base -tracking-tight">
//                 Your admission completed
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;