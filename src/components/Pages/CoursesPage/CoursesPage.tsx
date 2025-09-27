import React from 'react'
import SearchWithFilter from './SearchWithFilter'
import CoursesCard from './CoursesCard'

const CoursesPage = () => {
  return (
    <div className=" w-full mx-auto">
      <SearchWithFilter />
      <div className=' container mx-auto py-20 px-6'>
        <CoursesCard />
      </div>
    </div>
  );
}

export default CoursesPage