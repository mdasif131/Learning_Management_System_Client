import course_details_img from '@/app/assets/images/courses_Image/couses_detail_img.png';
import ClassRoom from '@/components/homeLayout/class_room/ClassRoom';
import LayoutNavFot from '@/components/homeLayout/Layout/LayoutNavFot';
import CoursesDetails from '@/components/Pages/CoursesDetals/coursesDetails';
import ReviewPage from '@/components/Pages/CoursesDetals/CoursesReviews';
import {
  coursesData
} from '@/components/Pages/CoursesPage/CoursesCard';
import Recommended from '@/components/Pages/CoursesPage/Recommended';
import TopEducaton from '@/components/Pages/CoursesPage/TopEducaton';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
interface DetailsProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: DetailsProps) => {
  const { id } = params;
  const findCourse = coursesData.find(item => item.id === Number(id));
  
  return (
    <LayoutNavFot>
      <div className="relative min-h-screen ">
        <div>
          <Image
            src={course_details_img as string | StaticImageData}
            alt="image"
            width={1920}
            height={600}
          />
        </div>
        <div className="px-4 py-20 ">
          <div className="xl:absolute right-20  top-90">
            <CoursesDetails details={findCourse} />
          </div>
          <div>
            <div className="max-lg:w-full lg:w-4/6 px-4 mt-4 z-30">
              <ReviewPage />
            </div>
          </div>
        </div>
        <div className='mt-40'>
          <Recommended />
        </div>
        <div className='mt-20'>
          <ClassRoom />
        </div>
        <div>
          <TopEducaton />
        </div>
      </div>
    </LayoutNavFot>
  );
};

export default Page;
