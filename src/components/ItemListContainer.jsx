import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../data/products';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = categoryId ? getProductsByCategory : getProducts;
    fetch(categoryId).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">{greeting || 'Productos disponibles'}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
