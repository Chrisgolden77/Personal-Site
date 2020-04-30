import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Logo from '../images/chris-logo.png';

const MobileHeader = ({ siteTitle, path }) => {
  let [isMobileMenuOpen, setMobileMenuState] = useState(false);

  const assignClass = link => {
    return path === link ? 'header-link active-link' : 'header-link';
  };

  return (
    <header id="mobile-header">
      <h1 className="mobile-home-link">
        <img
          src={Logo}
          alt="Chris Logo"
          className="header-logo"
          onClick={() => setMobileMenuState(!isMobileMenuOpen)}
        />
      </h1>
      {isMobileMenuOpen ? (
        <div id="header-links">
          <Link className={assignClass('/')} to="/">
            Home
          </Link>
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
      ) : null}
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
