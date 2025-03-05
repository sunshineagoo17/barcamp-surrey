import './Sponsors.scss';
import BitFolkLogo from '../../assets/logos/bitfolk-logo.png';
import UKGovCampLogo from '../../assets/logos/ukgovcamp_logo.png'; 
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Sponsors = () => {
  useScrollAnimation();

  return (
    <section className='sponsors fade-in'>
      <h2 className='sponsors__title fade-in'>Sponsored By</h2>
      <div className='sponsors__content-container'>
        <div className='sponsors__content fade-in'>
          {/* BitFolk Sponsor */}
          <a
            href="https://bitfolk.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to BitFolk's page"
            className="sponsors__logo-link">
            <img
              src={BitFolkLogo}
              alt='BitFolk Logo'
              className='sponsors__logo'
            />
          </a>

          <div className='sponsors__info'>
            <p className='sponsors__description'>
              BitFolk Ltd is your trusted, no-nonsense VPS host. Offering
              reliable, feature-rich, and affordable virtual private servers with
              full transparency—no small print, just performance. Explore how
              BitFolk can power your next big idea.
            </p>
          </div>
        </div>
        
        {/* UKGovCamp Sponsor */}
        <div className='sponsors__content fade-in'>
          <a
            href="https://www.ukgovcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to UKGovCamp's page"
            className="sponsors__logo-link">
            <img
              src={UKGovCampLogo}
              alt='UKGovCamp Logo'
              className='sponsors__logo'
            />
          </a>
          <div className='sponsors__info'>
            <p className='sponsors__description'>
            UKGovCamp is an annual, open, and participatory unconference for people who want to make the public sector better. Bringing together innovators and change-makers, it fosters discussion, collaboration, and fresh ideas to drive meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;