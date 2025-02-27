import './Social.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const Social = () => {
  useScrollAnimation();

  return (
    <section className="social fade-in">
      <h2 className="social__title fade-in">Join the Conversation</h2>

      {/* Create Your Own Badge Button */}
      <div className="social__badge-container fade-in">
        <Link to="/share" className="social__badge-button" aria-label="Go to Share page">
          Create Your Own Badge
        </Link>
      </div>

      <p className="social__text fade-in">
        Share your thoughts and connect with fellow participants on social media using 
        <strong> #BarCampSurrey</strong>. Let’s keep the conversation going!
      </p>
      <div className="social__links fade-in">
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.barcampsurrey.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="social__button fade-in">
          Share on LinkedIn
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Excited+to+participate+in+%23BarCampSurrey!+Find+out+more+at+https://www.barcampsurrey.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="social__button fade-in">
          Share on X
        </a>
      </div>
    </section>
  );
};

export default Social;