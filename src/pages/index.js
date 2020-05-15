import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// import Logo from '../images/chris-logo.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ path }) => (
  <Layout className="home" path={path}>
    <SEO title="Home" />
    {/* <div className="mobile-page-title"></div> */}
    <div id="home-hero">
      <img
        alt="Photo of Chris"
        id="personal-picture"
        src="https://media-exp1.licdn.com/dms/image/C5603AQHsMjURLrwZfg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=OQ__yff_40-knIDiqERm-oZv3Sx2VZ1Lwz-MuLQEqeE"
      />
      <div id="home-hero-paragraph">
        <h1>
          I'm
          <em> Chris Golden </em>
          <br />
          Welcome to my personal site!
        </h1>
        <h3>
          I'm a full stack developer with a passion for learning, problem solving, and collaborating.
          
          Take a look around, drop me a line, or take a peek at the code with
          the github link below.
        </h3>
        <div style={{ fontSize: '75px' }}>
          {/* <FontAwesomeIcon width="30px" icon={faHandPointDown} /> */}
        </div>
        <h4 float="bottom">
          Keep scrolling for personal stats.
          <br />
        </h4>
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
