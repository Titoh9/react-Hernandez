// src/services/products.js
import {
  collection, query, where,
  doc, getDocsFromServer, getDocFromServer
} from "firebase/firestore";
import { db } from "./firebase.js"; 
export async function getProducts(categoryId) {
  const ref = collection(db, "products");
  const q = categoryId ? query(ref, where("category", "==", categoryId)) : ref;
  const snap = await getDocsFromServer(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDocFromServer(ref);    
  if (!snap.exists()) throw new Error("not-found");
  return { id: snap.id, ...snap.data() };
}
