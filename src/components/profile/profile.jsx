import React from "react";
import { Redirect, Route } from "react-router-dom";

import { Sidebar } from "./sidebar/Sidebar";
import { Details } from "./details/Details";
import { ChangePassword } from "./changePassword/ChangePassword";

export class Profile extends React.PureComponent {
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
