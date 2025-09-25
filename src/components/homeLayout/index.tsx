import React from 'react'
import Navbar from '@/components/homeLayout/navber/navber';
import Hero from '@/components/homeLayout/hero/Hero';
import SeccessSection from '@/components/homeLayout/seccess_Section/seccessSection'
import CloudFeatures from '@/components/homeLayout/cloud_Features/CloudFeatures';
import ToTcIntro from './TOTC_intro/ToTcIntro';
import ClassRoom from './class_room/ClassRoom';
import Footer from './footer/Footer';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SeccessSection />
      <CloudFeatures />
      <ToTcIntro />
      <ClassRoom />
      <Footer />
    </div>
  )
}

export default HomePage