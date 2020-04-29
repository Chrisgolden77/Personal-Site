import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Stars from '../images/stars.svg';

const IndexPage = ({path}) => (
  <Layout path={path}>
    <SEO title="Home" />
    <h1>Welcome to my personal site!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: 'auto', overflow: 'auto', height: '100%' }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
