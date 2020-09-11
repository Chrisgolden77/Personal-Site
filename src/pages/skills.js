import React from 'react';

import Cards from '../components/cards';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Languages from '../assets/languages.json';
const SkillsPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Skills" />
    <div>
      <Cards items={Languages}/>
      {/* <div id="skills-header">
        <h1>My skills</h1>
      </div>
      <div style={{ width: '225px'}}>
        <h1>Core:</h1>
        <ul>
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>MSSQL Server</li>
          <li>Mysql</li>
          <li>Node</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div style={{ width: '225px' }}>
        <h1>Libraries:</h1>
        <ul>
          <li>JQuery</li>
          <li>React/Redux</li>
          <li>Gatsby</li>
          <li>Express</li>
          <li>Node</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Semantic-UI</li>
          <li>Ant.Design</li>
        </ul>
      </div>
      <div style={{ width: '225px' }}>
        <h1>Services:</h1>
        <ul>
          <li>Linode</li>
          <li>Microsoft Azure</li>
          <li>Bamboo</li>
          <li>Netlify</li>
          <li>Git</li>
        </ul>
      </div> */}
    </div>
  </Layout>
);

export default SkillsPage;
