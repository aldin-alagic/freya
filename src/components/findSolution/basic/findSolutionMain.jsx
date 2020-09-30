import React from "react";
import SolutionCard from "../solutionCard";
import SearchBox from "./../../common/searchBox";
import SelectBox from "./../../common/selectBox";

const FindSolutionMain = () => {
  return (
    <div className="col-md-6 mt-23">
      <SearchBox />
      <div className="row mx-0">
        <div className="col-sm-12 col-md-5 px-0 mr-auto">
          <SelectBox
            name="sort"
            label=""
            placeholder="Filter"
            options={[
              { value: 0, label: "Price (from high to low)" },
              { value: 1, label: "Price (from low to high)" },
            ]}
          />
        </div>
        <span className="text-primary col-sm-12 col-md-2 text-right mb-2 mx-0 px-0">
          2 results
        </span>
      </div>
      <SolutionCard
        title="Transmission problem"
        description="We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ...."
        company="Company XYZ"
        price="250"
        tags={["Mercedes", "C200", "AMG"]}
        solutionUrl="/solution/test/"
      />
      <SolutionCard
        title="Brake problem"
        description="We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ...."
        company="Company ABC"
        price="200"
        tags={["BMW", "M5"]}
        solutionUrl="/solution/test/"
      />
    </div>
  );
};

export default FindSolutionMain;
