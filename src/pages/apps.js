import React, { useState } from 'react';
import Apps from '../assets/apps';
import Layout from '../components/layout';
import SEO from '../components/seo';

import AppCard from '../components/appCard';
import ImageModal from '../components/imageModal';
const AppsPage = ({ path }) => {
  const [selectedApp, setSelectedApp] = useState(null);
  const renderApps = () => {
    return Apps.length
      ? Apps.map(currentApp => (
          <AppCard
            onClick={() => setSelectedApp(currentApp)}
            app={currentApp}
          />
        ))
      : null;
  };
  return (
    <Layout path={path}>
      <SEO title="My Apps" />
      <div className="app-title">
        <h1 style={{ marginBottom: '0px' }}>Apps</h1>
      </div>
      <div id="app-container">{renderApps()}</div>
      <ImageModal images={selectedApp && selectedApp.appImages}/>
    </Layout>
  );
};

export default AppsPage;
