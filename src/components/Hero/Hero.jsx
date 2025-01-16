import React, { useState, useEffect } from 'react';
import './Hero.scss';
import Logo from "../../assets/logos/barcamp_logo-main-gradient-logo.png";

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

    }, 3000);  // Total cycle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
             <img src={Logo} alt="BarCamp Surrey Logo" className="hero__logo" />
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