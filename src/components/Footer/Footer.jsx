import './Footer.scss';
import WordmarkLogo from '../../assets/logos/barcamp_logo-wordmark.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <a
          href='https://barcampsurrey.org'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={WordmarkLogo} alt='Barcamp Surrey Logo' />
        </a>
      </div>

      <div className='footer__copyright'>
        &copy; 2025{' '}
        <a
          href='https://barcampsurrey.org'
          target='_blank'
          rel='noopener noreferrer'
          className='footer__link'>
          Barcamp Surrey
        </a>
        . All Rights Reserved.
      </div>

      <div className='footer__contact'>
        <a href='mailto:laura@example.com' className='footer__button'>
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;