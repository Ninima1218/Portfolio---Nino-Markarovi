import './Footer.css';
import NavLink from '../NavLinks/NavLinks.tsx';
import Contacts from '../Contacts/Contacts.tsx';
import fb from '../../assets/icons/facebook.png';
import insta from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import gmail from '../../assets/icons/gmail.png';
import github from '../../assets/icons/github.png';

const Footer = () => {
  return (
    <footer>
      <div className="citation">
        <p className="citation-text">
          "Success is not final; failure is not fatal: it is the courage to continue that counts"
        </p>
      </div>
      <p className="author">Winston Churchill</p>

      <div className="footer-content">
        <section className="footer-menu">
          <NavLink />
        </section>
        <section className="footer-contacts">
          <Contacts />
        </section>
      </div>

      <div className="socialMedia">
        {[
          { src: fb, alt: 'Facebook Logo', href: 'https://www.facebook.com/nino.ninu28/' },
          { src: insta, alt: 'Instagram Logo', href: 'https://www.instagram.com/no_mark_8/' },
          { src: linkedin, alt: 'LinkedIn Logo', href: 'https://www.linkedin.com/in/nino-markarovi-7a729929b/' },
          { src: gmail, alt: 'Gmail Logo', href: 'mailto:ninima1218@gmail.com' },
          { src: github, alt: 'GitHub Logo', href: 'https://github.com/Ninima1218' },
        ].map((icon, index) => (
          <a
            key={index}
            aria-label={icon.alt}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
