import React, { Component } from "react";
import axios from "axios";
export default class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      note: "",
      image: null,
      model_id: "",
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
      furniture_id: "",
      engine_id: "",
      size_volume_id: "",
      exterior_id: "",
      detail_id: ""
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/api/get_car_model").then((data) => {
        this.setState({
          car_models: data.data,
        });
      });

    axios
      .get(`http://localhost:3000/api/edit_post/${this.props.match.params.id}`)
      .then((data) => {
          debugger
        this.setState({
          name: data.data.data.name,
          note: data.data.data.node,
          image: data.data.image,
          model_id: data.data.data.car_models._id,
          prices: data.data.data.prices,
          quantity: data.data.data.number,
          headlight: data.data.data.car_detail.exterior.headlight,
          parking_light:
            data.data.data.car_detail.exterior.parking_light,
          daylight: data.data.data.car_detail.exterior.daylight,
          steering_wheel:
            data.data.data.car_detail.furniture.steering_wheel,
          display: data.data.data.car_detail.furniture.display,
          technology: data.data.data.car_detail.furniture.technology,
          sound_connect:
            data.data.data.car_detail.furniture.sound_connect,
          equipment: data.data.data.car_detail.furniture.equipment,
          length: data.data.data.car_detail.size_volume.length,
          width: data.data.data.car_detail.size_volume.width,
          height: data.data.data.car_detail.size_volume.height,
          standard_long:
            data.data.data.car_detail.size_volume.standard_long,
          weight: data.data.data.car_detail.size_volume.weight,
          engine: data.data.data.car_detail.engine_transmission.engine,
          transmission:
            data.data.data.car_detail.engine_transmission.transmission,
          cylinder_capacity:
            data.data.data.car_detail.engine_transmission
              .cylinder_capacity,
          maximum_power:
            data.data.data.car_detail.engine_transmission
              .maximum_power,
          maximum_speed:
            data.data.data.car_detail.engine_transmission
              .maximum_speed,
          furniture_id: data.data.data.car_detail.furniture._id,
          exterior_id: data.data.data.car_detail.exterior._id,
          engine_id: data.data.data.car_detail.engine_transmission._id,
          size_volume_id: data.data.data.car_detail.size_volume._id,
          detail_id: data.data.data.car_detail._id
        });
      });
     
  }

  isChangeData = (event) => {
      debugger
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  //   onChangeImage = (event) => {
  //     var input = event.target;
  //     var fReader = new FileReader();
  //     fReader.readAsDataURL(input.files[0]);
  //     fReader.onloadend = function(event){
  //       debugger
  //         var img = document.getElementById("yourImgTag");
  //         img.src = event.target.result;
  //     }
  //   }

  onSubmit = () => {
    debugger;
    axios
      .put(
        `http://localhost:3000/api/update_post/${this.props.match.params.id}`,
        {
          data: {
            name: this.state.name,
            note: this.state.note,
            model_id: this.state.car_models._id,
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
          },
          ids: {
            model_id: this.state.model_id,
            car_id: this.state,
            furniture_id: this.state.furniture_id,
            size_volume_id: this.state.size_volume_id,
            exterior_id: this.state.exterior_id,
            detail_id: this.state.detail_id,
            engine_id: this.state.engine_id
          },
        }
      )
      .then((data) => {
          console.log("OK")
      });

      alert("Update successfully !!!");
  };

  render() {
    const { car_models } = this.state;
    return (
      <div className="content">
        <div className="heading mb-16">POST MANAGER</div>
        <form method="PUT" className="box-content">
          <div className="sub-heading mb-16">ADD NEW PRODUCT</div>
          <div className="row">
            <div className="col-5">
              <div className="input-info">
                <label htmlFor="product_name">Product name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
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
                  value={this.state.note}
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
                      src={`data:image/png;base64,${this.state.image}`}
                      alt="image"
                      className="card-img"
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
                        name="model_id"
                        id="model_id"
                        onChange={this.isChangeData}
                        value={this.state.model_id}
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
                        value={this.state.prices}
                        onChange={this.isChangeData}
                      />
                    </td>
                    <td className="col-4 td_table">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        value={this.state.quantity}
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
                          value={this.state.length}
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="width">Width</label>
                        <input
                          type="text"
                          name="width"
                          id="width"
                          value={this.state.width}
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-height">Height</label>
                        <input
                          type="text"
                          name="height"
                          id="height"
                          value={this.state.height}
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-long">Standard Long</label>
                        <input
                          type="text"
                          name="standard_long"
                          id="standard_long"
                          value={this.state.standard_long}
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-weight">Weight</label>
                        <input
                          type="text"
                          name="weight"
                          id="weight"
                          value={this.state.weight}
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
                          value={this.state.steering_wheel}
                          onChange={this.isChangeData}
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-display">Display</label>
                        <input
                          type="text"
                          name="display"
                          id="display"
                          value={this.state.display}
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
                          value={this.state.technology}
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
                          value={this.state.sound_connect}
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
                          value={this.state.equipment}
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
                          value={this.state.engine}
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
                          value={this.state.transmission}
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
                          value={this.state.cylinder_capacity}
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
                          value={this.state.maximum_power}
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
                          value={this.state.maximum_speed}
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
                          value={this.state.headlight}
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
                          value={this.state.parking_light}
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
                          value={this.state.daylight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-info btn-add-new"
            onClick={this.onSubmit}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}
