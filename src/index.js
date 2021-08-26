import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import ServerDown from "./ServerDown";

ReactDOM.render(
  <Router>
    {/* <ServerDown /> */}
    <App />
  </Router>,
  document.getElementById("root")
);
