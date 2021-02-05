import React from "react";

import { ChangePasswordForm } from "./ChangePasswordForm";

export class ChangePassword extends React.PureComponent {
  render() {
    return (
      <div className="col-md-9">
        <div className="card">
          <div className="card-body">
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    );
  }
}
