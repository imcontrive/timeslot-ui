import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import FormContainer from "./components/FormContainer";

class App extends Component {
  componentDidMount() {
    var getFromLocalStorage = JSON.parse(localStorage.getItem("timeSlotList"));
    if (getFromLocalStorage) {
      this.props.dispatch({
        type: "GET_FROM_LOCAL_STORAGE",
        payload: getFromLocalStorage
      });
    }
  }

  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/slots" component={FormContainer} />
      </>
    );
  }
}

export default connect()(App);
