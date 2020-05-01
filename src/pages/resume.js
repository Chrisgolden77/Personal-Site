import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ResumePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Resume " />
      <iframe
        className="resume-iframe"
        src="https://chrisgolden77.github.io/Resume/Chris_Golden_Resume.pdf"
        title="resume"
        scrolling='no'
      />
      
  </Layout>
);

export default ResumePage;
