import React from "react";
import IssueCard from "./issueCard";
import SelectBox from "../common/selectBox";
import SearchBox from "../common/searchBox";

const Main = () => {
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
          1 results
        </span>
      </div>
      <IssueCard
        title="Transmission problem"
        description="We were riding down Highway 146 when the engine revved up and there was no power to the wheels. We gilded off the road. The transmission or torque converter was gone. There has been an ACURA Service bulletin 02-027 date 2/05/2008 on 2003 ACURA transmissions. ACURA has established a mileage and time ...."
        user="Marko Grd"
        tags={["Mercedes", "C200", "AMG"]}
        url="/issues/test/"
        views={45}
        offers={3}
      />
    </div>
  );
};

export default Main;
