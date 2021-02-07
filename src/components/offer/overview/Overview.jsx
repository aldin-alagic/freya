import React from "react";

import { Message } from "../message/Message";
import { Expert } from "../../common/expert/Expert";
import { Attachments } from "../../common/attachments/Attachments";
import { Details } from "../details/Details";

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
