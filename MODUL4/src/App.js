
import React, { Component } from 'react';  
import './App.css';
import Product from './product'; 

class App extends Component {
  render() {
    return (
      <div className="products">
        <Product title="Electric kettle Bosch" price="4990" />
        <Product title="Chinese Milk Oolong" price="258" />
      </div>
    );
  }
}

export default App;
