import React from "react";
import { connect } from "react-redux";

import { SolutionCard } from "../../solutionCard/SolutionCard";
import { SearchBox } from "../../../common/form/searchBox/SearchBox";
import { SelectBox } from "../../../common/form/selectBox/SelectBox";
import {
  loadPublicSolutions,
  loadUserSolutions,
  loadPurchasedSolutions,
} from "./../../../../store/solutions";
import { CardsLoader } from "./../../../common/cardsLoader/CardsLoader";
import { Pagination } from "../../../common/pagination/Pagination";
import { paginate } from "./../../../../utils/paginate";

import { EXPERT } from "../../../../config.json";

class Main extends React.Component {
  state = {
    selectedSolutions: "publicSolutions",
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.props.loadPublicSolutions();
  }

  onSolutionsClick = (e) => {
    const {
      loadPublicSolutions,
      loadUserSolutions,
      loadPurchasedSolutions,
    } = this.props;
    const filterType = e.target.id;

    switch (filterType) {
      case "publicSolutions":
        loadPublicSolutions();
        break;
      case "userSolutions":
        loadUserSolutions();
        break;
      case "purchasedSolutions":
        loadPurchasedSolutions();
        break;
      default:
        break;
    }
    this.setState({ currentPage: 1, selectedSolutions: filterType });
  };

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    const { selectedSolutions, currentPage, pageSize } = this.state;
    const { user, loading } = this.props;

    const solutions = this.props[selectedSolutions];
    const solutionsCount = solutions.length;
    const paginatedSolutions = [...paginate(solutions, currentPage, pageSize)];

    const solutionTypeMenu = (
      <div className="d-flex mb-2">
        <div
          className="col-12 btn-group btn-group-toggle px-0"
          data-toggle="buttons"
        >
          <label className="col-6 btn btn-primary active">
            <input
              type="radio"
              name="solutions"
              id="publicSolutions"
              autoComplete="off"
              checked
              onClick={this.onSolutionsClick}
            />
            All solutions
          </label>
          {user.role === EXPERT && (
            <label className="col-6 btn btn-primary">
              <input
                type="radio"
                name="solutions"
                id="userSolutions"
                autoComplete="off"
                onClick={this.onSolutionsClick}
              />
              My solutions
            </label>
          )}
          <label className="col-6 btn btn-primary">
            <input
              type="radio"
              name="solutions"
              id="purchasedSolutions"
              autoComplete="off"
              onClick={this.onSolutionsClick}
            />
            Purchased solutions
          </label>
        </div>
      </div>
    );

    return (
      <div className="col-md-6 mt-23">
        {user.role && solutionTypeMenu}
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
            {solutionsCount} results
          </span>
        </div>
        {loading ? (
          <CardsLoader />
        ) : (
          paginatedSolutions.map((solution, index) => {
            const {
              title,
              description,
              views,
              keywords,
              offer,
              solution_id,
              expert,
            } = solution;
            return (
              <SolutionCard
                key={index}
                title={title}
                description={description}
                companyName={expert ? expert.company : null}
                expertId={expert ? expert.expert_id : null}
                views={views}
                offer={offer}
                keywords={keywords}
                solutionId={solution_id}
                limited={user.role ? false : true}
              />
            );
          })
        )}
        {solutionsCount > 0 && !loading && (
          <Pagination
            itemsCount={solutionsCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        )}
        {!solutionsCount && !loading && (
          <p className="font-weight-bold text-center m-5">
            No solutions were found
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.entities.solutions.loading,
  publicSolutions: state.entities.solutions.public,
  userSolutions: state.entities.solutions.user,
  purchasedSolutions: state.entities.solutions.purchased,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  loadPublicSolutions: () => dispatch(loadPublicSolutions()),
  loadUserSolutions: () => dispatch(loadUserSolutions()),
  loadPurchasedSolutions: () => dispatch(loadPurchasedSolutions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
