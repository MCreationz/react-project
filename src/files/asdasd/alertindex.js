import React from "react";
import { render } from "react-dom";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Homealert from "./Homealert";

const options = {
  timeout: 5000,
  position: "bottom center"
};

const Appalert = () => (
  <Provider template={AlertTemplate} {...options}>
    <Homealert />
  </Provider>
);

render(<Appalert />, document.getElementById("root"));
