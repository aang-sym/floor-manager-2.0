import React, { Component } from "react";

class Customer extends Component {
  state = {};
  render() {
    const arr = ["Personal", <br />, "Sale", <br />, "Request"];
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row">
            <div class="col-1 text-center border-end">Time waiting</div>
            <div class="col text-center border-end">Customer</div>
            <div class="col text-center border-end">Mobile Number</div>
            <div class="col text-center border-end">Notes</div>
            <div class="col">
              <p>{arr}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Customer;
