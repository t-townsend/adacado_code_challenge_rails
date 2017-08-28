import React, { Component } from 'react';
import ProductsIndex from './components/ProductsIndex';
import ProductShow from './components/ProductShow';

import './App.css'


const BASE_URL = 'http://localhost:3000/api/v1';

// Step 2: Write a method, getQuestions, to fetch all questions from the Awesome
//         Answers API. It should save the questions that it gets back in the
//         state with this.setState after it's complete.
// Step 3: Write a QuestionsIndex component to render all the questions saved in
//         in the state from the previous step. Best practice to keep in its own
//         file and import it.
// Step 4: Write a getQuestion function to fetch the data for one quesiton, then
//         write a QuestionShow component to display that question


class App extends Component {
  constructor (props) {
   
    super(props);

    this.state = {
      products: null,
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
        }
          questionView
        }
      </div>
    );
  }
}

export default App;