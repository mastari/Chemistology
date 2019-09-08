import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom'

export default class NavbarPrimary extends Component {
  state = {
    width: 0,
    height: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  shouldRenderBrand = () => {
    if (this.state.width >= 768) {
      console.log("hey");
      return (
        <div className="app-brand-centered">
          <Link className="app-brand-centered" to='/'>Chemistology</Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.shouldRenderBrand()}
        <nav className="navbar navbar-expand-md navbar-light bg-faded">
          <a className="navbar-brand d-md-none" href="#">
            Chemistology
          </a>
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-md-flex d-block w-100">
            <div
              className="collapse navbar-collapse mx-auto w-auto justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <NavLink className="nav-item" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-item" to="/features">
                  Features
                </NavLink>
                <NavLink className="nav-item" to="/pricing">
                  Pricing
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
