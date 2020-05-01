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
    <img
      alt="Chris Headshot"
      id="personal-picture"
      src="https://media-exp1.licdn.com/dms/image/C5603AQHsMjURLrwZfg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=OQ__yff_40-knIDiqERm-oZv3Sx2VZ1Lwz-MuLQEqeE"
    />
    <div id="home-paragraph">
      <h1>Hey there,</h1>
      My name is Chris Golden and you found my personal site!
      <br />
      Take a look around, drop me a line, or take a peek at the code with the
      github link below.
    </div>
    <br/>
      <h1>
        <FontAwesomeIcon icon={faHandPointDown} />
      </h1>
  </Layout>
);

export default IndexPage;
