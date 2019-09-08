import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container app-content-container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-sm-12 col-xs-6">
            <p className="app-home-title">Everything in <span className="app-home-title-emphasize">one</span> place.</p>
            <img src="https://hackernoon.com/hn-images/1*Zv2oNkEM4LXZ0Zay9Fsi3Q.png" class="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
      </div>
    );
  }
}
