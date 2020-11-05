/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './header';
import './layout.css';
import MobileHeader from './mobileHeader';


const Layout = ({ children, className, additionalStyles, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <div id="layout">
      <header>
        <Header
          id="main-header"
          menuLinks={data.site.siteMetadata.menuLinks}
          path={path}
          siteTitle={data.site.siteMetadata.title}
        />
        <MobileHeader
          id="mobile-header"
          menuLinks={data.site.siteMetadata.menuLinks}
          path={path}
          siteTitle={data.site.siteMetadata.title}
        />
      </header>

      <main
        className={className}
        id="main"
        path={path}
        style={additionalStyles}
      >
        {children}
      </main>
      <footer id="main-footer">
        <h2>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/christopher-golden/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </h2>
        <h2>
          <a
            className="footer-link"
            href="https://github.com/Chrisgolden77/Personal-Site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </h2>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
