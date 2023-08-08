import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './HomeSlider2.css';
import VisibilitySensor from 'react-visibility-sensor';
import Greencounter from '../GreenCounter/Greencounter';

const HomeSlider2 = () => {
  return (
    <>
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
                <p className="text-center">ABOUT US</p>
                <div className="about_box">
                  <div className="card text-center border-light about_card">
                    <p>
                      Spardha is the annual sports festival of IIT (BHU),
                      Varanasi. In its glorious history of over 36 years,
                      Spardha has grown to become the largest and one of the
                      most awaited sports festival of northern India where
                      athletic competition is drawn from throughout the country.
                      Each year, over a thousand participants compete in an
                      array of sports like hockey, basketball, cricket, boxing,
                      tennis and many more, creating a stunning spectacle of
                      exceptional fervidness in athletic talent. The event,
                      embraced by one of the best gatherings of celebrated
                      sports personalities and spirited audience, has always
                      enthused a zest for continuously scaling new zeniths in
                      the pursuit of excellence and vibrancy among one and all.
                      At present, Spardha has a team of over 500 and is also
                      associated with numerous renowned firms and sports
                      organizations. These exhilarating days have many
                      resounding experiences for participants and supporters
                      alike, creating a lifetime of memories. Gear up yourself
                      to witness the thrilling and frolicsome SPARDHA.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
        </VisibilitySensor>
        <hr></hr>
      </div>
      <Greencounter />
    </>
  );
};

export default HomeSlider2;
