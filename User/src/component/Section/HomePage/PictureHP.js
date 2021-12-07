import React, { Component } from "react";

export default class PictureHP extends Component {
  render() {
    return (
      <section className="picture">
        <div className="picture-img">
          <img src="/image/brand.jpg" alt="" />
          <p className="title-picture">
            Some see what there. <br />
            We see beyond.
          </p>
        </div>
      </section>
    );
  }
}
