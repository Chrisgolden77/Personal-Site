import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ path }) => (
  <Layout path={path} mainId="alternate-main">
    <SEO title="About" />
    <h1>Hi from the About Page</h1>
    <p>Welcome to the About page</p>
  </Layout>
);

export default AboutPage;
