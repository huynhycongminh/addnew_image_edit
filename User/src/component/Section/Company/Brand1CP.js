import React, { Component } from "react";

export default class Brand1CP extends Component {
  render() {
    return (
      <div className="four-points">
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-6 col-12 four-points-item">
            <img
              src="./image/company/brand1.png"
              alt="Aesthetics"
              className="imgBrand"
            />
            <h2 className="brand-text">Aesthetics</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-12 four-points-item">
            <img
              src="./image/company/brand2.png"
              alt="Performance"
              className="imgBrand"
            />
            <h2 className="brand-text">Performance</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-12 four-points-item">
            <img
              src="./image/company/brand3.png"
              alt="Premium"
              className="imgBrand"
            />
            <h2 className="brand-text">Premium</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-12 four-points-item">
            <img
              src="./image/company/brand4.png"
              alt="Technology"
              className="imgBrand"
            />
            <h2 className="brand-text">Technology</h2>
          </div>
        </div>
      </div>
    );
  }
}
