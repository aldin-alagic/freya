import React from "react";
import { PropTypes } from "prop-types";

import { VehicleDescriptions } from "./../vehicleDescriptions/VehicleDescriptions";
import { IssueSection } from "../product/issueSection/IssueSection";

export class Description extends React.PureComponent {
  static propTypes = {
    vehicle: PropTypes.object.isRequired,
    issue: PropTypes.object.isRequired,
    solution: PropTypes.object,
  };

  static defaultProps = {
    solution: null,
  };

  render() {
    const {
      vehicle,
      issue,
      solution,
    } = this.props;

    const { type, option, description, codes, attachments } = issue;

    return (
      <React.Fragment>
        <VehicleDescriptions
          vehicles={vehicle.vehicles}
          fuelType={vehicle.fuelType}
          transmission={vehicle.transmission}
        />
        <IssueSection 
          type={type}
          option={option}
          description={description}
          codes={codes}
          attachments={attachments}
        />
      </React.Fragment>
    );
  }
}
