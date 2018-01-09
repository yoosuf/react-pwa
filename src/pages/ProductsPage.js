import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';
import { Row, Col } from 'antd';
import {connect} from 'react-redux';
import { searchProduct, fetchProducts } from './../actions/products';
import ProductsList from './../components/Product/ProductsList';
import MiniCart from './../components/Cart/MiniCart';


class ProductsPage extends Component {


  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      productType: 'pharmaceutical',
      products: []
    };
  }



  componentWillMount() {
    const parsed = QueryString.parse(this.props.location.search);
    if(parsed.q) {
      this.setState({searchTerm : parsed.q});
    }

  }

  componentDidMount() {
    const {productType, searchTerm} = this.state;

    if(searchTerm) {
      this.props.searchProduct(productType, searchTerm);
    } else {
      this.props.fetchProducts(this.state.productType);
    }
  }


  handleSearchInputChange(e) {
    this.setState({searchTerm: e.target.value });
  }

  handleSeachQuery(e) {
    e.preventDefault();

    const {searchTerm} = this.state;

    this.props.history.push({
      pathname: '/products',
      search: `?q=${searchTerm}`
    })

    this.props.searchProduct(this.state.productType, searchTerm);
  }

  render() {
    return (
      <div className="App">
        <h1>Product List</h1>



          <Row>
            <Col span={18}>
              <form onSubmit={this.handleSeachQuery.bind(this)}>

                <input type="search" id="q" name="q"
                  value={this.state.searchTerm}
                  onChange={this.handleSearchInputChange.bind(this)} />

                <input type="submit" />
              </form>
            </Col>
            <Col span={6}>
              <MiniCart />
            </Col>
          </Row>
          <Row>
            <Col span={18}>
              <ProductsList products={this.props.products} />
            </Col>
            <Col span={6}>
              cart
            </Col>
          </Row>

      </div>
    );
  }
}

ProductsPage.propTypes = {
  searchTerm: PropTypes.string,
  productType:  PropTypes.string,
  products: PropTypes.array.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  searchProduct: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {searchProduct, fetchProducts})(ProductsPage);
