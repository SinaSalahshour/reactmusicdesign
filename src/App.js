import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Discover from "./components/Discover";
import Join from "./components/Join";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./components/styles.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container full-height-grow">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/discover" component={Discover} />
            <Route path="/join" component={Join} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
