import React, { useState } from "react";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import _ from "lodash";
import ActivitiesTable from "./activitiesTable";

function Activities() {
  const [activities, setActivities] = useState([
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
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
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

export default Activities;
