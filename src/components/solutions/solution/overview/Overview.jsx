import React from "react";
import { PropTypes } from "prop-types";

import { Description } from "../../../common/description/Description";
import { Attachments } from "../../../common/attachments/Attachments";
import { Expert } from "../../../common/expert/Expert";

export class Overview extends React.PureComponent {
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
    attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
    expert: PropTypes.object.isRequired,
    owner: PropTypes.bool.isRequired,
    limited: PropTypes.bool.isRequired,
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
      attachments,
      expert,
      owner,
      limited,
    } = this.props;

    return (
      <React.Fragment>
        <Description
          vehicles={vehicles}
          fuelType={fuelType}
          transmission={transmission}
          issueTypeOption={issueTypeOption}
          shortDescription={shortDescription}
          longDescription={longDescription}
          parts={parts}
          tools={tools}
          keywords={keywords}
          owner={owner}
        />
        <Attachments attachments={attachments} limited={owner} />
        <Expert
          company={expert.company_name}
          country={expert.country ? expert.country : "Not provided"}
          memberSince={
            expert.created_at ? expert.created_at : "Not provided            "
          }
          hourlyRate={expert.hourly_rate ? expert.hourly_rate : "Not provided"}
          about={expert.about ? expert.about : "Not provided"}
          limited={limited}
        />
      </React.Fragment>
    );
  }
}
