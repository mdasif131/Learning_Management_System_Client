import CloudFeatures from '@/components/homeLayout/cloud_Features/CloudFeatures';
import Hero from '@/components/homeLayout/hero/Hero';
import SeccessSection from '@/components/homeLayout/seccess_Section/seccessSection';
import Assessment from './Assessments/Assessment';
import ClassRoom from './class_room/ClassRoom';
import Discussisons from './Discussions_section/Discussisons';
import FeaturesSection from './features_Section/Features';
import ManagementClass from './managment_section/ManagementClass';
import NewsSection from './News_Section/NewsSection';
import TeachersTools from './tacher_tools/Teachers_Tools';
import WhatSay from './Testimonial_caurasel/WhatSay';
import ToTcIntro from './TOTC_intro/ToTcIntro';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SeccessSection />
      <CloudFeatures />
      <ToTcIntro />
      <ClassRoom />
      <FeaturesSection />
      <TeachersTools />
      <Assessment />
      <ManagementClass />
      <Discussisons />
      <WhatSay />
      <NewsSection />
    </div>
  );
};

export default HomePage;
