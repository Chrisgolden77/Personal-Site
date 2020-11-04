import React from 'react';

//internal imports
import Arrow from '../images/arrows.png';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Cards from '../components/cards';
import ChrisImage from '../images/ChrisProfileImage.jpg';
import languages from '../assets/languages.json';

const IndexPage = ({ path }) => (
  <Layout className="home" path={path}>
    <SEO title="Home" />
    {/* <div className="mobile-page-title"></div> */}
    <div id="home-hero-wrapper">
      <div id="home-hero">
        <div id="home-hero-image-wrapper">
          <img alt="Chris head shot" id="personal-picture" src={ChrisImage} />
          <h1>
            <em>
              <h2>Chris Golden</h2>
            </em>
          </h1>
        </div>
        <div id="home-hero-paragraph" style={{ textAlign: 'left' }}>
          <h1>
            Welcome to my personal site! <br />
            <br />
            I'm a full stack developer with a passion for learning, problem
            solving, and collaborating.
            <br />
            <br />I got in to Software Development because I want to create
            tools to help people make a difference.
          </h1>
          <br />
        </div>
      </div>
      <div style={{ height: 'fit-content', width: '130px' }}>
        <hr style={{ border: '1px solid white' }}></hr>
        <strong>
          <em>Keep Scrolling</em>
        </strong>
        <img
          alt="down arrow to indicate keep scrolling"
          height="50px"
          src={Arrow}
          width=" 50px"
        />
      </div>
    </div>

    <div id="home-content">
      <div id="skills-header">
        <h2>My Tech Stack</h2>
      </div>
      <Cards items={languages} />
    </div>
  </Layout>
);

export default IndexPage;
