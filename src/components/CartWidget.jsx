import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CartWidget() {
  const { totalItems } = useCart();
  return (
    <Link to="/cart" className="cart-widget">
      <img src="/cart.svg" alt="Carrito" width="24" height="24" />
      {totalItems > 0 && <span className="badge">{totalItems}</span>}
    </Link>
  );
}
