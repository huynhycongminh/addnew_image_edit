import React, { Component } from "react";
import axios from "axios"
export default class WrapperProduct extends Component {
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
  }
  render() {
    // console.log(this.props.match.params._id);
    return (

      <div className="container section info-product">
        {
          this.state.cars.map((car) => {
            if (car._id !== this.props.match.params._id)
            return(
              <p className="description">
              {car.node}
             </p>
            )
          
          })
        }
      
      
    
      </div>
    );
  }
}
