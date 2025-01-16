import { useState } from 'react';
import './Header.scss';
import Logo from "../../assets/logos/barcamp_logo-wordmark.svg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="header">
        {/* Logo Image */}
        <div className="header__logo">
            <a href="#hero">
                <img src={Logo} alt="BarCamp Surrey Logo" className="header__logo-img" />
            </a>
        </div>


      {/* Navigation Links */}
      <nav className="header__nav">
        <a href="#hero" className="header__nav-link">About</a>
        <a href="#faq" className="header__nav-link">FAQ</a>
        <a href="#register" className="header__nav-link">Register</a>
        <a href="#contact" className="header__nav-link">Contact</a>
      </nav>

      {/* Light/Dark Mode Toggle */}
      <div className="header__toggle-wrapper">
        <button
          onClick={toggleTheme}
          className={`header__toggle ${theme === 'light' ? 'header__toggle--light' : 'header__toggle--dark'}`}
        >
          <div className="header__toggle-switch">
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faSun} className="header__toggle-icon header__toggle-icon--sun" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="header__toggle-icon header__toggle-icon--moon" />
            )}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;