import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import firebase from './Firebase';

import PrimarySearchAppBar from './components/header';
import HeaderDropdown from './components/headerDropdown';

import ProductContext from './Context/ProductContext';
import {CartProvider} from './Context/CartContext';
import Asrouter from './Routes';

export default function App() {
  return (
    <ProductContext>
      <CartProvider>
        <Router>
          <PrimarySearchAppBar />
          <HeaderDropdown />
          <div className="App">
            <Asrouter />
          </div>
        </Router>
      </CartProvider>
    </ProductContext>
  );
}