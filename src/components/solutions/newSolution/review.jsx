import React from "react";
import { PropTypes } from "prop-types";

import { VehicleDescription } from "../../common/VehicleDescription";
import { Attachments } from "./Attachments";
import { SwitchBox } from "../../common/SwitchBox";

export class Review extends React.Component {
  static propTypes = {
    values: PropTypes.object.isRequired,
  };

  render() {
    const {
      brand,
      model,
      year,
      version,
      fuelTypeOption,
      transmission,
      issueType,
      title,
      shortDescription,
      detailedDescription,
      published,
    } = this.props.values;

    return (
      <React.Fragment>
        <VehicleDescription
          values={{
            brand: brand.value,
            model: model.value,
            year: year.value,
            version: version.value,
            fuelTypeOption,
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
          <h5 className="text-primary bg-light p-2">Solution title</h5>
          <p className="text-justify px-3">{title}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">
            Short solution description
          </h5>
          <p className="text-justify px-3">{shortDescription}</p>
        </div>
        <div>
          <h5 className="text-primary bg-light p-2">
            Detailed solution description
          </h5>
          <p className="text-justify px-3">{detailedDescription}</p>
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
