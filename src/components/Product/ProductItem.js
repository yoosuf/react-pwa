import React from 'react';
import PropTypes  from 'prop-types';
import {Avatar, Button, List} from 'antd';


export default function ProductItem({ product }) {


  const descriptionDecorator = (
    <p>
        {product.description} <br />
      by - {product.provider.name}
    </p>

  );
  return (
    <List.Item
      key={product.title}
      actions={[<Button type="primary" icon="shopping-cart">
          Add to cart
        </Button>]}>

      <List.Item.Meta
        avatar = { < Avatar src = {product.attachment.image} />}
        title={product.title}
        description={descriptionDecorator}
      />

      <div>{product.price}</div>
    </List.Item>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}
