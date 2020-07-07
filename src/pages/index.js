import React from 'react';

//internal imports
import Arrow from '../images/arrows.png';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import ChrisImage from '../images/ChrisProfileImage.jpeg';

const IndexPage = ({ path }) => (
  <Layout className="home" path={path}>
    <SEO title="Home" />
    {/* <div className="mobile-page-title"></div> */}
    <div id="home-hero-wrapper">
      <div id="home-hero">
        <img
          alt="Chris head shot"
          id="personal-picture"
          src="https://media-exp1.licdn.com/dms/image/C5603AQHsMjURLrwZfg/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=plzXRdieliCXBibWkrSXYLl_ZJ0YUcitFja14TVI_iw"
        />
        <div id="home-hero-paragraph">
          <h1>
            I'm
            <em> Chris Golden </em>
            <br />
            Welcome to my personal site!
          </h1>
          <h3>
            I'm a full stack developer with a passion for learning, problem
            solving, and collaborating. I got into Software Development because
            I want to make tools to help people.
            <br />
            <br />
            Take a look around, drop me a line, or take a peek at my code with
            the github link below.
          </h3>
          <br />
        </div>
      </div>
      <div style={{ height: 'fit-content', width: '130px' }}>
        <hr style={{ border: '1px solid white' }}></hr>
        <strong>
          <em>keep scrolling</em>
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
      <div id="timeline">
        {' '}
        <br />
        fjkdsl;a dsajfkl;asj fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a
        dsajfkl;asj fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
        fdla;jfkl;dsajklfdsjkl;faHandPointDown
      </div>
    </div>
  </Layout>
);

export default IndexPage;
