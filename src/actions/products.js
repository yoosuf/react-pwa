import axios from 'axios';

export const QUERY_PRODUCTS = 'QUERY_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';


export function queryProducts(products) {
  return {
    type: QUERY_PRODUCTS,
    products
  }
}

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    products
  }
}

export function searchProduct(productType, query) {
  return dispatch => {
    axios.get(`/api/v1/search`, {
        params: {
          type: productType,
          q: query
        }
      }).then((res) =>  {
        dispatch(queryProducts(res.data))
      }).catch((error) => {
        console.log(error);
      });
  }
}


export function fetchProducts(productType) {
  return dispatch => {
    axios.get(`/api/v1/search`, {
        params: {
          type: productType
          }
      }).then((res) =>  {
        dispatch(setProducts(res.data))
      }).catch((error) => {
        console.log(error);
      });
  }
}
