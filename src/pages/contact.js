import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Contact Me" />
    <div className="mobile-page-title"></div>
    <h1>Want to get ahold of me?</h1>
    <p>Drop me a line through email! </p>
    <form
      name="contact"
      method="POST"
      data-netlify
      data-netlify-honeypot="bot-field"
      style={{
        height: '500px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        justifyContent: 'space-evenly',
      }}
    >
      <input type="text" name="name" placeholder="Your Name" margin="10px" />
      <input type="email" name="email" placeholder="Your Email" />
      <textarea name="message" placeholder="Message for me"></textarea>
      <button type="submit" >
        Send
      </button>
    </form>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default ContactPage;
