import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class HeaderHP extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className="slidewrap">
        <Slider {...settings} className="slide ">
          <div>
            <img mg src="/image/background.jpg" alt="" />
          </div>
          <div>
            <img src="/image/background3.jpg" alt="" />
          </div>
          <div className="div">
            <img src="/image/backgound4.jfif" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
