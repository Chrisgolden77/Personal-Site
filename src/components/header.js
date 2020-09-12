import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Logo from '../images/chris-logo.png';

const Header = ({ menuLinks, path, siteTitle }) => {
  const [classNamesReady, setClassNamesReady] = useState(false);
  useEffect(() => setClassNamesReady(true), []);
  const assignClass = (link, isLogo) => {
    let className = isLogo ? 'home-link' : 'header-link';
    if (path === link && !isLogo) className += ' active-link';
    if (path === link && isLogo) className += ' active-home-link';
    return className;
  };
  const renderMenuLinks = () =>
    menuLinks.map(link => {
      return (
        <div className="header-link-wrapper" id={link.link}>
          <Link
            id={link.name}
            className={assignClass(link.link, false)}
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
        <Link className={classNamesReady ? assignClass('/', true) : 'home-link active-home-link'} to="/">
          <img alt="header logo" className="header-logo" src={Logo} />
        </Link>
      </div>

      <div id="header-links">
        <div className="header-link-wrapper">
          <Link className={`${classNamesReady ? assignClass('/', false) : 'header-link active-link'}`} to="/">
            <strong>Home</strong>
          </Link>
        </div>
        {classNamesReady && renderMenuLinks()}
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
