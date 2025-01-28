import './CodeOfConduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faShieldAlt, faExclamationTriangle, faPhoneAlt, faClipboardCheck, faStar } from '@fortawesome/free-solid-svg-icons';

const CodeOfConduct = () => {
  return (
    <section className="code-of-conduct">
      <div className="code-of-conduct__container">
        <h1 className="code-of-conduct__title">Code of Conduct</h1>
        <p className="code-of-conduct__intro">
          BarCamp Surrey is dedicated to creating an open, welcoming, and safe environment for all attendees. Our aim is to foster an inclusive space where everyone feels respected and encouraged to participate.
        </p>
        <p className="code-of-conduct__intro">
          We do not tolerate harassment or inappropriate behaviour in any form. Participants who do not adhere to these guidelines may be asked to leave the event at the discretion of the organisers.
        </p>

        <div className="code-of-conduct__section">
          <FontAwesomeIcon icon={faHandsHelping} className="code-of-conduct__icon" />
          <h2 className="code-of-conduct__heading">Expectations</h2>
          <p className="code-of-conduct__text">
            To maintain a respectful and inclusive environment, we ask all attendees to:
          </p>
          <ul className="code-of-conduct__list">
            <li>Be Respectful: Treat everyone with kindness and consideration.</li>
            <li>Be Mindful: Be aware of your actions and their impact on others.</li>
            <li>Be Responsible: Help maintain a safe and clean environment.</li>
          </ul>
        </div>

        <div className="code-of-conduct__section">
          <FontAwesomeIcon icon={faExclamationTriangle} className="code-of-conduct__icon" />
          <h2 className="code-of-conduct__heading">Unacceptable Behaviour</h2>
          <p className="code-of-conduct__text">
            The following behaviours are not acceptable at BarCamp Surrey:
          </p>
          <ul className="code-of-conduct__list">
            <li>Offensive comments related to gender, gender identity, sexual orientation, disability, physical appearance, body size, race, age, or religion.</li>
            <li>Intimidation, stalking, or following.</li>
            <li>Harassing photography or recording.</li>
            <li>Disruption of talks or activities.</li>
            <li>Unwelcome sexual attention.</li>
            <li>Discrimination of any kind.</li>
            <li>Inappropriate content, such as explicit or harmful materials.</li>
            <li>Aggressive behaviour, including physical or verbal threats.</li>
          </ul>
          <p className="code-of-conduct__text">
            If your behaviour makes someone feel uncomfortable, it is your responsibility to stop immediately.
          </p>
        </div>

        <div className="code-of-conduct__section">
          <FontAwesomeIcon icon={faShieldAlt} className="code-of-conduct__icon" />
          <h2 className="code-of-conduct__heading">Enforcement</h2>
          <p className="code-of-conduct__text">
            Event organisers will take appropriate action to ensure a welcoming environment. This may include:
          </p>
          <ul className="code-of-conduct__list">
            <li>Issuing warnings.</li>
            <li>Asking individuals to leave the event.</li>
            <li>Restricting access to future BarCamp events.</li>
          </ul>
          <p className="code-of-conduct__text">
            Participants asked to stop inappropriate behaviour must comply immediately.
          </p>
        </div>

        <div className="code-of-conduct__section">
          <FontAwesomeIcon icon={faPhoneAlt} className="code-of-conduct__icon" />
          <h2 className="code-of-conduct__heading">Reporting Concerns</h2>
          <p className="code-of-conduct__text">
            If you experience or witness behaviour that makes you or others feel unsafe, please report it as soon as possible. Your safety and comfort are our priority.
          </p>
          <ul className="code-of-conduct__list">
            <li><strong>During the Event:</strong> Speak to organisers who will be clearly identified at the venue.</li>
            <li><strong>Call Us:</strong> A contact number will be posted here closer to the event. Stay tuned!</li>
          </ul>
          <p className="code-of-conduct__text">
            Reports will be handled with discretion and sensitivity. You will not be required to confront anyone directly. Organisers may involve additional team members to address concerns appropriately. We will support you to ensure you feel safe and welcome.
          </p>
        </div>

        <div className="code-of-conduct__section">
            <FontAwesomeIcon icon={faClipboardCheck} className="code-of-conduct__icon" />
          <h2 className="code-of-conduct__heading">Additional Guidelines</h2>
          <ul className="code-of-conduct__list">
            <li><strong>Minors:</strong> Attendees under 18 must be accompanied by a parent or guardian.</li>
            <li><strong>Safety:</strong> Please avoid running or engaging in unsafe activities.</li>
            <li><strong>Content:</strong> Attendee-generated content reflects individual opinions and is not endorsed by BarCamp Surrey.</li>
          </ul>
        </div>

        <div className="code-of-conduct__section">
            <FontAwesomeIcon icon={faStar} className="code-of-conduct__icon" />
          <h2 className="code-of-conduct__heading">Acknowledgements</h2>
          <p className="code-of-conduct__text">
            This Code of Conduct draws inspiration from similar community events. Thank you for helping us make BarCamp Surrey a positive and inclusive experience for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;