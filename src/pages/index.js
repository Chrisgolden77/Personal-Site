import React from 'react';

import Arrow from '../images/arrows.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ path }) => (
  <Layout className="home" path={path}>
    <SEO title="Home" />
    {/* <div className="mobile-page-title"></div> */}
    <div id="home-hero-wrapper">
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
            I'm a full stack developer with a passion for learning, problem
            solving, and collaborating. Take a look around, drop me a line, or
            take a peek at my code with the github link below.
          </h3>
            <br />
        </div>
      </div>
          <div style={{height: 'fit-content', width: '130px'}}>
      <hr></hr>
              <strong><em>keep scrolling</em></strong>
              <img src={Arrow} width=" 50px" height="50px"/>
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
