import React from "react";

import auth from "../services/userService";

export class Logout extends React.PureComponent {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}
