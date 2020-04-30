import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/chris-logo.png';

const Header = ({ menuLinks, path, siteTitle }) => {
  const assignClass = link => {
    if (link === '/') {
      return path === link ? 'home-link active-home-link' : 'home-link';
    } else {
      return path === link ? 'header-link active-link' : 'header-link';
    }
  };
  const renderMenuLinks = () =>
    menuLinks.map(link => {
      return (
        <Link className={assignClass(link.link)} to={link.link}>
          {link.name}
        </Link>
      );
    });

  return (
    <header id="header">
      <div id="header-wrapper">
        <div>
          <Link className={assignClass('/')} to="/">
            <img src={Logo} className="header-logo" />
          </Link>
        </div>

        <div id="header-links">{renderMenuLinks()}</div>
      </div>
    </header>
  );
};
Header.propTypes = {
  menuLinks: PropTypes.array,
  path: PropTypes.string,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  menuLinks: [],
  siteTitle: ``,
  path: ``,
};

export default Header;
