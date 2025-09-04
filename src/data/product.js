const products = [
  {
    id: '1',
    name: 'Notebook Lenovo',
    category: 'tech',
    price: 850,
    image: 'https://placehold.co/200x200?text=Notebook',
  },
  {
    id: '2',
    name: 'A/C Samsung',
    category: 'home',
    price: 1200,
    image: 'https://placehold.co/200x200?text=A%2FC',
  },
  {
    id: '3',
    name: 'Gaming Chair',
    category: 'furniture',
    price: 400,
    image: 'https://placehold.co/200x200?text=Chair',
  },
  {
    id: '4',
    name: 'Smart TV LG',
    category: 'tech',
    price: 1500,
    image: 'https://placehold.co/200x200?text=Smart+TV',
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === id));
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((p) => p.category === category));
    }, 1000);
  });
};