import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { Overview } from "../overview/Overview";
import { Menu } from "../menu/Menu";
import { Modal } from "../../../common/modal/Modal";
import { Description } from "../../../common/description/Description";
import { Attachments } from "../../../common/attachments/Attachments";
import { Expert } from "../../../common/expert/Expert";
import { SolutionOffers } from "../../../common/solutionOffers/SolutionOffers";
import { loadSolution } from "../../../../store/solutions";
import { Spinner } from "../../../spinner/Spinner";

class Solution extends React.Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.loadSolution(id);
  }

  render() {
    const { solution, loading } = this.props;

    return loading || solution.id === 0 ? (
      <Spinner />
    ) : (
      <div className="row">
        <div className="col-md-12 col-xl-9">
          <div className="row pl-3 px-md-3 ">
            <h4 className="mr-auto">{solution.title}</h4>
            <div className="text-secondary">
              <span className="m-1">{solution.views} views</span>
            </div>
          </div>
          <hr className="mt-3 mb-0" />
          <Menu likes={0} dislikes={0} />
          <hr className="mt-0 mb-4" />
          <Route
            path={"/solution/:id/overview"}
            render={(props) => (
              <Overview
                {...props}
                vehicles={solution.vehicles}
                fuelType={solution.fuelType}
                transmission={solution.transmission}
                issueTypeOption={solution.issueTypeOption}
                shortDescription={solution.shortDescription}
                longDescription={solution.longDescription}
                parts={solution.parts}
                tools={solution.tools}
                keywords={solution.keywords}
                attachments={solution.attachments}
                expert={solution.expert}
                limited={solution.limited}
                owner={solution.owner}
              />
            )}
          />
          <Route
            path={"/solution/:id/description"}
            render={(props) => (
              <Description
                {...props}
                vehicles={solution.vehicles}
                fuelType={solution.fuelType}
                transmission={solution.transmission}
                issueTypeOption={solution.issueTypeOption}
                shortDescription={solution.shortDescription}
                longDescription={solution.longDescription}
                parts={solution.parts}
                tools={solution.tools}
                keywords={solution.keywords}
                owner={solution.owner}
              />
            )}
          />
          <Route
            path={"/solution/:id/attachments"}
            render={(props) => (
              <Attachments
                {...props}
                attachments={solution.attachments}
                owner={solution.owner}
              />
            )}
          />

          <Route
            path={"/solution/:id/expert"}
            render={(props) => (
              <Expert
                {...props}
                company={solution.expert.company_name}
                country={
                  solution.expert.country
                    ? solution.expert.country
                    : "Not provided"
                }
                memberSince={
                  solution.expert.created_at
                    ? solution.expert.created_at
                    : "Not provided            "
                }
                hourlyRate={
                  solution.expert.hourly_rate
                    ? solution.expert.hourly_rate
                    : "Not provided"
                }
                about={
                  solution.expert.about ? solution.expert.about : "Not provided"
                }
                limited={solution.limited}
              />
            )}
          />
        </div>
        <SolutionOffers offers={solution.offers} />
        <Modal
          id="solution-checkout-modal"
          title="Checkout"
          button="Add to basket"
        >
          <div className="m-2">
            <h6 className="text-justify">
              By confirming below you accept to purchase this solution with your
              tokens.
            </h6>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.entities.solutions.loading,
  solution: state.entities.solutions.solution,
});

const mapDispatchToProps = (dispatch) => ({
  loadSolution: (id) => dispatch(loadSolution(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Solution);
