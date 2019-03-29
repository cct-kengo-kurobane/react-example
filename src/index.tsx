import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./scss/index.scss";

const render = () =>

  ReactDOM.render(
      <App />,
      document.getElementById("example")
  );

render();

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require<{App: typeof App}>('./components/App').App;
        ReactDOM.render(
            <NextApp />,
            document.getElementById('example'),
        );
    });
}

