import React from 'react';
import PropTypes  from 'prop-types';
import {Button } from 'antd';


const ButtonGroup = Button.Group;

export default function CartButtonGroup({ }) {

  return (
    <div>

      <ButtonGroup>
                <Button onClick={this.decline} icon="minus" />
                  <Button disabled>M</Button>
                <Button onClick={this.increase} icon="plus" />
              </ButtonGroup>

    </div>
  );
}

SearchForm.propTypes = {
  products: PropTypes.array.isRequired
}
