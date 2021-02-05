import React from "react";
import { PropTypes } from "prop-types";

import { Table } from "../../common/Table";

export class ActivitiesTable extends React.PureComponent {
  static propTypes = {
    activities: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
  };

  columns = [
    { path: "type", label: "Type" },
    { path: "date", label: "Date" },
    { path: "user", label: "User" },
    { path: "price", label: "Price" },
  ];

  render() {
    const { activities, onSort, sortColumn } = this.props;

    return (
      <div className="m-1">
        <Table
          columns={this.columns}
          data={activities}
          sortColumn={sortColumn}
          onSort={onSort}
          onRowClick={this.handleRowClick}
          baseUrl="/activities/"
        />
      </div>
    );
  }
}
