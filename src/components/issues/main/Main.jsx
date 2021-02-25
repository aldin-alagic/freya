import React from "react";
import { connect } from "react-redux";

import { IssueCard } from "../issueCard/IssueCard";
import { SelectBox } from "../../common/form/selectBox/SelectBox";
import { SearchBox } from "../../common/form/searchBox/SearchBox";
import { CardsLoader } from "./../../common/cardsLoader/CardsLoader";
import { loadIssues } from "./../../../store/issues";
import { Menu } from "../menu/Menu";

class Main extends React.Component {
  componentDidMount() {
    this.props.loadIssues();
  }

  render() {
    const { privateIssues, user, loading } = this.props;

    return (
      <div className="col-md-6 mt-23">
        <Menu />
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
            {privateIssues.length} results
          </span>
        </div>
        {loading && <CardsLoader />}
        {privateIssues.map((issue) => {
          const issueData = JSON.parse(issue.detail_json);
          const { title, short_description, keywords, views } = issueData;
          return (
            <IssueCard
              title={title}
              description={short_description}
              user={`${user.firstname} ${user.lastname}`}
              tags={keywords}
              url={`/issues/${issue.issue_id}`}
              views={views ? views : 0} //Some solutions are missing this field in DB so this is a temp fix
              offers={0}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.entities.issues.loading,
  user: state.auth.user,
  publicIssues: state.entities.issues.public,
  privateIssues: state.entities.issues.private,
});

const mapDispatchToProps = (dispatch) => ({
  loadIssues: () => dispatch(loadIssues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
