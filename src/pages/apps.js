import React from 'react';
import { Link } from 'gatsby';
import Apps from '../assets/apps.json';
import Layout from '../components/layout';
import SEO from '../components/seo';

function renderApps() {
  return Apps.map(app => (
    <div key={app.appId} className="app-tile" id={app.appId}>
      {app.appName}
    </div>
  ));
}
const IndexPage = () => 
 (
  <Layout>
    <SEO title="My Apps" />
    <div id="app-container">
      {renderApps()}
    </div>
    
  </Layout>
);

export default IndexPage;
