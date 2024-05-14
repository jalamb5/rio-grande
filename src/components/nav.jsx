import "./nav.css";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  let itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartIcon = '\u{1F6D2}';
  return (
    <header>
      <h1>
        <Link to="/">Rio Grande</Link>
      </h1>
      <Link to="/cart">
        <button id="cart">{cartIcon} {itemCount}</button>
      </Link>
    </header>
  );
}
