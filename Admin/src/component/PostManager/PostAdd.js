import React, { Component } from "react";
import axios from "axios";
export default class PostAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      note: "",
      image: null,
      model: null,
      prices: "",
      quantity: 0,
      headlight: "",
      parking_light: "",
      daylight: "",
      steering_wheel: "",
      display: "",
      technology: "",
      sound_connect: "",
      equipment: "",
      length: "",
      width: "",
      height: "",
      standard_long: "",
      weight: "",
      engine: "",
      transmission: "",
      cylinder_capacity: "",
      maximum_power: "",
      maximum_speed: "",
      cars: [],
      car_models: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/api/get_car_model").then((data) => {
      this.setState({
        car_models: data.data,
      });
    });
  }

  isChangeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onChangeImage = (event) => {
    var input = event.target;
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
      debugger
        var img = document.getElementById("yourImgTag");
        img.src = event.target.result;
    }
  }

  handleSubmit = (event) => {
    
    var data = {
      name: this.state.name,
      note: this.state.note,
      image: this.state.image,
      model: this.state.model,
      prices: this.state.prices,
      quantity: this.state.quantity,
      headlight: this.state.headlight,
      parking_light: this.state.parking_light,
      daylight: this.state.daylight,
      steering_wheel: this.state.steering_wheel,
      display: this.state.display,
      technology: this.state.technology,
      sound_connect: this.state.sound_connect,
      equipment: this.state.equipment,
      length: this.state.length,
      width: this.state.width,
      height: this.state.height,
      standard_long: this.state.standard_long,
      weight: this.state.weight,
      engine: this.state.engine,
      transmission: this.state.transmission,
      cylinder_capacity: this.state.cylinder_capacity,
      maximum_power: this.state.maximum_power,
      maximum_speed: this.state.maximum_speed,
    };
    axios
      .post("http://localhost:3000/api/add_post", data, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Create successfully !!!");
      this.props.history.push('/post');
  };
  render() {
    const { car_models } = this.state;
    return (
      <div className="content">
        <div className="heading mb-16">POST MANAGER</div>
        <form method="POST" className="box-content">
          <div className="sub-heading mb-16">ADD NEW PRODUCT</div>
          <div className="row">
            <div className="col-5">
              <div className="input-info">
                <label htmlFor="product_name">Product name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.isChangeData}
                />
              </div>
              <div className="input-info">
                <label id="note" htmlFor="product-desc">
                  Product description:
                </label>
                <textarea
                  name="note"
                  id="note"
                  cols={30}
                  rows={8}
                  defaultValue={""}
                  onChange={this.isChangeData}
                />
              </div>
            </div>
            <div className="col-7">
              <div className="input-info input-box">
                <label htmlFor="product-img">Product images</label>
                <div className="line" />
                <div className="img-list img-box">
                  <div className="img-item">
                    <img
                      src="https://www.freeiconspng.com/uploads/vehicle-icon-7.jpg"
                      alt="Car Image"
                    />
                  </div>
                </div>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={this.onChangeImage}
                />
              </div>
            </div>
          </div>
          <div className="price-list input-box  mt-4">
            <h4 className="sub-title">Product Detail</h4>
            <div className="line" />
            <div className="input-info">
              <label htmlFor style={{ fontWeight: 600 }}>
                Price list of car models
              </label>
              <table className="table">
                <tbody>
                  <tr className="tr_table">
                    <th className="col-4 th_table">
                      <p className="price-list-title">Model</p>
                    </th>
                    <th className="col-4  th_table">
                      <p className="price-list-title">Price</p>
                    </th>
                    <th className="col-4  th_table">
                      <p className="price-list-title">Quantity</p>
                    </th>
                  </tr>
                  <tr>
                    <td className="col-4 td_table">
                      <select
                        name="model"
                        id="model select_table"
                        onChange={this.isChangeData}
                      >
                        <option value="">Choose type model</option>
                        {car_models.map((car_model) => (
                          <option value={car_model._id} key={car_model._id}>
                            {car_model.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="col-4 td_table">
                      <input
                        type="number"
                        name="prices"
                        id="prices"
                        onChange={this.isChangeData}
                      />
                    </td>
                    <td className="col-4 td_table">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        onChange={this.isChangeData}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="product-data input-box mt-4">
            <h4 className="sub-title">Product data</h4>
            <div className="line" />
            <div className="input-info">
              <div className="row">
                <div className="col-6">
                  <div className="product-data-item">
                    <div className="product-data-title">Volume-Size</div>
                    <div className="product-data-input-list">
                      <div className="product-data-info">
                        <label htmlFor="product-data-length">Length</label>
                        <input
                          type="text"
                          name="length"
                          id="length"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="width">Width</label>
                        <input
                          type="text"
                          name="width"
                          id="width"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-height">Height</label>
                        <input
                          type="text"
                          name="height"
                          id="height"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-long">Standard Long</label>
                        <input
                          type="text"
                          name="standard_long"
                          id="standard_long"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-weight">Weight</label>
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          onChange={this.isChangeData}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product-data-item">
                    <div className="product-data-title">Furniture</div>
                    <div className="product-data-input-list">
                      <div className="product-data-info">
                        <label htmlFor="product-data-steering-wheel">
                          Steering Wheel
                        </label>
                        <input
                          type="text"
                          name="steering_wheel"
                          id="steering_wheel"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-display">Display</label>
                        <input
                          type="text"
                          name="display"
                          id="display"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-technology">
                          Technology
                        </label>
                        <input
                          type="text"
                          name="technology"
                          id="technology"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-sound-connect">
                          Sound Connect
                        </label>
                        <input
                          type="text"
                          name="sound_connect"
                          id="sound_connect"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-equipment">
                          Equipment
                        </label>
                        <input
                          type="text"
                          name="equipment"
                          id="equipment"
                          onChange={this.isChangeData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="product-data-item">
                    <div className="product-data-title">Engine - Gearbox</div>
                    <div className="product-data-input-list ">
                      <div className="product-data-info">
                        <label htmlFor="product-data-engine">Engine</label>
                        <input
                          type="text"
                          name="engine"
                          id="engine"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-transmission">
                          Transmission
                        </label>
                        <input
                          type="text"
                          name="transmission"
                          id="transmission"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-cylinder-capacity">
                          Cylinder Capacity
                        </label>
                        <input
                          type="text"
                          name="cylinder_capacity"
                          id="cylinder_capacity"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-max-power">
                          Maximum Power
                        </label>
                        <input
                          type="text"
                          name="maximum_power"
                          id="maximum_power"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-max-speed">
                          Maximum Speed
                        </label>
                        <input
                          type="text"
                          name="maximum_speed"
                          id="maximum_speed"
                          onChange={this.isChangeData}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product-data-item">
                    <div className="product-data-title">Exterior</div>
                    <div className="product-data-input-list">
                      <div className="product-data-info">
                        <label htmlFor="product-data-head-light">
                          Head Light
                        </label>
                        <input
                          type="text"
                          name="headlight"
                          id="headlight"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-parking-light">
                          Parking Light
                        </label>
                        <input
                          type="text"
                          name="parking_light"
                          id="parking_light"
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-day-light">
                          Day Light
                        </label>
                        <input
                          type="text"
                          name="daylight"
                          id="daylight"
                          onChange={this.isChangeData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-info btn-add-new"
            onClick={this.handleSubmit}
          >
            Add New
          </button>
        </form>
      </div>
    );
  }
}
