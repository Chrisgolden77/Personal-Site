import React, { useReducer, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
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

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlenconded' },
        body: encode({
          'form-name': 'contact', ...formData })
      });
      console.log('success');
      setIsMessageSent(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  return (
    <Layout path={path}>
      <SEO title="Contact Me" />
      <div className="mobile-page-title"></div>
      <h1>Let's chat!</h1>
      <form
        data-netlify
        data-netlify-honeypot="bot-field"
        id="contact-form"
        method="POST"
        name="contact"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e.target);
        }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          name="name"
          onChange={e => handleChange(e.target.name, e.target.value)}
          placeholder="Your Name"
          value={formData.name}
          type="text"
        />
        <input
          name="email"
          onChange={e => handleChange(e.target.name, e.target.value)}
          placeholder="Your Email"
          value={formData.email}
          type="email"
        />
        <textarea
          name="message"
          onChange={e => handleChange(e.target.name, e.target.value)}
          placeholder="What do you want to say? "
          value={formData.message}
        ></textarea>
        <div id="contact-btn-wrapper">
          <button type="submit">Send</button>
        </div>
      </form>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  );
};

export default ContactPage;
