import React from 'react';
import Languages from '../assets/languages.json';
import Cards from '../components/cards';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SkillsPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Skills" />
    <div>
      <div id="skills-header">
        <h1>My Tech Stack</h1>
      </div>
      <Cards items={Languages} />
    </div>
  </Layout>
);

export default SkillsPage;
