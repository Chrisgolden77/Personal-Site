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
    menuLinks.map((link, i) => {
      return (
        <Link key={i} className={assignClass(link.link)} to={link.link}>
          <strong>{link.name}</strong>
        </Link>
      );
    });

  return (
    <header id="mobile-header">
      <button
        className="mobile-home-button"
        onClick={() => setMobileMenuState(!isMobileMenuOpen)}
        onKeyDown={() => setMobileMenuState(!isMobileMenuOpen)}
      >
        <img alt="Chris Logo" className="header-logo" src={Logo} />
      </button>
      {isMobileMenuOpen ? (
        <div id="header-links">{renderMenuLinks()}</div>
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
