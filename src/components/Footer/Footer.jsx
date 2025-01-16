import './Footer.scss';
import WordmarkLogo from '../../assets/logos/barcamp_logo-wordmark.svg';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__logo">
          <img src={WordmarkLogo} alt="Barcamp Surrey Logo" />
        </div>
        <div className="footer__copyright">
          &copy; 2025 Barcamp Surrey. All Rights Reserved.
        </div>
        <div className="footer__contact">
          <a href="mailto:laura@example.com" className="footer__button">Contact Us</a>
        </div>
    </footer>
  );
};

export default Footer;