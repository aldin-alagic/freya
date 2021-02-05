import React from "react";
import { PropTypes } from "prop-types";

import { IssueTypeMenu } from "./IssueTypeMenu";

export class IssueType extends React.Component {
  static propTypes = {
    issueType: PropTypes.string.isRequired,
    onIssueTypeOptionChange: PropTypes.func.isRequired,
  };

  state = {
    issueTypeIndex: -1,
    issueType: null,
  };

  issueTypes = [
    {
      title: "Additional electric parts",
      options: [
        "Various motors",
        "Electric cable",
        "Actuator",
        "Semiconductor",
        "Wire harness",
        "Relay",
        "Hidden switch",
        "Electric connector",
      ],
    },
    {
      title: "Body and exterior",
      options: [
        "Body Reinforcement/protector",
        "Door",
        "Wiper",
        "Outside mirror",
        "Body panel",
        "Weather strip",
        "Frame",
        "Bumper",
        "lamp",
        "Fuel tank",
        "Key set",
        "Rear end module",
        "Pedal",
        "Horn",
        "Gas spring",
      ],
    },
    {
      title: "Control and suspension",
      options: [
        "Axle",
        "Sub brake",
        "Brake by wire",
        "Air brake",
        "Vehicle Dynamic Control system",
        "Weather strip",
        "Frame",
        "Bumper",
        "Lamp",
        "Fuel tank",
        "Key set",
        "Pedal",
      ],
    },
    {
      title: "Driving support and security",
      options: [
        "Telematics, car navigation",
        "Entertainment, audio",
        "Security system",
        "Monitoring system",
        "Cruise control system",
      ],
    },
    {
      title: "Energy system",
      options: [
        "Heather",
        "Air Conditioner",
        "Fuel cell system",
        "Battery/Capacitor",
        "Power control system",
        "Drive train system",
      ],
    },
    {
      title: "Engine",
      options: [
        "Air/Fuel management",
        "Fuel handling and Evapo system",
        "Turbo/Supercharger",
        "Exhaust system",
        "Engine control system",
        "Ignition system",
        "Engine electric system",
        "Diesel injection system",
        "Valvetrain",
        "Engine cooling system",
        "Gasoline fuel injection system",
        "Engine lubricating system",
      ],
    },
    {
      title: "Interior",
      options: [
        "Cockpit module",
        "Instrument switch",
        "Instrument switch",
        "Airbag system",
        "Interior trim",
        "Instrumental panel",
      ],
    },
    {
      title: "Sensors",
      options: [
        "Airbag",
        "ABS",
        "Oil",
        "Fuel",
        "Air",
        "Speed",
        "Gas",
        "Solar",
        "G",
        "Vacuum",
      ],
    },
  ];

  getComponent = (index) => {
    const { issueType } = this.props;
    const issueTypeData = this.issueTypes[index];

    return (
      <IssueTypeCard
        issueType={issueType}
        title={issueTypeData.title}
        options={issueTypeData.options}
        onChange={this.handleChange}
      />
    );
  };
  handleChange = ({ target: input }) => {
    const issueTypeOption = input.value;
    this.props.onIssueTypeOptionChange(issueTypeOption);
    this.setState({ issueTypeOption });
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
          {this.props.issueTypeOption != null ? (
            <span className="text-primary ml-2">
              {this.props.issueTypeOption}
            </span>
          ) : (
            <span className="text-danger ml-2">None</span>
          )}
        </div>
        {issueTypeIndex !== -1 && this.getComponent(issueTypeIndex)}
      </div>
    );
  }
}
