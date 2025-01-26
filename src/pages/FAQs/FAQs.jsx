import './FAQs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faChargingStation,
  faUtensils,
  faUniversalAccess,
  faQuestionCircle,
  faChildReaching,
  faGlassCheers,
  faClipboardCheck,
  faChevronDown,
  faGlobe,
  faPodcast,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const FAQs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className='faq-page'>
      <h1 className='faq-page__title'>FAQs</h1>
      <div className='faq-page__grid'>
        {/* Standard FAQs */}
        <div className='faq-page__card'>
          <FontAwesomeIcon icon={faCar} className='faq-page__icon' />
          <h2 className='faq-page__question'>Is there parking at the venue?</h2>
          <p className='faq-page__answer'>
            Yes! There's plenty of parking available.
          </p>
        </div>

        <div className='faq-page__card'>
          <FontAwesomeIcon
            icon={faChargingStation}
            className='faq-page__icon'
          />
          <h2 className='faq-page__question'>Can I charge my EV?</h2>
          <p className='faq-page__answer'>
            Absolutely! EV charging stations are on-site.
          </p>
        </div>

        <div className='faq-page__card'>
          <FontAwesomeIcon icon={faUtensils} className='faq-page__icon' />
          <h2 className='faq-page__question'>Will there be food on site?</h2>
          <p className='faq-page__answer'>
            Yes! Breakfast and lunch will be available for purchase.
          </p>
        </div>

        <div className='faq-page__card'>
          <FontAwesomeIcon
            icon={faUniversalAccess}
            className='faq-page__icon'
          />
          <h2 className='faq-page__question'>Is the venue accessible?</h2>
          <p className='faq-page__answer'>
            All rooms are on the ground floor with accessible entrances, and
            disabled parking is available near the entrance.
          </p>
        </div>

        {/* "What is a BarCamp?" FAQ */}
        <div className={`faq-page__card ${isExpanded ? 'expanded' : ''}`}>
          <FontAwesomeIcon icon={faQuestionCircle} className='faq-page__icon' />
          <h2 className='faq-page__question'>What is a BarCamp?</h2>
          <div
            className={`faq-page__answer-container ${
              isExpanded ? 'expanded' : ''
            }`}>
            <p className='faq-page__answer'>
              BarCamp Surrey is an open and interactive workshop-style event
              designed for sharing knowledge and ideas in a relaxed and
              welcoming environment. Everyone is encouraged to attend—whether to
              simply listen or to actively participate by giving a talk. Talks
              can cover any topic you think others might find interesting,
              whether it’s about a hobby, something you’ve created, or even a
              technical or non-technical subject. It’s all about fostering
              curiosity and community engagement!
            </p>
            <p className='faq-page__answer'>
              Learn more about BarCamps on the{' '}
              <a
                href='https://en.wikipedia.org/wiki/BarCamp'
                target='_blank'
                rel='noopener noreferrer'
                className='faq-page__link'>
                <strong>Wikipedia page</strong>
              </a>{' '}
              or listen to this{' '}
              <a
                href='https://linuxmatters.sh/47/'
                target='_blank'
                rel='noopener noreferrer'
                className='faq-page__link'>
                <strong>podcast</strong>
              </a>{' '}
              with Alan Pope, brought to you by{' '}
              <a
                href='https://linuxmatters.sh/'
                target='_blank'
                rel='noopener noreferrer'
                className='faq-page__link'>
                <strong>Linux Matters</strong>
              </a>
              .
            </p>

            <div className='faq-page__links'>
              <a
                href='https://en.wikipedia.org/wiki/BarCamp'
                target='_blank'
                rel='noopener noreferrer'
                className='faq-page__button'>
                <FontAwesomeIcon icon={faGlobe} /> Wikipedia
              </a>
              <a
                href='https://linuxmatters.sh/47/'
                target='_blank'
                rel='noopener noreferrer'
                className='faq-page__button'>
                <FontAwesomeIcon icon={faPodcast} /> Podcast
              </a>
            </div>
          </div>
          <button className='faq-page__toggle' onClick={toggleExpand}>
            {isExpanded ? 'Show Less' : 'Read More'}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`faq-page__chevron ${isExpanded ? 'rotated' : ''}`}
            />
          </button>
        </div>

        <div className='faq-page__card'>
          <FontAwesomeIcon icon={faChildReaching} className='faq-page__icon' />
          <h2 className='faq-page__question'>Are minors welcome?</h2>
          <p className='faq-page__answer'>
            Attendees under 18 are welcome but must be accompanied by an adult.
            Please note that we cannot take responsibility for or supervise
            minors.
          </p>
        </div>

        <div className='faq-page__card'>
          <FontAwesomeIcon icon={faClipboardCheck} className='faq-page__icon' />
          <h2 className='faq-page__question'>
            Do I need to register to attend?
          </h2>
          <p className='faq-page__answer'>
            Please{' '}
            <a
              href='https://lu.ma/ins7ivwr?from=embed'
              target='_blank'
              rel='noopener noreferrer'
              className='faq-page__link'>
              <strong>register</strong>
            </a>{' '}
            as soon as possible, as spaces for the event are limited.
          </p>
          <div className='faq-page__links'>
            <a
              href='https://lu.ma/ins7ivwr?from=embed'
              target='_blank'
              rel='noopener noreferrer'
              className='faq-page__button'>
              <FontAwesomeIcon icon={faSignInAlt} /> Join Us
            </a>
          </div>
        </div>

        <div className='faq-page__card'>
          <FontAwesomeIcon icon={faGlassCheers} className='faq-page__icon' />
          <h2 className='faq-page__question'>Is there a post-event party?</h2>
          <p className='faq-page__answer'>
            More details on this closer to the time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;