import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ProductsList from './components/ProductsList'
import {connect} from 'react-redux';

class SearchPage extends Component {

  render () {

    return (
      <ProductsList products={this.props.products} />
    )
  }

}



SearchPage.propTypes = {
    products: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}


export default connect(mapStateToProps)(SearchPage)
