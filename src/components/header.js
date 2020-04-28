import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `forestgreen`,
      marginBottom: `1.45rem`,
    }}
  >
    <div id="header-wrapper">
      <h1 id="header-name" style={{ margin: 0 }}>
        <Link to="/" className="header-link">
          CG
        </Link>
      </h1>
      <div id="header-routes">
        <Link className="header-link" to="/apps/">
          My Apps
        </Link>
        <Link className="header-link" to="/resume/">
          Resume
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
