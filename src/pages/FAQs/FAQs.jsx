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
} from '@fortawesome/free-solid-svg-icons';

const FAQs = () => {
  return (
    <section className="faq-page">
      <h1 className="faq-page__title">Frequently Asked Questions</h1>
      <div className="faq-page__grid">
        {/* Existing FAQs */}
        <div className="faq-page__card">
          <FontAwesomeIcon icon={faCar} className="faq-page__icon" />
          <h2 className="faq-page__question">Is there parking at the venue?</h2>
          <p className="faq-page__answer">Yes! There's plenty of parking available.</p>
        </div>

        <div className="faq-page__card">
          <FontAwesomeIcon icon={faChargingStation} className="faq-page__icon" />
          <h2 className="faq-page__question">Can I charge my EV?</h2>
          <p className="faq-page__answer">Absolutely! EV charging stations are on-site.</p>
        </div>

        <div className="faq-page__card">
          <FontAwesomeIcon icon={faUtensils} className="faq-page__icon" />
          <h2 className="faq-page__question">Will there be food on site?</h2>
          <p className="faq-page__answer">Yes! Breakfast and lunch will be available for purchase.</p>
        </div>

        <div className="faq-page__card">
          <FontAwesomeIcon icon={faUniversalAccess} className="faq-page__icon" />
          <h2 className="faq-page__question">Is the venue accessible?</h2>
          <p className="faq-page__answer">
            All rooms are on the ground floor with accessible entrances, and disabled parking is available near the entrance.
          </p>
        </div>

        {/* New FAQs */}
        <div className="faq-page__card">
          <FontAwesomeIcon icon={faQuestionCircle} className="faq-page__icon" />
          <h2 className="faq-page__question">What is a BarCamp?</h2>
          <p className="faq-page__answer">
            BarCamp Surrey is an open and interactive workshop-style event designed for sharing knowledge and ideas in a relaxed and welcoming environment.
            Everyone is encouraged to attend—whether to simply listen or to actively participate by giving a talk. Talks can cover any topic you think others
            might find interesting, whether it’s about a hobby, something you’ve created, or even a technical or non-technical subject. It’s all about fostering
            curiosity and community engagement! Learn more on the <a href="https://en.wikipedia.org/wiki/BarCamp" target="_blank" rel="noopener noreferrer">Wikipedia page</a> or listen to the <a href="https://linuxmatters.sh/47/" target="_blank" rel="noopener noreferrer">podcast interview</a>.
          </p>
        </div>

        <div className="faq-page__card">
          <FontAwesomeIcon icon={faChildReaching} className="faq-page__icon" />
          <h2 className="faq-page__question">Are minors welcome?</h2>
          <p className="faq-page__answer">
            Attendees under 18 are welcome but must be accompanied by an adult. Please note that we cannot take responsibility for or supervise minors.
          </p>
        </div>

        <div className="faq-page__card">
          <FontAwesomeIcon icon={faClipboardCheck} className="faq-page__icon" />
          <h2 className="faq-page__question">Do I need to register to attend?</h2>
          <p className="faq-page__answer">Please register as soon as possible, as spaces for the event are limited.</p>
        </div>

        <div className="faq-page__card">
          <FontAwesomeIcon icon={faGlassCheers} className="faq-page__icon" />
          <h2 className="faq-page__question">Is there a post-event party?</h2>
          <p className="faq-page__answer">More details on this closer to the time.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;