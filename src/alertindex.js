import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Homealert from "./Homealert";

const options = {
  timeout: 5000,
  position: "center center"
};
class Appalert extends Component {
  render() {
    return (
       <Provider template={AlertTemplate} {...options}>
    <Homealert />
  </Provider>
    );
  }
}
export default Appalert;
