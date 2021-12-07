import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Trạng thái nút
      buttonState: true,
    };
  }
  handleStatus = () => {
    this.setState({
      buttonState: !this.state.buttonState,
    });
  };
  showButton = () => {
    if (this.state.buttonState === true) {
      return (
        <i
          onClick={() => {
            this.handleStatus();
          }}
          className="fa fa-search search_icon"
          aria-hidden="true"
        />
      );
    } else {
      return (
        <i
          onClick={() => {
            this.handleStatus();
          }}
          className="fa fa-times icon-times-out"
          aria-hidden="true"
        ></i>
      );
    }
  };
  showForm = () => {
    if (this.state.buttonState === false) {
      return (
        <input
          className="form-control mr-sm-2 search-input"
          type="text"
          placeholder="Search"
        />
      );
    }
  };
  showButtonSearch = () => {
    if (this.state.buttonState === false) {
      return (
        <i className="fa fa-search icon-search-out" aria-hidden="true"></i>
      );
    }
  };
  render() {
    return (
      <div className="menu">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src="/image/logo.jpg" alt="" className="logo_header" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Model
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/">
                    Audi A3
                  </a>
                  <a className="dropdown-item" href="/">
                    Audi A6
                  </a>
                  <a className="dropdown-item" href="/">
                    Audi Q2
                  </a>
                  <a className="dropdown-item" href="/">
                    Audi Q3
                  </a>
                  <a className="dropdown-item" href="/">
                    Audi Q5
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/Register" className="nav-link">
                  Book a test drive
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Compare" className="nav-link">
                  Car Comparison
                </NavLink>
              </li>
              <li className="nav-item">
                {/* Gán tạm Login để test UI */}
                <NavLink to="/Company" className="nav-link">
                  Company
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {this.showButtonSearch()}
              {this.showForm()}
              {this.showButton()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
