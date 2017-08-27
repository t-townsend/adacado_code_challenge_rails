import React, { Component } from 'react';
import ProductsIndex from './components/ProductsIndex';

import './App.css'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      to: 'productIndex'
    };

    this.goToProductIndex = this.goToProductIndex.bind(this);
  }


  goToProductIndex () {
    // console.log("test");
    this.setState({
      to: `productIndex`
    })
  }


_renderPath () {
    const [path, id] = this.state.to.split('#');

    // console.log(path);
    return ({
    
      ProductsIndex: (
        <ProductsIndex />
      )
    })[path];
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <h1>Boardgames</h1>
        {this._renderPath()}
      </div>
      </div>
    );
  }
}

export default App;
