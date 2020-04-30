import React from 'react';
import { Link } from 'gatsby';

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
      <iframe
        src="https://chrisgolden77.github.io/Resume/Chris_Golden_Resume.pdf"
        className="resumeIframe"
      />
  </Layout>
);

export default ResumePage;
