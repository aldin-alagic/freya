import React from "react";
import { PropTypes } from "prop-types";

import { Table } from "../../../../common/table/Table";

export class OffersTable extends React.PureComponent {
  static propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
  };

  columns = [
    { path: "expert", label: "Expert" },
    { path: "standard", label: "Standard" },
    { path: "premium", label: "Premium" },
    { path: "start", label: "Start date" },
    { path: "days", label: "Days of work" },
    {
      key: "options",
      content: (offer) => (
        <div>
          <button
            onClick={() => this.props.onAccept(offer)}
            className="btn btn-sm btn-success btn-xs m-1"
          >
            Accept
          </button>
          <button
            onClick={() => this.props.onDecline(offer)}
            className="btn btn-sm btn-danger btn-xs m-1"
          >
            Decline
          </button>
        </div>
      ),
      label: "Options",
    },
  ];

  render() {
    const { offers, onSort, sortColumn } = this.props;

    return (
      <div className="m-1">
        <Table
          columns={this.columns}
          data={offers}
          sortColumn={sortColumn}
          onSort={onSort}
          onRowClick={this.handleRowClick}
          baseUrl="/offers/"
        />
      </div>
    );
  }
}
