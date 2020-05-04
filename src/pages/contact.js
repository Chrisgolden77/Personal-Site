import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Contact Me" />
    <div className="mobile-page-title"></div>
    <h1>Want to get ahold of me?</h1>
    <p>Drop me a line through email! </p>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{' '}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default ContactPage;
