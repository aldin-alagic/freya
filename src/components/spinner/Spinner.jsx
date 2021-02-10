import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { PuffLoader } from "react-spinners";

export const Spinner = () => {
  return (
    <div className="dim">
      <div className="loader">
        <PuffLoader color={"#007bff"} size={100} />
      </div>
    </div>
  );
};
