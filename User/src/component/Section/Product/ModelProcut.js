import React, { Component } from "react";

export default class ModelProcut extends Component {
  render() {
    return (
      <div className="model-3D">
        <div className="container">
          <img
            src="./image/product/a6_3d_model.PNG"
            alt="3D model"
            className="model-3D-img"
          />
          <div className="guide-use">
            <span className="guide-use-text">drag to use</span>
            <img
              src="./image/product/360_view_30px.png"
              alt="360 icon"
              className="guide-use-icon"
            />
          </div>
        </div>
      </div>
    );
  }
}
