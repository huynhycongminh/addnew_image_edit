import React, { Component } from "react";
import axios from "axios"
export default class NamePD extends Component {
  
  render() {
    return <h1 className="name-model">{this.props.name}</h1>;
  }
}
