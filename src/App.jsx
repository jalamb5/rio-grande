import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Cart from "./routes/cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (item) => {
    if (cart.includes(item)) {
      cart.find((element) => element === item).quantity++;
      setCart([...cart]);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  };

  // Find item in cart, return it and the cart without the item
  const findItem = (product) => {
    let changedItem = null;
    let index = 0;
    let newItems = cart;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        changedItem = cart[i];
        index = i;
        newItems = [...cart.slice(0, i), ...cart.slice(i + 1)];
      }
    }
    return [newItems, changedItem, index];
  };

  const updateCart = (product, action) => {
    const [newItems, changedItem, index] = findItem(product);
    changedItem.quantity =
      action === "add" ? changedItem.quantity + 1 : changedItem.quantity - 1;

    // only re-add item if quantity is positive
    if (changedItem.quantity > 0) {
      newItems.splice(index, 0, changedItem);
    }

    let unique = [...new Set(newItems)];

    setCart(unique);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root products={products} addToCart={addToCart} cart={cart} />,
    },
    {
      path: "/cart",
      element: <Cart cart={cart} updateCart={updateCart} />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
