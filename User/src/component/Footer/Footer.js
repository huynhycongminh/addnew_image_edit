import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-wrap">
          <div className="footer-component main-component">
            <div className="footer-row">
              <span className="footer-p p-title">
                ONLINE SHOWROOM <br />
                WITH 3D CAR
              </span>
              <div className="footer-row">
                <span className="footer-p ">Huynh Y Cong Minh</span>
              </div>
              <div className="footer-row">
                <span className="footer-p ">Pham Hong Thuan</span>
              </div>
              <div className="footer-row">
                <span className="footer-p ">Nguyen Ngoc Ny</span>
              </div>
              <div className="footer-row">
                <span className="footer-p ">Bui Duc Duong</span>
              </div>
            </div>
          </div>
          <div className="footer-component">
            <div className="footer-row">
              <span className="footer-p p-title">Model</span>
              <div className="footer-row">
                <a href className="footer-p  quick-link">
                  Audi A4
                </a>
              </div>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Audi A6
                </a>
              </div>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Audi A7
                </a>
              </div>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Audi A8
                </a>
              </div>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Audi Q2
                </a>
              </div>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Audi Q3
                </a>
              </div>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Audi Q5
                </a>
              </div>
            </div>
          </div>
          <div className="footer-component">
            <div className="footer-row">
              <span className="footer-p p-title">Service</span>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Book a test drive
                </a>
              </div>
              <div className="footer-row">
                <a href className="footer-p quick-link">
                  Car Comparison
                </a>
              </div>
            </div>
          </div>
          <div className="footer-component">
            <div className="footer-row">
              <span className="footer-p p-title">Contact</span>
              <div className="footer-row">
                <span className="footer-p ">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <a href className="footer-p quick-link">
                    Hotline: 0357359239
                  </a>
                </span>
              </div>
              <div className="footer-row">
                <span className="footer-p ">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <a href className="footer-p quick-link">
                    dduong0311@gmail.com
                  </a>
                </span>
              </div>
              <div className="footer-row footer-social">
                <a href className="social-link">
                  <img src="/image/fb.png" alt="" className="social-img" />
                </a>
                <a href className="social-link">
                  <img
                    src="/image/youtube.jfif"
                    alt=""
                    className="social-img"
                  />
                </a>
                <a href className="social-link">
                  <img
                    src="/image/instagram.png"
                    alt=""
                    className="social-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
