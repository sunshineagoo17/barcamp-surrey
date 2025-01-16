import './Sponsors.scss';
import BitFolkLogo from '../../assets/logos/bitfolk-logo.png'; 

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="sponsors__title">Sponsored By</h2>
      <div className="sponsors__content">
        
        {/* BitFolk Logo */}
        <a
          href="https://bitfolk.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sponsors__logo-link"
        >
          <img
            src={BitFolkLogo}
            alt="BitFolk Logo"
            className="sponsors__logo"
          />
        </a>

        {/* Informative Copy */}
        <div className="sponsors__info">
          <p className="sponsors__description">
            BitFolk Ltd is your trusted, no-nonsense VPS host. Offering reliable, feature-rich, and affordable virtual private servers with full transparency—no small print, just performance. Explore how BitFolk can power your next big idea.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;