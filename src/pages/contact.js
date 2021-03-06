import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Ship from '../images/transport.png';


function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}
const ContactPage = ({ path }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };
  const handleSubmit = async form => {
    setErrorMessage('');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });
      console.log('Successfully sent Chris a message!');
      setIsMessageSent(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(`error=${error}`);
    }
  };

  return (
    <Layout path={path} style={{ overflow: 'auto' }}>
      <SEO title="Contact Me" />
      {isMessageSent ? (
        <div className="contact-success">
          <img alt="starship blasting off" id="ship-icon" src={Ship} />
          <h1>Your message is on it's way!</h1>
          <h3>
            Thanks for reaching out! <br />
            I'll be in touch with you soon. In the mean while, enjoy peeking
            around the rest of my site.
          </h3>
        </div>
      ) : (
        <>
          <div id="contact-header">
            <h1>Make contact!</h1>
          </div>
          {errorMessage ? (
            <h4 className="contact-error">
              There was an issue sending this message
              <span aria-label="skull" role="img">
                💀
              </span>
              !
            </h4>
          ) : null}
          <form
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
            method="POST"
            name="contact"
            onSubmit={e => {
              handleSubmit(e.target);
              e.preventDefault();
            }}
            style={{ maxWidth: '90vw' }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              name="name"
              onChange={e => handleChange(e.target.name, e.target.value)}
              placeholder="Your Name"
              required
              type="text"
              value={formData.name}
            />
            <input
              name="email"
              onChange={e => handleChange(e.target.name, e.target.value)}
              placeholder="Your Email"
              required
              type="email"
              value={formData.email}
            />
            <textarea
              name="message"
              onChange={e => handleChange(e.target.name, e.target.value)}
              placeholder="What do you want to say? "
              required
              value={formData.message}
            ></textarea>
            <div id="contact-btn-wrapper">
              <button className="contact-form-button" type="submit">
                Send
              </button>
            </div>
          </form>
        </>
      )}
    </Layout>
  );
};

export default ContactPage;
