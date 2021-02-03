import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Customer from "./components/customer";
import Form from "./components/form";


class App extends Component {
  state = {
    customers: [],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Customer />
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
