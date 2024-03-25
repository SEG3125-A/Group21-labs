import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CustomerService from "./components/CustomerService";
import Account from "./components/Account";
import './i18n';


import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/back" element={<ProductList />} />
        <Route path="/service" element={<CustomerService />} />
        <Route path="/account" element={<Account />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
