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
    fetch(`${BASE_URL}/products`, {mode: 'no-cors'})
    .then(r => r.json())
    .then(({products}) => this.setState({products}))
  }

  getProduct (id) {
    fetch(`${BASE_URL}/products/${id}`, { mode: 'no-cors'})
    .then(r => r.json())
    .then(product => this.setState({ product }))
  }

  postProduct (product) {
    fetch(
      `${BASE_URL}/products`,
      {
        
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({product})
      }
    )
    .then(() => { this.getProducts(); })
    .catch(console.error)
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
          products={this.state.products} />
      );
    }

    return (
      <div className="App">
        <h1>Boardgames!</h1>
        
        {
          productView
        }
      </div>
    );
  }
}


export default App;
