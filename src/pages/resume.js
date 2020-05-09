import React from 'react';

import Layout from '../components/layout';
import Resume from '../images/Chris_Golden_Resume.pdf';
import ResumeMobile from '../images/Chris_Golden_Resume.png';
import SEO from '../components/seo';

const ResumePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Resume " />
    <embed
      alt="Chris Golden's Resume"
      className="resume-iframe"
      scrolling="no"
      src={Resume}
      title="resume"
    />
    <div id="mobile-resume-viewer" style={{ height: '100vh', backgroundColor: 'rgb(36, 60, 87)', textAlign: 'center'}}>
      <img 
        src={ResumeMobile} 
        style={{
          maxWidth: '100vw', 
          width: '500px', 
          verticalAlign: 'middle',
          margin: 'auto'
        }}/>
        <div style={{position: 'absolute', top: '25px', right: '10px'}}>
          download:  
      <button
        
        // type="button"
        onSubmit={() => {console.log('downloading pdf')}}
      >
        <span alt="download icon">
        📥
        </span>
      </button>
        </div>
    </div>
  </Layout>
);

export default ResumePage;

