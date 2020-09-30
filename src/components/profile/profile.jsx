import React, { Component } from "react";
import ProfileSidebar from "./profileSidebar";
import ProfileDetails from "./profileDetails";
import ProfileChangePassword from "./profileChangePassword";
import { Redirect, Route } from "react-router-dom";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="container row">
        <ProfileSidebar />
        <Route path="/profile/details" component={ProfileDetails} />
        <Route
          path="/profile/change-password"
          component={ProfileChangePassword}
        />
        <Redirect to="/profile/details" />
      </div>
    );
  }
}

export default Profile;
