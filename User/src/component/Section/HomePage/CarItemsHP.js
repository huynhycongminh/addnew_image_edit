import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import Item from "./Item";
export default class CarItemsHP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }

  chuyenDoiURL = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");
    // return
    return str;
  };

  componentDidMount() {
    axios.get("http://localhost:3000/api/get_image").then((data) => {
      this.setState({
        cars: data.data,
      });
    });
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  renderMultiImage = () => {
    const { cars } = this.state;
    debugger
    return (
      <section className="card-list">
        {cars.map((car) => (
          <NavLink
            to={
              "/Product/" +
              this.chuyenDoiURL(car._doc.files_id.metadata.name) +
              "." +
              car._doc.files_id.metadata._id
            }
            className="card"
          >
            <div className="card-top">
              <img
                src={`data:image/png;base64,${car.base64}`}
                alt="image"
                className="card-img"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{car._doc.files_id.metadata.name}</h3>
            </div>
          </NavLink>
        ))}
      </section>
    );
  };
  render() {
    return <div>{this.renderMultiImage()}</div>;
  }
}
