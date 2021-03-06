module.exports = {
  siteMetadata: {
    title: `Chris Golden`,
    menuLinks: [
      {
        key: 'home',
        name: 'Home',
        link: '/',
      },
      {
        key: 'portfolio',
        name: 'Portfolio',
        link: '/portfolio/',
      },
      {
        key: 'resume',
        name: 'Resume',
        link: '/resume/',
      },
      {
        key: 'contact',
        name: 'Contact',
        link: '/contact/',
      },
    ],
    description: `Chris Golden's personal website`,
    author: `Chris Golden`,
    url: 'http://www.goldenchris.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/chris-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
