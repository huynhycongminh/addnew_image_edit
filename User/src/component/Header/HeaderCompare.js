import React, { Component } from "react";

export default class HeaderCompare extends Component {
  render() {
    return (
      <div
        className="banner-top"
        style={{
          backgroundImage: 'url("./image/carComparison/bannerTop.png")',
        }}
      >
        <h1 className="banner-heading">CAR COMPARISON</h1>
      </div>
    );
  }
}
