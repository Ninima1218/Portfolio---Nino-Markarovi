import './Contacts.css';

const Contacts = () => {
  return (
    <div className="footer-contacts-form">
      <p className="form-title">Let's get in touch!</p>
      <p className="form-subtitle">Feel free to contact if you wanna collaborate with me</p>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Write your message here..."
          className="contact-input"
        />
        <button type="submit" className="contact-button">
          Send it
        </button>
      </form>
    </div>
  );
};

export default Contacts;
