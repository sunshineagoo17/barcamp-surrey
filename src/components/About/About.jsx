import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faCalendarAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  // Google Calendar Event Link (Pre-filled)
  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=BarCamp+Surrey&dates=20250802T080000Z/20250802T163000Z&details=Join+us+at+BarCamp+Surrey+for+a+day+of+collaboration+and+innovation!&location=Godalming+College,+Tuesley+Ln,+Godalming+GU7+1RS`;

  // Google Maps Location Link
  const googleMapsLink = `https://www.google.com/maps?q=Godalming+College,+Tuesley+Ln,+Godalming+GU7+1RS`;

  // Scroll to FAQ section
  const scrollToDetails = () => {
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='about' className='about fade-in'>
      <h1 className='about__title fade-in'>Event Info</h1>
      <div className='about__info fade-in'>
        {/* WHAT */}
        <div className='about__item fade-in'>
          <FontAwesomeIcon icon={faComments} className='about__icon' />
          <h3 className='about__subtitle'>What?</h3>
          <p>
            BarCamp is a user-generated conference where people like you lead
            the conversation and shape the future.
          </p>
          <button className='about__button' onClick={scrollToDetails}>
            FAQ
          </button>
        </div>

        {/* WHEN */}
        <div className='about__item fade-in'>
          <FontAwesomeIcon icon={faCalendarAlt} className='about__icon' />
          <h3 className='about__subtitle'>When?</h3>
          <div className='about__when-container'>
            <p>August 2, 2025</p>
            <p>9:00 AM - 5:30 PM</p>
          </div>
          <a
            href={googleCalendarLink}
            target='_blank'
            rel='noopener noreferrer'
            className='about__button'>
            Add to Calendar
          </a>
        </div>

        {/* WHERE */}
        <div className='about__item fade-in'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='about__icon' />
          <h3 className='about__subtitle'>Where?</h3>
          <p>Godalming College, Tuesley Ln, Godalming GU7 1RS</p>
          <a
            href={googleMapsLink}
            target='_blank'
            rel='noopener noreferrer'
            className='about__button'>
            See It on a Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;