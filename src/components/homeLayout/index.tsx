import CloudFeatures from '@/components/homeLayout/cloud_Features/CloudFeatures';
import Hero from '@/components/homeLayout/hero/Hero';
import Navbar from '@/components/homeLayout/navber/navber';
import SeccessSection from '@/components/homeLayout/seccess_Section/seccessSection';
import Assessment from './Assessments/Assessment';
import Discussisons from './Discussions_section/Discussisons';
import ToTcIntro from './TOTC_intro/ToTcIntro';
import ClassRoom from './class_room/ClassRoom';
import FeaturesSection from './features_Section/Features';
import Footer from './footer/Footer';
import ManagementClass from './managment_section/ManagementClass';
import TeachersTools from './tacher_tools/Teachers_Tools';
import WhatSay from './Testimonial_caurasel/WhatSay';

const HomePage = () => {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default HomePage;
