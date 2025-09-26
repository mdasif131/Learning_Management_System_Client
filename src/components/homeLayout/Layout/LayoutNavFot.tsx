import React, { FC, ReactNode } from 'react';
import Navbar from '../navber/navber';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: ReactNode;
}
const LayoutNavFot: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-100  ">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default LayoutNavFot;
