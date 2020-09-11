import React from "react";
import SmallCard from "./common/smallCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faChartBar,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

const ExpertSmallCards = () => {
  return (
    <div className="row">
      <div className="col-xl-4 col-sm-6 col-12">
        <SmallCard
          title="Centralized solution"
          text="Easy way to maintain your solution database as an expert."
          icon={
            <FontAwesomeIcon
              className="text-primary"
              icon={faLayerGroup}
              size="2x"
            />
          }
        />
      </div>
      <div className="col-xl-4 col-sm-6 col-12">
        <SmallCard
          title="Analytics dashboard"
          text="Track stats, views, profit, etc. Define your own monthly reports."
          icon={
            <FontAwesomeIcon
              className="text-primary"
              icon={faChartBar}
              size="2x"
            />
          }
        />
      </div>
      <div className="col-xl-4 col-sm-6 col-12">
        <SmallCard
          title="Virtual assistant"
          text="Earn money while you sleep. Platform promotes you and your solutions 24/7."
          icon={
            <FontAwesomeIcon
              className="text-primary"
              icon={faUsersCog}
              size="2x"
            />
          }
        />
      </div>
    </div>
  );
};
export default ExpertSmallCards;
