import React, { useState } from "react";
import _ from "lodash";

import { Pagination } from "../../../common/pagination/Pagination";
import { ActivitiesTable } from "./activitiesTable/ActivitiesTable";
import { paginate } from "./../../../../utils/paginate";

export function Activities() {
  const activities = [
    {
      id: 1,
      type: "Created",
      date: "12.05.2020.",
      user: "John Doe",
      price: "-",
    },
    {
      id: 2,
      type: "Offer",
      date: "13.05.2020.",
      user: "Mark Doe",
      price: "120 tokens",
    },
    {
      id: 3,
      type: "Offer",
      date: "15.05.2020.",
      user: "Jane Doe",
      price: "130 tokens",
    },
  ];

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({
    path: "type",
    order: "asc",
  });

  const sorted = _.orderBy(activities, [sortColumn.path], [sortColumn.order]);
  const activitiesResult = paginate(sorted, currentPage, pageSize);

  return (
    <div>
      <h5 className="text-primary bg-light p-2">Activities</h5>
      <div className="mt-4 px-3">
        <ActivitiesTable
          activities={activitiesResult}
          sortColumn={sortColumn}
          onSort={setSortColumn}
        />
        <Pagination
          itemsCount={activities.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
