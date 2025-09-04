import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{id,name,price,stock,image,quantity}]

  const addItem = (product, quantity) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === product.id);
      if (i !== -1) {
        const next = [...prev];
        const max = product.stock ?? Infinity;
        const newQty = Math.min(next[i].quantity + quantity, max);
        next[i] = { ...next[i], quantity: newQty };
        return next;
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id));
  const clear = () => setItems([]);

  const totals = useMemo(() => {
    const totalItems = items.reduce((s, it) => s + it.quantity, 0);
    const totalPrice = items.reduce((s, it) => s + it.quantity * (it.price ?? 0), 0);
    return { totalItems, totalPrice };
  }, [items]);

  const value = { items, addItem, removeItem, clear, ...totals };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
