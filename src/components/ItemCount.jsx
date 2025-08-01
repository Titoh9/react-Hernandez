import { useState } from 'react';

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increase = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="d-flex flex-column align-items-start gap-2 mt-3">
      <div className="d-flex gap-2 align-items-center">
        <button className="btn btn-outline-secondary" onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-outline-secondary" onClick={increase}>+</button>
      </div>
      <button className="btn btn-success" onClick={() => onAdd(quantity)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
