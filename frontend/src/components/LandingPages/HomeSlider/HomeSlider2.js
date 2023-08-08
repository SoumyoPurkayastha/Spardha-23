import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './HomeSlider2.css';
import VisibilitySensor from 'react-visibility-sensor';
import Greencounter from '../GreenCounter/Greencounter';

const HomeSlider2 = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !animationCompleted) {
      setAnimationCompleted(true);
    }
  };

  return (
    <>
      <div className="all">
        <AnimatedLogo />
        <AnimatedAboutUs />
        <hr></hr>
      </div>
      <Greencounter />
    </>
  );
};

function withScrollAnimation(WrappedComponent) {
  return function AnimatedComponent(props) {
    const [animationCompleted, setAnimationCompleted] = useState(false);

    const handleVisibilityChange = (isVisible) => {
      if (isVisible && !animationCompleted) {
        setAnimationCompleted(true);
      }
    };

    return (
      <VisibilitySensor onChange={handleVisibilityChange}>
        {({ isVisible }) => (
          <WrappedComponent
            animationCompleted={animationCompleted}
            isVisible={isVisible}
            {...props}
          />
        )}
      </VisibilitySensor>
    );
  };
}

function LogoComponent({ animationCompleted, isVisible }) {
  const logoClassName = `logo ${
    isVisible || animationCompleted ? 'show' : 'hidden'
  }`;

  return (
    <section className={logoClassName}>
      <img
        src="/images/logo/spardha-white-home.png"
        className="logo_img"
        alt="spardha"
      />
    </section>
  );
}

const AnimatedLogo = withScrollAnimation(LogoComponent);

function AboutUsComponent({ animationCompleted, isVisible }) {
  const wawClassName = `waw ${
    isVisible || animationCompleted ? 'waw_show' : 'waw_hidden'
  }`;
  const aboutClassName = `about ${
    isVisible || animationCompleted ? 'about_show' : 'about_hidden'
  }`;

  return (
    <>
      <section className={wawClassName}>
        <p>WHAT ARE WE</p>
      </section>
      <section className={aboutClassName}>
        <p className="text-center">ABOUT US</p>
        <div className="about_box">
          <div className="card text-center border-light about_card">
            <p>
              Spardha is the annual sports festival of IIT (BHU), Varanasi. In
              its glorious history of over 36 years, Spardha has grown to become
              the largest and one of the most awaited sports festival of
              northern India where athletic competition is drawn from throughout
              the country. Each year, over a thousand participants compete in an
              array of sports like hockey, basketball, cricket, boxing, tennis
              and many more, creating a stunning spectacle of exceptional
              fervidness in athletic talent. The event, embraced by one of the
              best gatherings of celebrated sports personalities and spirited
              audience, has always enthused a zest for continuously scaling new
              zeniths in the pursuit of excellence and vibrancy among one and
              all. At present, Spardha has a team of over 500 and is also
              associated with numerous renowned firms and sports organizations.
              These exhilarating days have many resounding experiences for
              participants and supporters alike, creating a lifetime of
              memories. Gear up yourself to witness the thrilling and frolicsome
              SPARDHA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const AnimatedAboutUs = withScrollAnimation(AboutUsComponent);

export default HomeSlider2;
