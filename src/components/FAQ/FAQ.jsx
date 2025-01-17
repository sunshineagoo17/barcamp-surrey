import React from 'react';
import './FAQ.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation, faUtensils } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  return (
    <section id="faq" className="faq">  
      <h2 className="faq__title">FAQ</h2>
      <div className="faq__grid">
        
        {/* 🚗 Parking */}
        <div className="faq__card">
          <FontAwesomeIcon icon={faCar} className="faq__icon" />
          <h3 className="faq__question">Is there parking at the venue?</h3>
          <p className="faq__answer">Yes! There's plenty of parking available.</p>
        </div>

        {/* 🔌 EV Charging */}
        <div className="faq__card">
          <FontAwesomeIcon icon={faChargingStation} className="faq__icon" />
          <h3 className="faq__question">Can I charge my EV?</h3>
          <p className="faq__answer">Absolutely! EV charging stations are on-site.</p>
        </div>

        {/* 🍽️ Food */}
        <div className="faq__card">
          <FontAwesomeIcon icon={faUtensils} className="faq__icon" />
          <h3 className="faq__question">Will there be food on site?</h3>
          <p className="faq__answer">Yes! Breakfast and lunch will be provided.</p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;