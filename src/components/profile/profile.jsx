import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Details from "./details";
import ChangePassword from "./changePassword";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="container row">
        <Sidebar />
        <Route path="/profile/details" component={Details} />
        <Route path="/profile/change-password" component={ChangePassword} />
        <Redirect to="/profile/details" />
      </div>
    );
  }
}

export default Profile;
