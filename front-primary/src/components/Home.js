import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="app-content-container">
        <div className="row">
          <div className="col">
            <div className="app-content-container">
              <div className="frontpage-info-banner col">
                <h2>Create, share, and review labs</h2>
                <h1>
                  All in <b>one</b> place...
                </h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="frontpage-video-banner col">
              <iframe
                src="https://player.vimeo.com/video/353010302"
                width="740"
                height="472.5"
                frameBorder="0"
                allow="autoplay;"
                allowFullScreen
                background="1"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
