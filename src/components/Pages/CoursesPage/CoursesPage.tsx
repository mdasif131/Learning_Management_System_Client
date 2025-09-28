import React from 'react'
import SearchWithFilter from './SearchWithFilter'
import CoursesCard from './CoursesCard'
import LearningPlatfom from './LearningPlatfom';
import Recommended from './Recommended';


const CoursesPage = () => {
  return (
    <div className=" w-full mx-auto">
      <SearchWithFilter />
      <div className=" container mx-auto py-20 px-6">
        <CoursesCard  />
      </div>
      <LearningPlatfom />
      <Recommended  />
    </div>
  );
}

export default CoursesPage