import React from 'react';

const ProductTableShowEntries = (props) => {
  const { pageNumber, totalPages, totalRows } = props;
  return (
    <div>
      Showing {pageNumber} to {totalPages} of {totalRows} entries
    </div>
  );
}

export default ProductTableShowEntries;
