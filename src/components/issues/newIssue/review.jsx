import React, { Fragment } from "react";
import VehicleDescription from "./../../common/vehicleDescription";
import Attachments from "./../../common/attachments";
import SwitchBox from "./../../common/switchBox";

const Review = () => {
  return (
    <Fragment>
      <VehicleDescription />
      <h5 className="text-primary bg-light p-2">Issue type</h5>
      <div className="row justify-content-start px-4 my-3">
        <span className="badge badge-pill badge-secondary px-2 m-1">
          Gear box
        </span>
      </div>
      <div>
        <h5 className="text-primary bg-light p-2">Title</h5>
        <p className="text-justify px-3">Issue for Mercedes C200</p>
      </div>
      <div>
        <h5 className="text-primary bg-light p-2">Description</h5>
        <p className="text-justify px-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          posuere lorem. Sed interdum facilisis ornare. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Fusce nec posuere lorem. Sed
          interdum facilisis ornare. Sed interdum facilisis ornare. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce nec posuere lorem.
          Sed interdum facilisis ornare.
        </p>
      </div>
      <h5 className="text-primary bg-light p-2">Keywords</h5>
      <div className="row justify-content-start px-4 my-3">
        <span className="badge badge-pill badge-secondary px-2 m-1">
          Gear box
        </span>
        <span className="badge badge-pill badge-secondary px-2 m-1">
          Mercedes
        </span>
      </div>
      <Attachments />
      <h5 className="text-primary bg-light p-2">Visibility</h5>
      <div className="row justify-content-start px-4 my-3">
        <SwitchBox name="published" checked="checked" readOnly />
      </div>
    </Fragment>
  );
};

export default Review;
