import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const handleAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidad(es) de ${item.name}`);
  };

  return (
    <div className="card mb-4">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">Precio: ${item.price}</p>
        <p className="card-text">Categoría: {item.category}</p>

        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
