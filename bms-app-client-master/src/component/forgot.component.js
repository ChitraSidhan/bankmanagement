import React, { Component} from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import BankImageBanner from "../component/Layout/BankImageBanner";

export class Forgot extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
    };

    axios
      .post(`${base_url}/forgot`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <React.Fragment>
        <BankImageBanner />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Forgot Password</h3>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Please enter email address"
                  onChange={(error) => (this.email = error.target.value)}
                />
              </div>

              <button className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
