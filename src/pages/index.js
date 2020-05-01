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
        <h1>Hey there,</h1>
        My name is Chris Golden and you found my personal site!
        <br />
        Take a look around, drop me a line, or take a peek at the code with the
        github link below.
      </div>
      <br />
      <h4 float="bottom">
        scroll down
        <br />
      </h4>
      <h1>
        <FontAwesomeIcon width="50px" icon={faHandPointDown} />
      </h1>
    </div>
    <div
      id="home-content"
      >
      fjkdsl;a dsajfkl;asj fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a
      dsajfkl;asj fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
      fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
      fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
      fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
      fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
      fdla;jfkl;dsajklfdsjkl;faHandPointDown fjkdsl;a dsajfkl;asj
      fdla;jfkl;dsajklfdsjkl;faHandPointDown
    </div>
  </Layout>
);

export default IndexPage;
