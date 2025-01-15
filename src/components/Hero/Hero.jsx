import React from 'react';
import './Hero.scss';
import Logo from "../../assets/logos/barcamp_logo-main-gradient-logo.png"; 

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <img src={Logo} alt="BarCamp Surrey Logo" className="hero__logo" />
      <h1 className="hero__title">A Technology <span className="hero__highlight">"Unconference"</span> in the Heart of Surrey</h1>
      <button className="hero__button" onClick={scrollToAbout}>
        Tell Me More
      </button>
    </section>
  );
};

export default Hero;