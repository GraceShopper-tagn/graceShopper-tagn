import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";
import AuthContext from "./contexts/AuthContext";
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
