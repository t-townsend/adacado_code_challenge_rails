import React, { Component } from 'react';
import ProductsIndex from './components/ProductsIndex';
import ProductShow from './components/ProductShow';

import './App.css'


const BASE_URL = 'http://localhost:3000/api/v1';


class App extends Component {
  constructor (props) {
   
    super(props);

    this.state = {
      product: null,
      products: []
    }

   
    this.getProduct = this.getProduct.bind(this);
  }

  getProducts () {
    fetch(`${BASE_URL}/products`)
    .then(r => r.json())
    .then(({products}) => this.setState({products}))
  }

  getProduct (id) {
    fetch(`${BASE_URL}/products`)
    .then(r => r.json())
    .then(product => this.setState({ product }))
  }



  componentDidMount () {
    this.getProducts();
  }

  render() {
    let productView = '';
    if (this.state.product !== null) {
      productView = (
        <ProductShow
          onBackClick={e => {
            e.preventDefault();
            this.setState({product: null});
          }}
          product={this.state.product || {}} />
      );
    } else {
      productView = (
        <ProductsIndex
          onProductClick={this.getProduct}
          products={this.state.products} />
      );
    }

    return (
      <div className="App">
        <h1>Boardgames!</h1>
        
        {/* <ul>
          {
            this.state.products.map(
              product => <li key={product.id}>{product.title}</li>
            )
          }
        </ul> */}
        {
          productView
        }
      </div>
    );
  }
}

export default App;