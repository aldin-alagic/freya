import React from "react";
import { NavLink } from "react-router-dom";

const IssueTypeMenu = ({ onClick, active }) => {
  const activeStyle = "btn btn-sm btn-primary col-12";
  const inactiveStyle = "btn btn-sm btn-outline-primary col-12";
  return (
    <div className="row mx-0">
      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 1 ? activeStyle : inactiveStyle}
          onClick={() => onClick(1)}
        >
          Interior
        </button>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 2 ? activeStyle : inactiveStyle}
          onClick={() => onClick(2)}
        >
          Engine
        </button>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 3 ? activeStyle : inactiveStyle}
          onClick={() => onClick(3)}
        >
          Body and Exterior
        </button>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 4 ? activeStyle : inactiveStyle}
          onClick={() => onClick(4)}
        >
          Control and Suspension
        </button>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 5 ? activeStyle : inactiveStyle}
          onClick={() => onClick(5)}
        >
          Driving Support and Security
        </button>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 6 ? activeStyle : inactiveStyle}
          onClick={() => onClick(6)}
        >
          Energy System
        </button>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 7 ? activeStyle : inactiveStyle}
          onClick={() => onClick(7)}
        >
          Sensors
        </button>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 p-1">
        <button
          className={active == 8 ? activeStyle : inactiveStyle}
          onClick={() => onClick(8)}
        >
          Additional Electric Parts
        </button>
      </div>
    </div>
  );
};

export default IssueTypeMenu;
