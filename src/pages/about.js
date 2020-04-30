import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ path }) => (
  <Layout path={path} mainId="alternate-main">
    <SEO title="About" />
    <div className="mobile-page-title">
      <h1>About Me</h1>
    </div>
    <p>Welcome to the About page</p>
  </Layout>
);

export default AboutPage;
