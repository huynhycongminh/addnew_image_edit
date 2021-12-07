import React, { Component } from "react";

export default class HeaderImage extends Component {
  render() {
    return (
      <div
        className="banner-top"
        style={{ backgroundImage: 'url("./image/exterior/bannerTop.jpg")' }}
      >
        <h1 className="banner-heading">EVERY CAR IS A WORK OF ART</h1>
      </div>
    );
  }
}
