import React, { Component } from "react";
import Interior from "./interior";
import Engine from "./engine";
import BodyExterior from "./bodyExterior";
import ControlSuspension from "./controlSuspension";
import DrivingSupportSecurity from "./drivingSupportSecurity";
import EnergySystem from "./energySystem";
import Sensors from "./sensors";
import AdditionalElectricParts from "./additionalElectricParts";
import IssueTypeMenu from "./issueTypeMenu";

class IssueType extends Component {
  state = {
    issueCategory: null,
    issueType: null,
  };

  getComponent = () => {
    const { issueType } = this.props;
    switch (this.state.issueCategory) {
      case 1:
        return <Interior issueType={issueType} onChange={this.handleChange} />;
      case 2:
        return <Engine issueType={issueType} onChange={this.handleChange} />;
      case 3:
        return (
          <BodyExterior issueType={issueType} onChange={this.handleChange} />
        );
      case 4:
        return (
          <ControlSuspension
            issueType={issueType}
            onChange={this.handleChange}
          />
        );
      case 5:
        return (
          <DrivingSupportSecurity
            issueType={issueType}
            onChange={this.handleChange}
          />
        );
      case 6:
        return (
          <EnergySystem issueType={issueType} onChange={this.handleChange} />
        );
      case 7:
        return <Sensors issueType={issueType} onChange={this.handleChange} />;
      case 8:
        return (
          <AdditionalElectricParts
            issueType={issueType}
            onChange={this.handleChange}
          />
        );
      default:
        break;
    }
  };

  handleChange = ({ target: input }) => {
    const issueType = input.value;
    this.props.onIssueTypeChange(issueType);
    this.setState({ issueType });
  };

  handleClick = (issueCategory) => {
    this.setState({ issueCategory });
  };

  render() {
    return (
      <div className="animate__animated animate__fadeIn">
        <IssueTypeMenu
          onClick={this.handleClick}
          active={this.state.issueCategory}
        />
        <hr className="mt-3 mb-4" />
        <div className="mb-3">
          Selected issue:
          {this.props.issueType != null ? (
            <span className="text-primary ml-2">{this.props.issueType}</span>
          ) : (
            <span className="text-danger ml-2">None</span>
          )}
        </div>
        {this.getComponent()}
      </div>
    );
  }
}
export default IssueType;
