import React from "react";

import { Message } from "./Message";
import { Expert } from "../common/Expert";
import { Attachments } from "../common/Attachments";
import { Details } from "./Details";

export class Overview extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Details />
        <Message />
        <Attachments />
        <Expert />
      </React.Fragment>
    );
  }
}
