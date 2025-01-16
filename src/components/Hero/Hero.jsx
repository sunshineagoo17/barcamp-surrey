import React, { useState, useEffect } from 'react';
import './Hero.scss';
import Logo from "../../assets/logos/barcamp_logo-main.webp";

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const phrases = [
    '"Unconference"',
    '"Open Forum"',
    '"Collaborative Summit"',
    '"Idea Exchange"',
    '"Community Jam"',
    '"Innovation Gathering"',
    '"Interactive Meetup"',
    '"Knowledge Share"',
    '"Peer-Led Event"',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
  
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 500);
  
    }, 3000);
  
    return () => clearInterval(interval);
  }, [phrases.length]);  

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Background Synapses */}
      <div className="hero__synapses">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="hero__synapse"></div>
        ))}
      </div>

        <div className="hero__logo-container">
            <img src={Logo} alt="BarCamp Surrey Logo" className="hero__logo" />
        </div>

      <div className='hero__copy-container'>
        <h1 className="hero__title">
          A Technology <span className={`hero__highlight ${isFading ? 'fade' : ''}`}>
            {phrases[currentPhraseIndex]}
          </span>{" "}
          in the Heart of Surrey
        </h1>
        <button className="hero__button" onClick={scrollToAbout}>
          Tell Me More
        </button>
      </div>
    </section>
  );
};

export default Hero;
