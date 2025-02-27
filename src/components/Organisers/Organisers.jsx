import './Organisers.scss';
import { FaLinkedin, FaEnvelope, FaPodcast } from 'react-icons/fa';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import LauraPhoto from '../../assets/images/laura-c.jpeg';
import AlanPhoto from '../../assets/images/alan-p.jpeg';
import { FaRocket } from 'react-icons/fa6';

const BarcampOrganisers = [
  {
    name: 'Laura Czajkowski',
    role: 'Head of Developer Ecosystem',
    email: 'Laura.czajkowski@gmail.com',
    linkedin: 'https://www.linkedin.com/in/lauraczajkowski/',
    blog: 'https://laura.community',
    photo: LauraPhoto,
  },
  {
    name: 'Alan Pope',
    role: 'Director, Developer Relations',
    email: 'alan@popey.com',
    linkedin: 'https://www.linkedin.com/in/alan-pope-uk/',
    podcast: 'https://linuxmatters.sh/',
    photo: AlanPhoto,
  },
];

const Organisers = () => {
  useScrollAnimation();

  return (
    <section className='organisers fade-in'>
      <h2 className='organisers__title fade-in'>Meet the Organisers</h2>
      <div className='organisers__grid'>
        {BarcampOrganisers.map((organiser, index) => (
          <div key={index} className='organisers__card fade-in'>
            <img
              src={organiser.photo}
              alt={`Headshot of ${organiser.name}`}
              className='organisers__photo'
            />
            <h3 className='organisers__name'>{organiser.name}</h3>
            <p className='organisers__role'>{organiser.role}</p>
            <div className='organisers__icons'>
              {/* Email Icon */}
              <a
                href={`mailto:${organiser.email}`}
                className="organisers__icon"
                target="_blank"
                aria-label="Contact Organiser"
                rel="noopener noreferrer">
                <FaEnvelope />
              </a>

              {/* LinkedIn Icon */}
              <a
                href={organiser.linkedin}
                className="organisers__icon"
                target="_blank"
                aria-label="Connect with Organiser"
                rel="noopener noreferrer">
                <FaLinkedin />
              </a>

              {/* Blog Icon for Laura */}
              {organiser.blog && (
                <a
                  href={organiser.blog}
                  className="organisers__icon"
                  target="_blank"
                  aria-label="Check out Laura's blog"
                  rel="noopener noreferrer">
                  <FaRocket />
                </a>
              )}

              {/* Podcast Icon for Alan */}
              {organiser.podcast && (
                <a
                  href={organiser.podcast}
                  className="organisers__icon"
                  target="_blank"
                  aria-label="Check out Alan's podcast"
                  rel="noopener noreferrer">
                  <FaPodcast />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organisers;