import React from "react";
import Select from "./common/select";
import SearchBox from "./searchBox";
import SolutionCard from "./solutionCard";

const FindSolutionMain = () => {
  return (
    <div className="col-md-6">
      <SearchBox />
      <div>
        <span className="text-primary mr-4">0 results</span>
        <span className="mr-4">Order by</span>
        <div className="d-inline-block">
          <Select
            name="sort"
            label=""
            options={[
              { id: 0, text: "Price (from high to low)" },
              { id: 1, text: "Price (from low to high)" },
            ]}
          />
        </div>
      </div>
      <SolutionCard
        title="Transmission problem"
        description="We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ...."
        company="Company XYZ"
        price="250"
        tags={["Mercedes", "C200", "AMG"]}
      />
    </div>
  );
};

export default FindSolutionMain;
