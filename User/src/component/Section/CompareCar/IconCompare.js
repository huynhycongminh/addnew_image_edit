import React, { Component } from "react";

export default class IconCompare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Trạng thái nút
      buttonstate: true,
    };
  }
  // xử lý trạng thái nút
  handleStatus = () => {
    this.setState({
      buttonstate: !this.state.buttonstate,
    });
  };
  
  showButtonImage = () => {
    if (this.state.buttonstate === true) {
      return (
        <div className="container section">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-6 add-car-compare-icon">
              <div
                onClick={() => {
                  this.handleStatus();
                }}
                className="ButtonImage"
              >
                <img src="./image/carComparison/plusImg.png" alt="Add Car" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6 add-car-compare-icon">
              <div
                onClick={() => {
                  this.handleStatus();
                }}
                className="ButtonImage"
              >
                <img src="./image/carComparison/plusImg.png" alt="Add Car" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            this.handleStatus();
          }}
          className="modal-close"
        >
          <i className="fa fa-close" />
        </div>
      );
    }
  };

  showForm = () => {
    if (this.state.buttonstate === false) {
      return (
        <div className="modal open">
          <div className="modal-container">
            {/* <div className="modal-close">
              <i className="fa fa-close" />
            </div> */}
            {this.showButtonImage()}
            <div className="modal-header ">
              <div className="header-text ">SELECT CAR ADD TO COMPARE</div>
              <div className="search-box ">
                <input
                  type="text"
                  name
                  id
                  placeholder="Enter the car name to compare"
                  className="modal-body-input"
                />
                <i className="fa fa-search search-icon" />
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-body-label">Suggestion</div>
              <ul className="suggestion-list">
                <li className="suggestion-item">Audi A6 abc</li>
                <li className="suggestion-item">Audi A6 def</li>
                <li className="suggestion-item">Audi A6 ghk</li>
                <li className="suggestion-item">Audi A6 fsd</li>
                <li className="suggestion-item">Audi A6 sdrfsef</li>
                <li className="suggestion-item">Audi A6 fersfeqwr</li>
                <li className="suggestion-item">Audi A6 wedrwrf</li>
                <li className="suggestion-item">Audi A6 ftwerfwe</li>
                <li className="suggestion-item">Audi A6 ghrtydjhtyjk</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.showButtonImage()}
        {/* Info Model */}
        {this.showForm()}
      </div>
    );
  }
}
