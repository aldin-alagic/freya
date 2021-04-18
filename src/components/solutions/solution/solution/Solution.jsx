import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { Overview } from "../overview/Overview";
import { Menu } from "../menu/Menu";
import { Modal } from "../../../common/modal/Modal";
import { Expert } from "../../../common/expert/Expert";
import { SolutionOffers } from "../../../common/solutionOffers/SolutionOffers";
import { getSolution } from "../../../../store/solutions";
import { Spinner } from "../../../spinner/Spinner";
import { VehicleDescriptions } from "./../../../common/vehicleDescriptions/VehicleDescriptions";
import { IssueSection } from "./../../../common/product/issueSection/IssueSection";
import { SolutionSection } from "./../../../common/product/solutionSection/SolutionSection";

class Solution extends React.Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.getSolution(id);
  }

  render() {
    const { data, loading } = this.props;
    const {
      vehicle,
      issue,
      solution,
      expert,
      extra,
      views,
      guest,
      owner,
    } = data;

    return loading || solution.id === 0 ? (
      <Spinner />
    ) : (
      <div className="row">
        <div className="col-md-12 col-xl-9">
          <div className="row pl-3 px-md-3 ">
            <h4 className="mr-auto">{solution.title}</h4>
            <div className="text-secondary">
              <span className="m-1">{views} views</span>
            </div>
          </div>
          <hr className="mt-3 mb-0" />
          <Menu owner={owner} guest={guest} />
          <hr className="mt-0 mb-4" />
          <Route
            path={"/solution/:id/overview"}
            render={(props) => (
              <Overview
                {...props}
                vehicle={vehicle}
                issue={issue}
                solution={solution ? solution : null}
                expert={guest ? null : expert}
                extra={owner ? extra : null}
                views={views}
                owner={owner}
                guest={guest}
              />
            )}
          />
          <Route
            path={"/solution/:id/vehicle"}
            render={(props) => (
              <VehicleDescriptions
                {...props}
                vehicles={vehicle.vehicles}
                fuelType={vehicle.fuelType}
                transmission={vehicle.transmission}
              />
            )}
          />
          <Route
            path={"/solution/:id/issue"}
            render={(props) => (
              <IssueSection
                {...props}
                type={issue.type}
                option={issue.option}
                description={issue.description}
                codes={issue.codes}
                attachments={issue.attachments}
              />
            )}
          />
          <Route
            path={"/solution/:id/solution"}
            render={(props) => (
              <SolutionSection
                {...props}
                title={solution.title}
                description={solution.description}
                parts={solution.parts}
                tools={solution.tools}
                attachments={issue.attachments}
              />
            )}
          />
        </div>
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
  data: state.entities.solutions.solution,
});

const mapDispatchToProps = (dispatch) => ({
  getSolution: (id) => dispatch(getSolution(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Solution);
