import React from 'react';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">Barcamp Surrey</h1>
      <div className="about__info">
        <div className="about__item">
          <FontAwesomeIcon icon={faCalendarAlt} className="about__icon" />
          <p>August 2nd</p>
        </div>
        <div className="about__item">
          <FontAwesomeIcon icon={faClock} className="about__icon" />
          <p>9am - 5:30pm</p>
        </div>
        <div className="about__item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="about__icon" />
          <p>Godalming College, Tuesley Ln, Godalming GU7 1RS</p>
        </div>
      </div>
    </section>
  );
};

export default About;