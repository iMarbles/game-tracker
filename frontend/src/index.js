import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "pages/App";

import Auth from "components/withAuth";

ReactDOM.render(
  <Router>
    <Auth>
      <App/>
    </Auth>
  </Router>,
  document.getElementById("root")
);