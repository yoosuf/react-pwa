import React from 'react';
import PropTypes  from 'prop-types';

import {
  Link
} from 'react-router-dom';




export default function ProductItem({ cart }) {

  return (

    <Link to="/checkout">
          Proceed to checkout
    </Link>
  );
}

ProductItem.propTypes = {
  total: PropTypes.string,
  itemCount: PropTypes.string
}
