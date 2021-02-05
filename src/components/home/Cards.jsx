import React from "react";

import { Card } from "./../common/Card";

import imgAsk from "../../images/questions.svg";
import imgHire from "../../images/interview.svg";
import imgSolutions from "../../images/solutions.svg";

export class Cards extends React.PureComponent {
  render() {
    return (
      <div className="row">
        <Card
          title="Solutions"
          text="Get answers to your issue by searching trough predefined categories. Each solutions has short description with detailed issue description."
          image={imgSolutions}
          url={"/newsletter"}
          button="Find"
        />
        <Card
          title="Ask for help"
          text="Can't find your solution? Just ask our validated experts from all around the world."
          image={imgAsk}
          url={"/newsletter"}
          button="Ask"
        />
        <Card
          title="Hire Expert"
          text="You need extra support? Hire expert per hour or per issue."
          image={imgHire}
          url={"/newsletter"}
          button="Hire"
        />
      </div>
    );
  }
}
