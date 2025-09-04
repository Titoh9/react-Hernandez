import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, totalPrice, removeItem, clear } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h2>Carrito</h2>
        <p>Carrito vacío</p>
        <Link to="/">Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {items.map(it => (
          <li key={it.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <img src={it.image} alt={it.name} width="40" />
            <span>{it.name}</span>
            <span>x {it.quantity}</span>
            <strong>${(it.price ?? 0) * it.quantity}</strong>
            <button onClick={() => removeItem(it.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ${totalPrice}</strong></p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={clear}>Vaciar</button>
        <Link to="/checkout">Ir a checkout</Link>
      </div>
    </div>
  );
}
