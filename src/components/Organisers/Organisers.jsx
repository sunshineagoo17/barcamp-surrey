import './Organisers.scss';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Import images
import LauraPhoto from '../../assets/images/laura-c.jpeg';
import AlanPhoto from '../../assets/images/alan-p.jpeg';

const BarcampOrganisers = [
  {
    name: 'Laura Czajkowski',
    role: 'Head of Community',
    email: 'Laura.czajkowski@gmail.com',
    linkedin: 'https://www.linkedin.com/in/lauraczajkowski/',
    photo: LauraPhoto
  },
  {
    name: 'Alan Pope',
    role: 'Director, Developer Relations',
    email: 'alan@popey.com',
    linkedin: 'https://www.linkedin.com/in/alan-pope-uk/',
    photo: AlanPhoto
  }
];

const Organisers = () => {
  return (
    <section className="organisers">
      <h2 className="organisers__title">Meet the Organisers</h2>
      <div className="organisers__grid">
        {BarcampOrganisers.map((organiser, index) => (
          <div key={index} className="organisers__card">
            <img
              src={organiser.photo}
              alt={`Photo of ${organiser.name}`}
              className="organisers__photo"
            />
            <h3 className="organisers__name">{organiser.name}</h3>
            <p className="organisers__role">{organiser.role}</p>
            <div className="organisers__icons">
              <a 
                href={`mailto:${organiser.email}`} 
                className="organisers__icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a 
                href={organiser.linkedin} 
                className="organisers__icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organisers;