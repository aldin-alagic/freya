import React, { Component } from "react";
import Table from "../../common/table";

class OffersTable extends Component {
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
export default OffersTable;
