import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products.js";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setProduct).catch(console.error);
  }, [itemId]);

  if (!product) return <p>Cargando...</p>;
  // ...render detalle
}
