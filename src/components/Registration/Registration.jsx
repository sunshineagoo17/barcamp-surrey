import './Registration.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Registration = () => {
  useScrollAnimation();

  const eventUrl = 'https://lu.ma/ins7ivwr?from=embed';

  return (
    <section id='register' className='registration fade-in'>
      <h2 className='registration__title fade-in'>Ready to Join Us?</h2>

      <button
        className='registration__button'
        onClick={() => window.open(eventUrl, '_blank')}>
        Save Your Spot
      </button>

      <div
        className='registration__container'
        onClick={() => window.open(eventUrl, '_blank')}
        role='button'
        tabIndex={0}>
        <iframe
          src='https://lu.ma/embed/event/evt-u6LyCSDe4NG1hBq/simple'
          allowFullScreen
          aria-hidden='false'
          tabIndex='0'
          title='Barcamp Surrey Registration Form'
          className='registration__iframe fade-in'
        />
      </div>
    </section>
  );
};

export default Registration;