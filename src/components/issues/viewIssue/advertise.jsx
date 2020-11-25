import React, { useState } from "react";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import _ from "lodash";
import AdvertiseTable from "./advertiseTable";

function Advertise() {
  const [options, setOptions] = useState([
    {
      id: 1,
      option: "Standard",
      price: "50 Tokens",
      valid: "25.12.2020.",
      status: "Active",
    },
    {
      id: 2,
      option: "Premium",
      price: "80 Tokens",
      valid: "-",
      status: "Inactive",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortColumn, setSortColumn] = useState({
    path: "expert",
    order: "asc",
  });

  const sorted = _.orderBy(options, [sortColumn.path], [sortColumn.order]);
  const optionsResult = paginate(sorted, currentPage, pageSize);

  return (
    <div>
      <h5 className="text-primary bg-light p-2">Advertise</h5>
      <div className="mt-4 px-3">
        <AdvertiseTable
          options={optionsResult}
          sortColumn={sortColumn}
          onSort={setSortColumn}
        />
        <Pagination
          itemsCount={options.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Advertise;
