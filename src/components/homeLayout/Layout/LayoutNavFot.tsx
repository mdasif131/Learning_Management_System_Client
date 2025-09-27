import React, { FC, ReactNode } from 'react';
import Navbar from '../navber/navber';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: ReactNode;
  navBgColor?: string; // background color as string
}
const LayoutNavFot: FC<LayoutProps> = ({ children, navBgColor }) => {
  return (
    <>
      {/* Sticky Navbar */}
      <div className={`sticky top-0 z-100 ${navBgColor || 'bg-white'}`}>
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default LayoutNavFot;
