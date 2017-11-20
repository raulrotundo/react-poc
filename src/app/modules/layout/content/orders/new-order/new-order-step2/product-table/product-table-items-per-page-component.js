import React from 'react';

const ProductTableItemsPerPageComponent = (props) => {
  const { getProducts, itemsPerPageArrayOptions } = props;
  return (
    <div>
      Show &nbsp;
      <select name="showEntries" onChange={event => getProducts({ items_per_page: event.target.value })}>
        {
          itemsPerPageArrayOptions.map(function (item, i) {
            return <option key={i} value={item.value}>{item.label}</option>;
          })
        }
      </select>
      &nbsp; Entries
    </div>
  );
}

export default ProductTableItemsPerPageComponent;
