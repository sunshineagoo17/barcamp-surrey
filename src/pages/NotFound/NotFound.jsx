import { Link } from 'react-router-dom';
import './NotFound.scss';
import Logo from '../../assets/logos/barcamp_logo-main.webp';

const NotFound = () => {
  return (
    <section className='notfound'>
      <div className='notfound__logo-container'>
        <img src={Logo} alt='BarCamp Surrey Logo' className='notfound__logo' />
      </div>
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__message'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to='/' className='notfound__button'>
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;