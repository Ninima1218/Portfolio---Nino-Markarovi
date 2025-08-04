import { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const gmailLink = `https://mail.google.com/mail/?view=cm&to=ninima1218@gmail.com&body=${encodedMessage}`;
    window.open(gmailLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="footer-contacts-form">
      <p className="form-title">Let's get in touch!</p>
      <p className="form-subtitle">Feel free to contact if you wanna collaborate with me</p>
      <textarea
        className="contact-input"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="contact-button" onClick={handleSendClick}>
        Send it
      </button>
    </div>
  );
};

export default Contacts;
