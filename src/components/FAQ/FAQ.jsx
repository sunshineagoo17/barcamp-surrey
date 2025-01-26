import './FAQ.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation, faUtensils, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const FAQ = () => {
  useScrollAnimation();

  return (
    <section id='faq' className='faq fade-in'>
      <h2 className='faq__title fade-in'>FAQ</h2>
      <Link to='/faq' className='faq__button fade-in'>Explore All FAQs</Link>
      <div className='faq__grid'>
        <div className='faq__card fade-in'>
          <FontAwesomeIcon icon={faCar} className='faq__icon' />
          <h3 className='faq__question'>Is there parking at the venue?</h3>
          <p className='faq__answer'>
            Yes! There's plenty of parking available.
          </p>
        </div>

        <div className='faq__card fade-in'>
          <FontAwesomeIcon icon={faChargingStation} className='faq__icon' />
          <h3 className='faq__question'>Can I charge my EV?</h3>
          <p className='faq__answer'>
            Absolutely! EV charging stations are on-site.
          </p>
        </div>

        <div className='faq__card fade-in'>
          <FontAwesomeIcon icon={faUtensils} className='faq__icon' />
          <h3 className='faq__question'>Will there be food on site?</h3>
          <p className='faq__answer'>
            Yes! Breakfast and lunch will be available for purchase.
          </p>
        </div>

        <div className='faq__card fade-in'>
          <FontAwesomeIcon icon={faUniversalAccess} className='faq__icon' />
          <h3 className='faq__question'>Is the venue accessible?</h3>
          <p className='faq__answer'>
            All rooms are on the ground floor with accessible entrances, and disabled parking is available near the entrance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;