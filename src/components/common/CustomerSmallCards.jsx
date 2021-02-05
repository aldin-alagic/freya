import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPodcast,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

import { SmallCard } from "./SmallCard";

export class CustomerSmallCards extends React.PureComponent {
  render() {
    return (
      <div className="row">
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
    );
  }
}
