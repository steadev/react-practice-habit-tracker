import "@fortawesome/fontawesome-free/js/all.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./app.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabit /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
