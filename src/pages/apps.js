import React from 'react';
import { Link } from 'gatsby';
import Apps from '../assets/apps.json';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AppsPage = ({ path }) => {
  const renderApps = () => {
    return Apps.map(app => (
      <div key={app.appId} className="app-tile" id={app.appId}>
        {app.appName}
      </div>
    ));
  };
  return (
    <Layout path={path}>
      <SEO title="My Apps" />
      <div className="app-title">
        <h1 style={{marginBottom: '0px'}}>Apps</h1>
      </div>
      <div id="app-container">{renderApps()}</div>
    </Layout>
  );
};

export default AppsPage;
