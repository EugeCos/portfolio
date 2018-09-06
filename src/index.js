import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import HttpsRedirect from "react-https-redirect";

// ----------MATERIAL UI-----------
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
  <HttpsRedirect>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </HttpsRedirect>,
  document.getElementById("root")
);
registerServiceWorker();
