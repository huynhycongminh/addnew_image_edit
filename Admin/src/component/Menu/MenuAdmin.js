import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

export default class MenuAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatic: true,
    };
  }
  handleStatus = () => {
    this.setState({
      buttonState: !this.state.buttonState,
    });
  };

  LogOutUser = () => {
    if(Cookies.get('user')){
      Cookies.remove('user');
      window.location.reload();
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="header">
        <div className="name-website">
          <a href>OSR&amp;3D</a>
        </div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ width: "100%", backgroundColor: "#636363" }}
        >
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="menu-list navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="menu-item">
                <NavLink to="/">
                  <img
                    src="./image/adminListofProduct/cube_24px.png"
                    alt="Storage"
                  />
                  Storage Manager
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/post">
                  <img
                    src="./image/adminListofProduct/traffic_jam_80px.png"
                    alt="List Register"
                  />
                  Product Manager
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/Form">
                  <img
                    src="./image/adminListofProduct/list.png"
                    alt="List Register"
                  />
                  Register Test Drive
                </NavLink>
              </li>
            </ul>
            <ul className="info-list navbar-nav my-2 my-lg-0">
              <li className="info-item message">
                <a href>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                </a>
              </li>
              <li className="info-item admin-account">
                <a href>
                  <img
                    src="./image/adminListofProduct/admin.png"
                    alt="AdminImage"
                    className="admin-img"
                  />
                  Admin Account
                </a>
              </li>
              <li className="info-item setting">
                <a onClick={this.LogOutUser} href>
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
