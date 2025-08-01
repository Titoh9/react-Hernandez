import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(productId).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [productId]);

  return (
    <div className="container mt-4">
      {loading ? (
        <p>Cargando producto...</p>
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
