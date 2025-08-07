import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
