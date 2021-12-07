import React, { Component } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUserName(e) {
      this.setState({
          username: e.target.value
      });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
      e.preventDefault();
      
      const obj = {
          username: this.state.username,
          password: this.state.password,
      };

      axios.post('http://localhost:3000/api/login', obj)
        .then(res => {
            if(res.data === true){
                Cookies.set('user','loginTrue')
                window.location.reload();
            }else{
                alert(res.data)
            }
        });
        this.setState({
          username: '',
          password: '',
        })
      }

    render() {
      return (
        <div className="login_main">
          <div id="login">
            <img src="./image/Login/user2.png" alt="" className="user_login" />
            <form className="form_login" onSubmit={this.onSubmit}>
                <h1 className="Login_here text-center text-light">Login</h1>
                <div className="form-group">
                    <label className="label_login">Username:</label>
                    <input type="text" onChange={this.onChangeUserName} value={this.state.username} className="form-control" placeholder="Enter username" autoComplete="off" />
                      </div>
                      <div class="form-group">
                          <label className="label_login">Password:</label>
                          <input type="password" onChange={this.onChangePassword} value={this.state.password} className="form-control" placeholder="Enter password" />
                          </div>
                      <button type="submit" className="btn btn-danger" value="Login">Login</button>
                  </form>
              </div>
          </div>
      )
    }
}