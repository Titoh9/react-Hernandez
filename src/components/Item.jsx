import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">${item.price}</p>
          <Link to={`/item/${item.id}`} className="btn btn-primary mt-auto">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
