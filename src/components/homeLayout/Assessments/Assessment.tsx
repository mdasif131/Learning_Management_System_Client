import React from 'react'
import assessmentImg from '@/app/assets/images/assessments_Image.png'
import Image from 'next/image';
const Assessment = () => {
  return (
    <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-around px-4">
      <div className='max-md:order-2'>
        <Image src={assessmentImg} alt="teacherImg" width={640} height={615} />
      </div>
      <div className='max-md:order-1'>
        <h1 className="text-[#2F327D] font-bold text-4xl leading-[160%]">
          Assessments,
          <br /> <span className="text-[#00CBB8]"> Quizzes</span>, Tests
        </h1>
        <p className="text-lg lg:text-2xl text-gray-400 max-w-[548px] mt-5">
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
  );
}

export default Assessment