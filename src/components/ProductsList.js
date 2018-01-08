import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ProductsList = ({ products }) => {

  const emptyMessage = (
    <p>There are no products.</p>
  );

  const productList = (
    <p>Product :).</p>
  );

  return (
    <div>
      {products}
    </div>
  );
}


ProductsList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductsList;
