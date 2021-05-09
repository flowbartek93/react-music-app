import React, { createContext } from "react";
import ReactDOM from "react-dom";
import Player from "./components/Player";

import "./style.css";

const App = () => {
  return <Player />;
};

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
