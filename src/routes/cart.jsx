import Navbar from "../components/nav";
import "./cart.css";
export default function Cart({ cart, updateCart }) {
  const cartSum = (items) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return (
    <>
      <Navbar cart={cart} />
      <div className="cartContents">
        {cart.map((item) => (
          <div key={item.id} id={item.id} className="cartItem">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <div className="pricing">
              <p>Quantity: {item.quantity}</p>
              <div className="adjustButtons">
                <button onClick={() => updateCart(item, "remove")}>-</button>
                <button onClick={() => updateCart(item, "add")}>+</button>
              </div>
              <p>${item.price.toFixed(2)} each</p>
            </div>
          </div>
        ))}
        <div className="checkout">
          <p>Total: ${cartSum(cart).toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}
