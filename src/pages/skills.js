import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SkillsPage = ({ path }) => (
  <Layout path={path} mainId="alternate-main">
    <SEO title="About" />
    <div className="mobile-page-title">
      <h1>skills</h1>
    </div>
    <p>Welcome to the skills page</p>
  </Layout>
);

export default SkillsPage;
