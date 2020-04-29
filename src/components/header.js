import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/chris-logo.png';

const Header = ({ siteTitle, path }) => {
  const assignClass = link => {
    if(link === '/') {
      return path === link ? 'home-link active-home-link' : 'home-link'
    } else {
      return path === link ? 'header-link active-link' : 'header-link';
    }
  };

  return (
    <header id="header">
      <div id="header-wrapper">
        <div>
          <Link className={assignClass('/')} to="/" >
            <img src={Logo} className="header-logo" />
          </Link>
        </div>

        <div id="header-links">
          <Link className={assignClass('/about/')} to="/about/">
            About
          </Link>
          <Link className={assignClass('/apps/')} to="/apps/">
            My Apps
          </Link>
          <Link className={assignClass('/resume/')} to="/resume/">
            Resume
          </Link>
          <Link className={assignClass('/contact/')} to="/contact/">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  siteTitle: PropTypes.string,
  path: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  path: '',
};

export default Header;
