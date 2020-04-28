import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const assignClass = route => {
  return window.location.pathname === route
    ? 'header-link active-route'
    : 'header-link';
};
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `forestgreen`,
      marginBottom: `1.45rem`,
    }}
  >
    <div id="header-wrapper">
      <h1 id="header-name" style={{ margin: 0 }}>
        <Link to="/" className={assignClass('/')}>
          CG
        </Link>
      </h1>
      <div id="header-routes">
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
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
