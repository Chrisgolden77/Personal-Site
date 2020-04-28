import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle, path }) => {
  const assignClass = link => {
    console.log(`path= ${path}`);
    return path === link ? 'header-link active-link' : 'header-link';
  };

  return (
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
