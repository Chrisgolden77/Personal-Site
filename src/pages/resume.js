import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Resume from '../images/Chris_Golden_Resume.pdf';
import ResumeMobile from '../images/Chris_Golden_Resume.png';
import DownloadIcon from '../images/multimedia.png';


const ResumePage = ({ path }) => {
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
        <div id="mobile-resume-header">
          <strong>Download Resume: </strong>
          <a href={Resume} download style={{ height: '40px' }}>
            <img
              alt="download resume"
              src={DownloadIcon}
              style={{ width: '50px', margin: 'auto 10px' }}
            />
          </a>
        </div>
        <img
          alt="Chris Golden resume"
          id="mobile-resume-image"
          src={ResumeMobile}
        />
      </div>
    </Layout>
  );
};

export default ResumePage;
