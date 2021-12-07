import React, { Component } from "react";

export default class ImageTextProduct extends Component {
  render() {
    return (
      <div className>
        <div className="row list-info">
          <div className="col-lg-4 col-md-12 col-12 mb-32 item-info">
            <div className="item-info-img">
              <img src="./image/product/Modul10_Blinker_1.png" alt="" />
            </div>
            <h2 className="sub-heading">
              Groundbreaking brilliance.
              <br />
              Expressive look.
            </h2>
            <p className="description">
              The optional HD Matrix LED headlights with dynamic indicator light
              impress from two different perspectives They provide the driver
              with optimum road lighting without dazzling oncoming traffic, and
              maximise the A Sedan's effective team width thanks to the outward
              focus of the characteristic lighting segments
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-12 mb-32 item-info">
            <div className="item-info-img">
              <img src="./image/product/Ambientlight_AA6.png" alt="" />
            </div>
            <h2 className="sub-heading">Mood enhancer</h2>
            <p className="description">
              The optional contour ambient light package creates a unique
              atmosphere and gives the interior of the A6 Sedan a fascinating
              ambience, characterised by a sense of well-being Precise contour
              light guides accentuate the instrument panel, central console and
              other striking design structures in 30 different colour tones with
              continuous dimming
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-12 mb-32 item-info">
            <div className="item-info-img">
              <img src="./image/product/CLASSIC.png" alt="" />
            </div>
            <h2 className="sub-heading">
              Reduced design.
              <br />
              Maximum ease of operation.
            </h2>
            <p className="description">
              The high-resolution 10.1 inch and 8.6-inch HD MMI High touch
              displays with touch respome available on request, fit seamlessly
              into the elegant instrument panel and are optimally tailored to
              the needs of the driver. On the upper display, the driver manages
              information entetainment and navigation services, on the lower
              display, text input, air conditioning and various comfort
              functions can be controlled
            </p>
          </div>
        </div>
      </div>
    );
  }
}
