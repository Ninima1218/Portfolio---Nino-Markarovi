import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className='contacts-div'>
            <p className='contacts-p'>Feel free to connect with me</p>
            <nav>
                <ul className="contacts-nav">
                    <li>
                        <a href="tel:+995598557323" className="contact-link">
                            <FontAwesomeIcon icon={faPhone} /> +995 598 55 73 23
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ninima1218@gmail.com" className="contact-link">
                            <FontAwesomeIcon icon={faEnvelope} /> ninima1218@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/995598557323" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/Ninima1218" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <FontAwesomeIcon icon={faTelegram} /> Telegram
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Contacts;