import Navbar from "../components/nav";
import "./cart.css";

export default function Cart({ cart, updateCart }) {
  const cartSum = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const checkoutAlert = () => {
    const checkoutMsg = document.getElementById("checkoutMessage");
    checkoutMsg.textContent = "Thank you for your purchase!";
  };

  const checkoutBuilder = () => {
    if (cart.length === 0) {
      return <p>Your cart is empty</p>;
    } else {
      return (
        <>
          <p>Total: ${cartSum(cart).toFixed(2)}</p>
          <button
            id="checkoutBtn"
            onClick={() => {
              checkoutAlert();
            }}
          >
            Checkout
          </button>
          <p id="checkoutMessage"></p>
        </>
      );
    }
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
                <button
                  className="remove"
                  onClick={() => updateCart(item, "remove")}
                >
                  -
                </button>
                <button className="add" onClick={() => updateCart(item, "add")}>
                  +
                </button>
              </div>
              <p>${item.price.toFixed(2)} each</p>
            </div>
          </div>
        ))}
        <div className="checkout">{checkoutBuilder()}</div>
      </div>
    </>
  );
}
