import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './HomeSlider2.css';
import VisibilitySensor from 'react-visibility-sensor';

const HomeSlider2 = () => {
  return (
    <div className="all">
      <VisibilitySensor>
        {({ isVisible }) => (
          <section className={isVisible ? 'logo show' : 'logo hidden'}>
            <img
              src="/images/logo/spardha-white-home.png"
              className="logo_img"
              alt="spardha"
            />
          </section>
        )}
      </VisibilitySensor>
      <VisibilitySensor>
        {({ isVisible }) => (
          <>
            <section className={isVisible ? 'waw_show' : 'waw_hidden'}>
              <p>WHAT ARE WE</p>
            </section>
            <section className={isVisible ? 'about_show' : 'about_hidden'}>
              <p>ABOUT US</p>
              <div className="about_box">
                <p>absddbfs</p>
              </div>
            </section>
          </>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default HomeSlider2;
