import { Link } from 'react-router-dom';
import './NotFound.scss';
import Logo from '../../assets/logos/barcamp_logo-main.webp';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const NotFound = () => {

  useScrollAnimation();

  return (
    <section className='notfound'>
      <div className='notfound__logo-container fade-in'>
        <img src={Logo} alt='BarCamp Surrey Logo' className='notfound__logo' />
      </div>
      <h1 className='notfound__title fade-in'>404</h1>
      <p className='notfound__message fade-in'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="notfound__button fade-in" aria-label="Go to homepage">
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;