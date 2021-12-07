import React, { Component } from "react";

export default class Brand2CP extends Component {
  render() {
    return (
      <div className="section human-centricity">
        <div className="container">
          <h1 className="heading" style={{ color: "#f1f1f1" }}>
            Human centricity is key
          </h1>
          <img
            src="./image/company/brand5.png"
            alt="Human centricity is key"
            className="human-centricity-img"
          />
          <p className="description">
            We think and work in a holistic way, giving equal regard to our
            customers, employees and society.
            <br />
            <br />
            No matter how enthusiastic our engineers and designers may be about
            a product, it only makes sense to us if it is also relevant to our
            customers, if it creates a real benefit. We communicate constantly
            with our customers. For only by doing so can we understand their
            wishes and requirements.
          </p>
        </div>
      </div>
    );
  }
}
