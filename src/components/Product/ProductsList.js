import React from 'react';
import PropTypes  from 'prop-types';
import ProductItem from './ProductItem';
import { List } from 'antd';

export default function ProductsList({ products }) {

  const emptyMessage = (
    <p>There are no products found</p>
  );

  const productList = (
    <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={products}
        renderItem={product => (
          <ProductItem product={product} />
        )}
      />
  );

  return products.length > 0 ? productList : emptyMessage;  
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
}
