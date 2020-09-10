import React from "react";
import SmallCard from "./common/smallCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPodcast,
  faUserFriends,
  faLayerGroup,
  faChartBar,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

const HomeSmallCards = () => {
  return (
    <React.Fragment>
      <div className="row animate__animated animate__fadeInLeft">
        <h3 className="col-12 text-center mb-4">What's great about it?</h3>
        <div className="col-xl-4 col-sm-6 col-12">
          <SmallCard
            title="Validated solutions"
            text="Each solution is validated by field expert or user."
            icon={
              <FontAwesomeIcon
                className="text-primary"
                icon={faCheckCircle}
                size="2x"
              />
            }
          />
        </div>
        <div className="col-xl-4 col-sm-6 col-12">
          <SmallCard
            title="Direct access to experts"
            text="Chance to contact experts from all kinds of professions."
            icon={
              <FontAwesomeIcon
                className="text-primary"
                icon={faPodcast}
                size="2x"
              />
            }
          />
        </div>
        <div className="col-xl-4 col-sm-6 col-12">
          <SmallCard
            title="Guided support by experts"
            text="Remote support by hour or by issue"
            icon={
              <FontAwesomeIcon
                className="text-primary"
                icon={faUserFriends}
                size="2x"
              />
            }
          />
        </div>
      </div>
      <div className="row animate__animated animate__fadeInLeft">
        <h3 className="col-12 text-center my-4">Why should experts us it?</h3>
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
    </React.Fragment>
  );
};
export default HomeSmallCards;
