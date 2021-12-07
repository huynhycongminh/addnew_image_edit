import axios from "axios";
import React, { Component } from "react";
import Select from "react-select";

export default class SpecificationsCompare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Trạng thái nút
      buttonState1: true,
      buttonState2: true,
      buttonState3: true,
      buttonState4: true,
      buttonStateModel1: true,
      buttonStateModel2: true,
      cars: [],
      firstCar: null,
      secondCar: null,
      firstCarName: "",
      secondCarName: "",
      imageFirstCar: null,
      imageSecondCar: null,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/get_list_car`)
      .then((data) => {
        this.setState({ cars: data.data });
      })
      .catch((err) => console.log(err));
  }

  renderFirstSelectCar = () => {
    const options = this.state.cars.map((car) => {
      return { value: car._id, label: car.name };
    });
    return (
      <Select
        className="search-select"
        onChange={this.onChangeFirstCar}
        options={options}
      />
    );
  };

  renderSecondSelectCar = () => {
    const options = this.state.cars.map((car) => {
      return { value: car._id, label: car.name };
    });
    return (
      <Select
        className="search-select"
        options={options}
        onChange={this.onChangeSecondCar}
      />
    );
  };

  onChangeFirstCar = (event) => {
    this.handleStatusModal1();
    axios
      .get(`http://localhost:3000/api/select_car`, {
        params: { _id: event.value },
      })
      
      .then((data ) => {
        debugger
        this.setState({
          firstCar: data.data.data[0].car_detail,
          firstCarName: data.data.data[0].name,
          imageFirstCar: data.data.image,
        });
      })
      .catch((err) => console.log(err));
  };

  onChangeSecondCar = (event) => {
    this.handleStatusModal2();
    axios
      .get(`http://localhost:3000/api/select_car`, {
        params: { _id: event.value },
      })
      .then((data) => {
        this.setState({
          secondCar: data.data.data[0].car_detail,
          secondCarName: data.data.data[0].name,
          imageSecondCar: data.data.image,
        });
      })
      .catch((err) => console.log(err));
  };

  handleStatusModal = () => {
    this.setState({
      buttonStateModel1: !this.state.buttonStateModel1,
      buttonStateModel2: !this.state.buttonStateModel2,
    });
  };

  handleStatusModal1 = () => {
    this.setState({
      buttonStateModel1: !this.state.buttonStateModel1,
    });
  };

  handleStatusModal2 = () => {
    this.setState({
      buttonStateModel2: !this.state.buttonStateModel2,
    });
  };

  showButtonImage = () => {
    if (
      this.state.buttonStateModel1 === true &&
      this.state.buttonStateModel2 === true
    ) {
      return (
        <div className="container section">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-6 add-car-compare-icon">
              <div
                onClick={() => {
                  this.handleStatusModal1();
                }}
                className="ButtonImage"
              >
                <img src="./image/carComparison/plusImg.png" alt="Add Car" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6 add-car-compare-icon">
              <div
                onClick={() => {
                  this.handleStatusModal2();
                }}
                className="ButtonImage"
              >
                <img src="./image/carComparison/plusImg.png" alt="Add Car" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      if (this.state.buttonStateModel1 === false) {
        return (
          <div
            onClick={() => {
              this.handleStatusModal1();
            }}
            className="modal-close"
          >
            <i className="fa fa-close" />
          </div>
        );
      }
      if (this.state.buttonStateModel2 === false) {
        return (
          <div
            onClick={() => {
              this.handleStatusModal2();
            }}
            className="modal-close"
          >
            <i className="fa fa-close" />
          </div>
        );
      }
    }
  };

  showModal1 = () => {
    if (this.state.buttonStateModel1 === false) {
      return (
        <div className="modal open">
          <div className="modal-container">
            {this.showButtonImage()}
            <div className="modal-header ">
              <div className="header-text ">SELECT CAR 1 ADD TO COMPARE</div>
            </div>
            <div className="modal-body">{this.renderFirstSelectCar()}</div>
          </div>
        </div>
      );
    }
  };

  showModal2 = () => {
    if (this.state.buttonStateModel2 === false) {
      return (
        <div className="modal open">
          <div className="modal-container">
            {this.showButtonImage()}
            <div className="modal-header ">
              <div className="header-text ">SELECT CAR 2 ADD TO COMPARE</div>
            </div>
            <div className="modal-body">{this.renderSecondSelectCar()}</div>
          </div>
        </div>
      );
    }
  };
  handleStatus1 = () => {
    this.setState({
      buttonState1: !this.state.buttonState1,
    });
  };
  handleStatus2 = () => {
    this.setState({
      buttonState2: !this.state.buttonState2,
    });
  };
  handleStatus3 = () => {
    this.setState({
      buttonState3: !this.state.buttonState3,
    });
  };
  handleStatus4 = () => {
    this.setState({
      buttonState4: !this.state.buttonState4,
    });
  };
  showButtonImage1 = () => {
    return (
      <button
        onClick={() => {
          this.handleStatus1();
        }}
        className="info-detail-heading sub-heading"
      >
        Volume Size
      </button>
    );
  };
  showButtonImage2 = () => {
    return (
      <button
        onClick={() => {
          this.handleStatus2();
        }}
        className="info-detail-heading sub-heading"
      >
        Engine Transmission
      </button>
    );
  };
  showButtonImage3 = () => {
    return (
      <button
        onClick={() => {
          this.handleStatus3();
        }}
        className="info-detail-heading sub-heading"
      >
        Exterior
      </button>
    );
  };
  showButtonImage4 = () => {
    return (
      <button
        onClick={() => {
          this.handleStatus4();
        }}
        className="info-detail-heading sub-heading"
      >
        Furniture
      </button>
    );
  };
  showImage = () => {
    if (this.state.firstCar !== null || this.state.secondCar !== null) {
      return (
        <div className="row d-flex justify-content-around">
          <img
            src={`data:image/png;base64,${this.state.imageFirstCar}`}
            alt="image"
          />
          <img
            src={`data:image/png;base64,${this.state.imageSecondCar}`}
            alt="image"
          />
        </div>
      );
    } else {
      return "";
    }
  };
  showName = () => {
    if (this.state.firstCar !== null || this.state.secondCar !== null) {
      return (
        <div className="row d-flex justify-content-around">
          <h1>{this.state.firstCarName}</h1>
          <h1>{this.state.secondCarName}</h1>
        </div>
      );
    } else {
      return "";
    }
  };
  showForm1 = () => {
    if (this.state.buttonState1 === false) {
      const first_size_volume =
        this.state.firstCar === null ? "" : this.state.firstCar.size_volume;

      const second_size_volume =
        this.state.secondCar === null ? "" : this.state.secondCar.size_volume;

      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Length
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_size_volume !== "" ? `${first_size_volume.length}mm` : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_size_volume !== ""
                ? `${second_size_volume.length}mm`
                : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Width
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_size_volume !== "" ? `${first_size_volume.width}kg` : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_size_volume !== "" ? `${second_size_volume.width}kg` : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Height
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_size_volume !== "" ? `${first_size_volume.height}mm` : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_size_volume !== ""
                ? `${second_size_volume.height}mm`
                : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Standard Long
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_size_volume !== ""
                ? `${first_size_volume.standard_long}mm`
                : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_size_volume !== ""
                ? `${second_size_volume.standard_long}mm`
                : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Weight
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_size_volume !== "" ? `${first_size_volume.weight}kg` : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_size_volume !== ""
                ? `${second_size_volume.weight}kg`
                : ""}
            </label>
          </li>
        </ul>
      );
    } else {
      return "";
    }
  };
  showForm2 = () => {
    if (this.state.buttonState2 === false) {
      const first_engine_transmission =
        this.state.firstCar === null
          ? ""
          : this.state.firstCar.engine_transmission;

      const second_engine_transmission =
        this.state.secondCar === null
          ? ""
          : this.state.secondCar.engine_transmission;

      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Engine
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_engine_transmission !== ""
                ? first_engine_transmission.engine
                : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_engine_transmission !== ""
                ? second_engine_transmission.engine
                : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Transmission
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_engine_transmission !== ""
                ? first_engine_transmission.transmission
                : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_engine_transmission !== ""
                ? second_engine_transmission.transmission
                : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Cylinder Capacity
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_engine_transmission !== ""
                ? `${first_engine_transmission.cylinder_capacity}kg`
                : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_engine_transmission !== ""
                ? `${second_engine_transmission.cylinder_capacity}kg`
                : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Maximum Power
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_engine_transmission !== ""
                ? first_engine_transmission.maximum_power
                : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_engine_transmission !== ""
                ? second_engine_transmission.maximum_power
                : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Maximum Speed
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_engine_transmission !== ""
                ? `${first_engine_transmission.maximum_speed}km/h`
                : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_engine_transmission !== ""
                ? `${second_engine_transmission.maximum_speed}km/h`
                : ""}
            </label>
          </li>
        </ul>
      );
    } else {
      return "";
    }
  };
  showForm3 = () => {
    if (this.state.buttonState3 === false) {
      const first_exterior =
        this.state.firstCar === null ? "" : this.state.firstCar.exterior;

      const second_exterior =
        this.state.secondCar === null ? "" : this.state.secondCar.exterior;

      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Head Light
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_exterior !== "" ? first_exterior.headlight : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_exterior !== "" ? second_exterior.headlight : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Parking Light
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_exterior !== "" ? first_exterior.parking_light : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_exterior !== "" ? second_exterior.parking_light : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Day Light
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_exterior !== "" ? first_exterior.daylight : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_exterior !== "" ? second_exterior.daylight : ""}
            </label>
          </li>
        </ul>
      );
    } else {
      return "";
    }
  };
  showForm4 = () => {
    if (this.state.buttonstate4 === false) {
      const first_furniture =
        this.state.firstCar === null ? "" : this.state.firstCar.furniture;

      const second_furniture =
        this.state.secondCar === null ? "" : this.state.secondCar.furniture;
      return (
        <ul className="info-detail">
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Steering Wheel
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_furniture !== "" ? first_furniture.steering_wheel : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_furniture !== "" ? second_furniture.steering_wheel : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Display
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_furniture !== "" ? first_furniture.display : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_furniture !== "" ? second_furniture.display : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Technology
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_furniture !== "" ? first_furniture.technology : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_furniture !== "" ? second_furniture.technology : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Sound Connect
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_furniture !== "" ? first_furniture.sound_connect : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_furniture !== "" ? second_furniture.sound_connect : ""}
            </label>
          </li>
          <li className="row">
            <label htmlFor className="col-lg-4 col-md-4 col-4 info-detail-name">
              Equipment
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-first"
            >
              {first_furniture !== "" ? first_furniture.equipment : ""}
            </label>
            <label
              htmlFor
              className="col-lg-4 col-md-4 col-4 info-detail-desc-second"
            >
              {second_furniture !== "" ? second_furniture.equipment : ""}
            </label>
          </li>
        </ul>
      );
    } else {
      return "";
    }
  };
  render() {
    return (
      <>
        <div>
          {this.showButtonImage()}
          {/* Info Model */}
          {this.showModal1()}
          {this.showModal2()}
        </div>
        <div>
          <ul className="info-detail-list section container">
            <li className=" mb32">{this.showImage()}</li>
            <li className="mb-32">{this.showName()}</li>
            <li className="info-detail-item mb-32">
              {this.showButtonImage1()}
              {this.showForm1()}
            </li>
            <li className="info-detail-item mb-32">
              {this.showButtonImage2()}
              {this.showForm2()}
            </li>

            <li className="info-detail-item mb-32">
              {this.showButtonImage3()}
              {this.showForm3()}
            </li>
            <li className="info-detail-item mb-32">
              {this.showButtonImage4()}
              {this.showForm4()}
            </li>
          </ul>
        </div>
      </>
    );
  }
}