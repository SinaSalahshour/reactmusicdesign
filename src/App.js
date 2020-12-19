import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Discover from "./components/Discover";
import Join from "./components/Join";
import Navigation from "./components/Navigation";

import "./components/styles.css";

class App extends Component {
  componentDidMount() {
    document.body.classList.add("full-height-grow");
    document.getElementById("root").classList.add("full-height-grow");
    document.getElementById("root").classList.add("container");
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/discover" component={Discover} />
          <Route path="/join" component={Join} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
