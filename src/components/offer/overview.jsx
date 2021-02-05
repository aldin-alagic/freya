import React from "react";
import Message from "./message";
import Expert from "../common/Expert";
import Attachments from "../common/Attachments";
import Details from "./details";

const Overview = () => {
  return (
    <div>
      <Details />
      <Message />
      <Attachments />
      <Expert />
    </div>
  );
};

export default Overview;
