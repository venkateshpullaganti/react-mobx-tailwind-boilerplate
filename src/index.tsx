import "styles/index.css";

import App from "App";
import ThemeContext, { theme } from "contexts/themeContext";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={theme}>
      <App history={history} />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
