import './Footer.scss';
import WordmarkLogo from '../../assets/logos/barcamp_logo-wordmark.svg';

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
          className='footer__link'>
          BarCamp Surrey
        </a>
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