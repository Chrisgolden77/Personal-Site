/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

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

        {/* <footer
          style={{
            textAlign: 'center',
            borderTop: '1px solid #ffffffa3',
          }}
        >
          FOOTER
        </footer> */}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
