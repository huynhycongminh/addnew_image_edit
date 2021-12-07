import React, { Component } from "react";
import { Route } from "react-router";
import HeaderCompare from "../Header/HeaderCompare";
import HeaderCP from "../Header/HeaderCP";
import HeaderHP from "../Header/HeaderHP";
import HeaderImage from "../Header/HeaderImage";
import HeaderProduct from "../Header/HeaderProduct";
import HeaderProductDetail from "../Header/HeaderProductDetail";
import HeaderRegister from "../Header/HeaderRegister";
import MenuSecondary from "../Menu/MenuSecondary";
import Brand1CP from "../Section/Company/Brand1CP";
import Brand2CP from "../Section/Company/Brand2CP";
import Brand3CP from "../Section/Company/Brand3CP";
import Layer1CP from "../Section/Company/Layer1CP";
import Layer2CP from "../Section/Company/Layer2CP";
import Layer3CP from "../Section/Company/Layer3CP";
import BannerCompare from "../Section/CompareCar/BannerCompare";
import SpecificationsCompare from "../Section/CompareCar/SpecificationsCompare";
import CarItemsHP from "../Section/HomePage/CarItemsHP";
import IntroHP from "../Section/HomePage/IntroHP";
import PictureHP from "../Section/HomePage/PictureHP";
import Service from "../Section/HomePage/Service";
import ContentImage from "../Section/ImageProduct/ContentImage";
import ImageTextProduct from "../Section/Product/ImageTextProduct";
import ModelProcut from "../Section/Product/ModelProcut";
import WrapperProduct from "../Section/Product/WrapperProduct";
import BannerBottomPD from "../Section/ProductDetail/BannerBottomPD";
import NamePD from "../Section/ProductDetail/NamePD";
import SpecificationsPD from "../Section/ProductDetail/SpecificationsPD";
import FormRegister from "../Section/Register/FormRegister";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          <HeaderHP />
          <CarItemsHP />
          <Service />
          <PictureHP />
          <IntroHP />
        </Route>
        <Route exact path="/Register">
          <HeaderRegister />
          <FormRegister />
        </Route>
        <Route exact path="/Compare">
          <HeaderCompare />
          <SpecificationsCompare />
          <BannerCompare />
        </Route>
        <Route exact path="/Company">
          <HeaderCP />
          <Layer1CP />
          <Layer2CP />
          <Layer3CP />
          <Brand1CP />
          <Brand2CP />
          <Brand3CP />
        </Route>
        <Route exact path="/Product">
          <MenuSecondary />
          <HeaderProduct />
          <WrapperProduct />
          <ImageTextProduct />
          <ModelProcut />
        </Route>
        <Route exact path="/ProductDetail">
          <MenuSecondary />
          <HeaderProductDetail />
          <NamePD />
          <SpecificationsPD />
          <BannerBottomPD />
        </Route>
        <Route exact path="/ImageProduct">
          <MenuSecondary />
          <HeaderImage />
          <ContentImage />
          <Service />
        </Route>
      </div>
    );
  }
}