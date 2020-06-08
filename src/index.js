import "./styles/general.scss";

import "./canvas.js";

import React from "react";
import ReactDOM from "react-dom";
import Ranking from "./ranking";
import Popup from "./popup";
import clp from "console-log-plus";

setTimeout(() => {
  clp({
    color: "#fff",
    background: "#000",
    message: "jakbyco.com",
  });
}, 500);

ReactDOM.render(
  <div>
    <Ranking />
    <Popup />
  </div>,
  document.getElementById("jsx")
);
