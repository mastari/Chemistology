import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Home from "./components/Home";
import NavbarPrimary from "./components/NavbarPrimary";

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarPrimary />
        <div className="Router">
          <Route exact path="/" component={Home} />
          <Route path="/app" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}
