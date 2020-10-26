import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={currentPage !== 1 ? "page-item" : "page-item disabled"}>
          <button
            className="btn-lg selection-left-option page-link btn-pagination"
            aria-label="Previous"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button
              className="btn-lg rounded-0 page-link btn-pagination"
              onClick={() => onPageChange(page)}
              href=""
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={
            currentPage !== pagesCount ? "page-item" : "page-item disabled"
          }
        >
          <button
            className="btn-lg selection-right-option page-link btn-pagination"
            aria-label="Next"
            onClick={() => onPageChange(currentPage + 1)}
            href=""
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
