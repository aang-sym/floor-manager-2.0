import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
//import "bootswatch/dist/darkly/bootstrap.min.css";

class Form extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row g-0">
            <div class="col">
              <select className="form-select border-0">
                <option>Customer Type</option>
                <option value="cx_p">Personal</option>
                <option value="cx_b">Business</option>
              </select>
            </div>

            <div class="col ">
              <select className="form-select border-0">
                <option>Sale or Non-sale</option>
                <option>Sale</option>
                <option>Non-sale</option>
              </select>
            </div>

            <div class="col">
              <select className="form-select border-0">
                <option>Product or request</option>
                <option>Post-paid New</option>
                <option>Upgrade</option>
                <option>Upgrade</option>
              </select>
            </div>

            <div className="col-2">
              <input
                type="text"
                class="form-control border-0"
                placeholder="Customer name"
                aria-label="Customer name"
              ></input>
            </div>

            <div style={{boxShadow: "0"}} class="col-2">
              <input
                type="text"
                class="form-control border-0"
                placeholder="Mobile number"
                aria-label="Mobile number"
              ></input>
            </div>

            <div class="col-4">
              <input
                type="text"
                class="form-control border-0"
                placeholder="Notes"
                aria-label="Notes"
              ></input>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
