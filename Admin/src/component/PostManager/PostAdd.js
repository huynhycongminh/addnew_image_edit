import React, { Component } from "react";

export default class PostAdd extends Component {
  
  render() {
    return (
      <div className="content">
        <div className="heading mb-16">POST MANAGER</div>
        <div className="box-content">
          <div className="sub-heading mb-16">ADD NEW PRODUCT</div>
          <div className="row">
            <div className="col-5">
              <div className="input-info">
                <label htmlFor="product-name">Product name:</label>
                <input type="text" name="product-name" id="product-name" />
              </div>
              <div className="input-info">
                <label htmlFor="product-desc">Product description:</label>
                <textarea
                  name="product-desc"
                  id="product-desc"
                  cols={30}
                  rows={8}
                  defaultValue={""}
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
                <input type="file" name="product-img" id="product-img" />
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
                        name="product-data-model"
                        id="product-data-model select_table"
                      >
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4 </option>
                        <option>option 5 </option>
                      </select>
                    </td>
                    <td className="col-4 td_table">
                      <input
                        type="number"
                        name="product-data-price"
                        id="product-data-price"
                      />
                    </td>
                    <td className="col-4 td_table">
                      <input
                        type="number"
                        name="product-data-quantity"
                        id="product-data-quantity"
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
                          name="product-data-length"
                          id="product-data-length"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-width">Width</label>
                        <input
                          type="text"
                          name="product-data-width"
                          id="product-data-width"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-height">Height</label>
                        <input
                          type="text"
                          name="product-data-height"
                          id="product-data-height"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-long">Standard Long</label>
                        <input
                          type="text"
                          name="product-data-long"
                          id="product-data-long"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-weight">Weight</label>
                        <input
                          type="text"
                          name="product-data-weight"
                          id="product-data-weight"
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
                          name="product-data-steering-wheel"
                          id="product-data-steering-wheel"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-display">Display</label>
                        <input
                          type="text"
                          name="product-data-display"
                          id="product-data-display"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-technology">
                          Technology
                        </label>
                        <input
                          type="text"
                          name="product-data-technology"
                          id="product-data-technology"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-sound-connect">
                          Sound Connect
                        </label>
                        <input
                          type="text"
                          name="product-data-sound-connect"
                          id="product-data-sound-connect"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-equipment">
                          Equipment
                        </label>
                        <input
                          type="text"
                          name="product-data-equipment"
                          id="product-data-equipment"
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
                          name="product-data-engine"
                          id="product-data-engine"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-transmission">
                          Transmission
                        </label>
                        <input
                          type="text"
                          name="product-data-transmission"
                          id="product-data-transmission"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-cylinder-capacity">
                          Cylinder Capacity
                        </label>
                        <input
                          type="text"
                          name="product-data-cylinder-capacity"
                          id="product-data-cylinder-capacity"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-max-power">
                          Maximum Power
                        </label>
                        <input
                          type="text"
                          name="product-data-max-power"
                          id="product-data-max-power"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-max-speed">
                          Maximum Speed
                        </label>
                        <input
                          type="text"
                          name="product-data-max-speed"
                          id="product-data-max-speed"
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
                          name="product-data-head-light"
                          id="product-data-head-light"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-parking-light">
                          Parking Light
                        </label>
                        <input
                          type="text"
                          name="product-data-parking-light"
                          id="product-data-parking-light"
                        />
                      </div>
                      <div className="product-data-info">
                        <label htmlFor="product-data-day-light">
                          Day Light
                        </label>
                        <input
                          type="text"
                          name="product-data-day-light"
                          id="product-data-day-light"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn btn-info btn-add-new">Add New</div>
        </div>
      </div>
    );
  }
}
