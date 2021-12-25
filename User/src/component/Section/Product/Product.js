import React, { Component } from 'react'
import axios from "axios"
import Service from '../HomePage/Service';
import MenuSecond from './MenuSecond';
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state={
      cars:[],
      imageCar: null,
      firstCar: null,
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
 
  }
  
    render() {
      // console.log(this.props.match.params.id);
        return (
            <div>
              {
                this.state.cars.map((car) => {
                  console.log(typeof this.props.match.params.id);
                  if(car._id == this.props.match.params.id)
                  return(
              <MenuSecond
                    id={car._id}
                    name={car.name}
              />
                  )
                })
              }
       
            <div className="product-img-main" style={{backgroundImage: 'url("./image/product/Audi-A6.png")'}}>
            </div>
            {/* Info Product */}
            <div className="container section info-product">
              {
                 this.state.cars.map((car) => {
                  console.log(typeof this.props.match.params.id);
                  if(car._id == this.props.match.params.id)
                  return(
                    <div>
                    <h1 className="heading">
                      {car.name}
                    </h1>
                    <p className="description">
                  {car.node}
                    </p>
                  </div>
                  
                  )
                })
              }    
            </div>
       
            {/* 3D Model */}
            <div className="model-3D">
              <div className="container">
                <img src="./image/product/a6_3d_model.PNG" alt="3D model" className="model-3D-img" />
                <div className="guide-use">
                  <span className="guide-use-text">drag to use</span>
                  <img src="./image/product/360_view_30px.png" alt="360 icon" className="guide-use-icon" />
                </div>
              </div>
            </div>
            {/* Services */}
      <Service/>
            {/* Footer */}
            </div>
          

        )
    }
}
