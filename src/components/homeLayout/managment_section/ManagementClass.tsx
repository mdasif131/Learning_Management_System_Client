import React from 'react'
import managementImg from '@/app/assets/images/management_Imagepng.png'
import Image from 'next/image';
const ManagementClass = () => {
  return (
    <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-around px-4">
      <div>
        <h1 className="text-[#2F327D] font-bold text-4xl leading-[160%]">
          <span className="text-[#00CBB8]">Class Management</span>
          <br /> Tools for Educators
        </h1>
        <p className="text-lg lg:text-2xl text-gray-400 max-w-[548px] mt-5">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>
      <div>
        <Image src={managementImg} alt="teacherImg" width={640} height={615} />
      </div>
    </div>
  );
}

export default ManagementClass