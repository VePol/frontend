import React from 'react';

const Pagination = ({ totalMovies, page, setPage, pageSize, setPageSize }) => {
  const totalPages = Math.ceil(totalMovies / pageSize);

  return (
    <div className="pagination-container d-flex align-items-center justify-content-between mt-4">
      {/* Previous Button */}
      <button
        className="btn btn-secondary"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      {/* Page Info */}
      <span>
        Page {page} of {totalPages}
      </span>

      {/* Page Size Selector */}
      <select
        className="form-select w-auto"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      {/* Next Button */}
      <button
        className="btn btn-secondary"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
