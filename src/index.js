import "./styles/general.scss";

import "./canvas.js";

import React from "react";
import ReactDOM from "react-dom";
import Ranking from "./ranking";
import Popup from "./popup";

ReactDOM.render(
  <div>
    <Ranking />
    <Popup />
  </div>,
  document.getElementById("jsx")
);
