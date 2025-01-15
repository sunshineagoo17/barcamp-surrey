import React from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Barcamp Surrey</h1>
      <div className="hero__info">
        <div className="hero__item">
          <FontAwesomeIcon icon={faCalendarAlt} className="hero__icon" />
          <p>August 2nd</p>
        </div>
        <div className="hero__item">
          <FontAwesomeIcon icon={faClock} className="hero__icon" />
          <p>9am - 5:30pm</p>
        </div>
        <div className="hero__item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="hero__icon" />
          <p>Godalming College, Tuesley Ln, Godalming GU7 1RS</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;