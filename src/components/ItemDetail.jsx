import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [addedQty, setAddedQty] = useState(0);
  const stock = product?.stock ?? 99; // luego tomará el real desde Firestore

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAddedQty(qty);
  };

  if (!product) return <p>Cargando...</p>;
  if (stock === 0) return <p>Producto sin stock</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      {/* resto del detalle */}
      {addedQty > 0 ? (
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/cart">Ir al carrito</Link>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
}
