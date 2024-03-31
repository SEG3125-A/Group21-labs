import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';

class App extends React.Component {
  state = {
    products: [
      { id: 1, name: 'Product 1', description: 'This is product 1', price: '$100' },
      { id: 2, name: 'Product 2', description: 'This is product 2', price: '$200' },
      //more products
    ],
    cart: [],
  };

  addToCart = (product) => {
    this.setState({ cart: [...this.state.cart, product] });
  };

  removeFromCart = (productToRemove) => {
    this.setState({ cart: this.state.cart.filter(product => product !== productToRemove) });
  };

  render() {
    return (
      <div>
        <Header />
        <ProductList products={this.state.products} addToCart={this.addToCart} />
        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
      </div>
    );
  }
}

export default App;
