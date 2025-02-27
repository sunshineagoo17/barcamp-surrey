import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/logos/barcamp_logo-wordmark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const isMainPage = location.pathname === '/';
  const isSharePage = location.pathname === '/share';
  const isFAQPage = location.pathname === '/faq';
  const isKnownPage = isMainPage || isFAQPage || isSharePage;
  const is404Page = !isKnownPage; 

  return (
    <header className="header">
      {/* Logo Image */}
      <div className="header__logo">
        <Link to="/" aria-label="Go to Homepage">
          <img src={Logo} alt="BarCamp Surrey Logo" className="header__logo-img" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="header__nav">
        {isMainPage ? (
          <>
            <a href="#about" className="header__nav-link" aria-label="Go to About page">
              About
            </a>
            <a href="#faq" className="header__nav-link" aria-label="Go to FAQ page">
              FAQ
            </a>
            <a href="#register" className="header__nav-link" aria-label="Register for BarCamp Surrey">
              Register
            </a>
            <a href="mailto:Laura.czajkowski@gmail.com" className="header__nav-link" aria-label="Contact Us">
              Contact
            </a>
          </>
        ) : (
          <>
            <Link to="/" className="header__nav-link" aria-label="Go to homepage">
              Home
            </Link>
            {!isSharePage && (
              <Link to="/share" className="header__nav-link" aria-label="Go to Share page">
                Share
              </Link>
            )}
            {!isFAQPage && (
              <Link to="/faq" className="header__nav-link" aria-label="Go to FAQ page">
                FAQ
              </Link>
            )}
            {(isFAQPage || isSharePage || is404Page) && (
              <a
                href="https://lu.ma/ins7ivwr?from=embed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Register for BarCamp Surrey"
                className="header__nav-link header__nav-link--highlight"
              >
                Register
              </a>
            )}
          </>
        )}
      </nav>

      {/* Light/Dark Mode Toggle */}
      <div className="header__toggle-wrapper">
        <button
          onClick={toggleTheme}
          aria-label="Toggle modes"
          className={`header__toggle ${
            theme === 'light' ? 'header__toggle--light' : 'header__toggle--dark'
          }`}
        >
          <div className="header__toggle-switch">
            {theme === 'light' ? (
              <FontAwesomeIcon
                icon={faSun}
                className="header__toggle-icon header__toggle-icon--sun"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="header__toggle-icon header__toggle-icon--moon"
              />
            )}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;