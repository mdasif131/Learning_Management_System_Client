import React from 'react';
import totcImg1 from '@/app/assets/images/totocImg.png'
import totcImg2 from '@/app/assets/images/totcImg2.png'
import Image from 'next/image';

const ToTcIntro = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <div>
        {/* Step 01  */}
        <div className="text-center flex items-center justify-center flex-col gap-4">
          <h1 className="text-[#2F327D] font-bold text-3xl sm:text-[44px]">
            What is <span className="text-[#00CBB8]">TOTC</span>
          </h1>
          <p className="text-[#696984] max-w-2xl sm:max-w-5xl text-lg md:text-2xl text-justify md:text-center">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        {/* Step 02  */}
        <div className="mt-18 flex items-center justify-center px-18">
          <div className="relative w-full">
            <Image src={totcImg1} alt="image" width={600} height={400} />
            <div className="absolute z-10 top-44 left-35 flex-col flex items-center gap-4">
              <h2 className="text-white text-3xl font-bold">FOR INSTRUCTORS</h2>
              <button className="text-sm  text-white px-6 py-3 border border-white rounded-full cursor-pointer hover:underline">
                Start a class today
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <Image src={totcImg2} alt="image" width={600} height={400} />
            <div className="absolute z-10 top-44 left-43 flex-col flex items-center gap-4">
              <h2 className="text-white text-3xl font-bold">FOR STUDENTS</h2>
              <button className="text-sm  text-white px-6 py-3  rounded-full bg-[#23BDEEE5] cursor-pointer hover:border hover:border-white hover:opacity-90">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToTcIntro;
