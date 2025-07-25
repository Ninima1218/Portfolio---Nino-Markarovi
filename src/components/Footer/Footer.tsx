
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src="/src/assets/icons/github.png" alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src="/src/assets/icons/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src="/src/assets/icons/instagram.png" alt="Instagram" />
                    </a>
                    <a href="mailto:your.email@gmail.com" className="social-link">
                        <img src="/src/assets/icons/gmail.png" alt="Gmail" />
                    </a>
                    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src="/src/assets/icons/telegram.png" alt="Telegram" />
                    </a>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 Nino Markarovi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
