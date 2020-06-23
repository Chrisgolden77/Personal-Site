/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require("react");
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
      <script
        type="text/javascript"
        src="https://dev-app.swarmreport.org/widget.js"
        name="bee-widget"
        companyuid="1001"
      ></script>
  ]);
};
// You can delete this file if you're not using it
