
import './Contacts.css';

const Contacts = () => {
    return (
        <section className="contacts-section" id="contacts">
            <div className="contacts-content">
                <p className="contacts-p">Let's get in touch!</p>
                <nav>
                    <ul className="contacts-nav">
                        <li>
                            <a
                                href="mailto:yourname@email.com"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-envelope"></i>
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin"></i>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/yourusername"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-github"></i>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Contacts;
