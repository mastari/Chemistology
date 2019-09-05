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
          <a href="#">Chemistology</a>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>{this.shouldRenderBrand()}</div>
        <nav class="navbar navbar-expand-md navbar-light bg-faded">
          <a class="navbar-brand d-md-none" href="#">
            Chemistology
          </a>
          <button
            class="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-md-flex d-block w-100">
            <div
              class="collapse navbar-collapse mx-auto w-auto justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
                <a class="nav-item nav-link" href="#">
                  Features
                </a>

                <a class="nav-item nav-link" href="#">
                  Pricing
                </a>
                <a class="nav-item nav-link disabled" href="#">
                  Disabled
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
