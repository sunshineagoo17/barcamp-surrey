import './Footer.scss';
import WordmarkLogo from '../../assets/logos/barcamp_logo-wordmark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <a href='https://barcampsurrey.org' rel='noopener noreferrer'>
          <img src={WordmarkLogo} alt='Barcamp Surrey Logo' />
        </a>
      </div>

      <div className='footer__copyright'>
        &copy; 2025&nbsp;
        <a
          href='https://barcampsurrey.org'
          rel='noopener noreferrer'
          className='footer__link'
        >
          BarCamp Surrey
        </a>
        <div className='footer__divider'>&nbsp;|&nbsp;</div>
        <span className='footer__created-by'>
          Created by
          <a
            href='https://www.sunshineagoo.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__sun-link'
          >
            <FontAwesomeIcon icon={faSun} className='footer__sun-icon' />
          </a>
        </span>
      </div>

      <div className='footer__contact'>
        <a href='mailto:Laura.czajkowski@gmail.com' className='footer__button'>
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;