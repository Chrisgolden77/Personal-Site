import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({path}) => (
  <Layout path={path}>
    <SEO title="About" />
    <h1>Hi from the AboutPage page</h1>
    <p>Welcome to the About page</p>
  </Layout>
);

export default AboutPage;
