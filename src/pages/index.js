import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/chris-logo.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ path }) => (
  <Layout className="home" path={path}>
    <SEO title="Home" />
    <div className="mobile-page-title">
      <h1>Welcome to my personal site!</h1>
    </div>

    <img src={Logo} />
  </Layout>
);

export default IndexPage;
