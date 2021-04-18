import React from "react";
import { PropTypes } from "prop-types";

import { VehicleDescriptions } from "./../../../common/vehicleDescriptions/VehicleDescriptions";
import { IssueSection } from "../../../common/product/issueSection/IssueSection";
import { SolutionSection } from "./../../../common/product/solutionSection/SolutionSection";

export class Overview extends React.PureComponent {
  static propTypes = {
    vehicle: PropTypes.object.isRequired,
    issue: PropTypes.object.isRequired,
    solution: PropTypes.object,
    expert: PropTypes.object,
    extra: PropTypes.object,
    views: PropTypes.number.isRequired,
    owner: PropTypes.bool,
    guest: PropTypes.bool,
  };

  static defaultProps = {
    solution: null,
    expert: null,
    extra: null,
    owner: false,
    guest: false,
  };

  render() {
    const {
      vehicle,
      issue,
      solution,
      expert,
      extra,
      views,
      owner,
      guest,
    } = this.props;

    return (
      <React.Fragment>
        <VehicleDescriptions
          vehicles={vehicle.vehicles}
          fuelType={vehicle.fuelType}
          transmission={vehicle.transmission}
        />
        <IssueSection
          type={issue.type}
          option={issue.option}
          description={issue.description}
          codes={issue.codes}
          attachments={issue.attachments}
        />
        {owner && (
          <SolutionSection
            title={solution.title}
            description={solution.description}
            parts={solution.parts}
            tools={solution.tools}
            attachments={issue.attachments}
          />
        )}
      </React.Fragment>
    );
  }
}
