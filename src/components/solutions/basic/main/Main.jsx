import React from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

import { SolutionCard } from "../../solutionCard/SolutionCard";
import { SearchBox } from "../../../common/form/searchBox/SearchBox";
import { SelectBox } from "../../../common/form/selectBox/SelectBox";
import solutionService from "../../../../services/solutionService";
import userService from "../../../../services/userService";

export class Main extends React.Component {
  state = {
    data: {
      publicSolutions: [],
      userSolutions: [],
    },
  };

  componentDidMount() {
    this.getSolutions();
  }

  getSolutions = async () => {
    const { data: response } = await solutionService.getSolutions();
    if (response.status == 200) {
      toast.success(response.message, { className: "alert-success" });
      const solutions = response.data;
      const data = {
        publicSolutions: solutions.public_solutions,
        userSolutions: solutions.user_solutions,
      };
      this.setState({ data: data });
    } else {
      userService.logout();
      toast.error(response.message, { className: "alert-danger" }); //Dodaj code check ako je unauth, tako da zbog ostalih grešaka ne rad logout
    }
  };

  render() {
    const { publicSolutions, userSolutions } = this.state.data;
    return (
      <div className="col-md-6 mt-23">
        <div className="d-flex mb-2">
          <div className="col-6 p-0">
            <NavLink
              className="btn btn-outline-secondary col-12 selection-left-option"
              to="#"
            >
              All solutions
            </NavLink>
          </div>
          <div className="col-6 p-0">
            <NavLink
              className="btn btn-outline-secondary col-12 selection-right-option"
              to="/home"
            >
              Purchased solutions
            </NavLink>
          </div>
        </div>
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
            {userSolutions.length + publicSolutions.length} results
          </span>
        </div>
        {userSolutions.map((solution) => (
          <SolutionCard
            title={solution.preview_json.title}
            description={solution.preview_json.short_description}
            company={solution.preview_json.user_name}
            offer={solution.preview_json.offer}
            keywords={solution.preview_json.keywords}
            solutionUrl={`/solution/${solution.preview_json.solution_id}/overview`}
          />
        ))}
        {publicSolutions.map((solution) => {
          <SolutionCard
            title={solution.preview_json.title}
            description={solution.preview_json.short_description}
            company={solution.preview_json.user_name}
            offer={solution.preview_json.offer}
            keywords={solution.preview_json.keywords}
          />;
        })}
      </div>
    );
  }
}
