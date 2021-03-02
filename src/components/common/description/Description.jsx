import React from "react";
import { PropTypes } from "prop-types";

import { IssueType } from "../issueType/IssueType";
import { DescriptionText } from "./../descriptionText/DescriptionText";
import { ItemList } from "../itemList/ItemList";
import { VehicleDescriptions } from "./../vehicleDescriptions/VehicleDescriptions";

export class Description extends React.PureComponent {
  static propTypes = {
    vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
    fuelType: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    issueTypeOption: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    parts: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    owner: PropTypes.bool,
  };

  static defaultProps = {
    longDescription: null,
  };

  render() {
    const {
      vehicles,
      fuelType,
      transmission,
      issueTypeOption,
      shortDescription,
      longDescription,
      parts,
      tools,
      keywords,
      owner,
    } = this.props;

    return (
      <React.Fragment>
        <VehicleDescriptions
          vehicles={vehicles}
          fuelType={fuelType}
          transmission={transmission}
        />
        <IssueType option={issueTypeOption} />
        <DescriptionText title="Short description" text={shortDescription} />
        {owner && (
          <DescriptionText
            title="Detailed description"
            text={longDescription}
          />
        )}
        <ItemList title="Parts" items={parts} />
        <ItemList title="Tools" items={tools} />
        <ItemList title="Keywords" items={keywords} />
      </React.Fragment>
    );
  }
}
