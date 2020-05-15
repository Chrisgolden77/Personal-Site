import React from 'react';

import DownloadIcon from '../images/multimedia.png'
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
        <div style={{ position: 'absolute', right: '10px', top: '25px'}}>
          <strong>
            Download Resume: {' '}
            </strong>
          <a href={Resume} download style={{height: '40px'}}>
            <img src={DownloadIcon} style={{ margin: 'auto', verticalAlign: 'middle',width: '50px'}}/>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;
