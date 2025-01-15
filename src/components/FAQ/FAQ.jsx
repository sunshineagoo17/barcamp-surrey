import React from 'react';
import './FAQ.scss';

const FAQ = () => {
  return (
    <section className="faq">
      <h2 className="faq__title">FAQ</h2>
      <ul className="faq__list">
        <li>🚗 Is there parking at the venue? <strong>Lots of parking!</strong></li>
        <li>🔌 Can I charge my EV? <strong>Yes, there are charging points.</strong></li>
        <li>🍽️ Will there be food on site? <strong>Yes, breakfast and lunch will be available.</strong></li>
      </ul>
    </section>
  );
};

export default FAQ;