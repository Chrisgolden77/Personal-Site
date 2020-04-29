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
import './layout.css';

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div id="layout">
        <header>
          <Header siteTitle={data.site.siteMetadata.title} path={path} />
        </header>

        <main
          style={{
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            textAlign: 'center',
            overflow: 'auto'
          }}
          path={path}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: 'forestgreen',
            textAlign: 'center',
          }}
        >
          FOOTER
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
