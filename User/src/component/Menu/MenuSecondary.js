import React, { Component } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
export default class MenuSecondary extends Component {
  render() {
    return (
      <ul className="main-info-list container p-rl-0">
        <li className="main-info-item active">
          <NavLink href="/Product">Audi A4</NavLink>
        </li>
        <li className="main-info-item">
          <NavLink href="/ProductDetail">Specification</NavLink>
        </li>
        <li className="main-info-item">
          <NavLink href="/ImageProduct">Image</NavLink>
        </li>
      </ul>
    );
  }
}
