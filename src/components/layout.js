/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import MobileHeader from './mobileHeader';
import './layout.css';

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
    <>
      <div id="layout">
        <header>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            path={path}
            siteTitle={data.site.siteMetadata.title}
          />
          <MobileHeader
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

        <footer>
          <h3>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/christopher-golden/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </h3>
          <h3>
            <a
              className="footer-link"
              href="https://github.com/Chrisgolden77/Personal-Site"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </h3>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
