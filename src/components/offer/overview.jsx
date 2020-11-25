import React from "react";
import Message from "./message";
import Expert from "./../common/expert";
import Attachments from "./../common/attachments";
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
