import React, { Component } from "react";
import axios from "axios"
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import Item from "./Item";
export default class CarItemsHP extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      cars:[],
      imageCar: null,
    }
  }
  onChange =(event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
  componentDidMount() {
    axios.get("http://localhost:3000/new_test_driver").then((data) => {
      this.setState({
        cars: data["data"]["cars"],
        car_models: data["data"]["car_models"],
      });
    });
    axios.get("http://localhost:3000/api/get_image")
    .then((data) => {
      debugger
    })
  }
    
  render() {
    return (
      <div>
        <section className="card-list">
         {
         
         this.state.cars.map((car) => (
           <Item 
           id= {car._id}
           name={car.name}
           />
        //   <NavLink to={
        //     "/Product/"+ this.chuyenDoiURL(car.name)+"."+ (car._id)
        //   }  className="card">
        //   <div className="card-top">
        //     <img src={car.image} alt="" className="card-img" />
        //   </div>
        //   <div className="card-content">
        //     <h3 className="card-title">{car.name}</h3>
        //   </div>
        // </NavLink>
         ))
         }
          {/* <a href className="card">
            <div className="card-top">
              <img src="/image/audi-a6-2021.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a>
          <a href className="card">
            <div className="card-top">
              <img src="/image/audi-a8.jpg" alt="" className="card-img" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Audi a4</h3>
            </div>
          </a> */}
        </section>
        
      </div>
    );
  }
}
