/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react');
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      type="text/javascript"
      src="https://client-dev/api/widget/?companyUid=00000000-0000-0000-0000-000000000000"
      id="bee-widget"
    ></script>,
  ]);
};
// You can delete this file if you're not using it
