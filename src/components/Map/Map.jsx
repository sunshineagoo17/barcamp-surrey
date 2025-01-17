import './Map.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation'; 

const Map = () => {
  useScrollAnimation(); 

  return (
    <section id="map" className="map fade-in">  
      <h2 className="map__title fade-in">How to Get There</h2> 
      <div className="map__container fade-in">
        <iframe
          title="Godalming Train Station"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.5502305943773!2d-0.6189953842279347!3d51.18425957958595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d40178d8a3ef%3A0x8f07de1762ee7c6f!2sGodalming%20Station!5e0!3m2!1sen!2suk!4v1614011633391!5m2!1sen!2suk"
          allowFullScreen=""
          loading="lazy"
          className="map__iframe"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;