import axios from "axios";
//import base_url from "../api/bootapi";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import BankImageBanner from "../component/Layout/BankImageBanner";

export default class Login extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password,
      returnSecureToken: true,
    };
    //console.log(data);
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-nsdYAeRIJv5pD2cpaTij0-KHbLO7fR8`,
        data
      )
      .then((response) => {
        console.log(response);

        localStorage.setItem("token", response.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.user);
      })
      .catch((err) => {
        this.setState({
          // message: err.response.data.message
        });
      });
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to={"/"} />;
    }
    let error = "";
    if (this.state.message) {
      error = (
        <div className="alert alert-danger" role="alert">
          {this.state.message}
        </div>
      );
    }
    return (
      <React.Fragment>
        <BankImageBanner />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              {error}
              <h3>Login</h3>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Please enter email address"
                  onChange={(e) => (this.email = e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => (this.password = e.target.value)}
                />
              </div>

              <button className="btn btn-primary btn-block">Login</button>
              <p className="forgot-password text-right">
                <Link to={"/forgot"}>Forgot password?</Link>
              </p>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
