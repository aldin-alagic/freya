import React from "react";
import Card from "./common/card";
import imgAsk from "../images/questions.svg";
import imgHire from "../images/interview.svg";
import imgSolutions from "../images/solutions.svg";

const HomeCards = () => {
  return (
    <div className="row">
      <Card
        title="Solutions"
        text="Get answers to your issue by searching trough predefined categories. Each solutions has short description with detailed issue description."
        image={imgSolutions}
        imageStyle="card-img-top h-50 p-3"
        url={"/newsletter"}
        button="Find"
        buttonStyle="btn btn-lg btn-outline-primary stretched-link px-5"
      />
      <Card
        title="Ask for help"
        text="Can't find your solution? Just ask our validated experts from all around the world."
        image={imgAsk}
        imageStyle="card-img-top h-50 p-3"
        url={"/newsletter"}
        button="Ask"
        buttonStyle="btn btn-lg btn-outline-primary stretched-link px-5"
      />
      <Card
        title="Hire Expert"
        text="You need extra support? Hire expert per hour or per issue."
        image={imgHire}
        imageStyle="card-img-top h-50 p-3"
        url={"/newsletter"}
        button="Hire"
        buttonStyle="btn btn-lg btn-outline-primary stretched-link px-5"
      />
    </div>
  );
};
export default HomeCards;
