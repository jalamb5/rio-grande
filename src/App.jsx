import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Cart from './routes/cart';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root products={products} addToCart={addToCart} cart={cart}/>
    },
    {
      path: '/cart',
      element: <Cart cart={cart}/>,
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
