import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ResumePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Resume " />
    {/* <div className="mobile-resume-title">
      <h1>
        My Resume
      </h1>
    </div> */}
    <embed
      alt="Chris GOlden's Resume"
      className="resume-iframe"
      src="https://chrisgolden77.github.io/Resume/Chris_Golden_Resume.pdf"
      title="resume"
      scrolling="no"
    ></embed>
  </Layout>
);

export default ResumePage;
