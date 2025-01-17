import { useState, useEffect } from 'react';
import './Hero.scss';
import Logo from '../../assets/logos/barcamp_logo-main.webp';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useScrollAnimation();

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
    <section className='hero fade-in'>
      <div className='hero__synapses fade-in'>
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className='hero__synapse'></div>
        ))}
      </div>

      <div className='hero__logo-container fade-in'>
        <img src={Logo} alt='BarCamp Surrey Logo' className='hero__logo' />
      </div>

      <div className='hero__copy-container fade-in'>
        <h1 className='hero__title'>
          A Technology{' '}
          <span className={`hero__highlight ${isFading ? 'fade' : ''}`}>
            {phrases[currentPhraseIndex]}
          </span>{' '}
          in the Heart of Surrey
        </h1>
        <button className='hero__button fade-in' onClick={scrollToAbout}>
          Tell Me More
        </button>
      </div>
    </section>
  );
};

export default Hero;