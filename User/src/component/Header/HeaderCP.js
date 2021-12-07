import React, { Component } from "react";

export default class HeaderCP extends Component {
  render() {
    return (
      <div className="hidden">
        <div
          className="banner"
          style={{
            backgroundImage: 'url("./image/company/companyBanner.png")',
          }}
        >
          <h1 className="banner-heading">We are Progress</h1>
        </div>
      </div>
    );
  }
}
