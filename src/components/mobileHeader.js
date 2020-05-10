import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Logo from '../images/chris-logo.png';

const MobileHeader = ({ menuLinks, path }) => {
  const [isMobileMenuOpen, setMobileMenuState] = useState(false);

  const assignClass = link => {
    return path === link ? 'header-link active-link' : 'header-link';
  };
  const renderMenuLinks = () =>
    menuLinks.map(link => {
      return (
        <Link key={link.link} className={assignClass(link.link)} to={link.link}>
          <strong>{link.name}</strong>
        </Link>
      );
    });

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
            <strong>Home</strong>
          </Link>
          {renderMenuLinks()}
        </div>
      ) : null}
    </header>
  );
};
MobileHeader.propTypes = {
  menuLinks: PropTypes.array,
  path: PropTypes.string,
  siteTitle: PropTypes.string,
};

MobileHeader.defaultProps = {
  menuLinks: [],
  path: '',
  siteTitle: ``,
};

export default MobileHeader;
