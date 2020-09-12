import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from '../images/chris-logo.png';

const Header = ({ menuLinks, path, siteTitle }) => {
  const assignClass = (link, nonLogo) => {
    if (link === '/' && nonLogo) {
      return path === link ? 'header-link active-link' : 'header-link';
    } else if (link === '/') {
      return path === link ? 'home-link active-home-link' : 'home-link';
    } else {
      return path === link ? 'header-link active-link' : 'header-link';
    }
  };
  const renderMenuLinks = () =>
    menuLinks.map(link => {
      return (
        <div className="header-link-wrapper" id={link.link}>
          <Link
            id={link.name}
            className={assignClass(link.link)}
            to={link.link}
          >
            <strong>{link.name}</strong>
          </Link>
        </div>
      );
    });

  return (
    <header id="header">
      <div id="home-link-wrapper">
        <Link className={assignClass('/')} to="/">
          <img alt="header logo" className="header-logo" src={Logo} />
        </Link>
      </div>

      <div id="header-links">
        <div className="header-link-wrapper">
          <Link className={`${assignClass('/', true)}`} to="/">
            <strong>Home</strong>
          </Link>
        </div>
        {renderMenuLinks()}
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
