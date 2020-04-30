import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = ({path}) => (
  <Layout path={path}>
    <SEO title="Contact Me"/>
    <div  className="mobile-page-title">

    </div>
    <h1>Want to get ahold of me?</h1>
    <p>Drop me a line through email! </p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default ContactPage;
