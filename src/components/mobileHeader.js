import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/chris-logo.png';

const MobileHeader = ({ siteTitle, path }) => {
  const assignClass = link => {
    if (link === '/') {
      return path === link ? 'home-link active-home-link' : 'home-link';
    } else {
      return path === link ? 'header-link active-link' : 'header-link';
    }
  };
  const displayLinks = () => {};
  return (
    <header id="mobile-header">
      <h1 className="mobile-home-link">
        <img src={Logo} alt="Chris Logo" className="header-logo" />
      </h1>

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
    </header>
  );
};
MobileHeader.propTypes = {
  siteTitle: PropTypes.string,
  path: PropTypes.string,
};

MobileHeader.defaultProps = {
  siteTitle: ``,
  path: '',
};

export default MobileHeader;
