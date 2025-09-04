import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { addDoc, collection, serverTimestamp, writeBatch, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export default function CheckoutForm() {
  const { items, totalPrice, clear } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // 1) Verificar stock y preparar batch para descontar
      const batch = writeBatch(db);
      for (const it of items) {
        const ref = doc(db, "products", it.id);
        const snap = await getDoc(ref);
        const stock = snap.data()?.stock ?? 0;
        if (stock < it.quantity) {
          throw new Error(`Sin stock de ${it.name} (disponible: ${stock})`);
        }
        batch.update(ref, { stock: stock - it.quantity });
      }

      // 2) Crear la orden
      const order = {
        buyer,
        items: items.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
        total: totalPrice,
        createdAt: serverTimestamp(),
      };
      const orderRef = await addDoc(collection(db, "orders"), order);

      // 3) Confirmar actualización de stocks
      await batch.commit();

      // 4) Limpiar y mostrar id
      clear();
      setOrderId(orderRef.id);
    } catch (err) {
      setError(err.message || "Error al generar la orden");
    } finally {
      setSubmitting(false);
    }
  };

  if (orderId) {
    return (
      <div className="center">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es:</p>
        <pre>{orderId}</pre>
      </div>
    );
  }

  if (!items.length) {
    return <div className="center">Carrito vacío</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <h2>Checkout</h2>
      <input placeholder="Nombre" value={buyer.name}
             onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} required />
      <input placeholder="Email" type="email" value={buyer.email}
             onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} required />
      <input placeholder="Teléfono" value={buyer.phone}
             onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })} required />
      <p>Total: <strong>${totalPrice}</strong></p>
      <button type="submit" disabled={submitting}>
        {submitting ? "Procesando..." : "Confirmar compra"}
      </button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </form>
  );
}
