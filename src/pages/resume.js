import React from 'react';

import DownloadIcon from '../images/multimedia.png';
import Layout from '../components/layout';
import Resume from '../images/Chris_Golden_Resume.pdf';
import ResumeMobile from '../images/Chris_Golden_Resume.png';
import SEO from '../components/seo';

const ResumePage = ({ path }) => {
  const downloadPDF = () => {};
  return (
    <Layout path={path}>
      <SEO title="Resume " />
      <embed
        alt="Chris Golden's Resume"
        className="resume-iframe"
        scrolling="no"
        src={Resume}
        title="resume"
      />
      <div id="mobile-resume-viewer">
        <div
          style={{
            display: 'flex',
            height: '70px',
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'right',
          }}
        >
          <strong>Download Resume: </strong>
          <a href={Resume} download style={{ height: '40px' }}>
            <img
              src={DownloadIcon}
              style={{ width: '50px', margin: 'auto 10px' }}
            />
          </a>
        </div>
        <img id="mobile-resume-image" src={ResumeMobile} />
      </div>
    </Layout>
  );
};

export default ResumePage;
