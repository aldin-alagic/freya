import React from "react";
import { PropTypes } from "prop-types";

import { VehicleDescription } from "../../common/vehicleDescription/VehicleDescription";
import { SwitchBox } from "../../common/form/switchBox/SwitchBox";
import { Attachments } from "../../common/attachments/Attachments";

export class Review extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const {
      brand,
      model,
      year,
      version,
      fuelType,
      transmission,
      issueType,
      title,
      description,
      note,
      published,
    } = this.props.data;

    return (
      <React.Fragment>
        <VehicleDescription
          data={{
            brand: brand.value,
            model: model.value,
            year: year.value,
            version: version.value,
            fuelType,
            transmission,
          }}
        />
        <h5 className="text-primary bg-light p-2">Issue type</h5>
        <div className="row justify-content-start px-4 my-3">
          <span className="badge badge-pill badge-secondary px-2 m-1">
            {issueType}
          </span>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">Title</h5>
          <p className="text-justify px-3">{title}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">Description</h5>
          <p className="text-justify px-3">{description}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">Note</h5>
          <p className="text-justify px-3">{note}</p>
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
          {published ? (
            <SwitchBox name="published" checked="checked" readOnly />
          ) : (
            <SwitchBox name="published" readOnly />
          )}
        </div>
      </React.Fragment>
    );
  }
}
