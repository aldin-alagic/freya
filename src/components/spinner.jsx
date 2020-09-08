import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { PuffLoader } from "react-spinners";

const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress === true ? (
    <div className="dim">
      <div className="loader">
        <PuffLoader color={"#007bff"} size={100} />
      </div>
    </div>
  ) : null;
};

export default Spinner;
