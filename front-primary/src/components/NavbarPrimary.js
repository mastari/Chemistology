import React, { Component } from "react";

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
          <a href="#" className="app-brand-centered">Chemistology</a>
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
                <a className="nav-item active" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item" href="#">
                  Features
                </a>

                <a className="nav-item" href="#">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
