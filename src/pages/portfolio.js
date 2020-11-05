import React, { useState } from 'react';
import Apps from '../assets/apps';
import AppCard from '../components/appCard';
import ImageModal from '../components/imageModal';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AppsPage = ({ path }) => {
  const [selectedAppImages, setSelectedAppImages] = useState([]);
  const renderApps = () => {
    return Apps.length
      ? Apps.map((currentApp, i) => (
          <AppCard
            key={`app-index-${i}`}
            onClick={() => setSelectedAppImages(currentApp.appImages)}
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
      <div className="app-container">{renderApps()}</div>
      <ImageModal
        handleClose={() => setSelectedAppImages([])}
        images={selectedAppImages}
      />
    </Layout>
  );
};

export default AppsPage;
