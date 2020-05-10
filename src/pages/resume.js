import React from 'react';

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
        <img id="mobile-resume-image" src={ResumeMobile} />
        <div style={{ position: 'absolute', top: '25px', right: '10px' }}>
          Download Resume: {' '}
          <a className="button" href={Resume} download>
            <span alt="download icon">📥</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;
