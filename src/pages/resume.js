import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ResumePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Resume " />
    <div className="mobile-page-title">
      <h1>My Resume</h1>
    </div>
    <p>Welcome to Resume</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ResumePage;
