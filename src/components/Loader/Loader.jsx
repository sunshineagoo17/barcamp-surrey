import { useEffect, useState } from 'react';
import './Loader.scss';
import Logo from '../../assets/logos/barcamp_logo-main.webp';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="loader">
        <div className="loader__logo-container">
          <img src={Logo} alt="Loading BarCamp Surrey" className="loader__logo" />
          <div className="loader__spinner"></div>
        </div>
      </div>
    )
  );
};

export default Loader;
