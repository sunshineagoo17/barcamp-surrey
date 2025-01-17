import './Map.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Map = () => {
  useScrollAnimation();

  return (
    <section id='map' className='map fade-in'>
      <h2 className='map__title fade-in'>How to Get There</h2>
      <div className='map__container fade-in'>
        <iframe
          title='Godalming College'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.978194090168!2d-0.6196663!3d51.176197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ce283941035f%3A0x34b2d40c0fc0d44a!2sGodalming%20College!5e0!3m2!1sen!2suk!4v1705485430000!5m2!1sen!2suk'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='map__iframe'
        ></iframe>
      </div>
    </section>
  );
};

export default Map;