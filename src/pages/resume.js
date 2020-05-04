import React from 'react';
import {Document, Page} from 'react-pdf';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ResumePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Resume " />
    <div>
      <Document
      className="resume-iframe"
        file="https://chrisgolden77.github.io/Resume/Chris_Golden_Resume.pdf"
        >
          <Page pageNumber={1} /> 
        </Document>

    </div>
    
    {/* <embed
      alt="Chris GOlden's Resume"
      className="resume-iframe"
      src="https://chrisgolden77.github.io/Resume/Chris_Golden_Resume.pdf"
      title="resume"
      scrolling="no"
    ></embed> */}
  </Layout>
);

export default ResumePage;
