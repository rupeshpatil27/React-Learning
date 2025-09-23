import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange, onPageSizeChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const handlePageSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    onPageSizeChange(newSize);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-between items-center px-5 py-3">
      {/* Page Size Dropdown */}
      <div className="flex items-center">
        <label htmlFor="pageSize" className="mr-2 text-sm">Show</label>
        <select
          id="pageSize"
          value={itemsPerPage}
          onChange={handlePageSizeChange}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <span className="ml-2 text-sm">items per page</span>
      </div>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageClick(currentPage > 1 ? currentPage - 1 : 1)}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
        >
          &lt;
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`p-2 rounded-full ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black'} border border-gray-300 hover:bg-gray-100`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage < totalPages ? currentPage + 1 : totalPages)}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>

      {/* Total Items Information */}
      <div className="text-sm">
        Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} to{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
      </div>
    </div>
  );
};

export default Pagination;
