import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./component/Home";
import Nav from "./component/nav.component";
import Login from "./component/login.component";
import Register from "./component/register.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Forgot } from "./component/forgot.component";
import { Reset } from "./component/reset.component";
import axios from "axios";
import base_url from "./api/bootapi";
import UpdateAccountDetails from "./component/UpdateAccountDetails/UpdateAccountDetails";

export default class App extends Component {
  state = {};
  componentDidMount() {
    axios.post(`${base_url}/user`).then(
        res => {
            this.setUser(res.data);
        },
        err => {
            console.log(err)
        }
    )
   };

   
   setUser = user => {
     

    this.setState({
      user: user
  });
  console.log('state',this.state);
   };

  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav user={this.state.user} setUser={this.setUser}/>
          <Switch>
              <Route exact path="/updateAccountDetails" component={UpdateAccountDetails} />
              <Route exact path="/" component={() => <HomeComponent user={this.state.user}/>} />
              <Route exact path="/login" component={() => <Login setUser={this.setUser}/>} />        
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgot" component={Forgot} />
              <Route exact path="/reset/:id" component={Reset} />
          </Switch>
        </div>
    </BrowserRouter>
  );
  }
}

