import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/chris-logo.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ path }) => (
  <Layout className="home" path={path} >
    <SEO title="Home" />
    <h1>Welcome to my personal site!</h1>
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
        margin: 'auto',
        overflow: 'auto',
        height: '100%',
      }}
    >
     <img src={Logo} />
    </div>
  </Layout>
);

export default IndexPage;
