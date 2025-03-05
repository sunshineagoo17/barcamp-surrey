import './Footer.scss';
import WordmarkLogo from '../../assets/logos/barcamp_logo-wordmark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <a href="https://barcampsurrey.org" rel="noopener noreferrer" aria-label="Go to homepage">
          <img src={WordmarkLogo} alt='Barcamp Surrey Logo' />
        </a>
      </div>

      <div className='footer__copyright'>
        <div className='footer__copyright-text'>
          &copy; 2025&nbsp;
          <a
            href='https://barcampsurrey.org'
            rel='noopener noreferrer'
            className='footer__link'
            aria-label="Go to homepage"
          >
            BarCamp Surrey
          </a>
        </div>
        <div className='footer__divider'>&nbsp;|&nbsp;</div>
          <a
            href="/code-of-conduct"
            className="footer__link"
            aria-label="Go to Code of Conduct page"
          >
            Code of Conduct
          </a>
        <div className='footer__divider'>&nbsp;|&nbsp;</div>
        <span className='footer__created-by'>
          <a
            href='https://www.sunshineagoo.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__sun-link'
            aria-label="Go to Sunshine's page"
          >
            <div className='footer__created-by-txt'>
              Created by&nbsp;          
            </div>
            <FontAwesomeIcon icon={faSun} className='footer__sun-icon' />
          </a>
        </span>
      </div>

      <div className='footer__contact'>
        <a href="mailto:Laura.czajkowski@gmail.com" aria-label="Contact Us" className="footer__button">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;