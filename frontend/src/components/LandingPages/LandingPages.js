import React from 'react';
import Header from './Header/Header';
import HomeSlider2 from './HomeSlider/HomeSlider2';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';

function LandingPages() {
  return (
    <>
      <Header />
      <HomeSlider2 />
      <Outlet />
      <Footer />
    </>
  );
}

export default LandingPages;
