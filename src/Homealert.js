import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
class Homealert extends Component {
  render() {
    return (
      <Fragment>
        <button class="btn1"
          onClick={() => {
            this.props.alert.show("Oh look, an alert!");
          }}
        >
          Show Alert
        </button>
        <button  class="btn2"
          onClick={() => {
            this.props.alert.error("You just broke something!");
          }}
        >
          Oops, an error
        </button>
        <button  class="btn3"
          onClick={() => {
            this.props.alert.success("It's ok now!");
          }}
        >
          Success!
        </button>
      </Fragment>
    );
  }
}
export default withAlert(Homealert);
