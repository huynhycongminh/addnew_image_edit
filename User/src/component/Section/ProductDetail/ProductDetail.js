import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderProductDetail from '../../Header/HeaderProductDetail'
import MenuSecond from '../Product/MenuSecond'
import BannerBottomPD from './BannerBottomPD'
import NamePD from './NamePD'
import SpecificationsPD from './SpecificationsPD'
import axios from "axios"
export default class ProductDetail extends Component {
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
                <HeaderProductDetail/>
               
              {
                this.state.cars.map((car) => {
                  console.log(typeof this.props.match.params.id);
                  if(car._id == this.props.match.params.id)
                  return(
                    <NamePD name={car.name}/>
                  )
                })
              }
         
                <SpecificationsPD/>
                <BannerBottomPD/>
            </div>
        )
    }
}
