import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { SolutionCard } from "../../solutionCard/SolutionCard";
import { SearchBox } from "../../../common/form/searchBox/SearchBox";
import { SelectBox } from "../../../common/form/selectBox/SelectBox";
import { loadSolutions } from "./../../../../store/solutions";
import { Spinner } from "./../../../spinner/Spinner";

class Main extends React.Component {
  state = {
    data: {
      publicSolutions: [],
      userSolutions: [],
    },
  };

  componentDidMount() {
    this.props.loadSolutions();
  }

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
        {this.props.loading && <Spinner />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadSolutions: () => dispatch(loadSolutions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
