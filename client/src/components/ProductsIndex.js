import React from 'react';
import ProductSummary from './ProductSummary';
import { getProducts } from '../utilities/requests';

class ProductsIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    getProducts()
      .then(function (products) {
        this.setState({
          products: products.data
        });
      }.bind(this));
  }

  _renderProducts() {
    return this.state.products.map((products) => {
      return <ProductSummary />
    });
  }

  render() {
    return (
      <div className="ProductIndex">
        <h2>Products</h2>
        { this._renderProducts() }
      </div>
    );
  }
};

export default ProductsIndex;