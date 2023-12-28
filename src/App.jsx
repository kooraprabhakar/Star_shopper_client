import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import ShopperAuth from './components/ShopperAuth';
import SellerAuth from './components/SellerAuth';
import MainPage from './components/MainPage';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import SellerMainPage from './components/SellerMainPage';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cartItems.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      // Product already exists, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex] = {
        ...updatedCartItems[existingProductIndex],
        quantity: updatedCartItems[existingProductIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      // Product doesn't exist, add it to the cart
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopperAuth' element={<ShopperAuth />} />
        <Route path='/sellerAuth' element={< SellerAuth />} />
        <Route path='/mainPage' element={< MainPage />} />
        <Route path='/productsPage' element={< ProductsPage addToCart={addToCart} />} />
        <Route path='/cart' element={< Cart cartItems={cartItems} />} />
        <Route path='/sellerMainPage' element={< SellerMainPage />} />
      </Routes>
    </div>

  )
}

export default App
