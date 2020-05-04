import { Button } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import Resume from '../images/Chris_Golden_Resume.pdf';
import SEO from '../components/seo';

const ResumePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Resume " />
    <embed
      alt="Chris Golden's Resume"
      className="resume-iframe"
      src={Resume}
      title="resume"
      scrolling="no"
    />
    {/* <div id="mobile-resume-viewer">
      Sorry, But your browser doesn't support mobile pdf viewers.
      <br /> To download my Resume, Click the link below.
      <button
        class="primary-button"
        type="button"
        onSubmit={() => {}}
        text="DOWNLOAD RESUME"
      >Download <br/>Resume</button>
    </div> */}
  </Layout>
);

export default ResumePage;
