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
        src="https://app-dev.swarmreport.org/widget.js"
        id="bee-widget"
        data-company-uid="00000000-0000-0000-0000-000000000000"
        data-environment="-dev"
      ></script>
  ]);
};
// You can delete this file if you're not using it
