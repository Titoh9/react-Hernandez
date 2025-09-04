import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/products.js"; 

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then(setProducts).finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando...</p>;
  if (!products.length) return <p>No hay productos</p>;
  // ...render lista
}
