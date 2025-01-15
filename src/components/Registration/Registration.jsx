import React from 'react';
import './Registration.scss';

const Registration = () => {
  return (
    <section className="registration">
      <h2 className="registration__title">Register Now</h2>
      <iframe
        src="https://lu.ma/embed/event/evt-u6LyCSDe4NG1hBq/simple"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
        title="Barcamp Surrey Registration Form"
      ></iframe>
    </section>
  );
};

export default Registration;