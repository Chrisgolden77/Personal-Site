import React from 'react';
import { MobilePDFReader} from 'react-read-pdf';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ResumePage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Resume " />
    <embed
      alt="Chris GOlden's Resume"
      className="resume-iframe"
      src="https://chrisgolden77.github.io/Resume/Chris_Golden_Resume.pdf"
      title="resume"
      scrolling="no"
    ></embed>
    <div id="mobile-pdf-viewer">
      <MobilePDFReader
        page={1}
        id="mobile-pdf-view"
        width="100vw"
        height="1000px"
        showAllPage
        // className="resume-iframe"
        url={"https://chrisgolden77.github.io/Resume/Chris_Golden_Resume.pdf"}
      />
    </div>
  </Layout>
);

export default ResumePage;
